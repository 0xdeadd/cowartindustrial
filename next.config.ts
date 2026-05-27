import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 301/308 redirects preserving ranking equity from previous site versions.
  // WordPress-era bare-slug URLs (2018-2024) are the ones Google still has
  // impressions on. www → apex consolidates the host. Earlier 2012-era .html
  // URLs were tried but Vercel's WAF (`x-vercel-mitigated: challenge`)
  // intercepts those patterns before redirects can fire, so they're left out.
  async redirects() {
    return [
      // ──────────── www → apex (host-level canonical) ─────────────
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.cowartind.com" }],
        destination: "https://cowartind.com/:path*",
        permanent: true,
      },

      // ──────────── WordPress-era bare-slug service URLs (2018-2024) ────────────
      { source: "/hydro-blasting", destination: "/services/hydro-blasting", permanent: true },
      { source: "/industrial-cleaning", destination: "/services/industrial-cleaning", permanent: true },
      { source: "/waste-water", destination: "/services/waste-water-management", permanent: true },
      { source: "/on-site-filtration", destination: "/services/on-site-filtration", permanent: true },
      { source: "/airmover", destination: "/services/air-mover-vacuum", permanent: true },
      { source: "/site-map", destination: "/services", permanent: true },
      {
        source: "/wp-content/uploads/2020/03/WASTE_PROFILE_MPS-pdf.pdf",
        destination: "/forms",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
