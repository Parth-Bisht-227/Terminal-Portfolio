
import { Project } from './types';

export const COLORS = {
  CYAN: '#00F0FF',
  GREEN: '#39FF14',
  PURPLE: '#BC13FE',
  AMBER: '#FFB100',
  BG: '#050505',
};

export const RESUME_DATA = {
  link: 'https://drive.google.com/file/d/1fy81FhrcehDNQOeu_XMDbI-QM6DNgJ12/view?usp=drive_link',
  education: [
    {
      degree: 'B.Tech in Information Technology',
      institution: 'Delhi Technological University, New Delhi',
      duration: '2023-2027',
      score: '8.42 / 10'
    },
    {
      degree: 'CBSE (Class XII)',
      institution: 'KIIT World School',
      duration: '2022',
      score: '96.2 %'
    },
    {
      degree: 'CBSE (Class X)',
      institution: 'KIIT World School',
      duration: '2020',
      score: '95.4 %'
    }
  ],
  achievements: [
    '7th Place – NMG Labs Forge Sprint (Claude Code Edition), 99.1% SEO detection accuracy (June 2026)',
    'Finalist – HackWithIndia 2024 (Top 40 / 3000+ teams)',
    'Finalist – ImaGenAI, IIT Delhi (Tryst\'25)',
    'Recognized Developer – 4K+ reach on X & DEV for AI Agent project (2025)'
  ],
  responsibilities: [
    'Project Lead – MentorLink, STEP DTU (guided mentors impacting 300-500 students)',
    'Joint Secretary – STEP DTU (organized Hyderabad Retreat 2025, 80+ participants)',
    'Head – Technical Affairs, IEEE DTU (mentored 30+ students in GenAI)'
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'manga-02',
    name: 'Manga-Splasher',
    role: 'Lead Developer',
    tech: ['TensorFlow', 'Pix2Pix GAN', 'U-Net', 'Streamlit'],
    description: 'Pix2Pix GAN with custom U-Net architecture that colorizes B&W manga panels in real time. Built and deployed end to end on Streamlit.',
    link: 'https://manga-splasher.streamlit.app/'
  },
  {
    id: 'voice-01',
    name: 'Real-Time Agentic Voice Suite',
    role: 'Solo Developer',
    tech: ['LiveKit', 'Deepgram', 'Murf', 'Python', 'SQLite'],
    description: '10-day solo challenge: built 10 domain-specific autonomous voice agents. Highlights: multi-agent handoff system with 4 specialized personas (Active Recall Tutor) and an SDR qualification agent with live lead persistence.',
    link: 'https://github.com/Parth-Bisht-227/voice-agent-murf-falcon-10-day-challenge'
  }
];

export const RAPID_PROTOTYPES = [
  { name: 'Sharp AI', desc: 'Facial geometry analysis tool that recommends hairstyles and beard combos for men, with AI-generated visual previews.', link: 'https://ai.studio/apps/drive/15K3-vRDVv0YeiaNnJ0a0X-VkeymKnx_8?fullscreenApplet=true' },
  { name: 'Splashify', desc: 'Interactive music experience with dynamic color-splash cursor.', link: 'https://splashifyyy.netlify.app/' },
  { name: 'Talk2Me AI', desc: 'Voice AI companion built with Vapi — one of my first voice agent builds.', link: 'https://talk2me-ai.netlify.app/' }
];

export const SKILLS = [
  { name: 'Voice AI Systems', level: 84 },
  { name: 'LLM Agents & Function Calling', level: 82 },
  { name: 'Prompt Engineering', level: 85 },
  { name: 'RAG & Vector DBs', level: 72 },
  { name: 'Deep Learning (GANs/CNNs)', level: 78 },
  { name: 'Transformers & Attention', level: 70 }
];

export const SOCIALS = {
  linkedin: 'https://www.linkedin.com/in/parth-bisht-088480282/',
  x: 'https://x.com/Parth_Bisht_227',
  devto: 'https://dev.to/parth_bisht227',
  github: 'https://github.com/Parth-Bisht-227'
};

export const SYSTEM_DATA = {
  user: 'Parth',
  location: 'Delhi, IN',
  target: 'US Startup 2026',
  health: 'Optimal',
  headline: 'Voice AI Builder | LLM Agents & Real-Time Systems',
  subtext: "Founding team @ US stealth startup. Building voice AI that actually ships. DTU '27.",
  bootSequence: [
    'Initializing Neural Kernels...',
    'Mounting DTU_IT_NODE_2027...',
    'Establishing Secure SSL Handshake...',
    'Accessing Bio-data: Parth Bisht...',
    'Welcome, Operator.'
  ]
};
