import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { t as supabase } from "./supabase_B733jFR2.mjs";
//#region src/pages/api/consultation/book.ts
var book_exports = /* @__PURE__ */ __exportAll({ POST: () => POST });
var EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var POST = async ({ request }) => {
	try {
		const { goalId, goalLabel, expertId, expertName, customerName, customerEmail, customerPhone, selectedDate, selectedTime, timezone, price, duration } = await request.json();
		if (!goalId || !expertId || !selectedDate || !selectedTime) return new Response(JSON.stringify({ error: "Missing required fields: goalId, expertId, selectedDate, selectedTime" }), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		if (!customerName || !customerName.trim()) return new Response(JSON.stringify({ error: "Name is required" }), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		if (!customerEmail || !EMAIL_REGEX.test(customerEmail.trim())) return new Response(JSON.stringify({ error: "A valid email is required" }), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		const { data, error } = await supabase.from("consultation_bookings").insert({
			goal_id: goalId,
			goal_label: goalLabel || "",
			expert_id: expertId,
			expert_name: expertName || "",
			customer_name: customerName.trim(),
			customer_email: customerEmail.trim().toLowerCase(),
			customer_phone: customerPhone?.trim() || "",
			selected_date: selectedDate,
			selected_time: selectedTime,
			timezone: timezone || "IST",
			price: price || "",
			duration: duration || ""
		}).select("id").single();
		if (error) return new Response(JSON.stringify({ error: "Booking failed. Please try again." }), {
			status: 500,
			headers: { "Content-Type": "application/json" }
		});
		return new Response(JSON.stringify({
			success: true,
			bookingId: data.id,
			message: "Booking confirmed! Check your email for the meeting link."
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
//#region \0virtual:astro:page:src/pages/api/consultation/book@_@ts
var page = () => book_exports;
//#endregion
export { page };
