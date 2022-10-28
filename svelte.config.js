// import adapter from '@sveltejs/adapter-netlify';
// import { mdsvex } from "mdsvex";
// import mdsvexConfig from './mdsvex.config.js';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
//   extensions: [".svelte", ...mdsvexConfig.extensions],
//   preprocess: [
//     mdsvex(mdsvexConfig),
//   ],
//   kit: {
//     target: '#svelte',
//     adapter: adapter(),
//     vite: {
//       plugins: [
//         VitePWA()
//       ]
//     }
//   }
// };

// export default config;

import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import sveltePreprocess from 'svelte-preprocess';
// import importAssets from 'svelte-preprocess-import-assets';

/** @type {import('@sveltejs/kit').Config} */

const config = {
  extensions: [
    '.svelte',
    ...mdsvexConfig.extensions
  ],
  // preprocess: [
  //   mdsvex(mdsvexConfig),
  // ],
  preprocess: [
    mdsvex(mdsvexConfig),
		// importAssets(
    //   {
    //     sources: (defaultSources) => {
    //       return [
    //         ...defaultSources,
    //         {
    //           tag: 'Image',
    //           srcAttributes: ['src']
    //         }
    //       ]
    //     }
    //   }
    // ),
		sveltePreprocess()
	],
  kit: {
    adapter: adapter({ edge: true }),
    // files: {
    //   lib: 'src/library'
    // },
    // alias: {
    //   $library: 'src/library',
    //   $content: 'src/content',
    //   $images: 'src/images',
    //   $music: 'src/music',
    //   $themes: 'src/themes'
    // }
  }
};

export default config;