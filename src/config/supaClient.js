import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
// const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY
const supabaseKey = process.env.REACT_APP_SUPABASE_SECRET
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;