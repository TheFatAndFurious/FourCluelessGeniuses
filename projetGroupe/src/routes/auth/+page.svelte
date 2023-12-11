<!-- // src/routes/auth/+page.svelte -->
<script lang="ts">
	export let data;
	let { supabase } = data;
	$: ({ supabase } = data);
	console.log(data.session);

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
		console.log('3333', response);
	};

	const handleSignIn = async () => {
		const response = await supabase.auth.signInWithPassword({
			email,
			password
		});
		console.log('🚀 ~ file: +page.svelte:26 ~ handleSignIn ~ response:', response);
	};

	const handleSignOut = async () => {
		await supabase.auth.signOut();
	};

	function getSession() {
		throw new Error('Function not implemented.');
	}
</script>

<form on:submit={handleSignUp}>
	<input name="email" bind:value={email} />
	<input type="password" name="password" bind:value={password} />
	<button>Sign up</button>
</form>

<form on:submit={handleSignIn}>
	<input name="email" bind:value={email} />
	<input type="password" name="password" bind:value={password} />
	<button>Sign in</button>
</form>

<button on:click={handleSignIn}>Sign in</button>
<button on:click={handleSignOut}>Sign out</button>
