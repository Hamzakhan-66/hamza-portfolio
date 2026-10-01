// ============================================================
// SITE CONTENT
// Every value here is copied verbatim from the original
// index.html. This file is the single source of truth for
// content — components should never hardcode copy.
// ============================================================

export const profile = {
  logoInitials: 'HK',
  firstName: 'HAMZA',
  lastName: 'KHAN',
  role: 'AI ENGINEER',
  eyebrow: "HI, I'M",
  lede: 'I build intelligent systems and AI solutions that solve real-world problems.',
  tagline: 'CODE. LEARN. BUILD. IMPACT.',
  resumeUrl: '/assets/documents/Hamza_1.1.3_Resume.pdf',
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
];

export const socials = [
  {
    label: 'LinkedIn',
    icon: 'fa-brands fa-linkedin-in',
    href: 'https://www.linkedin.com/in/hamza-khan-4415b7348?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    external: true,
  },
  {
    label: 'GitHub',
    icon: 'fa-brands fa-github',
    href: 'https://github.com/Hamzakhan-66',
    external: true,
  },
  {
    label: 'Email',
    icon: 'fa-solid fa-envelope',
    href: 'mailto:thehamzakhan951@gmail.com',
    external: false,
  },
  {
    label: 'Instagram',
    icon: 'fa-brands fa-instagram',
    href: 'https://www.instagram.com/thehamza.khan?igsi=MXYwdHBiY3k2cmdxdA==',
    external: true,
  },
];

export const about = {
  eyebrowNum: '01',
  eyebrow: 'MY STORY',
  title: 'ABOUT ME',
  intro: [
    { strong: "I'm Hamza Khan." },
    {
      text: "My journey into Artificial Intelligence didn't begin with a framework, a programming language, or a complex algorithm. It began with a question:",
    },
    {
      quote:
        'What if machines could not just follow instructions, but learn, create, and act on their own?',
    },
    { text: 'That question stayed with me.' },
  ],
  seeMoreLabel: 'See More',
  modal: {
    eyebrowNum: '02',
    eyebrow: 'MY STORY, IN FULL',
    title: 'The Long Version',
    paragraphs: [
      'I started my journey in Computer Science with an interest in Web Development, learning HTML, CSS, and a little JavaScript. But somewhere along the way, I discovered something that felt much bigger to me — AI.',
      "What started with Machine Learning gradually led me to Generative AI, and then further into Agentic AI — systems that don't just respond, but can reason, make decisions, use tools, and take action.",
      'Today, Python is my primary language, and I work with technologies like LangChain and LangGraph while exploring how intelligent AI systems can be built to solve meaningful problems.',
      'I don\u2019t look at AI simply as a technology. When I see a real-world problem, my first thought is often:',
    ],
    quote: 'Can AI help solve this?',
    closingParagraphs: [
      'That question keeps me learning.',
      "And there's another side of me that exists far away from code.",
      "I'm a writer and a poet. I've written poems and authored two books. Writing allows me to express the thoughts that technology sometimes cannot.",
      "Maybe that's what makes my journey different — I build with logic, but I think with imagination.",
      "I'm Hamza, a Computer Science student, an aspiring AI Engineer, and a storyteller — exploring how far an idea can go when technology gives it the ability to act.",
    ],
  },
};

export const skills = {
  eyebrowNum: '03',
  eyebrow: 'MY SKILLS',
  titleLine1: 'SKILLS THAT',
  titleLine2: 'BUILD SOLUTIONS',
  lede: 'A blend of technical expertise and AI knowledge to build intelligent, real-world solutions.',
  technicalLabel: 'TECHNICAL SKILLS',
  frameworksLabel: 'FRAMEWORKS',
  technical: [
    { icon: '\u{1F310}', label: 'HTML' },
    { icon: '\u{1F3A8}', label: 'CSS' },
    { icon: '\u26A1', label: 'JS' },
    { icon: '\u{1F40D}', label: 'Python' },
  ],
  frameworks:[
    {label: 'LangGraph', icon: '\u{1F517}'},
    {label: 'LangChain', icon: '\u{1F517}'}
  ],

  aiLabel: 'AI / ML SKILLS',
  ai: [
    { icon: '\u{1F9E0}', label: 'Machine Learning' },
    { icon: '\u2728', label: 'Generative AI' },
    { icon: '\u{1F916}', label: 'Agentic AI' },
    { icon: '\u{1F4AC}', label: 'Prompt Engineering' },
    { icon: '\u{1F578}\uFE0F', label: 'LLMs' },
    { icon: '\u{1F50D}', label: 'RAG' },
    { icon: '\u{2B21}', label: 'OKF' },
    { icon: '\u{1F5C4}\uFE0F', label: 'Vector Database' },
  ],
};

export const projects = {
  eyebrowNum: '04',
  eyebrow: 'MY PROJECTS',
  titleLine1: 'PROJECTS',
  titleLine2: 'THAT SOLVE PROBLEMS',
  lede: 'A collection of AI-powered projects built to solve real-world problems and create meaningful impact.',
  items: [
    {
      icon: '\u{1F4CB}',
      title: 'Resume Analyzer',
      description:
        'Analyzes resumes and provides smart insights, scores, and improvement suggestions.',
      href: 'https://github.com/Hamzakhan-66/resume-analyzer',
    },
    {
      icon: '\u{1F5A5}\uFE0F',
      title: 'Code Reviewer',
      description: 'Reviews code quality, finds bugs, and suggests better alternatives.',
      href: 'https://github.com/Hamzakhan-66/AI-Code-Reviewer',
    },
    {
      icon: '\u{1F4BC}',
      title: 'Job Finder',
      description:
        'Finds relevant job opportunities based on skills, preferences, and experience.',
      href: 'https://github.com/Hamzakhan-66/ai-job-finder',
    },
    {
      icon: '\u{1F4AC}',
      title: 'Chatbot',
      description:
        'AI chatbot that answers queries, holds conversations, and assists users intelligently.',
      href: 'https://github.com/Hamzakhan-66/ai-chatbot',
    },
    {
      icon: '\u{1F578}\uFE0F',
      title: 'Multi AI System',
      description:
        'A multi-agent AI system that works together to solve complex tasks efficiently.',
      href: 'https://github.com/Hamzakhan-66/multi-ai-agent-system',
    },
    {
      icon: '\u2764\uFE0F',
      title: 'Health Assistant',
      description: 'AI assistant that provides health information, tips, and basic guidance.',
      href: 'https://github.com/Hamzakhan-66/health-assistant',
    },
    {
      icon: '\u{1F4D6}',
      title: 'Study Assistant',
      description:
        'Helps with studying by summarizing topics, answering questions, and boosting productivity.',
      href: 'https://github.com/Hamzakhan-66/ai-study-assistant',
    },
  ],
};

export const education = {
  eyebrowNum: '05',
  eyebrow: 'MY EDUCATION',
  title: 'EDUCATION',
  lede: 'My academic journey that shaped my foundation and passion for technology and AI.',
  items: [
    {
      icon: '\u{1F4D6}',
      years: '2021',
      title: 'School',
      description: 'Completed secondary education.',
    },
    {
      icon: '\u{1F3EB}',
      years: '2021 \u2013 2023',
      title: 'High School (11th and 12th)',
      description: 'Completed high school with focus on Computer Science.',
    },
    {
      icon: '\u{1F393}',
      years: '2023 \u2013 2027',
      title: 'Bachelor of Technology',
      description:
        'Computer Science and Engineering. Focused on AI/ML. Exploring advanced AI topics, building projects, and improving everyday.',
    },
  ],
};

export const certificates = {
  eyebrowNum: '06',
  eyebrow: 'MY ACHIEVEMENTS',
  titleLine1: 'CERTIFICATES',
  titleLine2: 'MILESTONES THAT MATTER',
  lede: 'A collection of certifications and achievements that reflect my continuous learning and growth.',
  items: [
    {
      title: 'Python Essentials Certificates',
      org: 'Cisco Networking Academy',
      date: '\u{1F4C5} 30 Sep 2025',
      href: '/assets/certificates/Python_Essentials_1_certificate_thehamzakhan951-gmail-com_c91b3105-3e0b-4edf-8ee0-ec12ba8a86d9.pdf',
    },
    {
      title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI',
      org: 'Oracle',
      date: '\u{1F4C5} 27 Oct 2025',
      href: '/assets/certificates/Oracle Generative Ai.pdf',
    },
    {
      title: 'Web Development',
      org: 'SkillDzire',
      date: '\u{1F4C5} 5 May 2025 - 20 June 2025',
      href: '/assets/certificates/Hamza Kalim Hashmi Khan_certificate (1).pdf',
    },
    {
      title: 'Communicative English',
      org: 'Cambridge',
      date: '\u{1F4C5} 2023-2024',
      href: '/assets/certificates/Communicative English.pdf',
    },
  ],
};

export const contact = {
  badge: 'GET IN TOUCH',
  title: "Let's work together",
  info: [
    {
      icon: 'fa-solid fa-location-dot',
      label: 'Biratnagar, Nepal',
      href: 'https://www.google.com/maps/place/Biratnagar+56613,+Nepal/@26.4562427,87.2768901,16.76z/data=!4m6!3m5!1s0x39ef744704331cc5:0x6d9a85e45c54b3fc!8m2!3d26.4559006!4d87.2802344!16zL20vMDRncjRf?entry=ttu&g_ep=EgoyMDI2MDgxOS4wIKXMDSoASAFQAw%3D%3D',
    },
    {
      icon: 'fa-solid fa-envelope',
      label: 'thehamzakhan951@gmail.com',
      href: 'mailto:thehamzakhan951@gmail.com',
    },
    {
      icon: 'fa-solid fa-phone',
      label: '+977-9702631951',
      href: 'tel:+9779702631951',
    },
    {
      icon: 'fa-brands fa-linkedin-in',
      label: 'Hamza Khan',
      href: 'https://www.linkedin.com/in/hamza-khan-4415b7348?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    },
    {
      icon: 'fa-brands fa-instagram',
      label: 'thehamza.khan',
      href: 'https://www.instagram.com/thehamza.khan?igsi=MXYwdHBiY3k2cmdxdA==',
    },
  ],
  formDemoMessage:
    'This is a demo form \u2014 connect it to your email service or a backend to make it functional.',
};

export const footer = {
  copyright: '\u00A9 2026 Hamza Khan. All rights reserved.',
  tagline: 'A mind that writes & a hand that builds.',
};
