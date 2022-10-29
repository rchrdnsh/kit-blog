<script>
  import Container from '$lib/Container.svelte';
  import Grid from '$lib/Grid.svelte';
  import Card from '$lib/Card.svelte';

  /** @type {import('./$types').PageData */
  export let data;
  let { pieces } = data;
  $: ( { pieces } = data ); // so it stays in sync when `data` changes
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