<script>
// password protect this single page with an env var password
// talk to the
export let form;
</script>

<div class='container'>

  <form method="POST">
    <input name="password" type="password">
    <button>Log in</button>
  </form>
  
  {#if form?.status === `success`}
    <p>Your password was correct, yay! :-)</p>
    <p>Here are your downloads:</p>
    <a href='/files/MCPHP PCP-Direct Provider Manual.pdf' download>PDF File</a>
  {:else if form?.status === `failure`}
    <p>Your password was incorrect, boo :-(</p>
  {/if}

</div>


<style>
  .container {
    width: 512px;
    height: 512px;
    place-self: center;
    border: 1px solid #999;
    display: grid;
    align-items: start;
    justify-content: center;
    padding: 32px;
    gap: 16px;
    grid-template-rows: repeat(3, min-content);
  }
  button {
    height: 48px;
    border-radius: 8px;
    border: 1px solid #999;
  }
</style>
