import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const Input = z.object({
  issueId: z.number(),
  title: z.string(),
  primary: z.string(),
  cf: z.string(),
  scenario: z.string(),
  model: z.string(),
  fields: z.object({
    phenomenon: z.string(),
    relevance: z.string(),
    faithful: z.string(),
    enhancing: z.string(),
    decisive: z.string(),
  }),
});

export type AiGrade = {
  ok: true;
  total: number;
  qcCorrect: boolean;
  scores: {
    phenomenon: number;
    relevance: number;
    faithful: number;
    enhancing: number;
    decisive: number;
  };
  feedback: string;
  missed: string[];
};

export const scoreEssayWithAi = createServerFn({ method: "POST" })
  .validator((d: unknown) => Input.parse(d))
  .handler(async ({ data }): Promise<AiGrade | { ok: false; error: string }> => {
    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) return { ok: false, error: "AI is not available" };

    const system = `Bạn là giám khảo Conceptual Framework 2018, Chương 2. Chấm bài tự luận tiếng Việt.
Trả JSON thuần, không markdown:
{"total":0-100,"qcCorrect":boolean,"scores":{"phenomenon":0-20,"relevance":0-20,"faithful":0-20,"enhancing":0-15,"decisive":0-25},"feedback":"3-6 câu tiếng Việt","missed":["..."]}
Quy tắc: QC quyết định phải đúng mới cho điểm decisive cao. Không thưởng liệt kê mọi QC. Áp dụng vào sự kiện cụ thể.`;

    const user = `Issue ${data.issueId}: ${data.title}
QC gợi ý: ${data.primary} (${data.cf})
Tình huống: ${data.scenario}
Đáp án mẫu: ${data.model}
Bài làm:
1. Hiện tượng: ${data.fields.phenomenon}
2. Relevance: ${data.fields.relevance}
3. Faithful representation: ${data.fields.faithful}
4. Enhancing + cost: ${data.fields.enhancing}
5. QC quyết định + khuyến nghị: ${data.fields.decisive}`;

    let res: Response;
    try {
      res = await fetch("https://api.x.ai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        signal: AbortSignal.timeout(12_000),
        body: JSON.stringify({
          model: "grok-4.5",
          max_tokens: 700,
          temperature: 0.2,
          response_format: { type: "json_object" },
          messages: [
            { role: "system", content: system },
            { role: "user", content: user },
          ],
        }),
      });
    } catch {
      return { ok: false, error: "AI timeout" };
    }
    if (!res.ok) return { ok: false, error: `xAI API error ${res.status}` };
    const body = (await res.json()) as {
      choices: { message: { content: string } }[];
    };
    const raw = body.choices[0]?.message.content ?? "";
    const start = raw.indexOf("{");
    const end = raw.lastIndexOf("}");
    const jsonText = start >= 0 && end > start ? raw.slice(start, end + 1) : raw;
    try {
      const parsed = JSON.parse(jsonText) as Omit<AiGrade, "ok">;
      const total = Math.max(0, Math.min(100, Number(parsed.total) || 0));
      return {
        ok: true,
        total,
        qcCorrect: Boolean(parsed.qcCorrect),
        scores: {
          phenomenon: Number(parsed.scores?.phenomenon) || 0,
          relevance: Number(parsed.scores?.relevance) || 0,
          faithful: Number(parsed.scores?.faithful) || 0,
          enhancing: Number(parsed.scores?.enhancing) || 0,
          decisive: Number(parsed.scores?.decisive) || 0,
        },
        feedback: String(parsed.feedback ?? ""),
        missed: Array.isArray(parsed.missed) ? parsed.missed.map(String) : [],
      };
    } catch {
      return { ok: false, error: "Không đọc được điểm từ AI" };
    }
  });
