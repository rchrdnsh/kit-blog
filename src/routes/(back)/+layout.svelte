<!-- taking out typescript for the moment -->

<!-- <script lang='ts'> -->
<script>
  import { page } from '$app/stores';
  import SignIn from '$library/supabase/SignIn.svelte';
  // import ArrowLogo from './arrow-logo-1024.png';
  // import { onMount } from 'svelte'
  // import type { AuthSession } from '@supabase/supabase-js';
  import { supabase } from '$library/supabase/supabaseClient';
  import Avatar from '$library/supabase/Avatar.svelte'
  // import { SvelteToast } from '@zerodevx/svelte-toast';
  // import Profile from '$library/supabase/Profile.svelte';
  // $: console.log($page.data.session);
  // $: console.log($page.data.session.user.email);
  // let session: AuthSession = $page.data.session
  // import { toast } from '@zerodevx/svelte-toast';
  import { success, warning, failure } from '$library/notifications/toast-themes'

  // let loading: boolean = false
  let loading = false

  // let username: string | null = null
  let username = null
  // let full_name: string | null = null
  let full_name = null
  $: first_name = full_name?.split(' ')[0]
  // let avatarUrl: string | null = null
  let avatarUrl = null
  // let role: string | null = null
  let position = null

  let data;

  // interface Member {
  //   id: string,
  //   username: string,
  //   full_name: string,
  //   avatar_url: string,
  //   position: string | null
  // }

  // let member: Member
  let member;

  // import { readable } from 'svelte/store';

  const team = supabase
    .channel('table-db-changes')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'team' }, (payload) => {
      console.log(payload.new)
      avatarUrl = payload.new.avatar_url;
      // return data = payload.new;
      // updateProfile(payload.new);
    }
    )
    .subscribe()

  $: console.log(avatarUrl);

  const getProfile = async () => {
    try {
      loading = true
      const { user } = $page.data.session

      const { data, error, status } = await supabase
        .from(`team`)
        .select(`full_name, avatar_url`)
        .eq('id', user.id)
        .single()

      if (data) {
        full_name = data.full_name
        avatarUrl = data.avatar_url
      }

      if (error && status !== 406) throw error
    } catch (error) {
      if (error instanceof Error) {
        // alert(error.message)
        failure(error.message)
      }
    } finally {
      loading = false
    }
  }

  $: $page.data.session, getProfile();

  // const updateProfile = (member: Member) => {
  const updateProfile = (member) => {
    avatarUrl = member.avatar_url;
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
        <a href='/dash/profile' class='nav-title'>{`Hello, ${first_name}` || ``}</a>
        <div class='avatar'>
          <Avatar bind:url={avatarUrl} size={36}/>
        </div>
      </div>
    </nav>
    <div class='menu'>
      <div class='text'>
        <a href='/dash'><h3>Home</h3></a>
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
      <!-- <SvelteToast/> -->
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
    row-gap: 16px;
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