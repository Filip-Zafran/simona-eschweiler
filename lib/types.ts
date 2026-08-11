export type Locale = "de" | "en";

export type Announcement = {
  id: string;
  title_de: string;
  content_de: string;
  title_en: string | null;
  content_en: string | null;
  published: boolean;
  important: boolean;
  publish_date: string | null;
  expires_at: string | null;
  created_at: string;
  updated_at: string;
};
