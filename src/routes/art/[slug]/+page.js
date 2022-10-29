
export const prerender = true;

export async function load({ params }) {
  const Piece = await import(`../../../content/art/${params.slug}.md`);
  return {
  title: Piece.metadata.title,
  description: Piece.metadata.description,
  image: Piece.metadata.image,
  content: Piece.default,
}
}
