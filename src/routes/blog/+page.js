
export const prerender = true;

import { getMetadata } from '$library/utilities/metadata.js'

export async function load() {
  const postsMetadata = getMetadata(
    import.meta.glob(
      '/src/content/blog/*.md',
      {eager: true}
    )
  );
  return { posts: postsMetadata };
};
