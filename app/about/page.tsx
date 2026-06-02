import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Family-Owned Since 1974",
  description:
    "Family-owned industrial environmental services in Carrollton, GA since 1974. Own treatment plant, own DOT number, 24-hour dispatch across 8 states.",
}

const timeline = [
  {
    year: "1974",
    title: "Founded",
    detail:
      "Established as a septic tank pumping service in Carrollton, Georgia. Local roots, family-operated.",
  },
  {
    year: "2006",
    title: "Industrial expansion",
    detail:
      "Expanded into industrial services, bringing decades of operational rigor to manufacturing and processing facilities.",
  },
  {
    year: "Today",
    title: "Full-service operation",
    detail:
      "Non-hazardous waste management, industrial cleaning, hydro blasting, vacuum services across the Southeast, with our own treatment plant and fleet.",
  },
]

const capabilities = [
  { code: "C-01", label: "40-Hour HAZWOPER Certified Personnel" },
  { code: "C-02", label: "Confined Space Entry Capable" },
  { code: "C-03", label: "UST and AST Entry and Cleaning" },
  { code: "C-04", label: "Own Wastewater Treatment Plant" },
  { code: "C-05", label: "24-Hour Emergency Service" },
  { code: "C-06", label: "Full Fleet of Specialized Equipment" },
  { code: "C-07", label: "DOT Hazmat Transport Certified" },
  { code: "C-08", label: "EPA RCRA Compliant" },
]

const fieldWork = [
  {
    src: "/photos/gallery-hydroblast.jpg",
    label: "Hydro-Blasting",
    code: "S-14",
    alt: "Cowart operator in PPE hydro-blasting an interior tank wall",
  },
  {
    src: "/photos/gallery-sludge-cleanout.jpg",
    label: "Confined-Space Cleanout",
    code: "S-13",
    alt: "Technician in a full suit shoveling sludge inside a confined vessel",
  },
  {
    src: "/photos/gallery-vac-transfer.jpg",
    label: "Liquid Transfer",
    code: "S-08",
    alt: "Cowart vacuum tanker transferring liquid to staged containers on-site",
  },
  {
    src: "/photos/gallery-rolloff-haul.jpg",
    label: "Roll-Off Transport",
    code: "CRB-060",
    alt: "Cowart roll-off truck hauling box CRB-060",
  },
  {
    src: "/photos/gallery-rolloff-field.jpg",
    label: "Roll-Off Box",
    code: "CRB-080",
    alt: "Cowart roll-off box CRB-080 staged at a jobsite",
  },
  {
    src: "/photos/gallery-vacuum-box.jpg",
    label: "Vacuum Box",
    code: "CVB-120",
    alt: "Cowart sealed vacuum box CVB-120 staged for loading",
  },
]

const pillars = [
  {
    code: "01",
    title: "Established 1974",
    desc: "Five decades of family-operated continuity. Same ownership, same standards, same accountability.",
  },
  {
    code: "02",
    title: "Experienced Crews",
    desc: "All field personnel hold 40-hour HAZWOPER certification and confined-space credentials.",
  },
  {
    code: "03",
    title: "Safety Discipline",
    desc: "Strict protocols, full regulatory compliance, zero corner-cutting on every job site.",
  },
  {
    code: "04",
    title: "Owned Equipment",
    desc: "Our own treatment plant, our own fleet, our own crews, no subcontractor handoffs.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="navy-grain text-[#F2EEE5] relative overflow-hidden">
        <div className="blueprint-grid absolute inset-0" />
        <div className="absolute top-6 left-6 w-6 h-6 border-l border-t border-[#B8252F]/60" />
        <div className="absolute top-6 right-6 w-6 h-6 border-r border-t border-[#B8252F]/60" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pt-16 pb-16 lg:pt-24 lg:pb-20">
          <div className="flex items-center gap-6 mb-12 lg:mb-16">
            <div className="label-mono text-[#B8252F]">File 02 / About</div>
            <div className="flex-1 h-px bg-[#1F2D40]" />
            <div className="label-mono text-[#C9C2B0]">Index · Company</div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-8">
              <div className="label-mono text-[#C9C2B0] mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-[#B8252F]" />
                Family-operated since 1974 · Carrollton, GA
              </div>
              <h1 className="display-serif text-[clamp(2.5rem,6.5vw,5.25rem)] leading-[0.95] font-medium">
                Five decades of
                <br />
                <span className="italic font-normal text-[#C9C2B0]">doing what we say</span>
                <br />
                we&apos;ll do.
              </h1>
              <p className="mt-10 max-w-xl text-[#C9C2B0] text-lg leading-relaxed font-light">
                Cowart Industrial Services has provided full-service, non-hazardous waste management
                across the Southeastern United States since 1974. Same family, same name on the
                door, same number that&apos;s answered when you call.
              </p>
            </div>
            <div className="lg:col-span-4 hidden lg:block">
              <div className="relative aspect-[4/5] border border-[#1F2D40] overflow-hidden">
                <Image
                  src="/photos/about-fleet.jpg"
                  alt="A Cowart Industrial Services vacuum truck in the fleet yard"
                  fill
                  sizes="(max-width: 1024px) 0vw, 35vw"
                  className="object-cover"
                />
                {/* Edge fades for label readability */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(8,17,30,0.65) 0%, rgba(8,17,30,0) 30%, rgba(8,17,30,0) 70%, rgba(8,17,30,0.85) 100%)",
                  }}
                />
                {/* Editorial caption labels */}
                <div className="relative h-full flex flex-col justify-between p-5">
                  <div className="flex items-start justify-between">
                    <div className="label-mono text-[#B8252F]">Fleet</div>
                    <div className="label-mono text-[#F2EEE5] text-[10px] opacity-80">
                      VT·019
                    </div>
                  </div>
                  <div className="border-t border-[#F2EEE5]/30 pt-3 grid grid-cols-2 gap-3">
                    <div>
                      <div className="label-mono text-[#F2EEE5] text-[10px] opacity-70">Est.</div>
                      <div className="display-serif text-xl text-[#F2EEE5]">1974</div>
                    </div>
                    <div>
                      <div className="label-mono text-[#F2EEE5] text-[10px] opacity-70">Years</div>
                      <div className="display-serif text-xl text-[#F2EEE5]">50+</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="paper-texture py-24 lg:py-32 relative">
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="label-mono text-[#B8252F] mb-4">File 02.1 / History</div>
              <h2 className="display-serif text-5xl lg:text-6xl leading-[0.95] text-[#0E1A2B]">
                Our
                <br />
                <span className="italic">story.</span>
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <div className="space-y-6 text-[#3A3D44] text-lg leading-relaxed font-light">
                <p>
                  <span className="display-serif text-[#0E1A2B] font-medium text-xl">
                    Cowart Industrial Services LLC was established in 1974
                  </span>{" "}
                  as a septic tank pumping service in Carrollton, Georgia. Over the decades, we
                  recognized the growing need for comprehensive industrial services in the region
                  and expanded our operations accordingly.
                </p>
                <p>
                  In 2006, we made the strategic decision to expand into industrial services,
                  bringing the same dedication to quality and customer satisfaction that built our
                  reputation.
                </p>
                <p>
                  Today, Cowart Industrial Services has grown into a full service, non-hazardous
                  waste management organization. We serve clients across the Southeastern United
                  States with a comprehensive range of environmental and industrial solutions.
                </p>
                <p>
                  Our commitment to safety, responsiveness, and flexibility has made us the trusted
                  partner for businesses that need reliable industrial services. With 24-hour
                  emergency response, we&apos;re always ready when our clients need us most.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-20 lg:mt-28 border-t border-[#C9C2B0]">
            {timeline.map((t, i) => (
              <div
                key={t.year}
                className="grid grid-cols-12 gap-4 lg:gap-8 py-8 lg:py-10 border-b border-[#C9C2B0]"
              >
                <div className="col-span-3 lg:col-span-2">
                  <div className="label-mono text-[#B8252F] mb-2">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="display-serif text-3xl lg:text-4xl text-[#0E1A2B]">{t.year}</div>
                </div>
                <div className="col-span-9 lg:col-span-4">
                  <h3 className="display-serif text-2xl lg:text-3xl text-[#0E1A2B] leading-tight">
                    {t.title}
                  </h3>
                </div>
                <div className="col-span-12 lg:col-span-6">
                  <p className="text-[#3A3D44] leading-relaxed font-light">{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS, on navy */}
      <section className="bg-[#0E1A2B] text-[#F2EEE5] py-24 lg:py-32 relative overflow-hidden">
        <div className="blueprint-grid absolute inset-0 opacity-40" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-16 lg:mb-20">
            <div className="lg:col-span-5">
              <div className="label-mono text-[#B8252F] mb-4">File 02.2 / Why Cowart</div>
              <h2 className="display-serif text-5xl lg:text-6xl leading-[0.95]">
                Why crews,
                <br />
                <span className="italic text-[#C9C2B0]">plants, and</span>
                <br />
                clients pick us.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 lg:pt-4">
              <p className="text-[#C9C2B0] text-lg leading-relaxed font-light">
                Industrial customers across the Southeast pick Cowart for the same four reasons,
                project after project. They&apos;re not slogans, they&apos;re what we&apos;ve been
                building for fifty years.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 border-t border-l border-[#1F2D40]">
            {pillars.map((p) => (
              <div key={p.code} className="border-r border-b border-[#1F2D40] p-8 lg:p-10">
                <div className="label-mono text-[#B8252F] mb-4">{p.code}</div>
                <h3 className="display-serif text-2xl lg:text-3xl text-[#F2EEE5] mb-3">
                  {p.title}
                </h3>
                <p className="text-sm text-[#C9C2B0] leading-relaxed font-light">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FIELD WORK, jobsite gallery */}
      <section className="paper-texture py-24 lg:py-32 relative">
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-16">
            <div className="lg:col-span-5">
              <div className="label-mono text-[#B8252F] mb-4">File 02.3 / Field Work</div>
              <h2 className="display-serif text-5xl lg:text-6xl leading-[0.95] text-[#0E1A2B]">
                On the
                <br />
                <span className="italic">job.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 lg:pt-4">
              <p className="text-lg text-[#3A3D44] leading-relaxed font-light">
                Real crews, real equipment, real sites across the Southeast. Every truck and box
                carries its own unit number, the same fleet that shows up when you call.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#C9C2B0]">
            {fieldWork.map((shot) => (
              <div
                key={shot.src}
                className="group border-r border-b border-[#C9C2B0] relative aspect-[4/3] overflow-hidden"
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(8,17,30,0) 55%, rgba(8,17,30,0.85) 100%)",
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between">
                  <div className="label-mono text-[#F2EEE5] text-[11px]">{shot.label}</div>
                  <div className="label-mono text-[#B8252F] text-[11px]">{shot.code}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES, editorial list */}
      <section className="paper-texture py-24 lg:py-32 relative">
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-16">
            <div className="lg:col-span-4">
              <div className="label-mono text-[#B8252F] mb-4">File 02.4 / Credentials</div>
              <h2 className="display-serif text-5xl lg:text-6xl leading-[0.95] text-[#0E1A2B]">
                Certifications
                <br />
                <span className="italic">&amp; capabilities.</span>
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <p className="text-lg text-[#3A3D44] leading-relaxed font-light pt-4">
                Every Cowart crew member is trained, certified, and current on the credentials
                required for safe industrial work. The list below is current as of {new Date().getFullYear()}.
              </p>
            </div>
          </div>

          <div className="border-t border-[#C9C2B0]">
            {capabilities.map((c) => (
              <div
                key={c.code}
                className="grid grid-cols-12 gap-4 py-5 border-b border-[#C9C2B0] hover:bg-[#E8E2D3]/40 transition-colors"
              >
                <div className="col-span-3 lg:col-span-2">
                  <div className="label-mono text-[#B8252F]">{c.code}</div>
                </div>
                <div className="col-span-9 lg:col-span-10">
                  <div className="display-serif text-xl lg:text-2xl text-[#0E1A2B]">{c.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="paper-texture pb-24 relative">
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="border-t border-b border-[#0E1A2B]">
            <div className="grid lg:grid-cols-12 gap-8 py-16 lg:py-20 items-center">
              <div className="lg:col-span-7">
                <div className="label-mono text-[#B8252F] mb-4">File 02.5 / Next</div>
                <h2 className="display-serif text-4xl lg:text-5xl leading-[0.95] text-[#0E1A2B]">
                  Ready to put us to
                  <br />
                  <span className="italic">work?</span>
                </h2>
                <p className="mt-6 text-[#3A3D44] text-lg font-light max-w-xl">
                  Free consultation. Quote within one business day. 24-hour emergency dispatch.
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
