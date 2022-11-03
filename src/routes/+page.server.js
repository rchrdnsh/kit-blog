export const prerender = true;

// import { getFilteredMetadata } from '$library/utilities/metadata.js'

// export async function load() {

//   const postsMetadata = getFilteredMetadata(
//     import.meta.glob(
//       '/src/content/blog/**/+content.md',
//       {eager: true}
//     )
//   );

//   const headlinesMetadata = getFilteredMetadata(
//     import.meta.glob(
//       '/src/content/news/**/+content.md',
//       {eager: true}
//     )
//   );

//   const piecesMetadata = getFilteredMetadata(
//     import.meta.glob(
//       '/src/content/art/**/+content.md',
//       {eager: true}
//     )
//   );

//   return {
//     posts: postsMetadata,
//     headlines: headlinesMetadata,
//     pieces: piecesMetadata
//   };

// };

export const load = async ({ fetch }) => {

  const newsResponse = await fetch(`/api/news`)
  const headlines = await newsResponse.json()

  const artResponse = await fetch(`/api/art`)
  const pieces = await artResponse.json()

  const blogResponse = await fetch(`/api/blog`)
  const posts = await blogResponse.json()

  return {
    headlines,
    pieces,
    posts
  }
}