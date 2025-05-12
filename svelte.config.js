import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const base = process.env.VITE_BASE_PATH || '/maav-website';

export default {
  kit: {
    adapter: adapter(), // Automatically picks the best adapter for deployment
    alias: {
      $lib: 'src/lib',
      $components: 'src/components',
      $routes: 'src/routes',
      $assets: 'src/assets'
    },
    paths: {
        base
    },
  },
  preprocess: preprocess({
    postcss: true, // Enable Tailwind CSS via PostCSS
    typescript: true
  })
};
