import { NextResponse } from "next/server"
import { services } from "@/lib/services"
import { SITE_URL } from "@/lib/schema"
import { inspectUrl } from "@/lib/gsc-client"

// URL Inspection is ~1-2s per URL; give the function headroom.
export const maxDuration = 60

const STATIC_ROUTES = [
  "/",
  "/services",
  "/services/waste-management",
  "/about",
  "/faq",
  "/jobs",
  "/forms",
  "/contact",
]

function allUrls(): string[] {
  const serviceUrls = services.map((s) => `${SITE_URL}/services/${s.slug}`)
  // Homepage inspected as the canonical trailing-slash URL; the rest are
  // their exact canonical paths.
  const staticUrls = STATIC_ROUTES.map((r) => (r === "/" ? `${SITE_URL}/` : `${SITE_URL}${r}`))
  return [...staticUrls, ...serviceUrls]
}

async function withConcurrency<T, R>(
  items: T[],
  limit: number,
  fn: (item: T) => Promise<R>,
): Promise<R[]> {
  const results: R[] = new Array(items.length)
  let i = 0
  async function worker() {
    while (i < items.length) {
      const idx = i++
      results[idx] = await fn(items[idx])
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker))
  return results
}

export async function GET() {
  try {
    const urls = allUrls()
    // 5 parallel — balances speed against GSC rate limits.
    const results = await withConcurrency(urls, 5, (url) => inspectUrl(url))

    // Summary counts by verdict/coverage
    const summary = { indexed: 0, notIndexed: 0, error: 0, total: results.length }
    for (const r of results) {
      if (r.error) summary.error++
      else if (r.verdict === "PASS") summary.indexed++
      else summary.notIndexed++
    }

    return NextResponse.json({ summary, results })
  } catch (e) {
    console.error("admin/indexing error:", e)
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Unknown error" },
      { status: 500 },
    )
  }
}
