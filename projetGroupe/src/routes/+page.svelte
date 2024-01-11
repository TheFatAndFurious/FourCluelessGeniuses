<script lang="ts">
	import { goto } from '$app/navigation';
	import { blur } from 'svelte/transition';
	export let data;
	let { supabase } = data;
	$: ({ supabase } = data);

	let email: string;
	let password: string;

	// const handleSignUp = async () => {
	// 	const response = await supabase.auth.signUp({
	// 		email,
	// 		password,
	// 		options: {
	// 			emailRedirectTo: `${location.origin}/auth/callback`
	// 		}
	// 	});
	// };

	const handleSignIn = async () => {
		const response = await supabase.auth.signInWithPassword({
			email,
			password
		});
		goto('/private/cours');
	};

	function getSession() {
		throw new Error('Function not implemented.');
	}
</script>

<!-- =============================================================================================================================== -->

<div class="flex flex-col items-center gap-10">
	<span>
		<svg
			class="cross_top_left"
			xmlns="http://www.w3.org/2000/svg"
			width="31"
			height="31"
			viewBox="0 0 31 31"
			><g transform="translate(-32.5 -25.262)"
				><path d="M.5,31h-1V0h1Z" transform="translate(48.5 25.262)" fill="#7b7b7b" /><path
					d="M.5,31h-1V0h1Z"
					transform="translate(63.5 41.262) rotate(90)"
					fill="#6b6b6b"
				/><path
					d="M5.5,0A5.5,5.5,0,1,1,0,5.5,5.5,5.5,0,0,1,5.5,0Z"
					transform="translate(43 35.762)"
					fill="#dadada"
				/></g
			></svg
		>
	</span>
	<span>
		<svg
			class="cross_top_rigth"
			xmlns="http://www.w3.org/2000/svg"
			width="31"
			height="31"
			viewBox="0 0 31 31"
			><g transform="translate(-32.5 -25.262)"
				><path d="M.5,31h-1V0h1Z" transform="translate(48.5 25.262)" fill="#7b7b7b" /><path
					d="M.5,31h-1V0h1Z"
					transform="translate(63.5 41.262) rotate(90)"
					fill="#6b6b6b"
				/><path
					d="M5.5,0A5.5,5.5,0,1,1,0,5.5,5.5,5.5,0,0,1,5.5,0Z"
					transform="translate(43 35.762)"
					fill="#dadada"
				/></g
			></svg
		>
	</span>
	<div class="connexion_container bg-primary-500">
		<img class="img_connexion" src="../../logo.png" alt="Logo Adrar" />
		<h2 class="text-tertiary-600">CONNEXION</h2>
		<form on:submit={handleSignIn} class="flex flex-col items-center gap-y-2">
			<div class="flex flex-col">
				<div class="input-field">
					<input class="text-tertiary-500" id="email" type="email" bind:value={email} />
					<label for="email">E-mail</label>
				</div>
				<div class="input-field text-primary-900">
					<input class="text-tertiary-500" id="password" type="password" bind:value={password} />
					<label for="password">Mot de passe</label>
				</div>
			</div>
			<button type="submit" class="btn_connexion btn btn-md bg-tertiary-400 hover:bg-tertiary-500"
				>ME CONNECTER</button
			>
		</form>
	</div>
	<p class="p_connexion text-tertiary-500">ADRAR ONLINE</p>
	<span>
		<svg
			class="cross_bottom_left"
			xmlns="http://www.w3.org/2000/svg"
			width="31"
			height="31"
			viewBox="0 0 31 31"
			><g transform="translate(-32.5 -25.262)"
				><path d="M.5,31h-1V0h1Z" transform="translate(48.5 25.262)" fill="#7b7b7b" /><path
					d="M.5,31h-1V0h1Z"
					transform="translate(63.5 41.262) rotate(90)"
					fill="#6b6b6b"
				/><path
					d="M5.5,0A5.5,5.5,0,1,1,0,5.5,5.5,5.5,0,0,1,5.5,0Z"
					transform="translate(43 35.762)"
					fill="#dadada"
				/></g
			></svg
		>
	</span>
	<span>
		<svg
			class="cross_bottom_rigth"
			xmlns="http://www.w3.org/2000/svg"
			width="31"
			height="31"
			viewBox="0 0 31 31"
			><g transform="translate(-32.5 -25.262)"
				><path d="M.5,31h-1V0h1Z" transform="translate(48.5 25.262)" fill="#7b7b7b" /><path
					d="M.5,31h-1V0h1Z"
					transform="translate(63.5 41.262) rotate(90)"
					fill="#6b6b6b"
				/><path
					d="M5.5,0A5.5,5.5,0,1,1,0,5.5,5.5,5.5,0,0,1,5.5,0Z"
					transform="translate(43 35.762)"
					fill="#dadada"
				/></g
			></svg
		>
	</span>
</div>

<!-- =============================================================================================================================== -->

<style lang="scss">
	.connexion_container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
		margin-left: auto;
		margin-right: auto;
		padding: 20px;
		width: 400px;
		border: solid 1px rgb(139, 139, 139);
		border-radius: 6px;
		box-shadow: 5px 5px 20px 2px rgba(0, 0, 0, 0.37);
	}
	.img_connexion {
		width: 110px;
		height: 110px;
	}

	h2 {
		font-size: 1.5rem;
		font-weight: 800;
	}

	.input-field {
		margin: 0;
		width: 250px;
	}

	input {
		border-bottom: 1px solid rgb(102, 102, 102) !important;
		height: 10px;
	}

	.btn_connexion {
		margin: 30px 0 10px 0;
		width: 150px;
		font-weight: 600;
	}

	label {
		position: absolute;
		top: 8px;
		color: rgb(102, 102, 102) !important;
	}

	.p_connexion {
		font-family: 'Cooper';
		font-size: 1.4rem;
	}

	.cross_top_left {
		position: absolute;
		top: 10px;
		left: 10px;
		opacity: 0.5;
	}

	.cross_top_rigth {
		position: absolute;
		top: 10px;
		right: 10px;
		opacity: 0.5;
	}

	.cross_bottom_left {
		position: absolute;
		bottom: 10px;
		left: 10px;
		opacity: 0.5;
	}

	.cross_bottom_rigth {
		position: absolute;
		bottom: 10px;
		right: 10px;
		opacity: 0.5;
	}
</style>
