<script lang='ts'>
  import { page } from '$app/stores';
  import SignIn from '$library/supabase/SignIn.svelte';
  import { onMount } from 'svelte'
  import type { AuthSession } from '@supabase/supabase-js';
  import { supabase } from '$library/supabase/supabaseClient';
  // import Profile from '$library/supabase/Profile.svelte';
  $: console.log($page.data.session);
  // $: console.log($page.data.session.user.email);
  let session: AuthSession = $page.data.session

  let loading: boolean = false

  let username: string | null = null
  let provider: string | null = null
  let avatarUrl: string | null = null
  let specialty: string | null = null
  let address: string | null = null
  let city: string | null = null
  let state: string | null = null
  let zip: string | null = null

  onMount(() => {
    getProfile()
  })

  const getProfile = async () => {
    try {
      loading = true
      const { user } = session

      const { data, error, status } = await supabase
        .from(`profiles`)
        .select(`username, provider, specialty, avatar_url, address, city, state, zip`)
        .eq('id', user.id)
        .single()

      if (data) {
        username = data.username
        provider = data.provider
        specialty = data.specialty
        avatarUrl = data.avatar_url
        address = data.address
        city = data.city
        state = data.state
        zip = data.zip
      }

      if (error && status !== 406) throw error
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      loading = false
    }
  }
</script>

<div class='back'>
  {#if !$page.data.session}
    <div class='admin-sign-in'>
      <SignIn/>
    </div>
  {:else if $page.data.session && !$page.data.session.user.email.includes(`@arrowgtp.com`)}
    <p class='warning'>You do not have permission<br/>to view this page.</p>
  {:else if $page.data.session && $page.data.session.user.email.includes(`@arrowgtp.com`)}
    <nav>
      <a href='/dash'><h3>Dashboard</h3></a>
      <a href='/dash/profile'>Hello, {provider}</a>
      <img src={avatarUrl} alt={`Avatar of the current user`}/>
    </nav>
    <div class='menu'>
      <div class='text'>
        <h3>Collections</h3>
        <!-- <p>News Editor</p> -->
        <!-- <p>Art Editor</p> -->
        <!-- <p>Blog Editor</p> -->
        <a href='/dash/list'><p>List</p></a>
        <a href='/dash/posts'><p>Posts</p></a>
        <a href='/dash/providers'><p>Providers</p></a>
      </div>
    </div>
    <main>
      <slot/>
    </main>
  {/if}
</div>




<style>
  .back {
    width: calc(100vw - 16px);
    height: calc(100vh - 48px);
    border: 1px solid black;
    border-radius: 16px;
    display: grid;
    grid-template-columns: 192px 1fr;
    grid-template-rows: 64px 1fr;
  }

  .admin-sign-in {
    grid-row: 1 / 3;
    grid-column: 1 / 3;
    place-self: center;
  }

  .warning {
    width: 512px;
    height: 512px;
    background-color: #fff;
    border: 1px solid #999;
    border-radius: 16px;
    grid-row: 1 / 3;
    grid-column: 1 / 3;
    place-self: center;
    display: grid;
    place-content: center;
    color: red;
    font-size: 32px;
    padding: 32px;
    text-align: center;
  }

  nav {
    grid-row: 1 / 2;
    grid-column: 1 / 3;
    width: 100%;
    height: 100%;
    padding: 16px;
    border-bottom: 1px solid black;
    display: grid;
    align-items: center;
    justify-content: space-between;
    grid-auto-flow: column;
  }

  .menu {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    height: 100%;
    width: 100%;
    padding: 16px;
    border-right: 1px solid black;
  }

  .text {
    display: grid;
    row-gap: 8px;
  }

  main {
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    width: 100%;
    min-width: 0;
    height: 100%;
    min-height: 0;
  }
</style>