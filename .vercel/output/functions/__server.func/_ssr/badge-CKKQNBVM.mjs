import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as cn } from "./button-ifcoejEr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/badge-CKKQNBVM.js
var import_jsx_runtime = require_jsx_runtime();
function Badge({ className, tone = "muted", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium", tone === "muted" && "bg-bg-elevated text-muted", tone === "navy" && "bg-navy text-navy-fg", tone === "ok" && "bg-ok-bg text-ok", tone === "warn" && "bg-warn-bg text-warn", className),
		...props
	});
}
//#endregion
export { Badge as t };
