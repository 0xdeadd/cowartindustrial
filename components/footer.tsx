import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#111D3E] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4">Cowart Industrial</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              A full service, non-hazardous waste management service organization
              serving the Southeastern United States since 1974.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/services/waste-water-management" className="hover:text-white transition-colors">
                  Waste Water Management
                </Link>
              </li>
              <li>
                <Link href="/services/industrial-cleaning" className="hover:text-white transition-colors">
                  Industrial Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/hydro-blasting" className="hover:text-white transition-colors">
                  Hydro Blasting
                </Link>
              </li>
              <li>
                <Link href="/services/vacuum-trucks" className="hover:text-white transition-colors">
                  Vacuum Trucks & Roll Offs
                </Link>
              </li>
              <li>
                <Link href="/services/on-site-filtration" className="hover:text-white transition-colors">
                  On-Site Filtration
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
              </li>
              <li>
                <Link href="/jobs" className="hover:text-white transition-colors">Careers</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>834 Kingsbridge Road<br />Carrollton, GA 30117</span>
              </li>
              <li>
                <a href="tel:770-834-2158" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="h-4 w-4 shrink-0" />
                  770-834-2158
                </a>
              </li>
              <li>
                <a href="mailto:brenda.mckoon@cowartind.com" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="h-4 w-4 shrink-0" />
                  brenda.mckoon@cowartind.com
                </a>
              </li>
            </ul>
            <p className="mt-4 text-xs text-gray-400">
              24-Hour Emergency Service Available
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#CC2229]/30 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Cowart Industrial Services LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
