// Facts that are the same in every language.
// All wording lives in src/i18n/en.ts and src/i18n/uz.ts.

export const site = {
  url: 'https://sherzod.space',
  email: 'to5hpulatov@yandex.ru',
  cv: '/Sherzod_Toshpulatov_CV.pdf',
  github: 'https://github.com/SherzodToshpulatov',
  linkedin: 'https://www.linkedin.com/in/sherzod-toshpulatov-98865a21a',
  telegram: 'https://t.me/sherzodtoshpulatov',
  tryhackme: 'https://tryhackme.com/p/toshpulatov',
};

/** True while a string still contains a [placeholder]. */
export const isPlaceholder = (s: string) => /\[[^\]]+\]/.test(s);
