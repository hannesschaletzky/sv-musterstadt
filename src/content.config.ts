import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const mannschaften = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/mannschaften' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      bereich: z.enum(['Herren', 'Frauen', 'Jugend']),
      altersklasse: z.string(),
      liga: z.string(),
      description: z.string(),
      image: image(),
      imageAlt: z.string(),
      trainer: z.array(z.object({ name: z.string(), rolle: z.string() })),
      training: z.array(z.object({ tag: z.string(), zeit: z.string(), platz: z.string() })),
      kader: z.array(z.object({ nr: z.number(), name: z.string(), position: z.enum(['Tor', 'Abwehr', 'Mittelfeld', 'Sturm']) })).default([]),
      order: z.number(),
    }),
});

const aktuelles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/aktuelles' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      autor: z.string(),
      rubrik: z.enum(['Spielbericht', 'Verein', 'Jugend', 'Frauen']),
      image: image(),
      imageAlt: z.string(),
    }),
});

export const collections = { mannschaften, aktuelles };
