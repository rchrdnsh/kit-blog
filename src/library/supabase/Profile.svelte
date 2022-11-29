<script lang='ts'>
  import { onMount } from 'svelte'
  import type { AuthSession } from '@supabase/supabase-js';
  import { supabase } from '$library/supabase/supabaseClient.js';

  export let session: AuthSession

  let loading = false

  let username: string | null = null
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
        .from('profiles')
        .select(`username, specialty, avatar_url, address, city, state, zip`)
        .eq('id', user.id)
        .single()

      if (data) {
        username = data.username
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

  async function updateProfile() {
    try {
      loading = true
      const { user } = session

      const updates = {
        id: user.id,
        username,
        specialty,
        avatar_url: avatarUrl,
        address,
        city,
        state,
        zip,
        updated_at: new Date(),
      }

      let { error } = await supabase.from('profiles').upsert(updates)

      if (error) throw error
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
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
      loading = false
    }
  }
</script>

<form on:submit|preventDefault={updateProfile}>
  <div class='field'>
    <label for='email'>Email</label>
    <input id='email' type='text' value={session.user.email} disabled/>
  </div>
  <div class='field'>
    <label for='username'>Name</label>
    <input id='username' type='text' bind:value={username}/>
  </div>
  <div class='field'>
    <label for='specialty'>Specialty</label>
    <input id='specialty' type='text' bind:value={specialty}/>
  </div>
  <div class='field'>
    <label for='address'>Address</label>
    <input id='address' type='text' bind:value={address}/>
  </div>
  <div class='field'>
    <label for='city'>City</label>
    <input id='city' type='text' bind:value={city}/>
  </div>
  <div class='field'>
    <label for='state'>State</label>
    <input id='state' type='text' bind:value={state}/>
  </div>
  <div class='field'>
    <label for='zip'>Zip Code</label>
    <input id='zip' type='text' bind:value={zip}/>
  </div>

  <div>
    <input
      type='submit'
      value={loading ? 'Loading...' : 'Update'}
      disabled={loading}
    />
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