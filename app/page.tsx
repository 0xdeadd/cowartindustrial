import Link from "next/link"
import Image from "next/image"
import { Phone, ArrowUpRight } from "lucide-react"
import { getFeaturedServices } from "@/lib/services"

const services = getFeaturedServices()

const metrics = [
  { value: "50+", label: "Years Operating", sub: "Est. 1974" },
  { value: "24/7", label: "Emergency Response", sub: "Always Available" },
  { value: "8", label: "States Served", sub: "Southeast US" },
  { value: "100%", label: "Compliance Rate", sub: "OSHA · EPA · DOT" },
]

const certifications = [
  "HAZWOPER 40-Hour",
  "Confined Space Entry",
  "DOT Hazmat",
  "EPA RCRA Compliant",
  "OSHA 30-Hour",
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#08111E] text-[#F2EEE5] relative overflow-hidden">
        {/* MOBILE photo banner, full-width landscape, shows the whole truck */}
        <div className="lg:hidden relative w-full aspect-[4/3]">
          <Image
            src="/photos/hero-truck.jpg"
            alt="Cowart Industrial Services vacuum truck"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* mobile bottom fade into navy */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(8,17,30,0) 0%, rgba(8,17,30,0) 60%, rgba(8,17,30,0.95) 100%)",
            }}
          />
          {/* mobile corner brackets */}
          <div className="absolute top-4 left-4 w-5 h-5 border-l border-t border-[#B8252F]/80" />
          <div className="absolute top-4 right-4 w-5 h-5 border-r border-t border-[#B8252F]/80" />
        </div>

        {/* DESKTOP photo backdrop, fills section as overlay */}
        <div className="hidden lg:block absolute inset-0">
          <Image
            src="/photos/hero-truck.jpg"
            alt="Cowart Industrial Services vacuum truck"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 100vw"
            className="object-cover object-[70%_center]"
          />
        </div>
        {/* DESKTOP overlays */}
        <div
          className="hidden lg:block absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(8,17,30,0.7) 0%, rgba(8,17,30,0.35) 25%, rgba(8,17,30,0.1) 55%, rgba(8,17,30,0) 100%)",
          }}
        />
        <div
          className="hidden lg:block absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 65% at 28% 55%, rgba(8,17,30,0.55) 0%, rgba(8,17,30,0.25) 50%, rgba(8,17,30,0) 80%)",
          }}
        />
        <div
          className="hidden lg:block absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, transparent 75%, rgba(8,17,30,0.55) 100%)",
          }}
        />
        {/* Blueprint grid (both layouts) */}
        <div className="blueprint-grid absolute inset-0 opacity-20 hidden lg:block" />
        {/* Desktop corner brackets */}
        <div className="hidden lg:block absolute top-6 left-6 w-6 h-6 border-l border-t border-[#B8252F]/80 z-10" />
        <div className="hidden lg:block absolute top-6 right-6 w-6 h-6 border-r border-t border-[#B8252F]/80 z-10" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pt-6 pb-12 lg:pt-8 lg:pb-20">
          {/* meta strip */}
          <div className="flex items-center gap-6 mb-6 lg:mb-8">
            <div className="label-mono text-[#B8252F]">File 01 / Overview</div>
            <div className="flex-1 h-px bg-[#1F2D40]" />
            <div className="label-mono text-[#C9C2B0]">Carrollton, GA · 30117</div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 xl:col-span-7">
              <div className="label-mono text-[#C9C2B0] mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-[#B8252F]" />
                Environmental Services · Southeast US · Since 1974
              </div>
              <h1
                className="display-serif text-[clamp(2.75rem,7.5vw,6.5rem)] leading-[0.95] font-medium"
                style={{
                  textShadow:
                    "0 2px 4px rgba(8,17,30,0.95), 0 4px 16px rgba(8,17,30,0.85), 0 0 32px rgba(8,17,30,0.6), 0 0 2px rgba(8,17,30,1)",
                }}
              >
                Heavy work,
                <br />
                <span className="italic font-normal text-[#C9C2B0]">handled with</span>
                <br />
                precision <span className="text-[#B8252F]">&</span> care.
              </h1>
              <p
                className="mt-10 max-w-xl text-[#F2EEE5] text-lg leading-relaxed font-light"
                style={{
                  textShadow:
                    "0 1px 2px rgba(8,17,30,0.95), 0 2px 8px rgba(8,17,30,0.85), 0 0 1px rgba(8,17,30,1)",
                }}
              >
                Cowart Industrial Services has provided full-service environmental services and
                non-hazardous waste management across the Southeast for five decades. Industrial
                cleaning, hydro blasting, vacuum trucks, waste disposal, frac tanks, and on-site
                treatment, done right, done safely, on schedule.
              </p>

              <div className="mt-12 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="group flex items-center gap-4 bg-[#B8252F] hover:bg-[#8C1F1F] text-[#F2EEE5] px-7 py-4 transition-colors shadow-[0_8px_32px_rgba(184,37,47,0.3)]"
                >
                  <span className="label-mono">Request a Quote</span>
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
                <a
                  href="tel:770-834-2158"
                  className="flex items-center gap-3 border border-[#C9C2B0]/40 backdrop-blur-sm bg-[#08111E]/30 hover:border-[#C9C2B0] text-[#F2EEE5] px-7 py-4 transition-colors"
                >
                  <Phone className="h-4 w-4 text-[#B8252F]" />
                  <span className="label-mono">770.834.2158</span>
                </a>
              </div>
            </div>

            {/* Floating credential card, top-right so it doesn't cover the truck's wheels */}
            <div className="lg:col-span-4 lg:col-start-9 xl:col-span-4 xl:col-start-9 hidden lg:flex lg:items-start lg:justify-end">
              <div className="border border-[#C9C2B0]/30 backdrop-blur-md bg-[#08111E]/40 px-6 py-5 max-w-[260px]">
                <div className="label-mono text-[#B8252F] mb-3">Reg.</div>
                <div className="grid grid-cols-2 gap-x-5 gap-y-3">
                  <div>
                    <div className="label-mono text-[#C9C2B0] opacity-60">Est.</div>
                    <div className="display-serif text-2xl text-[#F2EEE5]">1974</div>
                  </div>
                  <div>
                    <div className="label-mono text-[#C9C2B0] opacity-60">Years</div>
                    <div className="display-serif text-2xl text-[#F2EEE5]">50+</div>
                  </div>
                  <div className="col-span-2 pt-3 border-t border-[#1F2D40]">
                    <div className="label-mono text-[#C9C2B0] opacity-60">Fleet</div>
                    <div className="display-serif text-base text-[#F2EEE5] mt-1">
                      Vacuum · Hydro · Roll-Off
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* metric strip, solid navy to cover photo */}
        <div className="relative bg-[#0E1A2B] border-t border-[#1F2D40] z-10">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#1F2D40]">
              {metrics.map((m, i) => (
                <div key={m.label} className="py-6 lg:py-8 px-4 lg:px-6 first:pl-0">
                  <div className="label-mono text-[#B8252F] mb-3">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="display-serif text-4xl lg:text-5xl text-[#F2EEE5] leading-none">
                    {m.value}
                  </div>
                  <div className="mt-3 text-sm font-medium text-[#F2EEE5]">{m.label}</div>
                  <div className="label-mono text-[#C9C2B0] mt-1 opacity-60">{m.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* certifications ticker */}
        <div className="relative border-t border-[#1F2D40] bg-[#08111E] z-10">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-4">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2 label-mono text-[#C9C2B0]">
              <span className="text-[#B8252F]">Certifications</span>
              {certifications.map((cert) => (
                <span key={cert} className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-[#B8252F]" />
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES, editorial numbered list */}
      <section className="paper-texture py-24 lg:py-32 relative">
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-8 mb-16 lg:mb-20">
            <div className="lg:col-span-4">
              <div className="label-mono text-[#B8252F] mb-4">File 02 / Capabilities</div>
              <h2 className="display-serif text-5xl lg:text-6xl leading-[0.95] text-[#0E1A2B]">
                What we
                <br />
                <span className="italic">do best.</span>
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 lg:pt-4">
              <p className="text-lg text-[#3A3D44] leading-relaxed font-light">
                Four capability categories, one operation. Industrial cleaning, hydro blasting,
                hydro excavating, vacuum service, waste disposal, frac tank storage, and on-site
                treatment, end-to-end, with our own treatment plant, our own fleet, and crews
                trained to do tough jobs without cutting corners.
              </p>
            </div>
          </div>

          {/* service rows */}
          <div className="border-t border-[#C9C2B0]">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group block border-b border-[#C9C2B0] hover:bg-[#E8E2D3]/40 transition-colors"
                >
                  <div className="grid grid-cols-12 gap-4 lg:gap-8 py-8 lg:py-10 items-start">
                    <div className="col-span-2 lg:col-span-1">
                      <div className="label-mono text-[#B8252F]">{service.code}</div>
                    </div>
                    <div className="col-span-10 lg:col-span-1">
                      {service.photo ? (
                        <div className="relative w-16 h-16 lg:w-20 lg:h-20 border border-[#0E1A2B] overflow-hidden">
                          <Image
                            src={service.photo}
                            alt=""
                            fill
                            sizes="80px"
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-[#0E1A2B]/0 group-hover:bg-[#B8252F]/30 transition-colors" />
                        </div>
                      ) : (
                        <div className="w-10 h-10 border border-[#0E1A2B] flex items-center justify-center group-hover:bg-[#0E1A2B] transition-colors">
                          <Icon className="h-4 w-4 text-[#0E1A2B] group-hover:text-[#F2EEE5] transition-colors" />
                        </div>
                      )}
                    </div>
                    <div className="col-span-12 lg:col-span-5">
                      <h3 className="display-serif text-3xl lg:text-4xl text-[#0E1A2B] leading-tight group-hover:text-[#B8252F] transition-colors">
                        {service.title}
                      </h3>
                      <div className="label-mono text-[#3A3D44] mt-2 opacity-70">
                        {service.keywords}
                      </div>
                    </div>
                    <div className="col-span-10 lg:col-span-4">
                      <p className="text-[#3A3D44] leading-relaxed font-light">
                        {service.description}
                      </p>
                    </div>
                    <div className="col-span-2 lg:col-span-1 flex justify-end">
                      <div className="w-10 h-10 border border-[#0E1A2B] flex items-center justify-center group-hover:bg-[#B8252F] group-hover:border-[#B8252F] transition-colors">
                        <ArrowUpRight className="h-4 w-4 text-[#0E1A2B] group-hover:text-[#F2EEE5] transition-colors" />
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* WHY COWART, letterpress two-column */}
      <section className="bg-[#0E1A2B] text-[#F2EEE5] py-24 lg:py-32 relative overflow-hidden">
        <div className="blueprint-grid absolute inset-0 opacity-40" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="label-mono text-[#B8252F] mb-4">File 03 / Trust</div>
              <h2 className="display-serif text-5xl lg:text-6xl leading-[0.95]">
                Built on
                <br />
                <span className="italic text-[#C9C2B0]">fifty years</span>
                <br />
                of trust.
              </h2>
              <p className="mt-8 text-[#C9C2B0] leading-relaxed font-light">
                Since 1974, Cowart Industrial Services has been the go-to partner for industrial
                cleaning and waste management across the Southeast. Family-operated, safety-first,
                and built to handle the work nobody else wants to take on.
              </p>
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 mt-10 label-mono text-[#F2EEE5] hover:text-[#B8252F] transition-colors"
              >
                Read our story
                <span className="w-8 h-px bg-[#F2EEE5] group-hover:bg-[#B8252F] group-hover:w-12 transition-all" />
              </Link>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 border-t border-l border-[#1F2D40]">
                {[
                  {
                    title: "Expertise",
                    code: "01",
                    desc: "Five decades of hands-on industrial experience across paper, food, and manufacturing.",
                    photo: undefined as string | undefined,
                  },
                  {
                    title: "Responsiveness",
                    code: "02",
                    desc: "Round-the-clock emergency dispatch. On-site response anywhere in the Southeast.",
                    photo: undefined as string | undefined,
                  },
                  {
                    title: "Safety",
                    code: "03",
                    desc: "HAZWOPER certified crews with full confined-space and respiratory protection.",
                    photo: "/photos/safety-loto.jpg",
                  },
                  {
                    title: "Flexibility",
                    code: "04",
                    desc: "Right-sized solutions for projects from single-truck cleanouts to multi-week jobs.",
                    photo: undefined as string | undefined,
                  },
                ].map((p) => (
                  <div key={p.code} className="border-r border-b border-[#1F2D40] p-8 lg:p-10 relative">
                    <div className="flex items-start justify-between mb-4">
                      <div className="label-mono text-[#B8252F]">{p.code}</div>
                      {p.photo && (
                        <div className="relative w-12 h-12 border border-[#1F2D40] overflow-hidden">
                          <Image
                            src={p.photo}
                            alt=""
                            fill
                            sizes="48px"
                            className="object-cover"
                          />
                        </div>
                      )}
                    </div>
                    <h3 className="display-serif text-2xl lg:text-3xl text-[#F2EEE5] mb-3">
                      {p.title}
                    </h3>
                    <p className="text-sm text-[#C9C2B0] leading-relaxed font-light">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA, calm, structural */}
      <section className="paper-texture py-20 lg:py-28 relative">
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="border-t border-b border-[#0E1A2B]">
            <div className="grid lg:grid-cols-12 gap-8 py-16 lg:py-20 items-center">
              <div className="lg:col-span-7">
                <div className="label-mono text-[#B8252F] mb-4">File 04 / Contact</div>
                <h2 className="display-serif text-4xl lg:text-6xl leading-[0.95] text-[#0E1A2B]">
                  Got a job no one else
                  <br />
                  <span className="italic">will touch?</span>
                </h2>
                <p className="mt-6 text-[#3A3D44] text-lg font-light max-w-xl">
                  Free consultation. 24-hour emergency response. Quote within one business day.
                </p>
              </div>
              <div className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-[#0E1A2B]">
                <div className="space-y-4">
                  <Link
                    href="/contact"
                    className="group flex items-center justify-between bg-[#B8252F] hover:bg-[#8C1F1F] text-[#F2EEE5] px-6 py-5 transition-colors"
                  >
                    <span className="label-mono">Request a Quote</span>
                    <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                  <a
                    href="tel:770-834-2158"
                    className="group flex items-center justify-between border border-[#0E1A2B] hover:bg-[#0E1A2B] hover:text-[#F2EEE5] text-[#0E1A2B] px-6 py-5 transition-colors"
                  >
                    <span className="label-mono flex items-center gap-3">
                      <Phone className="h-4 w-4" />
                      770.834.2158
                    </span>
                    <span className="label-mono opacity-60 group-hover:opacity-100">24/7</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
