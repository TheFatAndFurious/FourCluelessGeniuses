import type { PageLoad } from './$types';
import { supabase } from '$lib/supabaseClient';

export const load = (async () => {
	const { data, error } = await supabase.from('Cours').select();
	const cours = data;
	return {
		cours
	};
}) satisfies PageLoad;
