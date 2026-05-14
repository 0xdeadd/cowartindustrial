# Google Search Console setup

Do this AFTER DNS is pointed at Vercel (see `dns-launch-runbook.md`). GSC verifies domain ownership by fetching from the live site, so it's blocked until `cowartind.com` resolves.

## One-time setup

1. Go to https://search.google.com/search-console.
2. Click "Add property" → pick **URL prefix** → enter `https://cowartind.com` (with `https://`, no trailing slash).
3. Google will offer a few verification methods. Use **HTML file**:
   - Download the file Google gives you. It'll be named something like `googleabc123def456.html`.
   - Drop the file into `public/` in this repo (next to `logo.jpg`). Commit + redeploy (`vercel --prod`).
   - The file becomes accessible at `https://cowartind.com/googleabc123def456.html`.
   - Click "Verify" in GSC. Should succeed immediately.
4. (Recommended) Also add `https://www.cowartind.com` as a separate property and verify the same way. Or use the **Domain property** type, which covers all subdomains but requires DNS verification.

## Submit the sitemap

Once verified:

1. Left sidebar → **Sitemaps**
2. Enter `sitemap.xml` (the field auto-prefixes with the property URL)
3. Click Submit

Within a day or two, GSC will start showing:
- **Pages**: how many of the 18 URLs are indexed (17 services + waste-management hub + the rest)
- **Performance → Queries**: which search terms are showing the site + click-through rate
- **Coverage**: any indexing errors

## What to watch in month 1

- Are all 18 service URLs getting indexed? If not, check the Coverage report for errors.
- Which of the 14 target keywords are showing impressions? (Waste disposal, environmental services, etc.)
- Click-through rate per page — if a page gets impressions but no clicks, the meta description likely needs work.

## Useful follow-up

- Set up **email alerts** for indexing errors and security issues (GSC → Settings → Users and permissions).
- Submit the URL for `cowartind.com/services/[each of the 17 services]` via "URL Inspection → Request Indexing" to speed up indexing on launch day.
