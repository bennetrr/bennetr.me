import { defineCollection, z } from 'astro:content';

const linkCollection = defineCollection({
    type: 'data',
    schema: z.object({
        index: z.number().int().nonnegative(),
        title: z.string(),
        icon: z.string(),
        link: z.string().url()
    })
});

const projectCollection = defineCollection({
    type: 'content',
    schema: z.object({
        index: z.number().int().nonnegative(),
        title: z.string(),
        description: z.string(),
        technologies: z.array(z.string()),
        links: z.array(z.object({
            name: z.string(),
            url: z.string().url(),
            icon: z.string().optional()
        }))
    }).or(
        z.object({
            index: z.number().int().nonnegative(),
            title: z.string(),
            description: z.string(),
            technologies: z.array(z.string()),
            link: z.string().url()
        })
    )
});

export const collections = {
    'links': linkCollection,
    'projects': projectCollection
};
