<script lang='ts'>
  import { onMount } from 'svelte'
  import type { AuthSession } from '@supabase/supabase-js';
  import { supabase } from '$library/supabase/supabaseClient.js';

  export let session: AuthSession
  

  let loading = false
  let username: string | null = null
  let website: string | null = null
  let avatarUrl: string | null = null

  onMount(() => {
    getProfile()
  })

  const getProfile = async () => {
    try {
      loading = true
      const { user } = session

      const { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url`)
        .eq('id', user.id)
        .single()

      if (data) {
        username = data.username
        website = data.website
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
        website,
        avatar_url: avatarUrl,
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

<form class="" on:submit|preventDefault="{updateProfile}">
  <div class='field'>
    <label for="email">Email</label>
    <input id="email" type="text" value="{session.user.email}" disabled />
  </div>
  <div class='field'>
    <label for="username">Name</label>
    <input id="username" type="text" bind:value="{username}" />
  </div>
  <div class='field'>
    <label for="website">Website</label>
    <input id="website" type="website" bind:value="{website}" />
  </div>

  <div>
    <input type="submit" class="button block primary" value={loading ? 'Loading...' : 'Update'}
    disabled={loading} />
  </div>

  <div>
    <button class="button block" on:click="{signOut}" disabled="{loading}">Sign Out</button>
  </div>
</form>

<style>
  form {
    width: 50%;
    height: min-content;
    padding: 16px;
    display: grid;
    row-gap: 8px;
    place-self: center;
  }

  .field {
    display: grid;
    row-gap: 4px;
  }

  /* label {
    font-size: 12px;
  }

  input {
    height: 48px;
    padding: 0 8px;
    border-radius: 8px;
    border: 1px solid #999;
  } */
</style>