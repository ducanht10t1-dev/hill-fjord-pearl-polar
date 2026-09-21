import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { GenerateIssueButton } from "@/components/GenerateIssueButton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useAllIssues } from "@/data/catalog";
import { ISSUES } from "@/data/issues";
import { stripQcFromStem } from "@/lib/stem";
import { useProgress } from "@/store/progress";

export const Route = createFileRoute("/bank")({ component: Bank });

function Bank() {
  const mcq = useProgress((s) => s.mcq);
  const extras = useProgress((s) => s.extras);
  const removeExtra = useProgress((s) => s.removeExtra);
  const clearExtras = useProgress((s) => s.clearExtras);
  const issues = useAllIssues();

  return (
    <AppShell>
      <h1 className="mb-2 font-display text-3xl font-semibold text-navy">Ngân hàng đề</h1>
      <p className="mb-6 max-w-2xl text-sm text-muted">
        {ISSUES.length} đề gốc bằng tiếng Việt, cộng đề tự tạo. Trên đề chỉ có bối cảnh; nộp xong
        mới đọc giải thích Conceptual Framework 2018 và IFRS 18.
      </p>

      <section className="mb-8 rounded-xl border border-line bg-surface p-5">
        <h2 className="mb-1 font-display text-lg font-semibold">Tạo thêm đề</h2>
        <p className="mb-4 text-sm text-muted">
          Mỗi lần bấm soạn một case dài như đề gốc, không ghi tên đặc tính trên đề.
        </p>
        <GenerateIssueButton />
      </section>

      <ol className="grid gap-3">
        {issues.map((issue) => {
          const m = mcq[issue.id];
          return (
            <li
              key={issue.id}
              className="rounded-lg border border-line bg-surface p-4 sm:flex sm:items-start sm:justify-between sm:gap-4"
            >
              <div>
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-medium text-muted">
                    {String(issue.id).padStart(2, "0")}
                  </span>
                  <h2 className="font-display text-lg font-semibold">
                    {stripQcFromStem(issue.title)}
                  </h2>
                  {issue.generated ? <Badge tone="ok">Tự tạo</Badge> : null}
                </div>
                <p className="text-sm text-muted">{issue.company}</p>
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-2 sm:mt-0">
                {m ? (
                  <Badge tone={m.correct ? "ok" : "warn"}>{m.correct ? "Đúng" : "Sai"}</Badge>
                ) : null}
                <Link
                  to="/mcq/$id"
                  params={{ id: String(issue.id) }}
                  className="rounded-sm px-3 py-2 text-sm text-navy underline-offset-4 hover:underline"
                >
                  Làm bài
                </Link>
                {issue.generated ? (
                  <button
                    type="button"
                    className="rounded-sm px-3 py-2 text-sm text-warn underline-offset-4 hover:underline"
                    onClick={() => {
                      if (window.confirm(`Xóa đề ${issue.id}. ${issue.title}?`)) {
                        removeExtra(issue.id);
                      }
                    }}
                  >
                    Xóa
                  </button>
                ) : null}
              </div>
            </li>
          );
        })}
      </ol>

      {extras.length ? (
        <Button
          className="mt-6"
          variant="outline"
          onClick={() => {
            if (window.confirm("Xóa toàn bộ đề tự tạo trên máy này?")) clearExtras();
          }}
        >
          Xóa hết đề tự tạo
        </Button>
      ) : null}
    </AppShell>
  );
}
