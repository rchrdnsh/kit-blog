<style>
  ul {
    margin: 0;
    padding: 0;
    font-family: var(--text-font);
    color: var(--text-color);
    font-size: 22px;
    line-height: 2;
    font-weight: 400;
    list-style-type: disc;
    list-style-position: outside;
    list-style-image: none;
  }

  @media screen and (orientation: portrait) {
    ul {
      list-style-position: inside;
    }
  }
</style>

<ul>
  <slot/>
</ul>