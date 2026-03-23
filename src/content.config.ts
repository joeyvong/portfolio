import { defineCollection } from "astro:content";
import { glob, file } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
    loader: glob({ pattern: "*/index.mdx", base: "./src/content/blog"}),
    schema: z.object({
        title: z.string(),
        slug: z.string(),
        date: z.coerce.date(),
        tags: z.array(z.string())
    })
});

export const collections = {
    blog
};