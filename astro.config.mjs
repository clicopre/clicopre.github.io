import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// For a user/org GitHub Pages site (clicopre.github.io) the site is served
// at the root, so no `base` is needed. When a custom domain (e.g. clicopre.com)
// is added, just update `site` and drop a CNAME file in /public.
export default defineConfig({
  site: 'https://clicopre.github.io',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  markdown: {
    // Shiki emits inline styles that conflict with the strict CSP.
    syntaxHighlight: false,
  },
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "base-uri 'self'",
        "object-src 'none'",
        "form-action 'self'",
        "frame-src 'none'",
        "connect-src 'self'",
        "img-src 'self' data:",
        "font-src 'self' https://fonts.gstatic.com",
        "media-src 'self'",
        "worker-src 'self'",
        'upgrade-insecure-requests',
      ],
      scriptDirective: {
        resources: [
          { resource: "'self'", kind: 'element' },
          { resource: "'none'", kind: 'attribute' },
        ],
      },
      styleDirective: {
        resources: [
          { resource: "'self'", kind: 'element' },
          { resource: 'https://fonts.googleapis.com', kind: 'element' },
          { resource: "'unsafe-inline'", kind: 'attribute' },
        ],
      },
    },
  },
  build: {
    assets: 'assets',
  },
});
