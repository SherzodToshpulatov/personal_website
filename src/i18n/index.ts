import { en } from './en';
import { uz } from './uz';

export const dictionaries = { en, uz };
export type Lang = keyof typeof dictionaries;

/** Homepage path for each language. */
export const homePath: Record<Lang, string> = { en: '/', uz: '/uz/' };

/** Pick the text for a project field in the given language, falling back to English. */
export const pick = (field: { en: string; uz?: string }, lang: Lang) => (lang === 'uz' && field.uz) || field.en;
