<script lang='ts'>
  import { supabase } from '$library/supabase/supabaseClient.js';

  let loading = false;
  let email: string;
  let password: string;

  const handleSignIn = async () => {
    try {
      loading = true
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) throw error
      alert('Boom! You be signed in, yo!')
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      loading = false
    }
  }
</script>

<form on:submit|preventDefault={handleSignIn}>
  <p class=''>Sign in and stuff...</p>
  <div class='field'>
    <label for="email">Email</label>
    <input class='' type='email' placeholder='Your email' bind:value={email} />
  </div>
  <div class='field'>
    <label for="password">Password</label>
    <input class='' type='password' placeholder='Your password' bind:value={password} />
  </div>
  <div>
    <input type='submit' class='' value={loading ? 'Loading' : 'Sign In'}
    disabled={loading} />
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

  label {
    font-size: 12px;
  }

  input {
    height: 48px;
    padding: 0 8px;
    border-radius: 8px;
    border: 1px solid #999;
    width: 512px;
  }
</style>