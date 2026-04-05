# Slingshot Command Center

> **The official internal operations guide for Taptico's AI agent squad on Discord.**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/TapticoAI/slingshot-command-center&env=GUIDE_PASSWORD&envDescription=Password%20to%20access%20the%20guide&envLink=https://github.com/TapticoAI/slingshot-command-center%23env-setup)

---

## What Is This?

A password-protected Next.js website that serves as the complete user guide for the **Taptico Slingshot Squad** — a fleet of 60+ AI agents operating on Discord 24/7.

**Live URL:** `guide.taptico.com` *(URL TBD — set by Nick)*

---

## What's Inside

| Section | Description |
|---------|-------------|
| Welcome | Mission overview and why this matters |
| Channel Structure | Discord channel map and purposes |
| How to Talk to Agents | 3 ways to interact |
| The Squad (18 agents) | Full roster with roles and specialties |
| Skills Available (17+) | Installed capabilities |
| Prompt Starters | Copy-paste ready prompts by category |
| SOPs Reference | 8 operating standards |
| Comms Structure | Who talks to whom and when |
| Quick Reference Card | Print-ready one-pager |

---

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (base) + inline styles
- **No database** — stateless password gate via `sessionStorage`
- **Deploy-ready** for Vercel (one click)

---

## Quick Start

```bash
# Clone
git clone https://github.com/TapticoAI/slingshot-command-center.git
cd slingshot-command-center

# Install
npm install

# Set password
cp .env.example .env.local
# Edit .env.local → set GUIDE_PASSWORD

# Dev server
npm run dev
# Open http://localhost:3000
```

---

## Env Setup

```bash
# .env.local
GUIDE_PASSWORD=your-password-here
```

> ⚠️ Never commit `.env.local`. It's in `.gitignore`. Use Vercel's environment variables for production.

---

## One-Click Vercel Deploy

1. Click the **Deploy with Vercel** button above
2. Set `GUIDE_PASSWORD` when prompted
3. Done — site is live

Or manually:
```bash
npm i -g vercel
vercel --prod
# Set GUIDE_PASSWORD in Vercel dashboard → Settings → Environment Variables
```

---

## Updating Content (Cron-Ready)

The agent/skill/SOP data lives in JSON files for easy automated updates:

| File | Contents | Update Trigger |
|------|----------|----------------|
| `data/agents.json` | 18 agents with roles/specialties | When squad roster changes |
| `data/skills.json` | 17+ installed skills | When skills are added/updated |
| `data/sops.json` | 8 SOPs | When operating procedures change |

A cron job can regenerate these JSON files and the site auto-updates — no code changes needed.

**Structure for `agents.json`:**
```json
{
  "name": "Bo",
  "emoji": "🤖",
  "title": "Chief Agent Officer",
  "specialty": "Orchestration, strategy, squad management",
  "useWhen": "Starting any task, routing requests"
}
```

---

## Authentication

- Password is stored in `GUIDE_PASSWORD` env var
- Auth checked via `/api/auth` POST endpoint
- On success: `sessionStorage.setItem('slingshot_auth', 'authenticated')`
- No cookies, no sessions, no database
- Stateless — works perfectly on Vercel Edge

---

## Project Structure

```
slingshot-command-center/
├── app/
│   ├── api/auth/route.ts     # Auth endpoint
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Login gate → Guide router
│   └── globals.css           # Base styles
├── components/
│   ├── LoginPage.tsx         # Cinematic login screen
│   └── GuidePage.tsx         # Full guide content
├── data/
│   ├── agents.json           # Agent roster
│   ├── skills.json           # Installed skills
│   └── sops.json             # SOPs
├── .env.example              # Env template
└── vercel.json               # Vercel config
```

---

## Design

**Login screen:** Cinematic dark theme — animated gradient orbs, tactical grid overlay, scan line, glowing input focus, shake-on-fail easter egg, military ops aesthetic.

**Guide content:** Clean Taptico brand — navy/royal blue header, white card layout, data-driven from JSON files.

---

## Questions?

Tag **@Bo** in `#war-room` on Discord.

---

*Built by Ada-3 · Taptico AI Operations · April 2026*
