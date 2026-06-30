import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { S as createComponent, i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_C_GE6gR_.mjs";
import "./compiler_zDhyxpuK.mjs";
import { t as $$Layout } from "./Layout_CdV_TxGV.mjs";
import { i as Navbar, n as WhatsAppButton, r as Footer, t as AIAssistant } from "./AIAssistant_CXcAPky0.mjs";
import { Calendar, Home, School } from "lucide-react";
//#region src/pages/404.astro
var _404_exports = /* @__PURE__ */ __exportAll({
	default: () => $$404,
	file: () => $$file,
	url: () => $$url
});
var $$404 = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "404 - Page Not Found | AtlasPath",
		"description": "Sorry, we couldn't find the page you were looking for."
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Navbar", Navbar, {
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "C:/Users/enosh/OneDrive/Documents/atlaspath/src/components/Navbar",
		"client:component-export": "Navbar"
	})}${maybeRenderHead($$result)}<main class="min-h-[70vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50"><div class="max-w-md w-full text-center bg-white p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 flex flex-col items-center"><div class="w-16 h-16 rounded-2xl bg-[#6D4AFF]/10 text-[#6D4AFF] flex items-center justify-center mb-6 border border-[#6D4AFF]/20"><span class="text-2xl font-black">404</span></div><h1 class="text-3xl font-black text-slate-900 tracking-tight mb-3">Page Not Found</h1><p class="text-sm text-slate-500 leading-relaxed mb-8 max-w-sm">Sorry, we couldn't find that page. It might have been moved or doesn't exist anymore.</p><div class="flex flex-col gap-3 w-full"><a href="/" class="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-xs font-bold text-white bg-[#6D4AFF] hover:bg-[#5B3BE0] hover:-translate-y-0.5 transition-all shadow-md shadow-primary/20">${renderComponent($$result, "Home", Home, { "className": "w-4 h-4" })}<span>Go Home</span></a><a href="/universities" class="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors">${renderComponent($$result, "School", School, { "className": "w-4 h-4 text-slate-500" })}<span>Explore Universities</span></a><a href="/book-consultation" class="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors">${renderComponent($$result, "Calendar", Calendar, { "className": "w-4 h-4 text-slate-500" })}<span>Book Consultation</span></a></div></div></main>${renderComponent($$result, "Footer", Footer, {
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
}, "C:/Users/enosh/OneDrive/Documents/atlaspath/src/pages/404.astro", void 0);
var $$file = "C:/Users/enosh/OneDrive/Documents/atlaspath/src/pages/404.astro";
var $$url = "/404";
//#endregion
//#region \0virtual:astro:page:src/pages/404@_@astro
var page = () => _404_exports;
//#endregion
export { page };
