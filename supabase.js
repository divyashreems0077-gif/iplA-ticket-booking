import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pjpiyezoxkfilhgvbzpj.supabase.co";
const supabaseKey = "sb_publishable_QcuwMrRllSVb_vakS87Z1A_ahcvpDGt";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
