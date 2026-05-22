# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

> **Heed the AGENTS.md note above first.** Next.js 16 has breaking changes from training-data Next versions (file conventions, async `params`, route handlers, font loading). When in doubt, read `node_modules/next/dist/docs/` before writing.

## Node version

Project runs on Node 22 LTS via the keg-only Homebrew install:

```bash
PATH="/opt/homebrew/opt/node@22/bin:$PATH" <command>
```

Putting it on PATH globally would break the user's other projects (zanyplayworld runs on system Node 23). Always prepend `/opt/homebrew/opt/node@22/bin` for npm/next commands here.

## Commands

```bash
PATH="/opt/homebrew/opt/node@22/bin:$PATH" npm run dev     # Dev (port 3000)
PATH="/opt/homebrew/opt/node@22/bin:$PATH" npm run build   # Production build
PATH="/opt/homebrew/opt/node@22/bin:$PATH" npm run lint    # ESLint
```

`.env` requires `RESEND_API_KEY` and `CONTACT_EMAIL`. No database — the contact form sends a single email via Resend; Resend's delivery log is the audit trail.

## Architecture

**Stack:** Next.js 16 (App Router, Turbopack) · Resend (email) · Vercel Analytics + Speed Insights · IBM Plex font family · Tailwind v4. No database.

**Routes:**
- `app/page.tsx` — homepage
- `app/about`, `app/services` (index), `app/services/[slug]` (17 dynamic), `app/services/waste-management` (static hub), `app/faq`, `app/jobs`, `app/forms`, `app/contact`
- `app/api/contact/route.ts` — POST, sends a notification email to `CONTACT_EMAIL` via Resend. No DB write; submissions live in Resend's delivery log + Vercel logs as backup.
- `app/sitemap.ts`, `app/robots.ts` — Next 16 file conventions
- `app/opengraph-image.tsx`, `app/services/[slug]/opengraph-image.tsx` — dynamic OG images via `next/og`
- `proxy.ts` — Next 16 proxy (formerly middleware) that sets `X-Robots-Tag: noindex` on any host other than `cowartind.com` / `www.cowartind.com`

**Service catalog (`lib/services.ts`)** is the single source of truth for all 17 services, grouped under 4 categories (waste-management, vacuum-containment, industrial-cleaning, on-site-treatment). Consumed by: homepage, services index, dynamic detail page, header mega-panel, footer, sitemap, OG images, JSON-LD. Adding a service = add an entry there + nothing else.

**JSON-LD (`lib/schema.ts`):** `localBusinessSchema()`, `serviceSchema(service)`, `breadcrumbSchema(items)`, `faqSchema(items)`. Rendered as inline `<script type="application/ld+json">` in the relevant pages.

## Design system — industrial-editorial

The site has an opinionated, cohesive look. Don't fight it.

**Palette (defined in `app/globals.css` `@theme inline`):**
- `#0E1A2B` navy — dominant ground, used flat (never gradient blur)
- `#B8252F` brick red — **accent only**: thin rules, single accent words, single CTA buttons. Never as fill flood or glow effect.
- `#F2EEE5` paper-cream — alternate background (warmer than white)
- `#14161A` ink, `#3A3D44` ink-soft — body text
- `#C9C2B0` rule, `#1F2D40` navy-line — hairline borders

**Typography:** IBM Plex Serif (display headlines, italic mid-lines), Plex Sans (body), Plex Mono (technical labels, section codes). Loaded as Next fonts in `app/layout.tsx` via CSS variables.

**Square corners.** All radius tokens are 0px in `globals.css`. Don't use `rounded-*` utilities — they break the aesthetic. Use hairline rules (`border-[#C9C2B0]` on paper, `border-[#1F2D40]` on navy) instead of drop shadows.

**Reusable utility classes (in `globals.css @layer base`):**
- `.navy-grain` — flat navy with subtle noise overlay
- `.paper-texture` — warm cream with soft radial tints + grain
- `.blueprint-grid` — faint 48px grid (use as `absolute inset-0` overlay)
- `.label-mono` — Plex Mono small caps with letter-spacing for technical labels
- `.display-serif` — Plex Serif with `-0.02em` tracking and ss01/ss02 features

**Page hero pattern (use this for every top-level page):**
```tsx
<section className="navy-grain text-[#F2EEE5] relative overflow-hidden">
  <div className="blueprint-grid absolute inset-0" />
  <div className="absolute top-6 left-6 w-6 h-6 border-l border-t border-[#B8252F]/60" />
  <div className="absolute top-6 right-6 w-6 h-6 border-r border-t border-[#B8252F]/60" />
  <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pt-24 pb-20">
    <div className="label-mono text-[#B8252F]">— File 0X / [Page]</div>
    <h1 className="display-serif text-[clamp(2.5rem,6vw,5rem)] leading-[0.95]">
      Bold first line
      <br />
      <span className="italic font-normal text-[#C9C2B0]">cream italic mid-line</span>
      <br />
      final line.
    </h1>
  </div>
</section>
```

**Mono section-code conventions** (used as visual TOC across the site):
- `FILE 01 / OVERVIEW` — homepage hero
- `FILE 02 / ABOUT`, `FILE 03 / SERVICES`, `FILE 04 / FAQ`, `FILE 05 / CAREERS`, `FILE 06 / CONTACT`
- `S—01..S—17` — service line codes (grouped by category)
- `C—01..C—04` — category codes (waste-management, vacuum-containment, industrial-cleaning, on-site-treatment)
- `Q—01..NN` — FAQ question numbers
- `P—01..NN` — job position codes
- `INDEX 01..04` — footer columns

**Container:** `max-w-[1400px] mx-auto px-6 lg:px-10` for full-width sections.

**Photo slots are designed in.** When Steve sends real jobsite photos:
- Homepage hero right column (`app/page.tsx`) — currently a typographic 50/YEARS stamp; swap for hero photo with navy/red overlay
- Service detail hero stamp (`app/services/[slug]/page.tsx`) — set `photo` field on the service entry in `lib/services.ts`
- Service row icon squares (homepage + services index) — small bordered squares ready for thumbnails

## Launched (as of 2026-05-22)

- **Live at `cowartind.com`.** DNS is pointed at Vercel — apex A `76.76.21.21`, `www` CNAME `cname.vercel-dns.com`. The GoDaddy flip in `docs/dns-launch-runbook.md` is done; that runbook is now historical.
- **Resend is verified and sending.** The contact form delivers from `cowartind.com`.
- **SEO is clean (100/100).** See `docs/seo-audit-notes.md` for what's checked and how to re-audit.

## Deployment

Vercel auto-deploy is **disabled** for this user's projects. Deploy with `vercel --prod` from CLI; push to git separately. (Both branches of the user's main project setup follow this pattern.)
