import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 301s preserving ranking equity from the old WordPress URLs after the
  // 2026-05 relaunch. The old top-level service pages moved under /services/.
  async redirects() {
    return [
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
