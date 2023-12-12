<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Liste des cours</h1>

{#if data.cours}
	{#each data.cours as cours}
		<a href="/private/cours/{cours.id}">
			<div>
				<p>{cours.titre}</p>
			</div>
		</a>
	{/each}
{/if}
