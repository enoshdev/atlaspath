import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { t as supabase } from "./supabase_B733jFR2.mjs";
//#region src/pages/api/related-resources.ts
var related_resources_exports = /* @__PURE__ */ __exportAll({ GET: () => GET });
var GET = async ({ request }) => {
	const url = new URL(request.url);
	const slug = url.searchParams.get("slug");
	const limit = Math.min(parseInt(url.searchParams.get("limit") || "4"), 10);
	if (!slug) return new Response(JSON.stringify({ error: "slug is required" }), {
		status: 400,
		headers: { "Content-Type": "application/json" }
	});
	const { data: resource, error: fetchError } = await supabase.from("resources").select("category, country").eq("slug", slug).single();
	if (fetchError || !resource) return new Response(JSON.stringify({ error: "Resource not found" }), {
		status: 404,
		headers: { "Content-Type": "application/json" }
	});
	const { data, error } = await supabase.from("resources").select("id, title, slug, description, category, country, level, thumbnail, read_time, download_count, file_type").neq("slug", slug).or(`category.eq.${resource.category},country.eq.${resource.country}`).order("download_count", { ascending: false }).limit(limit);
	if (error) return new Response(JSON.stringify({ error: error.message }), {
		status: 500,
		headers: { "Content-Type": "application/json" }
	});
	return new Response(JSON.stringify({ data: data || [] }), {
		status: 200,
		headers: { "Content-Type": "application/json" }
	});
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/related-resources@_@ts
var page = () => related_resources_exports;
//#endregion
export { page };
