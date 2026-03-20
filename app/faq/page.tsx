import type { Metadata } from "next"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/lib/button-variants"

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Cowart Industrial Services, our capabilities, service area, and more.",
}

const faqs = [
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
    question: "What certifications do your workers hold?",
    answer:
      "All of our field personnel are trained with 40-hour HAZWOPER certification. Our team is also capable of confined space entry, and UST and AST entry and cleaning.",
  },
  {
    question: "Do you handle hazardous waste?",
    answer:
      "Cowart Industrial Services specializes in non-hazardous waste management. We do not handle hazardous materials.",
  },
  {
    question: "How do I request a quote?",
    answer:
      "You can request a quote by calling us at 770-834-2158, emailing brenda.mckoon@cowartind.com, or filling out the contact form on our website.",
  },
  {
    question: "What types of facilities do you service?",
    answer:
      "We serve a wide range of industrial facilities including manufacturing plants, processing facilities, power plants, refineries, and more. No project is too big or too small.",
  },
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
]

export default function FAQPage() {
  return (
    <>
      <section className="bg-[#32373c] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl">
            Find answers to common questions about our services and capabilities.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-border pb-8">
                <h2 className="text-xl font-semibold">{faq.question}</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-muted p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold">Still Have Questions?</h2>
            <p className="mt-2 text-muted-foreground">
              We&apos;re happy to help. Reach out and we&apos;ll get back to you.
            </p>
            <Link href="/contact" className={cn(buttonVariants(), "mt-6")}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
