# Google Search Console API setup

One-time setup so `npm run seo:report` can pull real GSC data. Takes about
2 minutes.

## Why we use Application Default Credentials (not a service account)

The standard way to authenticate scripts to Google APIs is a service account
— create one in Google Cloud, download a JSON key, add the service account's
email to the GSC property as a Restricted user, done.

**That doesn't work right now.** Since 2026-04-23, Google has a confirmed
bug where new service accounts can't be added to GSC properties — the user-add
UI rejects them with "Failed to add user: email not found." Google has
acknowledged the bug with no fix timeline.

Workaround: use **Application Default Credentials (ADC)**. The script
authenticates as you (your personal Google account), which already has GSC
access. No service account, no JSON file, no email-add dance.

## Setup (the whole thing)

You need the gcloud CLI installed. Check:

```bash
gcloud --version
```

If it's missing, install via Homebrew: `brew install --cask google-cloud-sdk`.

Then run this once:

```bash
gcloud auth application-default login
```

That opens a browser. **Log in with the Google account that has access to
the GSC property** (in our case `clintdotphillips@gmail.com`). When the
"Authentication successful" page appears, you can close the browser tab.

That's it. Credentials are now cached at
`~/.config/gcloud/application_default_credentials.json` (a JSON file written
by gcloud — different from the service-account JSON; this one represents
**your** logged-in session). The googleapis library picks it up automatically.

## Verify

```bash
npm run seo:report
```

Expected:
- "Authenticating with GSC API…"
- A few seconds later: "Report written: docs/seo-reports/YYYY-MM-DD.md"
- Open the file — it should have real query data from GSC

If it fails with "could not find Application Default Credentials", run the
`gcloud auth application-default login` command again — credentials can
expire after long periods of inactivity.

## Caveats with ADC

**Local only.** ADC credentials live on your laptop. The script works
when YOU run it. If you want this on a Monday-morning cron (GitHub Actions,
Vercel Cron, etc.), we'd need a different auth path — either:
- Wait for Google's service-account bug to be fixed, then re-do this with
  a service account (5 min)
- Switch to OAuth refresh tokens (15 min, more script code)

Either is doable when the time comes. For now, manual `npm run seo:report`
when you want a fresh report is the lightest setup.

## What to do with the weekly report

Open the latest `docs/seo-reports/YYYY-MM-DD.md`. Four sections, ranked by
leverage:

1. **Page-1 candidates** — pick 1–2 per week. Look at the matched page;
   figure out what content gap exists vs. the queries shown. Add a paragraph
   or section. Re-deploy.
2. **CTR underperformers** — pick the highest-impression underperformer.
   Rewrite that page's title and meta description to be more click-worthy.
   The page is already getting traffic; just need a better snippet.
3. **Trending up** — what's working. Notice patterns; do more of it.
4. **New queries** — long-tail opportunities surfacing in GSC for the first
   time.

Skip "Trending down" most weeks unless something jumps out — WoW noise is
normal.
