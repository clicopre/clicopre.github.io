import { defineCollection, z } from 'astro:content';

const updates = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { updates };
