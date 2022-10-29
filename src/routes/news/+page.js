
export const prerender = true;

import { getMetadata } from '$library/utilities/metadata.js'

export async function load() {
  const headlinesMetadata = getMetadata(
    import.meta.glob(
      '/src/content/news/*.md',
      {eager: true}
    )
  );
  return { headlines: headlinesMetadata };
};
