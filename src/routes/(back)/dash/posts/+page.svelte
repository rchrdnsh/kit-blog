<script>
  export let data;
</script>

<!-- <div class='container'> -->

  <div class='grid'>
  
    <div class='card'>
      <h1>New Post</h1>
      <a href={`posts/new`}><button>New</button></a>
    </div>
  
    {#each data.posts as { slug, content: {title, description, author, body}}}
      <div class='card'>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{author}</p>
        <p>{body}</p>
        <a href={`posts/${slug}`}><button>Edit</button></a>
      </div>
    {/each}
  
  </div>

<!-- </div> -->

<style>
  /* .container {
    width: 100%;
    height: 100%;
    overflow: auto;
  } */

  .grid {
    width: 100%;
    height: 100%;
    min-height: 0;
    padding: 32px;
    display: grid;
    gap: 32px;
    align-items: start;
    grid-template-columns: repeat(2, 1fr);
    overflow: auto;
  }

  .card {
    padding: 24px;
    display: grid;
    width: 100%;
    height: 100%;
    border: 1px solid #999;
    border-radius: 16px;
    background-color: white;
    gap: 8px;
    grid-template-rows: repeat(3, min-content) 1fr min-content;
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