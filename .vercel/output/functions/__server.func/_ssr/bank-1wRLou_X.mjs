import { _ as Link, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as stripQcFromStem } from "./explain-D5oGm6vd.mjs";
import { l as useProgress, n as Button, r as ISSUES, s as useAllIssues, t as AppShell } from "./button-ifcoejEr.mjs";
import { t as GenerateIssueButton } from "./GenerateIssueButton-BvVPcDLd.mjs";
import { t as Badge } from "./badge-CKKQNBVM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bank-1wRLou_X.js
var import_jsx_runtime = require_jsx_runtime();
function Bank() {
	const mcq = useProgress((s) => s.mcq);
	const extras = useProgress((s) => s.extras);
	const removeExtra = useProgress((s) => s.removeExtra);
	const clearExtras = useProgress((s) => s.clearExtras);
	const issues = useAllIssues();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mb-2 font-display text-3xl font-semibold text-navy",
			children: "Ngân hàng đề"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mb-6 max-w-2xl text-sm text-muted",
			children: [ISSUES.length, " đề gốc bằng tiếng Việt, cộng đề tự tạo. Trên đề chỉ có bối cảnh; nộp xong mới đọc giải thích Conceptual Framework 2018 và IFRS 18."]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mb-8 rounded-xl border border-line bg-surface p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-1 font-display text-lg font-semibold",
					children: "Tạo thêm đề"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-4 text-sm text-muted",
					children: "Mỗi lần bấm soạn một case dài như đề gốc, không ghi tên đặc tính trên đề."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GenerateIssueButton, {})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "grid gap-3",
			children: issues.map((issue) => {
				const m = mcq[issue.id];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-lg border border-line bg-surface p-4 sm:flex sm:items-start sm:justify-between sm:gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-1 flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-medium text-muted",
								children: String(issue.id).padStart(2, "0")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-lg font-semibold",
								children: stripQcFromStem(issue.title)
							}),
							issue.generated ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: "ok",
								children: "Tự tạo"
							}) : null
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: issue.company
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-wrap items-center gap-2 sm:mt-0",
						children: [
							m ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: m.correct ? "ok" : "warn",
								children: m.correct ? "Đúng" : "Sai"
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/mcq/$id",
								params: { id: String(issue.id) },
								className: "rounded-sm px-3 py-2 text-sm text-navy underline-offset-4 hover:underline",
								children: "Làm bài"
							}),
							issue.generated ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "rounded-sm px-3 py-2 text-sm text-warn underline-offset-4 hover:underline",
								onClick: () => {
									if (window.confirm(`Xóa đề ${issue.id}. ${issue.title}?`)) removeExtra(issue.id);
								},
								children: "Xóa"
							}) : null
						]
					})]
				}, issue.id);
			})
		}),
		extras.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			className: "mt-6",
			variant: "outline",
			onClick: () => {
				if (window.confirm("Xóa toàn bộ đề tự tạo trên máy này?")) clearExtras();
			},
			children: "Xóa hết đề tự tạo"
		}) : null
	] });
}
//#endregion
export { Bank as component };
