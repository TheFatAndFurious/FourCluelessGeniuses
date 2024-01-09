<script lang="ts">
    import { LightSwitch } from '@skeletonlabs/skeleton';
    import { AppBar } from '@skeletonlabs/skeleton';
    import {supabase} from '../../supabaseClient'
    export let userName:string;
    const handleSignOut = async () => {
    await supabase.auth.signOut()
  }
  let logout = 'true'

</script>
<header>
    <div>
        {#if logout === 'true'}
        <AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
            <svelte:fragment slot="lead">{userName}</svelte:fragment>
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