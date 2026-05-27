import type { Metadata } from "next"
import { IBM_Plex_Sans, IBM_Plex_Serif, IBM_Plex_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SiteChrome } from "@/components/site-chrome"
import { localBusinessSchema, SITE_URL } from "@/lib/schema"
import "./globals.css"

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

const plexSerif = IBM_Plex_Serif({
  variable: "--font-plex-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Cowart Industrial Services | Carrollton, GA",
    template: "%s | Cowart Industrial Services",
  },
  description:
    "Environmental services & industrial cleaning across the Southeast since 1974 — waste disposal, hydro blasting, and on-site treatment. Carrollton, GA.",
  keywords: [
    "environmental services",
    "industrial cleaning",
    "waste disposal",
    "waste transport",
    "hydro blasting",
    "40000 psi hydro blasting",
    "vacuum truck service",
    "liquid vacuum service",
    "air mover vacuum",
    "vacuum box service",
    "roll off service",
    "frac tank rental",
    "chemical cleaning",
    "line jetting",
    "pipe cleaning",
    "line flushing",
    "decontamination",
    "on-site filtration",
    "wastewater management",
    "non-hazardous waste",
    "Carrollton GA",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Cowart Industrial Services",
    locale: "en_US",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${plexSans.variable} ${plexSerif.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema()),
          }}
        />
        <SiteChrome header={<Header />} footer={<Footer />}>
          {children}
        </SiteChrome>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
