
export const prerender = true;

import { getMetadata } from '$lib/utilities/metadata.js'

export async function load() {
  const piecesMetadata = getMetadata(import.meta.globEager('/src/content/art/*.md'));
  return { pieces: piecesMetadata };
};
