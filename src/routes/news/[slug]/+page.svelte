<script>
  import Container from '$lib/Container.svelte';
  import Article from '$lib/Article.svelte';

  let { title, description, image, content } = data;
  $: ( { title, description, image, content } = data ); // so it stays in sync when `data` changes
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Container>
  <Article
    title={title}
    description={description}
    image={image}
    content={content}
  />
</Container>