<script lang="ts">
	import { SupabaseClient } from '@supabase/supabase-js';
	import type { PageData } from './$types';
	import { supabase } from '$lib/supabaseClient';

	export let data: PageData;
	let titre: string;
	let description: string;
	let loading: boolean = false;

	const handleCreate = async () => {
		loading = true;
		const { error } = await supabase
			.from('Cours')
			.insert({ titre: titre, description: description });
		loading = false;
	};
</script>

<div>
	<h1>Creer un nouveau cours</h1>
	<form on:submit={handleCreate}>
		<label for="titre">Titre du cours</label>
		<input type="text" bind:value={titre} />
		<label for="description">Contenu</label>
		<input type="text" bind:value={description} />
		<button type="submit" disabled={loading}>Creer nouveau cours</button>
	</form>
</div>
