import Link from "next/link"
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react"

const services = [
  { name: "Waste Water Management", href: "/services/waste-water-management" },
  { name: "Industrial Cleaning", href: "/services/industrial-cleaning" },
  { name: "Hydro Blasting", href: "/services/hydro-blasting" },
  { name: "Vacuum Trucks & Roll Offs", href: "/services/vacuum-trucks" },
  { name: "On-Site Filtration", href: "/services/on-site-filtration" },
]

const company = [
  { name: "About", href: "/about" },
  { name: "FAQ", href: "/faq" },
  { name: "Careers", href: "/jobs" },
  { name: "Contact", href: "/contact" },
]

const certifications = [
  "HAZWOPER 40",
  "OSHA 30",
  "DOT Hazmat",
  "EPA RCRA",
  "Confined Space",
]

export function Footer() {
  return (
    <footer className="bg-[#08111E] text-[#C9C2B0] mt-auto relative overflow-hidden">
      <div className="blueprint-grid absolute inset-0 opacity-30" />

      {/* Certifications strip */}
      <div className="relative border-b border-[#1F2D40]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-6">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 label-mono">
            <span className="text-[#B8252F]">— Certified</span>
            {certifications.map((cert) => (
              <span key={cert} className="flex items-center gap-2 text-[#C9C2B0]">
                <span className="w-1 h-1 bg-[#B8252F]" />
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand block */}
          <div className="lg:col-span-5">
            <div className="label-mono text-[#B8252F] mb-4">— Index 01</div>
            <h2 className="display-serif text-4xl lg:text-5xl text-[#F2EEE5] leading-[0.95] mb-6">
              Cowart
              <br />
              <span className="italic text-[#C9C2B0]">Industrial</span>
            </h2>
            <p className="text-sm text-[#C9C2B0] leading-relaxed font-light max-w-md">
              Full-service, non-hazardous waste management and industrial cleaning across the
              Southeastern United States. Family-operated since 1974.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="border border-[#1F2D40] px-3 py-2">
                <div className="label-mono text-[#C9C2B0] opacity-60">Est.</div>
                <div className="display-serif text-[#F2EEE5] text-2xl">1974</div>
              </div>
              <div className="border border-[#1F2D40] px-3 py-2">
                <div className="label-mono text-[#C9C2B0] opacity-60">Ref.</div>
                <div className="display-serif text-[#F2EEE5] text-2xl">CIS-001</div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <div className="label-mono text-[#B8252F] mb-4">— Index 02</div>
            <h3 className="label-mono text-[#F2EEE5] mb-5 pb-3 border-b border-[#1F2D40]">
              / Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((s, i) => (
                <li key={s.name}>
                  <Link
                    href={s.href}
                    className="group flex items-center gap-2 text-sm text-[#C9C2B0] hover:text-[#F2EEE5] transition-colors"
                  >
                    <span className="label-mono opacity-40 w-6">{`0${i + 1}`}</span>
                    <span className="flex-1">{s.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <div className="label-mono text-[#B8252F] mb-4">— Index 03</div>
            <h3 className="label-mono text-[#F2EEE5] mb-5 pb-3 border-b border-[#1F2D40]">
              / Company
            </h3>
            <ul className="space-y-2.5">
              {company.map((c, i) => (
                <li key={c.name}>
                  <Link
                    href={c.href}
                    className="group flex items-center gap-2 text-sm text-[#C9C2B0] hover:text-[#F2EEE5] transition-colors"
                  >
                    <span className="label-mono opacity-40 w-6">{`0${i + 1}`}</span>
                    <span>{c.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <div className="label-mono text-[#B8252F] mb-4">— Index 04</div>
            <h3 className="label-mono text-[#F2EEE5] mb-5 pb-3 border-b border-[#1F2D40]">
              / Contact
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3 text-[#C9C2B0]">
                <MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0 text-[#B8252F]" />
                <span className="leading-relaxed">
                  834 Kingsbridge Rd
                  <br />
                  Carrollton, GA 30117
                </span>
              </div>
              <a
                href="tel:770-834-2158"
                className="flex items-center gap-3 text-[#C9C2B0] hover:text-[#F2EEE5] transition-colors"
              >
                <Phone className="h-3.5 w-3.5 shrink-0 text-[#B8252F]" />
                <span className="label-mono">770.834.2158</span>
              </a>
              <a
                href="mailto:brenda.mckoon@cowartind.com"
                className="flex items-start gap-3 text-[#C9C2B0] hover:text-[#F2EEE5] transition-colors break-all"
              >
                <Mail className="h-3.5 w-3.5 mt-0.5 shrink-0 text-[#B8252F]" />
                <span className="leading-relaxed">brenda.mckoon@cowartind.com</span>
              </a>
            </div>
            <div className="mt-6 pt-4 border-t border-[#1F2D40]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8252F] animate-pulse" />
                <span className="label-mono text-[#F2EEE5]">24-Hr Emergency</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA strip */}
        <div className="mt-16 pt-10 border-t border-[#1F2D40] grid lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8">
            <div className="display-serif text-2xl lg:text-3xl text-[#F2EEE5] leading-tight">
              Need a quote, fast?{" "}
              <span className="italic text-[#C9C2B0]">We answer the phone.</span>
            </div>
          </div>
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <Link
              href="/contact"
              className="group flex items-center gap-3 border border-[#C9C2B0] hover:bg-[#B8252F] hover:border-[#B8252F] hover:text-[#F2EEE5] text-[#F2EEE5] px-6 py-3 transition-colors"
            >
              <span className="label-mono">Get in Touch</span>
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Colophon */}
      <div className="relative border-t border-[#1F2D40]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-5">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 label-mono text-[#C9C2B0] opacity-70">
            <div>© {new Date().getFullYear()} Cowart Industrial Services LLC</div>
            <div className="flex items-center gap-4">
              <span>All Rights Reserved</span>
              <span className="w-px h-3 bg-[#1F2D40]" />
              <span>Carrollton · Georgia · USA</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
