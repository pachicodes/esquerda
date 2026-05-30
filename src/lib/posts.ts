import { getCollection, type CollectionEntry } from 'astro:content';

export async function getPublishedPosts(): Promise<CollectionEntry<'posts'>[]> {
  return (await getCollection('posts', ({ data }) => data.published)).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );
}
