import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Issue } from "@/data/issues";

export type EssayFields = {
  phenomenon: string;
  relevance: string;
  faithful: string;
  enhancing: string;
  decisive: string;
};

export type EssayGrade = {
  total: number;
  qcCorrect: boolean;
  scores: {
    phenomenon: number;
    relevance: number;
    faithful: number;
    enhancing: number;
    decisive: number;
  };
  feedback: string;
  missed: string[];
  source: "ai" | "local";
};

type McqEntry = { pick: string; correct: boolean };
type EssayEntry = { fields: EssayFields; grade: EssayGrade | null };

type State = {
  hydrated: boolean;
  setHydrated: (v: boolean) => void;
  mcq: Record<number, McqEntry>;
  essay: Record<number, EssayEntry>;
  examPicks: Record<number, string>;
  examDone: boolean;
  extras: Issue[];
  setMcq: (id: number, pick: string, correct: boolean) => void;
  resetMcq: (id: number) => void;
  setEssayFields: (id: number, fields: EssayFields) => void;
  setEssayGrade: (id: number, grade: EssayGrade) => void;
  setExamPick: (id: number, pick: string) => void;
  finishExam: () => void;
  resetExam: () => void;
  addExtra: (issue: Issue) => void;
  removeExtra: (id: number) => void;
  clearExtras: () => void;
  resetAll: () => void;
};

const emptyFields = (): EssayFields => ({
  phenomenon: "",
  relevance: "",
  faithful: "",
  enhancing: "",
  decisive: "",
});

function stripId<T extends Record<number, unknown>>(bag: T, id: number): T {
  const next = { ...bag };
  delete next[id];
  return next;
}

export const useProgress = create<State>()(
  persist(
    (set) => ({
      hydrated: false,
      setHydrated: (v) => set({ hydrated: v }),
      mcq: {},
      essay: {},
      examPicks: {},
      examDone: false,
      extras: [],
      setMcq: (id, pick, correct) =>
        set((s) => ({ mcq: { ...s.mcq, [id]: { pick, correct } } })),
      resetMcq: (id) => set((s) => ({ mcq: stripId(s.mcq, id) })),
      setEssayFields: (id, fields) =>
        set((s) => ({
          essay: {
            ...s.essay,
            [id]: { fields, grade: s.essay[id]?.grade ?? null },
          },
        })),
      setEssayGrade: (id, grade) =>
        set((s) => ({
          essay: {
            ...s.essay,
            [id]: { fields: s.essay[id]?.fields ?? emptyFields(), grade },
          },
        })),
      setExamPick: (id, pick) =>
        set((s) => ({ examPicks: { ...s.examPicks, [id]: pick } })),
      finishExam: () => set({ examDone: true }),
      resetExam: () => set({ examPicks: {}, examDone: false }),
      addExtra: (issue) =>
        set((s) => ({
          extras: s.extras.some((x) => x.id === issue.id)
            ? s.extras.map((x) => (x.id === issue.id ? issue : x))
            : [...s.extras, issue],
        })),
      removeExtra: (id) =>
        set((s) => ({
          extras: s.extras.filter((x) => x.id !== id),
          mcq: stripId(s.mcq, id),
          essay: stripId(s.essay, id),
        })),
      clearExtras: () =>
        set((s) => {
          const extraIds = new Set(s.extras.map((x) => x.id));
          const mcq = { ...s.mcq };
          const essay = { ...s.essay };
          for (const id of extraIds) {
            delete mcq[id];
            delete essay[id];
          }
          return { extras: [], mcq, essay };
        }),
      resetAll: () => set({ mcq: {}, essay: {}, examPicks: {}, examDone: false }),
    }),
    {
      name: "khung-cf-progress",
      skipHydration: true,
      partialize: (s) => ({
        mcq: s.mcq,
        essay: s.essay,
        examPicks: s.examPicks,
        examDone: s.examDone,
        extras: s.extras,
      }),
      merge: (persisted, current) => {
        const p = (persisted ?? {}) as Partial<State>;
        const extras = Array.isArray(p.extras)
          ? p.extras.map((x) => ({ ...x, generated: true as const }))
          : [];
        return {
          ...current,
          ...p,
          extras,
          mcq: p.mcq ?? {},
          essay: p.essay ?? {},
          examPicks: p.examPicks ?? {},
          examDone: Boolean(p.examDone),
        };
      },
    },
  ),
);

export { emptyFields };
