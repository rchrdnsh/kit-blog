<script>
  import Grid from '$library/Grid.svelte'
  import Card from '$library/Card.svelte';

  /** @type {import('./$types').PageData */
  
  export let data;
  let { headlines, pieces, posts } = data;
  $: ( { headlines, pieces, posts } = data );

  // let path = '../library/Counter.svelte';
  // const Counter = import(path);

  import { onMount } from 'svelte';
	
	// let Counter1;
  let Counter2;
  
	let component = `Counter`;
  const Counter3 = import(`../library/${component}.svelte`);
	// const sleep = ms => new Promise(f => setTimeout(f, ms));
	
	// onMount(async () => {
	// 	await sleep(1); // simulate network delay
	// 	Counter1 = (await import('../library/Counter.svelte')).default;
	// });

	onMount(async () => {
		Counter2 = (await import(`../library/${component}.svelte`)).default
	})
  // async function importComponent(component) {
  //   Counter2 = await import(`../library/${component}.svelte`);
  //   return Counter2;
  // }
  // let promise = importComponent(component);
  // const module = await import(`./dir/${file}.js`)
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<section>

  <!-- <Counter/> -->
  <!-- <svelte:component this={Counter1}/> -->
  <!-- {#await promise}
    <p>...loading</p>
  {:then}
    <svelte:component this={Counter2}/>
  {/await} -->

  <div class='dynamic-component'>
    {#if Counter2}
      <svelte:component this={Counter2}/>
    {:else}
      <p class='loading'>..loading</p>
    {/if}
  </div>

  <!-- <svelte:component this={Counter3}/> -->

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

  .dynamic-component {
    width: 300px;
    height: 150px;
    display: grid;
    place-content: center;
    /* border: 1px solid red; */
  }

  .loading {
    width: 100%;
    height: 100%;
  }
</style>
