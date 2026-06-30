import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';

function isAdmin(request: Request): boolean {
  const auth = request.headers.get('authorization');
  const adminKey = import.meta.env.ADMIN_API_KEY;
  return adminKey ? auth === `Bearer ${adminKey}` : false;
}

export const GET: APIRoute = async ({ request }) => {
  if (!isAdmin(request)) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const url = new URL(request.url);
  const limit = Math.min(parseInt(url.searchParams.get('limit') || '100'), 500);
  const offset = parseInt(url.searchParams.get('offset') || '0');

  const { data, error, count } = await supabase
    .from('newsletter_subscribers')
    .select('*', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1);

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ data: data || [], total: count || 0 }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
