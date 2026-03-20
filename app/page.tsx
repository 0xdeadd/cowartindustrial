import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/lib/button-variants"
import {
  Phone,
  Shield,
  Clock,
  Award,
  Droplets,
  Factory,
  Waves,
  Truck,
  Filter,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

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

const stats = [
  { value: "50+", label: "Years in Business" },
  { value: "24/7", label: "Emergency Service" },
  { value: "SE US", label: "Service Area" },
  { value: "100%", label: "Safety Focused" },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center bg-gradient-to-br from-[#0f1b3d] via-[#1A2857] to-[#243470] text-white overflow-hidden">
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow effects */}
        <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] rounded-full bg-[#CC2229]/20 blur-[120px]" />
        <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full bg-[#1A2857]/60 blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 text-sm mb-8">
                <span className="w-2 h-2 rounded-full bg-[#CC2229] animate-pulse" />
                Serving the Southeast since 1974
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
                Industrial
                <br />
                <span className="text-[#CC2229]">Services</span> You
                <br />
                Can Count On
              </h1>
              <p className="mt-8 text-lg text-blue-200/80 leading-relaxed max-w-lg">
                Full service, non-hazardous waste management for the
                Southeastern United States. No project too big or too small.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "bg-[#CC2229] text-white hover:bg-[#e0262d] border-0 shadow-lg shadow-[#CC2229]/25 text-base px-8 py-6"
                  )}
                >
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="tel:770-834-2158"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "border-2 border-white text-white !bg-transparent hover:!bg-white/10 backdrop-blur-sm text-base px-8 py-6"
                  )}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  770-834-2158
                </a>
              </div>
            </div>

            {/* Right side — key selling points */}
            <div className="hidden lg:block">
              <div className="space-y-5">
                {[
                  "HAZWOPER certified technicians",
                  "Confined space entry capable",
                  "Own wastewater treatment plant",
                  "Full fleet of vacuum & hydro trucks",
                  "Emergency response available 24/7",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-4"
                  >
                    <CheckCircle2 className="h-5 w-5 text-[#CC2229] shrink-0" />
                    <span className="text-blue-100 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="relative z-10 -mt-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {stats.map((stat) => (
              <div key={stat.label} className="px-6 py-8 text-center">
                <div className="text-3xl font-extrabold text-[#1A2857]">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 mt-1 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-[#CC2229] font-semibold text-sm uppercase tracking-widest mb-3">
              What We Do
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1A2857] leading-tight">
              Comprehensive Industrial Solutions
            </h2>
            <p className="mt-5 text-gray-500 text-lg leading-relaxed">
              From wastewater treatment to hydro blasting, we handle the tough
              jobs so you don&apos;t have to.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-[#CC2229]/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#1A2857] to-[#243470] mb-6">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1A2857] group-hover:text-[#CC2229] transition-colors">
                  {service.title}
                </h3>
                <p className="mt-3 text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-5 flex items-center text-[#CC2229] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Cowart */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#CC2229] font-semibold text-sm uppercase tracking-widest mb-3">
                Why Cowart
              </p>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1A2857] leading-tight">
                Built on 50 Years of Trust
              </h2>
              <p className="mt-5 text-gray-500 text-lg leading-relaxed">
                Since 1974, Cowart Industrial Services has been the go-to
                partner for industrial cleaning and waste management across the
                Southeast. We combine decades of expertise with modern equipment
                and an unwavering commitment to safety.
              </p>
              <Link
                href="/about"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "mt-8 border-[#1A2857] text-[#1A2857] hover:bg-[#1A2857] hover:text-white text-base"
                )}
              >
                About Our Company
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  icon: Award,
                  title: "Expertise",
                  desc: "50+ years of hands-on industrial experience across the Southeast.",
                },
                {
                  icon: Clock,
                  title: "Responsiveness",
                  desc: "24/7 emergency service. We're there when you need us most.",
                },
                {
                  icon: Shield,
                  title: "Safety First",
                  desc: "HAZWOPER certified with full confined space entry capabilities.",
                },
                {
                  icon: Factory,
                  title: "Flexibility",
                  desc: "Tailored solutions for any project size — big or small.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm"
                >
                  <div className="w-11 h-11 rounded-lg bg-[#CC2229]/10 flex items-center justify-center mb-4">
                    <item.icon className="h-5 w-5 text-[#CC2229]" />
                  </div>
                  <h3 className="font-bold text-[#1A2857] text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-gradient-to-br from-[#0f1b3d] via-[#1A2857] to-[#243470] text-white py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#CC2229]/10 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Ready to Get <span className="text-[#CC2229]">Started?</span>
          </h2>
          <p className="mt-6 text-blue-200/80 text-lg max-w-xl mx-auto leading-relaxed">
            Contact us today for a free consultation. We provide 24-hour
            emergency service for urgent needs.
          </p>
          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-[#CC2229] text-white hover:bg-[#e0262d] border-0 shadow-lg shadow-[#CC2229]/25 text-base px-8 py-6"
              )}
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="tel:770-834-2158"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-2 border-white text-white !bg-transparent hover:!bg-white/10 backdrop-blur-sm text-base px-8 py-6"
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
