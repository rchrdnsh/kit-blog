
export const prerender = true;

import { getMetadata } from '$lib/utilities/metadata.js'

export async function load() {
  const postsMetadata = getMetadata(import.meta.globEager('/src/content/blog/*.md'));
  const headlinesMetadata = getMetadata(import.meta.globEager('/src/content/news/*.md'));
  const piecesMetadata = getMetadata(import.meta.globEager('/src/content/art/*.md'));

  return {
  posts: postsMetadata,
  headlines: headlinesMetadata,
  pieces: piecesMetadata
};
};

