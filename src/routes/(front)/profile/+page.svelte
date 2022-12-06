<script>
  import { page } from '$app/stores';
  import SignIn from '$library/supabase/SignIn.svelte';
  import Profile from '$library/supabase/Profile.svelte';
  // $: console.log($page.data.session);
</script>

<svelte:head>
  <title>Supabase + SvelteKit</title>
  <meta name="description" content="SvelteKit using supabase-js v2" />
</svelte:head>

{#if !$page.data.session}
  <SignIn/>
{:else if $page.data.session && !$page.data.session.user.email.includes(`@arrowgtp.com`)}
  <Profile session={$page.data.session}/>
{:else if $page.data.session && $page.data.session.user.email.includes(`@arrowgtp.com`)}
  <div class='redirect'>
    <p>This is the profile page for providers...</p>
    <p>You want the team member profile page <a href='/dash/profile'>Here</a></p>
  </div>
{/if}

<style>
  .redirect {
    place-self: center;
    width: 512px;
    height: 256px;
    display: grid;
    align-content: center;
    justify-items: center;
    gap: 32px;
    border: 1px solid #999;
    border-radius: 16px;
  }
</style>