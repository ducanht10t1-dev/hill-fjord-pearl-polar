import { Link } from "@tanstack/react-router";
import { useAllIssues } from "@/data/catalog";
import { cn } from "@/lib/utils";

export function IssuePager({ current }: { current: number }) {
  const issues = useAllIssues();
  return (
    <nav aria-label="Chọn issue" className="mb-4 flex flex-wrap gap-1">
      {issues.map((it) => (
        <Link
          key={it.id}
          to="/mcq/$id"
          params={{ id: String(it.id) }}
          className={cn(
            "flex h-11 min-w-9 items-center justify-center rounded-sm px-2 text-xs tabular-nums",
            it.id === current
              ? "bg-navy text-navy-fg"
              : it.generated
                ? "bg-ok-bg text-ok hover:bg-surface hover:text-ink"
                : "bg-bg-elevated text-muted hover:bg-surface hover:text-ink",
          )}
        >
          {it.id}
        </Link>
      ))}
    </nav>
  );
}
