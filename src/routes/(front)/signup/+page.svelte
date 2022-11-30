<script lang='ts'>
	import { applyAction, enhance, type SubmitFunction } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;
	let loading: boolean = false;

	const handleSubmit: SubmitFunction = () => {
		loading = true;
		return async ({ result }) => {
			await applyAction(result);
			loading = false;
		};
	};
</script>

<div class='container'>
	<h1 class='sign-up-title'>Sign up</h1>
	{#if form?.error}
		<div class='danger-notification'>{form.error}</div>
	{/if}
	{#if form?.message}
		<div class='primary-notification'>{form.message}</div>
	{/if}
	<form method='post' use:enhance={handleSubmit}>
		<div class='field'>
			<label for='email' class='label'>Email</label>
			<p class='control'>
				<input
					id='email'
					name='email'
					value={form?.values?.email ?? ''}
					class='input'
					type='email'
					placeholder='Email'
					required
				/>
			</p>
		</div>
		<div class='field'>
			<label for='password' class='label'>Password</label>
			<p class='control'>
				<input
					id='password'
					name='password'
					class='input'
					type='password'
					placeholder='Password'
					required
				/>
			</p>
		</div>
		<div class='field'>
			<p class='control'>
				<button disabled={loading}>Sign Up</button>
			</p>
		</div>
		<p class='sign-in-link'>
			Already have an account? <a href='/profile'>Sign In here :-)</a>
		</p>
	</form>
</div>

<style>
	.container {
		width: min-content;
		height: min-content;
		display: grid;
		/* border: 1px solid red; */
		gap: 16px;
		padding: 16px;
		place-self: center;
	}

	.sign-up-title {
		justify-self: center;
		font-size: 24px;
	}

	.danger-notification, .primary-notification, form {
		width: 512px;
	}

	.field {
    display: grid;
    row-gap: 4px;
  }

	button {
		width: 100%;
		height: 48px;
		border-radius: 8px;
		border: 1px solid #999;
		background-color: white;
	}

	.sign-in-link {
		justify-self: center;
	}
</style>