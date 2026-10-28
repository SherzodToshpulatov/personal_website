# sherzod.space

Personal site of Sherzod Toshpulatov, built with [Astro](https://astro.build) and Tailwind CSS. It builds to plain static HTML.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
npm run preview  # serve the built site
```

## Where things live

The site has two homepages: English at `/` and Uzbek at `/uz/`. Writeups are English only.

| To change… | Edit |
| --- | --- |
| Email, CV path, social links | `src/data/site.ts` |
| Any homepage wording (tagline, "Now" line, research, teaching, experience…) | `src/i18n/en.ts` **and** `src/i18n/uz.ts` |
| Projects | one YAML file each in `src/content/projects/` |
| Writeups | one Markdown file each in `src/content/writeups/` |
| CV | replace `public/Sherzod_Toshpulatov_CV.pdf` |
| Colours, fonts, dark mode | `src/styles/global.css` |

### Adding a project

Create `src/content/projects/name.yaml`:

```yaml
title: Project name
order: 4                  # lower comes first
status:
  en: Live
  uz: Ishlamoqda
stack: [Python, FastAPI]
link: https://github.com/SherzodToshpulatov/name   # optional
description:
  en: One or two sentences on what it does and why it matters.
  uz: Xuddi shu matn oʻzbekcha.
```

If you leave out `uz`, the Uzbek page shows the English text.

### Uzbek spelling

Use ʻ (U+02BB) in oʻ and gʻ, and ʼ (U+02BC) for the tutuq belgisi (maʼlumot, taʼlim). Copy them from `src/i18n/uz.ts` if your keyboard doesn't have them.

### Writeups

The Writeups section and `/writeups/` pages stay hidden until there is at least one published writeup. Copy `src/content/writeups/_TEMPLATE.md`, rename it, fill it in and set `draft: false`. Drafts appear in `npm run dev` but not on the live site. Only publish writeups for retired rooms or finished events.

### Placeholders

Text in `[square brackets]` in the `src/i18n/` files is a placeholder. You see it in dev; on the live site, research entries with a placeholder title are hidden and placeholder parts of detail lines are dropped.

## Deploy

Vercel or Netlify: import the repo, framework preset **Astro**, build command `npm run build`, output directory `dist`. Then move the `sherzod.space` domain over from the old project.
