
export const prerender = true;

// import { getMetadata } from '$library/utilities/metadata.js'

// export async function load() {
//   const postsMetadata = getMetadata(
//     import.meta.glob(
//       '/src/content/blog/**/+content.md',
//       {eager: true}
//     )
//   );
//   return { posts: postsMetadata };
// };

export const load = async ({ fetch }) => {
  const response = await fetch(`/api/blog`)
  const posts = await response.json()

  return {
    posts
  }
}
