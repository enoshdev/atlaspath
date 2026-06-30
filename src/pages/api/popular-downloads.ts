import type { APIRoute } from 'astro';
import { supabase } from '../../lib/supabase';

export const GET: APIRoute = async () => {
  const { data, error } = await supabase
    .from('resources')
    .select('id, title, slug, description, category, country, level, thumbnail, read_time, download_count, file_type, file_size')
    .order('download_count', { ascending: false })
    .limit(5);

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ data: data || [] }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
