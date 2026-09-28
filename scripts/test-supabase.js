const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.log('Supabase credentials not found in environment variables.');
  process.exit(0);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function testConnection() {
  console.log('Testing connection to Supabase:', supabaseUrl);
  try {
    const { data, error } = await supabase.from('hotels').select('*').limit(1);
    if (error) {
      console.log('Query result on hotels table:', error.message);
    } else {
      console.log('Successfully connected! Hotels found:', data.length);
    }
  } catch (err) {
    console.error('Error during test:', err);
  }
}

testConnection();
