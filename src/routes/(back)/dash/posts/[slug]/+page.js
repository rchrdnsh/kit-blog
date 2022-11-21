export async function load({ params }) {
  const post = await import(`../../../../../content/posts/${params.slug}.json`);
  const slug = params.slug;
  console.log(slug);
  const content = post.default;
  console.log(content);
  return {
    slug: slug,
    content
  }
}