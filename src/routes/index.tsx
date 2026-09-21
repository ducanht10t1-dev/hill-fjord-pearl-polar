import type { ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ListChecks, Sparkles, Timer } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { GenerateIssueButton } from "@/components/GenerateIssueButton";
import { Button } from "@/components/ui/button";
import { useAllIssues } from "@/data/catalog";
import { ISSUES } from "@/data/issues";
import { useProgress } from "@/store/progress";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const mcq = useProgress((s) => s.mcq);
  const examDone = useProgress((s) => s.examDone);
  const examPicks = useProgress((s) => s.examPicks);
  const resetAll = useProgress((s) => s.resetAll);
  const extras = useProgress((s) => s.extras);
  const issues = useAllIssues();
  const mcqCorrect = Object.values(mcq).filter((m) => m.correct).length;
  const mcqDone = Object.keys(mcq).length;
  const firstOpenMcq = issues.find((i) => !mcq[i.id])?.id ?? 1;
  const examScore = examDone
    ? ISSUES.filter((i) => examPicks[i.id] === i.primary).length
    : null;

  return (
    <AppShell>
      <section className="mb-8 max-w-2xl">
        <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted">
          ML86 · Khung khái niệm 2018 · IFRS 18
        </p>
        <h1 className="mb-3 font-display text-4xl font-semibold text-navy">
          Đức Anh
        </h1>
        <p className="text-muted leading-relaxed">
          30 đề gốc chỉ có bối cảnh — không ghi tên đặc tính trên đề. Chọn đáp án sau khi tự phân
          tích; nộp xong mới đọc giải thích Conceptual Framework 2018 và IFRS 18. Tạo thêm đề khi
          cần luyện, độ dài tương đương đề gốc.
        </p>
      </section>

      <div className="mb-8 grid gap-4 sm:grid-cols-2">
        <Stat label="Trắc nghiệm luyện" value={`${mcqCorrect}/${mcqDone || 0} đúng`} />
        <Stat label="Đề thi 30 câu" value={examScore == null ? "Chưa nộp" : `${examScore}/30`} />
      </div>

      <div className="mb-8 rounded-xl border border-line bg-surface p-5">
        <div className="mb-3 flex items-start gap-3">
          <Sparkles className="mt-0.5 size-5 text-navy" />
          <div>
            <h2 className="font-display text-xl font-semibold">Tạo thêm đề</h2>
            <p className="mt-1 text-sm leading-relaxed text-muted">
              Mỗi lần bấm soạn một case mới, dài như 30 đề gốc, chỉ bối cảnh — không lộ tên đặc
              tính trên đề. Nộp xong mới có giải thích CF + IFRS 18.
              {extras.length ? ` Đã có ${extras.length} đề tự tạo trên máy này.` : ""}
            </p>
          </div>
        </div>
        <GenerateIssueButton />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <ModeCard
          icon={<ListChecks className="size-5" />}
          title="Trắc nghiệm"
          body="Mỗi đề chỉ là bối cảnh. Nộp xong mới hiện đúng/sai và giải thích CF + IFRS 18."
          action={
            <Button asChild>
              <Link to="/mcq/$id" params={{ id: String(firstOpenMcq) }}>
                Làm tiếp
              </Link>
            </Button>
          }
        />
        <ModeCard
          icon={<Timer className="size-5" />}
          title="Thi 30 câu"
          body="Làm hết 30 đề gốc, không xem đáp án giữa chừng. Nộp một lần: điểm + giải thích từng câu."
          action={
            <Button variant="outline" asChild>
              <Link to="/exam">{examDone ? "Xem kết quả" : "Bắt đầu thi"}</Link>
            </Button>
          }
        />
        <ModeCard
          icon={<ListChecks className="size-5" />}
          title="Ngân hàng đề"
          body="Mở bất kỳ issue, kể cả đề tự tạo. Chỉ trắc nghiệm."
          action={
            <Button variant="outline" asChild>
              <Link to="/bank">Mở ngân hàng</Link>
            </Button>
          }
        />
      </div>

      {mcqDone + Object.keys(examPicks).length > 0 ? (
        <button
          type="button"
          className="mt-8 text-sm text-subtle underline-offset-4 hover:text-ink hover:underline"
          onClick={() => {
            if (window.confirm("Xóa toàn bộ tiến độ trên máy này? Đề tự tạo vẫn giữ.")) resetAll();
          }}
        >
          Xóa tiến độ đã lưu
        </button>
      ) : null}
    </AppShell>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-line bg-surface px-4 py-3">
      <p className="text-xs text-muted">{label}</p>
      <p className="font-display text-xl font-semibold tabular-nums text-navy">{value}</p>
    </div>
  );
}

function ModeCard({
  icon,
  title,
  body,
  action,
}: {
  icon: ReactNode;
  title: string;
  body: string;
  action: ReactNode;
}) {
  return (
    <div className="flex flex-col rounded-xl border border-line bg-surface p-5">
      <div className="mb-3 text-navy">{icon}</div>
      <h2 className="mb-2 font-display text-xl font-semibold">{title}</h2>
      <p className="mb-5 flex-1 text-sm leading-relaxed text-muted">{body}</p>
      {action}
    </div>
  );
}
