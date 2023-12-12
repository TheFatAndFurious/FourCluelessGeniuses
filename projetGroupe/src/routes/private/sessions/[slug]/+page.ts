import type { PageLoad } from './$types';
import { supabase } from '$lib/supabaseClient';

export const load = (async ({ params }) => {
	const { data, error } = await supabase.from('session').select().eq('id_session', params.slug);
	const session = data;
	return { session };
}) satisfies PageLoad;
