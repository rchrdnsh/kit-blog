<script context='module'>
  import h1 from '$library/replacements/h1.svelte';
  import h2 from '$library/replacements/h2.svelte';
  import h3 from '$library/replacements/h3.svelte';
  import h4 from '$library/replacements/h4.svelte';
  import h5 from '$library/replacements/h5.svelte';
  import h6 from '$library/replacements/h6.svelte';
  import paragraph from '$library/replacements/paragraph.svelte';
  import ul from '$library/replacements/ul.svelte';
  import li from '$library/replacements/li.svelte';
  import blockquote from '$library/replacements/blockquote.svelte';
  
  export {
    h1 as h1, h2 as h2, h3 as h3, h4 as h4, h5 as h5, h6 as h6,
    paragraph as p, ul as ul, li as li, blockquote as blockquote
    }
</script>

<div class='container'>
  <slot/>
</div>

<style>
  .container {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 
      minmax(1rem, 1fr) 
      minmax(1rem, 80ch) 
      minmax(1rem, 1fr)
    ;
    row-gap: 2rem;
  }

  .container > :global(*) {
    grid-column: 2 / -2;
  }   

  .container > :global(.full) {
    grid-column: 1 / -1;
  }
</style>