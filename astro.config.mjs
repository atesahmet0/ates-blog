// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
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
