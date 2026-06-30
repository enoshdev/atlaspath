import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { t as supabase } from "./supabase_B733jFR2.mjs";
//#region src/pages/api/resources/[slug].ts
var _slug__exports = /* @__PURE__ */ __exportAll({ GET: () => GET });
var GET = async ({ params }) => {
	const { slug } = params;
	if (!slug) return new Response(JSON.stringify({ error: "Slug is required" }), {
		status: 400,
		headers: { "Content-Type": "application/json" }
	});
	const { data, error } = await supabase.from("resources").select("*").eq("slug", slug).single();
	if (error || !data) return new Response(JSON.stringify({ error: "Resource not found" }), {
		status: 404,
		headers: { "Content-Type": "application/json" }
	});
	return new Response(JSON.stringify({ data }), {
		status: 200,
		headers: { "Content-Type": "application/json" }
	});
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/resources/[slug]@_@ts
var page = () => _slug__exports;
//#endregion
export { page };
