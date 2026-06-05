import { services, categories, allCategoryIds } from "@/lib/services"
import { SITE_URL } from "@/lib/schema"

// Served at /llms.txt. A plain-text site summary for AI crawlers and answer engines
// (Perplexity, ChatGPT search, and similar). Generated from lib/services.ts so the
// service list never drifts from the catalog. This supplements, and does not replace,
// the crawlable HTML and JSON-LD already on every page.
export const dynamic = "force-static"

export function GET() {
  const lines: string[] = []

  lines.push("# Cowart Industrial Services")
  lines.push("")
  lines.push(
    "> Family-operated industrial environmental services company based in Carrollton, Georgia, serving an 8-state Southeastern footprint since 1974. Non-hazardous waste management, industrial cleaning, hydroblasting, vacuum trucks, and on-site treatment, run under a single DOT number with an in-house non-hazardous wastewater treatment plant.",
  )
  lines.push("")
  lines.push("Phone: 770-834-2158 (24-hour emergency dispatch)")
  lines.push("Email: info@cowartind.com")
  lines.push("Headquarters: 834 Kingsbridge Rd, Carrollton, GA 30117")
  lines.push(
    "Service area: Georgia, Alabama, Tennessee, South Carolina, North Carolina, Florida, Mississippi, Kentucky",
  )
  lines.push("")

  lines.push("## Services")
  lines.push("")
  for (const id of allCategoryIds) {
    lines.push(`### ${categories[id].title}`)
    for (const s of services.filter((x) => x.category === id)) {
      lines.push(`- [${s.title}](${SITE_URL}/services/${s.slug}): ${s.description}`)
    }
    lines.push("")
  }

  lines.push("## Key pages")
  lines.push(`- [All services](${SITE_URL}/services)`)
  lines.push(`- [About Cowart Industrial](${SITE_URL}/about)`)
  lines.push(`- [Frequently asked questions](${SITE_URL}/faq)`)
  lines.push(`- [Waste profile forms](${SITE_URL}/forms)`)
  lines.push(`- [Careers](${SITE_URL}/jobs)`)
  lines.push(`- [Contact and request a quote](${SITE_URL}/contact)`)
  lines.push("")

  lines.push("## Excluded")
  lines.push("- /api/ (form submission endpoint, not content)")
  lines.push("")

  return new Response(lines.join("\n"), {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600, must-revalidate",
    },
  })
}
