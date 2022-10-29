<div class='container'>
  <slot/>
</div>

<style>
	.container {
    padding-top: 2rem;
    display: grid;
    place-content: center;
    gap: 2rem;
	}

  @media screen and (orientation: portrait) {
    .container {
      padding-top: 4.5rem;
      width: 90vw;
    }
  }
</style>