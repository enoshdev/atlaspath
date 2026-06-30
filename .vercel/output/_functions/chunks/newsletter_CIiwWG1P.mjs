import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { t as supabase } from "./supabase_B733jFR2.mjs";
//#region src/pages/api/newsletter.ts
var newsletter_exports = /* @__PURE__ */ __exportAll({
	GET: () => GET,
	POST: () => POST
});
var EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var POST = async ({ request }) => {
	try {
		const { email, country } = await request.json();
		if (!email || typeof email !== "string") return new Response(JSON.stringify({ error: "Email is required" }), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		const trimmedEmail = email.trim().toLowerCase();
		if (!EMAIL_REGEX.test(trimmedEmail)) return new Response(JSON.stringify({ error: "Please enter a valid email address" }), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		const { error } = await supabase.from("newsletter_subscribers").insert({
			email: trimmedEmail,
			country: country?.trim() || ""
		});
		if (error) {
			if (error.code === "23505") return new Response(JSON.stringify({ error: "This email is already subscribed" }), {
				status: 409,
				headers: { "Content-Type": "application/json" }
			});
			return new Response(JSON.stringify({ error: "Subscription failed. Please try again later." }), {
				status: 500,
				headers: { "Content-Type": "application/json" }
			});
		}
		return new Response(JSON.stringify({
			success: true,
			message: "Successfully subscribed!"
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
var GET = async ({ request }) => {
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
//#region \0virtual:astro:page:src/pages/api/newsletter@_@ts
var page = () => newsletter_exports;
//#endregion
export { page };
