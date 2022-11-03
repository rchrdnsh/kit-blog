<script>
  import Container from '$library/Container.svelte';
  import Grid from '$library/Grid.svelte';
  import Card from '$library/Card.svelte';

  /** @type {import('./$types').PageData */
  export let data;
  // let { pieces } = data;
  // $: ( { pieces } = data ); // so it stays in sync when `data` changes
</script>

<svelte:head>
  <title>Art</title>
</svelte:head>

<Container>

  <h1 class='category'>Art Pieces</h1>

  <Grid>
    <!-- {#each pieces as {folderslug, title, description, image}} -->
    {#each data.pieces as {slug, metadata: {title, description, image}}}
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