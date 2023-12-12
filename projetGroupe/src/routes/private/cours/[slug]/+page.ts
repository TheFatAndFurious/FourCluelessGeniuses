import type { PageLoad } from './$types';
import { supabase } from '$lib/supabaseClient';

export const load = (async ({ params }) => {
	const { data, error } = await supabase.from('Cours').select().eq('id', params.slug);
	const cours = data;
	return {
		cours
	};
}) satisfies PageLoad;
