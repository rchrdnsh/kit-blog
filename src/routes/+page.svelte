<script context="module">
  throw new Error("@migration task: Check code was safely removed (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292722)");


  // export const prerender = true;

  // import { getMetadata } from '$lib/utilities/metadata.js'

  // export async function load() {
  //   const postsMetadata = getMetadata(import.meta.globEager('/src/content/blog/*.md'));
  //   const headlinesMetadata = getMetadata(import.meta.globEager('/src/content/news/*.md'));
  //   const piecesMetadata = getMetadata(import.meta.globEager('/src/content/art/*.md'));

  //   return {
  //     props: {
  //       posts: postsMetadata,
  //       headlines: headlinesMetadata,
  //       pieces: piecesMetadata
  //     }
  //   };
  // };
  // 
</script>

<script>
  throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

  import Grid from '$lib/Grid.svelte'
  import Card from '$lib/Card.svelte';

  export let headlines;
  export let pieces;
  export let posts;
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<section>

  <picture class='welcome'>
    <source srcset="/img/svelte-welcome.webp" type="image/webp">
    <img src="/img/svelte-welcome.png" alt="Welcome"/>
  </picture>

  <Grid>

    <div class='stack'>
      <h1>Latest Headline</h1>
      {#each headlines as {slug, status, title, description, image}}
        {#if status === 'featured'}
          <Card
            route={'news'}
            slug={slug}
            title={title}
            description={description}
            image={image}
          />
        {/if}
      {/each}
    </div>

    <div class='stack'>
      <h1>Latest Piece</h1>
      {#each pieces as {slug, status, title, description, image}}
        {#if status === 'featured'}
          <Card
            route={'art'}
            slug={slug}
            title={title}
            description={description}
            image={image}
          />
        {/if}
      {/each}
    </div>

    <div class='stack'>
      <h1>Latest Post</h1>
      {#each posts as {slug, status, title, description, icon}}
        {#if status === 'featured'}
          <Card
            route={'blog'}
            slug={slug}
            title={title}
            description={description}
            icon={icon}
          />
        {/if}
      {/each}
    </div>

  </Grid>

</section>

<style>
  section {
    padding-top: 2rem;
    display: grid;
    place-items: center;
    grid-auto-flow: row;
    row-gap: 2rem;
  }

  @media screen and (orientation: portrait) {
    section {
      padding-top: 4.5rem;
    }
  }

  img {
    width: clamp(10rem, 52rem, 64rem);
    height: auto;
    margin-bottom: -4rem;
  }

  @media screen and (orientation: portrait) {
    img {
      width: 80vw;
      margin-bottom: -2rem;
    }
  }

  .stack {
    display: grid;
    grid-auto-flow: row;
    place-items: center;
    gap: 1rem;
  }
</style>
