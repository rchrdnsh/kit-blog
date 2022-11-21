<script>
  export let data;
  
  let title;
  let body;
  let item = null;

  async function save() {
    const response = await fetch('/api/list', {
      method: 'POST',
      body: JSON.stringify({ title, body }),
      headers: {
        'content-type': 'application/json'
      }
    });

    item = await response.json();
  }
</script>

<div class='container'>

  <!-- <div class='editor'>
  
    <label for="title">Title</label>
    <input type="text" id="title" name="title" bind:value={title}/>
    
    <label for="body">Body</label>
    <textarea id="body" name="body" rows="10" bind:value={body}/>
    
    <button on:click={save}>Save</button>
  
  </div> -->
  
  <!-- <div class='output'>
    <pre>{JSON.stringify(item, null, 2)}</pre>
    <pre>{JSON.stringify(data.list, null, 2)}</pre>
  </div> -->

  {#each data.list as item}
    <div class='list-editor'>
    
      <label for="title">Title</label>
      <input type="text" id="title" name="title" bind:value={item.title}/>
      
      <label for="body">Body</label>
      <textarea id="body" name="body" rows="5" bind:value={item.body}/>
      
      <button on:click={save}>Save</button>
    
    </div>
  {/each}

</div>


<style>
  .container {
    height: 100%;
    padding: 16px;
    display: grid;
    grid-auto-flow: column;
    gap: 32px;
    grid-template-columns: repeat(3, 1fr);
  }

  /* .editor {
    display: grid;
    row-gap: 8px;
    align-content: start;
  } */

  .list-editor {
    display: grid;
    row-gap: 8px;
    align-content: start;
  }

  /* .output {
    display: grid;
    row-gap: 16px;
    overflow-y: scroll;
    border: 1px solid #999;
    height: 100%;
    padding: 16px;
    border-radius: 16px;
    align-content: start;
  } */

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
  }

  button {
    margin-top: 16px;
    height: 48px;
    border: 1px solid #999;
    border-radius: 8px;
  }
</style>