create table if not exists public.announcements (
  id uuid primary key default gen_random_uuid(),
  title_de text not null,
  content_de text not null,
  title_en text,
  content_en text,
  published boolean not null default false,
  important boolean not null default false,
  publish_date date default current_date,
  expires_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.announcements enable row level security;
create policy "Public reads active announcements" on public.announcements for select
using (published = true and (expires_at is null or expires_at >= now()) or auth.role() = 'authenticated');
create policy "Admin inserts announcements" on public.announcements for insert to authenticated with check (true);
create policy "Admin updates announcements" on public.announcements for update to authenticated using (true) with check (true);
create policy "Admin deletes announcements" on public.announcements for delete to authenticated using (true);

create or replace function public.set_updated_at() returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end; $$;
create trigger announcements_updated_at before update on public.announcements
for each row execute function public.set_updated_at();
