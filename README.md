# Simone Eschweiler — Website

Production-ready bilingual Next.js website with a small Supabase-powered announcements CMS.

## Local setup

1. Run `npm install`.
2. Copy `.env.example` to `.env.local` and add the Supabase project URL and anon key.
3. Run `supabase/schema.sql` in the Supabase SQL editor.
4. In Supabase Authentication, disable public sign-ups and create Simone's admin user manually.
5. Update `meloneGrooveUrl` in `lib/config.ts` and complete the legal placeholders before launch.
6. Run `npm run dev`.

The admin area is available at `/admin` and is intentionally absent from public navigation. Images use the filenames supplied in `images/` and can be replaced in place without layout changes.
