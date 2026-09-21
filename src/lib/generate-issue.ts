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
Soạn MỘT issue luyện tập hoàn toàn bằng tiếng Việt, dịch sát nghĩa thuật ngữ kế toán (giữ tiếng Anh trong ngoặc: carrying amount, legal title, authorised for issue, arm's length, going concern).
Trả JSON thuần, không markdown:
{"title":"...","company":"...","difficulty":"Khó","primary":"...","cf":"...","distractors":["...","...","...","..."],"keywords":["..."],"scenario":"...","model":"..."}
Quy tắc BẮT BUỘC:
- scenario 350–500 từ, MỘT đoạn dày (không gạch đầu dòng), dài tương đương đề thi: số liệu (triệu CU, ngày, %), công ty hư cấu, email nội bộ, giao dịch phụ khác bản chất, biên bản ủy ban kiểm toán.
- TRÊN ĐỀ (title + scenario) CẤM viết tên bất kỳ đặc tính định tính nào (không Relevance, Materiality, Faithful representation, Completeness, Neutrality, Comparability, Verifiability, Timeliness, Understandability, Cost constraint, Prudence, không “đặc tính quyết định”). Chỉ bối cảnh kinh tế, số liệu, lập luận ban quản trị bằng lý do kinh doanh (covenant, thưởng, guidance, hình thức pháp lý).
- primary và distractors nằm NGOÀI đề, dùng để chấm; primary đúng đặc tính được giao.
- đúng 4 distractors plausibly gần nhưng không đúng.
- đáp án mẫu 90–160 từ: nêu QC quyết định, neo đoạn CF và IFRS 18, chỉ ra nhiễu, khuyến nghị ghi nhận/thuyết minh.
- Không trùng tiêu đề đã có.`;

    const user = `Đặc tính quyết định BẮT BUỘC: ${qc.label}
primaryKey: ${qc.key}
cf: ${qc.cf}
Gợi ý học thuật: ${qc.hint}
Mã đề: ${data.id}
Tiêu đề cần tránh: ${data.existingTitles.slice(0, 40).join(" | ") || "(không)"}
Viết tình huống MỚI, khác hẳn các đề luyện sẵn. Đoạn DÀI như đề thi (350–500 từ). CẤM ghi tên đặc tính trên đề — chỉ bối cảnh, số, email, giao dịch phụ. Dịch sát nghĩa, giữ số/ngày/trích dẫn.`;

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
