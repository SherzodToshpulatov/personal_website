import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Text in English, with an optional Uzbek version (falls back to English).
const bilingual = z.object({ en: z.string(), uz: z.string().optional() });

// One YAML file per project in src/content/projects/.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    order: z.number(), // lower comes first
    status: bilingual, // e.g. "Live", "In progress · Thesis"
    stack: z.array(z.string()),
    link: z.string().url().optional(), // leave out if there's nothing public yet
    description: bilingual,
    draft: z.boolean().default(false),
  }),
});

// Writeups stay hidden from the site until at least one non-draft file exists.
const writeups = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writeups' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    platform: z.string().optional(), // e.g. "TryHackMe", "CTF name 2026"
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, writeups };
