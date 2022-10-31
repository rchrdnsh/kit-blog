<script>
  import Grid from '$library/Grid.svelte'
  import Card from '$library/Card.svelte';

  /** @type {import('./$types').PageData */
  
  export let data;
  let { headlines, pieces, posts } = data;
  $: ( { headlines, pieces, posts } = data );
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<section>

  <Grid>

    <div class='stack'>
      <h1>Latest Headline</h1>
      {#each headlines as {folderslug, status, title, description, image}}
        {#if status === 'featured'}
          <Card
            route={'news'}
            slug={folderslug}
            title={title}
            description={description}
            image={image}
          />
        {/if}
      {/each}
    </div>

    <div class='stack'>
      <h1>Latest Piece</h1>
      {#each pieces as {folderslug, status, title, description, image}}
        {#if status === 'featured'}
          <Card
            route={'art'}
            slug={folderslug}
            title={title}
            description={description}
            image={image}
          />
        {/if}
      {/each}
    </div>

    <div class='stack'>
      <h1>Latest Post</h1>
      {#each posts as {folderslug, status, title, description, icon}}
        {#if status === 'featured'}
          <Card
            route={'blog'}
            slug={folderslug}
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

  .stack {
    display: grid;
    grid-auto-flow: row;
    place-items: center;
    gap: 1rem;
  }
</style>
