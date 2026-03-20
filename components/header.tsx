"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/lib/button-variants"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "Waste Water Management", href: "/services/waste-water-management" },
      { name: "Industrial Cleaning", href: "/services/industrial-cleaning" },
      { name: "Hydro Blasting", href: "/services/hydro-blasting" },
      { name: "Vacuum Trucks & Roll Offs", href: "/services/vacuum-trucks" },
      { name: "On-Site Filtration", href: "/services/on-site-filtration" },
    ],
  },
  { name: "FAQ", href: "/faq" },
  { name: "Jobs", href: "/jobs" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="bg-white border-b-2 border-[#CC2229] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.jpg"
              alt="Cowart Industrial Services"
              width={220}
              height={53}
              preload
              unoptimized
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) =>
              item.children ? (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                  {servicesOpen && (
                    <div className="absolute top-full left-0 w-64 bg-white border border-border rounded-md shadow-lg py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
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
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:770-834-2158"
              className="flex items-center gap-2 text-sm font-semibold text-[#1A2857]"
            >
              <Phone className="h-4 w-4" />
              770-834-2158
            </a>
            <Link href="/contact" className={cn(buttonVariants(), "bg-[#CC2229] hover:bg-[#a81c22] text-white")}>
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="px-4 py-4 space-y-2">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-foreground hover:bg-muted rounded-md"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="ml-4 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-border">
              <a
                href="tel:770-834-2158"
                className="flex items-center gap-2 px-3 py-2 text-base font-semibold"
              >
                <Phone className="h-5 w-5" />
                770-834-2158
              </a>
              <Link
                href="/contact"
                className={cn(buttonVariants(), "w-full mt-2 bg-[#CC2229] hover:bg-[#a81c22] text-white")}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
