import type { APIRoute } from 'astro';
import { supabase } from '../../lib/supabase';

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const category = url.searchParams.get('category');
  const country = url.searchParams.get('country');
  const level = url.searchParams.get('level');
  const search = url.searchParams.get('search');
  const limit = Math.min(parseInt(url.searchParams.get('limit') || '50'), 100);
  const offset = parseInt(url.searchParams.get('offset') || '0');

  let query = supabase
    .from('resources')
    .select('*', { count: 'exact' })
    .order('created_at', { ascending: false });

  if (category && category !== 'all') {
    query = query.eq('category', category);
  }
  if (country && country !== 'all') {
    query = query.eq('country', country);
  }
  if (level && level !== 'all') {
    query = query.eq('level', level);
  }
  if (search && search.trim() !== '') {
    const term = search.trim();
    query = query.or(`title.ilike.%${term}%,description.ilike.%${term}%`);
  }

  const featured = url.searchParams.get('featured');
  if (featured === 'true') {
    query = query.eq('featured', true);
  }

  const { data, error, count } = await query.range(offset, offset + limit - 1);

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
