<script context="module">
  throw new Error("@migration task: Check code was safely removed (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292722)");

  // import { browser, dev } from '$app/env';

  // // we don't need any JS on this page, though we'll load
  // // it in dev so that we get hot module replacement...
  // export const hydrate = dev;

  // // ...but if the client-side router is already loaded
  // // (i.e. we came here from elsewhere in the app), use it
  // export const router = browser;

  // // since there's no dynamic data here, we can prerender
  // // it so that it gets served as a static asset in prod
  // export const prerender = true;
  // 
  // import Container from '$lib/Container.svelte';
  // import Counter from '$lib/Counter.svelte';
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
