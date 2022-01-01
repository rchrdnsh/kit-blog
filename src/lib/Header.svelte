<script>
  import { page } from '$app/stores';
</script>

<header>

  <nav>
    <svg viewBox='0 0 2 3' aria-hidden='true' preserveAspectRatio='none'>
      <path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
    </svg>
    <ul>
      <li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li>
      <li class:active={$page.url.pathname === '/news'}><a sveltekit:prefetch href="/news">News</a></li>
      <li class:active={$page.url.pathname === '/art'}><a sveltekit:prefetch href="/art">Art</a></li>
      <li class:active={$page.url.pathname === '/blog'}><a sveltekit:prefetch href="/blog">Blog</a></li>
      <li class:active={$page.url.pathname === '/about'}><a sveltekit:prefetch href="/about">About</a></li>
    </ul>
    <svg viewBox='0 0 2 3' aria-hidden='true' preserveAspectRatio='none'>
      <path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
    </svg>
  </nav>

</header>

<style>
  header {
    display: flex;
    justify-content: center;
  }

  nav {
    display: flex;
    justify-content: center;
    --background: rgba(255, 255, 255, 0.7);
  }

  @media screen and (orientation: portrait) {
    nav {
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      /* border: 1px solid red; */
    }
  }

  svg {
    width: 1.5rem;
    height: 3rem;
  }

  path {
    fill: var(--background);
  }

  ul {
    position: relative;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    background: var(--background);
    background-size: contain;
  }

  li {
    position: relative;
    height: 100%;
  }

  li.active::before {
    --size: 6px;
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    left: calc(50% - var(--size));
    border: var(--size) solid transparent;
    border-top: var(--size) solid var(--accent-color);
  }

  nav a {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 1em;
    color: var(--heading-color);
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 10%;
    text-decoration: none;
    transition: color 0.2s linear;
  }

  a:hover {
    color: var(--accent-color);
  }
</style>
