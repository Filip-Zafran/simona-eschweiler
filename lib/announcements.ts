import { createClient } from "./supabase/server";
import { Announcement } from "./types";
import { unstable_noStore as noStore } from "next/cache";

export async function getAnnouncements(): Promise<Announcement[]> {
  noStore();
  const supabase = await createClient();
  if (!supabase) return [];
  const today = new Date().toISOString();
  const { data } = await supabase.from("announcements").select("*")
    .eq("published", true).or(`expires_at.is.null,expires_at.gte.${today}`)
    .order("important", { ascending: false }).order("publish_date", { ascending: false });
  return (data ?? []) as Announcement[];
}
