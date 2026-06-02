#!/usr/bin/env node
// SEO linter, runs after `next build`, checks the prerendered HTML output for
// SEO regressions:
//   - <title> length ≤ 60 chars (Google SERP truncation threshold)
//   - meta description length ≤ 160 chars (same)
//   - meta description present and non-empty
//   - canonical link present
//   - <h1> present (exactly one)
//   - JSON-LD blocks parse as valid JSON and have a @type field
//
// Exit code 0 on pass, 1 on any failure. Wire via package.json `postbuild`
// so build fails if SEO regressions ship.
//
// Reads from .next/server/app/**/*.html, Next 16 prerenders every static
// route there (including dynamic /services/[slug] entries with generateStaticParams).

import { readdir, readFile, stat } from "node:fs/promises"
import { join } from "node:path"

const ROOT = ".next/server/app"
const TITLE_MAX = 60
const DESC_MAX = 160

// Routes intentionally excluded, Next.js error pages aren't user-facing for SEO.
const EXCLUDE = new Set(["_not-found.html", "_global-error.html"])

const RED = "\x1b[31m"
const GREEN = "\x1b[32m"
const YELLOW = "\x1b[33m"
const DIM = "\x1b[2m"
const RESET = "\x1b[0m"

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const e of entries) {
    const path = join(dir, e.name)
    if (e.isDirectory()) {
      files.push(...(await walk(path)))
    } else if (e.name.endsWith(".html") && !EXCLUDE.has(e.name)) {
      files.push(path)
    }
  }
  return files
}

function decodeEntities(s) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
}

function extract(html) {
  const titleMatch = html.match(/<title>([^<]*)<\/title>/)
  const title = titleMatch ? decodeEntities(titleMatch[1]) : null

  const descMatch = html.match(/<meta\s+name="description"\s+content="([^"]*)"/)
  const description = descMatch ? decodeEntities(descMatch[1]) : null

  const canonicalMatch = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/)
  const canonical = canonicalMatch ? canonicalMatch[1] : null

  const h1Count = (html.match(/<h1[\s>]/g) || []).length

  const ldBlocks = []
  const ldRegex = /<script\s+type="application\/ld\+json"[^>]*>([^<]+)<\/script>/g
  let m
  while ((m = ldRegex.exec(html)) !== null) {
    ldBlocks.push(m[1])
  }

  return { title, description, canonical, h1Count, ldBlocks }
}

function routeFromPath(path) {
  // .next/server/app/services/hydro-blasting.html → /services/hydro-blasting
  // .next/server/app/index.html → /
  let route = path.replace(/^\.next\/server\/app/, "").replace(/\.html$/, "")
  if (route === "/index" || route === "") return "/"
  return route
}

async function lintFile(path) {
  const html = await readFile(path, "utf-8")
  const { title, description, canonical, h1Count, ldBlocks } = extract(html)
  const route = routeFromPath(path)
  const errors = []
  const warnings = []

  if (!title) {
    errors.push("no <title> tag")
  } else if (title.length > TITLE_MAX) {
    errors.push(`title ${title.length} chars > ${TITLE_MAX}: "${title}"`)
  }

  if (!description) {
    errors.push("no meta description")
  } else if (description.length > DESC_MAX) {
    errors.push(`description ${description.length} chars > ${DESC_MAX}: "${description.slice(0, 80)}..."`)
  }

  if (!canonical) warnings.push("no canonical link")

  if (h1Count === 0) {
    errors.push("no <h1> tag")
  } else if (h1Count > 1) {
    warnings.push(`${h1Count} <h1> tags (expected 1)`)
  }

  if (ldBlocks.length === 0) {
    warnings.push("no JSON-LD blocks")
  } else {
    ldBlocks.forEach((raw, i) => {
      try {
        const parsed = JSON.parse(raw)
        if (!parsed["@type"] && !Array.isArray(parsed)) {
          errors.push(`JSON-LD block ${i + 1}: missing @type field`)
        }
      } catch (e) {
        errors.push(`JSON-LD block ${i + 1}: invalid JSON (${e.message})`)
      }
    })
  }

  return { route, title, description, errors, warnings }
}

async function main() {
  try {
    await stat(ROOT)
  } catch {
    console.error(`${RED}error:${RESET} ${ROOT} not found. Run \`next build\` first.`)
    process.exit(1)
  }

  const files = await walk(ROOT)
  files.sort()

  let totalErrors = 0
  let totalWarnings = 0
  const results = []

  for (const f of files) {
    const r = await lintFile(f)
    totalErrors += r.errors.length
    totalWarnings += r.warnings.length
    results.push(r)
  }

  console.log(`\n${DIM}SEO lint, ${files.length} routes checked${RESET}\n`)

  for (const r of results) {
    const status = r.errors.length > 0 ? `${RED}✗${RESET}` : r.warnings.length > 0 ? `${YELLOW}⚠${RESET}` : `${GREEN}✓${RESET}`
    const tlen = r.title?.length ?? 0
    const dlen = r.description?.length ?? 0
    console.log(`${status} ${r.route.padEnd(44)}  T:${String(tlen).padStart(3)}  D:${String(dlen).padStart(3)}`)
    for (const e of r.errors) console.log(`    ${RED}error:${RESET} ${e}`)
    for (const w of r.warnings) console.log(`    ${YELLOW}warn:${RESET}  ${w}`)
  }

  console.log()
  if (totalErrors > 0) {
    console.error(`${RED}SEO lint failed: ${totalErrors} error(s), ${totalWarnings} warning(s)${RESET}\n`)
    process.exit(1)
  }
  console.log(`${GREEN}SEO lint passed${RESET}${totalWarnings > 0 ? ` (${totalWarnings} warning(s))` : ""}\n`)
}

main().catch((e) => {
  console.error(`${RED}lint script error:${RESET}`, e)
  process.exit(1)
})
