// English text for the site. src/i18n/uz.ts has the same shape in Uzbek.
// When you change a fact here, change it in uz.ts too.
// Text in [square brackets] is a placeholder: shown in dev, hidden on the live site.

export const en = {
  lang: 'en',
  name: 'Sherzod Toshpulatov',
  tagline: 'Information security researcher and educator, Tashkent.',
  description:
    'Sherzod Toshpulatov — master’s student in Cyber Security at TUIT and IT instructor. Building Sergak, a web security auditing platform for .uz sites.',
  jobTitle: 'Information security researcher and educator',
  skipLink: 'Skip to content',
  switchLabel: 'Oʻzbekcha',

  nav: { work: 'Work', research: 'Research', writeups: 'Writeups', contact: 'Contact' },

  intro: {
    before:
      'I study how websites in Uzbekistan’s .uz space look secure on paper but fail in practice, and I’m building ',
    link: 'Sergak',
    after:
      ', a scanner that measures that gap. I’m a master’s student in Cyber Security at TUIT and an IT instructor, with a background in front-end development.',
  },
  cvLabel: 'CV (PDF)',
  now: { label: 'Now', text: 'Finishing Sergak’s passive scanner and writing up the master’s thesis.' },

  sections: {
    work: 'Selected work',
    writeups: 'Writeups',
    allWriteups: 'All writeups',
    research: 'Research & talks',
    experience: 'Experience',
    education: 'Education',
    practice: 'Practice',
  },

  research: [
    {
      year: '2026',
      title: '[Paper title on security theater in .uz web applications]',
      detail: '[Journal or conference] · with N. Nasrullayev',
      href: '',
    },
    {
      year: '2026',
      title: 'CNN-based detection of ransomware and adware',
      detail: 'Conference talk · [Conference name]',
      href: '',
    },
    {
      year: '2027',
      title: 'Developing a vulnerability scanner for web applications',
      detail: 'Master’s thesis, TUIT · Supervisor: DSc. N. B. Nasrullayev',
      href: '',
    },
  ],

  experience: [
    {
      role: 'IT instructor',
      org: 'DataCamp Academy',
      dates: '2026 –',
      detail: 'Computer literacy courses at a private IT learning centre.',
    },
    {
      role: 'Instructor',
      org: 'Republic Technical College of TV and Radio',
      dates: '2025 – 2026',
      detail:
        'Taught Information Security, Database Management, Programming Fundamentals and Web Design. Wrote my own materials: a Python course built around security examples, and forensics labs on Autopsy, Redline and a Cowrie SSH honeypot.',
    },
    { role: 'Freelance web developer', org: 'Self-employed', dates: '2025 –' },
    { role: 'Web developer', org: 'National University of Uzbekistan, Jizzakh branch', dates: '2024 – 2025' },
    { role: 'IT technician', org: 'Cambridge LC', dates: '2023 – 2024' },
  ],

  education: [
    {
      role: 'M.S. Cyber Security',
      org: 'TUIT',
      dates: '2025 – 2027',
      detail: 'Teaching internship: Network Security labs with Wireshark, iptables and Nmap.',
    },
    { role: 'B.S. Computer Engineering', org: 'TUIT', dates: '2019 – 2023' },
  ],

  practice: {
    intro:
      'I’m working through TryHackMe’s Red Team path, and in CTFs I focus on web exploitation. The offensive side feeds straight back into Sergak and into how I teach defense.',
    rows: [
      { label: 'Tools', value: 'Wireshark, Nmap, Burp Suite, Ghidra, Volatility, CyberChef' },
      { label: 'Languages', value: 'Python, JavaScript, TypeScript, SQL' },
      { label: 'Building with', value: 'FastAPI, React, PostgreSQL, Docker, Linux' },
      { label: 'Speaks', value: 'Uzbek (native), English (IELTS 6.5), Russian (A2)' },
    ],
  },

  contact: {
    heading: 'Get in touch',
    text: 'Open to security roles, research collaboration and speaking. Email is the fastest way to reach me.',
  },

  footer: { location: 'Tashkent, Uzbekistan' },
};

export type Dict = typeof en;
