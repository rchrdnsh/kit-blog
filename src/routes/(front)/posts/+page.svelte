<script>
  export let data;
</script>

<div class='grid'>

  {#each data.posts as { content: {title, description, author, body}}}
    <div class='card'>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{author}</p>
      <p>{body}</p>
    </div>
  {/each}

</div>


<style>
  .grid {
    width: 100%;
    height: 100%;
    padding: 32px;
    display: grid;
    gap: 32px;
    align-items: start;
    grid-template-columns: repeat(2, 1fr);
  }

  .card {
    padding: 24px;
    display: grid;
    width: 100%;
    border: 1px solid #999;
    border-radius: 16px;
    background-color: white;
    gap: 8px;
  }
</style>