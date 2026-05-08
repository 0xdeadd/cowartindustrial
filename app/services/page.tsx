import type { Metadata } from "next"
import Link from "next/link"
import {
  Droplets,
  Factory,
  Waves,
  Truck,
  Filter,
  ArrowUpRight,
  Phone,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive industrial and environmental services including waste water management, industrial cleaning, hydro blasting, vacuum trucks, and on-site filtration.",
}

const services = [
  {
    code: "S—01",
    title: "Waste Water Management",
    description:
      "On-site sludge solidification and wastewater treatment. We operate our own treatment plant and provide comprehensive liquid waste management for industrial facilities.",
    href: "/services/waste-water-management",
    icon: Droplets,
    keywords: "Sludge · Treatment · Solidification",
    typical: "Manufacturing · Processing · Power",
  },
  {
    code: "S—02",
    title: "Industrial Cleaning",
    description:
      "Professional removal of non-hazardous buildup using vacuuming, pressure washing, and chemical cleaning methods. Routine maintenance through complex turnaround projects.",
    href: "/services/industrial-cleaning",
    icon: Factory,
    keywords: "Vacuuming · Pressure · Chemical",
    typical: "Plants · Tanks · Vessels",
  },
  {
    code: "S—03",
    title: "Hydro Blasting",
    description:
      "Ultra-high-pressure water cleaning for efficient removal of scale, rust, coatings, and stubborn industrial buildup. No chemicals, no secondary waste.",
    href: "/services/hydro-blasting",
    icon: Waves,
    keywords: "10K—40K PSI · Surface Prep",
    typical: "Heat Exchangers · Boilers · Lines",
  },
  {
    code: "S—04",
    title: "Vacuum Trucks & Roll Offs",
    description:
      "Pneumatic conveyance equipment, air movers, and roll-off containers for efficient material transport and disposal. Multiple container sizes, full delivery and pickup.",
    href: "/services/vacuum-trucks",
    icon: Truck,
    keywords: "Pneumatic · Roll-Off · Transport",
    typical: "Bulk · Liquid · Sludge",
  },
  {
    code: "S—05",
    title: "On-Site Filtration",
    description:
      "Mobile water filtration with comprehensive testing and monitoring at your facility. Reduces transportation costs and minimizes downtime.",
    href: "/services/on-site-filtration",
    icon: Filter,
    keywords: "Mobile · Testing · Compliance",
    typical: "Treatment · Reuse · Discharge",
  },
]

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
            <div className="label-mono text-[#C9C2B0]">5 Lines · 1 Operation</div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <div className="label-mono text-[#C9C2B0] mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-[#B8252F]" />
                Industrial &amp; Environmental Services
              </div>
              <h1 className="display-serif text-[clamp(2.5rem,6.5vw,5.25rem)] leading-[0.95] font-medium">
                Five service
                <br />
                <span className="italic font-normal text-[#C9C2B0]">lines, end-to-end</span>
                <br />
                under one roof.
              </h1>
              <p className="mt-10 max-w-xl text-[#C9C2B0] text-lg leading-relaxed font-light">
                Wastewater, industrial cleaning, hydro blasting, vacuum service, and on-site
                filtration — handled by Cowart crews and Cowart equipment, with no subcontractor
                handoffs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES DIRECTORY */}
      <section className="paper-texture py-20 lg:py-28 relative">
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

          <div className="border-t border-[#C9C2B0]">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Link
                  key={service.code}
                  href={service.href}
                  className="group block border-b border-[#C9C2B0] hover:bg-[#E8E2D3]/40 transition-colors"
                >
                  <div className="grid grid-cols-12 gap-4 lg:gap-8 py-10 lg:py-12 items-start">
                    <div className="col-span-2 lg:col-span-1">
                      <div className="label-mono text-[#B8252F]">{service.code}</div>
                    </div>
                    <div className="col-span-10 lg:col-span-2">
                      <div className="aspect-square max-w-[80px] border border-[#0E1A2B] flex items-center justify-center group-hover:bg-[#0E1A2B] transition-colors">
                        <Icon className="h-7 w-7 text-[#0E1A2B] group-hover:text-[#F2EEE5] transition-colors" />
                      </div>
                    </div>
                    <div className="col-span-12 lg:col-span-5">
                      <h3 className="display-serif text-3xl lg:text-4xl text-[#0E1A2B] leading-tight group-hover:text-[#B8252F] transition-colors">
                        {service.title}
                      </h3>
                      <p className="mt-4 text-[#3A3D44] leading-relaxed font-light">
                        {service.description}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 label-mono text-[#3A3D44] opacity-70">
                        <span>
                          <span className="text-[#B8252F]">/</span> {service.keywords}
                        </span>
                        <span>
                          <span className="text-[#B8252F]">~</span> {service.typical}
                        </span>
                      </div>
                    </div>
                    <div className="col-span-10 lg:col-span-3 lg:col-start-10 lg:pt-2">
                      <div className="label-mono text-[#3A3D44] mb-2">Read Spec</div>
                      <div className="display-serif text-[#0E1A2B] group-hover:text-[#B8252F] transition-colors text-lg">
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
