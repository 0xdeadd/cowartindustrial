import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/lib/button-variants"
import { Phone } from "lucide-react"

const serviceData: Record<
  string,
  { title: string; description: string; content: string[]; capabilities: string[] }
> = {
  "waste-water-management": {
    title: "Waste Water Management",
    description:
      "Comprehensive liquid waste management solutions for industrial facilities across the Southeast.",
    content: [
      "Cowart Industrial Services provides complete wastewater management solutions, including on-site sludge solidification and wastewater treatment. We operate our own treatment plant, giving us the capability to process and properly dispose of a wide range of non-hazardous liquid wastes.",
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
  },
  "industrial-cleaning": {
    title: "Industrial Cleaning",
    description:
      "Professional industrial cleaning services using vacuuming, pressure washing, and chemical methods.",
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
  },
  "hydro-blasting": {
    title: "Hydro Blasting",
    description:
      "High-pressure water cleaning for efficient removal of scale, coatings, and industrial buildup.",
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
  },
  "vacuum-trucks": {
    title: "Vacuum Trucks & Roll Offs",
    description:
      "Pneumatic conveyance equipment and air movers for efficient material transport and disposal.",
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
  },
  "on-site-filtration": {
    title: "On-Site Filtration",
    description:
      "Mobile water filtration services with comprehensive testing and monitoring at your facility.",
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
  },
}

export async function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({ slug }))
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

  return (
    <>
      <section className="bg-[#32373c] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-400 mb-2">
            <Link href="/services" className="hover:text-white">
              Services
            </Link>{" "}
            / {service.title}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold">{service.title}</h1>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl">
            {service.description}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
              {service.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            <div>
              <div className="bg-muted p-6 rounded-lg border border-border">
                <h2 className="font-semibold text-lg mb-4">Capabilities</h2>
                <ul className="space-y-2">
                  {service.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="text-foreground mt-0.5">&#10003;</span>
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 bg-[#32373c] text-white p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Need this service?</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Contact us for a free quote or call for 24-hour emergency
                  service.
                </p>
                <div className="space-y-3">
                  <Link
                    href="/contact"
                    className={cn(
                      buttonVariants(),
                      "w-full bg-white text-[#32373c] hover:bg-gray-100"
                    )}
                  >
                    Request a Quote
                  </Link>
                  <a
                    href="tel:770-834-2158"
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "w-full border-white text-white hover:bg-white/10"
                    )}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    770-834-2158
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
