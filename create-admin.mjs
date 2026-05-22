import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function setupAdmin() {
  const { data, error } = await supabase.from('admin_users').insert([
    { username: 'admin', password: 'admin123' }
  ]).select();
  
  if (error) {
    console.error("Error:", error.message);
  } else {
    console.log("Admin user created successfully!", data);
  }
}

setupAdmin();
