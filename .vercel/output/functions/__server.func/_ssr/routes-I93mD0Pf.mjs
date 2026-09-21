import { _ as Link, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as useProgress, n as Button, r as ISSUES, s as useAllIssues, t as AppShell } from "./button-ifcoejEr.mjs";
import { a as ListChecks, n as Timer, r as Sparkles } from "../_libs/lucide-react.mjs";
import { t as GenerateIssueButton } from "./GenerateIssueButton-BvVPcDLd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-I93mD0Pf.js
var import_jsx_runtime = require_jsx_runtime();
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
	const examScore = examDone ? ISSUES.filter((i) => examPicks[i.id] === i.primary).length : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mb-8 max-w-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 text-xs font-medium uppercase tracking-widest text-muted",
					children: "ML86 · Khung khái niệm 2018 · IFRS 18"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mb-3 font-display text-4xl font-semibold text-navy",
					children: "Đức Anh"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted leading-relaxed",
					children: "30 đề gốc chỉ có bối cảnh — không ghi tên đặc tính trên đề. Chọn đáp án sau khi tự phân tích; nộp xong mới đọc giải thích Conceptual Framework 2018 và IFRS 18. Tạo thêm đề khi cần luyện, độ dài tương đương đề gốc."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-8 grid gap-4 sm:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
				label: "Trắc nghiệm luyện",
				value: `${mcqCorrect}/${mcqDone || 0} đúng`
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
				label: "Đề thi 30 câu",
				value: examScore == null ? "Chưa nộp" : `${examScore}/30`
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-8 rounded-xl border border-line bg-surface p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex items-start gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mt-0.5 size-5 text-navy" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-semibold",
					children: "Tạo thêm đề"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-sm leading-relaxed text-muted",
					children: ["Mỗi lần bấm soạn một case mới, dài như 30 đề gốc, chỉ bối cảnh — không lộ tên đặc tính trên đề. Nộp xong mới có giải thích CF + IFRS 18.", extras.length ? ` Đã có ${extras.length} đề tự tạo trên máy này.` : ""]
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GenerateIssueButton, {})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModeCard, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListChecks, { className: "size-5" }),
					title: "Trắc nghiệm",
					body: "Mỗi đề chỉ là bối cảnh. Nộp xong mới hiện đúng/sai và giải thích CF + IFRS 18.",
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/mcq/$id",
							params: { id: String(firstOpenMcq) },
							children: "Làm tiếp"
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModeCard, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timer, { className: "size-5" }),
					title: "Thi 30 câu",
					body: "Làm hết 30 đề gốc, không xem đáp án giữa chừng. Nộp một lần: điểm + giải thích từng câu.",
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/exam",
							children: examDone ? "Xem kết quả" : "Bắt đầu thi"
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModeCard, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListChecks, { className: "size-5" }),
					title: "Ngân hàng đề",
					body: "Mở bất kỳ issue, kể cả đề tự tạo. Chỉ trắc nghiệm.",
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/bank",
							children: "Mở ngân hàng"
						})
					})
				})
			]
		}),
		mcqDone + Object.keys(examPicks).length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "mt-8 text-sm text-subtle underline-offset-4 hover:text-ink hover:underline",
			onClick: () => {
				if (window.confirm("Xóa toàn bộ tiến độ trên máy này? Đề tự tạo vẫn giữ.")) resetAll();
			},
			children: "Xóa tiến độ đã lưu"
		}) : null
	] });
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-line bg-surface px-4 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-xl font-semibold tabular-nums text-navy",
			children: value
		})]
	});
}
function ModeCard({ icon, title, body, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col rounded-xl border border-line bg-surface p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-3 text-navy",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-2 font-display text-xl font-semibold",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-5 flex-1 text-sm leading-relaxed text-muted",
				children: body
			}),
			action
		]
	});
}
//#endregion
export { Home as component };
