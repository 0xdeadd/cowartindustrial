// IndexNow submit: pings Bing (and other IndexNow engines, e.g. Yandex) to crawl
// our URLs immediately instead of waiting for the next natural crawl. Google does
// NOT use IndexNow. Bing's index is a primary source for ChatGPT web search, so
// faster Bing indexing has downstream AI-visibility value.
//
//   npm run seo:indexnow                                    # submit every sitemap URL
//   npm run seo:indexnow /contact /services/waste-disposal  # submit specific paths
//
// The key is public by design: it is served at https://cowartind.com/<key>.txt and
// echoed in the ping so the IndexNow API can verify we own the host. Run this AFTER
// deploying changed pages (the key file and the new content must be live first).

const KEY = "4d5e95c2ddfa7cb2a51e054126925c46"
const HOST = "cowartind.com"
const ORIGIN = `https://${HOST}`
const KEY_LOCATION = `${ORIGIN}/${KEY}.txt`
const SITEMAP = `${ORIGIN}/sitemap.xml`
const ENDPOINT = "https://api.indexnow.org/indexnow"

async function getSitemapUrls() {
  const res = await fetch(`${SITEMAP}?cb=${Date.now()}`)
  if (!res.ok) throw new Error(`sitemap fetch ${res.status}`)
  const xml = await res.text()
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim())
}

function toAbsolute(arg) {
  if (arg.startsWith("http")) return arg
  return ORIGIN + (arg.startsWith("/") ? arg : `/${arg}`)
}

async function main() {
  const args = process.argv.slice(2)
  const urlList = args.length ? args.map(toAbsolute) : await getSitemapUrls()

  // Verify the key file is live first; IndexNow silently drops a batch whose key
  // it cannot validate, so fail loud here instead.
  const keyRes = await fetch(`${KEY_LOCATION}?cb=${Date.now()}`)
  const keyBody = keyRes.ok ? (await keyRes.text()).trim() : null
  if (keyBody !== KEY) {
    console.error(`Key file not live / mismatched at ${KEY_LOCATION}`)
    console.error(`  status ${keyRes.status}, body "${(keyBody || "").slice(0, 40)}"`)
    console.error(`  Deploy public/${KEY}.txt first (vercel --prod), then re-run.`)
    process.exit(1)
  }

  console.log(`Submitting ${urlList.length} URL(s) to IndexNow (${HOST}):`)
  urlList.forEach((u) => console.log(`  ${u}`))

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
  })

  // 200 = OK, 202 = Accepted (key validation pending). Both mean success.
  const ok = res.status === 200 || res.status === 202
  console.log(
    `\nIndexNow response: ${res.status} ${res.statusText} ${ok ? "(accepted)" : "(see https://www.indexnow.org/documentation)"}`
  )
  if (!ok) {
    console.error(await res.text().catch(() => ""))
    process.exit(1)
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
