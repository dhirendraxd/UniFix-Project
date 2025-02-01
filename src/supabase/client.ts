// src/supabase/client.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://your-supabase-url.supabase.co';
const supabaseKey = 'your-supabase-key';
export const supabase = createClient(supabaseUrl, supabaseKey);

export const getUserIssues = async () => {
  const user = supabase.auth.user();
  if (!user) return [];

  const { data, error } = await supabase
    .from('issues')
    .select('*')
    .eq('user_id', user.id);

  if (error) {
    console.error(error);
    return [];
  }

  return data;
};

export const subscribeToIssueUpdates = (callback) => {
  return supabase
    .from('issues')
    .on('UPDATE', callback)
    .subscribe();
};
