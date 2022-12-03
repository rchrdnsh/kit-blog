// import type { Actions } from './$types';
// import { SECRET_PASSWORD } from '$env/static/private';
 
// export const actions: Actions = {
//   default: async (event) => {
//     // TODO log the user in
//     // if the user types the correct password, then let them in to the page.
//     const form = await Request.formData();
//     const password = form.get('password');
//     // do whatever you want to do with email and password
//     if 
//     console.log('Hello');
//   }
// };

import { invalid } from '@sveltejs/kit';
import { SECRET_PASSWORD } from '$env/static/private';
 
// /** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
     const form = await request.formData();
    //  const email = form.get('email');
     const password = form.get('password');
     // do whatever you want to do with email and password
     if (password === SECRET_PASSWORD) {
      console.log(`Yay!, correct password! Booya!`)
      return { status: `success` };
     } else {
      console.log(`Nope, wrong password, yo! Boo!`)
      return { status: `failure` };
     }
     
  }
};