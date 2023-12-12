<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const simpleCours = data?.cours[0];
</script>

<h1>PAGE 1 COURS</h1>
{#if data.cours}
	<h2>{simpleCours.titre}</h2>
	<p>{simpleCours.description}</p>
{/if}
