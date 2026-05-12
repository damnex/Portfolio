# VICTUS Portfolio

A futuristic black-themed personal portfolio website for Dheenadhayalan M — UI/UX Designer & Developer. Built as a cinematic AI operating system interface with neon glows, glassmorphism, HUD animations, and a full boot sequence.

## Run & Operate

- `pnpm --filter @workspace/victus-portfolio run dev` — run the portfolio (uses PORT env var)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS v4, framer-motion
- Fonts: Orbitron (headings), Inter (body)
- Icons: lucide-react
- API: Express 5 (not used by portfolio — static frontend only)

## Where things live

- `artifacts/victus-portfolio/src/pages/index.tsx` — main portfolio page, assembles all sections
- `artifacts/victus-portfolio/src/components/` — all section components
- `artifacts/victus-portfolio/src/index.css` — full design system (colors, animations, utility classes)
- `lib/api-spec/openapi.yaml` — API contract (not used for portfolio)

## Architecture decisions

- Single-page portfolio with smooth-scroll navigation — no routing needed
- Boot screen is a self-advancing animated overlay (auto-dismisses after ~3s)
- All animations via framer-motion with `useInView` for scroll-triggered reveals
- CSS custom properties for the full color system — no hardcoded hex in component styles
- Grid background via CSS `background-image` gradients, not an external library

## Product

A fully responsive futuristic portfolio with:
- Animated boot/loading sequence
- Sticky glassmorphism navbar with scroll-active link highlighting
- Hero section with HUD profile frame, typing animation, floating UI chips
- About section with bio and animated stat cards
- Skills section with categorized animated progress bars
- Experience timeline with scroll-reveal cards
- Projects grid with hover overlays and expandable modals
- Achievements with animated counter cards
- Contact section with glassmorphism form
- Futuristic footer with social links

## User preferences

- Dark theme only (#050505 background)
- Neon accents: Cyan #00F0FF, Purple #8B5CF6, Orange #FF6B00
- Orbitron font for headings, Inter for body
- No emojis in the UI

## Gotchas

- Google Font `@import url(...)` MUST be the first line of `index.css` — PostCSS fails silently otherwise
- `cursor: none` is set on `body` — the custom cursor replaces the OS cursor
- Boot screen adds ~3.5s delay before the main site appears — this is intentional
- The portfolio is frontend-only — no database or API calls needed
