import { defineCollection, z } from "astro:content";

const dateStr = z
  .union([z.string(), z.date()])
  .transform((v) => (v instanceof Date ? v.toISOString().split("T")[0] : v));

const destinations = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    startDate: dateStr,
    endDate: dateStr,
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
