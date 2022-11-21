<script>
  export let data;
</script>

<div class='grid'>

  {#each data.posts as { content: path, slug, content: {title, description, author, body}}}
    <div class='card'>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{author}</p>
      <p>{body}</p>
      <a href={`posts/${slug}`}><button>Edit</button></a>
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

  a {
    width: 100%;
  }

  button {
    margin-top: 16px;
    height: 48px;
    border: 1px solid #999;
    border-radius: 8px;
    width: 100%;
  }
</style>