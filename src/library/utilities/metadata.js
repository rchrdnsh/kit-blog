function getSlugs(files) {
  const slugs = Object.entries(files);
  return slugs.map(
    ([path]) => {
      const filename = path.split('/').pop();
      const slug = filename.slice(0, -3);
      return slug;
    }
  );
}

export function getMetadata(files) {
  const slugs = getSlugs(files);
  const posts = files;
  const list = Object.values(posts);
  const metadata = list.map((post, i) => {
    post.metadata.slug = slugs[i];
    return post.metadata
  });
  return metadata
}