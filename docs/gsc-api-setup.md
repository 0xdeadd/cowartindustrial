# Google Search Console API setup

One-time setup so `npm run seo:report` can pull real GSC data. Takes about
2 minutes.

## Why we use Application Default Credentials (not a service account)

The standard way to authenticate scripts to Google APIs is a service account
create one in Google Cloud, download a JSON key, add the service account's
email to the GSC property as a Restricted user, done.

**That doesn't work right now.** Since 2026-04-23, Google has a confirmed
bug where new service accounts can't be added to GSC properties, the user-add
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
by gcloud, different from the service-account JSON; this one represents
**your** logged-in session). The googleapis library picks it up automatically.

## Verify

```bash
npm run seo:report
```

Expected:
- "Authenticating with GSC API…"
- A few seconds later: "Report written: docs/seo-reports/YYYY-MM-DD.md"
- Open the file, it should have real query data from GSC

If it fails with "could not find Application Default Credentials", run the
`gcloud auth application-default login` command again, credentials can
expire after long periods of inactivity.

## Caveats with ADC

**Local only.** ADC credentials live on your laptop. The script works
when YOU run it. If you want this on a Monday-morning cron (GitHub Actions,
Vercel Cron, etc.), we'd need a different auth path, either:
- Wait for Google's service-account bug to be fixed, then re-do this with
  a service account (5 min)
- Switch to OAuth refresh tokens (15 min, more script code)

Either is doable when the time comes. For local-only manual runs,
`npm run seo:report` against ADC is the lightest setup.

## CI auth: OAuth refresh tokens (what the weekly report uses)

The Monday cron (`.github/workflows/seo-report.yml`) can't use ADC (laptop-only),
so it authenticates with an OAuth refresh token instead. Three repo secrets drive
it: `GSC_OAUTH_CLIENT_ID`, `GSC_OAUTH_CLIENT_SECRET`, `GSC_OAUTH_REFRESH_TOKEN`.

To mint (or re-mint) the refresh token, run once locally with the Desktop OAuth
client JSON:

```bash
node scripts/oauth-capture.mjs ~/Downloads/client_secret_xxx.json
```

It opens a browser, you approve read-only Search Console access as
`clintdotphillips@gmail.com`, and it prints the three env vars. Put them in
`.env.local` for local runs and in the GitHub repo secrets for CI
(`gh secret set GSC_OAUTH_REFRESH_TOKEN`).

### ⚠️ Publish the OAuth app to Production, or the token dies in 7 days

The OAuth app (Google Cloud Console, project `cowart-seo`, Google Auth Platform,
Audience) **must be in "In production" publishing status.** While it sits in
"Testing", Google expires the refresh token after exactly 7 days. The symptom is
the weekly report failing with `gsc-report error: invalid_grant`, typically the
*second* Monday after a fresh token (the first run lands inside the 7-day window
and succeeds, which is why it looks intermittent).

Fix order if you ever hit `invalid_grant`:
1. Confirm the app is **In production** (publish it if not). This is the real fix.
2. Re-mint the token with `scripts/oauth-capture.mjs` (the old one is dead and
   does not recover on its own).
3. Update `GSC_OAUTH_REFRESH_TOKEN` in both `.env.local` and the GitHub secret.
4. Re-run to verify: `gh workflow run seo-report.yml`.

Re-minting without step 1 just buys another 7 days before it breaks again.

## What to do with the weekly report

Open the latest `docs/seo-reports/YYYY-MM-DD.md`. Four sections, ranked by
leverage:

1. **Page-1 candidates**, pick 1-2 per week. Look at the matched page;
   figure out what content gap exists vs. the queries shown. Add a paragraph
   or section. Re-deploy.
2. **CTR underperformers**, pick the highest-impression underperformer.
   Rewrite that page's title and meta description to be more click-worthy.
   The page is already getting traffic; just need a better snippet.
3. **Trending up**, what's working. Notice patterns; do more of it.
4. **New queries**, long-tail opportunities surfacing in GSC for the first
   time.

Skip "Trending down" most weeks unless something jumps out, WoW noise is
normal.
