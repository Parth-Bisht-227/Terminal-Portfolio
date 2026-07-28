import { Project } from './types';

export const COLORS = {
  CYAN: '#00F0FF',
  GREEN: '#39FF14',
  PURPLE: '#BC13FE',
  AMBER: '#FFB100',
  BG: '#050505',
};

export const RESUME_DATA = {
  link: '/Parth_Bisht_Resume.pdf',
  education: [
    {
      degree: 'B.Tech in Information Technology',
      institution: 'Delhi Technological University, New Delhi, India',
      duration: '2023 - 2027',
      score: 'CGPA: 8.54/10'
    },
    {
      degree: 'CBSE Class XII',
      institution: 'KIIT World School, New Delhi, India',
      duration: '2022',
      score: '96.2%'
    },
    {
      degree: 'CBSE Class X',
      institution: 'KIIT World School, New Delhi, India',
      duration: '2020',
      score: '95.4%'
    }
  ],
  achievements: [
    '7th Place - NMG Labs Forge Sprint (Claude Code Edition).',
    'Finalist - HackWithIndia 2024 (Top 40/3000+ teams) and ImaGenAI, IIT Delhi (Tryst\'25).'
  ],
  leadership: [
    {
      organization: 'STEP DTU',
      title: 'Advisor; Project Lead - MentorLink',
      duration: 'Jul. 2025 - Present',
      detail: 'Served as Joint Secretary (2025-26); coordinated mentors supporting approximately 300-500 students across branches and helped organise an 80+ participant retreat.'
    }
  ]
};

export const EXPERIENCE = [
  {
    company: 'Tsubasa Technologies Pty Ltd. (Australia)',
    role: 'AI Product Engineering Intern',
    duration: 'Jun. 2026 - Present',
    location: 'Remote',
    bullets: [
      'Leading the AI-assisted development of SparkPTE, translating product requirements into content schemas, scoring rules, practice workflows, acceptance criteria, and Android test plans.',
      'Transformed and validated 1,927 questions and 1,485 media assets across 22 PTE question types, producing structured app-ready content.',
      'Delivered workflows for all 22 question types, a searchable Question Bank, guided lessons, and a 65-question full mock test with deterministic objective scoring, progress persistence, and detailed review flows.',
      'Led the Spark Focus UI/UX redesign and conducted physical-device testing across navigation, audio playback, recording, keyboards, responsive layouts, and Light/Dark appearance on Android.'
    ]
  },
  {
    company: 'Stealth Startup (US-based)',
    role: 'AI Engineering Intern - Founding Team',
    duration: 'Feb. 2026 - Jun. 2026',
    location: 'Remote',
    bullets: [
      'Built the initial functional version of a real-time Voice AI restaurant-ordering agent in Python, integrating LiveKit, speech recognition, LLM reasoning, structured tool execution, and streaming speech synthesis.',
      'Integrated Twilio for inbound calling and developed MongoDB-backed tools for menu search, modifier selection, cart updates, and structured order placement.',
      'Tested transcription, interruption, incomplete-order, and tool-execution failures; later supported a senior engineer-led redesign through scenario testing, failure analysis, and structured product feedback.'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'manga-01',
    name: 'Manga-Splasher',
    tech: ['TensorFlow', 'Pix2Pix', 'U-Net', 'OpenCV', 'Streamlit'],
    highlights: [
      'Built and deployed a Pix2Pix-based manga colourisation system using a U-Net generator, PatchGAN discriminator, TensorFlow training and checkpoint workflow, and a Streamlit interface.',
      'Prepared a 12,136-pair training pipeline with LAB-space preprocessing; implemented generator inference, colour reconstruction, and output resizing to the original image resolution.'
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/Parth-Bisht-227/manga-splasher' },
      { label: 'Live Demo', href: 'https://manga-splasher.streamlit.app/' }
    ]
  }
];

export const RAPID_PROTOTYPES = [
  {
    name: 'Sharp AI',
    desc: 'Facial geometry analysis tool that recommends hairstyles and beard combos for men, with AI-generated visual previews.',
    link: 'https://ai.studio/apps/drive/15K3-vRDVv0YeiaNnJ0a0X-VkeymKnx_8?fullscreenApplet=true'
  },
  {
    name: 'Splashify',
    desc: 'Interactive music experience with a dynamic color-splash cursor.',
    link: 'https://splashifyyy.netlify.app/'
  },
  {
    name: 'Talk2Me AI',
    desc: 'Voice AI companion built with Vapi - one of my first voice agent builds.',
    link: 'https://talk2me-ai.netlify.app/'
  }
];

export const SKILLS = [
  { category: 'PROGRAMMING', skills: ['Python', 'Java', 'C++', 'SQL'] },
  { category: 'MACHINE LEARNING & CV', skills: ['PyTorch', 'TensorFlow/Keras', 'OpenCV'] },
  { category: 'DEVELOPMENT & DATA', skills: ['REST APIs', 'MongoDB', 'SQLite', 'Streamlit'] },
  { category: 'VOICE AI & AGENT SYSTEMS', skills: ['LiveKit', 'Deepgram', 'Twilio', 'LLM APIs', 'Structured Function Calling', 'Streaming STT/TTS'] },
  { category: 'TOOLS & FUNDAMENTALS', skills: ['Git/GitHub', 'Codex', 'Claude Code', 'DSA', 'OOP', 'DBMS', 'OS', 'Computer Networks'] }
];

export const CONTACT = {
  email: 'bishtparth227@gmail.com',
  linkedin: 'https://www.linkedin.com/in/parth-bisht-088480282/',
  github: 'https://github.com/Parth-Bisht-227',
  portfolio: 'https://terminal-portfolio-three-weld.vercel.app/'
};

export const SYSTEM_DATA = {
  user: 'Parth',
  location: 'New Delhi, India',
  focus: 'AI Engineering',
  education: 'DTU IT \'27',
  headline: 'AI Product Engineering Intern | Voice AI & Agent Systems',
  subtext: 'Information Technology undergraduate at DTU and AI Product Engineering Intern at Tsubasa Technologies.',
  bootSequence: [
    'Initializing Neural Kernels...',
    'Mounting DTU_IT_NODE_2027...',
    'Establishing Secure SSL Handshake...',
    'Accessing Bio-data: Parth Bisht...',
    'Welcome, Operator.'
  ]
};
