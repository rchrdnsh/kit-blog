export const prerender = true;

// import { filterContent } from '$library/utilities/metadata.js';

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

// function filterResponse(response) {
//   let JSONResponse = response.json();
//   let filteredResponse = filterContent(JSONResponse, `featured`)
//   return filteredResponse;
// }

export const load = async ({ fetch }) => {

  const newsResponse = await fetch(`/api/news`)
  const allHeadlines = await newsResponse.json()
  const headlines = allHeadlines
  .filter(headline => headline.metadata.status.includes(`featured`))
  // console.log(headlines);

  const artResponse = await fetch(`/api/art`)
  const allPieces = await artResponse.json()
  const pieces = allPieces
  .filter(piece => piece.metadata.status.includes(`featured`))
  // console.log(pieces);

  const blogResponse = await fetch(`/api/blog`)
  const allPosts = await blogResponse.json()
  const posts = allPosts
  .filter(post => post.metadata.status.includes(`featured`))
  // console.log(posts);

  return {
    headlines,
    pieces,
    posts
  }
}