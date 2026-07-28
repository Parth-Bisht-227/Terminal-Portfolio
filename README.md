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
| `mission`     | Open the resume-backed profile HUD          |
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
# Make a copy of .env.local and add:
# GEMINI_API_KEY=your_key_here

# Start the development server
npm run dev        # → http://localhost:3000

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

## Deploy to Vercel

This project is a static Vite + React app and can be deployed to Vercel in minutes.

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Parth-Bisht-227/Terminal-Portfolio)

### Manual Deploy

1. **Push to GitHub** (if not already done):

   ```bash
   git push origin main
   ```

2. **Import on Vercel:**

   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository (`Parth-Bisht-227/Terminal-Portfolio`)
   - Vercel will auto-detect Vite — no framework override needed

3. **Configure environment variables** (optional):

   | Variable         | Value                         |
   |-----------------|-------------------------------|
   | `GEMINI_API_KEY` | Your Gemini API key (if any)  |

   Add this in your Vercel project dashboard under **Settings → Environment Variables**.

4. **Deploy settings** (auto-detected, but verify):

   | Setting          | Value            |
   |-----------------|------------------|
   | Framework Preset | Vite             |
   | Build Command    | `npm run build`  |
   | Output Directory | `dist`           |
   | Install Command  | `npm install`    |

5. **Click Deploy** — Vercel will build and publish your site in under a minute.

   Your site will be live at `https://terminal-portfolio.vercel.app` (custom domain configurable in Vercel dashboard).

### Post-Deploy

- Push to `main` → Vercel auto-redeploys
- Add a custom domain under **Settings → Domains**
- Monitor deployments under the **Deployments** tab

## Links

- [GitHub](https://github.com/Parth-Bisht-227)
- [LinkedIn](https://www.linkedin.com/in/parth-bisht-088480282/)
- [Portfolio](https://terminal-portfolio-three-weld.vercel.app/)
- [Resume](public/Parth_Bisht_Resume.pdf)

---

<div align="center">
  <small>Built with React, TypeScript, and a lot of neon.</small>
</div>
