<script>
  export let data;
</script>

<!-- <div class='container'> -->

  <div class='header'>
    <h1>Posts</h1>
    <a class='new-post' href={`posts/new`}>
      <p>New Post</p>
      <button>+</button>
    </a>
  </div>

  <div class='grid'>
  
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

  .header {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: start;
    height: min-content;
    height: 64px;
    /* border: 1px solid red; */
    border-bottom: 1px solid #999;
    padding-left: 16px;
    column-gap: 16px;
  }

  .grid {
    width: 100%;
    height: calc(100% - 64px);
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
    cursor: pointer;
  }

  .new-post {
    border: 1px solid #999;
    background-color: #eee;
    padding: 4px;
    /* width: 256px; */
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    height: min-content;
    border-radius: 32px;
    column-gap: 8px;
    padding-left: 12px;
  }

  .new-post > p {
    line-height: 1;
  }

  .new-post > button {
    margin: 0;
    padding: 0;
    width: 32px;
    height: 32px;
    border-radius: 32px;
    background-color: white;
  }
</style>