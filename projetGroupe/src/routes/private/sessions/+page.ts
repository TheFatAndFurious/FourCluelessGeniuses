import type { PageLoad } from './$types';
import { supabase } from '$lib/supabaseClient';

export const load = (async () => {
	const { data, error } = await supabase.from('session').select();
	const sessions = data;
	console.log('🚀 ~ file: +page.ts:8 ~ load ~ sessions:', sessions);
	return {
		sessions
	};
}) satisfies PageLoad;
