import { supabase } from "$lib/supabaseClient";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const { data } = await supabase
    .from("countries")
    .select<"name", { name: string }>("name");

  return {
    countries: data ?? [],
  };
};
