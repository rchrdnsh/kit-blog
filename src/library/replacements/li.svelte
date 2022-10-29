<style>
  li {
    margin: 0;
    padding: 0;
    font-family: var(--text-font);
    color: var(--text-color);
    font-size: 22px;
    line-height: 2;
    font-weight: 400;
  }

  @media screen and (orientation: portrait) {
    li {font-size: 16px;}
  }
</style>

<li>
  <slot/>
</li>