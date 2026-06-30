import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { S as createComponent, i as renderComponent, u as renderTemplate } from "./server_C_GE6gR_.mjs";
import "./compiler_zDhyxpuK.mjs";
import { t as $$Layout } from "./Layout_CdV_TxGV.mjs";
import { i as Navbar, n as WhatsAppButton, r as Footer, t as AIAssistant } from "./AIAssistant_CXcAPky0.mjs";
import { t as CountryDetail } from "./CountryDetail_CGSwibcg.mjs";
//#region src/pages/countries/canada.astro
var canada_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Canada,
	file: () => $$file,
	url: () => $$url
});
var $$Canada = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Study in Canada | AtlasPath — Find Your Dream Canadian University",
		"description": "Discover top universities in Canada, compare tuition costs, PGWP permits, PR pathways, scholarships like Vanier CGS, and student cities."
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Navbar", Navbar, {
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "C:/Users/enosh/OneDrive/Documents/atlaspath/src/components/Navbar",
		"client:component-export": "Navbar"
	})}${renderComponent($$result, "CountryDetail", CountryDetail, {
		"countryId": "canada",
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
}, "C:/Users/enosh/OneDrive/Documents/atlaspath/src/pages/countries/canada.astro", void 0);
var $$file = "C:/Users/enosh/OneDrive/Documents/atlaspath/src/pages/countries/canada.astro";
var $$url = "/countries/canada";
//#endregion
//#region \0virtual:astro:page:src/pages/countries/canada@_@astro
var page = () => canada_exports;
//#endregion
export { page };
