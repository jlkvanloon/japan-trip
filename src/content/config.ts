import { defineCollection, z } from "astro:content";

const destinations = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    color: z.string(),
    travel: z.object({
      from: z.string(),
      method: z.string(),
      details: z.string(),
    }),
    hotel: z.object({
      name: z.string(),
      address: z.string(),
      notes: z.string().optional(),
    }),
    activities: z.object({
      brief: z.array(z.string()),
      detailed: z.array(
        z.object({
          name: z.string(),
          when: z.string(),
          description: z.string(),
          tips: z.string().optional(),
        })
      ),
    }),
  }),
});

export const collections = { destinations };
