import type { Service } from "./services"

export const SITE_URL = "https://cowartind.com"
export const BUSINESS_ID = `${SITE_URL}/#business`

const AREA_SERVED_STATES = [
  "Georgia",
  "Alabama",
  "Tennessee",
  "South Carolina",
  "North Carolina",
  "Florida",
  "Mississippi",
  "Kentucky",
]

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": BUSINESS_ID,
    name: "Cowart Industrial Services",
    legalName: "Cowart Industrial Services LLC",
    description:
      "Full-service industrial environmental services and non-hazardous waste management, industrial cleaning, hydro blasting, vacuum trucks, waste disposal, and on-site treatment across the Southeastern United States since 1974.",
    url: SITE_URL,
    image: [
      `${SITE_URL}/logo.jpg`,
      `${SITE_URL}/photos/fleet-yard.jpg`,
      `${SITE_URL}/photos/fleet-jobsite.jpg`,
    ],
    telephone: "+1-770-834-2158",
    email: "info@cowartind.com",
    foundingDate: "1974",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "834 Kingsbridge Rd",
      addressLocality: "Carrollton",
      addressRegion: "GA",
      postalCode: "30117",
      addressCountry: "US",
    },
    // TODO(geo): replace with the exact verified pin from the Google Business
    // Profile (right-click the pin in Google Maps → copy coords) at ≥5 decimal
    // places. Current values are approximate (4 dp) and unverified against the
    // facility rooftop; do not fake-pad precision.
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.5801,
      longitude: -85.0766,
    },
    areaServed: AREA_SERVED_STATES.map((name) => ({
      "@type": "State",
      name,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
        description: "24-hour emergency dispatch",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Industrial Environmental Services",
      itemListElement: [
        "Industrial cleaning",
        "Hydro blasting up to 40,000 PSI",
        "Vacuum truck service",
        "Waste water management",
        "Waste disposal and transport",
        "Roll-off container service",
        "Frac tank rental",
        "Chemical cleaning",
        "Line jetting and pipe cleaning",
        "Line flushing and decontamination",
        "On-site filtration",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    },
  }
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/${service.slug}#service`,
    name: service.title,
    description: service.description,
    serviceType: service.metaKeywords.join(", "),
    url: `${SITE_URL}/services/${service.slug}`,
    provider: { "@id": BUSINESS_ID },
    areaServed: AREA_SERVED_STATES.map((name) => ({
      "@type": "State",
      name,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title}, Capabilities`,
      itemListElement: service.capabilities.map((cap) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: cap },
      })),
    },
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  }
}

export function jsonLdScript(schema: object): {
  type: "application/ld+json"
  dangerouslySetInnerHTML: { __html: string }
} {
  return {
    type: "application/ld+json",
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(schema),
    },
  }
}
