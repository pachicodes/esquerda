import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const categories = [
  'Direito de Entender',
  'Linguagem do Poder',
  'Tecnologia não é Neutra',
  'Esquerda para Gente Cansada',
  'Vida Cotidiana e Política',
] as const;

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(categories),
    description: z.string(),
    readingTime: z.string(),
    published: z.boolean().default(true),
  }),
});

export const collections = { posts };
