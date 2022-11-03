export const prerender = true;

import { getFilteredMetadata } from '$library/utilities/metadata.js'

export async function load() {
  const postsMetadata = getFilteredMetadata(
    import.meta.glob(
      '/src/content/blog/**/+content.md',
      {eager: true}
    )
  );

  const headlinesMetadata = getFilteredMetadata(
    import.meta.glob(
      '/src/content/news/**/+content.md',
      {eager: true}
    )
  );

  const piecesMetadata = getFilteredMetadata(
    import.meta.glob(
      '/src/content/art/**/+content.md',
      {eager: true}
    )
  );

  return {
    posts: postsMetadata,
    headlines: headlinesMetadata,
    pieces: piecesMetadata
  };
};