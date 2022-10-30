<script>
  import Container from '$library/Container.svelte';
  import Grid from '$library/Grid.svelte';
  import Card from '$library/Card.svelte';

  /** @type {import('./$types').PageData */
  export let data;
  let { headlines } = data;
  $: ( { headlines } = data ); // so it stays in sync when `data` changes
</script>

<svelte:head>
  <title>News</title>
</svelte:head>

<Container>

  <h1 class='category'>News Headlines</h1>

  <Grid>
    {#each headlines as {folderslug, title, description, image}}
      <Card
        route={'news'}
        slug={folderslug}
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