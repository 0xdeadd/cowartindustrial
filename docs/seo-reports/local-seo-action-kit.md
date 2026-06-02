# Cowart Local SEO Action Kit

_Created 2026-06-01. Companion to `local-seo-audit-2026-06-01.md`. This is the do-it checklist for the three weak areas: **reviews, citations, local authority**. Most of these require logging into each platform, they can't be automated, but every field you need is pre-filled below. **Rule #1: paste the NAP block identically everywhere.**_

---

## 0. Canonical NAP, paste this EXACTLY on every platform

Inconsistent name/address/phone is the #1 citation mistake; it splits your signal. Copy-paste, never retype.

```
Business name:  Cowart Industrial Services
Address:        834 Kingsbridge Rd
City/State/Zip: Carrollton, GA 30117
Country:        United States
Phone:          (770) 834-2158
Website:        https://cowartind.com
Email:          info@cowartind.com
Founded:        1974
Hours:          Open 24 hours (24-hour emergency dispatch)
```

**Short description (≤160 chars, for Yelp/Bing/Apple tagline):**
> Family-owned industrial environmental services since 1974, industrial cleaning, hydroblasting, vacuum trucks, and non-hazardous waste management across the Southeast.

**Long description (GBP / Facebook / BBB):**
> Cowart Industrial Services has provided industrial environmental and non-hazardous waste management services across the Southeastern U.S. since 1974. From our Carrollton, GA facility we deliver industrial cleaning, hydroblasting up to 40,000 PSI, vacuum truck services, hydro-excavation, frac tank rental, line jetting, and on-site wastewater treatment and disposal. We run our own DOT-numbered fleet and an in-house treatment plant, with HAZWOPER-40, OSHA-30, and confined-space certified crews and 24-hour emergency dispatch across Georgia, Alabama, Tennessee, South Carolina, North Carolina, Florida, Mississippi, and Kentucky.

**Service area (SAB):** GA, AL, TN, SC, NC, FL, MS, KY

---

## 1. Reviews (weakest area, ~20% of local-pack weight)

B2B industrial review volume is naturally low, so be deliberate. Goal: **10+ Google reviews** (crosses the threshold that starts moving rankings), then a steady trickle.

### Step 1, get your Google review link
1. Open your Google Business Profile → **Read reviews** → **Get more reviews**, OR
2. Google Maps → your listing → right-side **"Get more reviews"** gives a short `g.page/r/...` link.
3. (Manual form) the canonical pattern is `https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID`.

**Send me the Place ID or the `g.page` link and I'll add a "Leave us a review" button to the site** (contact page + post-quote thank-you) to capture review intent automatically.

### Step 2, ask your best clients (template)
> Subject: Quick favor, 60 seconds?
>
> Hi [Name], it's been a pleasure handling [job/service] for [Company]. If we earned it, a short Google review would mean a lot and helps other plants find us. Here's the direct link: [REVIEW LINK]. Thanks, [Your name], Cowart Industrial Services.

- Ask right after a completed job, while goodwill is fresh.
- Target long-standing accounts first.
- **Respond to every review** (88% of consumers favor businesses that reply).
- **Do NOT** pre-screen for happy customers before sending the link, review gating violates Google policy and the FTC ($53k/violation).

---

## 2. Citations, claim these (direct links + what to enter from §0)

Priority order by SEO value:

| # | Platform | Where | Why it matters |
|---|---|---|---|
| 1 | **Bing Places** | bingplaces.com | **Powers ChatGPT, Copilot, Alexa.** 45% of local recs now come via AI. Highest-value gap. |
| 2 | **Apple Business Connect** | businessconnect.apple.com | Apple Maps/Siri; usage doubled to 27%. |
| 3 | **Yelp for Business** | biz.yelp.com | A source ChatGPT/AI pull from; consumers cross-check it. |
| 4 | **Facebook Business Page** | facebook.com/pages/create | Brand entity + a `sameAs` target. |
| 5 | **BBB** | bbb.org/apply | Google uses BBB for verification (see §3). |
| 6 | **Data aggregators** | Data Axle, Foursquare | Downstream NAP distribution to dozens of smaller directories. |

For each: search for an existing listing first (the business is old, auto-generated stubs may exist on Yelp/Bing). **Claim** the existing one rather than creating a duplicate, then correct it to match §0.

**As you create each, send me the URL**, I'll add it to the LocalBusiness `sameAs[]` in `lib/schema.ts` (entity disambiguation + a top AI-citation signal). That's the deferred half of the schema fix.

---

## 3. Local authority (no signals detected, build them)

### Carroll County Chamber of Commerce  ← do this first
- **Join:** https://carroll-ga.org/join/ · 200 Northside Dr, Carrollton, GA 30117 · (770) 832-2446 · carrollchamber@carroll-ga.org
- 600+ members; gives a high-trust local backlink (member directory) + networking. Highest-ROI local-authority move for a Carrollton business.

### BBB Accreditation
- **Apply:** https://www.bbb.org/apply (BBB of Metro Atlanta, Athens & NE GA). Cowart easily clears the ">6 months old" bar (since 1974).
- ~$965/yr (>10 employees); yields an A+-F grade + accreditation badge + a verification signal Google trusts. Worth it if the budget allows.

### Local press / "best of" (top AI-visibility citation factor)
- Pitch the *Times-Georgian* (Carrollton paper) a story angle: 50+ years family-owned, in-house treatment plant, own DOT fleet, recent expansion/jobs.
- Get listed in any "best industrial services / best of West Georgia" roundups.
- Community involvement (sponsor a local event/team) → local mentions + links.

---

## Quick reference, what I can do in code vs. what's manual

| Task | Who |
|---|---|
| `image[]` in schema | ✅ done (deployed) |
| `geo` precision | **You:** copy exact pin coords from GBP → I update `lib/schema.ts` |
| `sameAs[]` | **You:** claim listings → send URLs → I add them |
| On-site "Leave a review" CTA | **You:** send Place ID / `g.page` link → I build + deploy |
| Claiming GBP/Bing/Apple/Yelp/BBB/Chamber | **You** (require login; fields pre-filled in §0) |
| Asking clients for reviews | **You** (template in §1) |
