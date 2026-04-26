-- ═══════════════════════════════════════════════════════════════
-- WIR Innovation · Supabase setup for website lead capture
-- Run this in: Supabase Dashboard → SQL Editor → New query → paste → Run
-- ═══════════════════════════════════════════════════════════════

-- 1) Contact form leads (main contact form on /contact)
create table if not exists public.leads (
  id              uuid primary key default gen_random_uuid(),
  created_at      timestamptz not null default now(),
  -- form fields
  name            text not null,
  email           text not null,
  phone           text,
  company         text not null,
  company_size    text,
  role            text,
  interest_code   text,        -- 'SSA' | 'UCP' | etc
  interest_label  text,
  notes           text,
  -- metadata
  source          text default 'website',
  page            text,
  user_agent      text,
  submitted_at    timestamptz
);

-- 2) Newsletter signups (sidebar form on /blog)
create table if not exists public.newsletter_signups (
  id           uuid primary key default gen_random_uuid(),
  created_at   timestamptz not null default now(),
  email        text not null unique,
  source       text default 'newsletter',
  page         text,
  submitted_at timestamptz
);

-- 3) Row-Level Security: lock down reads, allow inserts from anon
-- (anon key is exposed in browser — RLS prevents anyone from reading
--  your leads even with the key. Only service_role can SELECT.)
alter table public.leads enable row level security;
alter table public.newsletter_signups enable row level security;

-- Drop old policies if re-running
drop policy if exists "anon can insert leads" on public.leads;
drop policy if exists "anon can insert newsletter" on public.newsletter_signups;

-- Allow anonymous (browser) to INSERT only (no select, no update, no delete)
create policy "anon can insert leads" on public.leads
  for insert to anon
  with check (true);

create policy "anon can insert newsletter" on public.newsletter_signups
  for insert to anon
  with check (true);

-- 4) Indexes for querying later
create index if not exists leads_created_at_idx     on public.leads (created_at desc);
create index if not exists leads_company_idx        on public.leads (company);
create index if not exists newsletter_email_idx     on public.newsletter_signups (email);

-- ═══════════════════════════════════════════════════════════════
-- That's it. To verify:
--   select count(*) from public.leads;
-- (should return 0 — table created and accessible)
--
-- To get your project URL + anon key:
--   Settings → API → "Project URL" + "Project API keys" → anon public
-- Paste both into website/index.html WIR_CONFIG block.
-- ═══════════════════════════════════════════════════════════════
