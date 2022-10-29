
export const prerender = true;

import { getMetadata } from '$lib/utilities/metadata.js'

export async function load() {
  const headlinesMetadata = getMetadata(
    import.meta.glob(
      '/src/content/news/*.md',
      {eager: true}
    )
  );
  return { headlines: headlinesMetadata };
};
