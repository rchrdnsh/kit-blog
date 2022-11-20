// export const GET = () => {
//   return new Response('Welcome to hell, Elon.');
// }

// src/routes/api/posts/+server.js
import { fetchMarkdownPosts } from '$library/utilities/metadata.js';
import { json } from '@sveltejs/kit';

export const GET = async () => {
  const allPosts = await fetchMarkdownPosts(
    import.meta.glob('/src/content/blog/**/+content.md')
  );
  return json(allPosts);

  // const sortedPosts = allPosts.sort((a, b) => {
  //   return new Date(b.meta.date) - new Date(a.meta.date)
  // })

  // return json(sortedPosts)
}

/** @type {import('./$types').RequestHandler} */
export const POST = async ({ request }) => {
  const { a, b } = await request.json();
  return json(a + b);
}