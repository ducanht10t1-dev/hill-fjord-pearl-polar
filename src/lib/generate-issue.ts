import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { QC, fourDistractors, pickRandomQc, type QcDef } from "@/data/qc";
import type { Issue } from "@/data/issues";
import { generateLocalIssue } from "@/lib/local-generate";
import { stripQcFromStem, thickenStem } from "@/lib/stem";

const Input = z.object({
  id: z.number().int().min(31).max(200),
  seed: z.number(),
  excludeKey: z.string().optional(),
  qcKey: z.string().optional(),
  existingTitles: z.array(z.string()).max(80),
});

export type GenerateResult =
  | { ok: true; issue: Issue; source: "ai" | "local" }
  | { ok: false; error: string };

function resolveQc(key?: string, exclude?: string): QcDef {
  if (key) {
    const found = QC.find((q) => q.key === key);
    if (found) return found;
  }
  return pickRandomQc(exclude);
}

function parseIssueJson(raw: string, fallback: Issue, qc: QcDef): Issue | null {
  const start = raw.indexOf("{");
  const end = raw.lastIndexOf("}");
  if (start < 0 || end <= start) return null;
  try {
    const p = JSON.parse(raw.slice(start, end + 1)) as Partial<Issue>;
    const title = String(p.title ?? "").trim();
    const scenario = String(p.scenario ?? "").trim();
    const model = String(p.model ?? "").trim();
    if (title.length < 8 || scenario.length < 900 || model.length < 40) return null;
    const primary = String(p.primary ?? qc.label).trim() || qc.label;
    const distractors = Array.isArray(p.distractors)
      ? p.distractors.map(String).filter((d) => d && d !== primary).slice(0, 4)
      : [];
    while (distractors.length < 4) {
      for (const d of fourDistractors(primary, Math.random, qc.key)) {
        if (!distractors.includes(d) && d !== primary) distractors.push(d);
        if (distractors.length >= 4) break;
      }
    }
    const keywords = Array.isArray(p.keywords)
      ? p.keywords.map(String).slice(0, 12)
      : fallback.keywords;
    const rng = () => Math.random();
    const yMatch = scenario.match(/20X[0-9]/);
    const cleaned = thickenStem(
      rng,
      stripQcFromStem(scenario),
      String(p.company ?? fallback.company),
      yMatch?.[0] ?? "20X6",
      "đối tác tài chính",
    );
    return {
      id: fallback.id,
      title: stripQcFromStem(title),
      company: String(p.company ?? fallback.company).trim() || fallback.company,
      difficulty: String(p.difficulty ?? "Khó"),
      primary,
      primaryKey: qc.key,
      cf: String(p.cf ?? qc.cf),
      distractors: distractors.slice(0, 4),
      keywords: keywords.length ? keywords : fallback.keywords,
      scenario: cleaned,
      model,
      explain: fallback.explain,
      generated: true,
    };
  } catch {
    return null;
  }
}

export const generateRandomIssue = createServerFn({ method: "POST" })
  .validator((d: unknown) => Input.parse(d))
  .handler(async ({ data }): Promise<GenerateResult> => {
    const qc = resolveQc(data.qcKey, data.excludeKey);
    const local = generateLocalIssue({
      id: data.id,
      seed: data.seed,
      excludeKey: data.excludeKey,
      qc,
    });

    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) return { ok: true, issue: local, source: "local" };

    const system = `Bạn là giảng viên Conceptual Framework 2018, Chương 2.
Soạn MỘT issue luyện tập hoàn toàn bằng tiếng Việt. Văn phong phải tự nhiên như đề thi được biên soạn trực tiếp bằng tiếng Việt, KHÔNG có cảm giác dịch máy. Giữ tiếng Anh trong ngoặc cho thuật ngữ kế toán quan trọng (carrying amount, legal title, authorised for issue, arm's length, going concern).
Trả JSON thuần, không markdown:
{"title":"...","company":"...","difficulty":"Khó","primary":"...","cf":"...","distractors":["...","...","...","..."],"keywords":["..."],"scenario":"...","model":"..."}
Quy tắc BẮT BUỘC:
- scenario 350–500 từ, vẫn phải NHIỄU và khó về mặt suy luận. Nhiễu đến từ dữ kiện, email, động cơ management, giao dịch phụ, lập luận sai và các đặc tính khác có vẻ liên quan — KHÔNG được làm khó bằng câu tiếng Việt lủng củng.
- Viết scenario thành 8–14 câu có cấu trúc rõ: (1) bối cảnh và ngày báo cáo; (2) giao dịch/sự kiện chính; (3) cách management xử lý; (4) 3–5 lập luận gây nhiễu; (5) 1–2 chi tiết phụ khác bản chất; (6) email/biên bản làm lộ động cơ nếu phù hợp. Có thể dùng nhiều câu trong cùng một đoạn, nhưng mỗi câu nên có một ý chính.
- Ưu tiên câu chủ động, chủ ngữ rõ ràng. Tránh câu quá dài có hơn 3 mệnh đề. Khi chuyển sang ý mới, hãy bắt đầu câu mới thay vì nối liên tục bằng “và”, “còn”, “vì vậy”.
- KHÔNG dùng các cụm dịch máy/lủng củng như “mút trên/mút dưới”, “đẩy provision”, “book số”, “user rối”, “ship”, “guidance” nếu có thể viết tự nhiên bằng tiếng Việt. Dùng “mức cao nhất/mức thấp nhất”, “ghi nhận khoản dự phòng”, “người sử dụng”, “phát hành”, “mục tiêu lợi nhuận”.
- Trên đề (title + scenario) CẤM viết tên bất kỳ đặc tính định tính nào: không Relevance, Materiality, Faithful representation, Completeness, Neutrality, Comparability, Verifiability, Timeliness, Understandability, Cost constraint, Prudence, không “đặc tính quyết định”. Chỉ đưa bối cảnh, số liệu và lập luận kinh doanh của management.
- primary và distractors nằm NGOÀI đề, dùng để chấm; primary đúng đặc tính được giao.
- Đúng 4 distractors plausibly gần nhưng không đúng.
- Email nội bộ có thể ngắn, tự nhiên, giống email thật; không biến thành khẩu hiệu.
- Đáp án mẫu 90–160 từ: nêu QC quyết định, neo đoạn CF và IFRS liên quan, chỉ ra nhiễu, kết luận xử lý ghi nhận/thuyết minh.
- Không trùng tiêu đề đã có.`;

    const user = `Đặc tính quyết định BẮT BUỘC: ${qc.label}
primaryKey: ${qc.key}
cf: ${qc.cf}
Gợi ý học thuật: ${qc.hint}
Mã đề: ${data.id}
Tiêu đề cần tránh: ${data.existingTitles.slice(0, 40).join(" | ") || "(không)"}
Viết tình huống MỚI, khác hẳn các đề luyện sẵn. Giữ độ nhiễu cao nhưng ưu tiên khả năng đọc hiểu. Đề phải có tình huống kinh tế rõ ràng, câu văn tự nhiên, các lập luận sai được tách thành câu riêng. CẤM ghi tên đặc tính trên đề.`;

    try {
      const res = await fetch("https://api.x.ai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        signal: AbortSignal.timeout(8_000),
        body: JSON.stringify({
          model: "grok-4.5",
          max_tokens: 3500,
          temperature: 0.9,
          response_format: { type: "json_object" },
          messages: [
            { role: "system", content: system },
            { role: "user", content: user },
          ],
        }),
      });
      if (!res.ok) return { ok: true, issue: local, source: "local" };
      const body = (await res.json()) as {
        choices: { message: { content: string } }[];
      };
      const parsed = parseIssueJson(body.choices[0]?.message.content ?? "", local, qc);
      if (!parsed) return { ok: true, issue: local, source: "local" };
      return { ok: true, issue: parsed, source: "ai" };
    } catch {
      return { ok: true, issue: local, source: "local" };
    }
  });
