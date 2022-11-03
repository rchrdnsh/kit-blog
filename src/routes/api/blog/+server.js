// export const GET = () => {
//   return new Response('Welcome to hell, Elon.');
// }

// src/routes/api/posts/+server.js
import { fetchMarkdownPosts } from '$library/utilities/metadata.js';
import { json } from '@sveltejs/kit';

export const GET = async () => {
  const allPosts = await fetchMarkdownPosts();
  return json(allPosts);

  // const sortedPosts = allPosts.sort((a, b) => {
  //   return new Date(b.meta.date) - new Date(a.meta.date)
  // })

  // return json(sortedPosts)
}