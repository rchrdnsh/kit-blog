import abbr from 'remark-abbr';
import slug from 'rehype-slug';
import autolink from 'rehype-autolink-headings';
import headings from './src/lib/utilities/headings.js';
import addClasses from 'rehype-add-classes'

const config = {
  extensions: ['.svx', '.md', '.svelte.md'],
  // layout: './src/lib/MDLayout.svelte',
  smartypants: {
    dashes: 'oldschool',
  },
  remarkPlugins: [
    abbr,
    headings
  ],
  rehypePlugins: [
    slug,
    [autolink,
      {
        behavior: 'wrap'
      }
    ],
    [addClasses,
      {
        'h1': 'md-h1',
        'h2': 'md-h2',
        'h3': 'md-h3'
      }
    ],
  ]
};

export default config;