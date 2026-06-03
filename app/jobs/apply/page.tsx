import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Phone, Mail } from "lucide-react"
import { ApplicationForm } from "@/components/application-form"
import { positions, getPositionByCode } from "@/lib/positions"

export const metadata: Metadata = {
  title: "Apply",
  description:
    "Apply to join the Cowart Industrial Services crew. Submit your experience, certifications, and resume for industrial service, CDL vacuum truck, and hydro blasting roles.",
}

export default async function ApplyPage({
  searchParams,
}: {
  searchParams: Promise<{ role?: string }>
}) {
  const { role } = await searchParams
  const position = getPositionByCode(role)

  return (
    <>
      {/* HERO */}
      <section className="navy-grain text-[#F2EEE5] relative overflow-hidden">
        <div className="blueprint-grid absolute inset-0" />
        <div className="absolute top-6 left-6 w-6 h-6 border-l border-t border-[#B8252F]/60" />
        <div className="absolute top-6 right-6 w-6 h-6 border-r border-t border-[#B8252F]/60" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pt-16 pb-16 lg:pt-24 lg:pb-20">
          <div className="flex items-center gap-6 mb-12 lg:mb-16">
            <div className="label-mono text-[#B8252F]">File 05 / Apply</div>
            <div className="flex-1 h-px bg-[#1F2D40]" />
            <Link
              href="/jobs"
              className="group label-mono text-[#C9C2B0] hover:text-[#F2EEE5] flex items-center gap-2 transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-0.5 transition-transform" />
              All Openings
            </Link>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-9">
              <div className="label-mono text-[#C9C2B0] mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-[#B8252F]" />
                {position ? `${position.code} · ${position.type}` : "Now Hiring · Carrollton, GA"}
              </div>
              {position ? (
                <h1 className="display-serif text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[0.97] font-medium">
                  Apply for the
                  <br />
                  <span className="italic font-normal text-[#C9C2B0]">{position.title}</span>
                  <br />
                  role.
                </h1>
              ) : (
                <h1 className="display-serif text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] font-medium">
                  Apply to
                  <br />
                  <span className="italic font-normal text-[#C9C2B0]">join the</span>
                  <br />
                  crew.
                </h1>
              )}
              <p className="mt-8 max-w-xl text-[#C9C2B0] text-lg leading-relaxed font-light">
                Fill out the form below and attach your resume. We review every application and
                respond within one business day. Prefer to call or email? Both work too.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="paper-texture py-24 lg:py-32 relative">
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-7">
              <div className="label-mono text-[#B8252F] mb-4">Application 01 / Details</div>
              <h2 className="display-serif text-4xl lg:text-5xl text-[#0E1A2B] leading-[0.95] mb-2">
                {position ? position.title : "Job application"}
              </h2>
              <p className="text-[#3A3D44] font-light mb-12">
                Fields with <span className="text-[#B8252F]">*</span> are required.
              </p>
              <ApplicationForm positions={positions} initialCode={role} />
            </div>

            {/* Sidebar info */}
            <aside className="lg:col-span-5">
              <div className="lg:sticky lg:top-32 space-y-8">
                <div>
                  <div className="label-mono text-[#B8252F] mb-4">Prefer Direct?</div>
                  <h3 className="display-serif text-3xl text-[#0E1A2B] leading-tight mb-6">
                    Or reach us<br />
                    <span className="italic">another way.</span>
                  </h3>
                  <p className="text-[#3A3D44] font-light leading-relaxed">
                    You can call us during business hours or email your resume directly. Whatever&apos;s
                    easiest, we read every one.
                  </p>
                </div>

                <div className="border-t border-[#0E1A2B]">
                  <a
                    href="tel:770-834-2158"
                    className="group block py-5 border-b border-[#C9C2B0] hover:bg-[#E8E2D3]/40 transition-colors"
                  >
                    <div className="grid grid-cols-12 gap-3 items-start">
                      <div className="col-span-2 pt-1">
                        <Phone className="h-4 w-4 text-[#0E1A2B] group-hover:text-[#B8252F] transition-colors" />
                      </div>
                      <div className="col-span-10">
                        <div className="label-mono text-[#3A3D44] opacity-70 mb-1">Call</div>
                        <div className="display-serif text-lg lg:text-xl text-[#0E1A2B] leading-tight">
                          770.834.2158
                        </div>
                        <div className="text-sm text-[#3A3D44] mt-1 font-light">
                          Business hours
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href="mailto:info@cowartind.com?subject=Job Application"
                    className="group block py-5 border-b border-[#C9C2B0] hover:bg-[#E8E2D3]/40 transition-colors"
                  >
                    <div className="grid grid-cols-12 gap-3 items-start">
                      <div className="col-span-2 pt-1">
                        <Mail className="h-4 w-4 text-[#0E1A2B] group-hover:text-[#B8252F] transition-colors" />
                      </div>
                      <div className="col-span-10">
                        <div className="label-mono text-[#3A3D44] opacity-70 mb-1">Email</div>
                        <div className="display-serif text-lg lg:text-xl text-[#0E1A2B] leading-tight break-all">
                          info@cowartind.com
                        </div>
                        <div className="text-sm text-[#3A3D44] mt-1 font-light">
                          Attach your resume
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
