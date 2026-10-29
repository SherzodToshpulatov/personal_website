// Oʻzbekcha matn (lotin yozuvi). Tuzilishi en.ts bilan bir xil.
// Harflar: oʻ va gʻ uchun ʻ (U+02BB), tutuq belgisi uchun ʼ (U+02BC).
// [Kvadrat qavs] ichidagi matn — vaqtinchalik: dev rejimida koʻrinadi, saytda yashiriladi.
import type { Dict } from './en';

export const uz: Dict = {
  lang: 'uz',
  name: 'Sherzod Toshpoʻlatov',
  tagline: 'Axborot xavfsizligi tadqiqotchisi va oʻqituvchi, Toshkent.',
  description:
    'Sherzod Toshpoʻlatov — TATU kiberxavfsizlik magistranti va IT oʻqituvchi. .uz saytlari uchun veb-xavfsizlik auditi platformasi Sergakni yaratmoqda.',
  jobTitle: 'Axborot xavfsizligi tadqiqotchisi va oʻqituvchi',
  skipLink: 'Asosiy mazmunga oʻtish',
  switchLabel: 'English',

  nav: { work: 'Ishlar', research: 'Tadqiqot', experience: 'Tajriba', writeups: 'Yechimlar', contact: 'Aloqa' },

  intro: {
    before:
      'Oʻzbekistonning .uz segmentidagi saytlar qogʻozda xavfsiz koʻrinsa-da, amalda qanchalik zaif ekanini oʻrganaman va shu farqni oʻlchaydigan ',
    link: 'Sergak',
    after:
      ' skanerini yaratyapman. TATUda kiberxavfsizlik yoʻnalishi magistranti va IT oʻqituvchiman, front-end dasturlash boʻyicha tajribam bor.',
  },
  cvLabel: 'Rezyume (PDF)',
  now: { label: 'Hozir', text: 'Sergakning passiv skanerini yakunlab, magistrlik dissertatsiyasini yozyapman.' },

  sections: {
    work: 'Tanlangan ishlar',
    writeups: 'Yechimlar',
    allWriteups: 'Barcha yechimlar (ingliz tilida)',
    research: 'Tadqiqot va maʼruzalar',
    experience: 'Ish tajribasi',
    education: 'Taʼlim',
    practice: 'Amaliyot',
  },

  research: [
    {
      year: '2026',
      title: '[.uz veb-ilovalaridagi soxta xavfsizlik haqidagi maqola nomi]',
      detail: '[Jurnal yoki konferensiya] · N. Nasrullayev bilan hammualliflikda',
      href: '',
    },
    {
      year: '2026',
      title: 'Ransomware va adware zararli dasturlarini CNN yordamida aniqlash',
      detail: 'Konferensiyadagi maʼruza · [Konferensiya nomi]',
      href: '',
    },
    {
      year: '2027',
      title: 'Web ilovalarda zaifliklar skanerini ishlab chiqish',
      detail: 'Magistrlik dissertatsiyasi, TATU · Ilmiy rahbar: DSc. N. B. Nasrullayev',
      href: '',
    },
  ],

  experience: [
    {
      role: 'IT oʻqituvchi',
      org: 'DataCamp Academy',
      dates: '2026 –',
      detail: 'Xususiy IT oʻquv markazida kompyuter savodxonligi kurslari.',
    },
    {
      role: 'Oʻqituvchi',
      org: 'Respublika televideniya va radio texnikumi',
      dates: '2025 – 2026',
      detail:
        'Axborot xavfsizligi, Maʼlumotlar bazasini boshqarish, Dasturlash asoslari va Veb-dizayn fanlaridan dars berdim. Oʻquv materiallarini oʻzim tayyorladim: xavfsizlik misollariga asoslangan Python kursi hamda Autopsy, Redline va Cowrie SSH honeypot boʻyicha kriminalistika laboratoriya ishlari.',
    },
    { role: 'Frilanser veb-dasturchi', org: 'Mustaqil', dates: '2025 –' },
    { role: 'Veb-dasturchi', org: 'Oʻzbekiston Milliy universiteti Jizzax filiali', dates: '2024 – 2025' },
    { role: 'IT texnik', org: 'Cambridge LC', dates: '2023 – 2024' },
  ],

  education: [
    {
      role: 'Magistratura, Kiberxavfsizlik',
      org: 'TATU',
      dates: '2025 – 2027',
      detail: 'Ilmiy-pedagogik amaliyot: Wireshark, iptables va Nmap bilan Tarmoq xavfsizligi laboratoriyalari.',
    },
    { role: 'Bakalavriat, Kompyuter injiniringi', org: 'TATU', dates: '2019 – 2023' },
  ],

  practice: {
    intro:
      'Hozir TryHackMe platformasida Red Team yoʻnalishini oʻtyapman, CTF musobaqalarida esa asosan veb-zaifliklar bilan ishlayman. Hujum tomonidagi tajriba Sergakka ham, himoyani qanday oʻqitishimga ham bevosita foyda beradi.',
    rows: [
      { label: 'Vositalar', value: 'Wireshark, Nmap, Burp Suite, Ghidra, Volatility, CyberChef' },
      { label: 'Dasturlash', value: 'Python, JavaScript, TypeScript, SQL' },
      { label: 'Texnologiyalar', value: 'FastAPI, React, PostgreSQL, Docker, Linux' },
      { label: 'Tillar', value: 'Oʻzbek (ona tili), ingliz (IELTS 6.5), rus (A2)' },
    ],
  },

  contact: {
    heading: 'Bogʻlanish',
    text: 'Xavfsizlik sohasidagi ish takliflari, ilmiy hamkorlik va maʼruzalar uchun ochiqman. Email orqali eng tez javob beraman.',
  },

  footer: { location: 'Toshkent, Oʻzbekiston' },
};
