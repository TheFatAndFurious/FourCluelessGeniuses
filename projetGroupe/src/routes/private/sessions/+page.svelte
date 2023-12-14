<script lang="ts">
	import type { PageData } from './$types';
	import SessionsContainer from '$lib/Components/Sessions/SessionsContainer.svelte';
	export let data: PageData;
	const sessions = data.sessions;
	console.log('🚀 ~ file: +page.svelte:6 ~ sessions:', sessions);
</script>

<div class="w-4/5 mx-auto">
	<h1>Sessions</h1>
	<SessionsContainer sessions={sessions.data} />
</div>
