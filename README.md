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

1. Create a GA4 property at [analytics.google.com](https://analytics.google.com).
2. Copy your **Measurement ID** (format `G-XXXXXXXXXX`).
3. Create a `.env` file in the project root:

```bash
cp .env.example .env
```

4. Set your ID:

```
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

5. Rebuild and deploy. Analytics only loads when this variable is set.

For production on Vercel/Netlify, add `VITE_GA_MEASUREMENT_ID` in the host’s environment variables dashboard.
