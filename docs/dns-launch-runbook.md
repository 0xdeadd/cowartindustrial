# DNS launch runbook

What to do at GoDaddy when Steve is there. Plain-English steps.

The site is fully built and deployed at `cowartindustrial.vercel.app`. Everything below is what's needed to flip it over to `cowartind.com` and turn email on.

## Before you touch DNS

Confirm these are still true:

- `cowartind.com` and `www.cowartind.com` are both showing up at https://vercel.com/clints-projects-adb72f91/cowartindustrial/settings/domains (they were added via CLI on 2026-05-13).
- A Resend account exists with an API key already pushed to Vercel. (Pulled from zanyplayworld on 2026-05-13.)
- The existing `info@cowartind.com` email is working. (Don't break it.)

## Step 1 — log in at GoDaddy and find DNS for cowartind.com

GoDaddy → Domain Portfolio → click `cowartind.com` → DNS tab. You'll see a list of records.

**Do not delete any existing MX, TXT (SPF), or CNAME records that look like they're related to email.** Those are for `info@cowartind.com`. We're adding new records, not replacing.

## Step 2 — add Vercel DNS records (points the website at Vercel)

Add these two records:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | `@` | `76.76.21.21` | 600 (or default) |
| CNAME | `www` | `cname.vercel-dns.com` | 600 (or default) |

GoDaddy will reject a CNAME on the apex (`@`) — that's why apex uses an A record and www uses a CNAME. Both arrive at the same Vercel project.

**If GoDaddy already has a parked A record on `@`** (pointing to `Parked.com` or similar), edit it to `76.76.21.21` instead of adding a duplicate.

**After saving**, Vercel detects the change within a few minutes. Watch the domain status at https://vercel.com/clints-projects-adb72f91/cowartindustrial/settings/domains — it'll go from "Invalid Configuration" → "Valid Configuration" → SSL auto-provisions.

## Step 3 — add cowartind.com as a Resend domain

In a separate tab, go to https://resend.com/domains → "Add Domain" → enter `cowartind.com`.

Resend will give you 3 DNS records to add at GoDaddy:

| Type | Name | Value |
|------|------|-------|
| TXT | `send` (or `_resend`) | `(SPF record Resend gives you)` |
| TXT | `resend._domainkey` | `(DKIM record Resend gives you)` |
| TXT | `_dmarc` *(optional)* | `(DMARC record Resend gives you)` |

The exact values are unique per account — copy them from Resend's UI when adding the domain. Paste them into GoDaddy's DNS tab the same way as Step 2 (Add → TXT → Name → Value → Save).

**After saving**, return to Resend's domains page and click "Verify Records." Usually completes within 5-15 min once DNS propagates.

## Step 4 — verify the website is live

Once Vercel shows "Valid Configuration" + SSL is green:

1. Open `https://cowartind.com` in a fresh browser window. Should load the site.
2. Open `https://www.cowartind.com` — should redirect to the apex.
3. Open `https://cowartind.com/sitemap.xml` — should show an XML list of every page.
4. Open `https://cowartind.com/robots.txt` — should show "Allow: /, Disallow: /api/, Sitemap: https://cowartind.com/sitemap.xml".

## Step 5 — verify email sending works

1. Once Resend shows `cowartind.com` as "Verified" in their dashboard,
2. Submit a test through `https://cowartind.com/contact` (any name/email/message),
3. Check `info@cowartind.com` — should see a "New quote request — [name]" email within ~30 seconds.

If the email doesn't arrive, check Resend's "Emails" tab at https://resend.com/emails for the most recent send and its status (Delivered / Bounced / etc.).

## Step 6 — submit the sitemap to Google

1. Go to https://search.google.com/search-console
2. Add `cowartind.com` as a property (HTML file verification is set up in `public/` — see `docs/google-search-console.md` for the file once Steve generates one).
3. After verification, go to Sitemaps in the left nav → enter `sitemap.xml` → Submit.

This kicks off indexing. The 17 service pages + waste-management hub will get crawled within days.

## Step 7 — watch the data

For the first 30 days post-launch, watch:

- **Vercel Analytics** (https://vercel.com/clints-projects-adb72f91/cowartindustrial/analytics): page views, top pages, top referrers
- **Google Search Console → Performance**: which keywords are showing the site in search results, click-through rate, average position
- **Resend → Emails**: how many quote requests are coming through

Send Steve a one-page recap at the end of the first month.

## Common stumbling blocks

- **"DNS isn't propagating"** — give it 30 minutes. Some ISPs cache for longer. Check at https://dnschecker.org/#A/cowartind.com to see global propagation.
- **"Email goes to spam"** — make sure DMARC is set (Resend gives you the value) and that the FROM domain matches the verified Resend domain. Sending from `leads@cowartind.com` only works if `cowartind.com` is verified in Resend.
- **"Vercel says invalid configuration"** — usually means the A record value is wrong, or there are multiple A records on `@` (Vercel only wants one).
- **"GoDaddy keeps adding extra records"** — GoDaddy sometimes auto-adds Domain Forwarding records that conflict. Disable Domain Forwarding under the domain's settings if you see weird redirects.

## What's hardcoded that depends on `cowartind.com`

For reference, if the domain ever needs to change, these places hardcode `cowartind.com`:

- `lib/schema.ts` → `SITE_URL` constant (drives JSON-LD `url`, `@id`, sitemap, robots)
- `app/layout.tsx` → `metadataBase`
- `app/api/contact/route.ts` → `FROM_ADDRESS` (`leads@cowartind.com`)
- `proxy.ts` → `CANONICAL_HOST` (the "don't noindex this" check)
- `app/services/waste-management/page.tsx` → `HUB_URL`

Change them all together or expect schema validators to flag mismatches.
