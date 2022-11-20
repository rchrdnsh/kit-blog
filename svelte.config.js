import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */

const config = {
  extensions: [
    '.svelte',
    ...mdsvexConfig.extensions
  ],
  preprocess: [
    mdsvex(mdsvexConfig),
		sveltePreprocess()
	],
  kit: {
    adapter: adapter({ edge: true }),
    files: {
      lib: 'src/library'
    },
    alias: {
      $library: 'src/library',
      $content: 'src/content',
      $styles: 'src/styles'
    }
  }
};

export default config;