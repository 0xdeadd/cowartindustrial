import type { Metadata } from "next"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/lib/button-variants"
import { Phone, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Cowart Industrial Services team. View current job openings and apply today.",
}

export default function JobsPage() {
  return (
    <>
      <section className="bg-[#32373c] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold">Careers</h1>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl">
            Join our team of experienced industrial service professionals.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Why Work With Us</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Cowart Industrial Services has been a trusted name in the industrial
              services industry since 1974. We offer a stable work environment
              with opportunities for growth and advancement.
            </p>
            <p>
              We invest in our employees with training including HAZWOPER
              certification, confined space entry training, and other professional
              development opportunities.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-6">How to Apply</h2>
            <p className="text-muted-foreground mb-6">
              Interested in joining our team? Contact us to learn about current
              openings and submit your application.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#32373c]" />
                <a
                  href="tel:770-834-2158"
                  className="text-foreground font-medium hover:underline"
                >
                  770-834-2158
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#32373c]" />
                <a
                  href="mailto:brenda.mckoon@cowartind.com"
                  className="text-foreground font-medium hover:underline"
                >
                  brenda.mckoon@cowartind.com
                </a>
              </div>
            </div>
            <Link href="/contact" className={cn(buttonVariants(), "mt-8")}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
