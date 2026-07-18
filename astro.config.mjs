import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://www.silverliningofhope.com',
  trailingSlash: 'never',
  integrations: [sitemap()],

  build: {
    format: 'file',
  },

  adapter: cloudflare()
});