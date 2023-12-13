<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const simpleCours = data?.cours;
</script>

<h1>PAGE 1 COURS</h1>
{#if data.cours}
	<h2>{simpleCours[0]?.titre}</h2>
	<p>{simpleCours[0]?.description}</p>
{/if}
