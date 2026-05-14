"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, X, Phone, Clock, MapPin, ArrowUpRight } from "lucide-react"
import {
  services,
  categories,
  allCategoryIds,
  getServicesByCategory,
} from "@/lib/services"

const navigation = [
  { name: "About", href: "/about", code: "01" },
  { name: "Services", href: "/services", code: "02", hasMegaPanel: true },
  { name: "FAQ", href: "/faq", code: "03" },
  { name: "Jobs", href: "/jobs", code: "04" },
  { name: "Forms", href: "/forms", code: "05" },
  { name: "Contact", href: "/contact", code: "06" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setServicesOpen(false)
    setMobileOpen(false)
  }, [pathname])

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
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative">
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
                item.hasMegaPanel ? (
                  <div
                    key={item.name}
                    className="h-20 flex items-center"
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

            <button
              className="lg:hidden p-2 text-[#0E1A2B]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Services mega-panel — anchored to the main-bar container so it can't get clipped */}
          {servicesOpen && (
            <div
              className="hidden lg:block absolute top-full left-6 lg:left-10 right-6 lg:right-10 z-40"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <div className="bg-[#0E1A2B] border border-[#1F2D40] shadow-2xl relative overflow-hidden">
                <div className="blueprint-grid absolute inset-0 opacity-30 pointer-events-none" />
                <div className="relative">
                  <div className="px-6 py-4 border-b border-[#1F2D40] flex items-baseline justify-between">
                    <div className="label-mono text-[#B8252F]">/ Service Lines</div>
                    <div className="label-mono text-[#C9C2B0] opacity-60">
                      {services.length} entries · {allCategoryIds.length} categories
                    </div>
                  </div>
                  <div className="grid grid-cols-4 divide-x divide-[#1F2D40]">
                    {allCategoryIds.map((catId) => {
                      const cat = categories[catId]
                      const catServices = getServicesByCategory(catId)
                      return (
                        <div key={cat.id} className="px-5 py-5">
                          <div className="label-mono text-[#B8252F] mb-3">
                            {cat.code} / {cat.shortTitle}
                          </div>
                          <h3 className="display-serif text-[#F2EEE5] text-lg leading-tight mb-4">
                            {cat.title}
                          </h3>
                          <ul className="space-y-1.5">
                            {catServices.map((s) => (
                              <li key={s.slug}>
                                <Link
                                  href={`/services/${s.slug}`}
                                  className="block text-sm text-[#C9C2B0] hover:text-[#F2EEE5] transition-colors"
                                >
                                  {s.shortTitle || s.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    })}
                  </div>
                  <Link
                    href="/services"
                    className="group flex items-center justify-between px-6 py-4 border-t border-[#1F2D40] text-[#F2EEE5] hover:bg-[#1F2D40] transition-colors"
                  >
                    <span className="label-mono">View all services</span>
                    <ArrowUpRight className="h-4 w-4 text-[#B8252F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          )}
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
                {item.hasMegaPanel && (
                  <div className="ml-4 my-2 space-y-3">
                    {allCategoryIds.map((catId) => {
                      const cat = categories[catId]
                      const catServices = getServicesByCategory(catId)
                      return (
                        <div key={cat.id} className="space-y-1">
                          <div className="label-mono text-[#B8252F] px-3 pt-2 pb-1">
                            {cat.code} / {cat.title}
                          </div>
                          {catServices.map((s) => (
                            <Link
                              key={s.slug}
                              href={`/services/${s.slug}`}
                              className="block px-3 py-1.5 text-sm text-[#C9C2B0] hover:text-[#F2EEE5]"
                              onClick={() => setMobileOpen(false)}
                            >
                              — {s.shortTitle || s.title}
                            </Link>
                          ))}
                        </div>
                      )
                    })}
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
