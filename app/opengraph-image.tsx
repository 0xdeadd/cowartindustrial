import { ImageResponse } from "next/og"

export const alt = "Cowart Industrial Services — Environmental services and industrial cleaning since 1974"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
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
        {/* Top-left corner bracket */}
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
        {/* Top-right corner bracket */}
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
        {/* Bottom-left corner bracket */}
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
        {/* Bottom-right corner bracket */}
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

        {/* Header label */}
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
          — File 01 / Overview
        </div>

        {/* Main display */}
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
              fontSize: 92,
              fontWeight: 600,
              lineHeight: 0.95,
              color: "#F2EEE5",
              letterSpacing: "-0.02em",
            }}
          >
            Cowart Industrial
          </div>
          <div
            style={{
              fontSize: 48,
              fontWeight: 400,
              color: "#C9C2B0",
              fontStyle: "italic",
              marginTop: 16,
              letterSpacing: "-0.01em",
            }}
          >
            Environmental services since 1974
          </div>
        </div>

        {/* Bottom strip */}
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
