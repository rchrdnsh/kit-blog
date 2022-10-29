
export const prerender = true;

import { getMetadata } from '$library/utilities/metadata.js'

export async function load() {
  const postsMetadata = getMetadata(import.meta.glob('/src/content/blog/*.md', {eager: true}));
  const headlinesMetadata = getMetadata(import.meta.glob('/src/content/news/*.md', {eager: true}));
  const piecesMetadata = getMetadata(import.meta.glob('/src/content/art/*.md', {eager: true}));

  return {
  posts: postsMetadata,
  headlines: headlinesMetadata,
  pieces: piecesMetadata
};
};

