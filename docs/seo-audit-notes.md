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
