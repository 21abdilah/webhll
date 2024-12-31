import { createClient } from '@supabase/supabase-js';

const supabaseUrl ='https://wceosjuegoeeagjqfmat.supabase.co';
const supabaseKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndjZW9zanVlZ29lZWFnanFmbWF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU2MTIzNTQsImV4cCI6MjA1MTE4ODM1NH0.Nwa88d5o4MYrHGnvp8jv4KZSV2V12YYTdfXBXwGSYXo';

export const supabase = createClient(supabaseUrl, supabaseKey);
