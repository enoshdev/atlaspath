import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { S as createComponent, i as renderComponent, u as renderTemplate } from "./server_C_GE6gR_.mjs";
import "./compiler_zDhyxpuK.mjs";
import { t as $$Layout } from "./Layout_CgvCVNxy.mjs";
import { n as Navbar, t as Footer } from "./Footer_CsXyfZe7.mjs";
import { n as WhatsAppButton, t as AIAssistant } from "./AIAssistant_DVlD598_.mjs";
import { t as CountryDetail } from "./CountryDetail_B5v_TCp9.mjs";
//#region src/pages/countries/ireland.astro
var ireland_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Ireland,
	file: () => $$file,
	url: () => $$url
});
var $$Ireland = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Study in Ireland | AtlasPath — Find Your Dream Irish University",
		"description": "Discover top universities in Ireland, compare tuition costs, post-study work rights, living costs, and scholarships like the Government of Ireland Scholarship."
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Navbar", Navbar, {
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "C:/Users/enosh/OneDrive/Documents/atlaspath/src/components/Navbar",
		"client:component-export": "Navbar"
	})}${renderComponent($$result, "CountryDetail", CountryDetail, {
		"countryId": "ireland",
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
}, "C:/Users/enosh/OneDrive/Documents/atlaspath/src/pages/countries/ireland.astro", void 0);
var $$file = "C:/Users/enosh/OneDrive/Documents/atlaspath/src/pages/countries/ireland.astro";
var $$url = "/countries/ireland";
//#endregion
//#region \0virtual:astro:page:src/pages/countries/ireland@_@astro
var page = () => ireland_exports;
//#endregion
export { page };
