import { createClient } from '@supabase/supabase-js';

function getClient() {
  const supabaseUrl = import.meta.env.SUPABASE_URL as string | undefined;
  const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY as string | undefined;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      'Missing SUPABASE_URL or SUPABASE_ANON_KEY environment variables. '
      + 'Add them to your .env file or Vercel environment variables.'
    );
  }

  return createClient(supabaseUrl, supabaseAnonKey);
}

let client: ReturnType<typeof createClient> | null = null;

function getSupabase() {
  if (!client) {
    client = getClient();
  }
  return client;
}

// Proxy that lazily initializes on first property access
export const supabase = new Proxy({} as ReturnType<typeof createClient>, {
  get(_, prop) {
    return getSupabase()[prop as keyof ReturnType<typeof createClient>];
  },
});
