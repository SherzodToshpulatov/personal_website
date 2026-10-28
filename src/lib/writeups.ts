import { getCollection } from 'astro:content';

/** Published writeups, newest first. Drafts show only in `npm run dev`. */
export async function getWriteups() {
  const all = await getCollection('writeups', ({ data }) => import.meta.env.DEV || !data.draft);
  return all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
