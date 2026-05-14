import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Phone, ArrowUpRight, ArrowLeft } from "lucide-react"
import {
  services,
  servicesBySlug,
  getRelatedServices,
} from "@/lib/services"
import {
  serviceSchema,
  breadcrumbSchema,
  SITE_URL,
} from "@/lib/schema"

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = servicesBySlug[slug]
  if (!service) return {}
  const url = `${SITE_URL}/services/${service.slug}`
  return {
    title: service.title,
    description: service.description,
    keywords: service.metaKeywords,
    alternates: { canonical: url },
    openGraph: {
      title: `${service.title} | Cowart Industrial Services`,
      description: service.description,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Cowart Industrial Services`,
      description: service.description,
    },
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = servicesBySlug[slug]
  if (!service) notFound()

  const Icon = service.icon
  const relatedServices = getRelatedServices(slug, 3)

  const serviceLd = serviceSchema(service)
  const breadcrumbLd = breadcrumbSchema([
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Services", url: `${SITE_URL}/services` },
    { name: service.title, url: `${SITE_URL}/services/${service.slug}` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
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
            <div className="label-mono text-[#B8252F]">— File 03 / {service.code}</div>
            <div className="flex-1 h-px bg-[#1F2D40]" />
            <Link
              href="/services"
              className="label-mono text-[#C9C2B0] hover:text-[#F2EEE5] flex items-center gap-2 transition-colors"
            >
              <ArrowLeft className="h-3 w-3" />
              All Services
            </Link>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-8">
              <div className="label-mono text-[#C9C2B0] mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-[#B8252F]" />
                {service.keywords}
              </div>
              <h1 className="display-serif text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] font-medium">
                {service.title}
              </h1>
              <p className="mt-8 max-w-xl text-[#C9C2B0] text-lg leading-relaxed font-light">
                {service.description}
              </p>
            </div>
            <div className="lg:col-span-4 hidden lg:block">
              <div className="border border-[#1F2D40] bg-gradient-to-b from-[#0E1A2B] to-[#08111E] aspect-square relative overflow-hidden">
                {service.photo ? (
                  <>
                    <Image
                      src={service.photo}
                      alt={service.photoAlt || service.title}
                      fill
                      sizes="(max-width: 1024px) 0vw, 35vw"
                      className="object-cover"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(8,17,30,0.85) 0%, rgba(8,17,30,0.15) 25%, rgba(8,17,30,0) 60%, rgba(8,17,30,0.85) 100%)",
                      }}
                    />
                    <div className="relative h-full flex flex-col justify-between p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="label-mono text-[#B8252F] mb-1">/ Spec</div>
                          <div className="label-mono text-[#F2EEE5] text-[10px] opacity-80">
                            {service.code.replace("—", "·")}
                          </div>
                        </div>
                        <div className="border border-[#F2EEE5]/40 p-3 backdrop-blur-sm bg-[#08111E]/30">
                          <Icon className="h-6 w-6 text-[#B8252F]" />
                        </div>
                      </div>
                      <div className="border-t border-[#F2EEE5]/30 pt-4">
                        <div className="label-mono text-[#F2EEE5] text-[10px] flex justify-between">
                          <span>Cowart</span>
                          <span>Industrial</span>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="absolute inset-0 p-6">
                    <div className="absolute inset-0 blueprint-grid opacity-30" />
                    <div className="relative h-full flex flex-col justify-between">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="label-mono text-[#B8252F] mb-1">/ Spec</div>
                          <div className="label-mono text-[#C9C2B0] opacity-60 text-[10px]">
                            PHOTO·SLOT·{service.code.replace("—", "")}
                          </div>
                        </div>
                        <div className="border border-[#1F2D40] p-3">
                          <Icon className="h-6 w-6 text-[#B8252F]" />
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="display-serif text-7xl text-[#F2EEE5] leading-none">
                          {service.code.split("—")[1]}
                        </div>
                        <div className="label-mono text-[#B8252F] mt-2">{service.code.split("—")[0]}</div>
                      </div>
                      <div className="border-t border-[#1F2D40] pt-4">
                        <div className="label-mono text-[#C9C2B0] text-[10px] flex justify-between">
                          <span>Cowart</span>
                          <span>Industrial</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW BODY */}
      <section className="paper-texture py-24 lg:py-32 relative">
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-8">
              <div className="label-mono text-[#B8252F] mb-4">— Overview</div>
              <div className="display-serif text-2xl lg:text-3xl text-[#0E1A2B] leading-snug mb-10 pb-10 border-b border-[#C9C2B0]">
                {service.intro}
              </div>
              <div className="space-y-6 text-[#3A3D44] text-lg leading-relaxed font-light">
                {service.content.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-32 space-y-8">
                <div className="border-t border-[#0E1A2B]">
                  <div className="py-4 border-b border-[#C9C2B0] flex items-center justify-between">
                    <div className="label-mono text-[#B8252F]">— Capabilities</div>
                    <div className="label-mono text-[#3A3D44]">
                      {service.capabilities.length} items
                    </div>
                  </div>
                  <ul className="divide-y divide-[#C9C2B0]">
                    {service.capabilities.map((cap, i) => (
                      <li
                        key={cap}
                        className="py-3 flex items-baseline gap-4 text-[#0E1A2B]"
                      >
                        <span className="label-mono text-[#B8252F] shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-base">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#0E1A2B] text-[#F2EEE5] p-6 lg:p-8 relative overflow-hidden">
                  <div className="blueprint-grid absolute inset-0 opacity-30" />
                  <div className="relative">
                    <div className="label-mono text-[#B8252F] mb-3">— Get a Quote</div>
                    <div className="display-serif text-2xl leading-tight mb-5">
                      Need this service?
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

      {/* RELATED SERVICES */}
      {relatedServices.length > 0 && (
        <section className="bg-[#0E1A2B] text-[#F2EEE5] py-20 lg:py-24 relative overflow-hidden">
          <div className="blueprint-grid absolute inset-0 opacity-40" />
          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="flex items-end justify-between mb-10 pb-6 border-b border-[#1F2D40]">
              <div>
                <div className="label-mono text-[#B8252F] mb-3">— Related</div>
                <h2 className="display-serif text-3xl lg:text-4xl">
                  Related Services
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
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-[#1F2D40]">
              {relatedServices.map((s) => {
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
                    <div className="mt-4 label-mono text-[#C9C2B0] opacity-60">{s.keywords}</div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
