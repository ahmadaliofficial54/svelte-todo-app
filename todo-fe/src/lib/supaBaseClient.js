import { createClient } from '@supabase/supabase-js'
// import { anon_key, project_url } from '$env/static/private';
export const supabase = createClient("https://mxynznverodbjkegwudw.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14eW56bnZlcm9kYmprZWd3dWR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU0NDUxODksImV4cCI6MjA0MTAyMTE4OX0.iVlvpiQHfQWSH3H7DJ-5kiarfwzcjB6OCCO-LT4eTck");