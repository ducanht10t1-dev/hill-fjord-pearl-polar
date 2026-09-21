import type { Issue } from "@/data/issues";
import { resolveExplain } from "@/data/explain";

function extractCites(...texts: string[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  const re =
    /(?:CF\.[0-9]+(?:\.[0-9]+)?(?:–[0-9.]+)?|IFRS 18\.[A-Z]?[0-9]+(?:–[A-Z]?[0-9]+)?)/g;
  for (const t of texts) {
    for (const m of t.match(re) ?? []) {
      if (!seen.has(m)) {
        seen.add(m);
        out.push(m);
      }
    }
  }
  return out.slice(0, 8);
}

export function ExplainPanel({
  issue,
  correct,
  pick,
}: {
  issue: Issue;
  correct: boolean;
  pick?: string | null;
}) {
  const x = resolveExplain(issue);
  const cites = extractCites(issue.cf, x.cfApply, x.ifrs18, x.traps, x.treatment);

  return (
    <div
      id="giai-thich"
      className="mt-4 scroll-mt-4 space-y-5 rounded-xl border border-line bg-bg-elevated p-5 text-sm leading-relaxed text-ink"
    >
      <header className="space-y-2">
        <p className={`text-sm font-medium ${correct ? "text-ok" : "text-warn"}`}>
          {correct ? "Đúng." : "Chưa đúng."} Đặc tính quyết định: {issue.primary}
        </p>
        {!correct && pick ? <p className="text-muted">Bạn chọn: {pick}</p> : null}
        {cites.length ? (
          <p className="flex flex-wrap gap-1.5">
            {cites.map((c) => (
              <span
                key={c}
                className="rounded-sm border border-line bg-surface px-2 py-0.5 font-mono text-xs text-navy"
              >
                {c}
              </span>
            ))}
          </p>
        ) : (
          <p className="font-mono text-xs text-muted">{issue.cf}</p>
        )}
      </header>

      <Section title="Conceptual Framework 2018 — Chương 2">
        {x.cfApply}
      </Section>
      <Section title="IFRS 18 — Presentation and Disclosure in Financial Statements">
        {x.ifrs18}
      </Section>
      <Section title="Vì sao lập luận kia sai">{x.traps}</Section>
      <Section title="Cách xử lý đúng">{x.treatment}</Section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: string }) {
  return (
    <section className="border-l-2 border-navy pl-3">
      <h3 className="mb-1 font-display text-base font-semibold text-navy">{title}</h3>
      <p className="text-pretty">{children}</p>
    </section>
  );
}
