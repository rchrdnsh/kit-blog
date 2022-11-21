<script>
  export let data;
  // console.log(data);

  let title = data.content.title;
  let description = data.content.description;
  let author = data.content.author;
  let body = data.content.body;
  let post = null;
  let path = `src/content/posts/${data.slug}.json`;

  async function save() {
    // const response = await fetch(`/api/posts/${data.slug}.json`, {
      const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ path, title, description, author, body }),
      headers: {
        'content-type': 'application/json'
      }
    });

    post = await response.json();
  }
</script>

<div class='container'>

  <div class='editor'>
  
    <div class='input-field'>
      <label for="title">Title</label>
      <input type="text" id="title" name="title" bind:value={title}/>
    </div>

    <div class='input-field'>
      <label for="description">Description</label>
      <input type="text" id="description" name="description" bind:value={description}/>
    </div>

    <div class='input-field'>
      <label for="author">Author</label>
      <input type="text" id="author" name="author" bind:value={author}/>
    </div>
    
    <div class='input-field body'>
      <label for="body">Body</label>
      <textarea id="body" name="body" bind:value={body}/>
    </div>
    
    <button on:click={save}>Save</button>
  
  </div>
  
  <div class='output'>
    <pre>{data.slug}</pre>
    <pre>{JSON.stringify(data.content, null, 2)}</pre>
    <pre>{JSON.stringify(post, null, 2)}</pre>
  </div>

</div>

<!-- {#each data.list as item}
  <p>{item.title}</p>
  <p>{item.body}</p>
{/each} -->

<style>
  .container {
    height: 100%;
    padding: 16px;
    display: grid;
    grid-auto-flow: column;
    gap: 32px;
    grid-template-columns: 1fr 1fr;
  }
  .editor {
    display: grid;
    row-gap: 8px;
    /* width: 512px; */
    align-content: start;
    grid-template-rows: repeat(3, min-content) 1fr min-content;
    /* justify-self: center; */
    /* align-self: center; */
  }

  .output {
    display: grid;
    row-gap: 16px;
    overflow-y: scroll;
    border: 1px solid #999;
    height: 100%;
    padding: 16px;
    border-radius: 16px;
    align-content: start;
  }

  .input-field {
    display: grid;
    grid-template-rows: min-content 1fr;
    row-gap: 4px;
  }

  label {
    font-size: 12px;
    margin-left: 8px;
  }

  input {
    height: 48px;
    border: 1px solid #999;
    border-radius: 8px;
    display: grid;
    padding-left: 16px;
    align-content: center;
  }

  textarea {
    border: 1px solid #999;
    border-radius: 8px;
    padding: 16px;
    font-family: sans-serif;
    font-size: 16px;
    height: 100%;
    line-height: 1.5;
    overflow-y: auto;
  }

  button {
    margin-top: 16px;
    height: 48px;
    border: 1px solid #999;
    border-radius: 8px;
  }
</style>