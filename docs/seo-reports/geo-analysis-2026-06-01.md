# GEO / AI-Search Analysis — cowartind.com

_Generated 2026-06-01 via `/seo geo` (claude-seo) + live-site inspection. Per Google's own position, GEO is "still SEO" — these are SEO fundamentals applied to AI-search surfaces (AI Overviews, ChatGPT, Perplexity, Copilot)._

## GEO Readiness Score: ~67/100

| Dimension (weight) | Score | Notes |
|---|---:|---|
| Citability (25%) | ~70% | Quotable specifics (40,000 PSI, since 1974, 8 states), FAQ blocks; room for lead-with-definition openers |
| Structural readability (20%) | **~85%** | Clean H1→H2→H3, question-based headings, FAQ Q&A, comparison sections |
| Technical accessibility (20%) | **~90%** | Full SSR, all AI crawlers allowed, rich schema |
| Authority & brand signals (20%) | **~35%** | No Wikipedia/Reddit/YouTube presence, no bylines/dates |
| Multi-modal (15%) | ~50% | Photos yes; no video/infographics/tools |

**Same shape as the local audit:** the on-page + technical foundation is excellent; the deficit is **off-site brand entity presence**. And the single most important AI-visibility fact this year: **brand mentions correlate ~3× more strongly with AI citations than backlinks** (Ahrefs, 75k brands). Cowart's gap is mentions, not markup.

---

## Platform breakdown
| Platform | Cowart readiness | Why |
|---|---|---|
| **Google AI Overviews** | Good (gated on rankings) | 92% of AIO citations come from top-10 results — technically ready, but service pages are still indexing/ranking low (see consolidation work) |
| **ChatGPT** | Weak | Sources Wikipedia (47.9%) + Reddit (11.3%) + **Bing index** — Cowart has none of these (Bing Places is claimable — see action kit) |
| **Perplexity** | Weak | Sources Reddit (46.7%) + Wikipedia — no presence |
| **Bing Copilot** | Weak→fixable | Pulls from Bing index — claiming Bing Places directly helps |

---

## AI Crawler Access ✅
`robots.txt` is `User-Agent: * / Allow: /` (only `/api/` disallowed). **Every AI crawler is allowed** — GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot, CCBot. Many sites accidentally block these; Cowart doesn't. Nothing to fix. (If you ever want to block *training* crawlers while keeping *search* crawlers, block `CCBot`/`anthropic-ai` and keep `GPTBot`/`OAI-SearchBot`/`ClaudeBot`/`PerplexityBot` — but allowing all maximizes visibility.)

## SSR ✅
Service pages render fully server-side (145 KB of real HTML: H1, 7×H2, 14×H3, FAQ Q&A, stats all present in the raw source). AI crawlers don't run JavaScript — Cowart's content is fully readable to them. This is a major strength most sites fail.

## llms.txt — absent, but low priority
No `/llms.txt`. Per the skill's own evidence review (Mueller/Illyes + a 300k-domain SE Ranking study + OtterlyAI server logs), **`/llms.txt` is not currently a citation lever** for any major AI search system — no crawler is observed fetching it. I can generate one in 5 minutes if you want completeness, but it earns ~nothing today. **Not recommended as a priority.**

## Brand mention analysis — the real gap
| Platform | Status |
|---|---|
| Wikipedia / Wikidata | None (hard for a private B2B — not worth forcing) |
| Reddit | None |
| YouTube | None |
| LinkedIn | Unconfirmed / thin |
| Bing index | Not present (claim Bing Places) |

This is the same root cause as the local "authority" gap. The fix is earned presence, not on-page tweaks.

---

## Top 5 highest-impact changes
1. **Build brand entity presence** (the ~3× lever). Realistic for B2B industrial: a **LinkedIn company page**, a **YouTube** channel with short equipment/jobsite clips (YouTube mentions are the single strongest AI-citation correlate, ~0.737), and getting named in **industry "best of" roundups**. Overlaps directly with the local-authority playbook.
2. **Claim Bing Places** — directly feeds ChatGPT + Copilot. Highest-ROI single action for AI search (also in the local kit).
3. **Get the service pages ranking** — 92% of AI Overview citations come from top-10 results, so the indexing/consolidation work (legacy redirects, internal links) is *also* GEO work. No new effort — it's already in flight.
4. **Lead each service page with a 40–60 word direct-answer/definition block** ("Industrial hydroblasting is…") so AI can extract a clean, self-contained passage. Content tuning across the 19 pages.
5. **Add comparison tables to more service pages** (the hydroblasting "vs sandblasting/dry-ice/chemical" section is exactly right — replicate the pattern). Tables get cited at high rates.

## Schema for AI discoverability
Already strong (LocalBusiness + Service + FAQPage + BreadcrumbList, all SSR). Once you have social/listing profiles, add `sameAs[]` (also a top AI-citation signal) — same deferred item as the local audit.

## What I can do in code
- Add **"Last updated" dates** to service pages (freshness signal) — modest change.
- Lead-with-definition rewrite of service-page intros (citability) — content pass across 19 pages.
- Generate `/llms.txt` — trivial, but low value; only if you want completeness.

## Limitations
- Real AI-citation visibility (what ChatGPT/Perplexity actually return for your queries) needs the DataForSEO extension (paid). This audit infers readiness from on-page + crawler + entity signals.
