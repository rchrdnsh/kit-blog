// --------------------------------
// utility functions
// --------------------------------

function getFileNames(files) {
  const slugs = Object.entries(files);
  return slugs.map(
    ([path]) => {
      const filename = path.split('/').pop();
      const slug = filename.slice(0, -3);
      return slug;
    }
  );
};

function getFileName(path) {
  const filename = path.split('/').pop();
  const slug = filename.slice(0, -3);
  return slug;
}

function getParentFolderNames(files) {
  const fileNames = Object.entries(files);
  return fileNames.map(
    ([path]) => {
      const parentFilename = path.split('/').at(-2);
      return parentFilename;
    }
  );
}

function getParentFolderName(path) {
  const parentFilename = path.split('/').at(-2);
  return parentFilename;
}

function titleToSlug(title) {
  let titleslug = title.replace(/\s+/g, '-').toLowerCase();
  return titleslug;
}

function filterPosts(posts, status) {
  let filteredPosts = [];
  for ( let post of posts) {
    if (post.status === status) {
      filteredPosts.push(post)
    }
  }
  return filteredPosts;
}

export function filterContent(items, status) {
  let filteredItems = [];
  for ( let item of items) {
    if (item.metadata.status === status) {
      filteredItems.push(item)
    }
  }
  return filteredItems;
}

// --------------------------------
// sync functions
// --------------------------------

export function getMetadata(files) {
  const slugs = getFileNames(files);
  const folderslugs = getParentFolderNames(files);
  const posts = files;
  // console.log(posts);
  const listObject = Object.entries(files);
  // console.log(listObject);
  const list = Object.values(posts);
  // console.log(list);
  const metadata = list.map((post, i) => {
    post.metadata.titleslug = titleToSlug(post.metadata.title);
    post.metadata.slug = slugs[i];
    post.metadata.folderslug = folderslugs[i];
    return post.metadata
  });
  return metadata
};

export const getFilteredMetadata = async (files) => {
  const fileslugs = getFileNames(files);
  const folderslugs = getParentFolderNames(files);
  const posts = files;
  const list = Object.values(posts);
  const metadata = list.map((post, i) => {
    post.metadata.titleslug = titleToSlug(post.metadata.title);
    post.metadata.fileslug = fileslugs[i];
    post.metadata.folderslug = folderslugs[i];
    return post.metadata
  });

  const filteredPosts = filterPosts(metadata, `featured`);
  return filteredPosts
};

// --------------------------------
// async functions
// --------------------------------

export const fetchMarkdownPosts = async (files) => {
  const allContentFiles = files;
  const iterableContentFiles = Object.entries(allContentFiles)
  
  const allContent = await Promise.all(
    iterableContentFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      const contentPath = path.slice(12, -12)
      const contentSlug = getParentFolderName(path)

      return {
        metadata: metadata,
        path: contentPath,
        slug: contentSlug
      }
    })
  )

  return allContent;
}


export const fetchFilteredMarkdownPosts = async (files) => {
  const allPostFiles = files;
  // const fileslugs = getFileNames(files);
  // const folderslugs = getParentFolderNames(files);
  const iterablePostFiles = Object.entries(allPostFiles)
  
  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      const postPath = path.slice(0, -3)

      return {
        metadata: metadata,
        path: postPath,
      }
    })
  )
}