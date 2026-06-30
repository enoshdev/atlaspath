import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { goalId, goalLabel, expertId, expertName, customerName, customerEmail, customerPhone, selectedDate, selectedTime, timezone, price, duration } = body;

    if (!goalId || !expertId || !selectedDate || !selectedTime) {
      return new Response(JSON.stringify({ error: 'Missing required fields: goalId, expertId, selectedDate, selectedTime' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!customerName || !customerName.trim()) {
      return new Response(JSON.stringify({ error: 'Name is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!customerEmail || !EMAIL_REGEX.test(customerEmail.trim())) {
      return new Response(JSON.stringify({ error: 'A valid email is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const { data, error } = await supabase
      .from('consultation_bookings')
      .insert({
        goal_id: goalId,
        goal_label: goalLabel || '',
        expert_id: expertId,
        expert_name: expertName || '',
        customer_name: customerName.trim(),
        customer_email: customerEmail.trim().toLowerCase(),
        customer_phone: customerPhone?.trim() || '',
        selected_date: selectedDate,
        selected_time: selectedTime,
        timezone: timezone || 'IST',
        price: price || '',
        duration: duration || '',
      })
      .select('id')
      .single();

    if (error) {
      return new Response(JSON.stringify({ error: 'Booking failed. Please try again.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({
      success: true,
      bookingId: data.id,
      message: 'Booking confirmed! Check your email for the meeting link.',
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request body' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
