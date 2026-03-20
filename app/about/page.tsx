import type { Metadata } from "next"
import { Award, Users, Shield, Truck } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Cowart Industrial Services has been providing environmental and industrial services since 1974. Learn about our history and capabilities.",
}

const highlights = [
  {
    icon: Award,
    title: "Established 1974",
    description:
      "Originally founded as a septic tank pumping service, we expanded into industrial services in 2006.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description:
      "Our personnel are trained with 40-hour HAZWOPER certification and are capable of confined space entry.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description:
      "We maintain strict safety protocols and full regulatory compliance on every project.",
  },
  {
    icon: Truck,
    title: "Full Fleet",
    description:
      "Our extensive fleet of specialized equipment allows us to handle any project, large or small.",
  },
]

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#32373c] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold">About Us</h1>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl">
            Over 40 years of trusted industrial and environmental services in the
            Southeastern United States.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Cowart Industrial Services LLC was established in 1974 as a septic
                tank pumping service in Carrollton, Georgia. Over the decades, we
                recognized the growing need for comprehensive industrial services
                in the region and expanded our operations accordingly.
              </p>
              <p>
                In 2006, we made the strategic decision to expand into industrial
                services, bringing the same dedication to quality and customer
                satisfaction that built our reputation in the septic services
                industry.
              </p>
              <p>
                Today, Cowart Industrial Services has grown into a full service,
                non-hazardous waste management service organization. We serve
                clients across the Southeastern United States with a comprehensive
                range of environmental and industrial solutions.
              </p>
              <p>
                Our commitment to safety, responsiveness, and flexibility has made
                us the trusted partner for businesses that need reliable industrial
                services. With 24-hour emergency service availability, we&apos;re
                always ready when our clients need us most.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Why Choose Cowart Industrial
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlights.map((item) => (
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

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Certifications & Capabilities</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-foreground font-medium">&#8226;</span>
              40-Hour HAZWOPER Certified Personnel
            </li>
            <li className="flex items-start gap-2">
              <span className="text-foreground font-medium">&#8226;</span>
              Confined Space Entry Capable
            </li>
            <li className="flex items-start gap-2">
              <span className="text-foreground font-medium">&#8226;</span>
              UST and AST Entry and Cleaning
            </li>
            <li className="flex items-start gap-2">
              <span className="text-foreground font-medium">&#8226;</span>
              Own Wastewater Treatment Plant
            </li>
            <li className="flex items-start gap-2">
              <span className="text-foreground font-medium">&#8226;</span>
              24-Hour Emergency Service
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
