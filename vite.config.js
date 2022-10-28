import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';
// import mkcert from 'vite-plugin-mkcert';

/** @type {import('vite').UserConfig} */

// const supportedExtensions = ['webp', 'jpg', 'jpeg', 'png'];

const config = {
  ssr: {
    noExternal: [
      'svelte-stripe-js',
      'style-value-types',
      'popmotion',
      'framesync'
    ]
  },
  plugins: [
    sveltekit(),
    imagetools(),
    // imagetools(
    //   {
    //     defaultDirectives: (url) => {
    //       const extension = url.pathname.substring(url.pathname.lastIndexOf('.') + 1);
    //       if (supportedExtensions.includes(extension)) {
    //         return new URLSearchParams({
    //           format: `webp;jpg`,
    //           width: `200;300;400;500;800;1000`,
    //           picture: true
    //         });
    //       }
    //       return new URLSearchParams();
    //     }
    //   },
    // ),
    // mkcert({hosts: ['localhost', 'app.local']})
  ]
};

export default config;