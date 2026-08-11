import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// The custom-domain site is served at the root, so no `base` is needed.
export default defineConfig({
  site: 'https://clicopre.com',
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
        "font-src 'self' data:",
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
          { resource: "'unsafe-inline'", kind: 'attribute' },
        ],
      },
    },
  },
  build: {
    assets: 'assets',
  },
});
