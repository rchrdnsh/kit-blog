<script>
  import Container from '$library/Container.svelte';
  import Grid from '$library/Grid.svelte';
  import Card from '$library/Card.svelte';

  /** @type {import('./$types').PageData */
  export let data;
  let { posts } = data;
  $: ( { posts } = data ); // so it stays in sync when `data` changes
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