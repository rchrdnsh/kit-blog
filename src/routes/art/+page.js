
export const prerender = true;

import { getMetadata } from '$library/utilities/metadata.js'

export async function load() {
  const piecesMetadata = getMetadata(
    import.meta.glob(
      '/src/content/art/*.md',
      {eager: true}
    )
  );
  return { pieces: piecesMetadata };
};
