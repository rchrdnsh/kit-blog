<script>
  export let route = '';
  export let slug = '';
  export let title = '';
  export let description = '';
  export let image = '';
  export let icon = '';

</script>

<a sveltekit-data-prefetch href={`/${route}/${slug}`}  class='card'>
  <h1 class='title'>{title}</h1>
  <p class='description'>{description}</p>
  {#if image}
    <div class='icon'>
      <img src={image} alt="A lovely piece of art or something else, I don't know."/>
    </div>
  {:else if icon}
    <div class='icon'>
      <svelte:component this={icon}/>
    </div>
  {/if}
</a>

<style>
  .card {
    padding: 1rem;
    border-radius: 16px;
    display: grid;
    justify-items: center;
    background-color: #ff3e00;
    background-color: white;
    min-width: 12rem;
    transition: transform 100ms;
    gap: 1rem;
    box-shadow:
      0 2.8px 2.2px rgba(0, 0, 0, 0.02),
      0 6.7px 5.3px rgba(0, 0, 0, 0.028),
      0 12.5px 10px rgba(0, 0, 0, 0.035),
      0 22.3px 17.9px rgba(0, 0, 0, 0.042),
      0 41.8px 33.4px rgba(0, 0, 0, 0.05),
      0 100px 80px rgba(0, 0, 0, 0.07)
    ;
  }

  @media screen and (orientation: portrait) {
    .card {
      width: 80vw;
    }
  }

  .card:active {
    transform: scale(0.95);
  }

  .title, .description {
    color: black;
  }

  .title {
    font-size: 20px;
  }

  .description {
    font-size: 16px;
  }
  
  .icon {
    width: 8rem;
    height: 8rem;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 16px;
  }
</style>