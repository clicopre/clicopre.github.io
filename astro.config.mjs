import { defineConfig } from 'astro/config';

// https://astro.build/config
// For a user/org GitHub Pages site (clicopre.github.io) the site is served
// at the root, so no `base` is needed. When a custom domain (e.g. clicopre.com)
// is added, just update `site` and drop a CNAME file in /public.
export default defineConfig({
  site: 'https://clicopre.github.io',
  trailingSlash: 'ignore',
  build: {
    assets: 'assets',
  },
});
