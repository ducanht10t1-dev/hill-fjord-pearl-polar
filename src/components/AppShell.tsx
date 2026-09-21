import type { ReactNode } from "react";
import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { useAllIssues } from "@/data/catalog";
import { BASE_COUNT } from "@/data/issues";
import { useProgress } from "@/store/progress";

export function AppShell({ children }: { children: ReactNode }) {
  useEffect(() => {
    void Promise.resolve(useProgress.persist.rehydrate()).then(() => {
      useProgress.getState().setHydrated(true);
    });
  }, []);
  const mcq = useProgress((s) => s.mcq);
  const issues = useAllIssues();
  const mcqDone = Object.keys(mcq).length;
  const extraN = Math.max(0, issues.length - BASE_COUNT);

  return (
    <div className="min-h-screen bg-bg">
      <header className="border-b border-line bg-surface">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3">
          <Link to="/" className="flex items-baseline gap-2">
            <span className="font-display text-xl font-semibold text-navy">Đức Anh</span>
            <span className="hidden text-xs text-muted sm:inline">
              CF 2018 · IFRS 18
            </span>
          </Link>
          <nav className="flex flex-wrap items-center gap-1 text-sm">
            <Link
              to="/mcq/$id"
              params={{ id: "1" }}
              className={navClass}
              activeProps={{ className: navActive }}
            >
              Trắc nghiệm
            </Link>
            <Link to="/exam" className={navClass} activeProps={{ className: navActive }}>
              Thi 30 câu
            </Link>
            <Link to="/bank" className={navClass} activeProps={{ className: navActive }}>
              Ngân hàng
            </Link>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-4 py-6 pb-24">{children}</main>
      <footer className="border-t border-line px-4 py-4 text-center text-xs text-subtle">
        {mcqDone}/{issues.length} trắc nghiệm
        {extraN ? ` · ${extraN} đề tự tạo` : ""} · CF 2018 · IFRS 18
      </footer>
    </div>
  );
}

const navClass =
  "rounded-sm px-3 py-2 text-muted transition-colors hover:bg-bg-elevated hover:text-ink";
const navActive = "bg-navy text-navy-fg hover:bg-navy hover:text-navy-fg";
