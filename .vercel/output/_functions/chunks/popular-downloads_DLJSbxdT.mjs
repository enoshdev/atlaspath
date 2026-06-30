import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { t as supabase } from "./supabase_B733jFR2.mjs";
//#region src/pages/api/popular-downloads.ts
var popular_downloads_exports = /* @__PURE__ */ __exportAll({ GET: () => GET });
var GET = async () => {
	const { data, error } = await supabase.from("resources").select("id, title, slug, description, category, country, level, thumbnail, read_time, download_count, file_type, file_size").order("download_count", { ascending: false }).limit(5);
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
//#region \0virtual:astro:page:src/pages/api/popular-downloads@_@ts
var page = () => popular_downloads_exports;
//#endregion
export { page };
