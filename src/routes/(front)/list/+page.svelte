<script>
  export let data;
</script>
<div class='list'>
  {#each data.list as { title, body}}
    <div class='item'>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  {/each}
</div>

<style>
  .list {
    display: grid;
    width: min-content;
    height: min-content;
    gap: 32px;
    padding: 32px;
  }
  .item {
    display: grid;
    width: 512px;
    height: min-content;
    border: 1px solid #999;
    border-radius: 8px;
    background-color: white;
    padding: 24px;
    gap: 8px
  }
</style>