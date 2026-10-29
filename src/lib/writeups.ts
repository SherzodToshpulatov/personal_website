import { getCollection } from 'astro:content';

// Hides writeups everywhere (nav link, homepage section, /writeups/ pages), dev included.
// Set to true to bring them back.
const SHOW_WRITEUPS = false;

/** Published writeups, newest first. Drafts show only in `npm run dev`. */
export async function getWriteups() {
  if (!SHOW_WRITEUPS) return [];
  const all = await getCollection('writeups', ({ data }) => import.meta.env.DEV || !data.draft);
  return all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
