#!/usr/bin/env node
// Weekly Google Search Console opportunity report.
//
// Pulls last 28 days of GSC data, compares to the prior 28-day window, and
// surfaces what to act on this week:
//   - Page-1 candidates (queries ranking pos 11-20 — one push from page 1)
//   - CTR underperformers (>100 imp, <2% CTR — meta description rewrite candidates)
//   - Queries trending up/down WoW
//   - New queries (terms we just started showing for)
//
// Output: markdown file at docs/seo-reports/YYYY-MM-DD.md
//
// Auth: Application Default Credentials (ADC). One-time setup:
//   gcloud auth application-default login
// The googleapis library picks up the cached credentials from
// ~/.config/gcloud/application_default_credentials.json automatically.
//
// (We originally planned to use a service account, but Google has a known
// bug since 2026-04-23 that blocks adding new service accounts to GSC.
// ADC sidesteps the bug entirely by authenticating as you — your Google
// account already has GSC access. See docs/gsc-api-setup.md.)
//
// Run: npm run seo:report

import { mkdir, writeFile } from "node:fs/promises"
import { google } from "googleapis"

const PROPERTY = process.env.GSC_PROPERTY || "https://cowartind.com"
const PERIOD_DAYS = 28
const OUTPUT_DIR = "docs/seo-reports"

const RED = "\x1b[31m"
const GREEN = "\x1b[32m"
const YELLOW = "\x1b[33m"
const DIM = "\x1b[2m"
const RESET = "\x1b[0m"

function iso(d) {
  return d.toISOString().slice(0, 10)
}

function pct(n, digits = 2) {
  return (n * 100).toFixed(digits) + "%"
}

function authenticate() {
  // Application Default Credentials — googleapis checks (in order):
  //   1. GOOGLE_APPLICATION_CREDENTIALS env var
  //   2. ~/.config/gcloud/application_default_credentials.json (set by
  //      `gcloud auth application-default login`)
  //   3. GCE/Vercel metadata server (won't apply locally)
  return new google.auth.GoogleAuth({
    scopes: ["https://www.googleapis.com/auth/webmasters.readonly"],
  })
}

async function verifyAuth(auth) {
  try {
    await auth.getClient()
  } catch (e) {
    console.error(
      `${RED}error:${RESET} could not find Application Default Credentials.\n\n` +
        `       Fix: run this once in your terminal:\n` +
        `         ${DIM}gcloud auth application-default login${RESET}\n\n` +
        `       That opens a browser, you log in with the Google account that\n` +
        `       has access to the GSC property (clintdotphillips@gmail.com),\n` +
        `       and the credentials get cached locally. After that this script\n` +
        `       works.\n\n` +
        `       Original error: ${e.message}`,
    )
    process.exit(1)
  }
}

async function querySearchAnalytics(searchconsole, requestBody) {
  const { data } = await searchconsole.searchanalytics.query({
    siteUrl: PROPERTY,
    requestBody,
  })
  return data.rows || []
}

async function main() {
  console.log(`${DIM}Authenticating with GSC API…${RESET}`)
  const auth = authenticate()
  await verifyAuth(auth)
  const searchconsole = google.searchconsole({ version: "v1", auth })

  // Date windows
  const today = new Date()
  const recentEnd = new Date(today.getTime() - 2 * 86_400_000) // GSC data lags ~2 days
  const recentStart = new Date(recentEnd.getTime() - PERIOD_DAYS * 86_400_000)
  const priorEnd = recentStart
  const priorStart = new Date(priorEnd.getTime() - PERIOD_DAYS * 86_400_000)

  const recentRange = { startDate: iso(recentStart), endDate: iso(recentEnd) }
  const priorRange = { startDate: iso(priorStart), endDate: iso(priorEnd) }

  console.log(`${DIM}Fetching: recent ${recentRange.startDate} → ${recentRange.endDate}${RESET}`)
  console.log(`${DIM}Fetching: prior  ${priorRange.startDate} → ${priorRange.endDate}${RESET}`)

  const [recentByQuery, priorByQuery, recentByPage, recentByQueryPage] = await Promise.all([
    querySearchAnalytics(searchconsole, { ...recentRange, dimensions: ["query"], rowLimit: 1000 }),
    querySearchAnalytics(searchconsole, { ...priorRange, dimensions: ["query"], rowLimit: 1000 }),
    querySearchAnalytics(searchconsole, { ...recentRange, dimensions: ["page"], rowLimit: 500 }),
    querySearchAnalytics(searchconsole, { ...recentRange, dimensions: ["query", "page"], rowLimit: 1000 }),
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

  // Page-1 candidates: queries ranking pos 11-20 with ≥5 impressions
  const page1Candidates = recentByQueryPage
    .filter((r) => r.position >= 11 && r.position <= 20 && r.impressions >= 5)
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 25)

  // CTR underperformers: pages with ≥100 impressions and CTR <2%
  const ctrUnderperformers = recentByPage
    .filter((r) => r.impressions >= 100 && r.ctr < 0.02)
    .sort((a, b) => b.impressions - a.impressions)

  // Trending: WoW delta on impressions
  const priorMap = new Map(priorByQuery.map((r) => [r.keys[0], r]))
  const queryWithDelta = recentByQuery
    .filter((r) => r.impressions >= 5)
    .map((r) => {
      const prior = priorMap.get(r.keys[0])
      const priorImp = prior?.impressions || 0
      return {
        query: r.keys[0],
        impressions: r.impressions,
        priorImpressions: priorImp,
        delta: r.impressions - priorImp,
        position: r.position,
        ctr: r.ctr,
        isNew: !prior,
      }
    })

  const trendingUp = queryWithDelta
    .filter((q) => !q.isNew && q.delta > 0)
    .sort((a, b) => b.delta - a.delta)
    .slice(0, 15)

  const trendingDown = queryWithDelta
    .filter((q) => !q.isNew && q.delta < -2)
    .sort((a, b) => a.delta - b.delta)
    .slice(0, 10)

  const newQueries = queryWithDelta
    .filter((q) => q.isNew)
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 15)

  // Format markdown
  const md = formatReport({
    today,
    recentRange,
    priorRange,
    totals,
    priorTotals,
    page1Candidates,
    ctrUnderperformers,
    trendingUp,
    trendingDown,
    newQueries,
  })

  await mkdir(OUTPUT_DIR, { recursive: true })
  const filename = `${OUTPUT_DIR}/${iso(today)}.md`
  await writeFile(filename, md)

  console.log(`${GREEN}Report written:${RESET} ${filename}`)
  console.log(
    `${DIM}Totals: ${totals.clicks} clicks / ${totals.impressions} impressions (prior: ${priorTotals.clicks} / ${priorTotals.impressions})${RESET}`,
  )
  console.log(`${DIM}Found: ${page1Candidates.length} page-1 candidates, ${ctrUnderperformers.length} CTR underperformers, ${newQueries.length} new queries${RESET}`)
}

function formatReport(r) {
  const dateStr = iso(r.today)
  const recentLabel = `${r.recentRange.startDate} → ${r.recentRange.endDate}`
  const priorLabel = `${r.priorRange.startDate} → ${r.priorRange.endDate}`

  const clicksDelta = r.totals.clicks - r.priorTotals.clicks
  const impDelta = r.totals.impressions - r.priorTotals.impressions
  const arrow = (n) => (n > 0 ? "▲" : n < 0 ? "▼" : "—")

  const lines = []
  lines.push(`# SEO weekly report — ${dateStr}`)
  lines.push("")
  lines.push(`**Window:** ${recentLabel} (28 days)`)
  lines.push(`**Compared to:** ${priorLabel}`)
  lines.push("")
  lines.push("## Totals")
  lines.push("")
  lines.push(`| Metric | Recent | Prior | Δ |`)
  lines.push(`|---|---:|---:|---:|`)
  lines.push(`| Clicks | ${r.totals.clicks} | ${r.priorTotals.clicks} | ${arrow(clicksDelta)} ${clicksDelta > 0 ? "+" : ""}${clicksDelta} |`)
  lines.push(`| Impressions | ${r.totals.impressions} | ${r.priorTotals.impressions} | ${arrow(impDelta)} ${impDelta > 0 ? "+" : ""}${impDelta} |`)
  lines.push("")

  lines.push("## Page-1 candidates (queries ranking pos 11–20)")
  lines.push("")
  lines.push("These are queries one push away from page 1. Improving the matched page's content or internal links should move them into clicks range.")
  lines.push("")
  if (r.page1Candidates.length === 0) {
    lines.push("_None this week._")
  } else {
    lines.push("| Query | Page | Imp | Pos | CTR |")
    lines.push("|---|---|---:|---:|---:|")
    for (const c of r.page1Candidates) {
      const [query, page] = c.keys
      const shortPage = page.replace(PROPERTY, "") || "/"
      lines.push(`| ${escapeMd(query)} | \`${shortPage}\` | ${c.impressions} | ${c.position.toFixed(1)} | ${pct(c.ctr)} |`)
    }
  }
  lines.push("")

  lines.push("## CTR underperformers (≥100 imp, <2% CTR)")
  lines.push("")
  lines.push("These pages get traffic but few clicks — meta description and title likely need a rewrite to be more click-worthy.")
  lines.push("")
  if (r.ctrUnderperformers.length === 0) {
    lines.push("_No pages flagged this week._")
  } else {
    lines.push("| Page | Imp | Clicks | CTR | Pos |")
    lines.push("|---|---:|---:|---:|---:|")
    for (const p of r.ctrUnderperformers) {
      const page = p.keys[0]
      const shortPage = page.replace(PROPERTY, "") || "/"
      lines.push(`| \`${shortPage}\` | ${p.impressions} | ${p.clicks} | ${pct(p.ctr)} | ${p.position.toFixed(1)} |`)
    }
  }
  lines.push("")

  lines.push("## Trending up (WoW)")
  lines.push("")
  if (r.trendingUp.length === 0) {
    lines.push("_No notable risers this week._")
  } else {
    lines.push("| Query | Prior | Recent | Δ | Pos |")
    lines.push("|---|---:|---:|---:|---:|")
    for (const q of r.trendingUp) {
      lines.push(`| ${escapeMd(q.query)} | ${q.priorImpressions} | ${q.impressions} | +${q.delta} | ${q.position.toFixed(1)} |`)
    }
  }
  lines.push("")

  lines.push("## Trending down (WoW)")
  lines.push("")
  if (r.trendingDown.length === 0) {
    lines.push("_No notable decliners this week._")
  } else {
    lines.push("| Query | Prior | Recent | Δ | Pos |")
    lines.push("|---|---:|---:|---:|---:|")
    for (const q of r.trendingDown) {
      lines.push(`| ${escapeMd(q.query)} | ${q.priorImpressions} | ${q.impressions} | ${q.delta} | ${q.position.toFixed(1)} |`)
    }
  }
  lines.push("")

  lines.push("## New queries (first appearance this window)")
  lines.push("")
  lines.push("Terms we just started showing for. Signals what new content is resonating with Google.")
  lines.push("")
  if (r.newQueries.length === 0) {
    lines.push("_No new queries this week._")
  } else {
    lines.push("| Query | Imp | Pos |")
    lines.push("|---|---:|---:|")
    for (const q of r.newQueries) {
      lines.push(`| ${escapeMd(q.query)} | ${q.impressions} | ${q.position.toFixed(1)} |`)
    }
  }
  lines.push("")
  lines.push("---")
  lines.push("")
  lines.push(`_Generated ${r.today.toISOString()} from \`scripts/gsc-report.mjs\`._`)

  return lines.join("\n") + "\n"
}

function escapeMd(s) {
  return s.replace(/\|/g, "\\|")
}

main().catch((e) => {
  console.error(`${RED}gsc-report error:${RESET}`, e.message)
  if (e.errors) console.error(e.errors)
  process.exit(1)
})
