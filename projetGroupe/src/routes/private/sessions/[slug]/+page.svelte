<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const session = data.session[0];
</script>

<h3>Details de la session</h3>
<h4>Nom de session: {session.name_session}</h4>
<p>Type de formation:{session.id_formation}</p>
<p>Date de debut: {session.start_session}</p>
<p>Date de fin: {session.end_session}</p>
