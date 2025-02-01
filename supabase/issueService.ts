
// src/supabase/issueService.ts
import { supabase } from './client';

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
