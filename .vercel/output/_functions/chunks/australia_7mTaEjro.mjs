import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { S as createComponent, i as renderComponent, u as renderTemplate } from "./server_C_GE6gR_.mjs";
import "./compiler_zDhyxpuK.mjs";
import { t as $$Layout } from "./Layout_CdV_TxGV.mjs";
import { i as Navbar, n as WhatsAppButton, r as Footer, t as AIAssistant } from "./AIAssistant_CXcAPky0.mjs";
import { t as CountryDetail } from "./CountryDetail_CGSwibcg.mjs";
//#region src/pages/countries/australia.astro
var australia_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Australia,
	file: () => $$file,
	url: () => $$url
});
var $$Australia = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Study in Australia | AtlasPath — Find Your Dream Australian University",
		"description": "Discover top Group of Eight universities in Australia, compare tuition costs, post-study work rights, living costs, and scholarships like Australia Awards."
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Navbar", Navbar, {
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "C:/Users/enosh/OneDrive/Documents/atlaspath/src/components/Navbar",
		"client:component-export": "Navbar"
	})}${renderComponent($$result, "CountryDetail", CountryDetail, {
		"countryId": "australia",
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "C:/Users/enosh/OneDrive/Documents/atlaspath/src/components/CountryDetail",
		"client:component-export": "CountryDetail"
	})}${renderComponent($$result, "Footer", Footer, {
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
}, "C:/Users/enosh/OneDrive/Documents/atlaspath/src/pages/countries/australia.astro", void 0);
var $$file = "C:/Users/enosh/OneDrive/Documents/atlaspath/src/pages/countries/australia.astro";
var $$url = "/countries/australia";
//#endregion
//#region \0virtual:astro:page:src/pages/countries/australia@_@astro
var page = () => australia_exports;
//#endregion
export { page };
