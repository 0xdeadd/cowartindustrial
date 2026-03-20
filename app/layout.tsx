import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "Cowart Industrial Services | Carrollton, GA",
    template: "%s | Cowart Industrial Services",
  },
  description:
    "Full service non-hazardous waste management and industrial services since 1974. Serving the Southeastern United States from Carrollton, GA.",
  keywords: [
    "industrial services",
    "waste water management",
    "hydro blasting",
    "industrial cleaning",
    "vacuum trucks",
    "on-site filtration",
    "Carrollton GA",
    "non-hazardous waste",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
