# Vidhyalakshmi B — Portfolio

Personal portfolio site built with React, TypeScript, Tailwind CSS, and Framer Motion. Features a dark, animated, scroll-driven design: a magnetic hero portrait, a scrolling tech-stack marquee, a character-reveal about section, and sticky-stacking project cards.

## Tech stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion (animations, scroll effects)
- Lucide React (icons)

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Build for production

```bash
npm run build
```

Output goes to `dist/`.

## Deploy to Render (free static site)

### Option A — One-click via render.yaml (Blueprint)

1. Push this project to a GitHub repository.
2. In the Render dashboard, click **New +** → **Blueprint**.
3. Connect your GitHub repo. Render will detect `render.yaml` automatically and configure the static site for you.
4. Click **Apply** — Render builds and deploys automatically.

### Option B — Manual static site setup

1. Push this project to a GitHub repository.
2. In the Render dashboard, click **New +** → **Static Site**.
3. Connect your GitHub repo and select this repository.
4. Set:
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
5. Click **Create Static Site**. Render gives you a free `*.onrender.com` URL, and redeploys automatically on every push to your main branch.

### Notes

- This is a static frontend with no backend/server — Render's free **Static Site** tier (not a paid "Web Service") is the right fit and costs nothing.
- The `render.yaml` route rewrite (`/* -> /index.html`) ensures client-side navigation/anchors work correctly on refresh.
- Google Fonts (Kanit) are loaded via `<link>` tags in `index.html`, so no extra font setup is needed on deploy.

## Project structure

```
src/
  components/   Reusable UI: FadeIn, Magnet, ContactButton, LiveProjectButton, AnimatedText
  sections/     Page sections: Hero, Marquee, About, Services(Skills), Experience, Projects, Education, Contact
  data/         content.ts -- all resume-derived content in one place, easy to update
```

To update any content (projects, skills, certifications, contact info), edit `src/data/content.ts` -- no need to touch component code.
