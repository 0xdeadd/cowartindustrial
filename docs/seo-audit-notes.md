# SEO audit notes

Plain-English record of the on-page SEO state and how it's checked.

## Current state (2026-05-22)

The site scored **100/100, 0 issues** on a full technical crawl (26 pages). It
was at 91 before the cleanup below.

The audit is run with the **Color Pop agency auditor** (a separate tool at
`colorpopsignsnewnan.com/admin` — Cowart is a client in it). It crawls the live
`cowartind.com`, checks each page, and stores a scored run with the issue list.
To re-audit: open that dashboard → Cowart Industrial → **Run audit**. (Client id
`cmpfnjvn20000s9cc0a5zhxwm`, if you need it.)

## What it checks (per page + site-wide)

- **Title** present, ≤60 chars
- **Meta description** present, ≤160 chars
- Exactly one **`<h1>`**
- **Canonical** tag present + same-host
- **`meta robots noindex`** (flags unintended ones)
- **JSON-LD** present + valid
- **`og:title` / `og:image`** present
- Site: homepage reachable, http→https redirect, **non-canonical host →
  canonical**, robots.txt + `Sitemap:` line, sitemap.xml present

## What was fixed 2026-05-22 (commits f564dfc, 1415ded)

All findings were low-priority **INFO**, no critical/warning issues:

- **Long meta descriptions trimmed to ≤160** — homepage (`app/layout.tsx`
  default), `/services` (`app/services/page.tsx`), and the
  `environmental-services`, `vacuum-trucks`, `hydro-blasting`,
  `air-mover-vacuum`, and `dump-trailer-service` entries in `lib/services.ts`.
- **`og:image` added** to `/services/waste-management`. That route is a
  **standalone folder** (`app/services/waste-management/page.tsx`), so it sits
  outside the `[slug]` segment and never inherited
  `app/services/[slug]/opengraph-image.tsx`. It now sets `openGraph.images`
  explicitly (points at the root `/opengraph-image`).
- **Title shortened** — `air-mover-vacuum` was 65 chars with the title-template
  suffix; trimmed to "High-Volume Air Mover Vacuum".

## How to keep it clean

`lib/services.ts` is the source of truth for all service titles + descriptions.
When you add or edit a service:

- **Meta description ≤160 chars.** (The `description` field is used verbatim as
  the meta description and OG description.)
- **Title:** the rendered `<title>` is `service.title` + the template suffix
  `" | Cowart Industrial Services"` (29 chars), so keep `title` ≤ ~31 chars to
  stay under 60.
- For any **standalone route** outside `[slug]` (like `waste-management`), set
  `openGraph.images` yourself — it won't inherit the per-slug OG image.

Note: duplicate-host indexing is already handled — `proxy.ts` sets
`X-Robots-Tag: noindex` on any host other than `cowartind.com` /
`www.cowartind.com`, so the audit shows no canonical/redirect problems.

## 2026-05-26 — WordPress equity audit + content buildout

### WP equity capture (next.config.ts redirects)

Verified via Wayback Machine CDX API what URLs the old site had. All
WordPress-era (2018-2024) bare-slug URLs that Google still has impressions
on are redirected:

- `/hydro-blasting`, `/industrial-cleaning`, `/waste-water`,
  `/on-site-filtration`, `/airmover`, `/site-map`, `/wp-content/uploads/2020/03/WASTE_PROFILE_MPS-pdf.pdf`

Added `www → apex` 308 redirect (`has: [{ type: "host", value: "www.cowartind.com" }]`)
to consolidate duplicate host serving.

**Not redirected (Vercel WAF blocks):** pre-WP 2012-era `.html` URLs
(`/Hydro_Blasting.html`, `/Civil_Services.html`, etc.), old Yoast sitemap
paths (`/sitemap_index.xml`, `/page-sitemap.xml`), and `/uploads/*.xls`
doc files all trigger Vercel's Attack Challenge Mode
(`x-vercel-mitigated: challenge` returns 403 before redirects evaluate).
Realistic SEO value of those 12+ year old URLs is low; left out of config
to keep it accurate.

### Content buildout (Tier 1 + Tier 2 service pages)

13 service pages rewritten with full SEO template:
- ~2,200-2,500 words per page (was ~300)
- New optional fields on `Service` type: `extendedContent`, `industries`,
  `serviceAreas`, `faqs`
- H2 sections rendered by `app/services/[slug]/page.tsx` when fields present
- FAQ JSON-LD emitted via `faqSchema()` when `faqs` present

Pages updated: hydro-blasting, industrial-cleaning, waste-water-management,
vacuum-trucks, hydro-excavating (Tier 1); liquid-vacuum-service,
air-mover-vacuum, vacuum-box-service, frac-tank-rental, chemical-cleaning,
line-jetting-pipe-cleaning, line-flushing-decontamination, on-site-filtration
(Tier 2).

Tier 3 still on the old short structure: environmental-services,
waste-disposal, waste-transport, roll-off-containers, dump-trailer-service.

### Other 2026-05-26 fixes

- **Favicon** — replaced default Next.js triangle with Cowart "SINCE 1974"
  badge cropped from `public/logo.jpg`. Generated `app/favicon.ico`
  (multi-size 16/32/48/64), `app/icon.png` (512), `app/apple-icon.png` (180).
- **GSC sitemap re-read** — sitemap submitted 2026-05-20, last read by
  Google 2026-05-24, 26 URLs discovered. After today's deploys, manual
  Request Indexing nudge submitted for ~7 URLs before hitting daily quota.
