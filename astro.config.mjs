// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://sherzod.space',
  // English lives at /, Uzbek at /uz/.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'uz'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en', uz: 'uz' } },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
