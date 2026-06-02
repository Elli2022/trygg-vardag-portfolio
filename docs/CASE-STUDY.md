# Case study — Senior companionship marketing site (anonymized)

## Overview

**Trygg Vardag Skåne** is a fictional brand used to publish a real delivery: a marketing website for a Swedish startup offering companionship and escort support for older adults in Skåne. The commissioning founder was entering the same market segment; the original company name, logo, and production domain are withheld in this repository to protect client privacy.

| | |
| --- | --- |
| **Live portfolio demo** | [trygg-vardag-skane.netlify.app](https://trygg-vardag-skane.netlify.app) |
| **Stack** | Next.js 16, React 19, TypeScript, Tailwind CSS 4, Netlify |
| **Timeline** | Iterative delivery from initial landing page through v2.1 UX refresh |

---

## Problem

The client needed a trustworthy digital front door before launch:

- Explain a **non-clinical** service (companionship, not home care) in plain Swedish
- Speak to **both seniors and family members** without jargon
- Encourage **contact** with low friction
- Be discoverable for local intent (“sällskap äldre Malmö / Skåne”)
- Feel warm and calm — not institutional or medical

---

## Approach

### 1. Information architecture

Mapped the journey used by comparable Swedish care-adjacent sites:

1. Who is this for?
2. Where do you operate?
3. How do we get started?
4. What do you offer?
5. What might we do together?
6. Common questions
7. About + contact

Each section answers one decision for the visitor, reducing scroll fatigue on mobile.

### 2. Visual & UX design

- **Typography:** Cormorant Garamond for headings (human, calm), Source Sans 3 for body (readable at small sizes)
- **Color:** Sage green + warm cream + soft pink accents — associated with care without hospital aesthetics
- **Patterns:** Trust strip, numbered steps, FAQ `<details>`, prominent CTA to contact
- **Accessibility:** Skip link, focus rings, semantic headings, reduced-motion respect

### 3. Engineering

- **Next.js App Router** with static generation for fast first paint
- **Centralized content** in `site-data.ts` for maintainability
- **JSON-LD** for `LocalBusiness`, `Service`, and `WebPage` entities
- **Web3Forms** for inquiries — no custom backend, works on Netlify + Next.js
- **Environment-based canonical URL** for correct SEO when demo vs production differ

### 4. Delivery & anonymization

After handoff, the client runs their own hosting and brand. This repo:

- Uses a **generic logomark** and fictional name
- Deploys to **Netlify** under a neutral subdomain
- Documents the work for recruiters without exposing the operating company

---

## Outcomes

| Goal | Result |
| --- | --- |
| Credible service explanation | Clear differentiation from hemtjänst in copy and FAQ |
| Mobile usability | Responsive layout, hamburger nav, touch-friendly form |
| SEO foundation | Metadata, OG images, sitemap, structured data, geo keywords |
| Lead capture | Working contact form → owner inbox with thank-you page |
| Portfolio readiness | English README, screenshots, release notes, deploy badge |

---

## What I would do next (if this were a long-term product)

- CMS or markdown-based content for non-developer edits
- Analytics with privacy-friendly tooling (e.g. Plausible)
- A/B testing on hero CTA copy
- Swedish + English toggle if expanding beyond Skåne
- Automated accessibility audits in CI (axe, Lighthouse thresholds)

---

## Repository

[github.com/Elli2022/trygg-vardag-skane-website](https://github.com/Elli2022/trygg-vardag-skane-website)
