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

function getParentFolderNames(files) {
  const fileNames = Object.entries(files);
  return fileNames.map(
    ([path]) => {
      const parentFilename = path.split('/').at(-2);
      return parentFilename;
    }
  );
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
    post.metadata.titleslug = post.metadata.title.replace(/\s+/g, '-').toLowerCase();
    post.metadata.slug = slugs[i];
    post.metadata.folderslug = folderslugs[i];
    return post.metadata
  });
  return metadata
};

export function getFilteredMetadata(files) {
  const fileslugs = getFileNames(files);
  const folderslugs = getParentFolderNames(files);
  const posts = files;
  const list = Object.values(posts);
  const metadata = list.map((post, i) => {
    post.metadata.titleslug = post.metadata.title.replace(/\s+/g, '-').toLowerCase();
    post.metadata.fileslug = fileslugs[i];
    post.metadata.folderslug = folderslugs[i];
    return post.metadata
  });

  const filteredPosts = filterPosts(metadata, `featured`);
  return filteredPosts
};

// export const fetchMarkdownPosts = async (files) => {
//   const allPostFiles = files;
//   const iterablePostFiles = Object.entries(allPostFiles)
  
//   const allPosts = await Promise.all(
//     iterablePostFiles.map(async ([path, resolver]) => {
//       const { metadata } = await resolver()
//       const postPath = path.slice(0, -3)

//       return {
//         meta: metadata,
//         path: postPath,
//       }
//     })
//   )
//   // console.log(allPosts)

//   function filterPosts(allPosts) {
//     let filteredPosts = [];
//     for ( let post of allPosts) {
//       if (post.meta.status === 'featured') {
//         filteredPosts.push(post)
//       }
//     }
//     return filteredPosts;
//   }

//   const filteredPosts = filterPosts(allPosts);
//   // console.log(filteredPosts);
//   return filteredPosts
// }

// export const fetchMarkdownPosts = async () => {
//   const allPostFiles = import.meta.glob('/src/routes/blog/*.md')
//   const iterablePostFiles = Object.entries(allPostFiles)
  
//   const allPosts = await Promise.all(
//     iterablePostFiles.map(async ([path, resolver]) => {
//       const { metadata } = await resolver()
//       const postPath = path.slice(11, -3)

//       return {
//         meta: metadata,
//         path: postPath,
//       }
//     })
//   )

//   return allPosts
// }