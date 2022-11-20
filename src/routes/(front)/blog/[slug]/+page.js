
// export const prerender = true;

export async function load({ params }) {
  const Post = await import(
    `../../../../content/blog/${params.slug}/+content.md`
  );
  return {
    title: Post.metadata.title,
    description: Post.metadata.description,
    icon: Post.metadata.icon,
    component: Post.metadata.component,
    content: Post.default,
  }
}