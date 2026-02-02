
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
      score: '8.536 / 10 (Up to 4th Sem)'
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
    'Finalist – HackWithIndia 2024 (Top 40 Teams out of 3000+)',
    'Finalist – ImaGenAI, IIT Delhi (Tryst\'25)',
    'Recognized Developer – 4K+ reach on X & DEV for Runner H AI Agent'
  ],
  responsibilities: [
    'Head – Technical Affairs, IEEE DTU (Mentored 30+ juniors in GenAI)',
    'Joint Secretary – STEP DTU (Organized flagship events, 80+ students)'
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'manga-01',
    name: 'Manga-Splasher',
    role: 'Lead Developer',
    tech: ['TensorFlow', 'Keras', 'GANs', 'U-Net', 'Streamlit'],
    description: 'A Pix2Pix GAN-based system that automatically colorizes black-and-white manga panels. Designed custom U-Net architecture.',
    link: 'https://manga-splasher.streamlit.app/'
  },
  {
    id: 'voice-02',
    name: 'Real-Time Agentic Voice System',
    role: 'Solo Developer',
    tech: ['LiveKit', 'Python', 'Gemini', 'Deepgram', 'SQLite'],
    description: 'Built 10 autonomous voice agents capable of real-time interaction with persona management and function calling.',
    link: 'https://github.com/Parth-Bisht-227/voice-agent-murf-falcon-10-day-challenge'
  },
  {
    id: 'emo-03',
    name: 'Multimodal Emotion Recognition',
    role: 'Co-Developer & System Integrator',
    tech: ['TensorFlow', 'Keras', 'OpenCV', 'Librosa'],
    description: 'Real-time classification system combining facial features and audio signals using late fusion logic.',
    link: 'https://github.com/Parth-Bisht-227/multimodal-emotion-recognition'
  }
];

export const RAPID_PROTOTYPES = [
  { name: 'Sharp AI', desc: 'AI-based content/idea system built using modern AI tools.', link: 'https://ai.studio/apps/drive/15K3-vRDVv0YeiaNnJ0a0X-VkeymKnx_8?fullscreenApplet=true' },
  { name: 'Splashify', desc: 'Interactive music experience with dynamic color-splash cursor.', link: 'https://splashifyyy.netlify.app/' },
  { name: 'Talk2Me AI', desc: 'Voice AI companion built using Vapi and simple frontend.', link: 'https://talk2me-ai.netlify.app/' }
];

export const SKILLS = [
  { name: 'Transformers & Attention', level: 72 },
  { name: 'LLM Foundations', level: 88 },
  { name: 'Voice AI Systems', level: 84 },
  { name: 'RAG & Vector DBs', level: 76 },
  { name: 'Agentic Frameworks', level: 65 },
  { name: 'Deep Learning (GANs/CNNs)', level: 80 }
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
  target: 'Japan 2026',
  health: 'Optimal',
  headline: 'Aspiring AI Engineer | GenAI • Voice AI • Intelligent Systems',
  subtext: 'IT student at DTU building practical AI applications in computer vision, generative models, and voice AI.',
  bootSequence: [
    'Initializing Neural Kernels...',
    'Mounting DTU_IT_NODE_2027...',
    'Establishing Secure SSL Handshake...',
    'Accessing Bio-data: Parth Bisht...',
    'Welcome, Operator.'
  ]
};
