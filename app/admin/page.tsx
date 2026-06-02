"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

type DashboardData = {
  window: { recentStart: string; recentEnd: string; priorStart: string; priorEnd: string }
  totals: { clicks: number; impressions: number }
  priorTotals: { clicks: number; impressions: number }
  page1Candidates: {
    query: string
    url: string
    impressions: number
    clicks: number
    position: number
    ctr: number
  }[]
  ctrUnderperformers: {
    url: string
    impressions: number
    clicks: number
    ctr: number
    position: number
  }[]
  trendingUp: {
    query: string
    impressions: number
    priorImpressions: number
    delta: number
    position: number
  }[]
  trendingDown: {
    query: string
    impressions: number
    priorImpressions: number
    delta: number
    position: number
  }[]
  newQueries: { query: string; impressions: number; position: number }[]
  topQueries: { key: string; clicks: number; impressions: number; ctr: number; position: number }[]
  sitemaps: {
    path: string
    lastSubmitted: string | null
    lastDownloaded: string | null
    isPending: boolean
    warnings: number
    errors: number
    contentsByType: { type: string; submitted: number; indexed: number }[]
  }[]
}

function shortUrl(url: string): string {
  return url.replace(/^https?:\/\/[^/]+/, "") || "/"
}

function pct(n: number): string {
  return (n * 100).toFixed(2) + "%"
}

function fmtDate(s: string | null): string {
  if (!s) return "-"
  return new Date(s).toISOString().slice(0, 10)
}

type IndexingResult = {
  url: string
  verdict: string | null
  coverageState: string | null
  lastCrawlTime: string | null
  googleCanonical: string | null
  pageFetchState: string | null
  error?: string
}

type IndexingData = {
  summary: { indexed: number; notIndexed: number; error: number; total: number }
  results: IndexingResult[]
}

function Delta({ value }: { value: number }) {
  if (value === 0) return <span className="text-[#C9C2B0]">0</span>
  const arrow = value > 0 ? "▲" : "▼"
  const color = value > 0 ? "text-[#3fa057]" : "text-[#B8252F]"
  const sign = value > 0 ? "+" : ""
  return (
    <span className={color}>
      {arrow} {sign}{value}
    </span>
  )
}

export default function AdminDashboard() {
  const router = useRouter()
  const [data, setData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lastFetch, setLastFetch] = useState<Date | null>(null)
  const [indexing, setIndexing] = useState<IndexingData | null>(null)
  const [indexingLoading, setIndexingLoading] = useState(false)
  const [indexingError, setIndexingError] = useState<string | null>(null)

  async function loadIndexing() {
    setIndexingLoading(true)
    setIndexingError(null)
    try {
      const res = await fetch("/api/admin/indexing", { cache: "no-store" })
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string }
        setIndexingError(body.error || `HTTP ${res.status}`)
        return
      }
      setIndexing((await res.json()) as IndexingData)
    } catch (e) {
      setIndexingError(e instanceof Error ? e.message : "Network error")
    } finally {
      setIndexingLoading(false)
    }
  }

  async function load() {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch("/api/admin/data", { cache: "no-store" })
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string }
        setError(body.error || `HTTP ${res.status}`)
        setLoading(false)
        return
      }
      const json = (await res.json()) as DashboardData
      setData(json)
      setLastFetch(new Date())
    } catch (e) {
      setError(e instanceof Error ? e.message : "Network error")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
  }, [])

  async function logout() {
    await fetch("/api/admin/login", { method: "DELETE" })
    router.push("/admin/login")
  }

  return (
    <main className="min-h-screen bg-[#08111E] text-[#F2EEE5] pb-20">
      <header className="border-b border-[#1F2D40] bg-[#0E1A2B]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="label-mono text-[#B8252F]">Cowart SEO</div>
            <h1 className="display-serif text-xl">Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            {lastFetch && (
              <span className="label-mono text-[#C9C2B0] opacity-60">
                last: {lastFetch.toLocaleTimeString()}
              </span>
            )}
            <button
              onClick={load}
              disabled={loading}
              className="label-mono bg-[#1F2D40] hover:bg-[#2A3850] text-[#F2EEE5] px-4 py-2 transition-colors disabled:opacity-50"
            >
              {loading ? "Refreshing…" : "Refresh"}
            </button>
            <button
              onClick={logout}
              className="label-mono border border-[#1F2D40] hover:border-[#C9C2B0] text-[#F2EEE5] px-4 py-2 transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-8 space-y-10">
        {loading && !data && (
          <div className="label-mono text-[#C9C2B0]">Loading GSC data…</div>
        )}

        {error && (
          <div className="border border-[#B8252F] bg-[#1F2D40] p-4">
            <div className="label-mono text-[#B8252F] mb-2">Error</div>
            <div className="text-sm">{error}</div>
          </div>
        )}

        {data && (
          <>
            {/* TOTALS */}
            <section>
              <div className="label-mono text-[#B8252F] mb-4">
               28-day window · {data.window.recentStart} → {data.window.recentEnd}
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="border border-[#1F2D40] bg-[#0E1A2B] p-6">
                  <div className="label-mono text-[#C9C2B0] mb-2">Clicks</div>
                  <div className="display-serif text-4xl">{data.totals.clicks}</div>
                  <div className="label-mono mt-2">
                    <Delta value={data.totals.clicks - data.priorTotals.clicks} />
                    <span className="text-[#C9C2B0] opacity-60 ml-2">
                      vs. prior {data.priorTotals.clicks}
                    </span>
                  </div>
                </div>
                <div className="border border-[#1F2D40] bg-[#0E1A2B] p-6">
                  <div className="label-mono text-[#C9C2B0] mb-2">Impressions</div>
                  <div className="display-serif text-4xl">{data.totals.impressions}</div>
                  <div className="label-mono mt-2">
                    <Delta value={data.totals.impressions - data.priorTotals.impressions} />
                    <span className="text-[#C9C2B0] opacity-60 ml-2">
                      vs. prior {data.priorTotals.impressions}
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* INDEXING STATUS */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <div className="label-mono text-[#B8252F]">Indexing status (Google)</div>
                <button
                  onClick={loadIndexing}
                  disabled={indexingLoading}
                  className="label-mono bg-[#1F2D40] hover:bg-[#2A3850] text-[#F2EEE5] px-4 py-2 transition-colors disabled:opacity-50"
                >
                  {indexingLoading ? "Checking… (~30s)" : indexing ? "Re-check" : "Check indexing status"}
                </button>
              </div>
              {indexingError && (
                <div className="border border-[#B8252F] bg-[#1F2D40] p-4 mb-4 text-sm">
                  {indexingError}
                </div>
              )}
              {indexing && (
                <>
                  <div className="flex gap-6 mb-4 label-mono">
                    <span className="text-[#3fa057]">{indexing.summary.indexed} indexed</span>
                    <span className="text-[#C9C2B0]">{indexing.summary.notIndexed} not indexed</span>
                    {indexing.summary.error > 0 && (
                      <span className="text-[#B8252F]">{indexing.summary.error} error</span>
                    )}
                    <span className="text-[#C9C2B0] opacity-60">of {indexing.summary.total}</span>
                  </div>
                  <div className="border border-[#1F2D40] bg-[#0E1A2B] overflow-hidden">
                    <table className="w-full text-sm">
                      <thead className="bg-[#08111E]">
                        <tr className="label-mono text-[#C9C2B0] text-left">
                          <th className="px-4 py-3">Page</th>
                          <th className="px-4 py-3">Coverage</th>
                          <th className="px-4 py-3">Last crawl</th>
                        </tr>
                      </thead>
                      <tbody>
                        {indexing.results.map((r, i) => {
                          const ok = r.verdict === "PASS"
                          return (
                            <tr key={i} className="border-t border-[#1F2D40]">
                              <td className="px-4 py-2 font-mono text-xs">{shortUrl(r.url)}</td>
                              <td className="px-4 py-2">
                                <span className={ok ? "text-[#3fa057]" : "text-[#d98b2b]"}>
                                  {r.error ? "error" : r.coverageState || r.verdict || "-"}
                                </span>
                              </td>
                              <td className="px-4 py-2 text-xs text-[#C9C2B0]">{fmtDate(r.lastCrawlTime)}</td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
              {!indexing && !indexingLoading && !indexingError && (
                <div className="border border-[#1F2D40] bg-[#0E1A2B] p-4 text-sm text-[#C9C2B0] opacity-60">
                  Click &ldquo;Check indexing status&rdquo; to inspect all {28} URLs via the Google
                  URL Inspection API. Takes ~30 seconds.
                </div>
              )}
            </section>

            {/* PAGE-1 CANDIDATES */}
            <section>
              <div className="label-mono text-[#B8252F] mb-4">Page-1 candidates (pos 11-20)</div>
              <div className="border border-[#1F2D40] bg-[#0E1A2B] overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-[#08111E]">
                    <tr className="label-mono text-[#C9C2B0] text-left">
                      <th className="px-4 py-3">Query</th>
                      <th className="px-4 py-3">Page</th>
                      <th className="px-4 py-3 text-right">Imp</th>
                      <th className="px-4 py-3 text-right">Pos</th>
                      <th className="px-4 py-3 text-right">CTR</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.page1Candidates.length === 0 && (
                      <tr>
                        <td colSpan={5} className="px-4 py-4 text-[#C9C2B0] opacity-60">
                          None this window.
                        </td>
                      </tr>
                    )}
                    {data.page1Candidates.map((c, i) => (
                      <tr key={i} className="border-t border-[#1F2D40]">
                        <td className="px-4 py-2">{c.query}</td>
                        <td className="px-4 py-2 font-mono text-xs">
                          <a
                            href={c.url}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-[#B8252F]"
                          >
                            {shortUrl(c.url)}
                          </a>
                        </td>
                        <td className="px-4 py-2 text-right">{c.impressions}</td>
                        <td className="px-4 py-2 text-right">{c.position.toFixed(1)}</td>
                        <td className="px-4 py-2 text-right">{pct(c.ctr)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* CTR UNDERPERFORMERS */}
            <section>
              <div className="label-mono text-[#B8252F] mb-4">
               CTR underperformers (≥100 imp, &lt;2% CTR)
              </div>
              <div className="border border-[#1F2D40] bg-[#0E1A2B] overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-[#08111E]">
                    <tr className="label-mono text-[#C9C2B0] text-left">
                      <th className="px-4 py-3">Page</th>
                      <th className="px-4 py-3 text-right">Imp</th>
                      <th className="px-4 py-3 text-right">Clicks</th>
                      <th className="px-4 py-3 text-right">CTR</th>
                      <th className="px-4 py-3 text-right">Pos</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.ctrUnderperformers.length === 0 && (
                      <tr>
                        <td colSpan={5} className="px-4 py-4 text-[#C9C2B0] opacity-60">
                          None this window.
                        </td>
                      </tr>
                    )}
                    {data.ctrUnderperformers.map((p, i) => (
                      <tr key={i} className="border-t border-[#1F2D40]">
                        <td className="px-4 py-2 font-mono text-xs">
                          <a
                            href={p.url}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-[#B8252F]"
                          >
                            {shortUrl(p.url)}
                          </a>
                        </td>
                        <td className="px-4 py-2 text-right">{p.impressions}</td>
                        <td className="px-4 py-2 text-right">{p.clicks}</td>
                        <td className="px-4 py-2 text-right">{pct(p.ctr)}</td>
                        <td className="px-4 py-2 text-right">{p.position.toFixed(1)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* TRENDING + NEW */}
            <div className="grid lg:grid-cols-2 gap-6">
              <section>
                <div className="label-mono text-[#B8252F] mb-4">Trending up (WoW)</div>
                <div className="border border-[#1F2D40] bg-[#0E1A2B] overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-[#08111E]">
                      <tr className="label-mono text-[#C9C2B0] text-left">
                        <th className="px-4 py-3">Query</th>
                        <th className="px-4 py-3 text-right">Δ</th>
                        <th className="px-4 py-3 text-right">Now</th>
                        <th className="px-4 py-3 text-right">Pos</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.trendingUp.map((q, i) => (
                        <tr key={i} className="border-t border-[#1F2D40]">
                          <td className="px-4 py-2">{q.query}</td>
                          <td className="px-4 py-2 text-right text-[#3fa057]">+{q.delta}</td>
                          <td className="px-4 py-2 text-right">{q.impressions}</td>
                          <td className="px-4 py-2 text-right">{q.position.toFixed(1)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
              <section>
                <div className="label-mono text-[#B8252F] mb-4">Trending down (WoW)</div>
                <div className="border border-[#1F2D40] bg-[#0E1A2B] overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-[#08111E]">
                      <tr className="label-mono text-[#C9C2B0] text-left">
                        <th className="px-4 py-3">Query</th>
                        <th className="px-4 py-3 text-right">Δ</th>
                        <th className="px-4 py-3 text-right">Now</th>
                        <th className="px-4 py-3 text-right">Pos</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.trendingDown.map((q, i) => (
                        <tr key={i} className="border-t border-[#1F2D40]">
                          <td className="px-4 py-2">{q.query}</td>
                          <td className="px-4 py-2 text-right text-[#B8252F]">{q.delta}</td>
                          <td className="px-4 py-2 text-right">{q.impressions}</td>
                          <td className="px-4 py-2 text-right">{q.position.toFixed(1)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </div>

            {/* NEW QUERIES */}
            <section>
              <div className="label-mono text-[#B8252F] mb-4">New queries</div>
              <div className="border border-[#1F2D40] bg-[#0E1A2B] overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-[#08111E]">
                    <tr className="label-mono text-[#C9C2B0] text-left">
                      <th className="px-4 py-3">Query</th>
                      <th className="px-4 py-3 text-right">Imp</th>
                      <th className="px-4 py-3 text-right">Pos</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.newQueries.length === 0 && (
                      <tr>
                        <td colSpan={3} className="px-4 py-4 text-[#C9C2B0] opacity-60">
                          No new queries this window.
                        </td>
                      </tr>
                    )}
                    {data.newQueries.map((q, i) => (
                      <tr key={i} className="border-t border-[#1F2D40]">
                        <td className="px-4 py-2">{q.query}</td>
                        <td className="px-4 py-2 text-right">{q.impressions}</td>
                        <td className="px-4 py-2 text-right">{q.position.toFixed(1)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* SITEMAPS */}
            {data.sitemaps.length > 0 && (
              <section>
                <div className="label-mono text-[#B8252F] mb-4">Sitemaps</div>
                <div className="border border-[#1F2D40] bg-[#0E1A2B] overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-[#08111E]">
                      <tr className="label-mono text-[#C9C2B0] text-left">
                        <th className="px-4 py-3">Path</th>
                        <th className="px-4 py-3">Last Submitted</th>
                        <th className="px-4 py-3">Last Read</th>
                        <th className="px-4 py-3 text-right">Warnings</th>
                        <th className="px-4 py-3 text-right">Errors</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.sitemaps.map((s, i) => (
                        <tr key={i} className="border-t border-[#1F2D40]">
                          <td className="px-4 py-2 font-mono text-xs">{s.path}</td>
                          <td className="px-4 py-2">{fmtDate(s.lastSubmitted)}</td>
                          <td className="px-4 py-2">{fmtDate(s.lastDownloaded)}</td>
                          <td className="px-4 py-2 text-right">{s.warnings}</td>
                          <td className="px-4 py-2 text-right">{s.errors}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}
          </>
        )}
      </div>
    </main>
  )
}
