import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { t as supabase } from "./supabase_B733jFR2.mjs";
//#region src/pages/api/resources/download.ts
var download_exports = /* @__PURE__ */ __exportAll({ POST: () => POST });
var POST = async ({ request }) => {
	try {
		const { userId, resourceId } = await request.json();
		if (!resourceId) return new Response(JSON.stringify({ error: "resourceId is required" }), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		const { data: resource, error: fetchError } = await supabase.from("resources").select("file_url, file_type, title").eq("id", resourceId).single();
		if (fetchError || !resource) return new Response(JSON.stringify({ error: "Resource not found" }), {
			status: 404,
			headers: { "Content-Type": "application/json" }
		});
		if (!resource.file_url) return new Response(JSON.stringify({ error: "No file attached to this resource" }), {
			status: 404,
			headers: { "Content-Type": "application/json" }
		});
		const { error: downloadError } = await supabase.from("download_analytics").insert({
			user_id: userId || "anonymous",
			resource_id: resourceId
		});
		if (downloadError) return new Response(JSON.stringify({ error: downloadError.message }), {
			status: 500,
			headers: { "Content-Type": "application/json" }
		});
		const { error: updateError } = await supabase.rpc("increment", {
			row_id: resourceId,
			amount: 1
		});
		if (updateError) console.error("Failed to update download count:", updateError);
		const { data: signedUrlData, error: signedUrlError } = await supabase.storage.from("resource-files").createSignedUrl(resource.file_url, 60);
		if (signedUrlError || !signedUrlData) return new Response(JSON.stringify({ error: "File not found in storage" }), {
			status: 404,
			headers: { "Content-Type": "application/json" }
		});
		return new Response(JSON.stringify({
			success: true,
			downloadUrl: signedUrlData.signedUrl,
			fileName: resource.title,
			fileType: resource.file_type
		}), {
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
//#endregion
//#region \0virtual:astro:page:src/pages/api/resources/download@_@ts
var page = () => download_exports;
//#endregion
export { page };
