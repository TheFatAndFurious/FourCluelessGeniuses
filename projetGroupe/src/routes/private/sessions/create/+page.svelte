<script lang="ts">
	import { supabase } from '$lib/supabaseClient';
	import type { PageData } from './$types';

	export let data: PageData;
	let name_session: string;
	let id_formation: number;
	let start_session: string;
	let end_session: string;

	const handleCreateSession = async () => {
		const response = await supabase.from('session').insert([
			{
				name_session: name_session,
				id_formation: id_formation,
				start_session: start_session,
				end_session: end_session
			}
		]);
		console.log('🚀 ~ file: +page.svelte:20 ~ handleCreateSession ~ response:', response);
	};
</script>

<h1>Creer une nouvelle session</h1>

<form on:submit={handleCreateSession} class="flex flex-col w-80">
	<label for="name_session">Nom de la session</label>
	<input type="text" bind:value={name_session} id="" />
	<label for="id_formation">Type de formation</label>
	<input type="text" bind:value={id_formation} id="" />
	<label for="start_session">Debut de formation</label>
	<input type="date" bind:value={start_session} id="" />
	<label for="end_session">Date de fin de formation</label>
	<input type="date" bind:value={end_session} id="" />
	<button type="submit">Creer la session</button>
</form>
