<script lang="ts">
	import { AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
	import { appRailOptions } from '$lib/const';
	import { page } from '$app/stores';
</script>

<AppRail height="h-screen">
	{#each appRailOptions as option}
		<AppRailAnchor
			href={option.href}
			slot={option?.slot}
			selected={$page.url.pathname === `${option.href}`}>{option.name}</AppRailAnchor
		>
	{/each}
</AppRail>
