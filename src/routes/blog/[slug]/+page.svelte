<script>
  import Container from '$lib/Container.svelte';
  import Article from '$lib/Article.svelte';

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