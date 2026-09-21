import { useEffect, useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { ExplainPanel } from "@/components/ExplainPanel";
import { IssueBody, REQUIRED } from "@/components/IssueBody";
import { IssuePager } from "@/components/IssuePager";
import { Button } from "@/components/ui/button";
import { useAllIssues, useIssue } from "@/data/catalog";
import { seededShuffle } from "@/lib/utils";
import { useProgress } from "@/store/progress";

export const Route = createFileRoute("/mcq/$id")({ component: McqPage });

function McqPage() {
  const { id } = Route.useParams();
  const issue = useIssue(Number(id));
  const issues = useAllIssues();
  const hydrated = useProgress((s) => s.hydrated);
  const setMcq = useProgress((s) => s.setMcq);
  const resetMcq = useProgress((s) => s.resetMcq);
  const [pick, setPick] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const savedNow = useProgress.getState().mcq[Number(id)];
    setPick(savedNow?.pick ?? null);
    setRevealed(Boolean(savedNow));
  }, [id, hydrated]);

  useEffect(() => {
    if (!revealed) return;
    const el = document.getElementById("giai-thich");
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [revealed, id]);

  const options = useMemo(() => {
    if (!issue) return [];
    return seededShuffle([issue.primary, ...issue.distractors], issue.id * 17);
  }, [issue]);

  if (!issue) {
    return (
      <AppShell>
        <p className="text-muted">{hydrated ? "Không tìm thấy issue." : "Đang tải đề…"}</p>
      </AppShell>
    );
  }

  const idx = issues.findIndex((i) => i.id === issue.id);
  const prev = issues[idx - 1];
  const next = issues[idx + 1];
  const correct = pick === issue.primary;

  function submit() {
    if (!issue || !pick) return;
    setMcq(issue.id, pick, pick === issue.primary);
    setRevealed(true);
  }

  function retry() {
    if (!issue) return;
    resetMcq(issue.id);
    setPick(null);
    setRevealed(false);
  }

  return (
    <AppShell>
      <IssuePager current={issue.id} />
      <IssueBody issue={issue} compact={revealed} />
      {!revealed ? (
        <aside className="mt-4 rounded-lg border border-line bg-bg-elevated p-4 text-sm">
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted">Yêu cầu</p>
          <ul className="list-disc space-y-1 pl-4 text-muted">
            {REQUIRED.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </aside>
      ) : null}
      <section className="mt-5 rounded-xl border border-line bg-surface p-5">
        <h2 className="mb-1 font-display text-lg font-semibold">Câu hỏi</h2>
        <p className="mb-4 text-sm text-muted">
          Đặc tính định tính nào bị ảnh hưởng trực tiếp nhất bởi cách xử lý của ban quản trị?
        </p>
        <div className="grid gap-2">
          {options.map((opt) => {
            const selected = pick === opt;
            const isRight = opt === issue.primary;
            return (
              <label
                key={opt}
                className={`flex min-h-11 cursor-pointer items-start gap-3 rounded-md border px-3 py-3 text-sm leading-snug ${
                  revealed && isRight
                    ? "border-ok bg-ok-bg"
                    : revealed && selected && !correct
                      ? "border-warn bg-warn-bg"
                      : selected
                        ? "border-navy bg-bg-elevated"
                        : "border-line bg-bg-elevated hover:border-navy"
                }`}
              >
                <input
                  type="radio"
                  name="qc"
                  className="mt-1"
                  checked={selected}
                  disabled={revealed}
                  onChange={() => setPick(opt)}
                />
                <span>{opt}</span>
              </label>
            );
          })}
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          {!revealed ? (
            <Button onClick={submit} disabled={!pick}>
              Nộp và xem giải thích
            </Button>
          ) : (
            <Button variant="outline" onClick={retry}>
              Làm lại câu này
            </Button>
          )}
        </div>
        {revealed ? <ExplainPanel issue={issue} correct={correct} pick={pick} /> : null}
      </section>
      <div className="mt-6 flex justify-between gap-3">
        {prev ? (
          <Button variant="outline" asChild>
            <Link to="/mcq/$id" params={{ id: String(prev.id) }}>
              Issue trước
            </Link>
          </Button>
        ) : (
          <span />
        )}
        {next ? (
          <Button variant="outline" asChild>
            <Link to="/mcq/$id" params={{ id: String(next.id) }}>
              Issue sau
            </Link>
          </Button>
        ) : null}
      </div>
    </AppShell>
  );
}
