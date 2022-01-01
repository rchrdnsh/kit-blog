<script context="module">

  export const prerender = true;

  import { getMetadata } from '$lib/utilities/metadata.js'

  export async function load() {
    const headlinesMetadata = getMetadata(import.meta.globEager('/src/content/news/*.md'));
    return { props: { headlines: headlinesMetadata } };
  };
</script>

<script>
  import Container from '$lib/Container.svelte';
  import Grid from '$lib/Grid.svelte';
  import Card from '$lib/Card.svelte';

  export let headlines;
</script>

<svelte:head>
  <title>News</title>
</svelte:head>

<Container>

  <h1 class='category'>News Headlines</h1>

  <Grid>
    {#each headlines as {slug, title, description, image}}
      <Card
        route={'news'}
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