<script lang="ts">
	import "../app.pcss";
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
    console.log('dtis', data.session);
</script>

<svelte:head>
	<title>OpenAssRoom</title>
</svelte:head>
<div>
	<h1>Hello {data.session?.user.email}, you have {data.session?.user.role} privileges</h1>
</div>
<div class="container" style="padding: 50px 0 100px 0">
	<slot></slot>
</div>
