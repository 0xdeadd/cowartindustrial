import { ImageResponse } from "next/og"
import { servicesBySlug, services } from "@/lib/services"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"
export const alt = "Cowart Industrial Services"

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = servicesBySlug[slug]
  const title = service?.title ?? "Industrial Services"
  const code = service?.code ?? "S—00"
  const chip = service?.keywords ?? "Cowart Industrial"

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0E1A2B",
          color: "#F2EEE5",
          padding: "60px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 40,
            width: 40,
            height: 40,
            borderTop: "2px solid #B8252F",
            borderLeft: "2px solid #B8252F",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 40,
            right: 40,
            width: 40,
            height: 40,
            borderTop: "2px solid #B8252F",
            borderRight: "2px solid #B8252F",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: 40,
            width: 40,
            height: 40,
            borderBottom: "2px solid #B8252F",
            borderLeft: "2px solid #B8252F",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: 40,
            width: 40,
            height: 40,
            borderBottom: "2px solid #B8252F",
            borderRight: "2px solid #B8252F",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "#B8252F",
            fontSize: 22,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          — File 03 / {code}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "auto",
            marginBottom: 40,
          }}
        >
          <div
            style={{
              color: "#C9C2B0",
              fontSize: 20,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: 20,
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <span
              style={{
                width: 40,
                height: 1,
                backgroundColor: "#B8252F",
                display: "block",
              }}
            />
            {chip}
          </div>
          <div
            style={{
              fontSize: title.length > 35 ? 72 : 88,
              fontWeight: 600,
              lineHeight: 0.95,
              color: "#F2EEE5",
              letterSpacing: "-0.02em",
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 400,
              color: "#C9C2B0",
              fontStyle: "italic",
              marginTop: 20,
              letterSpacing: "-0.01em",
            }}
          >
            Cowart Industrial Services
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#C9C2B0",
            fontSize: 20,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            paddingTop: 24,
            borderTop: "1px solid #1F2D40",
          }}
        >
          <span>Carrollton, GA</span>
          <span style={{ color: "#F2EEE5" }}>770.834.2158</span>
          <span>cowartind.com</span>
        </div>
      </div>
    ),
    { ...size },
  )
}
