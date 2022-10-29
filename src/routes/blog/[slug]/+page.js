
export const prerender = true;

export async function load({ params }) {
  const Post = await import(`../../../content/blog/${params.slug}.md`);
  return {
  title: Post.metadata.title,
  description: Post.metadata.description,
  icon: Post.metadata.icon,
  content: Post.default,
}
}
