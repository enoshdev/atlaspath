import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { t as supabase } from "./supabase_B733jFR2.mjs";
//#region src/pages/api/admin/subscribers.ts
var subscribers_exports = /* @__PURE__ */ __exportAll({ GET: () => GET });
function isAdmin(request) {
	return request.headers.get("authorization") === `Bearer your-secure-admin-api-key-here`;
}
var GET = async ({ request }) => {
	if (!isAdmin(request)) return new Response(JSON.stringify({ error: "Unauthorized" }), {
		status: 401,
		headers: { "Content-Type": "application/json" }
	});
	const url = new URL(request.url);
	const limit = Math.min(parseInt(url.searchParams.get("limit") || "100"), 500);
	const offset = parseInt(url.searchParams.get("offset") || "0");
	const { data, error, count } = await supabase.from("newsletter_subscribers").select("*", { count: "exact" }).order("created_at", { ascending: false }).range(offset, offset + limit - 1);
	if (error) return new Response(JSON.stringify({ error: error.message }), {
		status: 500,
		headers: { "Content-Type": "application/json" }
	});
	return new Response(JSON.stringify({
		data: data || [],
		total: count || 0
	}), {
		status: 200,
		headers: { "Content-Type": "application/json" }
	});
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/admin/subscribers@_@ts
var page = () => subscribers_exports;
//#endregion
export { page };
