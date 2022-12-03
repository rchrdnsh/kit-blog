<script lang='ts'>
  import { page } from '$app/stores';
  import SignIn from '$library/supabase/SignIn.svelte';
  // import ArrowLogo from './arrow-logo-1024.png';
  // import { onMount } from 'svelte'
  import type { AuthSession } from '@supabase/supabase-js';
  import { supabase } from '$library/supabase/supabaseClient';
  import Avatar from '$library/supabase/Avatar.svelte'
  // import Profile from '$library/supabase/Profile.svelte';
  $: console.log($page.data.session);
  // $: console.log($page.data.session.user.email);
  let session: AuthSession = $page.data.session

  let loading: boolean = false

  let username: string | null = null
  let avatarUrl: string | null = null

  const getProfile = async () => {
    try {
      loading = true
      const { user } = session

      const { data, error, status } = await supabase
        .from(`team`)
        .select(`username, avatar_url`)
        .eq('id', user.id)
        .single()

      if (data) {
        username = data.username
        avatarUrl = data.avatar_url
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

  $: if ($page.data.session) {
    console.log(`running dat shit!`)
    getProfile()
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
      <div class='logo'>
        <img src='/arrow-logo.png' alt='Company Logo'/>
        <a href='/dash' class='nav-title'>Company Dashboard</a>
      </div>
      <div class='profile'>
        <a href='/dash/profile' class='nav-title'>{`Hello, ${username}` || ``}</a>
        <div class='avatar'>
          <Avatar bind:url={avatarUrl} size={36}/>
        </div>
      </div>
    </nav>
    <div class='menu'>
      <div class='text'>
        <a href='/dash/profile'><h3>Profile</h3></a>
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
    overflow: hidden;
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
    padding: 0 12px;
    background-color: #265dab;
  }

  .nav-title {
    font-size: 18px;
    /* font-weight: bold; */
    color: white;
    text-shadow: 1px 1px 1px black;
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

  .profile {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    column-gap: 8px;
  }

  .avatar {
    width: min-content;
    height: min-content;
    border: 2px solid #fff;
    border-radius: 50%;
    overflow: hidden;
    display: grid;
    margin: 0;
    /* padding: 2px; */
    background-color: white;
    /* box-shadow: inset 0px 0px 2px black; */
  }

  .logo {
    /* border: 2px solid #000; */
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    column-gap: 8px;
    /* border-radius: 50%; */
  }

  img {
    width: 44px;
    height: 44px;
  }
</style>