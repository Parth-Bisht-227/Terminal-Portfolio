<div align="center">
  <h1>🧠 Neural Command Center</h1>
  <p><strong>A cyber-minimalist terminal portfolio for Parth Bisht</strong></p>
  <p>React + TypeScript • Framer Motion • Tailwind CSS</p>
</div>

<br/>

An interactive, terminal-themed portfolio website that simulates a neural command interface. Explore featured work, experience, skills, and profile data through a functional terminal emulator with a neon dark theme and animated matrix background.

## Features

- **Interactive Terminal** - Type commands like `help`, `projects`, `experience`, `skills`, or `contact`
- **Matrix Rain Background** - Animated canvas atmosphere behind the terminal
- **Profile HUD** - Current role and interview-ready skill categories
- **Dock Navigation** - Quick-launch controls for key commands
- **Boot Sequence** - Simulated system initialization on load
- **Responsive Layout** - Mobile stacking, wrapped tags, and scrollable terminal output

## Terminal Commands

| Command       | Description                                 |
|---------------|---------------------------------------------|
| `help`        | List all available commands                 |
| `about`       | Display bio and headline                    |
| `experience`  | Show professional experience                |
| `projects`    | Show featured projects                      |
| `vibe-coded`  | List rapid prototypes and side experiments  |
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
| Tailwind CSS    | Utility-first styling          |
| Lucide React    | Icon library                   |

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

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
│   ├── Dock.tsx                      # Bottom quick-launch dock
│   ├── MatrixRain.tsx                # Animated matrix background
│   ├── MissionHUD.tsx                # Skills & current-role profile
│   ├── StatusBar.tsx                 # Top status bar
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

3. **Deploy settings** (auto-detected, but verify):

   | Setting          | Value            |
   |-----------------|------------------|
   | Framework Preset | Vite             |
   | Build Command    | `npm run build`  |
   | Output Directory | `dist`           |
   | Install Command  | `npm install`    |

4. **Click Deploy** — Vercel will build and publish your site in under a minute.

   The current deployment is `https://terminal-portfolio-three-weld.vercel.app/` (custom domain configurable in Vercel dashboard).

### Post-Deploy

- Push to `main` → Vercel auto-redeploys
- Add a custom domain under **Settings → Domains**
- Monitor deployments under the **Deployments** tab

## Links

- [GitHub](https://github.com/Parth-Bisht-227)
- [LinkedIn](https://www.linkedin.com/in/parth-bisht-088480282/)
- [Portfolio](https://terminal-portfolio-three-weld.vercel.app/)
- [Resume](https://drive.google.com/file/d/17YM1ycBmGg8Goroy0YpHAPwGkka_AXt6/view?usp=sharing)

---

<div align="center">
  <small>Built with React, TypeScript, and a lot of neon.</small>
</div>
