"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, Phone, Clock, MapPin } from "lucide-react"

const navigation = [
  { name: "About", href: "/about", code: "01" },
  {
    name: "Services",
    href: "/services",
    code: "02",
    children: [
      { name: "Waste Water Management", href: "/services/waste-water-management" },
      { name: "Industrial Cleaning", href: "/services/industrial-cleaning" },
      { name: "Hydro Blasting", href: "/services/hydro-blasting" },
      { name: "Vacuum Trucks & Roll Offs", href: "/services/vacuum-trucks" },
      { name: "On-Site Filtration", href: "/services/on-site-filtration" },
    ],
  },
  { name: "FAQ", href: "/faq", code: "03" },
  { name: "Jobs", href: "/jobs", code: "04" },
  { name: "Forms", href: "/forms", code: "05" },
  { name: "Contact", href: "/contact", code: "06" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="hidden md:block bg-[#08111E] text-[#C9C2B0] border-b border-[#1F2D40]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-9 label-mono">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[#B8252F]" />
                EST. 1974
              </span>
              <span className="flex items-center gap-1.5 opacity-70">
                <MapPin className="h-3 w-3" />
                Carrollton, GA
              </span>
              <span className="flex items-center gap-1.5 opacity-70">
                <Clock className="h-3 w-3" />
                24-Hr Emergency Service
              </span>
            </div>
            <div className="flex items-center gap-5">
              <span className="opacity-70">HAZWOPER · DOT · EPA</span>
              <a
                href="tel:770-834-2158"
                className="flex items-center gap-1.5 text-[#F2EEE5] hover:text-[#B8252F] transition-colors"
              >
                <Phone className="h-3 w-3" />
                770.834.2158
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="bg-white border-b border-[#C9C2B0]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <Image
                  src="/logo.jpg"
                  alt="Cowart Industrial Services"
                  width={200}
                  height={48}
                  className="h-10 w-auto"
                  unoptimized
                  priority
                />
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center">
              {navigation.map((item, i) =>
                item.children ? (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center gap-2 px-5 py-2 text-sm font-medium text-[#14161A] hover:text-[#B8252F] transition-colors border-l border-[#C9C2B0]"
                    >
                      <span className="label-mono opacity-50">{item.code}</span>
                      <span className="font-sans">{item.name}</span>
                    </Link>
                    {servicesOpen && (
                      <div className="absolute top-full left-0 w-72 bg-[#0E1A2B] border border-[#1F2D40] py-3 shadow-2xl">
                        <div className="px-5 pb-2 mb-2 border-b border-[#1F2D40] label-mono text-[#B8252F]">
                          / Services
                        </div>
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-5 py-2 text-sm text-[#C9C2B0] hover:text-[#F2EEE5] hover:bg-[#1F2D40] transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-2 px-5 py-2 text-sm font-medium text-[#14161A] hover:text-[#B8252F] transition-colors ${i === 0 ? "border-l" : ""} border-r border-[#C9C2B0]`}
                  >
                    <span className="label-mono opacity-50">{item.code}</span>
                    <span>{item.name}</span>
                  </Link>
                )
              )}
            </nav>

            <div className="hidden lg:flex items-center">
              <Link
                href="/contact"
                className="group flex items-center gap-3 bg-[#B8252F] hover:bg-[#8C1F1F] text-[#F2EEE5] px-6 py-3 transition-colors"
              >
                <span className="label-mono">Request Quote</span>
                <span className="w-4 h-px bg-[#F2EEE5] group-hover:w-6 transition-all" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-[#0E1A2B]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0E1A2B] text-[#F2EEE5]">
          <div className="px-6 py-6 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-3 border-b border-[#1F2D40] hover:bg-[#1F2D40]"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="label-mono text-[#B8252F]">{item.code}</span>
                  <span className="text-base">{item.name}</span>
                </Link>
                {item.children && (
                  <div className="ml-8 my-2 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-3 py-2 text-sm text-[#C9C2B0] hover:text-[#F2EEE5]"
                        onClick={() => setMobileOpen(false)}
                      >
                        — {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-6 mt-4 border-t border-[#1F2D40] space-y-3">
              <a
                href="tel:770-834-2158"
                className="flex items-center gap-2 px-3 py-2 label-mono text-[#F2EEE5]"
              >
                <Phone className="h-4 w-4" />
                770.834.2158
              </a>
              <Link
                href="/contact"
                className="block bg-[#B8252F] text-[#F2EEE5] px-6 py-3 text-center label-mono"
                onClick={() => setMobileOpen(false)}
              >
                Request Quote →
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
