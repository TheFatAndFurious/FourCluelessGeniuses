<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';

	// export let data../../account/$types.js;
	// export let form../../account/$types.js;

	// let { session, supabase, profile } = data;
	// $: ({ session, supabase, profile } = data);

	// let profileForm: HTMLFormElement;
	// let loading = false;
	// let fullName: string = profile?.full_name ?? '';
	// let username: string = profile?.username ?? '';
	// let website: string = profile?.website ?? '';
	// let avatarUrl: string = profile?.avatar_url ?? '';

	// const handleSubmit: SubmitFunction = () => {
	// 	loading = true;
	// 	return async () => {
	// 		loading = false;
	// 	};
	// };

	// const handleSignOut: SubmitFunction = () => {
	// 	loading = true;
	// 	return async ({ update }) => {
	// 		loading = false;
	// 		update();
	// 	};
	// };
</script>

<div class="form-widget">
	<div><h1>test</h1></div>
	<!-- <form
		class="form-widget"
		method="post"
		action="?/update"
		use:enhance={handleSubmit}
		bind:this={profileForm}
	>
		<div>
			<label for="email">Email</label>
			<input type="text" id="email" value={session?.user.email} disabled />
		</div>
		<div>
			<label for="fullName">Full Name</label>
			<input type="text" id="fullName" name="fullName" value={form?.fullName ?? fullName} />
		</div>
		<div>
			<label for="username">Username</label>
			<input type="text" id="username" name="username" value={form?.username ?? username} />
		</div>
		<div>
			<label for="website">Website</label>
			<input type="text" id="website" name="website" value={form?.website ?? website} />
		</div>
		<div>
			<input
				type="submit"
				class="button block primary"
				value={loading ? 'Loading...' : 'Update'}
				disabled={loading}
			/>
		</div>
	</form>
	<form action="?/signout" method="post" use:enhance={handleSignOut}>
		<div>
			<button class="button block" disabled={loading}> Sign out </button>
		</div>
	</form> -->
</div>
