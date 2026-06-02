import type { Metadata } from "next"
import Link from "next/link"
import {
  Phone,
  ArrowUpRight,
  ArrowLeft,
} from "lucide-react"
import {
  categories,
  getServicesByCategory,
} from "@/lib/services"
import {
  breadcrumbSchema,
  SITE_URL,
  BUSINESS_ID,
} from "@/lib/schema"

const HUB_URL = `${SITE_URL}/services/waste-management`

export const metadata: Metadata = {
  title: "Waste Management",
  description:
    "Industrial waste management across the Southeast, non-hazardous disposal, transport, treatment, and environmental services from Cowart since 1974.",
  keywords: [
    "waste management",
    "industrial waste management",
    "non-hazardous waste management",
    "commercial waste management",
    "waste management southeast",
  ],
  alternates: { canonical: HUB_URL },
  openGraph: {
    title: "Industrial Waste Management | Cowart Industrial Services",
    description:
      "Non-hazardous industrial waste management across the Southeast, disposal, transport, treatment, and environmental services under one DOT number.",
    url: HUB_URL,
    type: "website",
    // Standalone route (outside the [slug] segment), so it doesn't inherit
    // app/services/[slug]/opengraph-image.tsx, point at the site OG image.
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Cowart Industrial Services",
      },
    ],
  },
}

const hubServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${HUB_URL}#service`,
  name: "Industrial Waste Management",
  description:
    "Industrial waste management across the Southeast, non-hazardous waste disposal, transport, treatment, and environmental services. End-to-end under one DOT number, with our own wastewater treatment plant.",
  serviceType:
    "waste management, industrial waste management, non-hazardous waste management",
  url: HUB_URL,
  provider: { "@id": BUSINESS_ID },
  areaServed: [
    "Georgia",
    "Alabama",
    "Tennessee",
    "South Carolina",
    "North Carolina",
    "Florida",
    "Mississippi",
    "Kentucky",
  ].map((name) => ({ "@type": "State", name })),
}

export default function WasteManagementHubPage() {
  const cat = categories["waste-management"]
  const catServices = getServicesByCategory("waste-management")

  const breadcrumbLd = breadcrumbSchema([
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Services", url: `${SITE_URL}/services` },
    { name: "Waste Management", url: HUB_URL },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hubServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* HERO */}
      <section className="navy-grain text-[#F2EEE5] relative overflow-hidden">
        <div className="blueprint-grid absolute inset-0" />
        <div className="absolute top-6 left-6 w-6 h-6 border-l border-t border-[#B8252F]/60" />
        <div className="absolute top-6 right-6 w-6 h-6 border-r border-t border-[#B8252F]/60" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pt-16 pb-16 lg:pt-24 lg:pb-20">
          <div className="flex items-center gap-6 mb-12 lg:mb-16">
            <div className="label-mono text-[#B8252F]">File 03 / {cat.code}</div>
            <div className="flex-1 h-px bg-[#1F2D40]" />
            <Link
              href="/services"
              className="label-mono text-[#C9C2B0] hover:text-[#F2EEE5] flex items-center gap-2 transition-colors"
            >
              <ArrowLeft className="h-3 w-3" />
              All Services
            </Link>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <div className="label-mono text-[#C9C2B0] mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-[#B8252F]" />
                {catServices.length} Service Lines · Southeast US
              </div>
              <h1 className="display-serif text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] font-medium">
                Industrial Waste Management
              </h1>
              <p className="mt-8 max-w-2xl text-[#C9C2B0] text-lg leading-relaxed font-light">
                Non-hazardous industrial waste, profiled, transported, treated, and disposed under
                one DOT number. Cowart Industrial Services has handled waste management for
                Southeastern manufacturers, processors, and municipalities since 1974.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW + SERVICES LIST */}
      <section className="paper-texture py-20 lg:py-28 relative">
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-16">
            <div className="lg:col-span-8">
              <div className="label-mono text-[#B8252F] mb-4">Overview</div>
              <div className="display-serif text-2xl lg:text-3xl text-[#0E1A2B] leading-snug mb-10 pb-10 border-b border-[#C9C2B0]">
                One operating principle: industrial waste shouldn&apos;t leave your site through
                three different vendors. Cowart handles it end-to-end.
              </div>
              <div className="space-y-6 text-[#3A3D44] text-lg leading-relaxed font-light">
                <p>
                  Industrial waste management at Cowart covers the full lifecycle of non-hazardous
                  byproducts generated by manufacturing plants, food processors, chemical
                  operations, refineries, and municipal facilities. We profile the waste stream, we
                  transport it under our own DOT number, we treat liquid waste at our own treatment
                  plant in Carrollton, Georgia, and we route specialized streams to permitted
                  disposal partners as needed.
                </p>
                <p>
                  Every load travels with a manifest. Every disposal action gets a certificate of
                  disposition. Our crews carry HAZWOPER 40, OSHA 30, DOT Hazmat, and EPA RCRA
                  credentials, and we maintain the documentation your compliance team needs for
                  audits and regulatory reporting.
                </p>
                <p>
                  Below are the five service lines that make up our waste management practice. Most
                  facilities use more than one, a single account may pair scheduled wastewater
                  pickups with roll-off service for solid waste and emergency response for
                  unplanned events.
                </p>
              </div>
            </div>

            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-32 space-y-8">
                <div className="border-t border-[#0E1A2B]">
                  <div className="py-4 border-b border-[#C9C2B0]">
                    <div className="label-mono text-[#B8252F]">What We Handle</div>
                  </div>
                  <ul className="divide-y divide-[#C9C2B0]">
                    {[
                      "Non-hazardous liquid waste",
                      "Sludge and slurries",
                      "Process water and oily water",
                      "Sumps, pits, and tanks",
                      "Industrial solids and debris",
                      "Plant turnaround waste",
                    ].map((item, i) => (
                      <li
                        key={item}
                        className="py-3 flex items-baseline gap-4 text-[#0E1A2B]"
                      >
                        <span className="label-mono text-[#B8252F] shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#0E1A2B] text-[#F2EEE5] p-6 lg:p-8 relative overflow-hidden">
                  <div className="blueprint-grid absolute inset-0 opacity-30" />
                  <div className="relative">
                    <div className="label-mono text-[#B8252F] mb-3">Get a Quote</div>
                    <div className="display-serif text-2xl leading-tight mb-5">
                      Need waste off-site?
                    </div>
                    <p className="text-sm text-[#C9C2B0] leading-relaxed font-light mb-6">
                      Free quote within one business day. 24-hour emergency dispatch.
                    </p>
                    <div className="space-y-3">
                      <Link
                        href="/contact"
                        className="group flex items-center justify-between bg-[#B8252F] hover:bg-[#8C1F1F] text-[#F2EEE5] px-5 py-4 transition-colors"
                      >
                        <span className="label-mono">Request Quote</span>
                        <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                      <a
                        href="tel:770-834-2158"
                        className="group flex items-center justify-between border border-[#1F2D40] hover:border-[#C9C2B0] text-[#F2EEE5] px-5 py-4 transition-colors"
                      >
                        <span className="label-mono flex items-center gap-2">
                          <Phone className="h-3.5 w-3.5 text-[#B8252F]" />
                          770.834.2158
                        </span>
                        <span className="label-mono opacity-60">24/7</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* SERVICE LINES IN THIS CATEGORY */}
      <section className="bg-[#0E1A2B] text-[#F2EEE5] py-20 lg:py-24 relative overflow-hidden">
        <div className="blueprint-grid absolute inset-0 opacity-40" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-10 pb-6 border-b border-[#1F2D40]">
            <div>
              <div className="label-mono text-[#B8252F] mb-3">Service Lines</div>
              <h2 className="display-serif text-3xl lg:text-4xl">
                Waste Management at Cowart
              </h2>
            </div>
            <Link
              href="/services"
              className="label-mono text-[#C9C2B0] hover:text-[#F2EEE5] flex items-center gap-2 transition-colors"
            >
              All Services
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#1F2D40]">
            {catServices.map((s) => {
              const SIcon = s.icon
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group border-r border-b border-[#1F2D40] p-6 lg:p-8 hover:bg-[#1F2D40]/40 transition-colors"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="label-mono text-[#B8252F]">{s.code}</div>
                    <SIcon className="h-5 w-5 text-[#C9C2B0] group-hover:text-[#B8252F] transition-colors" />
                  </div>
                  <h3 className="display-serif text-2xl text-[#F2EEE5] leading-tight group-hover:text-[#B8252F] transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#C9C2B0] leading-relaxed font-light">
                    {s.description}
                  </p>
                  <div className="mt-4 label-mono text-[#C9C2B0] opacity-60">
                    {s.keywords}
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
