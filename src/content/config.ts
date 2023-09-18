import { defineCollection, z } from 'astro:content';
export const collections = {
    links: defineCollection({
        type: 'data',
        schema: z.object({
            index: z.number().int().nonnegative(),
            title: z.string(),
            icon: z.string(),
            link: z.string().url()
        })
    }),
    projects: defineCollection({
        type: 'content',
        schema: z.object({
            index: z.number().int().nonnegative(),
            title: z.string(),
            description: z.string(),
            technologies: z.array(z.string()),
            link: z.string().optional(),
            links: z.array(z.object({
                name: z.string(),
                url: z.string().url(),
                icon: z.string().optional()
            }))
        })
    })
};
