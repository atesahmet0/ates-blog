import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    banner: z.string().optional(),
    bannerAlt: z.string().optional(),
  }),
});

export const collections = {
  blog,
};
