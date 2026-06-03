// Single source of truth for open positions. Consumed by the Jobs page
// (listing + Apply links) and the Apply form (position dropdown + prefill).
// Add a role here and it shows up in both places, nothing else to touch.

export type Position = {
  code: string
  title: string
  type: string
  requirements: string
}

export const positions: Position[] = [
  {
    code: "P-01",
    title: "Industrial Service Technician",
    type: "Full-Time · Carrollton, GA",
    requirements:
      "Valid GA driver's license · Willingness to travel regionally · Pass background check",
  },
  {
    code: "P-02",
    title: "CDL Vacuum Truck Operator",
    type: "Full-Time · Carrollton, GA",
    requirements: "CDL Class A or B · Tanker endorsement preferred · 2+ years driving experience",
  },
  {
    code: "P-03",
    title: "Hydro Blasting Operator",
    type: "Full-Time · Carrollton, GA",
    requirements: "High-pressure water experience preferred · OSHA training · Mechanical aptitude",
  },
  {
    code: "P-04",
    title: "General Application",
    type: "Open · All Roles",
    requirements: "Don't see a fit? Send us your background, we keep applications on file.",
  },
]

export function getPositionByCode(code: string | null | undefined): Position | undefined {
  if (!code) return undefined
  return positions.find((p) => p.code === code)
}
