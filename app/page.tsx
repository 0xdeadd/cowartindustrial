import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/lib/button-variants"
import { Phone, Shield, Clock, Award, Droplets, Factory, Waves, Truck, Filter } from "lucide-react"

const services = [
  {
    title: "Waste Water Management",
    description:
      "On-site sludge solidification and wastewater treatment with our own treatment plant.",
    href: "/services/waste-water-management",
    icon: Droplets,
  },
  {
    title: "Industrial Cleaning",
    description:
      "Removal of non-hazardous buildup using vacuuming, pressure washing, and chemical methods.",
    href: "/services/industrial-cleaning",
    icon: Factory,
  },
  {
    title: "Hydro Blasting",
    description:
      "High-pressure water cleaning for efficient material removal in industrial settings.",
    href: "/services/hydro-blasting",
    icon: Waves,
  },
  {
    title: "Vacuum Trucks & Roll Offs",
    description:
      "Pneumatic conveyance equipment for efficient material transport and disposal.",
    href: "/services/vacuum-trucks",
    icon: Truck,
  },
  {
    title: "On-Site Filtration",
    description:
      "Water filtration services with comprehensive testing and monitoring.",
    href: "/services/on-site-filtration",
    icon: Filter,
  },
]

const strengths = [
  {
    title: "40+ Years Experience",
    description: "Trusted expertise since 1974.",
    icon: Award,
  },
  {
    title: "24/7 Emergency Service",
    description: "We're here when you need us most.",
    icon: Clock,
  },
  {
    title: "Safety & Compliance",
    description: "HAZWOPER certified, confined space entry capable.",
    icon: Shield,
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#32373c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Industrial Services You Can Count On
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
              A full service, non-hazardous waste management organization serving
              the Southeastern United States since 1974. No project too big or too
              small.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-white text-[#32373c] hover:bg-gray-100"
                )}
              >
                Request a Quote
              </Link>
              <a
                href="tel:770-834-2158"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "border-white text-white hover:bg-white/10"
                )}
              >
                <Phone className="mr-2 h-5 w-5" />
                770-834-2158
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {strengths.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 bg-white p-6 rounded-lg border border-border"
              >
                <item.icon className="h-8 w-8 text-[#32373c] shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold">Our Services</h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive industrial and environmental solutions tailored to
              your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <service.icon className="h-10 w-10 text-[#32373c] mb-4" />
                <h3 className="text-xl font-semibold group-hover:underline">
                  {service.title}
                </h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#32373c] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
          <p className="mt-4 text-gray-300 text-lg max-w-xl mx-auto">
            Contact us today for a free consultation. We provide 24-hour
            emergency service for urgent needs.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-white text-[#32373c] hover:bg-gray-100"
              )}
            >
              Contact Us
            </Link>
            <a
              href="tel:770-834-2158"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-white text-white hover:bg-white/10"
              )}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
