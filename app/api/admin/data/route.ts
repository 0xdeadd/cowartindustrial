import { NextResponse } from "next/server"
import {
  AnalyticsRow,
  isoDaysAgo,
  listSitemaps,
  searchAnalytics,
} from "@/lib/gsc-client"

const PERIOD_DAYS = 28
// GSC data lags ~2 days; start the recent window 2 days ago.
const LAG_DAYS = 2

type QueryRow = AnalyticsRow & { key: string }
type PageRow = AnalyticsRow & { url: string }
type QueryPageRow = AnalyticsRow & { query: string; url: string }

export async function GET() {
  try {
    const recentEnd = isoDaysAgo(LAG_DAYS)
    const recentStart = isoDaysAgo(LAG_DAYS + PERIOD_DAYS)
    const priorEnd = recentStart
    const priorStart = isoDaysAgo(LAG_DAYS + PERIOD_DAYS * 2)

    const [
      recentByQuery,
      priorByQuery,
      recentByPage,
      recentByQueryPage,
      sitemaps,
    ] = await Promise.all([
      searchAnalytics({
        startDate: recentStart,
        endDate: recentEnd,
        dimensions: ["query"],
        rowLimit: 1000,
      }),
      searchAnalytics({
        startDate: priorStart,
        endDate: priorEnd,
        dimensions: ["query"],
        rowLimit: 1000,
      }),
      searchAnalytics({
        startDate: recentStart,
        endDate: recentEnd,
        dimensions: ["page"],
        rowLimit: 500,
      }),
      searchAnalytics({
        startDate: recentStart,
        endDate: recentEnd,
        dimensions: ["query", "page"],
        rowLimit: 1000,
      }),
      listSitemaps().catch(() => []),
    ])

    // Totals
    const totals = recentByQuery.reduce(
      (acc, r) => ({
        clicks: acc.clicks + r.clicks,
        impressions: acc.impressions + r.impressions,
      }),
      { clicks: 0, impressions: 0 },
    )
    const priorTotals = priorByQuery.reduce(
      (acc, r) => ({
        clicks: acc.clicks + r.clicks,
        impressions: acc.impressions + r.impressions,
      }),
      { clicks: 0, impressions: 0 },
    )

    // Page-1 candidates
    const page1Candidates: QueryPageRow[] = recentByQueryPage
      .filter((r) => r.position >= 11 && r.position <= 20 && r.impressions >= 5)
      .sort((a, b) => b.impressions - a.impressions)
      .slice(0, 25)
      .map((r) => ({ ...r, query: r.keys[0], url: r.keys[1] }))

    // CTR underperformers
    const ctrUnderperformers: PageRow[] = recentByPage
      .filter((r) => r.impressions >= 100 && r.ctr < 0.02)
      .sort((a, b) => b.impressions - a.impressions)
      .map((r) => ({ ...r, url: r.keys[0] }))

    // Trending
    const priorMap = new Map(priorByQuery.map((r) => [r.keys[0], r]))
    const trendingAll = recentByQuery
      .filter((r) => r.impressions >= 5)
      .map((r) => {
        const prior = priorMap.get(r.keys[0])
        const priorImp = prior?.impressions ?? 0
        return {
          query: r.keys[0],
          impressions: r.impressions,
          priorImpressions: priorImp,
          delta: r.impressions - priorImp,
          position: r.position,
          ctr: r.ctr,
          clicks: r.clicks,
          isNew: !prior,
        }
      })

    const trendingUp = trendingAll
      .filter((q) => !q.isNew && q.delta > 0)
      .sort((a, b) => b.delta - a.delta)
      .slice(0, 15)

    const trendingDown = trendingAll
      .filter((q) => !q.isNew && q.delta < -2)
      .sort((a, b) => a.delta - b.delta)
      .slice(0, 10)

    const newQueries = trendingAll
      .filter((q) => q.isNew)
      .sort((a, b) => b.impressions - a.impressions)
      .slice(0, 15)

    // Top queries (overall)
    const topQueries: QueryRow[] = recentByQuery
      .sort((a, b) => b.impressions - a.impressions)
      .slice(0, 25)
      .map((r) => ({ ...r, key: r.keys[0] }))

    return NextResponse.json({
      window: { recentStart, recentEnd, priorStart, priorEnd },
      totals,
      priorTotals,
      page1Candidates,
      ctrUnderperformers,
      trendingUp,
      trendingDown,
      newQueries,
      topQueries,
      sitemaps,
    })
  } catch (e) {
    console.error("admin/data error:", e)
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Unknown error" },
      { status: 500 },
    )
  }
}
