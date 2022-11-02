<script>
  import Picture from '$library/Picture.svelte';

  export let content = '';
  export let title = '';
  export let description = '';
  export let image = '';
  export let icon = '';
  export let component = 'Placeholder';

  import { onMount } from 'svelte';

  let Component;
  onMount(async () => {
    Component = (await import(`../library/${component}.svelte`)).default
  })
</script>

<div class='card'>
  <div class='text'>
    <h1 class='title'>{title}</h1>
    <h2 class='description'>{description}</h2>
  </div>
  {#if image}
    <div class='icon'>
      <!-- <img src={image} alt="A lovely piece of art or something else, I don't know."/> -->
      <Picture src={image} alt="A lovely piece of art or something else, I don't know."/>
    </div>
  {:else if icon}
    <div class='icon'>
      <svelte:component this={icon}/>
    </div>
  {:else if component !== ''}
    <div class='icon'>
      {#if Component}
        <svelte:component this={Component}/>
      {:else}
        <p class='loading'>..loading</p>
      {/if}
    </div>
  {/if}
</div>

<div class='content'>
  <svelte:component this={content}/>
</div>

<style>
  .card, .content {
    border-radius: 16px;
    width: 50vw;
    padding: 2rem;
    display: grid;
  }

  @media screen and (orientation: portrait) {
    .card, .content {
      width: 90vw;
      padding: 1rem;
    }
  }

  .card {
    background-color: white;
    color: black;
    justify-items: center;
    grid-auto-flow: column;
    gap: 1rem;
  }

  @media screen and (orientation: portrait) {
    .card {
      grid-auto-flow: row;
    }
  }

  .text {
    display: grid;
    align-items: center;
    gap: 1rem;
  }

  .title, .description {
    color: black;
  }

  .title {
    font-size: 32px;
  }

  .description {
    font-size: 24px;
  }

  @media screen and (orientation: portrait) {
    .title {
      font-size: 20px;
    }

    .description {
      font-size: 16px;
    }
  }

  .icon {
    width: 12rem;
    height: 12rem;
  }

  .content {
    justify-items: center;
    background-color: white;
    row-gap: 16px;
  }
</style>