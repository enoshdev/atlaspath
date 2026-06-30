import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { S as createComponent, i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_C_GE6gR_.mjs";
import "./compiler_zDhyxpuK.mjs";
import { t as $$Layout } from "./Layout_CdV_TxGV.mjs";
import { i as Navbar, n as WhatsAppButton, r as Footer, t as AIAssistant } from "./AIAssistant_CXcAPky0.mjs";
import { Home, RefreshCw } from "lucide-react";
//#region src/pages/500.astro
var _500_exports = /* @__PURE__ */ __exportAll({
	default: () => $$500,
	file: () => $$file,
	url: () => $$url
});
var $$500 = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "500 - Server Error | AtlasPath",
		"description": "Something went wrong on our side."
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Navbar", Navbar, {
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "C:/Users/enosh/OneDrive/Documents/atlaspath/src/components/Navbar",
		"client:component-export": "Navbar"
	})}${maybeRenderHead($$result)}<main class="min-h-[70vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50"><div class="max-w-md w-full text-center bg-white p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 flex flex-col items-center"><div class="w-16 h-16 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-6 border border-rose-100"><span class="text-2xl font-black">500</span></div><h1 class="text-3xl font-black text-slate-900 tracking-tight mb-3">Server Error</h1><p class="text-sm text-slate-500 leading-relaxed mb-8 max-w-sm">Something went wrong on our side. Please try again or head back to home.</p><div class="flex flex-col gap-3 w-full"><button onclick="window.location.reload();" class="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-xs font-bold text-white bg-[#6D4AFF] hover:bg-[#5B3BE0] hover:-translate-y-0.5 transition-all shadow-md shadow-primary/20 cursor-pointer border-0 outline-none">${renderComponent($$result, "RefreshCw", RefreshCw, { "className": "w-4 h-4 animate-spin-slow" })}<span>Try Again</span></button><a href="/" class="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors">${renderComponent($$result, "Home", Home, { "className": "w-4 h-4 text-slate-500" })}<span>Go Home</span></a></div></div></main>${renderComponent($$result, "Footer", Footer, {
		"client:visible": true,
		"client:component-hydration": "visible",
		"client:component-path": "C:/Users/enosh/OneDrive/Documents/atlaspath/src/components/Footer",
		"client:component-export": "Footer"
	})}${renderComponent($$result, "WhatsAppButton", WhatsAppButton, {
		"client:visible": true,
		"client:component-hydration": "visible",
		"client:component-path": "C:/Users/enosh/OneDrive/Documents/atlaspath/src/components/WhatsAppButton",
		"client:component-export": "WhatsAppButton"
	})}${renderComponent($$result, "AIAssistant", AIAssistant, {
		"client:visible": true,
		"client:component-hydration": "visible",
		"client:component-path": "C:/Users/enosh/OneDrive/Documents/atlaspath/src/components/AIAssistant",
		"client:component-export": "AIAssistant"
	})}` })}`;
}, "C:/Users/enosh/OneDrive/Documents/atlaspath/src/pages/500.astro", void 0);
var $$file = "C:/Users/enosh/OneDrive/Documents/atlaspath/src/pages/500.astro";
var $$url = "/500";
//#endregion
//#region \0virtual:astro:page:src/pages/500@_@astro
var page = () => _500_exports;
//#endregion
export { page };
