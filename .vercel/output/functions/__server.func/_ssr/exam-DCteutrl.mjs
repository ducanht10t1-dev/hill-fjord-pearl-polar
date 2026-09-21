import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Link, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as stripQcFromStem } from "./explain-D5oGm6vd.mjs";
import { i as cn, l as useProgress, n as Button, o as seededShuffle, r as ISSUES, t as AppShell } from "./button-ifcoejEr.mjs";
import { t as Badge } from "./badge-CKKQNBVM.mjs";
import { t as ExplainPanel } from "./ExplainPanel-DbNRiBFv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/exam-DCteutrl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ExamPage() {
	const picks = useProgress((s) => s.examPicks);
	const done = useProgress((s) => s.examDone);
	const setPick = useProgress((s) => s.setExamPick);
	const finish = useProgress((s) => s.finishExam);
	const reset = useProgress((s) => s.resetExam);
	const [i, setI] = (0, import_react.useState)(0);
	const [openId, setOpenId] = (0, import_react.useState)(null);
	const issue = ISSUES[i];
	const options = (0, import_react.useMemo)(() => seededShuffle([issue.primary, ...issue.distractors], issue.id * 31), [issue]);
	const answered = Object.keys(picks).length;
	const score = ISSUES.filter((it) => picks[it.id] === it.primary).length;
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mb-2 font-display text-3xl font-semibold text-navy",
			children: "Kết quả đề thi"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mb-6 font-display text-4xl tabular-nums text-navy",
			children: [score, "/30"]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "space-y-3",
			children: ISSUES.map((it) => {
				const ok = picks[it.id] === it.primary;
				const open = openId === it.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-md border border-line bg-surface p-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: ok ? "ok" : "warn",
								children: ok ? "Đúng" : "Sai"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-medium",
								children: [
									it.id,
									". ",
									stripQcFromStem(it.title)
								]
							})]
						}),
						!ok ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-muted",
							children: [
								"Bạn chọn: ",
								picks[it.id] ?? "—",
								" · Đáp án: ",
								it.primary
							]
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "text-sm text-navy underline-offset-4 hover:underline",
								onClick: () => setOpenId(open ? null : it.id),
								children: open ? "Ẩn giải thích" : "Giải thích Conceptual Framework + IFRS 18"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/mcq/$id",
								params: { id: String(it.id) },
								className: "text-sm text-navy underline-offset-4 hover:underline",
								children: "Làm lại câu này"
							})]
						}),
						open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExplainPanel, {
							issue: it,
							correct: ok,
							pick: picks[it.id]
						}) : null
					]
				}, it.id);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			className: "mt-6",
			variant: "outline",
			onClick: reset,
			children: "Làm lại đề thi"
		})
	] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 flex items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl font-semibold text-navy",
				children: "Thi 30 câu"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm tabular-nums text-muted",
				children: [
					i + 1,
					"/30 · đã chọn ",
					answered
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-3 h-1.5 overflow-hidden rounded-full bg-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-full bg-navy",
				style: { width: `${(i + 1) / 30 * 100}%` }
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			"aria-label": "Câu hỏi",
			className: "mb-4 flex flex-wrap gap-1",
			children: ISSUES.map((it, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setI(idx),
				className: cn("flex h-11 min-w-9 items-center justify-center rounded-sm px-2 text-xs tabular-nums", idx === i ? "bg-navy text-navy-fg" : picks[it.id] ? "bg-ok-bg text-ok" : "bg-bg-elevated text-muted hover:text-ink"),
				children: it.id
			}, it.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "rounded-xl border border-line bg-surface p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mb-1 text-xs text-muted",
					children: [
						"Đề ",
						issue.id,
						" · ",
						issue.company
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-3 font-display text-xl font-semibold",
					children: stripQcFromStem(issue.title)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-5 text-base leading-relaxed text-pretty",
					children: stripQcFromStem(issue.scenario)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-sm font-medium",
					children: "Đặc tính nào bị ảnh hưởng trực tiếp nhất?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-2",
					children: options.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: `flex min-h-11 cursor-pointer items-start gap-3 rounded-md border px-3 py-3 text-sm ${picks[issue.id] === opt ? "border-navy bg-bg-elevated" : "border-line bg-bg-elevated hover:border-navy"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "radio",
							name: "exam",
							className: "mt-1",
							checked: picks[issue.id] === opt,
							onChange: () => setPick(issue.id, opt)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: opt })]
					}, opt))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5 flex flex-wrap justify-between gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				disabled: i === 0,
				onClick: () => setI((n) => n - 1),
				children: "Trước"
			}), i < 29 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: () => setI((n) => n + 1),
				children: "Sau"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				onClick: finish,
				disabled: answered < 30,
				children: [
					"Nộp bài (",
					answered,
					"/30)"
				]
			})]
		}),
		answered === 30 && i < 29 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			className: "mt-3",
			onClick: finish,
			children: "Nộp bài (30/30)"
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-xs text-subtle",
			children: "Không hiện đáp án cho đến khi nộp. Sau khi nộp, từng câu có giải thích Khung khái niệm và IFRS 18."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/",
			className: "mt-3 inline-block text-sm text-navy underline-offset-4 hover:underline",
			children: "Về trang chủ"
		})
	] });
}
//#endregion
export { ExamPage as component };
