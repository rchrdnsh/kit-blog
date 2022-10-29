<script>
  import Grid from '$lib/Grid.svelte'
  import Card from '$lib/Card.svelte';

  /** @type {import('./$types').PageData */
  export let data;
  let { headlines, pieces, posts } = data;
  $: ( { headlines, pieces, posts } = data );
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
