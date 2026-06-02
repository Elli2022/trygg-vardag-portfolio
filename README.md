# Trygg Vardag Skåne — Senior Companionship Marketing Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/57123fe3-1ac5-424b-afb0-46653e26c8b0/deploy-status)](https://app.netlify.com/projects/trygg-vardag-skane/deploys)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Portfolio-lightgrey)](#license)

Production-ready marketing site for a **Swedish senior companionship & escort service** concept in Skåne. Built as an anonymized portfolio case study from a real commission: the original client brand and hosting were replaced with a fictional name and domain to protect business confidentiality.

**Live demo → [trygg-vardag-skane.netlify.app](https://trygg-vardag-skane.netlify.app)**

---

## Project context

| | |
| --- | --- |
| **Type** | Commissioned concept website → anonymized portfolio showcase |
| **Sector** | Elder care adjacent — companionship, escort support, everyday activities (not clinical home care) |
| **Audience** | Older adults at home, family members seeking trusted support, referrals in Skåne |
| **My role** | End-to-end delivery: UX structure, UI implementation, SEO, accessibility, deployment, contact flow |

A founder in the same space approached me to shape a credible web presence while launching her company. This repository reflects the **delivery quality and architecture** of that work, published under the fictional brand **Trygg Vardag Skåne** so the live client identity stays private.

---

## What this project demonstrates

- **Service storytelling** — clear “who it’s for”, offerings, activities, FAQ, and contact without overwhelming copy
- **Senior-friendly UX** — calm palette, readable typography, large tap targets, mobile navigation, skip link
- **Technical SEO** — metadata, Open Graph, `sitemap.xml`, `robots.txt`, JSON-LD (`LocalBusiness`, `Service`, `WebSite`)
- **Production deployment** — Netlify + Next.js runtime, environment-based config, working inquiry form
- **Maintainable codebase** — typed React components, content in `site-data.ts`, reusable section primitives

---

## Highlights

| Area | Implementation |
| --- | --- |
| **Layout** | Sticky header, trust strip, service cards, area pills, FAQ accordions, contact panel |
| **Accessibility** | Skip link, semantic landmarks, focus-visible styles, reduced-motion support |
| **Performance** | Static generation, optimized images, minimal client JS on content sections |
| **Forms** | Web3Forms integration with `/tack` confirmation route |
| **Brand** | Custom SVG logomark, warm sage/cream palette aligned with care-sector tone |

---

## Screenshots

| Home (desktop) | Services |
| --- | --- |
| ![Home page](./docs/screenshots/home-desktop.png) | ![Services section](./docs/screenshots/services-desktop.png) |

| Contact | Mobile home |
| --- | --- |
| ![Contact section](./docs/screenshots/contact-desktop.png) | ![Mobile home](./docs/screenshots/home-mobile.png) |

| Thank-you page |
| --- |
| ![Thank-you page](./docs/screenshots/thank-you-desktop.png) |

---

## Tech stack

- **Next.js 16** — App Router, static pages, metadata API
- **React 19** + **TypeScript**
- **Tailwind CSS 4**
- **Netlify** — `@netlify/plugin-nextjs`, production deploys from `portfolio` branch
- **Web3Forms** — contact submissions to owner inbox

---

## Architecture

```text
src/
  app/              # Routes, global styles, SEO routes (sitemap, robots)
  components/       # Header, footer, forms, FAQ, section UI
  lib/
    site-config.ts  # Brand, URLs, SEO keywords
    site-data.ts    # Nav, copy, activities, FAQ content
brand/              # Logo source assets
docs/screenshots/   # README & case study visuals
scripts/            # Playwright screenshot tooling
```

**Design choices**

1. **Content-driven sections** — marketing copy lives in `site-data.ts` so non-dev updates stay simple.
2. **Client-side form POST** — Web3Forms avoids a custom backend while keeping Netlify + Next.js compatible.
3. **Structured data** — local business + service entities support discovery for “companionship / escort Skåne” intent.
4. **Anonymized deploy** — fictional domain on Netlify; real client uses separate hosting in production.

---

## Local development

```bash
git clone https://github.com/Elli2022/trygg-vardag-skane-website.git
cd trygg-vardag-skane-website
git checkout portfolio
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

| Variable | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical public URL for SEO metadata |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Required for form | Web3Forms access key |

---

## Scripts

```bash
npm run dev          # local development
npm run build        # production build
npm run start        # run production build locally
npm run lint         # ESLint
npm run screenshots  # capture README screenshots (Playwright)
```

---

## Deployment

Configured in `netlify.toml`:

- Build: `npm run build`
- Runtime: `@netlify/plugin-nextjs`
- Production URL: `https://trygg-vardag-skane.netlify.app`

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Elli2022/trygg-vardag-skane-website)

---

## Releases

| Version | Summary |
| --- | --- |
| [**v2.1.0**](https://github.com/Elli2022/trygg-vardag-skane-website/releases/tag/v2.1.0) | UI refresh, FAQ, recruiter-ready docs, form fix |
| [v2.0.0](https://github.com/Elli2022/trygg-vardag-skane-website/releases/tag/v2.0.0) | Anonymized portfolio brand & SEO foundation |

See [CHANGELOG.md](./CHANGELOG.md) for full history.

---

## Branching

| Branch | Purpose |
| --- | --- |
| `portfolio` | Current marketing site (v2.x) |
| `main` | Historical lineage from initial client iteration |

---

## Deeper write-up

For recruiters and hiring managers: **[docs/CASE-STUDY.md](./docs/CASE-STUDY.md)** — problem framing, decisions, and outcomes in one page.

---

## For reviewers / interviews

1. **Product focus:** Content structure and trust signals for a sensitive service (seniors, accessibility, clear CTAs).
2. **SEO:** Structured data, sitemap, canonical URLs, and OG assets—not just meta tags in one file.
3. **Tradeoff:** Static/SSG marketing site vs. CMS—chose speed, cost, and simplicity for a concept brand.
4. **Forms:** Client-side Web3Forms with env-based keys; production checklist documented above.
5. **AI usage:** Layout/copy iteration assisted by AI; architecture, a11y choices, and deploy setup reviewed manually.

## License

Portfolio / concept showcase. Client-identifying assets and production hosting are not included. All rights reserved unless otherwise stated by the repository owner.
