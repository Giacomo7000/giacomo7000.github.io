import { defineCollection, z } from "astro:content";

const localizedString = z.object({
  en: z.string(),
  it: z.string()
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: localizedString,
    subtitle: localizedString,
    summary: localizedString,
    year: z.string(),
    date: z.string().regex(/^\d{4}-\d{2}$/).optional(),
    order: z.number(),
    status: localizedString,
    role: localizedString,
    technologies: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    cover: z.string().optional(),
    coverFit: z.enum(["cover", "logo"]).default("cover"),
    links: z.array(z.object({
      label: localizedString,
      url: z.string()
    })).default([]),
    sections: z.array(z.object({
      title: localizedString,
      body: localizedString
    })).default([])
  })
});

const archive = defineCollection({
  type: "content",
  schema: z.object({
    title: localizedString,
    summary: localizedString,
    date: z.string(),
    dateLabel: localizedString.optional(),
    location: z.string().optional(),
    order: z.number(),
    cover: z.string().optional(),
    gallery: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    links: z.array(z.object({
      label: localizedString,
      url: z.string()
    })).default([]),
    sections: z.array(z.object({
      title: localizedString,
      body: localizedString
    })).default([])
  })
});

export const collections = { projects, archive };
