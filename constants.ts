import { Project } from './types';

export const COLORS = {
  CYAN: '#00F0FF',
  GREEN: '#39FF14',
  PURPLE: '#BC13FE',
  AMBER: '#FFB100',
  BG: '#050505',
};

export const RESUME_DATA = {
  link: 'https://drive.google.com/file/d/17YM1ycBmGg8Goroy0YpHAPwGkka_AXt6/view?usp=sharing',
  education: [
    {
      degree: 'B.Tech Information Technology',
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
    'Finalist, ImaGenAI at IIT Delhi, Tryst \'25.'
  ],
  leadership: [
    {
      organization: 'STEP DTU',
      title: 'Advisor; Project Lead, MentorLink',
      duration: 'Jul. 2025 - Present',
      detail: 'Previously Joint Secretary (2025-26); coordinated mentors supporting approximately 300-500 students across branches and helped organize an 80+ participant retreat.'
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
      'Own SparkPTE product behavior, architecture, content and scoring models, security and privacy boundaries, acceptance criteria, Firebase/environment configuration, and deployment decisions; direct AI-assisted implementation, review changes, debug failures, and perform Android-device acceptance.',
      'Converted a legacy WordPress archive into an auditable system of 1,927 canonical questions, 1,485 media assets, 2,735 placements, and 333 quizzes across all 22 PTE question types, with provenance, validation, quarantine, and immutable, versioned outputs.',
      'Shaped all 22 question workflows, Guided Practice, audio and speaking-recording flows, deterministic objective scoring, detailed review, a reproducible 65-item Full Mock, and account-scoped local-first progress with offline recovery.',
      'Validated the Development build through 130 mobile test files / 703 automated tests, additional Functions/emulator tests, 32 Rules tests, content validation, and physical Android acceptance.'
    ]
  },
  {
    company: 'Stealth Startup (US-based)',
    role: 'AI Engineering Intern, Founding Team',
    duration: 'Feb. 2026 - Jun. 2026',
    location: 'Remote',
    bullets: [
      'Built the initial functional version of a real-time restaurant-ordering Voice AI application in Python using LiveKit, streaming speech recognition and synthesis, and LLM tool execution.',
      'Integrated Twilio inbound telephony and developed MongoDB-backed tools for menus, modifiers, carts, and structured order placement.',
      'Tested transcription, interruption, incomplete-order, and tool-execution failures; later supported a senior engineer-led workflow redesign through scenario testing, failure analysis, and product feedback.'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'waypoint-01',
    name: 'Waypoint Voice Lab',
    status: 'Development',
    section: 'featured',
    tech: ['Python', 'LiveKit', 'FastAPI', 'SQLite', 'Deepgram', 'Groq', 'Cartesia', 'React/TypeScript'],
    highlights: [
      'Built an end-to-end real-time travel-support Voice AI system connecting a LiveKit Python agent to deterministic FastAPI/SQLite tools for application status, missing documents, and travel-date updates.',
      'Added confirmation-gated mutations, idempotent retry safety, application-ID normalization, failure-safe tool execution, human handoff, interruption handling, and authoritative backend state.',
      'Instrumented transcription and turn latency, LLM TTFT, TTS TTFB, end-to-end response time, tool calls, and usage; validated the system with 80+ automated and provider-backed tests/evaluations.'
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
      'Ongoing PTE preparation mobile application covering all 22 question workflows, Guided Practice, audio playback and speaking recording, detailed review, deterministic objective scoring, and a reproducible 65-item Full Mock.',
      'Designed an auditable content pipeline that converted a legacy WordPress archive into 1,927 canonical questions and 1,485 media assets across 22 types, 2,735 placements, and 333 quizzes, with provenance, validation, quarantine, and immutable, versioned outputs.',
      'Defined local-first reliability around account-scoped optimistic progress, durable/idempotent retries, account isolation, offline/session recovery, rollback/last-known-good behavior, race-safe account deletion, and protection against deleted-user data recreation; validated the Development build through 703 automated tests and physical Android acceptance.'
    ],
    links: []
  },
  {
    id: 'manga-03',
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
    id: 'sekai-04',
    name: 'Parth no Sekai',
    status: 'Live · Personal Tool',
    section: 'personal',
    tech: ['Next.js', 'Supabase', 'Spaced Review', 'DSA'],
    highlights: [
      'Personal DSA practice and spaced-revision workspace with a searchable, status-filtered problem ledger for attempt outcomes, durable notes, and scheduled reviews.'
    ],
    links: [
      { label: 'Live', href: 'https://parth-no-sekai.vercel.app/' }
    ]
  },
  {
    id: 'voice-05',
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
  { category: 'BACKEND / DATA', skills: ['FastAPI', 'Pydantic', 'MongoDB', 'SQLite', 'Streamlit'] },
  { category: 'VOICE AI / AGENT SYSTEMS', skills: ['LiveKit', 'Deepgram', 'Twilio / SIP', 'Streaming STT/TTS', 'LLM APIs', 'Structured Function/Tool Calling', 'Conversational State / Agent Workflows'] },
  { category: 'MACHINE LEARNING', skills: ['PyTorch', 'TensorFlow/Keras', 'OpenCV'] },
  { category: 'ENGINEERING / TOOLS', skills: ['pytest', 'Git / GitHub'] },
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
  headline: 'Voice AI Builder | Reliable Agent Systems',
  subtext: 'AI Product Engineering Intern at Tsubasa Technologies. DTU IT \'27. Building real-time systems with deterministic business state.',
  bootSequence: [
    'Initializing Neural Kernels...',
    'Mounting DTU_IT_NODE_2027...',
    'Establishing Secure SSL Handshake...',
    'Accessing Bio-data: Parth Bisht...',
    'Welcome, Operator.'
  ]
};
