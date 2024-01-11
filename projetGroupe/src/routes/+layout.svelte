<script lang="ts">
	import '../app.css';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import AppRail from '$lib/Components/AppRail.svelte';

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => subscription.unsubscribe();
	});

	const handleSignOut = async () => {
		await supabase.auth.signOut();
	};
</script>

<svelte:head>
	<title>OpenAssRoom</title>
</svelte:head>
<Header userName={userName.firstName}{userName.lastName}/>

{#if data.session}
	<div>
		<h3>Hello {data.session?.user.email}, you have {data.session?.user.role} privileges</h3>
		<button on:click={handleSignOut} class="btn variant-outline-warning">Deconnection</button>
	</div>
{:else}
	<div>
		<h3>Bonjour bel inconnu(e)</h3>
	</div>
{/if}
<div class="flex flex-col">
	<h3 class="text-primary-900 font-bold underline">Routes actuelles:</h3>
	<ul>
		<li><a href="/private/cours">Liste des cours</a></li>
		<li><a href="/private/cours/create">Creer un cours</a></li>
		<li><a href="/private/sessions">Liste des sessions</a></li>
	</ul>
</div>
<div class="container" style="padding: 50px 0 100px 0">
	<slot />
</div>
