
export const prerender = true;

import { getMetadata } from '$lib/utilities/metadata.js'

export async function load() {
  const postsMetadata = getMetadata(import.meta.globEager('/src/content/blog/*.md'));
  return { posts: postsMetadata };
};
