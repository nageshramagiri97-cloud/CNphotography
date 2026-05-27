import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kwadcyynyjxpavbstptx.supabase.co';
const supabaseKey = 'sb_publishable_03qKDRlqevD1m-CBEjF8cA_x6_7fqEf';

export const supabase = createClient(supabaseUrl, supabaseKey);
