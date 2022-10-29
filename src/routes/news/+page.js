
export const prerender = true;

import { getMetadata } from '$lib/utilities/metadata.js'

export async function load() {
  const headlinesMetadata = getMetadata(import.meta.globEager('/src/content/news/*.md'));
  return { headlines: headlinesMetadata };
};
