import { createClient as _createClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";

let client: ReturnType<typeof _createClient<Database>> | null = null;

export function createClient() {
  if (client) return client;
  client = _createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  return client;
}
