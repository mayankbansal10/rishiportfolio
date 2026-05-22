# Rishi Jain — Professional Portfolio

A modern, professional portfolio website for **Rishi Jain, CISSP** — Senior Information Security Analyst at Druva.

## Features

- Hero with credentials, stats, and clear CTAs
- About, expertise pillars, and full career timeline
- Certifications, education, awards, and publications
- Responsive design with smooth scroll navigation
- Dark navy theme with teal and gold accents

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for production

```bash
npm run build
npm run preview
```

Deploy the `dist` folder to Vercel, Netlify, GitHub Pages, or any static host.

## Customize

Edit profile content in `src/data/profile.ts`.

## Google Analytics

GA4 is configured in `index.html` with measurement ID **G-661KNYB1K3**. Page views are tracked automatically after deploy.

Use `trackEvent()` from `src/lib/analytics.ts` for custom events if needed.
