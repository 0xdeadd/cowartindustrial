import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, Phone } from "lucide-react"
import { faqSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "What we do, what we accept, how scheduling works, certifications and credentials, disposal documentation — answers before you pick up the phone.",
}

const sections = [
  {
    code: "01",
    title: "Coverage & Response",
    faqs: [
      {
        question: "What areas do you serve?",
        answer:
          "Cowart Industrial Services serves the Southeastern United States. Our headquarters is in Carrollton, Georgia, and we regularly travel throughout the region to serve our clients.",
      },
      {
        question: "Do you offer emergency services?",
        answer:
          "Yes. We provide 24-hour emergency service. Call us at 770-834-2158 any time for urgent industrial service needs.",
      },
      {
        question: "What types of facilities do you service?",
        answer:
          "We serve a wide range of industrial facilities including manufacturing plants, processing facilities, power plants, refineries, and more. No project is too big or too small.",
      },
    ],
  },
  {
    code: "02",
    title: "Crews & Credentials",
    faqs: [
      {
        question: "What certifications do your workers hold?",
        answer:
          "All of our field personnel are trained with 40-hour HAZWOPER certification. Our team is also capable of confined space entry, and UST and AST entry and cleaning.",
      },
      {
        question: "Do you handle hazardous waste?",
        answer:
          "Cowart Industrial Services specializes in non-hazardous waste management. We do not handle hazardous materials.",
      },
    ],
  },
  {
    code: "03",
    title: "Equipment & Operations",
    faqs: [
      {
        question: "Do you have your own wastewater treatment plant?",
        answer:
          "Yes. Cowart Industrial operates its own wastewater treatment plant, which allows us to process and properly dispose of a wide range of non-hazardous liquid wastes.",
      },
      {
        question: "What equipment do you operate?",
        answer:
          "Our fleet includes vacuum trucks, air movers, hydro blasting equipment, pressure washers, roll-off containers, and mobile filtration units. We have the equipment to handle virtually any industrial service need.",
      },
    ],
  },
  {
    code: "04",
    title: "Quotes & Scheduling",
    faqs: [
      {
        question: "How do I request a quote?",
        answer:
          "You can request a quote by calling us at 770-834-2158, emailing info@cowartind.com, or filling out the contact form on our website. Quotes typically come back within one business day.",
      },
    ],
  },
]

export default function FAQPage() {
  let qIndex = 0
  const allFaqs = sections.flatMap((s) => s.faqs)
  const ld = faqSchema(allFaqs)
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />

      {/* HERO */}
      <section className="navy-grain text-[#F2EEE5] relative overflow-hidden">
        <div className="blueprint-grid absolute inset-0" />
        <div className="absolute top-6 left-6 w-6 h-6 border-l border-t border-[#B8252F]/60" />
        <div className="absolute top-6 right-6 w-6 h-6 border-r border-t border-[#B8252F]/60" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pt-16 pb-16 lg:pt-24 lg:pb-20">
          <div className="flex items-center gap-6 mb-12 lg:mb-16">
            <div className="label-mono text-[#B8252F]">— File 04 / FAQ</div>
            <div className="flex-1 h-px bg-[#1F2D40]" />
            <div className="label-mono text-[#C9C2B0]">Reference Document</div>
          </div>
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-9">
              <div className="label-mono text-[#C9C2B0] mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-[#B8252F]" />
                Common questions, straight answers
              </div>
              <h1 className="display-serif text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] font-medium">
                Frequently asked
                <br />
                <span className="italic font-normal text-[#C9C2B0]">questions.</span>
              </h1>
              <p className="mt-8 max-w-xl text-[#C9C2B0] text-lg leading-relaxed font-light">
                Quick reference for service area, certifications, equipment, and how to request a
                quote. Don&apos;t see your question? Call us — we answer the phone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ DOCUMENT */}
      <section className="paper-texture py-20 lg:py-28 relative">
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          {sections.map((section) => (
            <div key={section.code} className="mb-16 lg:mb-20 last:mb-0">
              {/* Section header */}
              <div className="grid grid-cols-12 gap-4 lg:gap-8 border-b border-[#0E1A2B] pb-4 mb-2">
                <div className="col-span-3 lg:col-span-2">
                  <div className="label-mono text-[#B8252F]">— Section {section.code}</div>
                </div>
                <div className="col-span-9 lg:col-span-10">
                  <h2 className="display-serif text-3xl lg:text-4xl text-[#0E1A2B] leading-tight">
                    {section.title}
                  </h2>
                </div>
              </div>
              {/* Questions */}
              <div>
                {section.faqs.map((faq) => {
                  qIndex++
                  return (
                    <div
                      key={faq.question}
                      className="grid grid-cols-12 gap-4 lg:gap-8 py-8 lg:py-10 border-b border-[#C9C2B0]"
                    >
                      <div className="col-span-3 lg:col-span-2">
                        <div className="label-mono text-[#B8252F] mb-2">
                          Q—{String(qIndex).padStart(2, "0")}
                        </div>
                      </div>
                      <div className="col-span-9 lg:col-span-4">
                        <h3 className="display-serif text-2xl text-[#0E1A2B] leading-tight">
                          {faq.question}
                        </h3>
                      </div>
                      <div className="col-span-12 lg:col-span-6">
                        <p className="text-[#3A3D44] leading-relaxed font-light text-base lg:text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="paper-texture pb-24 relative">
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="border-t border-b border-[#0E1A2B]">
            <div className="grid lg:grid-cols-12 gap-8 py-16 lg:py-20 items-center">
              <div className="lg:col-span-7">
                <div className="label-mono text-[#B8252F] mb-4">— Still have questions?</div>
                <h2 className="display-serif text-4xl lg:text-5xl leading-[0.95] text-[#0E1A2B]">
                  Reach out and
                  <br />
                  <span className="italic">we&apos;ll get back.</span>
                </h2>
                <p className="mt-6 text-[#3A3D44] text-lg font-light max-w-xl">
                  We answer the phone. We return calls. We don&apos;t hide behind chatbots.
                </p>
              </div>
              <div className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-[#0E1A2B]">
                <div className="space-y-4">
                  <Link
                    href="/contact"
                    className="group flex items-center justify-between bg-[#B8252F] hover:bg-[#8C1F1F] text-[#F2EEE5] px-6 py-5 transition-colors"
                  >
                    <span className="label-mono">Contact Us</span>
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
