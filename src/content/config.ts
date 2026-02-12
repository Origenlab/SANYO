/**
 * ─── Content Collections Configuration ───
 * Define schemas for static pages.
 * Astro validates frontmatter at build time using these schemas.
 */
import { defineCollection, z } from "astro:content";

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    image: z.string().optional(),
    noindex: z.boolean().default(false),
  }),
});

export const collections = { pages };
