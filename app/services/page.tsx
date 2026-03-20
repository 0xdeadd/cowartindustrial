import type { Metadata } from "next"
import Link from "next/link"
import { Droplets, Factory, Waves, Truck, Filter } from "lucide-react"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive industrial and environmental services including waste water management, industrial cleaning, hydro blasting, vacuum trucks, and on-site filtration.",
}

const services = [
  {
    title: "Waste Water Management",
    description:
      "On-site sludge solidification and wastewater treatment. We operate our own treatment plant and provide comprehensive liquid waste management solutions for industrial facilities.",
    href: "/services/waste-water-management",
    icon: Droplets,
  },
  {
    title: "Industrial Cleaning",
    description:
      "Professional removal of non-hazardous buildup using vacuuming, pressure washing, and chemical cleaning methods. We handle everything from routine maintenance to complex cleaning projects.",
    href: "/services/industrial-cleaning",
    icon: Factory,
  },
  {
    title: "Hydro Blasting",
    description:
      "High-pressure water cleaning for efficient removal of scale, rust, coatings, and other materials. Our hydro blasting services deliver superior results without chemicals.",
    href: "/services/hydro-blasting",
    icon: Waves,
  },
  {
    title: "Vacuum Trucks & Roll Offs",
    description:
      "Pneumatic conveyance equipment and air movers for efficient material transport. Our fleet of vacuum trucks and roll-off containers handle projects of any scale.",
    href: "/services/vacuum-trucks",
    icon: Truck,
  },
  {
    title: "On-Site Filtration",
    description:
      "Water filtration services with comprehensive testing and monitoring. We bring filtration directly to your facility for maximum efficiency and minimal downtime.",
    href: "/services/on-site-filtration",
    icon: Filter,
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[#32373c] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold">Our Services</h1>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl">
            Comprehensive industrial and environmental solutions tailored to your
            needs. No project too big or too small.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, i) => (
              <Link
                key={service.title}
                href={service.href}
                className={`group flex flex-col md:flex-row items-start gap-6 p-8 rounded-lg border border-border hover:shadow-lg transition-shadow ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="shrink-0 bg-muted p-6 rounded-lg">
                  <service.icon className="h-16 w-16 text-[#32373c]" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold group-hover:underline">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <span className="inline-block mt-4 text-sm font-medium text-foreground">
                    Learn more &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
