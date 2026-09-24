import { Project } from './types';

export const COLORS = {
  CYAN: '#00F0FF',
  GREEN: '#39FF14',
  PURPLE: '#A78BFA',
  AMBER: '#FFB100',
  BG: '#050505',
};

export const RESUME_DATA = {
  link: 'https://drive.google.com/file/d/16PAiEJLA3qvogdw1ksd_z66JIuIbIw4W/view?usp=sharing',
  education: [
    {
      degree: 'B.Tech in Information Technology',
      institution: 'Delhi Technological University, New Delhi, India',
      duration: '2023 - 2027',
      score: 'CGPA: 8.55 / 10'
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
    '7th Place, NMG Labs Forge Sprint.',
    'Finalist, HackWithIndia 2024 (Top 40 / 3000+ teams).',
    'Finalist, ImaGenAI at IIT Delhi.'
  ],
  leadership: [
    {
      organization: 'STEP DTU',
      title: 'Advisor; Project Lead - MentorLink',
      duration: 'Jul. 2025 - Present',
      detail: 'Joint Secretary (2025–26); coordinated mentors for 300–500 students and helped organise an 80+ participant retreat.'
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
      'Led development of SparkPTE, a local-first PTE preparation app covering all 22 question types, Guided Practice, media-based speaking and listening, review flows, offline learning, and a 65-item Full Mock.',
      'Reworked a legacy WordPress question bank into a structured dataset of 1,927 questions and 1,485 media assets, resolving data and media issues and defining the canonical content format used by the application.',
      'Defined and validated Firebase-backed systems for cloud content delivery, learner progress sync, and account lifecycle, including offline caching, account isolation, retry-safe updates, rollback, secure deletion, and the backend foundation for future subjective scoring; validated critical workflows through 700+ automated tests and physical-device testing.'
    ]
  },
  {
    company: 'Stealth Startup (US-based)',
    role: 'AI Engineering Intern, Founding Team',
    duration: 'Feb. 2026 - Jun. 2026',
    location: 'Remote',
    bullets: [
      'Built the initial functional version of a real-time restaurant-ordering voice agent in Python, integrating LiveKit, streaming STT/TTS, LLM reasoning, and structured tool execution.',
      'Integrated Twilio for inbound calling and developed MongoDB-backed tools for menu search, modifier selection, cart updates, and structured order placement.',
      'Tested transcription, interruption, incomplete-order, and tool-execution failures; later supported a senior engineer-led redesign through scenario testing, failure analysis, and structured product feedback.'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'waypoint-01',
    name: 'Waypoint Voice Lab',
    status: 'Development',
    section: 'featured',
    tech: ['Python', 'LiveKit', 'Deepgram', 'Cartesia', 'FastAPI', 'SQLite'],
    highlights: [
      'Built a multilingual real-time travel-support voice agent using LiveKit, streaming STT/TTS, and LLM tool calling to create and check applications, explain missing documents, confirm travel-date changes, and create human support requests.',
      'Designed typed FastAPI and SQLite tool boundaries with backend validation, confirmation-gated mutations, transactional idempotency, and Gemini-to-Cerebras fallback for provider failures.',
      'Added session observability for latency, tool execution, provider usage, interruptions, and failures; validated workflows with 80 provider-free Python tests, 8 provider-backed agent evals, and multilingual live-call testing.'
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/Parth-Bisht-227/waypoint-voice-ai' }
    ]
  },
  {
    id: 'sparkpte-02',
    name: 'SparkPTE',
    status: 'Development',
    section: 'featured',
    tech: ['React Native', 'TypeScript', 'Firebase', 'Firestore'],
    highlights: [
      'Local-first PTE preparation mobile application covering all 22 question workflows, Guided Practice, audio playback and speaking recording, detailed review, and a 65-item Full Mock.',
      'Reworked legacy question bank into a structured dataset of 1,927 questions and 1,485 media assets with canonical content format and provenance.',
      'Built cloud content delivery, offline caching, progress sync, rollback, and account lifecycle; validated through 700+ automated tests and physical device acceptance.'
    ],
    links: []
  },
  {
    id: 'grocery-03',
    name: 'DTU Grocery Compare',
    status: 'Live · Utility',
    section: 'featured',
    tech: ['Python', 'Streamlit', 'Playwright', 'BeautifulSoup', 'SKU Matching'],
    highlights: [
      'Built a local Streamlit app that compares live Blinkit and Instamart grocery prices for the DTU campus area in real time.',
      'Implemented automated Playwright scraping with location targeting and conservative SKU string/quantity matching to compare identical product variants reliably.'
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/Parth-Bisht-227/dtu-grocery-compare' }
    ]
  },
  {
    id: 'manga-04',
    name: 'Manga-Splasher',
    status: 'Live',
    section: 'featured',
    tech: ['TensorFlow/Keras', 'Pix2Pix', 'U-Net', 'PatchGAN', 'OpenCV', 'Streamlit'],
    highlights: [
      'Built and deployed a Pix2Pix manga colourisation system using a U-Net generator, PatchGAN discriminator, TensorFlow/Keras training and checkpoint pipeline, and a Streamlit interface.',
      'Prepared 12,136 paired training samples with LAB-space preprocessing; implemented inference, LAB-to-RGB reconstruction, and restoration to the original image dimensions.'
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/Parth-Bisht-227/manga-splasher' },
      { label: 'Live Demo', href: 'https://manga-splasher.streamlit.app/' }
    ]
  },
  {
    id: 'sekai-05',
    name: 'Parth no Sekai',
    status: 'Live · DSA Workspace',
    section: 'personal',
    tech: ['Next.js', 'Supabase', 'Spaced Review', 'DSA'],
    highlights: [
      'Custom revision flow for algorithmic practice replacing bloated Notion trackers; logging an attempt takes seconds without breaking focus.',
      'Searchable workspace for Clean / Hint / Stuck outcomes, durable notes, and scheduled spaced review to strengthen core problem-solving.'
    ],
    links: [
      { label: 'Live', href: 'https://parth-no-sekai.vercel.app/' }
    ]
  },
  {
    id: 'voice-06',
    name: 'Murf Falcon Voice Ordering Agent',
    status: 'Earlier Build',
    section: 'earlier',
    tech: ['Python', 'LiveKit', 'Deepgram', 'Gemini', 'Murf Falcon'],
    highlights: [
      'Built a real-time cafe ordering voice agent for the Murf Falcon challenge with structured tools for validated order state, missing-field checks, order confirmation, JSON persistence, and session metrics.'
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/Parth-Bisht-227/voice-agent-murf-falcon-10-day-challenge' }
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
  { category: 'BACKEND & DEVELOPMENT', skills: ['FastAPI', 'Pydantic', 'MongoDB', 'SQLite', 'Streamlit'] },
  { category: 'VOICE AI & AGENT SYSTEMS', skills: ['LiveKit', 'Deepgram', 'Cartesia', 'Twilio / SIP', 'Streaming STT/TTS', 'LLM APIs', 'Structured Function / Tool Calling'] },
  { category: 'MACHINE LEARNING & TOOLS', skills: ['PyTorch', 'TensorFlow/Keras', 'OpenCV', 'pytest', 'Git / GitHub'] },
  { category: 'FUNDAMENTALS', skills: ['DSA', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'] }
];

export const CONTACT = {
  email: 'bishtparth227@gmail.com',
  linkedin: 'https://www.linkedin.com/in/parth-bisht-088480282/',
  github: 'https://github.com/Parth-Bisht-227'
};

export const SYSTEM_DATA = {
  user: 'Parth',
  location: 'New Delhi, India',
  focus: 'AI Engineering',
  education: 'DTU IT \'27',
  headline: 'Turning messy problems into working products.',
  subtext: 'I’m Parth, an IT undergraduate at DTU (\'27) and an AI Product Engineering Intern at Tsubasa Technologies. I’m exploring applied AI and Voice AI by building products, testing edge cases, and learning from what breaks.',
  bootSequence: [
    'Initializing Neural Kernels...',
    'Mounting DTU_IT_NODE_2027...',
    'Establishing Secure SSL Handshake...',
    'Accessing Bio-data: Parth Bisht...',
    'Welcome, Operator.'
  ]
};
