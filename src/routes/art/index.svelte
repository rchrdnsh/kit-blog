<script context="module">

  export const prerender = true;

  import { getMetadata } from '$lib/utilities/metadata.js'

  export async function load() {
    const piecesMetadata = getMetadata(import.meta.globEager('/src/content/art/*.md'));
    return { props: { pieces: piecesMetadata } };
  };
</script>

<script>
  import Container from '$lib/Container.svelte';
  import Grid from '$lib/Grid.svelte';
  import Card from '$lib/Card.svelte';
  
  export let pieces;
</script>

<svelte:head>
  <title>Art</title>
</svelte:head>

<Container>

  <h1 class='category'>Art Pieces</h1>

  <Grid>
    {#each pieces as {slug, title, description, image}}
      <Card
        route={'art'}
        slug={slug}
        title={title}
        description={description}
        image={image}
      />
    {/each}
  </Grid>

</Container>

<style>
  .category {
    text-align: center;
  }
</style>