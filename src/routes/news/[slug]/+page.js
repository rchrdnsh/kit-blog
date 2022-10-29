
export const prerender = true;

export async function load({ params }) {
  const Headline = await import(`../../../content/news/${params.slug}.md`);
  return {
  title: Headline.metadata.title,
  description: Headline.metadata.description,
  image: Headline.metadata.image,
  content: Headline.default,
};
};
