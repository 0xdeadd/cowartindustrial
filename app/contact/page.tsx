import type { Metadata } from "next"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Free quote from Cowart Industrial Services, family-operated since 1974 in Carrollton, GA. 24-hour emergency dispatch, HAZWOPER-40 crews, 8 Southeastern states.",
}

const contactBlocks = [
  {
    code: "01",
    label: "Address",
    icon: MapPin,
    primary: "834 Kingsbridge Road",
    secondary: "Carrollton, GA 30117",
  },
  {
    code: "02",
    label: "Phone",
    icon: Phone,
    primary: "770.834.2158",
    secondary: "24-Hour Emergency",
    href: "tel:770-834-2158",
  },
  {
    code: "03",
    label: "Email",
    icon: Mail,
    primary: "info@cowartind.com",
    secondary: "Quotes & General Inquiries",
    href: "mailto:info@cowartind.com",
  },
  {
    code: "04",
    label: "Hours",
    icon: Clock,
    primary: "24 / 7 / 365",
    secondary: "Always Available",
  },
]

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="navy-grain text-[#F2EEE5] relative overflow-hidden">
        <div className="blueprint-grid absolute inset-0" />
        <div className="absolute top-6 left-6 w-6 h-6 border-l border-t border-[#B8252F]/60" />
        <div className="absolute top-6 right-6 w-6 h-6 border-r border-t border-[#B8252F]/60" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pt-16 pb-16 lg:pt-24 lg:pb-20">
          <div className="flex items-center gap-6 mb-12 lg:mb-16">
            <div className="label-mono text-[#B8252F]">File 06 / Contact</div>
            <div className="flex-1 h-px bg-[#1F2D40]" />
            <div className="label-mono text-[#C9C2B0]">Inquiry · Quote · Emergency</div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-9">
              <div className="label-mono text-[#C9C2B0] mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-[#B8252F]" />
                We answer the phone · Quotes within 1 business day
              </div>
              <h1 className="display-serif text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] font-medium">
                Tell us about
                <br />
                <span className="italic font-normal text-[#C9C2B0]">the job.</span>
              </h1>
              <p className="mt-8 max-w-xl text-[#C9C2B0] text-lg leading-relaxed font-light">
                Free consultation. 24-hour emergency dispatch. Whether it&apos;s a scheduled
                project or something urgent, fill out the form, call, or email and we&apos;ll get
                back to you fast.
              </p>
            </div>
          </div>
        </div>

        {/* Contact strip */}
        <div className="relative border-t border-[#1F2D40]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:divide-x divide-y sm:divide-y-0 lg:divide-y-0 divide-[#1F2D40]">
              {contactBlocks.map((b) => {
                const Icon = b.icon
                const Wrapper: React.ElementType = b.href ? "a" : "div"
                const wrapperProps = b.href ? { href: b.href } : {}
                const isEmail = b.label === "Email"
                return (
                  <Wrapper
                    key={b.code}
                    {...wrapperProps}
                    className="group py-6 px-4 lg:px-6 sm:first:pl-0 lg:first:pl-0 hover:bg-[#1F2D40]/30 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="label-mono text-[#B8252F]">{b.code}</div>
                      <Icon className="h-4 w-4 text-[#C9C2B0] group-hover:text-[#B8252F] transition-colors" />
                    </div>
                    <div className="label-mono text-[#C9C2B0] opacity-60 mb-2">{b.label}</div>
                    <div
                      className={`display-serif text-[#F2EEE5] leading-tight ${
                        isEmail ? "text-base lg:text-lg break-all" : "text-lg lg:text-xl"
                      }`}
                    >
                      {b.primary}
                    </div>
                    <div className="label-mono text-[#C9C2B0] mt-1 opacity-70 text-[10px]">
                      {b.secondary}
                    </div>
                  </Wrapper>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FORM + INFO */}
      <section id="quote" className="paper-texture py-24 lg:py-32 relative">
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-7">
              <div className="label-mono text-[#B8252F] mb-4">Form 01 / Inquiry</div>
              <h2 className="display-serif text-4xl lg:text-5xl text-[#0E1A2B] leading-[0.95] mb-2">
                Send a message
              </h2>
              <p className="text-[#3A3D44] font-light mb-12">
                Fields with <span className="text-[#B8252F]">*</span> are required.
              </p>
              <ContactForm />
            </div>

            {/* Sidebar info */}
            <aside className="lg:col-span-5">
              <div className="lg:sticky lg:top-32 space-y-8">
                <div>
                  <div className="label-mono text-[#B8252F] mb-4">Direct Contact</div>
                  <h3 className="display-serif text-3xl text-[#0E1A2B] leading-tight mb-6">
                    Or reach us<br />
                    <span className="italic">directly.</span>
                  </h3>
                </div>

                <div className="border-t border-[#0E1A2B]">
                  {contactBlocks.map((b) => {
                    const Icon = b.icon
                    const Wrapper: React.ElementType = b.href ? "a" : "div"
                    const wrapperProps = b.href ? { href: b.href } : {}
                    return (
                      <Wrapper
                        key={b.code}
                        {...wrapperProps}
                        className="group block py-5 border-b border-[#C9C2B0] hover:bg-[#E8E2D3]/40 transition-colors"
                      >
                        <div className="grid grid-cols-12 gap-3 items-start">
                          <div className="col-span-2 label-mono text-[#B8252F] pt-1">{b.code}</div>
                          <div className="col-span-2 pt-1">
                            <Icon className="h-4 w-4 text-[#0E1A2B] group-hover:text-[#B8252F] transition-colors" />
                          </div>
                          <div className="col-span-8">
                            <div className="label-mono text-[#3A3D44] opacity-70 mb-1">
                              {b.label}
                            </div>
                            <div className="display-serif text-lg lg:text-xl text-[#0E1A2B] leading-tight">
                              {b.primary}
                            </div>
                            <div className="text-sm text-[#3A3D44] mt-1 font-light">
                              {b.secondary}
                            </div>
                          </div>
                        </div>
                      </Wrapper>
                    )
                  })}
                </div>

                {/* Map */}
                <div className="border border-[#0E1A2B] bg-[#0E1A2B] overflow-hidden">
                  <div className="px-4 py-3 border-b border-[#1F2D40] flex items-center justify-between">
                    <div className="label-mono text-[#B8252F]">Location</div>
                    <div className="label-mono text-[#C9C2B0] opacity-60">
                      Carrollton · Coweta · GA
                    </div>
                  </div>
                  <iframe
                    title="Cowart Industrial Services, 834 Kingsbridge Rd, Carrollton, GA 30117"
                    src="https://maps.google.com/maps?q=834+Kingsbridge+Road+Carrollton+GA+30117&t=&z=15&ie=UTF8&iwloc=B&output=embed"
                    width="100%"
                    height="280"
                    style={{ border: 0, filter: "grayscale(0.4) contrast(1.05)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
