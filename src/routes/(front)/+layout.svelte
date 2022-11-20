<script>
  import Header from '$library/Header.svelte';
</script>

<div class='front'>

  <div class='menu'>
    <Header/>
  </div>

  <main>
    <slot/>
  </main>

</div>

<style>
  .front {
    width: calc(100vw - 16px);
    height: calc(100vh - 48px);
    border: 1px solid black;
    border-radius: 16px;
    display: grid;
    grid-template-rows: min-content 1fr;
    overflow-y: auto;
  }
  .menu {
    grid-row: 1 / 2;
    border-bottom: 1px solid black;
  }
  main {
    display: grid;
    overflow-y: auto;
    background-color: #eee;
  }
</style>
