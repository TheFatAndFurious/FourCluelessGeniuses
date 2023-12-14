<script lang="ts">
	import SessionItem from './SessionItem.svelte';
	export let sessions: [];
</script>

<div class="flex flex-col bg-gray-300 rounded-2xl border border-gray-600">
	<div class="w-full bg-blue-400 rounded-t-2xl border-b border-gray-600">
		<h2 class="py-3 px-6 text-gray-600 uppercase font-semibold">sessions</h2>
	</div>
	<div class="flex">
		{#each sessions as session}
			<a href="/private/sessions/{session.id_session}">
				<SessionItem sessionName={session.name_session} />
			</a>
		{/each}
	</div>
</div>
