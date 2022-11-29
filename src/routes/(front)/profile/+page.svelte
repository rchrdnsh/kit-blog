<script>
  import { page } from '$app/stores';
  import SignIn from '$library/supabase/SignIn.svelte';
  import Profile from '$library/supabase/Profile.svelte';
  
</script>

<svelte:head>
  <title>Supabase + SvelteKit</title>
  <meta name="description" content="SvelteKit using supabase-js v2" />
</svelte:head>

{#if !$page.data.session}
  <SignIn/>
{:else}
  <Profile session="{$page.data.session}"/>
{/if}