import type { Metadata } from "next"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Cowart Industrial Services for a free quote. 24-hour emergency service available. Located in Carrollton, GA.",
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#32373c] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold">Contact Us</h1>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl">
            Get in touch for a free quote or call us for 24-hour emergency
            service.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-[#32373c] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-muted-foreground mt-1">
                      834 Kingsbridge Road
                      <br />
                      Carrollton, GA 30117
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-[#32373c] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <a
                      href="tel:770-834-2158"
                      className="text-muted-foreground mt-1 block hover:text-foreground"
                    >
                      770-834-2158
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-[#32373c] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a
                      href="mailto:brenda.mckoon@cowartind.com"
                      className="text-muted-foreground mt-1 block hover:text-foreground"
                    >
                      brenda.mckoon@cowartind.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-[#32373c] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Emergency Service</h3>
                    <p className="text-muted-foreground mt-1">
                      Available 24 hours a day, 7 days a week
                    </p>
                  </div>
                </div>
              </div>

              {/* Map embed */}
              <div className="mt-8 rounded-lg overflow-hidden border border-border">
                <iframe
                  title="Cowart Industrial Services Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.0!2d-85.0767!3d33.5804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM0JzQ5LjQiTiA4NcKwMDQnMzYuMSJX!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
