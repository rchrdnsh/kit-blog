<div class='grid'>
  <slot/>
</div>

<style>
  .grid {
    display: grid;
    grid-auto-flow: column;
    gap: 2rem;
  }

  @media screen and (orientation: portrait) {
    .grid {
      grid-auto-flow: row;
    }
  }
</style>