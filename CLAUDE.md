# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at http://localhost:3000
npm run build    # Production build
npm run start    # Start production server (run build first)
npm run lint     # Run ESLint
```

## Architecture

Single-page portfolio for **Reslyn Dequito** built with **Next.js 16 App Router**, **TypeScript**, and **Tailwind CSS v4**.

The entire site lives in one scrollable page (`app/page.tsx`) that composes nine section components:

```
Navbar → Hero → About → Experience → Skills → Education → RemoteWork → Contact → Footer
```

All components live in `components/`. `Navbar` is the only `"use client"` component (needs scroll listener and mobile menu toggle state). Everything else is a Server Component.

**Tailwind v4** is configured via `postcss.config.mjs` — there is no `tailwind.config.js`. Custom styles go in `app/globals.css` using `@theme inline { }` blocks. The `@import "tailwindcss"` directive at the top of `globals.css` is the v4 entry point.

## Color palette

| Usage | Tailwind class |
|---|---|
| Dark sections (Hero, Skills, Contact) | `bg-slate-900` |
| Footer | `bg-slate-950` |
| Light sections | `bg-white` / `bg-slate-50` |
| Accent / CTA | `bg-amber-500`, `text-amber-400/500/600` |
| Body text | `text-slate-600`, `text-slate-900` |
| Muted text | `text-slate-400`, `text-slate-500` |

## Content data

All copy (job titles, bullet points, dates, contact info) is co-located in each component file as plain TypeScript arrays — no external CMS or data files. To update content, edit the relevant component directly.

Subject is **Reslyn Dequito** — Licensed Professional Teacher / ESL Educator based in Cebu City, Philippines.  
Contact: aera191421@gmail.com · +63 966 483 3781.

## Deployment

GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`). Pushes to `main` trigger automatic deployment with `--base-href /portfolio/`.