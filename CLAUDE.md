# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

> **Heed the AGENTS.md note above first.** Next.js 16 has breaking changes from training-data Next versions (file conventions, async `params`, route handlers, font loading). When in doubt, read `node_modules/next/dist/docs/` before writing.

## Node version

Prisma 7.5 refuses Node 23 (the system default on this Mac). Use Node 22 LTS via the keg-only Homebrew install:

```bash
PATH="/opt/homebrew/opt/node@22/bin:$PATH" <command>
```

Putting it on PATH globally would break the user's other projects (zanyplayworld runs on system Node 23). Always prepend `/opt/homebrew/opt/node@22/bin` for npm/next/prisma commands here.

## Commands

```bash
# Dev (port 3000, falls back to 3002 if busy)
PATH="/opt/homebrew/opt/node@22/bin:$PATH" npm run dev

# Build (runs prisma generate first)
PATH="/opt/homebrew/opt/node@22/bin:$PATH" npm run build

# Lint
PATH="/opt/homebrew/opt/node@22/bin:$PATH" npm run lint

# Prisma
PATH="/opt/homebrew/opt/node@22/bin:$PATH" npm run db:migrate   # create + run migration
PATH="/opt/homebrew/opt/node@22/bin:$PATH" npm run db:push      # sync schema without migration
PATH="/opt/homebrew/opt/node@22/bin:$PATH" npm run db:studio    # GUI
```

`.env` requires `DATABASE_URL` (Supabase Postgres), `RESEND_API_KEY`, `CONTACT_EMAIL`. The contact form's Prisma write works without Resend; only the email notification is gated on the key.

## Architecture

**Stack:** Next.js 16 (App Router, Turbopack) · Prisma 7 + Supabase Postgres · Resend (email) · IBM Plex font family · Tailwind v4.

**Routes:**
- `app/page.tsx` — homepage
- `app/about`, `app/services` (index), `app/services/[slug]` (5 dynamic), `app/faq`, `app/jobs`, `app/contact`
- `app/api/contact/route.ts` — POST, saves `ContactSubmission` to DB. **Resend is stubbed** (`// TODO: Add Resend email notification here`). No emails currently send.
- No `app/api/jobs/` — jobs page CTAs route to `/contact` for now.

**Data model (`prisma/schema.prisma`):** two tables, `ContactSubmission` and `JobApplication`. Both are simple form records with `createdAt`. No auth, no admin UI.

**Service detail content** lives inline in `app/services/[slug]/page.tsx` as `serviceData: Record<slug, ServiceEntry>`. Adding a service = add an entry there (it auto-generates static params + metadata). Don't move this to the DB unless asked — the content is stable marketing copy, not user data.

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
  {/* corner brackets */}
  <div className="absolute top-6 left-6 w-6 h-6 border-l border-t border-[#B8252F]/60" />
  <div className="absolute top-6 right-6 w-6 h-6 border-r border-t border-[#B8252F]/60" />
  <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pt-24 pb-20">
    <div className="label-mono text-[#B8252F]">— File 0X / [Page]</div>
    {/* italic-mid-line display headline */}
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
- `S—01..05` — service line codes
- `Q—01..NN` — FAQ question numbers
- `P—01..NN` — job position codes
- `INDEX 01..04` — footer columns

**Container:** `max-w-[1400px] mx-auto px-6 lg:px-10` for full-width sections.

**Photo slots are designed in.** When Steve sends real jobsite photos:
- Homepage hero right column (`app/page.tsx`) — currently a typographic 50/YEARS stamp; swap for hero photo with navy/red overlay
- Service detail hero stamp (`app/services/[slug]/page.tsx`) — same pattern, per-service photo
- Service row icon squares (homepage + services index) — small bordered squares ready for thumbnails

## Known gaps / stubs

- **Resend notification** in `app/api/contact/route.ts` is a `TODO`. Contact form submissions land in DB but Brenda is not emailed. Wiring requires `RESEND_API_KEY` + a `resend.emails.send(...)` call.
- **No `/api/jobs`** route. Jobs page routes applications to `/contact`.
- **No SEO foundations**: no `sitemap.xml`, no `robots.txt`, no LocalBusiness JSON-LD, no OG image. The `keywords` meta tag in `layout.tsx` is dead weight (Google ignored it since 2009) but kept for backwards-compat.
- **Keyword content gaps** vs. owner's SEO target list: dedicated pages exist for industrial cleaning, hydro blasting, vacuum trucks. Missing or partial: *liquid waste disposal*, *hydro excavation*, *roll off* (bundled into vacuum-trucks), *environmental services*, *waste transport*.
- **`public/`** has only `logo.jpg` and default Next placeholder SVGs — no real jobsite photos yet.

## Deployment

Vercel auto-deploy is **disabled** for this user's projects. Deploy with `vercel --prod` from CLI; push to git separately. (Both branches of the user's main project setup follow this pattern.)
