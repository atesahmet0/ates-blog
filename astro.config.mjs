// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://befuckingbold.com',
  integrations: [mdx(), sitemap()],
  image: {
    // Enable image optimization with non-progressive settings
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        // Disable progressive JPEG to prevent chunk-by-chunk loading
        progressive: false,
        // Optimize for quality while keeping file sizes reasonable
        quality: 85,
        // Use baseline JPEG encoding for instant full image display
        mozjpeg: true,
      }
    }
  },
});