import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gouysdgbuqwmymitekdf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdvdXlzZGdidXF3bXltaXRla2RmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0MDU3OTUsImV4cCI6MjA1Mzk4MTc5NX0.fXedn4EHS-jpbafOXOdv129p4D29dwUeHwrGQuDHpug';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

