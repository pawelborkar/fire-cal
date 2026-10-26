import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://pawel.in',
  base: '/fire-calculator',
  integrations: [sitemap()],
  output: 'static',
  build: {
    format: 'file'
  }
});
