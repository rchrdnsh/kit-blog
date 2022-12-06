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
  // import { toast } from '@zerodevx/svelte-toast';
  import { success, warning, failure } from '$library/notifications/toast-themes'

  export let session: AuthSession = $page.data.session;

  let loading: boolean = false;
  let isDisabled: boolean = true;

  let username: string | null = null;
  let full_name: string | null = null;
  // $: first_name = full_name?.split(' ')
  let position: string | null = null;
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
        .select(`username, full_name, position, avatar_url`)
        .eq('id', user.id)
        .single()

      if (data) {
        username = data.username
        full_name = data.full_name
        position = data.position
        avatarUrl = data.avatar_url
      }

      if (error && status !== 406) throw error
    } catch (error) {
      if (error instanceof Error) {
        failure(error.message)
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
        username: username,
        full_name: full_name,
        position: position,
        avatar_url: avatarUrl,
        updated_at: new Date(),
      }

      let { error } = await supabase.from('team').upsert(updates)

      if (error) throw error
    } catch (error) {
      if (error instanceof Error) {
        // alert(error.message)
        failure(error.message)
      }
    } finally {
      // alert(`Your profile has been updated :-)`)
      success('Your profile has been updated :-)')
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
        // alert(error.message)
        failure(error.message)
      }
    } finally {
      // alert(`You have successfully signed out :-)`)
      success('You have successfully signed out :-)')
      loading = false
    }
  }
</script>

<div class='container'>

  <form on:submit|preventDefault={updateProfile}>
  
    <div class='profile'>

      <div class='avatar'>
        <Avatar bind:url={avatarUrl} size={256} on:upload={updateProfile} canEdit={true}/>
      </div>

      <fieldset class='text' disabled={isDisabled}>

        <div class='field'>
          <label for='full_name' class:hidden-label={isDisabled === true}>Full Name</label>
          <input class='full-name' id='full_name' type='text' bind:value={full_name}/>
        </div>

        <div class='field'>
          <label for='position' class:hidden-label={isDisabled === true}>Position</label>
          <input id='position' type='text' bind:value={position}/>
        </div>

        <div class='spacer'></div>
  
        <div class='field'>
          <label for='username' class:hidden-label={isDisabled === true}>username</label>
          <div class='username-field' class:editing-username-field={isDisabled === false}>
            <div class='at-symbol'>@</div>
            <input
              class='username-input'
              id='username'
              type='text'
              bind:value={username}
              minlength='3'
              maxlength='32'
              size={username === null ? 3 : username.length}
              style:width={
                isDisabled === false ? `100%` :
                username === null ? `calc(3ch + 16px)` :
                `calc(${username.length}ch + 16px)`
                }
            />
          </div>
        </div>
  
        <div class='field'>
          <label for='email' class:hidden-label={isDisabled === true}>Email</label>
          <input id='email' type='text' value={session.user.email} disabled/>
        </div>

      </fieldset>

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
  
  </form>

  <div>
      
    <button on:click={signOut} disabled={loading}>Sign Out</button>
  </div>

  <button on:click={() => isDisabled = !isDisabled}>Edit</button>

</div>


<style>
  .container {
    padding: 32px;
    display: grid;
  }

  form {
    grid-template-columns: 1fr;
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

  .avatar {
    /* border: 1px solid #999; */
    border-radius: 8px;
    padding: 8px;
  }

  /* fieldset {
    border: 1px solid red;
    display: grid;
    gap: 8px;
    align-items: start;
  } */

  .text {
    padding: 8px;
    border: 1px solid #999;
    border: none;
    border-radius: 8px;
    display: grid;
    /* gap: 4px; */
    align-content: center;
  }

  .field {
    display: grid;
    row-gap: 0px;
    /* border: 1px solid red; */
    padding: 0;
    line-height: 1;
    height: min-content;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
  }

  label {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    z-index: 2;
    height: min-content;
    font-size: 10px;
    line-height: 1;
    color: #888;
    /* border: 1px solid red; */
    opacity: 1;
    transform: translate(8px, -4px);
    background-color: #fff;
    width: min-content;
    white-space: nowrap;
    padding: 0 8px;
  }

  .hidden-label {
    opacity: 0;
  }

  input {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    z-index: 1;
    width: 256px;
    /* height: 48px; */
    line-height: 1;
    height: min-content;
    padding: 8px 12px;
    border-radius: 8px;
    border: 1px solid #ccc;
  }

  input:disabled {
    border: 1px solid #fff;
    background-color: #fff;
  }

  #full_name {
    font-size: 28px;
    font-family: 'Montserrat';
    font-weight: 500;
    color: #000;
    border-radius: 8px 8px 0 0;
    margin-bottom: -1px;
    line-height: 1;
    height: 48px;
  }

  #position {
    font-size: 12px;
    font-family: 'Avenir Next';
    color: rgb(43, 70, 107);
    text-transform: uppercase;
    line-height: 1;
    font-weight: 600;
    letter-spacing: 1px;
    border-radius: 0 0 8px 8px;
    height: 28px;
  }

  button {
    width: 100%;
    height: 48px;
    border: 1px solid #999;
    border-radius: 8px;
  }

  .spacer {
    width: 1px;
    height: 32px;
  }

  .username-field {
    width: min-content;
    border: 1px solid #ccc;
    border-radius: 8px;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: min-content minmax(min-content, 1fr);
    /* grid-template-columns: min-content min-content; */
    align-items: center;
    padding: 0;
    padding-left: 8px;
    white-space: nowrap; 
    background-color: #ccc;
    /* display: block; */
    max-width: 100%;
  }

  .editing-username-field {
    background-color: #fff;
    width: 100%;
  }

  .at-symbol {
    /* border: 1px solid red; */
    grid-column: 1 / 2;
    padding: 0;
    font-size: 16px;
    margin-bottom: -2px;
    background-color: none;
    width: min-content;
    display: inline-block;
  }
  .username-input:disabled {
    border: none;
    background-color: #ccc;
    /* width: min-content; */
    /* border: 1px solid red; */
    /* display: grid; */
    /* min-width: 3ch; */
    /* max-width: 100%; */
    width: 100%;
  }
  .username-input {
    grid-column: 2 / 3;
    border: none;
    display: inline-block;
    /* min-width: min-content; */
    /* width: 100%; */
    padding: 6px 0;
    font-size: 16px;
    background-color: #fff;
    color: #000;
    border-radius: 0 8px 8px 0;
    /* border: 1px solid red; */
    /* display: grid; */
    /* grid-template-columns: minmax(0, fit-content); */
  }



  /* #username {
    font-size: 14px;
    color: #999;
    border-radius: 8px;
  } */
</style>
