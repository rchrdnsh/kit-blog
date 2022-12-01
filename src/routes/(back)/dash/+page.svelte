<div class='container'>
  <h1>Dashboard homepage</h1>
  <div class='cards'>
    <div class='card'><p>News</p></div>
    <div class='card'><p>Revenue</p></div>
    <div class='card'><p>Providers</p></div>
    <div class='card'><p>Stuff</p></div>
  </div>
</div>

<style>
  .container {
    padding: 32px;
    display: grid;
    gap: 32px;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }

  .card {
    border: 1px solid #999;
    border-radius: 16px;
    padding: 16px;
    width: 100%;
    height: 256px;
  }
</style>