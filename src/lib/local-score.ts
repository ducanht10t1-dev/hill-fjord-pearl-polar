import type { Issue } from "@/data/issues";
import type { EssayFields, EssayGrade } from "@/store/progress";

function norm(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function hitScore(text: string, keys: string[]) {
  const n = norm(text);
  if (!n.trim()) return 0;
  const hits = keys.filter((k) => n.includes(norm(k))).length;
  return Math.min(1, hits / Math.max(2, Math.ceil(keys.length * 0.4)));
}

function lengthScore(text: string) {
  const t = text.trim();
  if (t.length < 40) return 0.15;
  if (t.length < 90) return 0.5;
  if (t.length < 180) return 0.8;
  return 1;
}

export function localScoreEssay(issue: Issue, fields: EssayFields): EssayGrade {
  const all = Object.values(fields).join("\n");
  const qcHit =
    norm(all).includes(norm(issue.primaryKey)) ||
    norm(fields.decisive).includes(norm(issue.primary.split("—")[0] ?? ""));

  const phenomenon = Math.round(
    20 *
      (0.45 * lengthScore(fields.phenomenon) +
        0.55 * hitScore(fields.phenomenon, issue.keywords)),
  );
  const relevance = Math.round(
    20 *
      (0.5 * lengthScore(fields.relevance) +
        0.5 *
          hitScore(fields.relevance, [
            "relevant",
            "thich hop",
            "predictive",
            "du doan",
            "confirmatory",
            "xac nhan",
            "material",
            "trong yeu",
            "thuyet minh",
            "ghi nhan",
          ])),
  );
  const faithful = Math.round(
    20 *
      (0.5 * lengthScore(fields.faithful) +
        0.5 *
          hitScore(fields.faithful, [
            "faithful",
            "trung thuc",
            "complete",
            "day du",
            "neutral",
            "trung lap",
            "error",
            "sai sot",
            "substance",
            "ban chat",
            "prudence",
            "than trong",
          ])),
  );
  const enhancing = Math.round(
    15 *
      (0.5 * lengthScore(fields.enhancing) +
        0.5 *
          hitScore(fields.enhancing, [
            "comparab",
            "so sanh",
            "verif",
            "kiem chung",
            "timely",
            "kip thoi",
            "understand",
            "de hieu",
            "cost",
            "chi phi",
          ])),
  );
  const decisive = Math.round(
    25 *
      (0.35 * lengthScore(fields.decisive) +
        0.65 * (qcHit ? 1 : hitScore(fields.decisive, issue.keywords))),
  );

  const scores = { phenomenon, relevance, faithful, enhancing, decisive };
  const total = Math.max(
    0,
    Math.min(100, phenomenon + relevance + faithful + enhancing + decisive),
  );

  const missed: string[] = [];
  if (!qcHit) missed.push(`Đặc tính quyết định gợi ý: ${issue.primary} (${issue.cf}).`);
  if (fields.phenomenon.trim().length < 40)
    missed.push("Mô tả hiện tượng kinh tế còn ngắn — tách hình thức pháp lý khỏi bản chất.");
  if (fields.decisive.trim().length < 40)
    missed.push("Chưa nêu rõ khuyến nghị ghi nhận / thuyết minh.");

  const feedback = qcHit
    ? `Bạn đã chạm đặc tính quyết định. Đối chiếu mô hình: ${issue.model.slice(0, 280)}…`
    : `Đặc tính quyết định chưa khớp gợi ý. ${issue.model.slice(0, 280)}…`;

  return { total, qcCorrect: qcHit, scores, feedback, missed, source: "local" };
}
