import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import type { Issue } from "@/data/issues";
import { stripQcFromStem } from "@/lib/stem";

export function IssueBody({ issue, compact }: { issue: Issue; compact?: boolean }) {
  const [open, setOpen] = useState(!compact);
  const title = stripQcFromStem(issue.title);
  const scenario = stripQcFromStem(issue.scenario);

  useEffect(() => {
    setOpen(!compact);
  }, [compact, issue.id]);

  return (
    <article className="rounded-xl border border-line bg-surface p-5 sm:p-6">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <Badge tone="navy">Đề {String(issue.id).padStart(2, "0")}</Badge>
        {issue.generated ? <Badge tone="ok">Tự tạo</Badge> : null}
        <span className="text-sm text-muted">{issue.company}</span>
      </div>
      <h1 className="mb-4 font-display text-2xl font-semibold text-navy">{title}</h1>
      {open ? (
        <p className="text-base leading-relaxed text-pretty text-ink">{scenario}</p>
      ) : (
        <p className="line-clamp-3 text-base leading-relaxed text-pretty text-muted">{scenario}</p>
      )}
      {compact ? (
        <button
          type="button"
          className="mt-3 text-sm text-navy underline-offset-4 hover:underline"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Thu gọn đề" : "Xem đầy đủ đề"}
        </button>
      ) : null}
    </article>
  );
}

export const REQUIRED = [
  "Đọc bối cảnh. Tự xác định vấn đề trình bày / ghi nhận.",
  "Chọn đáp án sau khi đã phân tích. Tên đặc tính không xuất hiện trên đề.",
  "Sau khi nộp mới có giải thích Conceptual Framework 2018 và IFRS 18.",
];