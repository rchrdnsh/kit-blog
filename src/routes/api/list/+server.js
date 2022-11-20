// import { readFileSync } from 'fs';
import fs from 'fs';
// import path from 'path';

import JSONList from '$content/list.json';
import { json } from '@sveltejs/kit';

export const GET = async () => {
  const list = JSONList;
  return json(list);
}

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {

  const { title, body } = await request.json();
  const list = JSONList;
  const newListItem = {id: list.length + 1, title: title, body: body};
  const updatedList = [...list, newListItem]
  const updatedListToString = JSON.stringify(updatedList, null, 2);
  // console.log(updatedPostsToString)
  
  const processedList = fs.writeFile(
    `src/content/list.json`,
    updatedListToString,
    (error) => {
      if (error) {
        console.error(`An error occured`, error);
      } else {
        console.log(`Your file has been updated!`);
      }
    }
  )

  return new Response(processedList);
}