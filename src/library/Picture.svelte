<script>
  export let src;
  export let alt = 'Cool content in this place filled with things and stuff.';
  export let portrait = '40';
  export let landscape = '20';
  export let article = false;
  // console.log(src);
</script>

{#if typeof src === 'string'}
  <img class:article={article === true} src={src} alt={alt} width={`500`} height={`500`}/>
{:else if typeof src === 'object'}
  <picture class:article={article === true}>
    {#each Object.entries(src.sources) as [format, images]}
      <source
        srcset={images.map((image) => `${image.src} ${image.w}w`).join(', ')}
        type={'image/' + format}
        sizes={`(orientation: portrait) ${portrait}vw, (orientation: landscape) ${landscape}vw`}
      /> 
    {/each}
    <img
      src={src.fallback.src}
      alt={alt}
      width={src.fallback.w}
      height={src.fallback.h}
    />
  </picture>
{/if}

<style>
  picture, img {
    width: 100%;
    height: auto;
  }

  img {
    border-radius: 16px;
  }
</style>