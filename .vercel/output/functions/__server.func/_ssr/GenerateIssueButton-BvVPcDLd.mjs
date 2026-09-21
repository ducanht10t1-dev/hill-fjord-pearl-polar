import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { P as isRedirect, b as require_jsx_runtime, v as useNavigate, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { a as qcByKey, r as generateLocalIssue, t as QC } from "./local-generate-oRew_voG.mjs";
import { a as nextExtraId, i as cn, l as useProgress, n as Button, s as useAllIssues } from "./button-ifcoejEr.mjs";
import { a as string, i as object, r as number, t as array } from "../_libs/zod.mjs";
import { i as LoaderCircle, o as Dices } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/GenerateIssueButton-BvVPcDLd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var Input = object({
	id: number().int().min(31).max(200),
	seed: number(),
	excludeKey: string().optional(),
	qcKey: string().optional(),
	existingTitles: array(string()).max(80)
});
var generateRandomIssue = createServerFn({ method: "POST" }).validator((d) => Input.parse(d)).handler(createSsrRpc("fd27ee49b0882b132bf38ff8591a07a84eb7a4dd0bdfadec1fbf745a29e1db4f"));
var MAX_EXTRAS = 40;
function GenerateIssueButton({ className }) {
	const navigate = useNavigate();
	const generate = useServerFn(generateRandomIssue);
	const extras = useProgress((s) => s.extras);
	const addExtra = useProgress((s) => s.addExtra);
	const all = useAllIssues();
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [err, setErr] = (0, import_react.useState)(null);
	const [qcKey, setQcKey] = (0, import_react.useState)("");
	async function onClick() {
		if (extras.length >= MAX_EXTRAS) {
			setErr("Đã tới hạn 40 đề tự tạo. Xóa bớt trong ngân hàng rồi thử lại.");
			return;
		}
		setBusy(true);
		setErr(null);
		const id = nextExtraId(extras);
		const seed = (Date.now() ^ id * 9973) >>> 0;
		const lastKey = extras.at(-1)?.primaryKey;
		const qc = qcKey ? qcByKey(qcKey) : void 0;
		try {
			const res = await Promise.race([generate({ data: {
				id,
				seed,
				excludeKey: lastKey,
				qcKey: qcKey || void 0,
				existingTitles: all.map((i) => i.title)
			} }), new Promise((resolve) => {
				setTimeout(() => resolve(null), 9e3);
			})]);
			const issue = res && res.ok ? res.issue : generateLocalIssue({
				id,
				seed,
				excludeKey: lastKey,
				qc
			});
			addExtra(issue);
			await navigate({
				to: "/mcq/$id",
				params: { id: String(issue.id) }
			});
		} catch {
			const issue = generateLocalIssue({
				id,
				seed,
				excludeKey: lastKey,
				qc
			});
			addExtra(issue);
			await navigate({
				to: "/mcq/$id",
				params: { id: String(issue.id) }
			});
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex flex-col gap-2", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-2 sm:flex-row sm:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "block min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mb-1 block text-xs text-muted",
					children: "Chủ đề (không hiện trên đề)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					className: "h-11 w-full rounded-md border border-line bg-bg-elevated px-3 text-sm text-ink",
					value: qcKey,
					onChange: (e) => setQcKey(e.target.value),
					disabled: busy,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						children: "Ngẫu nhiên — bất kỳ đặc tính nào"
					}), QC.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: q.key,
						children: q.label
					}, q.key))]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "button",
				className: "sm:mt-5",
				onClick: () => void onClick(),
				disabled: busy,
				children: [busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dices, {}), busy ? "Đang soạn đề…" : "Tạo thêm đề"]
			})]
		}), err ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-warn",
			children: err
		}) : null]
	});
}
//#endregion
export { GenerateIssueButton as t };
