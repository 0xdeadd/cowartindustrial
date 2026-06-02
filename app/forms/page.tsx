import type { Metadata } from "next"
import Link from "next/link"
import { Phone, Download, ArrowUpRight, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Waste Profile & Account Forms",
  description:
    "Download Cowart's Waste Profile form, account-setup paperwork, and compliance docs for new and existing industrial accounts across the Southeast.",
}

const forms = [
  {
    code: "F-01",
    title: "Waste Profile",
    description:
      "Required for all new commercial customers. Captures billing details, generator information, waste description, physical properties (flash point, pH, specific gravity, viscosity), volume, and composition. Submit with your quote request to speed up scheduling.",
    href: "/forms/waste-profile.pdf",
    filename: "waste-profile.pdf",
    size: "94 KB",
    pages: 1,
    sections: "A. Billing · B. Generator · C. Description · D. Physical · E. Volume · F. Composition",
    audience: "New commercial customers",
  },
]

export default function FormsPage() {
  return (
    <>
      {/* HERO */}
      <section className="navy-grain text-[#F2EEE5] relative overflow-hidden">
        <div className="blueprint-grid absolute inset-0" />
        <div className="absolute top-6 left-6 w-6 h-6 border-l border-t border-[#B8252F]/60" />
        <div className="absolute top-6 right-6 w-6 h-6 border-r border-t border-[#B8252F]/60" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pt-16 pb-16 lg:pt-24 lg:pb-20">
          <div className="flex items-center gap-6 mb-12 lg:mb-16">
            <div className="label-mono text-[#B8252F]">File 07 / Forms</div>
            <div className="flex-1 h-px bg-[#1F2D40]" />
            <div className="label-mono text-[#C9C2B0]">Customer Documents</div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-9">
              <div className="label-mono text-[#C9C2B0] mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-[#B8252F]" />
                Download · Print · Submit
              </div>
              <h1 className="display-serif text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] font-medium">
                Forms &amp;
                <br />
                <span className="italic font-normal text-[#C9C2B0]">documents.</span>
              </h1>
              <p className="mt-8 max-w-xl text-[#C9C2B0] text-lg leading-relaxed font-light">
                Customer-facing forms for new commercial accounts and recurring service
                arrangements. Download, fill out, and submit with your quote request, or call
                770.834.2158 if you&apos;d rather walk through it on the phone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FORMS DIRECTORY */}
      <section className="paper-texture py-20 lg:py-28 relative">
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-12 lg:mb-16 border-b border-[#C9C2B0] pb-6">
            <div>
              <div className="label-mono text-[#B8252F] mb-3">Directory</div>
              <h2 className="display-serif text-3xl lg:text-4xl text-[#0E1A2B]">
                Available Forms
              </h2>
            </div>
            <div className="hidden md:block label-mono text-[#3A3D44]">
              {forms.length} {forms.length === 1 ? "entry" : "entries"}
            </div>
          </div>

          <div className="border-t border-[#C9C2B0]">
            {forms.map((form) => (
              <div
                key={form.code}
                className="grid grid-cols-12 gap-4 lg:gap-8 py-10 lg:py-12 border-b border-[#C9C2B0]"
              >
                <div className="col-span-2 lg:col-span-1">
                  <div className="label-mono text-[#B8252F]">{form.code}</div>
                </div>

                <div className="col-span-10 lg:col-span-1">
                  <div className="aspect-square max-w-[80px] border border-[#0E1A2B] flex items-center justify-center">
                    <FileText className="h-7 w-7 text-[#0E1A2B]" />
                  </div>
                </div>

                <div className="col-span-12 lg:col-span-6">
                  <h3 className="display-serif text-3xl lg:text-4xl text-[#0E1A2B] leading-tight">
                    {form.title}
                  </h3>
                  <p className="mt-4 text-[#3A3D44] leading-relaxed font-light">
                    {form.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 label-mono text-[#3A3D44] opacity-70">
                    <span>
                      <span className="text-[#B8252F]">/</span> {form.audience}
                    </span>
                    <span>
                      <span className="text-[#B8252F]">~</span> {form.sections}
                    </span>
                  </div>
                </div>

                <div className="col-span-12 lg:col-span-4 flex flex-col gap-3 lg:pl-4">
                  <div className="flex items-center justify-between border-b border-[#C9C2B0] pb-2">
                    <div className="label-mono text-[#3A3D44]">Spec</div>
                    <div className="label-mono text-[#0E1A2B]">PDF · {form.size}</div>
                  </div>
                  <a
                    href={form.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between bg-[#0E1A2B] hover:bg-[#08111E] text-[#F2EEE5] px-5 py-4 transition-colors"
                  >
                    <span className="label-mono flex items-center gap-3">
                      <Download className="h-4 w-4 text-[#B8252F]" />
                      Download PDF
                    </span>
                    <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                  <a
                    href={form.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between border border-[#0E1A2B] hover:bg-[#E8E2D3]/40 text-[#0E1A2B] px-5 py-3 transition-colors"
                  >
                    <span className="label-mono">Preview in Browser</span>
                    <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
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
                <div className="label-mono text-[#B8252F] mb-4">Help filling it out?</div>
                <h2 className="display-serif text-4xl lg:text-5xl leading-[0.95] text-[#0E1A2B]">
                  Need help with the
                  <br />
                  <span className="italic">paperwork?</span>
                </h2>
                <p className="mt-6 text-[#3A3D44] text-lg font-light max-w-xl">
                  Call us. Brenda or one of the team can walk you through any field. We&apos;d
                  rather you ask than guess.
                </p>
              </div>
              <div className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-[#0E1A2B]">
                <div className="space-y-4">
                  <a
                    href="tel:770-834-2158"
                    className="group flex items-center justify-between bg-[#B8252F] hover:bg-[#8C1F1F] text-[#F2EEE5] px-6 py-5 transition-colors"
                  >
                    <span className="label-mono flex items-center gap-3">
                      <Phone className="h-4 w-4" />
                      770.834.2158
                    </span>
                    <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                  <Link
                    href="/contact"
                    className="group flex items-center justify-between border border-[#0E1A2B] hover:bg-[#0E1A2B] hover:text-[#F2EEE5] text-[#0E1A2B] px-6 py-5 transition-colors"
                  >
                    <span className="label-mono">Send a Message</span>
                    <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
