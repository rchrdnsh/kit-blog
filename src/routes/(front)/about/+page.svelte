<script>
  import Container from '$library/Container.svelte';
  import Counter from '$library/Counter.svelte';
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<Container>

  <h1>About this app</h1>

  <p>
    This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. It's also using a package called MDSveX, which allows one to add svelte components to markdown files. And the last thing about this particular app is that it does not use JSON to serialize data, as MDSveX allows one to simply load markdown and metadata. This allows one to use svelte components themselves in the metadata of a markdown file and it will just work. Check out the svelte components in the blog section. It's very kewl indeed. :-) 
  </p>

  <p>
    And don't worry...here's the counter...
  </p>

  <div class='box'>
    <Counter/>
  </div>

</Container>

<style>
  .box {
    justify-self: center;
    width: min-content;
    display: grid;
    place-items: center;
  }

  h1 {
    justify-self: center;
  }

  p {
    width: 80ch;
  }

  @media screen and (orientation: portrait) {
    p {
      width: 90vw;
    }
  
    h1 {
      width: 90vw;
    }
  }

</style>
