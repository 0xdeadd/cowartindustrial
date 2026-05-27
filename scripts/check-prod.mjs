#!/usr/bin/env node
// Post-deploy production smoke check.
//
// Fetches /sitemap.xml from cowartind.com, then HEADs every URL in it.
// Fails if any URL returns a non-2xx/3xx status (404, 500, etc.).
//
// Usage:
//   npm run seo:check-prod
//
// Run this AFTER `vercel --prod` to confirm nothing in the sitemap is broken.

const SITE = process.env.SITE_URL || "https://cowartind.com"
const SITEMAP = `${SITE}/sitemap.xml`
const CONCURRENCY = 5

const RED = "\x1b[31m"
const GREEN = "\x1b[32m"
const YELLOW = "\x1b[33m"
const DIM = "\x1b[2m"
const RESET = "\x1b[0m"

const UA =
  "Mozilla/5.0 (compatible; CowartSEOCheck/1.0; +https://cowartind.com/)"

async function fetchSitemap() {
  const res = await fetch(SITEMAP, { headers: { "User-Agent": UA } })
  if (!res.ok) {
    throw new Error(`sitemap fetch failed: ${res.status}`)
  }
  const xml = await res.text()
  const urls = []
  const regex = /<loc>([^<]+)<\/loc>/g
  let m
  while ((m = regex.exec(xml)) !== null) urls.push(m[1])
  return urls
}

async function checkUrl(url) {
  try {
    const res = await fetch(url, {
      method: "GET", // HEAD sometimes blocked by Vercel WAF
      redirect: "manual",
      headers: { "User-Agent": UA },
    })
    const code = res.status
    const location = res.headers.get("location") || ""
    // Treat 2xx as success; 3xx as redirect-success (sitemap shouldn't list these, but tolerate)
    const ok = code >= 200 && code < 400
    return { url, code, location, ok }
  } catch (e) {
    return { url, code: 0, location: "", ok: false, error: e.message }
  }
}

async function runWithConcurrency(items, fn, concurrency) {
  const results = []
  let i = 0
  async function worker() {
    while (i < items.length) {
      const idx = i++
      results[idx] = await fn(items[idx])
    }
  }
  await Promise.all(Array.from({ length: concurrency }, worker))
  return results
}

async function main() {
  console.log(`${DIM}Fetching ${SITEMAP}…${RESET}`)
  const urls = await fetchSitemap()
  console.log(`${DIM}Checking ${urls.length} URLs (${CONCURRENCY} parallel)…${RESET}\n`)

  const results = await runWithConcurrency(urls, checkUrl, CONCURRENCY)

  let failed = 0
  for (const r of results) {
    const status = r.ok ? `${GREEN}✓${RESET}` : `${RED}✗${RESET}`
    const codeStr = r.code === 0 ? "ERR" : String(r.code)
    const note = r.error ? `  ${RED}${r.error}${RESET}` : r.location ? `  ${DIM}→ ${r.location}${RESET}` : ""
    console.log(`${status} ${codeStr.padEnd(4)} ${r.url}${note}`)
    if (!r.ok) failed++
  }

  console.log()
  if (failed > 0) {
    console.error(`${RED}check-prod failed: ${failed} URL(s) returned non-2xx/3xx${RESET}\n`)
    process.exit(1)
  }
  console.log(`${GREEN}check-prod passed: all ${urls.length} URLs healthy${RESET}\n`)
}

main().catch((e) => {
  console.error(`${RED}check-prod error:${RESET}`, e.message)
  process.exit(1)
})
