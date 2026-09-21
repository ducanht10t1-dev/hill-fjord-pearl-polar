import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Link, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as stripQcFromStem } from "./explain-D5oGm6vd.mjs";
import { c as useIssue, i as cn, l as useProgress, n as Button, o as seededShuffle, s as useAllIssues, t as AppShell } from "./button-ifcoejEr.mjs";
import { t as Badge } from "./badge-CKKQNBVM.mjs";
import { t as ExplainPanel } from "./ExplainPanel-DbNRiBFv.mjs";
import { n as Route } from "./router-CeWzRE1_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/mcq._id-Bz4b6mp1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function IssueBody({ issue, compact }) {
	const [open, setOpen] = (0, import_react.useState)(!compact);
	const title = stripQcFromStem(issue.title);
	const scenario = stripQcFromStem(issue.scenario);
	(0, import_react.useEffect)(() => {
		setOpen(!compact);
	}, [compact, issue.id]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-xl border border-line bg-surface p-5 sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex flex-wrap items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						tone: "navy",
						children: ["Đề ", String(issue.id).padStart(2, "0")]
					}),
					issue.generated ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: "ok",
						children: "Tự tạo"
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-muted",
						children: issue.company
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mb-4 font-display text-2xl font-semibold text-navy",
				children: title
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-base leading-relaxed text-pretty text-ink",
				children: scenario
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "line-clamp-3 text-base leading-relaxed text-pretty text-muted",
				children: scenario
			}),
			compact ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mt-3 text-sm text-navy underline-offset-4 hover:underline",
				onClick: () => setOpen((v) => !v),
				children: open ? "Thu gọn đề" : "Xem đầy đủ đề"
			}) : null
		]
	});
}
var REQUIRED = [
	"Đọc bối cảnh. Tự xác định vấn đề trình bày / ghi nhận.",
	"Chọn đáp án sau khi đã phân tích. Tên đặc tính không xuất hiện trên đề.",
	"Sau khi nộp mới có giải thích Conceptual Framework 2018 và IFRS 18."
];
function IssuePager({ current }) {
	const issues = useAllIssues();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		"aria-label": "Chọn issue",
		className: "mb-4 flex flex-wrap gap-1",
		children: issues.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/mcq/$id",
			params: { id: String(it.id) },
			className: cn("flex h-11 min-w-9 items-center justify-center rounded-sm px-2 text-xs tabular-nums", it.id === current ? "bg-navy text-navy-fg" : it.generated ? "bg-ok-bg text-ok hover:bg-surface hover:text-ink" : "bg-bg-elevated text-muted hover:bg-surface hover:text-ink"),
			children: it.id
		}, it.id))
	});
}
function McqPage() {
	const { id } = Route.useParams();
	const issue = useIssue(Number(id));
	const issues = useAllIssues();
	const hydrated = useProgress((s) => s.hydrated);
	const setMcq = useProgress((s) => s.setMcq);
	const resetMcq = useProgress((s) => s.resetMcq);
	const [pick, setPick] = (0, import_react.useState)(null);
	const [revealed, setRevealed] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const savedNow = useProgress.getState().mcq[Number(id)];
		setPick(savedNow?.pick ?? null);
		setRevealed(Boolean(savedNow));
	}, [id, hydrated]);
	(0, import_react.useEffect)(() => {
		if (!revealed) return;
		const el = document.getElementById("giai-thich");
		if (!el) return;
		el.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	}, [revealed, id]);
	const options = (0, import_react.useMemo)(() => {
		if (!issue) return [];
		return seededShuffle([issue.primary, ...issue.distractors], issue.id * 17);
	}, [issue]);
	if (!issue) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-muted",
		children: hydrated ? "Không tìm thấy issue." : "Đang tải đề…"
	}) });
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IssuePager, { current: issue.id }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IssueBody, {
			issue,
			compact: revealed
		}),
		!revealed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "mt-4 rounded-lg border border-line bg-bg-elevated p-4 text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 text-xs font-medium uppercase tracking-wide text-muted",
				children: "Yêu cầu"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "list-disc space-y-1 pl-4 text-muted",
				children: REQUIRED.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: r }, r))
			})]
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-5 rounded-xl border border-line bg-surface p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-1 font-display text-lg font-semibold",
					children: "Câu hỏi"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-4 text-sm text-muted",
					children: "Đặc tính định tính nào bị ảnh hưởng trực tiếp nhất bởi cách xử lý của ban quản trị?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-2",
					children: options.map((opt) => {
						const selected = pick === opt;
						const isRight = opt === issue.primary;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: `flex min-h-11 cursor-pointer items-start gap-3 rounded-md border px-3 py-3 text-sm leading-snug ${revealed && isRight ? "border-ok bg-ok-bg" : revealed && selected && !correct ? "border-warn bg-warn-bg" : selected ? "border-navy bg-bg-elevated" : "border-line bg-bg-elevated hover:border-navy"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "radio",
								name: "qc",
								className: "mt-1",
								checked: selected,
								disabled: revealed,
								onChange: () => setPick(opt)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: opt })]
						}, opt);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex flex-wrap items-center gap-3",
					children: !revealed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: submit,
						disabled: !pick,
						children: "Nộp và xem giải thích"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						onClick: retry,
						children: "Làm lại câu này"
					})
				}),
				revealed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExplainPanel, {
					issue,
					correct,
					pick
				}) : null
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 flex justify-between gap-3",
			children: [prev ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/mcq/$id",
					params: { id: String(prev.id) },
					children: "Issue trước"
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), next ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/mcq/$id",
					params: { id: String(next.id) },
					children: "Issue sau"
				})
			}) : null]
		})
	] });
}
//#endregion
export { McqPage as component };
