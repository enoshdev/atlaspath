import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { t as supabase } from "./supabase_B733jFR2.mjs";
//#region src/pages/api/admin/resources.ts
var resources_exports = /* @__PURE__ */ __exportAll({
	DELETE: () => DELETE,
	GET: () => GET,
	POST: () => POST,
	PUT: () => PUT
});
function isAdmin(request) {
	return request.headers.get("authorization") === `Bearer your-secure-admin-api-key-here`;
}
var GET = async ({ request }) => {
	if (!isAdmin(request)) return new Response(JSON.stringify({ error: "Unauthorized" }), {
		status: 401,
		headers: { "Content-Type": "application/json" }
	});
	const { data, error } = await supabase.from("resources").select("*").order("created_at", { ascending: false });
	if (error) return new Response(JSON.stringify({ error: error.message }), {
		status: 500,
		headers: { "Content-Type": "application/json" }
	});
	return new Response(JSON.stringify({ data: data || [] }), {
		status: 200,
		headers: { "Content-Type": "application/json" }
	});
};
var POST = async ({ request }) => {
	if (!isAdmin(request)) return new Response(JSON.stringify({ error: "Unauthorized" }), {
		status: 401,
		headers: { "Content-Type": "application/json" }
	});
	try {
		const { title, slug, description, category, country, level, thumbnail, file_url, file_size, file_type, read_time, featured } = await request.json();
		if (!title || !slug || !category) return new Response(JSON.stringify({ error: "title, slug, and category are required" }), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		const { data, error } = await supabase.from("resources").insert({
			title,
			slug,
			description: description || "",
			category,
			country: country || "All",
			level: level || "Beginner",
			thumbnail,
			file_url,
			file_size,
			file_type,
			read_time,
			featured: featured || false
		}).select().single();
		if (error) {
			if (error.code === "23505") return new Response(JSON.stringify({ error: "A resource with this slug already exists" }), {
				status: 409,
				headers: { "Content-Type": "application/json" }
			});
			return new Response(JSON.stringify({ error: error.message }), {
				status: 500,
				headers: { "Content-Type": "application/json" }
			});
		}
		return new Response(JSON.stringify({ data }), {
			status: 201,
			headers: { "Content-Type": "application/json" }
		});
	} catch {
		return new Response(JSON.stringify({ error: "Invalid request body" }), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
	}
};
var PUT = async ({ request }) => {
	if (!isAdmin(request)) return new Response(JSON.stringify({ error: "Unauthorized" }), {
		status: 401,
		headers: { "Content-Type": "application/json" }
	});
	try {
		const { id, title, slug, description, category, country, level, thumbnail, file_url, file_size, file_type, read_time, featured } = await request.json();
		if (!id) return new Response(JSON.stringify({ error: "id is required" }), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		const updates = {};
		if (title !== void 0) updates.title = title;
		if (slug !== void 0) updates.slug = slug;
		if (description !== void 0) updates.description = description;
		if (category !== void 0) updates.category = category;
		if (country !== void 0) updates.country = country;
		if (level !== void 0) updates.level = level;
		if (thumbnail !== void 0) updates.thumbnail = thumbnail;
		if (file_url !== void 0) updates.file_url = file_url;
		if (file_size !== void 0) updates.file_size = file_size;
		if (file_type !== void 0) updates.file_type = file_type;
		if (read_time !== void 0) updates.read_time = read_time;
		if (featured !== void 0) updates.featured = featured;
		const { data, error } = await supabase.from("resources").update(updates).eq("id", id).select().single();
		if (error) return new Response(JSON.stringify({ error: error.message }), {
			status: 500,
			headers: { "Content-Type": "application/json" }
		});
		return new Response(JSON.stringify({ data }), {
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
	if (!isAdmin(request)) return new Response(JSON.stringify({ error: "Unauthorized" }), {
		status: 401,
		headers: { "Content-Type": "application/json" }
	});
	try {
		const { id } = await request.json();
		if (!id) return new Response(JSON.stringify({ error: "id is required" }), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		const { error } = await supabase.from("resources").delete().eq("id", id);
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
//#endregion
//#region \0virtual:astro:page:src/pages/api/admin/resources@_@ts
var page = () => resources_exports;
//#endregion
export { page };
