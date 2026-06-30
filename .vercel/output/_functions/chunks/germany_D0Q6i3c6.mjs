import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { S as createComponent, i as renderComponent, u as renderTemplate } from "./server_C_GE6gR_.mjs";
import "./compiler_zDhyxpuK.mjs";
import { t as $$Layout } from "./Layout_CgvCVNxy.mjs";
import { n as Navbar, t as Footer } from "./Footer_CsXyfZe7.mjs";
import { n as WhatsAppButton, t as AIAssistant } from "./AIAssistant_DVlD598_.mjs";
import { t as CountryDetail } from "./CountryDetail_B5v_TCp9.mjs";
//#region src/pages/countries/germany.astro
var germany_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Germany,
	file: () => $$file,
	url: () => $$url
});
var $$Germany = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Study in Germany | AtlasPath — Find Your Dream German University",
		"description": "Discover top universities in Germany, compare tuition costs, blocking accounts, APS requirements, scholarships like DAAD, and post-study visa rules."
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Navbar", Navbar, {
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "C:/Users/enosh/OneDrive/Documents/atlaspath/src/components/Navbar",
		"client:component-export": "Navbar"
	})}${renderComponent($$result, "CountryDetail", CountryDetail, {
		"countryId": "germany",
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
}, "C:/Users/enosh/OneDrive/Documents/atlaspath/src/pages/countries/germany.astro", void 0);
var $$file = "C:/Users/enosh/OneDrive/Documents/atlaspath/src/pages/countries/germany.astro";
var $$url = "/countries/germany";
//#endregion
//#region \0virtual:astro:page:src/pages/countries/germany@_@astro
var page = () => germany_exports;
//#endregion
export { page };
