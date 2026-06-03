import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, ArrowUpRight } from "lucide-react"
import { positions } from "@/lib/positions"

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Cowart Industrial Services team. View current job openings and apply today.",
}

const benefits = [
  {
    code: "01",
    title: "Stable Family-Operated Company",
    desc: "Same ownership since 1974. We invest long-term in our crews because our crews build the company's reputation every day.",
  },
  {
    code: "02",
    title: "Paid Industry Certifications",
    desc: "Cowart pays for HAZWOPER 40-hour, confined-space entry, DOT Hazmat, and other certifications. Credentials you keep.",
  },
  {
    code: "03",
    title: "Real Equipment, Real Work",
    desc: "Modern fleet, our own treatment plant, full PPE. We don't cut corners on safety or tools.",
  },
  {
    code: "04",
    title: "Growth Path",
    desc: "Crew lead, lead operator, supervisor, project manager. The path is open and we promote from within.",
  },
]

export default function JobsPage() {
  return (
    <>
      {/* HERO */}
      <section className="navy-grain text-[#F2EEE5] relative overflow-hidden">
        <div className="blueprint-grid absolute inset-0" />
        <div className="absolute top-6 left-6 w-6 h-6 border-l border-t border-[#B8252F]/60" />
        <div className="absolute top-6 right-6 w-6 h-6 border-r border-t border-[#B8252F]/60" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pt-16 pb-16 lg:pt-24 lg:pb-20">
          <div className="flex items-center gap-6 mb-12 lg:mb-16">
            <div className="label-mono text-[#B8252F]">File 05 / Careers</div>
            <div className="flex-1 h-px bg-[#1F2D40]" />
            <div className="label-mono text-[#C9C2B0]">Now Hiring</div>
          </div>
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-8">
              <div className="label-mono text-[#C9C2B0] mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-[#B8252F]" />
                Industrial work · Real crews · Real wages
              </div>
              <h1 className="display-serif text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] font-medium">
                Build a career
                <br />
                <span className="italic font-normal text-[#C9C2B0]">with people who</span>
                <br />
                stick around.
              </h1>
              <p className="mt-8 max-w-xl text-[#C9C2B0] text-lg leading-relaxed font-light">
                Cowart Industrial Services has been a trusted name in industrial work since 1974.
                Stable employer, paid certifications, real equipment, real growth. We hire crews
                that take pride in doing tough jobs right.
              </p>
            </div>
            <div className="lg:col-span-4 hidden lg:block">
              <div className="relative aspect-[4/5] border border-[#1F2D40] overflow-hidden">
                <Image
                  src="/photos/jobs-confined-space.jpg"
                  alt="Cowart crew performing a confined-space entry with proper PPE and an outside attendant"
                  fill
                  sizes="(max-width: 1024px) 0vw, 35vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(8,17,30,0.7) 0%, rgba(8,17,30,0) 30%, rgba(8,17,30,0) 65%, rgba(8,17,30,0.9) 100%)",
                  }}
                />
                <div className="relative h-full flex flex-col justify-between p-5">
                  <div className="flex items-start justify-between">
                    <div className="label-mono text-[#B8252F]">On the Job</div>
                    <div className="label-mono text-[#F2EEE5] text-[10px] opacity-80">
                      Confined Space
                    </div>
                  </div>
                  <div className="border-t border-[#F2EEE5]/30 pt-3">
                    <div className="label-mono text-[#F2EEE5] text-[10px] opacity-70">
                      HAZWOPER · Attendant on Watch · Proper PPE
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="paper-texture py-24 lg:py-32 relative">
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-16 lg:mb-20">
            <div className="lg:col-span-5">
              <div className="label-mono text-[#B8252F] mb-4">Why Cowart</div>
              <h2 className="display-serif text-5xl lg:text-6xl leading-[0.95] text-[#0E1A2B]">
                Why crews
                <br />
                <span className="italic">choose us.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 lg:pt-4">
              <p className="text-lg text-[#3A3D44] leading-relaxed font-light">
                We invest in the people who do the work. That investment is the reason our turnover
                is low and our crews are dialed in. Here&apos;s what that looks like.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-[#0E1A2B]">
            {benefits.map((b) => (
              <div key={b.code} className="border-r border-b border-[#0E1A2B] p-8 lg:p-10">
                <div className="label-mono text-[#B8252F] mb-4">{b.code}</div>
                <h3 className="display-serif text-2xl lg:text-3xl text-[#0E1A2B] mb-3">
                  {b.title}
                </h3>
                <p className="text-[#3A3D44] leading-relaxed font-light">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POSITIONS */}
      <section className="bg-[#0E1A2B] text-[#F2EEE5] py-24 lg:py-32 relative overflow-hidden">
        <div className="blueprint-grid absolute inset-0 opacity-40" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-12 pb-6 border-b border-[#1F2D40]">
            <div>
              <div className="label-mono text-[#B8252F] mb-3">Open Positions</div>
              <h2 className="display-serif text-4xl lg:text-5xl">Current openings</h2>
            </div>
            <div className="hidden md:block label-mono text-[#C9C2B0]">
              {positions.length} positions
            </div>
          </div>

          <div className="border-t border-[#1F2D40]">
            {positions.map((p) => (
              <div
                key={p.code}
                className="grid grid-cols-12 gap-4 lg:gap-8 py-8 lg:py-10 border-b border-[#1F2D40] items-start"
              >
                <div className="col-span-3 lg:col-span-1">
                  <div className="label-mono text-[#B8252F]">{p.code}</div>
                </div>
                <div className="col-span-9 lg:col-span-5">
                  <h3 className="display-serif text-2xl lg:text-3xl text-[#F2EEE5] leading-tight">
                    {p.title}
                  </h3>
                  <div className="mt-2 label-mono text-[#C9C2B0] opacity-70">{p.type}</div>
                </div>
                <div className="col-span-12 lg:col-span-4">
                  <div className="label-mono text-[#C9C2B0] opacity-60 mb-2">Requirements</div>
                  <p className="text-sm text-[#C9C2B0] leading-relaxed font-light">
                    {p.requirements}
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-2 lg:pt-2">
                  <Link
                    href={`/jobs/apply?role=${p.code}`}
                    className="group flex items-center justify-between border border-[#1F2D40] hover:border-[#B8252F] hover:bg-[#B8252F] text-[#F2EEE5] px-4 py-3 transition-colors"
                  >
                    <span className="label-mono">Apply</span>
                    <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO APPLY */}
      <section className="paper-texture py-24 relative">
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="label-mono text-[#B8252F] mb-4">How to Apply</div>
              <h2 className="display-serif text-4xl lg:text-5xl leading-[0.95] text-[#0E1A2B]">
                Three ways
                <br />
                <span className="italic">to reach us.</span>
              </h2>
              <p className="mt-6 text-[#3A3D44] leading-relaxed font-light max-w-md">
                Pick whichever&apos;s easiest. We respond to every application within one business
                day.
              </p>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 space-y-3">
              <a
                href="tel:770-834-2158"
                className="group flex items-center justify-between border border-[#0E1A2B] hover:bg-[#0E1A2B] hover:text-[#F2EEE5] text-[#0E1A2B] px-6 py-6 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-[#B8252F]" />
                  <div>
                    <div className="label-mono opacity-60">Call</div>
                    <div className="display-serif text-2xl">770.834.2158</div>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="mailto:info@cowartind.com"
                className="group flex items-center justify-between border border-[#0E1A2B] hover:bg-[#0E1A2B] hover:text-[#F2EEE5] text-[#0E1A2B] px-6 py-6 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-[#B8252F]" />
                  <div>
                    <div className="label-mono opacity-60">Email</div>
                    <div className="display-serif text-xl">info@cowartind.com</div>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <Link
                href="/jobs/apply"
                className="group flex items-center justify-between bg-[#B8252F] hover:bg-[#8C1F1F] text-[#F2EEE5] px-6 py-6 transition-colors"
              >
                <div>
                  <div className="label-mono opacity-80">Apply Online</div>
                  <div className="display-serif text-2xl">Job application form</div>
                </div>
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
