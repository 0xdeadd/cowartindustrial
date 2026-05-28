#!/usr/bin/env node
// Competitor change watcher.
//
// Fetches a fixed list of competitor pages, extracts structural signals
// (title, meta description, h1-h3 headings, body word count), diffs against
// the last stored snapshot, and writes a markdown report of what changed.
// First run captures a baseline. Intended to run monthly.
//
// Run: npm run seo:competitors
//
// Snapshots: data/competitor-snapshots/<slug>.json
// Reports:   docs/competitor-reports/YYYY-MM-DD.md

import { mkdir, readFile, writeFile } from "node:fs/promises"
import { existsSync } from "node:fs"

const COMPETITORS = [
  { name: "Environmental Remedies — Industrial Services", url: "https://envremedies.com/industrial-services" },
  { name: "Environmental Remedies — Wastewater Treatment", url: "https://envremedies.com/wastewater-treatment-services" },
  { name: "Environmental Remedies — Oil-Water Separator", url: "https://envremedies.com/industrial-services/oil-water-separator-cleaning-services" },
  { name: "Callaway Industrial Services — Home", url: "https://callawayindustrial.com/" },
  { name: "Green Shield Environmental — Industrial Cleaning", url: "https://www.greenshieldenv.com/industrial-services/industrial-cleaning-services" },
]

const SNAPSHOT_DIR = "data/competitor-snapshots"
const REPORT_DIR = "docs/competitor-reports"
const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36"

const RED = "\x1b[31m"
const GREEN = "\x1b[32m"
const YELLOW = "\x1b[33m"
const DIM = "\x1b[2m"
const RESET = "\x1b[0m"

function slugify(url) {
  return url
    .replace(/^https?:\/\//, "")
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/^-+|-+$/g, "")
}

function decode(s) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
}

function extractSignals(html) {
  const title = decode((html.match(/<title>([^<]*)<\/title>/i)?.[1] || "").trim())
  const desc = decode((html.match(/<meta\s+name="description"\s+content="([^"]*)"/i)?.[1] || "").trim())

  const headings = []
  const re = /<(h[123])[^>]*>([\s\S]*?)<\/\1>/gi
  let m
  while ((m = re.exec(html)) !== null) {
    const text = decode(m[2].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim())
    if (text) headings.push(`${m[1].toLowerCase()}: ${text}`)
  }

  const bodyText = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
  const wordCount = bodyText.split(" ").filter(Boolean).length

  return { title, desc, headings, wordCount }
}

async function loadSnapshot(slug) {
  const path = `${SNAPSHOT_DIR}/${slug}.json`
  if (!existsSync(path)) return null
  try {
    return JSON.parse(await readFile(path, "utf8"))
  } catch {
    return null
  }
}

function diffSignals(prev, next) {
  const changes = []
  if (prev.title !== next.title) {
    changes.push(`**Title changed**\n  - was: ${prev.title || "(empty)"}\n  - now: ${next.title || "(empty)"}`)
  }
  if (prev.desc !== next.desc) {
    changes.push(`**Meta description changed**\n  - was: ${prev.desc || "(empty)"}\n  - now: ${next.desc || "(empty)"}`)
  }

  const prevSet = new Set(prev.headings)
  const nextSet = new Set(next.headings)
  const added = next.headings.filter((h) => !prevSet.has(h))
  const removed = prev.headings.filter((h) => !nextSet.has(h))
  if (added.length) changes.push(`**Headings added (${added.length}):**\n` + added.map((h) => `  + ${h}`).join("\n"))
  if (removed.length) changes.push(`**Headings removed (${removed.length}):**\n` + removed.map((h) => `  - ${h}`).join("\n"))

  const wcDelta = next.wordCount - prev.wordCount
  const wcPct = prev.wordCount ? Math.abs(wcDelta) / prev.wordCount : 1
  if (wcPct >= 0.1) {
    changes.push(`**Word count ${wcDelta > 0 ? "up" : "down"} ${Math.abs(wcDelta)}** (${prev.wordCount} → ${next.wordCount})`)
  }

  return changes
}

async function main() {
  await mkdir(SNAPSHOT_DIR, { recursive: true })
  await mkdir(REPORT_DIR, { recursive: true })

  const today = new Date().toISOString().slice(0, 10)
  const sections = []
  let changeCount = 0
  let baselineCount = 0

  for (const comp of COMPETITORS) {
    const slug = slugify(comp.url)
    process.stdout.write(`${DIM}Fetching ${comp.url}…${RESET}\n`)

    let html
    try {
      const res = await fetch(comp.url, { headers: { "User-Agent": UA } })
      if (!res.ok) {
        sections.push(`### ${comp.name}\n\n⚠️ Fetch failed: HTTP ${res.status} — ${comp.url}\n`)
        continue
      }
      html = await res.text()
    } catch (e) {
      sections.push(`### ${comp.name}\n\n⚠️ Fetch error: ${e.message} — ${comp.url}\n`)
      continue
    }

    const next = extractSignals(html)
    const prev = await loadSnapshot(slug)

    if (!prev) {
      baselineCount++
      sections.push(
        `### ${comp.name}\n\n` +
          `_Baseline captured._ ${next.headings.length} headings, ${next.wordCount} words.\n\n` +
          `<${comp.url}>\n`,
      )
    } else {
      const changes = diffSignals(prev, next)
      if (changes.length === 0) {
        sections.push(`### ${comp.name}\n\n_No changes._ (${next.headings.length} headings, ${next.wordCount} words)\n`)
      } else {
        changeCount++
        sections.push(
          `### ${comp.name}\n\n` +
            `<${comp.url}>\n\n` +
            changes.join("\n\n") +
            "\n",
        )
      }
    }

    // Save new snapshot
    await writeFile(`${SNAPSHOT_DIR}/${slug}.json`, JSON.stringify({ ...next, url: comp.url, capturedAt: today }, null, 2))
  }

  const md =
    `# Competitor watch — ${today}\n\n` +
    (baselineCount > 0
      ? `_${baselineCount} baseline(s) captured this run; diffs start next run._\n\n`
      : "") +
    `**${changeCount} competitor page(s) changed since last run.**\n\n` +
    "---\n\n" +
    sections.join("\n---\n\n") +
    `\n\n_Generated ${new Date().toISOString()} from scripts/competitor-watch.mjs._\n`

  const filename = `${REPORT_DIR}/${today}.md`
  await writeFile(filename, md)

  console.log(`${GREEN}Report written:${RESET} ${filename}`)
  if (baselineCount > 0) console.log(`${YELLOW}${baselineCount} baseline(s) captured.${RESET}`)
  console.log(`${changeCount > 0 ? YELLOW : DIM}${changeCount} page(s) changed.${RESET}`)
}

main().catch((e) => {
  console.error(`${RED}competitor-watch error:${RESET}`, e.message)
  process.exit(1)
})
