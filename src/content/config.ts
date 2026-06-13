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
      tijden: z.string().optional(),
      vluchtnummer: z.string().optional(),
      treinnummer: z.string().optional(),
      duur: z.string().optional(),
      klasse: z.string().optional(),
      bagage: z.string().optional(),
    }),
    hotel: z.object({
      name: z.string(),
      url: z.string().optional(),
      checkIn: z.string().optional(),
      checkOut: z.string().optional(),
      breakfast: z.string().optional(),
      payment: z.string().optional(),
    }),
    restaurants: z.array(
      z.object({
        name: z.string(),
        type: z.string(),
        when: z.string().optional(),
        notes: z.string().optional(),
      })
    ).optional(),
    activities: z.object({
      brief: z.array(z.string()),
    }),
    dagplanning: z.array(
      z.object({
        titel: z.string(),
        content: z.string(),
      })
    ).optional(),
  }),
});

export const collections = { destinations };
