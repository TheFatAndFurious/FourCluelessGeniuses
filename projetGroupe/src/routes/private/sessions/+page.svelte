<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const sessions = data.sessions;
	console.log('🚀 ~ file: +page.svelte:6 ~ sessions:', sessions.data);
</script>

<h1>Liste des sessions</h1>
<div>
	{#each sessions.data as session}
		<div>
			<a href="/private/sessions/{session.id_session}">
				<h3>{session.name_session}</h3>
			</a>
		</div>
	{/each}
</div>
