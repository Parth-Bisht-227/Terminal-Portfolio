<div align="center">
  <h1>🧠 Neural Command Center</h1>
  <p><strong>A cyber-minimalist terminal portfolio for Parth Bisht</strong></p>
  <p>React + TypeScript • Framer Motion • Three.js • Tailwind CSS</p>
</div>

<br/>

An interactive, terminal-themed portfolio website that simulates a neural command interface. Explore projects, skills, and mission data through a fully functional terminal emulator — complete with a glowing neon aesthetic, animated neural network background, and light/dark theme support.

## Features

- **Interactive Terminal** — Type commands like `help`, `projects`, `skills`, `mission`, or `contact` to explore the portfolio in real time
- **Neural Network Visualization** — Subtle animated SVG node graph as a decorative background
- **Mission HUD** — Dashboard showing skill levels, deployment readiness, and status checkpoints
- **Dock Navigation** — macOS-style dock with quick-launch buttons for key sections
- **Theme Toggle** — Switch between cyber dark mode and clean light mode
- **Boot Sequence** — Simulated system initialization on load
- **Responsive** — Works on desktop and mobile

## Terminal Commands

| Command       | Description                                 |
|---------------|---------------------------------------------|
| `help`        | List all available commands                 |
| `about`       | Display bio and headline                    |
| `projects`    | Show featured projects                      |
| `skills`      | View skill breakdown                        |
| `mission`     | Open the Mission HUD panel                  |
| `vibe-coded`  | List rapid prototypes and side experiments   |
| `contact`     | Show social links and contact info          |
| `resume`      | Get link to the latest resume               |
| `clear`       | Clear the terminal output                   |

## Tech Stack

| Technology      | Purpose                        |
|-----------------|--------------------------------|
| React 18        | UI framework                   |
| TypeScript      | Type safety                    |
| Vite            | Build tool & dev server        |
| Framer Motion   | Animations & transitions       |
| Three.js        | 3D / shader background         |
| Tailwind CSS    | Utility-first styling          |
| Lucide React    | Icon library                   |

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Set your Gemini API key (optional, for AI features)
# Edit .env.local and add:
# GEMINI_API_KEY=your_key_here

# Start the development server
npm run dev        # → localhost:3000

# Build for production
npm run build

# Preview the production build
npm run preview
```

## Project Structure

```
├── components/
│   ├── AnimatedShaderBackground.tsx  # Three.js aurora shader (disabled)
│   ├── Dock.tsx                      # Bottom quick-launch dock
│   ├── MissionHUD.tsx                # Skills & mission dashboard
│   ├── NeuralNetwork.tsx             # Animated neural node graph
│   ├── StatusBar.tsx                 # Top status bar & theme toggle
│   └── Terminal.tsx                  # Core terminal emulator
├── App.tsx                           # Root layout & boot sequence
├── constants.ts                      # Portfolio data (projects, skills, etc.)
├── types.ts                          # TypeScript interfaces
├── index.tsx                         # Entry point
├── index.html                        # HTML shell (Tailwind CDN, fonts)
├── vite.config.ts                    # Vite configuration
└── package.json
```

## Links

- [GitHub](https://github.com/Parth-Bisht-227)
- [LinkedIn](https://www.linkedin.com/in/parth-bisht-088480282/)
- [X / Twitter](https://x.com/Parth_Bisht_227)
- [DEV.to](https://dev.to/parth_bisht227)
- [Resume](https://drive.google.com/file/d/1fy81FhrcehDNQOeu_XMDbI-QM6DNgJ12/view)

---

<div align="center">
  <small>Built with React, TypeScript, and a lot of neon.</small>
</div>
