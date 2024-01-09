<script lang="ts">
	import type { PageData } from './$types';
	import SessionItem from '$lib/Components/Sessions/SessionItem.svelte';
	import AppRail from '$lib/Components/AppRail.svelte';
	export let data: PageData;
</script>

<SessionItem sessionName="les pimfloys" />
