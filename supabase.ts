import { createClient } from '@supabase/supabase-js'

// Replace these placeholders with your actual keys from your Supabase Project Settings
const supabaseUrl = 'https://supabase.co'
const supabaseAnonKey = 'your-actual-anon-public-key-here'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
