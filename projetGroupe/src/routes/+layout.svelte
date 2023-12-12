<script lang="ts">
	import '../styles.css';
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
</script>

<svelte:head>
	<title>OpenAssRoom</title>
</svelte:head>
<div>
	<h3>Hello {data.session?.user.email}, you have {data.session?.user.role} privileges</h3>
</div>
<div>
	Routes actuelles:
	<a href="/private/cours">Liste des cours</a>
	<a href="/private/cours/create">Creer un cours</a>
</div>
<div class="container" style="padding: 50px 0 100px 0">
	<slot />
</div>
