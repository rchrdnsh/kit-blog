<script lang='ts'>
  import { supabase } from '$library/supabase/supabaseClient.js';

  let loading = false;
  let email: string;
  let password: string;

  const handleSignIn = async () => {
    try {
      loading = true
      const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: 'https://example.com/update-password',
      })
      // const { error } = await supabase.auth.signInWithPassword({ email, password })
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
  <p class='sign-in-title'>Sign In</p>
  <div class='field'>
    <label for='email'>Email</label>
    <input type='email' placeholder='Your email' bind:value={email}/>
  </div>
  <div class='field'>
    <label for='password'>Password</label>
    <input type='password' placeholder='Your password' bind:value={password}/>
  </div>
  <hr/>
  <div>
    <input class='sign-in-button' type='submit' value={loading ? 'Loading' : 'Sign In'}
    disabled={loading} />
  </div>

  <p class='sign-up-link'>Forget your password? <a href='/signup'>Reset it here :-)</a></p>
  <p class='sign-up-link'>Don't have a profile set up yet? <a href='/signup'>Sign up here :-)</a></p>
</form>

<style>
  .sign-in-title {
    font-size: 20px;
    justify-self: center;
  }

  form {
    background-color: #eee;
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
    background-color: #fff;
  }

  .sign-up-link {
    justify-self: center;
  }
</style>