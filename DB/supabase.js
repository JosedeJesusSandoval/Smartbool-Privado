import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kttxultjqkffhrezqqwu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0dHh1bHRqcWtmZmhyZXpxcXd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM4MDMwODcsImV4cCI6MjA1OTM3OTA4N30.EKCdb7UoZY2U1MIuvC0wV_YCDNOB_qn9ZEmjui4WHgY'; // tu llave

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
