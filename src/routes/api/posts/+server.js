// import { readFileSync } from 'fs';
import fs from 'fs';
// import path from 'path';

// import JSONList from '$content/list.json';
import { json } from '@sveltejs/kit';

function getFileName(path) {
  const filename = path.split('/').pop();
  const slug = filename.slice(0, -5);
  return slug;
}

export const GET = async () => {
  const posts = import.meta.glob('/src/content/posts/*.json');
  const iterablePostFiles = Object.entries(posts)
  // console.log(iterablePostFiles);
  const processedPosts = await Promise.all(
    iterablePostFiles.map(async ([path, post]) => {
      const postPath = path.slice(0, -5)
      const postBody = await post();
      const postSlug = getFileName(path);
      // console.log(postBody);
      // const postContent = JSON.stringify(postBody.default);
      const postContent = postBody.default;
      // console.log(postContent);
      return {
        path: postPath,
        slug: postSlug,
        content: postContent,
      }
    })
  )
  // parsedPosts = JSON.parse(posts)
  // console.log(parsedPosts)
  // const postEntries = Object.entries(allPosts)
  // const JSONPosts = JSON.stringify(postEntires)
  // console.log(postEntries);
  console.log(processedPosts);
  return json(processedPosts);
}

// /** @type {import('./$types').RequestHandler} */
// export async function POST({ request }) {

//   const { title, body } = await request.json();
//   const list = JSONList;
//   const newListItem = {id: list.length + 1, title: title, body: body};
//   const updatedList = [...list, newListItem]
//   const updatedListToString = JSON.stringify(updatedList, null, 2);
//   // console.log(updatedPostsToString)
  
//   const processedList = fs.writeFile(
//     `src/content/list.json`,
//     updatedListToString,
//     (error) => {
//       if (error) {
//         console.error(`An error occured`, error);
//       } else {
//         console.log(`Your file has been updated!`);
//       }
//     }
//   )

//   return new Response(processedList);
// }

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  // find the file the request is asking for
  // allow that file to be updated using the incoming edits from the GUI
  const { path, title, description, author, body } = await request.json();
  const updatedPost = {title: title, description: description, author: author, body: body};
  const updatedPostToString = JSON.stringify(updatedPost, null, 2);
  console.log(updatedPostToString);

  let postPath = path;

  const processedPost = fs.writeFile(
    postPath,
    updatedPostToString,
    (error) => {
      if (error) {
        console.error(`An error occured`, error);
      } else {
        console.log(`Your file has been updated!`);
      }
    }
  )

  return new Response(processedPost);
}