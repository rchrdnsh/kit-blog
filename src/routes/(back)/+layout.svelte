<div class='back'>
  <nav>
    <a href='/dash'><h3>Dashboard</h3></a>
  </nav>
  <div class='menu'>
    <div class='text'>
      <h3>Collections</h3>
      <!-- <p>News Editor</p> -->
      <!-- <p>Art Editor</p> -->
      <!-- <p>Blog Editor</p> -->
      <a href='/dash/list'><p>List</p></a>
      <a href='/dash/posts'><p>Posts</p></a>
    </div>
  </div>
  <main>
    <slot/>
  </main>

</div>

<style>
  .back {
    width: calc(100vw - 16px);
    height: calc(100vh - 48px);
    border: 1px solid black;
    border-radius: 16px;
    display: grid;
    grid-template-columns: 192px 1fr;
    grid-template-rows: 64px 1fr;
  }

  nav {
    grid-row: 1 / 2;
    grid-column: 1 / 3;
    width: 100%;
    height: 100%;
    padding: 16px;
    border-bottom: 1px solid black;
    display: grid;
    align-items: center;
  }

  .menu {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    height: 100%;
    width: 100%;
    padding: 16px;
    border-right: 1px solid black;
  }

  .text {
    display: grid;
    row-gap: 8px;
  }

  main {
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    width: 100%;
    min-width: 0;
    height: 100%;
    min-height: 0;
  }
</style>