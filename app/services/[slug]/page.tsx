import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import {
  Phone,
  Droplets,
  Factory,
  Waves,
  Truck,
  Filter,
  ArrowUpRight,
  ArrowLeft,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

type ServiceEntry = {
  code: string
  title: string
  description: string
  intro: string
  content: string[]
  capabilities: string[]
  keywords: string
  icon: LucideIcon
  photo?: string
  photoAlt?: string
}

const serviceData: Record<string, ServiceEntry> = {
  "waste-water-management": {
    code: "S—01",
    title: "Waste Water Management",
    description:
      "Comprehensive liquid waste management for industrial facilities across the Southeast.",
    intro:
      "Cowart operates its own non-hazardous wastewater treatment plant — meaning your liquid waste is processed end-to-end without subcontractor handoffs.",
    content: [
      "Cowart Industrial Services provides complete wastewater management, including on-site sludge solidification and wastewater treatment. We operate our own treatment plant, giving us the capability to process and properly dispose of a wide range of non-hazardous liquid wastes.",
      "Our team handles everything from routine wastewater pickup and disposal to complex on-site treatment projects. We work with manufacturing facilities, processing plants, and other industrial operations to ensure their wastewater is managed safely, efficiently, and in full regulatory compliance.",
      "Whether you need scheduled service or emergency response, our experienced technicians and specialized equipment are ready to handle your wastewater management needs.",
    ],
    capabilities: [
      "On-site sludge solidification",
      "Wastewater treatment and disposal",
      "Own treatment plant operations",
      "Scheduled and emergency service",
      "Regulatory compliance management",
      "Liquid waste transportation",
    ],
    keywords: "Sludge · Treatment · Solidification",
    icon: Droplets,
    photo: "/photos/service-waste-water.jpg",
    photoAlt: "Cowart technician pumping in a confined-space manhole",
  },
  "industrial-cleaning": {
    code: "S—02",
    title: "Industrial Cleaning",
    description:
      "Professional industrial cleaning using vacuuming, pressure washing, and chemical methods.",
    intro:
      "Routine maintenance through major turnaround projects — handled by HAZWOPER-certified crews with full confined-space credentials.",
    content: [
      "Our industrial cleaning services address the buildup of non-hazardous materials in industrial facilities. Using a combination of vacuuming, pressure washing, and chemical cleaning methods, we restore equipment and facilities to optimal operating condition.",
      "Cowart Industrial's trained personnel are capable of confined space entry, UST and AST entry and cleaning, and other specialized cleaning operations. All team members hold 40-hour HAZWOPER certification, ensuring safe and compliant operations.",
      "From routine maintenance cleaning to major turnaround projects, we have the equipment, expertise, and manpower to handle your industrial cleaning needs efficiently and safely.",
    ],
    capabilities: [
      "Vacuuming and material removal",
      "High-pressure washing",
      "Chemical cleaning",
      "Confined space entry and cleaning",
      "UST and AST entry and cleaning",
      "Tank cleaning and decommissioning",
    ],
    keywords: "Vacuuming · Pressure · Chemical",
    icon: Factory,
    photo: "/photos/service-industrial-cleaning.jpg",
    photoAlt: "Cowart crew pressure-washing a sludge pit inside an industrial facility",
  },
  "hydro-blasting": {
    code: "S—03",
    title: "Hydro Blasting",
    description:
      "Ultra-high-pressure water cleaning for scale, coatings, and stubborn industrial buildup.",
    intro:
      "Water-only material removal at 10,000–40,000 PSI. No chemicals, no secondary waste, no surface damage when done by trained operators.",
    content: [
      "Hydro blasting uses ultra-high-pressure water to remove scale, rust, old coatings, and other stubborn materials from industrial surfaces. This method is highly efficient and often preferred over traditional cleaning methods because it requires no chemicals and produces no secondary waste.",
      "Our hydro blasting services are ideal for heat exchangers, boilers, piping systems, tanks, and other industrial equipment. The precision of water pressure allows us to clean effectively without damaging the underlying surface.",
      "Cowart Industrial operates a fleet of hydro blasting equipment capable of handling projects of any scale. Our experienced operators ensure safe, effective cleaning that minimizes downtime and maximizes results.",
    ],
    capabilities: [
      "Ultra-high-pressure water cleaning",
      "Heat exchanger cleaning",
      "Boiler tube cleaning",
      "Surface preparation",
      "Pipe and line cleaning",
      "Tank and vessel cleaning",
    ],
    keywords: "10K—40K PSI · Surface Prep",
    icon: Waves,
    photo: "/photos/service-hydro-blasting.jpg",
    photoAlt: "Cowart hydro-blasting operator cleaning an industrial tank",
  },
  "vacuum-trucks": {
    code: "S—04",
    title: "Vacuum Trucks & Roll Offs",
    description:
      "Pneumatic conveyance equipment, air movers, and roll-off containers for material transport.",
    intro:
      "Cowart's full fleet handles dry bulk, liquids, sludge, and waste in a single dispatch — with proper containment, transport, and disposal end-to-end.",
    content: [
      "Our fleet of vacuum trucks and air movers provides pneumatic conveyance for a wide range of industrial materials. Whether you need to move dry bulk materials, liquids, or sludge, our equipment is up to the task.",
      "We also provide roll-off container service for industrial waste collection and disposal. Our containers are available in multiple sizes to match your project requirements, and our team handles delivery, pickup, and proper disposal.",
      "From construction debris to industrial byproducts, Cowart Industrial has the trucks, containers, and experienced operators to handle your material transport and disposal needs efficiently.",
    ],
    capabilities: [
      "Vacuum truck services",
      "Air mover operations",
      "Pneumatic conveyance",
      "Roll-off container service",
      "Dry and wet material transport",
      "Industrial waste disposal",
    ],
    keywords: "Pneumatic · Roll-Off · Transport",
    icon: Truck,
    photo: "/photos/service-vacuum-trucks.jpg",
    photoAlt: "Cowart vacuum truck transferring liquid waste to a tanker",
  },
  "on-site-filtration": {
    code: "S—05",
    title: "On-Site Filtration",
    description:
      "Mobile water filtration with comprehensive testing and monitoring at your facility.",
    intro:
      "Treat water where it's generated. Lower transport costs, less downtime, full compliance documentation included with every job.",
    content: [
      "Cowart Industrial brings filtration directly to your facility with our mobile on-site filtration services. By treating water on-site, we reduce transportation costs, minimize downtime, and provide a more efficient solution for your water treatment needs.",
      "Our filtration services include comprehensive water testing and monitoring throughout the treatment process. We work with you to ensure the treated water meets all applicable standards and specifications before discharge or reuse.",
      "Whether you need one-time filtration for a specific project or ongoing filtration services as part of your facility's operations, our team has the equipment and expertise to deliver reliable results.",
    ],
    capabilities: [
      "Mobile filtration units",
      "On-site water treatment",
      "Water quality testing",
      "Continuous monitoring",
      "Custom filtration solutions",
      "Compliance documentation",
    ],
    keywords: "Mobile · Testing · Compliance",
    icon: Filter,
  },
}

const allSlugs = Object.keys(serviceData)

export async function generateStaticParams() {
  return allSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = serviceData[slug]
  if (!service) return {}
  return {
    title: service.title,
    description: service.description,
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = serviceData[slug]
  if (!service) notFound()

  const Icon = service.icon
  const otherServices = allSlugs
    .filter((s) => s !== slug)
    .map((s) => ({ slug: s, ...serviceData[s] }))

  return (
    <>
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
                    {/* Top-fade for label readability */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(8,17,30,0.85) 0%, rgba(8,17,30,0.15) 25%, rgba(8,17,30,0) 60%, rgba(8,17,30,0.85) 100%)",
                      }}
                    />
                    {/* Editorial labels on top of photo */}
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
            {/* Article column */}
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

            {/* Sidebar */}
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

                {/* Quote box */}
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
      <section className="bg-[#0E1A2B] text-[#F2EEE5] py-20 lg:py-24 relative overflow-hidden">
        <div className="blueprint-grid absolute inset-0 opacity-40" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-10 pb-6 border-b border-[#1F2D40]">
            <div>
              <div className="label-mono text-[#B8252F] mb-3">— Related</div>
              <h2 className="display-serif text-3xl lg:text-4xl">
                Other service lines
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#1F2D40]">
            {otherServices.map((s) => {
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
    </>
  )
}
