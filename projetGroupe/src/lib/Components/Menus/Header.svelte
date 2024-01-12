<script lang="ts">
    import { LightSwitch } from '@skeletonlabs/skeleton';
    import { AppBar } from '@skeletonlabs/skeleton';
    import {supabase} from '../../supabaseClient'

    // export let userName:string;
    export let data:object;
    const handleSignOut = async () => {
		await supabase.auth.signOut();
	};
    supabase.auth.signOut().then((e)=>{
        console.log(e)
    })
 
    


  let logout = 'true'


</script>
<header>
    <div>
        {#if data.session?.user.email !== undefined}
        <AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
            <svelte:fragment slot="lead">{data.session?.user.email}</svelte:fragment>
            <svelte:fragment slot="trail"><LightSwitch /></svelte:fragment>
            <svelte:fragment slot="default"><button class="btn btn-md variant-filled" on:click="{handleSignOut}">Sign out</button></svelte:fragment>
        </AppBar>
        {:else}
        <AppBar gridColumns="grid-cols-2" slotDefault="place-self-center" slotTrail="place-content-end">
            <svelte:fragment slot="trail"><LightSwitch /></svelte:fragment>
        </AppBar>
        {/if}
       
    </div>
</header>

<style>

</style>