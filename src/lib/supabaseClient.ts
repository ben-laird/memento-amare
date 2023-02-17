import { createClient } from "@supabase/supabase-js";
import {
  PUBLIC_SUPABASE_ANON_KEY as key,
  PUBLIC_SUPABASE_URL as url,
} from "$env/static/public";

export const supabase = createClient(url, key);
