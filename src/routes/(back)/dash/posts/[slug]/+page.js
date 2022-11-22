function contentCreation(slug, content) {
  if (slug === `new`) {
    return {
      "title": "",
      "description": "",
      "author": "",
      "body": ""
    }
  } else {
    return content;
  }
}

export async function load({ params }) {
  const post = await import(`../../../../../content/posts/${params.slug}.json`);
  const slug = params.slug;
  console.log(slug);
  const content = contentCreation(slug, post.default);
  console.log(content);
  return {
    slug: slug,
    content
  }
}