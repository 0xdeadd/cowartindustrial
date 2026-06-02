# Local SEO Analysis, cowartind.com

_Generated 2026-06-01 via `/seo local` (claude-seo plugin) + live-site inspection + citation search._

## Local SEO Score: ~56/100

| Dimension (weight) | Score | Notes |
|---|---:|---|
| GBP Signals (25%) | Partial (~55%) | GBP reinstated 2026-05-28; on-site map embed present; optimization state not remotely verifiable |
| Reviews & Reputation (20%) | **Low (~25%)** | No customer reviews on any platform; no `aggregateRating` |
| Local On-Page SEO (20%) | **Strong (~80%)** | NAP visible, 19 dedicated service pages, click-to-call, lazy map, hub-and-spoke |
| NAP Consistency & Citations (15%) | Partial (~60%) | NAP perfectly consistent; missing Yelp/BBB/Facebook/Apple/Bing |
| Local Schema (10%) | **Strong (~85%)** | Excellent LocalBusiness JSON-LD; minor gaps (geo precision, image, sameAs) |
| Local Link & Authority (10%) | Low (~35%) | No chamber/BBB/press/"best of" signals detected |

**Read:** the *technical and on-page foundation is excellent*, better than most competitors. The deficit is entirely **off-page**: reviews, citation breadth, and local authority. That's normal for a B2B industrial firm that just got its GBP back, and it's exactly where the leverage is now.

---

## Business Type: **Hybrid**
Physical HQ (834 Kingsbridge Rd, Carrollton, GA, the treatment plant) **plus** an 8-state service area. Gets both the brick-and-mortar NAP/map checks and the service-area (SAB) checks.

## Industry Vertical: Industrial environmental / B2B services
No clean match in the standard vertical list; closest behavioral profile is **Home Services** (service area, licensed/insured, 24/7 emergency, free-estimate intent). Treated on the generic `LocalBusiness` path with SAB traits. **Implication:** customer-review volume is inherently low for industrial B2B, the "18-day review cadence" rule is less applicable, but GBP reviews still drive the map pack and AI citations.

---

## NAP Consistency Audit ✅ (clean)
| Source | Name | Address | Phone |
|---|---|---|---|
| Page HTML | Cowart Industrial Services | 834 Kingsbridge Rd, Carrollton, GA 30117 | 770.834.2158 |
| JSON-LD schema | Cowart Industrial Services | 834 Kingsbridge Rd, Carrollton, GA 30117 | +1-770-834-2158 |
| `tel:` link | - | - | 770-834-2158 |
| External (YellowPages, FMCSA, ZoomInfo) | Cowart Industrial Services LLC | 834 Kingsbridge Rd, Carrollton, GA 30117 | (770) 834-2158 |

No discrepancies. Only nit: the `tel:` href omits the `+1` country code (`tel:770-834-2158`), harmless, but `tel:+17708342158` is the canonical form.

---

## GBP Optimization Checklist (verify in the GBP dashboard, can't be read remotely)
- [ ] **Primary category correct**, single most important map-pack factor. Likely "Environmental Service" / "Waste Management Service"; confirm it's the best-fit primary.
- [ ] Add up to **4 secondary categories** (Septic System Service, Water Damage Restoration, Dumpster Rental Service, etc. as applicable).
- [ ] **Photos**, businesses with photos get 45% more direction requests. Use Steve's jobsite photos (the ones queued for the site).
- [ ] **Service area** set to the GA/AL/TN/SC/NC/FL/MS/KY footprint.
- [ ] **Hours** = open 24h (matches the site's 24-hr emergency dispatch, businesses "open at search time" rank higher).
- [ ] GBP website link → point at a **strong-but-not-strongest** page (Sterling Sky diversity finding), e.g. `/services` or `/contact`, not the homepage.
- [ ] Recreate the old GBP **Q&A** content as an on-site FAQ (GBP Q&A was deprecated Dec 2025).

---

## Review Health Snapshot, weakest area
- **Google reviews:** none surfaced (GBP freshly reinstated).
- **Third-party:** YellowPages "be the first to review," CarrierSource none. Only **employee** reviews exist (Glassdoor ×3, Indeed), not customer signal.
- **Schema `aggregateRating`:** absent (correct, don't fabricate; add once real reviews exist).
- **Action:** stand up a simple review-request flow. Even 10 Google reviews crosses Sterling Sky's "magic threshold," and reviews are now ~20% of local-pack weight + a top AI-citation signal. For B2B, ask your best long-standing industrial clients directly.

---

## Citation Presence
| Tier | Status |
|---|---|
| Google Business Profile | ✅ reinstated 2026-05-28 |
| YellowPages | ✅ listed (no reviews) |
| FMCSA/SAFER (DOT #1289590) | ✅ (industry/authority) |
| ZoomInfo / RocketReach / data aggregators | ✅ auto-generated B2B profiles |
| Trucking directories (CarrierSource, etc.) | ✅ |
| **Yelp** | ❌ not found |
| **BBB** | ❌ not found |
| **Facebook business page** | ❌ not found |
| **Apple Business Connect** | ❌ (usage doubled to 27%, claim it) |
| **Bing Places** | ❌ **(powers ChatGPT/Copilot/Alexa, highest-value missing citation)** |

---

## Local Schema Status, strong, with quick fixes
`LocalBusiness` JSON-LD present with `@id`, name, legalName, description, telephone, email, foundingDate (1974), priceRange ($$), full PostalAddress, geo, `areaServed` (8 states), 24h `openingHoursSpecification`, and `hasOfferCatalog`. This is genuinely above-average.

**Fixable gaps (in `lib/schema.ts`):**
1. **`geo` precision**, currently `33.5801, -85.0766` (4 decimals). Google's docs recommend **≥5 decimal places**. Re-derive from the exact rooftop and extend.
2. **`image`**, no `image` property. Add a logo/building photo URL (also feeds rich results).
3. **`sameAs`**, no `sameAs` array. Add links to GBP, Facebook, LinkedIn, BBB once live, strengthens entity disambiguation and is a top AI-citation signal.

---

## Location/Service Page Quality
- **19 dedicated service pages**, this is the #1 local-organic factor and #2 AI-visibility factor. Major strength.
- **No per-city doorway pages**, correct call. For an 8-state SAB, programmatic `/service-areas/[city]` pages carry real doorway-penalty risk (the skill's "swap test"). Don't build them unless each is genuinely unique.
- Internal linking is hub-and-spoke; every service is ≤2 clicks from home. ✅

---

## Top 10 Prioritized Actions
**Critical**
1. **Verify GBP primary category** + fill out the profile (categories, photos, service area, hours, description). Highest map-pack leverage; do it now that it's reinstated.
2. **Launch a Google review request flow**, target 10+ from established clients. Reviews ≈20% of local weight and a top AI-citation factor.

**High**
3. **Claim Bing Places**, powers ChatGPT/Copilot/Alexa; 45% of local recs now come via AI. Single highest-value missing citation.
4. **Claim Apple Business Connect.**
5. **Create Yelp + Facebook business pages + BBB listing** with identical NAP; pursue **BBB accreditation** (Google uses it for verification).
6. **Join the Carroll County Chamber of Commerce**, local authority + a high-trust backlink.

**Medium**
7. Add `sameAs` (GBP/FB/LinkedIn/BBB) + `image` to LocalBusiness schema; extend `geo` to ≥5 decimals.
8. Recreate deprecated GBP Q&A as on-site FAQ entries (you already have FAQPage infra).
9. Submit to data aggregators (Data Axle, Foursquare) for downstream NAP distribution.

**Low**
10. Canonicalize the `tel:` href to `tel:+17708342158`.

---

## Limitations (what this audit could NOT assess)
- **GBP internals**, category, photos, posts, insights (needs dashboard access).
- **Geo-grid local-pack rank** across the service area (needs DataForSEO/maps tooling).
- **Domain Authority / full backlink profile** (needs Ahrefs/Moz).
- **Whether Yelp/BBB/Apple/Bing listings exist but aren't indexed**, verify by logging into each.
- Run **`/seo geo cowartind.com`** for the full AI-search-visibility analysis (citability scoring, llms.txt, brand mentions).
