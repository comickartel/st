-- Create a table to collect B-Tech leads
CREATE TABLE IF NOT EXISTS public.btech_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  status text NOT NULL DEFAULT 'beta_interested',
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Turn on security but allow public landing page inserts
ALTER TABLE public.btech_leads ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "allow_public_inserts" ON public.btech_leads;
CREATE POLICY "allow_public_inserts" ON public.btech_leads FOR INSERT TO public WITH CHECK (true);
