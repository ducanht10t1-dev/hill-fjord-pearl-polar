import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { Dices, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { nextExtraId, useAllIssues } from "@/data/catalog";
import { QC, qcByKey } from "@/data/qc";
import { generateRandomIssue } from "@/lib/generate-issue";
import { generateLocalIssue } from "@/lib/local-generate";
import { cn } from "@/lib/utils";
import { useProgress } from "@/store/progress";

const MAX_EXTRAS = 40;

export function GenerateIssueButton({ className }: { className?: string }) {
  const navigate = useNavigate();
  const generate = useServerFn(generateRandomIssue);
  const extras = useProgress((s) => s.extras);
  const addExtra = useProgress((s) => s.addExtra);
  const all = useAllIssues();
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [qcKey, setQcKey] = useState("");

  async function onClick() {
    if (extras.length >= MAX_EXTRAS) {
      setErr("Đã tới hạn 40 đề tự tạo. Xóa bớt trong ngân hàng rồi thử lại.");
      return;
    }
    setBusy(true);
    setErr(null);
    const id = nextExtraId(extras);
    const seed = (Date.now() ^ (id * 9973)) >>> 0;
    const lastKey = extras.at(-1)?.primaryKey;
    const qc = qcKey ? qcByKey(qcKey) : undefined;
    try {
      const res = await Promise.race([
        generate({
          data: {
            id,
            seed,
            excludeKey: lastKey,
            qcKey: qcKey || undefined,
            existingTitles: all.map((i) => i.title),
          },
        }),
        new Promise<null>((resolve) => {
          setTimeout(() => resolve(null), 9_000);
        }),
      ]);
      const issue =
        res && res.ok
          ? res.issue
          : generateLocalIssue({ id, seed, excludeKey: lastKey, qc });
      addExtra(issue);
      await navigate({ to: "/mcq/$id", params: { id: String(issue.id) } });
    } catch {
      const issue = generateLocalIssue({ id, seed, excludeKey: lastKey, qc });
      addExtra(issue);
      await navigate({ to: "/mcq/$id", params: { id: String(issue.id) } });
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <label className="block min-w-0 flex-1">
          <span className="mb-1 block text-xs text-muted">Chủ đề (không hiện trên đề)</span>
          <select
            className="h-11 w-full rounded-md border border-line bg-bg-elevated px-3 text-sm text-ink"
            value={qcKey}
            onChange={(e) => setQcKey(e.target.value)}
            disabled={busy}
          >
            <option value="">Ngẫu nhiên — bất kỳ đặc tính nào</option>
            {QC.map((q) => (
              <option key={q.key} value={q.key}>
                {q.label}
              </option>
            ))}
          </select>
        </label>
        <Button
          type="button"
          className="sm:mt-5"
          onClick={() => void onClick()}
          disabled={busy}
        >
          {busy ? <Loader2 className="animate-spin" /> : <Dices />}
          {busy ? "Đang soạn đề…" : "Tạo thêm đề"}
        </Button>
      </div>
      {err ? <p className="text-sm text-warn">{err}</p> : null}
    </div>
  );
}
