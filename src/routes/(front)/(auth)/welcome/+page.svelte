<script>
  import { page } from '$app/stores';
</script>

<div class='container'>

  <p class='welcome'>Welcome :-)</p>

  {#if $page.data.session}
    <div class='link-box'>
      <p>Your email address has been confirmed.</p>
      {#if $page.data.session.user.email.includes(`@arrowgtp.com`)}
        <a href='/dash/profile'>Click here to fill out your team profile</a>
      {:else}
        <a href='/profile'>Click here to fill out your provider profile</a>
      {/if}
    </div>
  {/if}

</div>

<style>
  .container {
    width: 512px;
    height: 256px;
    padding: 32px;
    border: 1px solid #999;
    border-radius: 16px;
    place-self: center;
    display: grid;
    align-content: start;
    justify-items: center;
    row-gap: 32px;
  }

  .welcome {
    font-size: 32px;
  }

  .link-box {
    display: grid;
    align-content: start;
    justify-items: center;
    row-gap: 16px;
  }

  a {
    border: 1px solid #999;
    padding: 6px 12px;
    border-radius: 8px;
    background-color: #fff;
  }
</style>