import adapter from '@sveltejs/adapter-netlify';
import { mdsvex } from "mdsvex";
import mdsvexConfig from './mdsvex.config.js';
import { VitePWA } from 'vite-plugin-pwa'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ...mdsvexConfig.extensions],
  preprocess: [
    mdsvex(mdsvexConfig),
  ],
  kit: {
    target: '#svelte',
    adapter: adapter(),
    vite: {
      plugins: [
        VitePWA()
      ]
    }
  }
};

export default config;