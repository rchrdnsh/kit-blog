<script context="module">
  throw new Error("@migration task: Check code was safely removed (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292722)");


  // export const prerender = true;

  // import { getMetadata } from '$lib/utilities/metadata.js'

  // export async function load() {
  //   const postsMetadata = getMetadata(import.meta.globEager('/src/content/blog/*.md'));
  //   return { props: { posts: postsMetadata } };
  // };
</script>

<script>
  throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

  import Container from '$lib/Container.svelte';
  import Grid from '$lib/Grid.svelte';
  import Card from '$lib/Card.svelte';

  export let posts;
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<Container>

  <h1 class='category'>Blog Posts</h1>

  <Grid>
    {#each posts as {slug, title, description, icon}}
      <Card
        route={'blog'}
        slug={slug}
        title={title}
        description={description}
        icon={icon}
      />
    {/each}
  </Grid>
  
</Container>

<style>
  .category {
    text-align: center;
  }
</style>