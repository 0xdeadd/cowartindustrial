// Server-side Google Search Console API client.
// Uses an OAuth refresh token (captured via scripts/oauth-capture.mjs and
// stored in GSC_OAUTH_REFRESH_TOKEN) to mint short-lived access tokens for
// API calls. The OAuth path sidesteps the documented service-account-to-GSC
// bug active since 2026-04-23.

import { google } from "googleapis"

// Must match the GSC property string exactly. The property is registered as a
// URL-prefix property with the trailing slash. Search Analytics tolerates the
// no-slash form; URL Inspection does not, so use the exact registered string.
const PROPERTY = "https://cowartind.com/"

function getAuth() {
  const clientId = process.env.GSC_OAUTH_CLIENT_ID
  const clientSecret = process.env.GSC_OAUTH_CLIENT_SECRET
  const refreshToken = process.env.GSC_OAUTH_REFRESH_TOKEN

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error(
      "Missing GSC_OAUTH_* env vars. Run scripts/oauth-capture.mjs to set up.",
    )
  }

  const oauth2 = new google.auth.OAuth2(clientId, clientSecret)
  oauth2.setCredentials({ refresh_token: refreshToken })
  return oauth2
}

function getClient() {
  return google.searchconsole({ version: "v1", auth: getAuth() })
}

export type AnalyticsRow = {
  keys: string[]
  clicks: number
  impressions: number
  ctr: number
  position: number
}

type SearchAnalyticsOptions = {
  startDate: string
  endDate: string
  dimensions?: ("query" | "page" | "country" | "device" | "date" | "searchAppearance")[]
  rowLimit?: number
  dimensionFilterGroups?: {
    filters: { dimension: string; operator: string; expression: string }[]
  }[]
}

export async function searchAnalytics(opts: SearchAnalyticsOptions): Promise<AnalyticsRow[]> {
  const sc = getClient()
  const { data } = await sc.searchanalytics.query({
    siteUrl: PROPERTY,
    requestBody: {
      startDate: opts.startDate,
      endDate: opts.endDate,
      dimensions: opts.dimensions,
      rowLimit: opts.rowLimit ?? 1000,
      dimensionFilterGroups: opts.dimensionFilterGroups,
    },
  })
  return (data.rows ?? []) as AnalyticsRow[]
}

export type UrlInspectionResult = {
  url: string
  verdict: string | null
  coverageState: string | null
  indexingState: string | null
  lastCrawlTime: string | null
  googleCanonical: string | null
  userCanonical: string | null
  pageFetchState: string | null
  robotsTxtState: string | null
  mobileVerdict: string | null
  richResultsVerdict: string | null
  error?: string
}

export async function inspectUrl(url: string): Promise<UrlInspectionResult> {
  const sc = getClient()
  try {
    const { data } = await sc.urlInspection.index.inspect({
      requestBody: { inspectionUrl: url, siteUrl: PROPERTY },
    })
    const r = data.inspectionResult ?? {}
    const idx = r.indexStatusResult ?? {}
    const mob = r.mobileUsabilityResult ?? {}
    const rich = r.richResultsResult ?? {}
    return {
      url,
      verdict: idx.verdict ?? null,
      coverageState: idx.coverageState ?? null,
      indexingState: idx.indexingState ?? null,
      lastCrawlTime: idx.lastCrawlTime ?? null,
      googleCanonical: idx.googleCanonical ?? null,
      userCanonical: idx.userCanonical ?? null,
      pageFetchState: idx.pageFetchState ?? null,
      robotsTxtState: idx.robotsTxtState ?? null,
      mobileVerdict: mob.verdict ?? null,
      richResultsVerdict: rich.verdict ?? null,
    }
  } catch (e) {
    return {
      url,
      verdict: null,
      coverageState: null,
      indexingState: null,
      lastCrawlTime: null,
      googleCanonical: null,
      userCanonical: null,
      pageFetchState: null,
      robotsTxtState: null,
      mobileVerdict: null,
      richResultsVerdict: null,
      error: e instanceof Error ? e.message : String(e),
    }
  }
}

export type SitemapStatus = {
  path: string
  lastSubmitted: string | null
  lastDownloaded: string | null
  isPending: boolean
  warnings: number
  errors: number
  contentsByType: { type: string; submitted: number; indexed: number }[]
}

export async function listSitemaps(): Promise<SitemapStatus[]> {
  const sc = getClient()
  const { data } = await sc.sitemaps.list({ siteUrl: PROPERTY })
  return (data.sitemap ?? []).map((s) => ({
    path: s.path ?? "",
    lastSubmitted: s.lastSubmitted ?? null,
    lastDownloaded: s.lastDownloaded ?? null,
    isPending: s.isPending ?? false,
    warnings: Number(s.warnings ?? 0),
    errors: Number(s.errors ?? 0),
    contentsByType: (s.contents ?? []).map((c) => ({
      type: c.type ?? "",
      submitted: Number(c.submitted ?? 0),
      indexed: Number(c.indexed ?? 0),
    })),
  }))
}

export function isoDaysAgo(days: number): string {
  const d = new Date()
  d.setUTCDate(d.getUTCDate() - days)
  return d.toISOString().slice(0, 10)
}
