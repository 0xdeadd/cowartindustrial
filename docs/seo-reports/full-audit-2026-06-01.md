# Full SEO Audit, cowartind.com

_Generated 2026-06-01 via `/seo audit` (claude-seo). Site crawled: 27 sitemap URLs. Pulls in the same-day `/seo local` (56/100) and `/seo geo` (67/100) deep-dives, see `local-seo-audit-2026-06-01.md` and `geo-analysis-2026-06-01.md`._

## SEO Health Score: **~83 / 100, Strong**

| Category | Weight | Score | One-line |
|---|---:|---:|---|
| Technical SEO | 22% | ~85 | Clean robots/sitemap/canonical/HSTS; indexation still maturing |
| Content Quality | 23% | ~85 | 19 deep service pages, strong E-E-A-T (1974, certs, own plant) |
| On-Page SEO | 20% | ~88 | Titles/desc all within limits, clean headings, hub-and-spoke links |
| Schema / Structured Data | 10% | ~85 | LocalBusiness+Service+FAQ+Breadcrumb, valid; minor gaps |
| Performance (CWV) | 10% | ~80 _(est.)_ | **Not measured this run**, see caveat |
| AI Search Readiness | 10% | 67 | Excellent tech foundation; off-site brand presence is the gap |
| Images | 5% | ~85 | Alt-text enforced, Next/Image WebP + responsive + lazy |

**Bottom line:** This is a technically excellent, well-built site, better fundamentals than the SE competitors audited earlier. The score isn't higher for three reasons, all already in motion or off-page: (1) **indexation is still maturing** (legacy-redirect consolidation + new-page discovery in progress), (2) **AI-search/off-site brand presence is thin** (reviews, citations, mentions, see local + geo docs), and (3) **CWV is unverified** this run.

**Business type:** Hybrid (Carrollton HQ + 8-state service area) · **Industry:** Industrial environmental / B2B services.

---

## Executive summary

**Top 5 strengths**
1. Server-side rendered, all content in HTML, fully readable to search + AI crawlers.
2. 19 dedicated service pages at 2,200-2,500 words with FAQ schema (the #1 local-organic factor).
3. Consistent NAP across page HTML, schema, and external listings.
4. Rich, valid structured data (LocalBusiness + image[], Service, FAQPage, BreadcrumbList).
5. Meta titles/descriptions all within limits, build-time-enforced (postbuild SEO linter).

**Top 5 issues** (priority order)
1. **[High] Indexation maturing**, 13/27 indexed; 5 legacy URLs awaiting redirect consolidation (re-indexing requested 2026-06-01), several new pages "Discovered - not indexed."
2. **[High] Reviews near zero**, biggest local-pack drag (~20% of weight). Manual (action kit).
3. **[High] Off-site brand presence**, no Bing/Yelp/Facebook/Wikipedia/Reddit; mentions ~3× the AI-citation lever of backlinks. Manual (action kit + to-do).
4. **[Medium] CWV unverified**, confirm via Vercel Speed Insights (installed) or PageSpeed with an API key.
5. **[Low] Security headers**, only HSTS present; add `X-Content-Type-Options`, `Referrer-Policy`, frame protections.

---

## Technical SEO, ~85
- ✅ `robots.txt`: `Allow: /`, disallow `/api/`, sitemap referenced; **all AI crawlers allowed**.
- ✅ `sitemap.xml`: 27 URLs, auto-generated, submitted to GSC.
- ✅ HTTPS everywhere; HTTP→HTTPS + www→apex + trailing-slash all 308; **HSTS** max-age 2y.
- ✅ Self-referential canonical on every page; Vercel preview noindexed.
- ⚠️ **Indexation:** 13/27 indexed. 5 legacy WP URLs still self-canonical pending recrawl (consolidation requested today); remaining service pages "Discovered - currently not indexed" (normal 2-8 wk lag). Tracked via `npm run seo:indexing`.
- 🔵 **Security headers (low priority):** only HSTS set. Add `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, and frame protection (`X-Frame-Options`/CSP `frame-ancestors`). Hardening, minimal SEO impact.

## Content Quality, ~85
- ✅ 19 service pages, ~2,200-2,500 words; no thin/duplicate content.
- ✅ **E-E-A-T strong:** founded 1974, in-house treatment plant, own DOT number, HAZWOPER-40 / OSHA-30 / EPA RCRA / Confined-Space certs, 8-state footprint.
- ✅ FAQ sections + extended content with H2 structure.
- 🔵 Add lead-with-definition openers ("Industrial hydroblasting is…") for AI citability (see geo doc); consider "last updated" dates for freshness.

## On-Page SEO, ~88
- ✅ All 29 pages: title ≤60, description ≤160 (linter-enforced; 4 CTR rewrites shipped today).
- ✅ Clean H1→H2→H3 (e.g. hydro-blasting: 1×H1 / 7×H2 / 14×H3), question-based headings.
- ✅ Hub-and-spoke internal linking; OWS cross-linking added today; every page ≤2 clicks from home.
- 🔵 Few titles carry city intent, consider "Carrollton, GA" in select service titles where it fits ≤60.

## Schema / Structured Data, ~85
- ✅ LocalBusiness (now with `image[]`), Service, FAQPage, BreadcrumbList, OfferCatalog, all valid (linter-checked).
- 🔵 `geo` at 4 dp (flagged for verified-GBP-pin replacement); `sameAs[]` deferred to listing claims; `aggregateRating` pending real reviews.

## Performance (CWV), ~80 (estimate, NOT measured)
- ⚠️ PageSpeed Insights shared quota was exhausted (429) this run; no key configured.
- Architecture is CWV-favorable: Next.js 16 + Turbopack, SSR, Next/Image (WebP + responsive `srcSet` + lazy), minimal flat-navy design (low CLS risk).
- **Action:** read real field data from **Vercel Speed Insights** (already installed) or run PageSpeed with a free API key. Treat the 80 as a placeholder until then.

## AI Search Readiness, 67
- ✅ Full SSR, all AI crawlers allowed, rich schema, FAQ blocks, quotable stats.
- ⚠️ Off-site brand entity presence is the gap (no Wikipedia/Reddit/YouTube; no Bing). See `geo-analysis-2026-06-01.md`. `llms.txt` absent but not a citation lever (low priority).

## Images, ~85
- ✅ Alt-text enforced as an **ESLint error** (`jsx-a11y/alt-text`); Next/Image optimization live (130 `_next/image`, responsive `srcSet`, lazy-load).
- 🔵 Source JPEGs are large (fleet photos 487-563 KB) but the optimizer serves resized WebP, so render-path delivery is fine. Schema `image[]` references raw files (acceptable, not render-blocking).

---

## Prioritized Action Plan

**Critical**, none. No indexing blockers or penalties.

**High (this week)**
1. Finish/optimize GBP + claim Bing Places + start review collection, see `cowart-seo-todo.md` (these move local + AI-search together).
2. Keep the legacy-redirect consolidation moving (re-indexing requested; re-check `npm run seo:indexing` in ~1-2 wks).

**Medium (this month)**
3. Verify real CWV (Vercel Speed Insights / PageSpeed key); fix anything failing p75.
4. Build off-site brand presence: LinkedIn company page, YouTube clips, Chamber + BBB (authority + AI-citation mentions).
5. Add lead-with-definition intros to service pages for AI citability.

**Low (backlog)**
6. Add the missing security headers.
7. Add "last updated" dates to service pages.
8. Add city intent to select service titles where it fits.
9. `sameAs[]` + `geo` precision once GBP/listings exist (send me the URLs/coords).

---

## Limitations
- **CWV not measured** (PSI quota); use Vercel Speed Insights.
- Real SERP positions, backlink profile, and live AI-citation visibility need paid extensions (DataForSEO / Ahrefs / Moz), not configured.
- GBP internals (category, photos, insights) need dashboard access.
- A polished **PDF version** can be generated via the plugin's `google_report.py`, but that needs the Python deps installed (system Python is 3.14, may need finagling). Say the word and I'll set it up.
