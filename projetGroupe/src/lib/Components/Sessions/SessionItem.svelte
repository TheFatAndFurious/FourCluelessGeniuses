<script lang="ts">
	export let sessionName: string;
	export let sessionBlason: string = 'https://picsum.photos/400';
</script>

<div class="flex flex-col bg-transparent w-28 p-4">
	<img src={sessionBlason} alt="foret" class="object-cover w-20 h-20 rounded-2xl p-2 mx-auto" />
	<div>
		<p class="text-center">{sessionName}</p>
	</div>
</div>
