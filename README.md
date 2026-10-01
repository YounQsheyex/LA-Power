# LA Power — Website

SvelteKit (Svelte 5 runes) · TypeScript · Tailwind CSS v4

## Run
```bash
npm install      # or: bun install
npm run dev      # http://localhost:5173
npm run build && npm run preview
```

## Edit content
- **Business details** (email, WhatsApp, location, hours): `src/lib/config.ts`
- **Services, projects, values, stats, process steps**: `src/lib/data.ts`
- **Project photos**: drop images into `static/projects/` and set `image: '/projects/your-photo.jpg'` on a project.
- **Colours / fonts / animations**: `src/app.css` (`@theme` block)

## Structure
- `src/lib/components/` — Navbar, Hero, Marquee, About (vision/mission/values), Services, Projects (filter + modal), Process, CTA, Contact (form → WhatsApp / email), Footer, WhatsAppFloat
- `src/lib/actions/reveal.ts` — scroll-reveal and 3D tilt actions

All motion respects `prefers-reduced-motion`.

## Deploy
Uses `@sveltejs/adapter-auto` — push to GitHub and import into Vercel or Netlify.
