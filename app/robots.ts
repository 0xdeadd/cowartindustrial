import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/schema"

// AI-search and answer-engine crawlers. Listed explicitly (rather than relying
// on the wildcard) so permission to index for AI search is unambiguous. /api stays
// blocked uniformly. To opt out of any one, remove it from this array.
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-Web",
  "PerplexityBot",
  "Google-Extended",
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ["/api/"],
      })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
