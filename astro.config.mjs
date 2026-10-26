import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://fire.pawel.in',
  integrations: [sitemap()],
  output: 'static',
  build: {
    format: 'file'
  }
});
