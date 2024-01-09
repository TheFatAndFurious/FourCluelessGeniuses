<script lang="ts">
	import '../app.css';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

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
{#if data.session}
	<div>
		<h3>Hello {data.session?.user.email}, you have {data.session?.user.role} privileges</h3>
		<button on:click={handleSignOut} class="btn variant-outline-warning">Deconnection</button>
	</div>
{:else}
	<!-- <div>
		<h3>Bonjour bel inconnu(e)</h3>
	</div> -->
{/if}
<div class="bg-secondary-500" style="display:flex; justify-content: center; align-items: center; height: 100vh;">
	<slot />
</div>

<style>
	
</style>