import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { t as supabase } from "./supabase_B733jFR2.mjs";
//#region src/pages/api/resources/save.ts
var save_exports = /* @__PURE__ */ __exportAll({
	DELETE: () => DELETE,
	GET: () => GET,
	POST: () => POST
});
var POST = async ({ request }) => {
	try {
		const { userId, resourceId } = await request.json();
		if (!userId || !resourceId) return new Response(JSON.stringify({ error: "userId and resourceId are required" }), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		const { error } = await supabase.from("saved_resources").insert({
			user_id: userId,
			resource_id: resourceId
		});
		if (error) {
			if (error.code === "23505") return new Response(JSON.stringify({ error: "Resource already saved" }), {
				status: 409,
				headers: { "Content-Type": "application/json" }
			});
			return new Response(JSON.stringify({ error: error.message }), {
				status: 500,
				headers: { "Content-Type": "application/json" }
			});
		}
		await supabase.rpc("increment", {
			row_id: resourceId,
			amount: 1
		});
		return new Response(JSON.stringify({ success: true }), {
			status: 200,
			headers: { "Content-Type": "application/json" }
		});
	} catch {
		return new Response(JSON.stringify({ error: "Invalid request body" }), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
	}
};
var DELETE = async ({ request }) => {
	try {
		const { userId, resourceId } = await request.json();
		if (!userId || !resourceId) return new Response(JSON.stringify({ error: "userId and resourceId are required" }), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		const { error } = await supabase.from("saved_resources").delete().eq("user_id", userId).eq("resource_id", resourceId);
		if (error) return new Response(JSON.stringify({ error: error.message }), {
			status: 500,
			headers: { "Content-Type": "application/json" }
		});
		return new Response(JSON.stringify({ success: true }), {
			status: 200,
			headers: { "Content-Type": "application/json" }
		});
	} catch {
		return new Response(JSON.stringify({ error: "Invalid request body" }), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
	}
};
var GET = async ({ request }) => {
	const userId = new URL(request.url).searchParams.get("userId");
	if (!userId) return new Response(JSON.stringify({ error: "userId is required" }), {
		status: 400,
		headers: { "Content-Type": "application/json" }
	});
	const { data, error } = await supabase.from("saved_resources").select("resource_id").eq("user_id", userId);
	if (error) return new Response(JSON.stringify({ error: error.message }), {
		status: 500,
		headers: { "Content-Type": "application/json" }
	});
	return new Response(JSON.stringify({ data: data?.map((r) => r.resource_id) || [] }), {
		status: 200,
		headers: { "Content-Type": "application/json" }
	});
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/resources/save@_@ts
var page = () => save_exports;
//#endregion
export { page };
