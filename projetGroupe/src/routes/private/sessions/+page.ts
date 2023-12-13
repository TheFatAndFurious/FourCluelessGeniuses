import type { PageLoad } from './$types';
import { supabase } from '$lib/supabaseClient';

export const load = (async () => {
	const response = await supabase.from('session').select();
	const sessions = response;
	return {
		sessions
	};
}) satisfies PageLoad;
