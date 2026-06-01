import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Phone } from "lucide-react"
import {
  services,
  categories,
  allCategoryIds,
  getServicesByCategory,
} from "@/lib/services"

export const metadata: Metadata = {
  title: "Industrial & Environmental",
  description:
    "Industrial cleaning, hydroblasting to 40,000 PSI, vacuum trucks, frac tanks, wastewater treatment. Family-operated, single-DOT, 8 states. Since 1974.",
}

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="navy-grain text-[#F2EEE5] relative overflow-hidden">
        <div className="blueprint-grid absolute inset-0" />
        <div className="absolute top-6 left-6 w-6 h-6 border-l border-t border-[#B8252F]/60" />
        <div className="absolute top-6 right-6 w-6 h-6 border-r border-t border-[#B8252F]/60" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pt-16 pb-16 lg:pt-24 lg:pb-20">
          <div className="flex items-center gap-6 mb-12 lg:mb-16">
            <div className="label-mono text-[#B8252F]">— File 03 / Services</div>
            <div className="flex-1 h-px bg-[#1F2D40]" />
            <div className="label-mono text-[#C9C2B0]">
              {services.length} Lines · {allCategoryIds.length} Categories
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <div className="label-mono text-[#C9C2B0] mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-[#B8252F]" />
                Industrial &amp; Environmental Services
              </div>
              <h1 className="display-serif text-[clamp(2.5rem,6.5vw,5.25rem)] leading-[0.95] font-medium">
                Every service
                <br />
                <span className="italic font-normal text-[#C9C2B0]">line, four categories</span>
                <br />
                under one roof.
              </h1>
              <p className="mt-10 max-w-xl text-[#C9C2B0] text-lg leading-relaxed font-light">
                Industrial cleaning, hydro blasting, hydro excavating, vacuum trucks, frac tanks,
                waste disposal, line jetting, chemical cleaning, on-site treatment — Cowart crews
                and Cowart equipment, with no subcontractor handoffs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY OVERVIEW */}
      <section className="paper-texture py-16 lg:py-24 relative">
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-10 pb-6 border-b border-[#C9C2B0]">
            <div>
              <div className="label-mono text-[#B8252F] mb-3">— Categories</div>
              <h2 className="display-serif text-3xl lg:text-4xl text-[#0E1A2B]">
                Four capability categories
              </h2>
            </div>
            <div className="hidden md:block label-mono text-[#3A3D44]">
              {allCategoryIds.length} categories
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-[#C9C2B0]">
            {allCategoryIds.map((catId) => {
              const cat = categories[catId]
              const catServices = getServicesByCategory(catId)
              const hubHref = catId === "waste-management" ? "/services/waste-management" : null
              return (
                <div
                  key={cat.id}
                  className="border-r border-b border-[#C9C2B0] p-8 lg:p-10"
                >
                  <div className="flex items-baseline justify-between mb-4">
                    <div className="label-mono text-[#B8252F]">{cat.code}</div>
                    <div className="label-mono text-[#3A3D44]">
                      {catServices.length} services
                    </div>
                  </div>
                  <h3 className="display-serif text-2xl lg:text-3xl text-[#0E1A2B] mb-3">
                    {cat.title}
                  </h3>
                  <p className="text-[#3A3D44] leading-relaxed font-light mb-5">
                    {cat.description}
                  </p>
                  {hubHref && (
                    <Link
                      href={hubHref}
                      className="group inline-flex items-baseline gap-2 mb-5 label-mono text-[#0E1A2B] hover:text-[#B8252F] transition-colors"
                    >
                      <span>View {cat.shortTitle} overview</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </Link>
                  )}
                  <ul className="space-y-1.5">
                    {catServices.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="group flex items-baseline gap-3 text-[#0E1A2B] hover:text-[#B8252F] transition-colors"
                        >
                          <span className="label-mono text-[#B8252F] shrink-0 w-12">
                            {s.code}
                          </span>
                          <span className="text-sm group-hover:underline underline-offset-2">
                            {s.shortTitle || s.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SERVICES DIRECTORY — grouped by category */}
      <section className="paper-texture pt-8 pb-20 lg:pb-28 relative">
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-12 lg:mb-16 border-b border-[#C9C2B0] pb-6">
            <div>
              <div className="label-mono text-[#B8252F] mb-3">— Directory</div>
              <h2 className="display-serif text-3xl lg:text-4xl text-[#0E1A2B]">
                Service Index
              </h2>
            </div>
            <div className="hidden md:block label-mono text-[#3A3D44]">
              {services.length} entries
            </div>
          </div>

          {allCategoryIds.map((catId) => {
            const cat = categories[catId]
            const catServices = getServicesByCategory(catId)
            return (
              <div key={cat.id} className="mb-16 last:mb-0">
                <div className="flex items-baseline gap-4 pb-4 mb-2 border-b border-[#0E1A2B]">
                  <div className="label-mono text-[#B8252F]">{cat.code}</div>
                  <h3 className="display-serif text-2xl lg:text-3xl text-[#0E1A2B]">
                    {cat.title}
                  </h3>
                  <div className="flex-1 h-px bg-[#C9C2B0]" />
                  <div className="label-mono text-[#3A3D44]">
                    {catServices.length} lines
                  </div>
                </div>

                <div className="border-t border-[#C9C2B0]">
                  {catServices.map((service) => {
                    const Icon = service.icon
                    return (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="group block border-b border-[#C9C2B0] hover:bg-[#E8E2D3]/40 transition-colors"
                      >
                        <div className="grid grid-cols-12 gap-4 lg:gap-8 py-8 lg:py-10 items-start">
                          <div className="col-span-2 lg:col-span-1">
                            <div className="label-mono text-[#B8252F]">
                              {service.code}
                            </div>
                          </div>
                          <div className="col-span-10 lg:col-span-1">
                            {service.photo ? (
                              <div className="relative w-16 h-16 lg:w-20 lg:h-20 border border-[#0E1A2B] overflow-hidden">
                                <Image
                                  src={service.photo}
                                  alt=""
                                  fill
                                  sizes="80px"
                                  className="object-cover"
                                />
                                <div className="absolute inset-0 bg-[#0E1A2B]/0 group-hover:bg-[#B8252F]/30 transition-colors" />
                              </div>
                            ) : (
                              <div className="w-16 h-16 lg:w-20 lg:h-20 border border-[#0E1A2B] flex items-center justify-center group-hover:bg-[#0E1A2B] transition-colors">
                                <Icon className="h-5 w-5 text-[#0E1A2B] group-hover:text-[#F2EEE5] transition-colors" />
                              </div>
                            )}
                          </div>
                          <div className="col-span-12 lg:col-span-6">
                            <h4 className="display-serif text-2xl lg:text-3xl text-[#0E1A2B] leading-tight group-hover:text-[#B8252F] transition-colors">
                              {service.title}
                            </h4>
                            <p className="mt-3 text-[#3A3D44] leading-relaxed font-light">
                              {service.description}
                            </p>
                            <div className="mt-3 label-mono text-[#3A3D44] opacity-70">
                              <span className="text-[#B8252F]">/</span> {service.keywords}
                            </div>
                          </div>
                          <div className="col-span-10 lg:col-span-3 lg:pt-1">
                            <div className="label-mono text-[#3A3D44] mb-2">Read Spec</div>
                            <div className="display-serif text-[#0E1A2B] group-hover:text-[#B8252F] transition-colors text-base">
                              Full capabilities &amp; equipment →
                            </div>
                          </div>
                          <div className="col-span-2 lg:col-span-1 flex justify-end">
                            <div className="w-10 h-10 border border-[#0E1A2B] flex items-center justify-center group-hover:bg-[#B8252F] group-hover:border-[#B8252F] transition-colors">
                              <ArrowUpRight className="h-4 w-4 text-[#0E1A2B] group-hover:text-[#F2EEE5] transition-colors" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="paper-texture pb-24 relative">
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="border-t border-b border-[#0E1A2B]">
            <div className="grid lg:grid-cols-12 gap-8 py-16 lg:py-20 items-center">
              <div className="lg:col-span-7">
                <div className="label-mono text-[#B8252F] mb-4">— Inquiry</div>
                <h2 className="display-serif text-4xl lg:text-5xl leading-[0.95] text-[#0E1A2B]">
                  Don&apos;t see what you
                  <br />
                  <span className="italic">need above?</span>
                </h2>
                <p className="mt-6 text-[#3A3D44] text-lg font-light max-w-xl">
                  Cowart handles non-standard industrial work too. Tell us what you&apos;re dealing
                  with and we&apos;ll scope it.
                </p>
              </div>
              <div className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-[#0E1A2B]">
                <div className="space-y-4">
                  <Link
                    href="/contact"
                    className="group flex items-center justify-between bg-[#B8252F] hover:bg-[#8C1F1F] text-[#F2EEE5] px-6 py-5 transition-colors"
                  >
                    <span className="label-mono">Request a Quote</span>
                    <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                  <a
                    href="tel:770-834-2158"
                    className="group flex items-center justify-between border border-[#0E1A2B] hover:bg-[#0E1A2B] hover:text-[#F2EEE5] text-[#0E1A2B] px-6 py-5 transition-colors"
                  >
                    <span className="label-mono flex items-center gap-3">
                      <Phone className="h-4 w-4" />
                      770.834.2158
                    </span>
                    <span className="label-mono opacity-60 group-hover:opacity-100">24/7</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
