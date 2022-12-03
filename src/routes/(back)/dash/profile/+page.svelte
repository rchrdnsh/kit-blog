<!-- <script>
  import { page } from '$app/stores';
  import SignIn from '$library/supabase/SignIn.svelte';
  import Profile from '$library/supabase/Profile.svelte';
  $: console.log($page.data.session);
</script>

<div class='container'>
  {#if !$page.data.session}
    <SignIn/>
  {:else}
    <Profile session={$page.data.session}/>
  {/if}
</div>

<style>
  .container {
    padding: 32px;
  }
</style> -->

<script lang='ts'>
  import { page } from '$app/stores';
  import { onMount } from 'svelte'
  import type { AuthSession } from '@supabase/supabase-js';
  import { supabase } from '$library/supabase/supabaseClient';
  import Avatar from '$library/supabase/Avatar.svelte';

  export let session: AuthSession = $page.data.session;

  let loading: boolean = false;

  let username: string | null = null;
  let full_name: string | null = null;
  let avatarUrl: string | null = null;

  onMount(() => {
    getProfile()
  })

  const getProfile = async () => {
    try {
      loading = true
      const { user } = session

      const { data, error, status } = await supabase
        .from(`team`)
        .select(`username, full_name, avatar_url`)
        .eq('id', user.id)
        .single()

      if (data) {
        username = data.username
        full_name = data.full_name
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

  async function updateProfile() {
    try {
      loading = true
      const { user } = session

      const updates = {
        id: user.id,
        username,
        full_name,
        avatar_url: avatarUrl,
        updated_at: new Date(),
      }

      let { error } = await supabase.from('team').upsert(updates)

      if (error) throw error
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      alert(`Your profile has been updated :-)`)
      loading = false
    }
  }

  async function signOut() {
    try {
      loading = true
      let { error } = await supabase.auth.signOut()
      if (error) throw error
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      alert(`You have successfully signed out :-)`)
      loading = false
    }
  }
</script>

<form on:submit|preventDefault={updateProfile}>

  <div class='profile'>
    <Avatar bind:url={avatarUrl} size={256} on:upload={updateProfile} canEdit={true}/>
    <div class='field'>
      <label for='email'>Email</label>
      <input id='email' type='text' value={session.user.email} disabled/>
    </div>
    <div class='field'>
      <label for='username'>username</label>
      <input id='username' type='text' bind:value={username}/>
    </div>
    <div class='field'>
      <label for='username'>Full Name</label>
      <input id='username' type='text' bind:value={full_name}/>
    </div>
    <!-- <div class='field'>
      <label for='provider'>Provider Name</label>
      <input id='provider' type='text' bind:value={provider}/>
    </div> -->
    <!-- <div class='field'>
      <label for='specialty'>Specialty</label>
      <input id='specialty' type='text' bind:value={specialty}/>
    </div> -->
    <!-- <div class='field'>
      <label for='address'>Address</label>
      <input id='address' type='text' bind:value={address}/>
    </div> -->
    <!-- <div class='field'>
      <label for='city'>City</label>
      <input id='city' type='text' bind:value={city}/>
    </div> -->
    <!-- <div class='field'>
      <label for='state'>State</label>
      <input id='state' type='text' bind:value={state}/>
    </div> -->
    <!-- <div class='field'>
      <label for='zip'>Zip Code</label>
      <input id='zip' type='text' bind:value={zip}/>
    </div> -->
  
    <div>
      <input
        type='submit'
        value={loading ? 'Loading...' : 'Update'}
        disabled={loading}
      />
    </div>
  </div>

  <div>
    <button on:click={signOut} disabled={loading}>Sign Out</button>
  </div>

</form>

<style>
  form {
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  .profile {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    border: 1px solid #999;
    border-radius: 12px;
    padding: 16px;
  }

  .field {
    display: grid;
    row-gap: 4px;
  }

  label {
    font-size: 12px;
  }

  input {
    width: 256px;
    height: 48px;
    padding: 0 8px;
    border-radius: 8px;
    border: 1px solid #999;
  }

  button {
    width: 100%;
    height: 48px;
    border: 1px solid #999;
    border-radius: 8px;
  }
</style>
