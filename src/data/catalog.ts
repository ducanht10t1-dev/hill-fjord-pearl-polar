import { useMemo } from "react";
import { BASE_COUNT, ISSUES, type Issue } from "@/data/issues";
import { useProgress } from "@/store/progress";

export { BASE_COUNT };

export function useExtras(): Issue[] {
  return useProgress((s) => s.extras);
}

export function useAllIssues(): Issue[] {
  const extras = useExtras();
  return useMemo(() => [...ISSUES, ...extras], [extras]);
}

export function useIssue(id: number): Issue | undefined {
  const extras = useExtras();
  return ISSUES.find((i) => i.id === id) ?? extras.find((i) => i.id === id);
}

export function nextExtraId(extras: Issue[]): number {
  return extras.reduce((m, i) => Math.max(m, i.id), BASE_COUNT) + 1;
}
