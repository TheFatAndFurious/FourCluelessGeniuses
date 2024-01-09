<script lang="ts">
	import { blur } from 'svelte/transition';
	export let data;
	let { supabase } = data;
	$: ({ supabase } = data);

	let email: string;
	let password: string;

	const handleSignUp = async () => {
		const response = await supabase.auth.signUp({
			email,
			password,
			options: {
				emailRedirectTo: `${location.origin}/auth/callback`
			}
		});
	};

	const handleSignIn = async () => {
		const response = await supabase.auth.signInWithPassword({
			email,
			password
		});
	};

	function getSession() {
		throw new Error('Function not implemented.');
	}
</script>

<div class="w-80 mx-auto">
	<div class=" border border-primary-900 rounded p-4 mb-2">
		<h2 class="text-center font-semibold">Créer un compte</h2>
		<div class="p-2">
			<form on:submit={handleSignUp} class="flex flex-col gap-y-2">
				<label for="email">email</label>
				<input name="email" bind:value={email} />
				<label for="password">password</label>
				<input type="password" name="password" bind:value={password} />
				<button type="submit" class="btn btn-md variant-filled">Sign up</button>
			</form>
		</div>
	</div>
	<!-- <div class=" border border-primary-900 rounded p-4">
		<h2 class="text-center font-semibold">Se connecter</h2>
		<div class="p-2">
			<form on:submit={handleSignIn} class="flex flex-col gap-y-2">
				<label for="email">email</label>
				<input name="email" bind:value={email} />
				<label for="password">password</label>
				<input type="password" name="password" bind:value={password} />
				<button type="submit" class="btn btn-md variant-filled">Sign in</button>
			</form>
		</div>
	</div> -->
</div>
