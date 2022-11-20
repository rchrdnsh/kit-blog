
// export const prerender = true;

// import { getMetadata } from '$library/utilities/metadata.js'

// export async function load() {
//   const piecesMetadata = getMetadata(
//     import.meta.glob(
//       '/src/content/art/**/+content.md',
//       {eager: true}
//     )
//   );
//   return { pieces: piecesMetadata };
// };

export const load = async ({ fetch }) => {
  const response = await fetch(`/api/art`)
  const pieces = await response.json()

  return {
    pieces
  }
}
