<!-- <script>
  import { supabase } from '$library/supabase/supabaseClient.js';

  let loading = false;
  // let email: string
  let email;
  let password;

  // const handleLogin = async () => {
  //   try {
  //     loading = true
  //     const { error } = await supabase.auth.signInWithOtp({ email })
  //     if (error) throw error
  //     alert('Check your email for the login link!')
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       alert(error.message)
  //     }
  //   } finally {
  //     loading = false
  //   }
  // }

  const handleSignIn = async () => {
    try {
      loading = true
      const { error } = await supabase.auth.signUp({ email, password })
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      loading = false
    }
  }
</script>

<form class='' on:submit|preventDefault={handleSignIn}>
  <div class=''>
    <h1 class=''>Supabase + SvelteKit</h1>
    <p class=''>Sign in and stuff...</p>
    <div>
      <input class='' type='email' placeholder='Your email' bind:value={email} />
    </div>
    <div>
      <input class='' type='password' placeholder='Your password' bind:value={password} />
    </div>
    <div>
      <input type='submit' class='' value={loading ? 'Loading' : 'Sign Up'}
      disabled={loading} />
    </div>
  </div>
</form> -->



<!-- <script>
  import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { AuthApiError } from '@supabase/supabase-js';
import { invalid, type ValidationError } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	async default(
		event
	): Promise<ValidationError<{ error: string; values?: { email: string } }> | { message: string }> {
		const { request, url } = event;
		const { supabaseClient } = await getSupabase(event);

		const formData = await request.formData();

		const email = formData.get('email') as string;
		const password = formData.get('password') as string;

		if (!email) {
			return invalid(400, {
				error: 'Please enter your email'
			});
		}
		if (!password) {
			return invalid(400, {
				error: 'Please enter a password',
				values: {
					email
				}
			});
		}

		const { error } = await supabaseClient.auth.signUp({
			email,
			password,
			options: { emailRedirectTo: url.origin }
		});

		if (error) {
			if (error instanceof AuthApiError && error.status === 400) {
				return invalid(400, {
					error: 'Invalid credentials.',
					values: {
						email
					}
				});
			}

			return invalid(500, {
				error: 'Server error. Try again later.',
				values: {
					email
				}
			});
		}

		return {
			message: 'Please check your email for a magic link to log into the website.'
		};
	}
};
</script> -->

<script lang="ts">
	import { applyAction, enhance, type SubmitFunction } from '$app/forms';
	import type { ActionData } from './$types';
	export let form: ActionData;
	let loading = false;
	const handleSubmit: SubmitFunction = () => {
		loading = true;
		return async ({ result }) => {
			await applyAction(result);
			loading = false;
		};
	};
</script>

<section class="columns mt-6 pt-6">
	<div class="column is-half is-offset-one-quarter">
		<h1 class="title">Sign up</h1>
		{#if form?.error}
			<div class="block notification is-danger">{form.error}</div>
		{/if}
		{#if form?.message}
			<div class="block notification is-primary">{form.message}</div>
		{/if}
		<form method="post" use:enhance={handleSubmit}>
			<div class="field">
				<label for="email" class="label">Email</label>
				<p class="control">
					<input
						id="email"
						name="email"
						value={form?.values?.email ?? ''}
						class="input"
						type="email"
						placeholder="Email"
						required
					/>
				</p>
			</div>
			<div class="field">
				<label for="password" class="label">Password</label>
				<p class="control">
					<input
						id="password"
						name="password"
						class="input"
						type="password"
						placeholder="Password"
						required
					/>
				</p>
			</div>
			<div class="field">
				<p class="control">
					<button disabled={loading} class="button is-fullwidth is-link">Sign up</button>
				</p>
			</div>
		</form>

		<div class="mt-6">
			<p class="has-text-centered">
				Already have an account? <a href="/">Sign in</a>
			</p>
		</div>
	</div>
</section>