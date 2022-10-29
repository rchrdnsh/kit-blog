<script>
  import Container from '$library/Container.svelte';
  import Article from '$library/Article.svelte';

  /** @type {import('./$types').PageData */
  export let data;
  let { title, description, icon, content } = data;
  $: ( { title, description, icon, content } = data ); // so it stays in sync when `data` changes
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Container>
  <Article
    title={title}
    description={description}
    icon={icon}
    content={content}
  />
</Container>