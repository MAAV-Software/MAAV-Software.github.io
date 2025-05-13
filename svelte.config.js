import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const base = process.env.VITE_BASE_PATH || '/maav-website';

export default {
  kit: {
    adapter: adapter({
      fallback: 'index.html',  // 👈 Enables SPA routing fallback
      strict: false            // 👈 Allows dynamic routes that aren't prerendered
    }),
    alias: {
      $lib: 'src/lib',
      $components: 'src/components',
      $routes: 'src/routes',
      $assets: 'src/assets'
    },
    paths: {
      base
    }
  },
  preprocess: preprocess({
    postcss: true,
    typescript: true
  })
};
