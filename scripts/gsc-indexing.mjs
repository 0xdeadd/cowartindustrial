// GSC URL Inspection sweep — reports Google's indexing coverage for every
// URL in the live sitemap. CLI complement to the /admin indexing panel.
//
//   npm run seo:indexing
//
// Auth: OAuth refresh token (GSC_OAUTH_CLIENT_ID/_SECRET/_REFRESH_TOKEN) if set,
// else Application Default Credentials. URL Inspection requires the property
// string EXACTLY as registered in GSC — WITH the trailing slash.

import { google } from "googleapis"

const PROPERTY = process.env.GSC_PROPERTY || "https://cowartind.com/"
const SITEMAP = "https://cowartind.com/sitemap.xml"

const { GSC_OAUTH_CLIENT_ID, GSC_OAUTH_CLIENT_SECRET, GSC_OAUTH_REFRESH_TOKEN } = process.env

function authenticate() {
  if (GSC_OAUTH_CLIENT_ID && GSC_OAUTH_CLIENT_SECRET && GSC_OAUTH_REFRESH_TOKEN) {
    const oauth2 = new google.auth.OAuth2(GSC_OAUTH_CLIENT_ID, GSC_OAUTH_CLIENT_SECRET)
    oauth2.setCredentials({ refresh_token: GSC_OAUTH_REFRESH_TOKEN })
    return oauth2
  }
  return new google.auth.GoogleAuth({
    scopes: ["https://www.googleapis.com/auth/webmasters.readonly"],
  })
}

async function getSitemapUrls() {
  const res = await fetch(SITEMAP)
  if (!res.ok) throw new Error(`sitemap fetch ${res.status}`)
  const xml = await res.text()
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim())
}

async function inspect(searchconsole, url) {
  try {
    const { data } = await searchconsole.urlInspection.index.inspect({
      requestBody: { inspectionUrl: url, siteUrl: PROPERTY },
    })
    const idx = data.inspectionResult?.indexStatusResult ?? {}
    return {
      url,
      verdict: idx.verdict ?? "—",
      coverage: idx.coverageState ?? "—",
      lastCrawl: idx.lastCrawlTime ?? null,
      googleCanonical: idx.googleCanonical ?? null,
    }
  } catch (e) {
    return { url, verdict: "ERROR", coverage: e.message?.slice(0, 60) ?? "error", lastCrawl: null }
  }
}

async function main() {
  const auth = authenticate()
  const searchconsole = google.searchconsole({ version: "v1", auth })
  const urls = await getSitemapUrls()
  console.log(`Inspecting ${urls.length} sitemap URLs against ${PROPERTY}\n`)

  const results = []
  // Serial to respect the URL Inspection quota (~2k/day, low QPS).
  for (const url of urls) {
    results.push(await inspect(searchconsole, url))
  }

  const indexed = results.filter((r) => r.coverage?.startsWith("Submitted and indexed") || r.verdict === "PASS")
  const notIndexed = results.filter((r) => !indexed.includes(r))

  const path = (u) => u.replace("https://cowartind.com", "") || "/"
  const fmtDate = (d) => (d ? d.slice(0, 10) : "never")

  console.log("STATE                              LAST CRAWL   PAGE")
  console.log("─".repeat(72))
  for (const r of results.sort((a, b) => (a.coverage || "").localeCompare(b.coverage || ""))) {
    console.log(
      `${(r.coverage || "—").padEnd(34).slice(0, 34)} ${fmtDate(r.lastCrawl).padEnd(12)} ${path(r.url)}`,
    )
  }
  console.log("─".repeat(72))
  console.log(`\nIndexed: ${indexed.length}/${results.length}   Not yet indexed: ${notIndexed.length}`)

  // group not-indexed by coverage reason
  const byReason = {}
  for (const r of notIndexed) byReason[r.coverage] = (byReason[r.coverage] || 0) + 1
  if (notIndexed.length) {
    console.log("\nNot-indexed breakdown:")
    for (const [reason, n] of Object.entries(byReason).sort((a, b) => b[1] - a[1])) {
      console.log(`  ${n}×  ${reason}`)
    }
  }
}

main().catch((e) => {
  console.error("Failed:", e.message)
  process.exit(1)
})
