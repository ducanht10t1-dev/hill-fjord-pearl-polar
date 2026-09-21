import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as resolveExplain } from "./explain-D5oGm6vd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ExplainPanel-DbNRiBFv.js
var import_jsx_runtime = require_jsx_runtime();
function extractCites(...texts) {
	const seen = /* @__PURE__ */ new Set();
	const out = [];
	const re = /(?:CF\.[0-9]+(?:\.[0-9]+)?(?:–[0-9.]+)?|IFRS 18\.[A-Z]?[0-9]+(?:–[A-Z]?[0-9]+)?)/g;
	for (const t of texts) for (const m of t.match(re) ?? []) if (!seen.has(m)) {
		seen.add(m);
		out.push(m);
	}
	return out.slice(0, 8);
}
function ExplainPanel({ issue, correct, pick }) {
	const x = resolveExplain(issue);
	const cites = extractCites(issue.cf, x.cfApply, x.ifrs18, x.traps, x.treatment);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "giai-thich",
		className: "mt-4 scroll-mt-4 space-y-5 rounded-xl border border-line bg-bg-elevated p-5 text-sm leading-relaxed text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: `text-sm font-medium ${correct ? "text-ok" : "text-warn"}`,
						children: [
							correct ? "Đúng." : "Chưa đúng.",
							" Đặc tính quyết định: ",
							issue.primary
						]
					}),
					!correct && pick ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-muted",
						children: ["Bạn chọn: ", pick]
					}) : null,
					cites.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "flex flex-wrap gap-1.5",
						children: cites.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-sm border border-line bg-surface px-2 py-0.5 font-mono text-xs text-navy",
							children: c
						}, c))
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs text-muted",
						children: issue.cf
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Conceptual Framework 2018 — Chương 2",
				children: x.cfApply
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "IFRS 18 — Presentation and Disclosure in Financial Statements",
				children: x.ifrs18
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Vì sao lập luận kia sai",
				children: x.traps
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Cách xử lý đúng",
				children: x.treatment
			})
		]
	});
}
function Section({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "border-l-2 border-navy pl-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "mb-1 font-display text-base font-semibold text-navy",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-pretty",
			children
		})]
	});
}
//#endregion
export { ExplainPanel as t };
