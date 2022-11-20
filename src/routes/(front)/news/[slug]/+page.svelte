<script>
  import Container from '$library/Container.svelte';
  import Article from '$library/Article.svelte';

  export let data;
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