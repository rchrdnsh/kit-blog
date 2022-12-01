<script>
  let loading = false;
  let email;
</script>

<div class='container'>
	<h1 class='title'>Enter your email address and we will send you a link to reset your password with :-)</h1>
  <form>
		<div class='field'>
			<label for='email' class='label'>Email Address</label>
			<p class='control'>
				<input
					id='email'
					name='email'
					class='input'
					type='email'
					placeholder='Email'
          bind:value={email}
					required
				/>
			</p>
		</div>
		
		<div class='reset-link'>
			<p class='control'>
				<button disabled={loading}>Send Link to Email</button>
			</p>
		</div>
	</form>
</div>

<style>
	.container {
		width: min-content;
		height: min-content;
		display: grid;
		gap: 16px;
		padding: 16px;
		place-self: center;
	}

  form {
    width: 512px;
  }

	.title {
		justify-self: center;
		font-size: 18px;
    line-height: 1.5;
    width: 34ch;
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
</style>