
export const prerender = true;

import { getMetadata } from '$library/utilities/metadata.js'

export async function load() {
  const postsMetadata = getMetadata(import.meta.glob('/src/content/blog/**/+content.md', {eager: true}));
  const headlinesMetadata = getMetadata(import.meta.glob('/src/content/news/**/+content.md', {eager: true}));
  const piecesMetadata = getMetadata(import.meta.glob('/src/content/art/**/+content.md', {eager: true}));

  return {
    posts: postsMetadata,
    headlines: headlinesMetadata,
    pieces: piecesMetadata
  };
};

