import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { t as supabase } from "./supabase_B733jFR2.mjs";
//#region src/pages/api/admin/upload.ts
var upload_exports = /* @__PURE__ */ __exportAll({ POST: () => POST });
function isAdmin(request) {
	return request.headers.get("authorization") === `Bearer your-secure-admin-api-key-here`;
}
var POST = async ({ request }) => {
	if (!isAdmin(request)) return new Response(JSON.stringify({ error: "Unauthorized" }), {
		status: 401,
		headers: { "Content-Type": "application/json" }
	});
	try {
		const file = (await request.formData()).get("file");
		if (!file) return new Response(JSON.stringify({ error: "No file provided" }), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		if (![
			"application/pdf",
			"application/vnd.openxmlformats-officedocument.wordprocessingml.document",
			"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
			"application/zip",
			"image/jpeg",
			"image/png",
			"image/webp",
			"image/gif"
		].includes(file.type)) return new Response(JSON.stringify({ error: "Invalid file type. Allowed: PDF, DOCX, XLSX, ZIP, JPEG, PNG, WebP, GIF" }), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		if (file.size > 50 * 1024 * 1024) return new Response(JSON.stringify({ error: "File too large. Maximum 50MB" }), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		const filePath = `resources/${Date.now()}_${file.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
		const arrayBuffer = await file.arrayBuffer();
		const buffer = new Uint8Array(arrayBuffer);
		const { error: uploadError } = await supabase.storage.from("resource-files").upload(filePath, buffer, {
			contentType: file.type,
			upsert: false
		});
		if (uploadError) return new Response(JSON.stringify({ error: uploadError.message }), {
			status: 500,
			headers: { "Content-Type": "application/json" }
		});
		const { data: publicUrlData } = supabase.storage.from("resource-files").getPublicUrl(filePath);
		return new Response(JSON.stringify({
			success: true,
			filePath,
			publicUrl: publicUrlData?.publicUrl || "",
			fileSize: file.size,
			fileType: file.type.split("/").pop() || ""
		}), {
			status: 200,
			headers: { "Content-Type": "application/json" }
		});
	} catch {
		return new Response(JSON.stringify({ error: "Upload failed" }), {
			status: 500,
			headers: { "Content-Type": "application/json" }
		});
	}
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/admin/upload@_@ts
var page = () => upload_exports;
//#endregion
export { page };
