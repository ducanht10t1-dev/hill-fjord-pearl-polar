import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { ExplainPanel } from "@/components/ExplainPanel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ISSUES } from "@/data/issues";
import { stripQcFromStem } from "@/lib/stem";
import { cn, seededShuffle } from "@/lib/utils";
import { useProgress } from "@/store/progress";

export const Route = createFileRoute("/exam")({ component: ExamPage });

function ExamPage() {
  const picks = useProgress((s) => s.examPicks);
  const done = useProgress((s) => s.examDone);
  const setPick = useProgress((s) => s.setExamPick);
  const finish = useProgress((s) => s.finishExam);
  const reset = useProgress((s) => s.resetExam);
  const [i, setI] = useState(0);
  const [openId, setOpenId] = useState<number | null>(null);
  const issue = ISSUES[i];
  const options = useMemo(
    () => seededShuffle([issue.primary, ...issue.distractors], issue.id * 31),
    [issue],
  );
  const answered = Object.keys(picks).length;
  const score = ISSUES.filter((it) => picks[it.id] === it.primary).length;

  if (done) {
    return (
      <AppShell>
        <h1 className="mb-2 font-display text-3xl font-semibold text-navy">Kết quả đề thi</h1>
        <p className="mb-6 font-display text-4xl tabular-nums text-navy">{score}/30</p>
        <ol className="space-y-3">
          {ISSUES.map((it) => {
            const ok = picks[it.id] === it.primary;
            const open = openId === it.id;
            return (
              <li key={it.id} className="rounded-md border border-line bg-surface p-3 text-sm">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge tone={ok ? "ok" : "warn"}>{ok ? "Đúng" : "Sai"}</Badge>
                  <span className="font-medium">
                    {it.id}. {stripQcFromStem(it.title)}
                  </span>
                </div>
                {!ok ? (
                  <p className="mt-2 text-muted">
                    Bạn chọn: {picks[it.id] ?? "—"} · Đáp án: {it.primary}
                  </p>
                ) : null}
                <div className="mt-2 flex flex-wrap gap-3">
                  <button
                    type="button"
                    className="text-sm text-navy underline-offset-4 hover:underline"
                    onClick={() => setOpenId(open ? null : it.id)}
                  >
                    {open ? "Ẩn giải thích" : "Giải thích Conceptual Framework + IFRS 18"}
                  </button>
                  <Link
                    to="/mcq/$id"
                    params={{ id: String(it.id) }}
                    className="text-sm text-navy underline-offset-4 hover:underline"
                  >
                    Làm lại câu này
                  </Link>
                </div>
                {open ? (
                  <ExplainPanel issue={it} correct={ok} pick={picks[it.id]} />
                ) : null}
              </li>
            );
          })}
        </ol>
        <Button className="mt-6" variant="outline" onClick={reset}>
          Làm lại đề thi
        </Button>
      </AppShell>
    );
  }

  return (
    <AppShell>
      <div className="mb-4 flex items-center justify-between gap-3">
        <h1 className="font-display text-2xl font-semibold text-navy">Thi 30 câu</h1>
        <p className="text-sm tabular-nums text-muted">
          {i + 1}/30 · đã chọn {answered}
        </p>
      </div>
      <div className="mb-3 h-1.5 overflow-hidden rounded-full bg-line">
        <div className="h-full bg-navy" style={{ width: `${((i + 1) / 30) * 100}%` }} />
      </div>
      <nav aria-label="Câu hỏi" className="mb-4 flex flex-wrap gap-1">
        {ISSUES.map((it, idx) => (
          <button
            key={it.id}
            type="button"
            onClick={() => setI(idx)}
            className={cn(
              "flex h-11 min-w-9 items-center justify-center rounded-sm px-2 text-xs tabular-nums",
              idx === i
                ? "bg-navy text-navy-fg"
                : picks[it.id]
                  ? "bg-ok-bg text-ok"
                  : "bg-bg-elevated text-muted hover:text-ink",
            )}
          >
            {it.id}
          </button>
        ))}
      </nav>
      <article className="rounded-xl border border-line bg-surface p-5">
        <p className="mb-1 text-xs text-muted">
          Đề {issue.id} · {issue.company}
        </p>
        <h2 className="mb-3 font-display text-xl font-semibold">{stripQcFromStem(issue.title)}</h2>
        <p className="mb-5 text-base leading-relaxed text-pretty">
          {stripQcFromStem(issue.scenario)}
        </p>
        <p className="mb-3 text-sm font-medium">Đặc tính nào bị ảnh hưởng trực tiếp nhất?</p>
        <div className="grid gap-2">
          {options.map((opt) => (
            <label
              key={opt}
              className={`flex min-h-11 cursor-pointer items-start gap-3 rounded-md border px-3 py-3 text-sm ${
                picks[issue.id] === opt
                  ? "border-navy bg-bg-elevated"
                  : "border-line bg-bg-elevated hover:border-navy"
              }`}
            >
              <input
                type="radio"
                name="exam"
                className="mt-1"
                checked={picks[issue.id] === opt}
                onChange={() => setPick(issue.id, opt)}
              />
              <span>{opt}</span>
            </label>
          ))}
        </div>
      </article>
      <div className="mt-5 flex flex-wrap justify-between gap-2">
        <Button variant="outline" disabled={i === 0} onClick={() => setI((n) => n - 1)}>
          Trước
        </Button>
        {i < 29 ? (
          <Button onClick={() => setI((n) => n + 1)}>Sau</Button>
        ) : (
          <Button onClick={finish} disabled={answered < 30}>
            Nộp bài ({answered}/30)
          </Button>
        )}
      </div>
      {answered === 30 && i < 29 ? (
        <Button className="mt-3" onClick={finish}>
          Nộp bài (30/30)
        </Button>
      ) : null}
      <p className="mt-4 text-xs text-subtle">
        Không hiện đáp án cho đến khi nộp. Sau khi nộp, từng câu có giải thích Khung khái niệm và
        IFRS 18.
      </p>
      <Link to="/" className="mt-3 inline-block text-sm text-navy underline-offset-4 hover:underline">
        Về trang chủ
      </Link>
    </AppShell>
  );
}
