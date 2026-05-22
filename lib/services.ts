import {
  Box,
  Container,
  Cylinder,
  Droplet,
  Droplets,
  Factory,
  Filter,
  FlaskConical,
  Leaf,
  Shovel,
  SprayCan,
  Trash2,
  Truck,
  Waves,
  Wind,
  Wrench,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

export type CategoryId =
  | "waste-management"
  | "vacuum-containment"
  | "industrial-cleaning"
  | "on-site-treatment"

export type Service = {
  slug: string
  category: CategoryId
  code: string
  title: string
  shortTitle?: string
  description: string
  intro: string
  content: string[]
  capabilities: string[]
  keywords: string
  metaKeywords: string[]
  icon: LucideIcon
  photo?: string
  photoAlt?: string
  related?: string[]
  featured?: boolean
}

export type Category = {
  id: CategoryId
  code: string
  title: string
  shortTitle: string
  description: string
}

export const categories: Record<CategoryId, Category> = {
  "waste-management": {
    id: "waste-management",
    code: "C—01",
    title: "Waste Management",
    shortTitle: "Waste",
    description:
      "Non-hazardous industrial waste — profiled, transported, treated, and disposed under one DOT number.",
  },
  "vacuum-containment": {
    id: "vacuum-containment",
    code: "C—02",
    title: "Vacuum & Containment",
    shortTitle: "Vacuum",
    description:
      "Vacuum tankers, air movers, sealed boxes, and frac tanks — material moved or held without secondary handoffs.",
  },
  "industrial-cleaning": {
    id: "industrial-cleaning",
    code: "C—03",
    title: "Industrial Cleaning",
    shortTitle: "Cleaning",
    description:
      "Mechanical, hydro-blast, and chemical cleaning for industrial equipment and process lines.",
  },
  "on-site-treatment": {
    id: "on-site-treatment",
    code: "C—04",
    title: "On-Site Treatment",
    shortTitle: "Treatment",
    description:
      "Mobile water treatment and filtration delivered at your facility — lower transport costs, full compliance documentation.",
  },
}

export const services: Service[] = [
  // ─────────────────────────── WASTE MANAGEMENT ───────────────────────────
  {
    slug: "environmental-services",
    category: "waste-management",
    code: "S—01",
    title: "Environmental Services",
    shortTitle: "Environmental Services",
    description:
      "Full-service industrial environmental services across the Southeast — waste management, transport, cleaning, and on-site treatment under one DOT number since 1974.",
    intro:
      "One phone number for everything that has to leave your plant — non-hazardous waste, sludge, wastewater, cleaning, transport, and compliance documentation.",
    content: [
      "Cowart Industrial Services is a full-service environmental services company built around a single operating principle: industrial sites need one partner who can handle whatever the plant generates, not a roster of subcontractors with overlapping handoffs. We provide environmental services across the Southeastern United States, with our own fleet, our own wastewater treatment plant, and crews credentialed to operate inside your facility.",
      "Our environmental services cover the full lifecycle of non-hazardous industrial byproducts — collection, transportation, processing, and disposal. We serve manufacturing plants, food processors, chemical operations, refineries, and municipal facilities across Georgia, Alabama, Tennessee, South Carolina, North Carolina, Florida, Mississippi, and Kentucky. Every job ships with the compliance paperwork your environmental department needs: manifests, scale tickets, certificates of disposition.",
      "From routine scheduled service to 24-hour emergency response, our work is built on the credentials that matter for industrial environmental work: HAZWOPER 40, OSHA 30, DOT Hazmat, EPA RCRA, and confined-space certification across our workforce. When you call us, you reach a person — and the dispatcher who answers can put a truck on the road that day.",
    ],
    capabilities: [
      "Non-hazardous waste management",
      "Industrial cleaning and decontamination",
      "Vacuum and pneumatic services",
      "Liquid waste treatment",
      "DOT-certified transportation",
      "24-hour emergency response",
    ],
    keywords: "Full Lifecycle · Compliance · 8 States",
    metaKeywords: [
      "environmental services",
      "industrial environmental services",
      "non-hazardous waste management",
      "environmental services southeast",
    ],
    icon: Leaf,
    photo: "/photos/service-environmental.jpg",
    photoAlt:
      "Cowart Industrial vacuum tanker fleet staged in the Carrollton, GA yard",
    featured: true,
  },
  {
    slug: "waste-water-management",
    category: "waste-management",
    code: "S—02",
    title: "Waste Water Management",
    shortTitle: "Waste Water",
    description:
      "Comprehensive non-hazardous wastewater management across the Southeast — on-site sludge solidification, transport, and treatment at our own plant.",
    intro:
      "Cowart operates its own non-hazardous wastewater treatment plant — meaning your liquid waste is processed end-to-end without subcontractor handoffs.",
    content: [
      "Cowart Industrial Services provides complete wastewater management, including on-site sludge solidification and wastewater treatment. We operate our own treatment plant, giving us the capability to process and properly dispose of a wide range of non-hazardous liquid wastes — including process water, oily water, sumps and pits, parts-washer fluids, and food-process waste.",
      "Our team handles everything from routine wastewater pickup and disposal to complex on-site treatment projects. We work with manufacturing facilities, processing plants, and other industrial operations to ensure their wastewater is managed safely, efficiently, and in full regulatory compliance.",
      "Whether you need scheduled service or emergency response, our experienced technicians and specialized equipment are ready to handle your wastewater management needs. Every job ships with the manifest and disposition documentation your compliance team expects.",
    ],
    capabilities: [
      "On-site sludge solidification",
      "Wastewater treatment and disposal",
      "Own treatment plant operations",
      "Scheduled and emergency service",
      "Regulatory compliance management",
      "Liquid waste transportation",
    ],
    keywords: "Sludge · Treatment · Solidification",
    metaKeywords: [
      "wastewater management",
      "non-hazardous wastewater",
      "industrial wastewater treatment",
      "sludge solidification",
    ],
    icon: Droplets,
    photo: "/photos/service-waste-water.jpg",
    photoAlt: "Cowart technician pumping in a confined-space manhole",
    featured: true,
  },
  {
    slug: "waste-disposal",
    category: "waste-management",
    code: "S—03",
    title: "Waste Disposal",
    shortTitle: "Waste Disposal",
    description:
      "Non-hazardous industrial waste disposal across the Southeast. Liquid and solid waste streams processed at our own plant or routed to permitted facilities.",
    intro:
      "From scheduled pickups to one-time projects, Cowart handles disposal end-to-end — waste profile, transport, treatment, manifests, and proof of disposition.",
    content: [
      "Cowart Industrial provides non-hazardous industrial waste disposal for facilities across the Southeastern United States. We accept liquid waste streams at our own treatment plant in Carrollton, Georgia, and we route specialized waste streams to permitted disposal partners as needed. Every disposal job ships with the manifests, scale tickets, and certificates of disposition your compliance team requires.",
      "Our disposal services cover wastewater, sludge, process water, sump and pit contents, oily water, parts-washer fluids, food-process waste, and most other non-hazardous industrial liquids. Solids are handled through our roll-off container service. We provide waste profiles upfront — what's accepted, what isn't, what the rate is — so your environmental department isn't guessing.",
      "Disposal works the way regulators expect: profiled, tracked, documented. We're DOT Hazmat-certified for transport, EPA RCRA-trained for handling, and we maintain the records you'll need for audits. Scheduled service or emergency call-outs run under the same paperwork standards.",
    ],
    capabilities: [
      "Non-hazardous liquid waste disposal",
      "Sludge and slurry disposal",
      "Waste profiling and acceptance",
      "Manifest and disposition records",
      "Permitted facility routing",
      "24-hour emergency disposal",
    ],
    keywords: "Profiled · Permitted · Documented",
    metaKeywords: [
      "waste disposal",
      "industrial waste disposal",
      "non-hazardous waste disposal",
      "liquid waste disposal",
    ],
    icon: Trash2,
    photo: "/photos/service-waste-disposal.jpg",
    photoAlt: "Cowart 20-yard roll-off box staged for solid waste disposal",
  },
  {
    slug: "waste-transport",
    category: "waste-management",
    code: "S—04",
    title: "Waste Transport",
    shortTitle: "Waste Transport",
    description:
      "DOT-certified industrial waste transport across 8 Southeastern states. Tankers, vacuum trucks, and roll-off trucks for liquid, solid, and sludge waste streams.",
    intro:
      "Our trucks, our drivers, our DOT number — no broker handoffs. When the load leaves your site, it's still Cowart's responsibility until it reaches the disposal facility.",
    content: [
      "Cowart Industrial provides DOT-certified waste transport for industrial waste streams across the Southeastern United States. Our fleet covers vacuum tankers, dump trailers, and roll-off trucks, with drivers credentialed for the materials they haul. We operate under our own DOT number — meaning the chain of custody never breaks across a subcontractor.",
      "Waste transport covers non-hazardous liquids (process water, sumps, oily water, parts-washer fluids, wastewater), sludges and slurries, and solid waste streams contained in roll-off boxes. We handle scheduled routes for facilities with recurring needs and one-call dispatch for project work, plant turnarounds, and emergencies. Every load travels with a manifest.",
      "We serve Georgia, Alabama, Tennessee, South Carolina, North Carolina, Florida, Mississippi, and Kentucky. Drivers carry HAZWOPER 40 and DOT Hazmat credentials, and our compliance team can produce records for any load on request. If you need waste off-site today, we can usually have a truck on the road within hours.",
    ],
    capabilities: [
      "DOT-certified liquid waste transport",
      "Roll-off and solid waste hauling",
      "Vacuum tanker service",
      "Direct chain of custody",
      "Manifest and BOL documentation",
      "Emergency dispatch (24/7)",
    ],
    keywords: "DOT · 8 States · Same-Day",
    metaKeywords: [
      "waste transport",
      "industrial waste transport",
      "DOT waste transport",
      "industrial waste hauling",
    ],
    icon: Truck,
    photo: "/photos/service-waste-transport.jpg",
    photoAlt: "Cowart Kenworth tractor staged with blue waste containers",
  },
  {
    slug: "roll-off-containers",
    category: "waste-management",
    code: "S—05",
    title: "Roll-Off Container Service",
    shortTitle: "Roll-Off",
    description:
      "Roll-off container service for industrial sites — 20, 30, and 40 yard boxes for non-hazardous solid waste and debris. Delivery across the Southeast.",
    intro:
      "Roll-off containers for plant cleanouts, turnarounds, debris removal, and project waste. Sizes 20–40 yards, delivered when you need them and pulled when they're full.",
    content: [
      "Cowart Industrial provides roll-off container service for industrial facilities across the Southeastern United States. Our roll-off fleet covers 20, 30, and 40-yard open-top boxes — sized for the work, not just whatever's on the lot. Delivery typically lands within 24 hours of the call; emergency same-day service is available across our service area.",
      "Roll-off containers handle non-hazardous solid waste, demolition debris, plant cleanout material, dewatered sludge, contaminated soil, and general project waste. We do not accept hazardous materials in roll-off service — for those streams, call the dispatcher to talk through the right vehicle and disposal route.",
      "Containers come with the documentation industrial customers expect: delivery and pickup tickets, weight slips, and certificates of disposition once the load is offloaded at the permitted disposal facility. Whether you're running a one-time cleanout or a recurring schedule for a manufacturing line, the paperwork is the same.",
    ],
    capabilities: [
      "20, 30, and 40-yard open-top boxes",
      "Same-day and scheduled delivery",
      "Non-hazardous solid waste haul-off",
      "Weight tickets and disposal records",
      "Plant cleanout and turnaround support",
      "Demolition and project debris removal",
    ],
    keywords: "20—40 Yard · Same-Day",
    metaKeywords: [
      "roll off service",
      "roll off containers",
      "roll off dumpster rental",
      "industrial roll off",
    ],
    icon: Container,
    photo: "/photos/service-roll-off.jpg",
    photoAlt: "Cowart roll-off truck hauling box CRB-060",
  },
  {
    slug: "dump-trailer-service",
    category: "waste-management",
    code: "S—06",
    title: "Dump Trailer Service",
    shortTitle: "Dump Trailer",
    description:
      "End-dump trailer service for high-volume bulk material across the Southeast — contaminated soil, dewatered sludge, ash, aggregates, and demolition debris hauled and tipped at permitted facilities.",
    intro:
      "End-dump trailers for loose bulk material — loaded on site, hauled under our DOT number, and tipped at the disposal facility. The right tool when the load is too loose for a roll-off and too solid for a tanker.",
    content: [
      "Cowart Industrial provides dump trailer service for industrial sites moving high volumes of loose bulk material. Our end-dump trailers carry far more per load than a roll-off box and discharge by raising the front and tipping the load out the rear — efficient for material that flows: contaminated soil, dewatered sludge cake, industrial ash, sand, aggregates, grit, and demolition debris.",
      "Dump trailers are the right call when the volume is too large for roll-off boxes and the material is too solid for a vacuum tanker. We load on site — by excavator, loader, conveyor, or directly from a dewatering operation — and haul the material to our own treatment plant or a permitted disposal facility. Multiple trailers can run in rotation to keep a loading operation moving without downtime.",
      "Every load travels under Cowart's own DOT number with the manifests, scale tickets, and certificates of disposition your environmental department expects. Drivers carry HAZWOPER 40 and DOT Hazmat credentials. Scheduled hauling for ongoing projects and one-call dispatch for turnarounds and cleanouts run under the same paperwork standards, across our 8-state Southeastern footprint.",
    ],
    capabilities: [
      "High-volume end-dump hauling",
      "Contaminated soil and ash transport",
      "Dewatered sludge cake haul-off",
      "Aggregate and bulk material moves",
      "On-site loading coordination",
      "Manifests and disposition records",
    ],
    keywords: "End-Dump · Bulk · Tipping",
    metaKeywords: [
      "dump trailer service",
      "end dump trailer",
      "bulk material hauling",
      "contaminated soil hauling",
      "industrial dump trailer",
    ],
    icon: Truck,
    photo: "/photos/service-dump-trailer.jpg",
    photoAlt: "Cowart end-dump trailers staged in the fleet yard",
  },

  // ───────────────────────── VACUUM & CONTAINMENT ─────────────────────────
  {
    slug: "vacuum-trucks",
    category: "vacuum-containment",
    code: "S—07",
    title: "Vacuum Truck Fleet",
    shortTitle: "Vacuum Trucks",
    description:
      "Cowart's vacuum truck fleet handles industrial liquids, dry solids, sludge containment, and waste haul-off across the Southeast — one dispatch, four service lines.",
    intro:
      "One fleet, four service lines: tankers for liquids, air movers for solids, vacuum boxes for sludge, and roll-offs for haul-off. Dispatched, transported, and disposed under one DOT number.",
    content: [
      "Cowart Industrial operates a full vacuum truck fleet from our Carrollton, Georgia headquarters, serving industrial customers across the Southeastern United States. The fleet is organized around four service lines: liquid vacuum tankers, high-volume air movers, sealed vacuum boxes, and roll-off containers. Most jobs use more than one — a typical sludge cleanout might pair a tanker for the liquids, an air mover for the dewatered solids, and a box for staging.",
      "The unifying theme is dispatch: one phone call sends the right trucks, in the right order, with the right credentials. Our drivers are HAZWOPER 40, OSHA 30, and DOT Hazmat trained; confined-space entry is standard on the crew. The vehicles operate under our own DOT number, which means the load is Cowart's responsibility from your site to the disposal facility.",
      "Below are the four vacuum truck service lines. Each links to a dedicated page with the equipment specs, typical applications, and material handling profile. If you're not sure which service fits your job, call dispatch — we'd rather route you correctly than sell you the wrong truck.",
    ],
    capabilities: [
      "Liquid vacuum tankers",
      "High-volume air movers",
      "Sealed vacuum boxes",
      "Roll-off containers",
      "HAZWOPER-certified operators",
      "24-hour emergency dispatch",
    ],
    keywords: "Fleet · Dispatch · One DOT#",
    metaKeywords: [
      "vacuum truck service",
      "vacuum truck dispatch",
      "industrial vacuum truck",
      "vacuum truck southeast",
    ],
    icon: Truck,
    photo: "/photos/service-vacuum-trucks-vt019.jpg",
    photoAlt: "Cowart vacuum truck VT-019 — Kenworth with integrated vacuum tank, staged in the fleet yard",
    related: [
      "liquid-vacuum-service",
      "air-mover-vacuum",
      "vacuum-box-service",
      "roll-off-containers",
    ],
    featured: true,
  },
  {
    slug: "liquid-vacuum-service",
    category: "vacuum-containment",
    code: "S—08",
    title: "Liquid Vacuum Service",
    shortTitle: "Liquid Vacuum",
    description:
      "Liquid vacuum truck service for industrial liquids, sludge, and slurries across the Southeast. 24-hour dispatch from Carrollton, GA.",
    intro:
      "Vacuum tankers built for liquids — wastewater, sludge, slurries, process water, sumps, and pits. Pumped, transported, and disposed in a single dispatch.",
    content: [
      "Cowart Industrial's liquid vacuum service uses dedicated vacuum tankers built for industrial liquid removal. Our trucks handle wastewater, sludge, slurries, process water, oily water, parts-washer fluids, sump and pit contents, and most non-hazardous industrial liquid waste streams. Each truck carries enough capacity to clear a typical industrial sump or holding tank in a single dispatch.",
      "The work covers routine scheduled service for facilities with recurring liquid waste needs and emergency response for tank overflows, line breaks, and unplanned containment events. Our crews are HAZWOPER-trained and confined-space certified, which matters when the pit or sump requires entry as part of the cleanout.",
      "Liquid vacuum service runs end-to-end at Cowart: pump, transport, and dispose at our own non-hazardous wastewater treatment plant or a permitted partner facility. No broker handoffs. The driver who pumps the load is operating under the same DOT number as the company that owns the treatment plant — meaning chain of custody stays intact from your site to the disposal facility.",
    ],
    capabilities: [
      "Vacuum tanker service for industrial liquids",
      "Sludge and slurry pumping",
      "Sump and pit cleanout",
      "Emergency liquid response",
      "Confined-space entry",
      "End-to-end treatment and disposal",
    ],
    keywords: "Tanker · Sumps · 24/7",
    metaKeywords: [
      "liquid vacuum service",
      "vacuum truck liquid",
      "industrial liquid vacuum",
      "sludge vacuum service",
    ],
    icon: Droplet,
    photo: "/photos/service-liquid-vacuum.jpg",
    photoAlt: "Cowart Kenworth TT-044 liquid vacuum tanker",
  },
  {
    slug: "air-mover-vacuum",
    category: "vacuum-containment",
    code: "S—09",
    title: "High-Volume Air Mover Vacuum Service",
    shortTitle: "Air Mover",
    description:
      "High-volume air mover vacuum service for solids, powders, sand, and dry bulk material removal across the Southeast. Pneumatic conveyance for industrial cleanouts.",
    intro:
      "Air movers move solids — sand, dust, dewatered cake, fly ash, catalyst, powders, and dry bulk material — pneumatically, fast, without water or chemicals.",
    content: [
      "Cowart Industrial's high-volume air mover vacuum service uses pneumatic conveyance to remove dry solids and bulk material from industrial facilities. Air movers are the right tool for sand, dust, dewatered cake, fly ash, catalyst, powders, grain, and any solid waste stream that handles dry. Unlike water-based vacuum trucks, air movers don't introduce moisture into the load — important for material that has to stay dry for downstream handling.",
      "The service runs at high CFM, which means cleanouts that would take days with manual labor finish in hours. Typical jobs include silo cleanouts, baghouse and dust collector emptying, catalyst removal, spilled-product recovery, and confined-space material removal. The work pairs naturally with vacuum boxes and roll-offs for haul-off.",
      "Air mover operations require trained operators — pressure differentials and pneumatic conveyance carry their own safety profile, especially in confined spaces or near combustible dust environments. Cowart's crews are HAZWOPER 40 certified, confined-space trained, and experienced in combustible dust protocols where applicable.",
    ],
    capabilities: [
      "High-CFM pneumatic conveyance",
      "Dry bulk material removal",
      "Silo and baghouse cleanouts",
      "Catalyst and powder recovery",
      "Confined-space material removal",
      "Combustible-dust experience",
    ],
    keywords: "Solids · Pneumatic · High CFM",
    metaKeywords: [
      "air mover vacuum",
      "high volume air mover",
      "pneumatic vacuum solids",
      "industrial air mover service",
    ],
    icon: Wind,
    photo: "/photos/service-air-mover.jpg",
    photoAlt: "Cowart Guzzler air-mover unit AM-044 staged for dispatch",
  },
  {
    slug: "vacuum-box-service",
    category: "vacuum-containment",
    code: "S—10",
    title: "Vacuum Box Service",
    shortTitle: "Vacuum Box",
    description:
      "Vacuum box rental and service for industrial liquid and sludge containment. 20-yard sealed boxes for vacuum truck loading and on-site staging.",
    intro:
      "Sealed vacuum boxes for liquid containment, sludge staging, and project work where a roll-off won't hold the load.",
    content: [
      "Cowart Industrial provides vacuum box service for industrial sites that need sealed containment for liquid or sludge — material a standard open-top roll-off can't hold. Our vacuum boxes are 20-yard sealed steel containers, rated for vacuum loading and built to keep liquids in place during transport. They're the right tool for sludge cleanouts, semi-solid waste streams, and project work where containment matters.",
      "Boxes deliver and stage on-site, accept vacuum-truck loading from our tankers (or yours), and pull when full. We dispatch the loading truck, the box, and the haul-off — no juggling separate vendors. Once full, the box transports under our DOT number to our own treatment plant or a permitted disposal facility.",
      "Common applications include sludge pit cleanouts, dewatering operations, food-process waste, tank cleanings, and any job where the waste stream is too wet for a roll-off but too solid for a tanker. Boxes are available for scheduled service or emergency response across our 8-state Southeastern footprint.",
    ],
    capabilities: [
      "20-yard sealed vacuum boxes",
      "Vacuum-truck loading",
      "Sludge and semi-solid containment",
      "On-site staging",
      "End-to-end transport and disposal",
      "Scheduled and emergency dispatch",
    ],
    keywords: "Sealed · 20-Yard · Vacuum-Rated",
    metaKeywords: [
      "vacuum box service",
      "vacuum box rental",
      "sludge box rental",
      "sealed vacuum box",
    ],
    icon: Box,
    photo: "/photos/service-vacuum-box.jpg",
    photoAlt: "Cowart sealed vacuum box CVB-118 staged for vacuum-truck loading",
  },
  {
    slug: "hydro-excavating",
    category: "vacuum-containment",
    code: "S—11",
    title: "Hydro Excavating",
    shortTitle: "Hydro Excavating",
    description:
      "Hydro excavating and hydrovac service for non-destructive digging — utility locating, daylighting, potholing, and trenching across the Southeast.",
    intro:
      "Non-destructive digging with high-pressure water and vacuum recovery — safer than mechanical digging around buried utilities, faster than hand-digging.",
    content: [
      "Cowart Industrial's hydro excavating service uses high-pressure water and simultaneous vacuum recovery to excavate soil without striking buried utilities. The water jet cuts and slurries the soil; the vacuum hose lifts the slurry into an onboard debris tank. The result is a clean, precisely shaped hole with zero contact between the digging tool and any pipe, cable, or conduit in the ground — the safest dig method available.",
      "Common applications include utility locating and daylighting (exposing existing pipes and cables before adjacent work), potholing for engineering survey, trenching for new utility installation, slot trenching for fiber and gas, post-hole excavation, and emergency exposure during utility strikes. We work with general contractors, utility companies, engineering firms, and municipalities across the Southeast.",
      "Hydro excavation pairs naturally with the rest of our vacuum truck fleet — the same trucks that can excavate can also vacuum sludge, transport liquid waste, and dispose of the spoil at our own treatment plant or a permitted facility. End-to-end under one DOT number, one dispatch, one phone call.",
    ],
    capabilities: [
      "Non-destructive utility daylighting",
      "Potholing and engineering survey",
      "Slot trenching for utilities",
      "Post-hole and small-bore excavation",
      "Utility-strike emergency exposure",
      "Spoil transport and disposal",
    ],
    keywords: "Hydrovac · Daylighting · Potholing",
    metaKeywords: [
      "hydro excavating",
      "hydro excavation",
      "hydrovac service",
      "non-destructive digging",
      "utility daylighting",
      "potholing service",
    ],
    icon: Shovel,
    photo: "/photos/service-hydro-excavating.jpg",
    photoAlt:
      "Cowart hydrovac unit — Kenworth tractor with Knight/Huber vacuum excavation system",
  },
  {
    slug: "frac-tank-rental",
    category: "vacuum-containment",
    code: "S—12",
    title: "Portable Frac Tank Storage",
    shortTitle: "Frac Tank",
    description:
      "Portable frac tank rental for industrial liquid storage and project staging. 21,000-gallon capacity, delivered across GA, AL, TN, SC, NC, FL, MS, KY.",
    intro:
      "Frac tanks for on-site liquid storage — process water, wastewater, project staging, and containment for facility turnarounds, drill sites, and emergency response.",
    content: [
      "Cowart Industrial provides portable frac tank rental for industrial sites that need on-site liquid storage. Our standard tank is 21,000 gallons, steel-walled, with manway access, sample ports, and standard fittings for vacuum truck and pump connections. Tanks deliver across the Southeastern United States and stage on flat, prepared ground; we handle drop-off, level set, and pickup.",
      "Frac tank applications include process water storage during plant turnarounds, wastewater staging before treatment, project water for hydro blasting or line flushing operations, secondary containment for facility maintenance, and temporary holding for spill response. Multiple tanks can be manifolded for larger volumes — talk to dispatch if your project needs 50,000+ gallons of staged liquid.",
      "Tanks are cleaned and inspected between rentals. Rental includes delivery, level set, and pickup; ongoing service (level monitoring, transfer pumping, end-of-rental cleanout) is available. Pair tank rental with our vacuum truck service and treatment plant for a fully managed liquid handling program.",
    ],
    capabilities: [
      "21,000-gallon steel frac tanks",
      "Delivery, level set, and pickup",
      "Project and turnaround staging",
      "Wastewater holding",
      "Multi-tank manifold setups",
      "End-of-rental cleanout",
    ],
    keywords: "21K Gallon · Portable · Steel",
    metaKeywords: [
      "frac tank rental",
      "portable frac tank",
      "frac tank storage",
      "industrial frac tank",
    ],
    icon: Cylinder,
    photo: "/photos/service-frac-tank.jpg",
    photoAlt: "Cowart 21,000-gallon portable frac tank with yellow safety steps and manway access",
  },

  // ───────────────────────── INDUSTRIAL CLEANING ──────────────────────────
  {
    slug: "industrial-cleaning",
    category: "industrial-cleaning",
    code: "S—13",
    title: "Industrial Cleaning",
    shortTitle: "Industrial Cleaning",
    description:
      "Professional industrial cleaning across the Southeast — vacuuming, pressure washing, hydro blasting, and chemical methods by HAZWOPER-certified crews.",
    intro:
      "Routine maintenance through major turnaround projects — handled by HAZWOPER-certified crews with full confined-space credentials.",
    content: [
      "Our industrial cleaning services address the buildup of non-hazardous materials in industrial facilities. Using a combination of vacuuming, pressure washing, hydro blasting, and chemical cleaning methods, we restore equipment and facilities to optimal operating condition. The method is matched to the job — wrong method costs time, the right method ends the job in one pass.",
      "Cowart Industrial's trained personnel are capable of confined space entry, UST and AST entry and cleaning, and other specialized cleaning operations. All team members hold 40-hour HAZWOPER certification, ensuring safe and compliant operations across the work scopes we accept.",
      "From routine maintenance cleaning to major turnaround projects, we have the equipment, expertise, and manpower to handle your industrial cleaning needs efficiently and safely. Cleaning waste streams are collected, transported, and disposed through our own treatment plant — meaning the entire job stays under one compliance umbrella.",
    ],
    capabilities: [
      "Vacuuming and material removal",
      "High-pressure washing",
      "Chemical cleaning",
      "Hydro blasting (up to 40,000 PSI)",
      "Confined space entry and cleaning",
      "UST and AST entry and cleaning",
    ],
    keywords: "Vacuuming · Pressure · Chemical",
    metaKeywords: [
      "industrial cleaning",
      "industrial cleaning services",
      "industrial cleaning company",
      "industrial cleaning southeast",
    ],
    icon: Factory,
    photo: "/photos/service-industrial-cleaning.jpg",
    photoAlt:
      "Cowart crew pressure-washing a sludge pit inside an industrial facility",
    featured: true,
  },
  {
    slug: "hydro-blasting",
    category: "industrial-cleaning",
    code: "S—14",
    title: "Hydro Blasting up to 40,000 PSI",
    shortTitle: "Hydro Blasting",
    description:
      "High-pressure, high-volume hydro blasting from 10,000 to 40,000 PSI for industrial scale, coatings, and surface prep. Water-only, no chemicals, no secondary waste.",
    intro:
      "Water-only material removal up to 40,000 PSI. No chemicals, no secondary waste, no surface damage when done by trained operators.",
    content: [
      "Hydro blasting uses ultra-high-pressure water to remove scale, rust, old coatings, and other stubborn materials from industrial surfaces. Cowart operates equipment from 10,000 PSI for general cleaning up to 40,000 PSI for the hardest deposits and most demanding surface-prep work. This method is highly efficient and often preferred over traditional cleaning because it requires no chemicals and produces no secondary waste.",
      "Our hydro blasting services are ideal for heat exchangers, boilers, piping systems, tanks, and other industrial equipment. The precision of high-volume water pressure allows us to clean effectively without damaging the underlying surface — important for equipment going back into service or for substrate preparation before coatings.",
      "Cowart Industrial operates a fleet of hydro blasting equipment capable of handling projects of any scale. Our experienced operators ensure safe, effective cleaning that minimizes downtime and maximizes results. Spent water and dislodged material are collected and disposed through our own treatment plant — the work ends in one place, not three.",
    ],
    capabilities: [
      "10,000 to 40,000 PSI water cleaning",
      "Heat exchanger cleaning",
      "Boiler tube cleaning",
      "Surface preparation for coatings",
      "Pipe and line cleaning",
      "Tank and vessel cleaning",
    ],
    keywords: "10K—40K PSI · Surface Prep",
    metaKeywords: [
      "hydro blasting",
      "40000 psi hydro blasting",
      "high pressure hydro blasting",
      "high volume hydro blasting",
      "ultra high pressure water cleaning",
    ],
    icon: Waves,
    photo: "/photos/service-hydro-blasting.jpg",
    photoAlt: "Cowart hydro-blasting operator cleaning an industrial tank",
    featured: true,
  },
  {
    slug: "chemical-cleaning",
    category: "industrial-cleaning",
    code: "S—15",
    title: "Chemical Cleaning",
    shortTitle: "Chemical Cleaning",
    description:
      "Industrial chemical cleaning for process equipment, heat exchangers, tanks, and piping. Acids, caustics, solvents, and specialty chemistries by trained crews.",
    intro:
      "Chemical cleaning when mechanical methods won't reach — scale, deposits, biological fouling, and process residue removed with the right chemistry for the substrate.",
    content: [
      "Cowart Industrial provides chemical cleaning for industrial process equipment where mechanical methods (hydro blasting, vacuum, manual cleaning) won't reach or won't return the surface to spec. Our crews apply acids, caustics, solvents, and specialty chemistries to dissolve scale, mineral deposits, biological fouling, hydrocarbon residue, and process buildup from the inside of equipment — often without disassembly.",
      "Typical applications include heat exchanger descaling, boiler tube cleaning, cooling tower fill cleaning, tank passivation, piping system cleaning, and process vessel decontamination. We work closely with facility engineers to match the chemistry to the substrate — wrong chemistry can damage equipment, so the selection isn't ad-hoc.",
      "The work runs under full HAZWOPER 40 and confined-space credentials. Cleaning solutions and rinse waters are collected, neutralized as needed, and disposed through our own treatment plant or a permitted facility — meaning the entire process, including the waste stream, stays under Cowart's compliance umbrella.",
    ],
    capabilities: [
      "Acid and caustic descaling",
      "Solvent and specialty chemistry",
      "Heat exchanger cleaning",
      "Boiler tube cleaning",
      "Cooling tower and tank passivation",
      "Spent chemistry disposal",
    ],
    keywords: "Acid · Caustic · Specialty",
    metaKeywords: [
      "chemical cleaning",
      "industrial chemical cleaning",
      "process equipment cleaning",
      "heat exchanger chemical cleaning",
    ],
    icon: FlaskConical,
    photo: "/photos/service-chemical-cleaning.jpg",
    photoAlt:
      "Cowart crew in PPE performing confined-space chemical cleaning inside a process vessel",
  },
  {
    slug: "line-jetting-pipe-cleaning",
    category: "industrial-cleaning",
    code: "S—16",
    title: "Line Jetting & Pipe Cleaning",
    shortTitle: "Line Jetting",
    description:
      "Industrial line jetting and pipe cleaning. High-pressure water jetting to clear blockages, scale, and buildup in process lines, drains, and sewers.",
    intro:
      "Pipe blockages, scale, grease, and process buildup cleared with high-pressure water — no chemicals, no disassembly, full flow restored.",
    content: [
      "Cowart Industrial provides line jetting and pipe cleaning service for industrial facilities. The work uses high-pressure water and rotating jetting nozzles to clear blockages, scale, grease, biological growth, and process buildup from inside piping, drain lines, sewer mains, and process equipment. Nozzles are matched to the line size and material, and pressure is selected to clear the obstruction without damaging the pipe interior.",
      "Common applications include process drain line cleaning, sewer main jetting, sludge line clearing, food-process waste line decontamination, cooling tower drain restoration, and emergency response for blocked or backed-up systems. We handle lines from small process drains up to large industrial sewer mains, with CCTV inspection available before and after the work to document condition.",
      "Line jetting pairs naturally with our vacuum truck service — material dislodged from the line is recovered by the vacuum unit and transported for proper disposal, rather than discharged downstream. The complete loop (jet, vacuum, transport, dispose) runs under one dispatch and one DOT number.",
    ],
    capabilities: [
      "High-pressure water jetting",
      "Drain and sewer line cleaning",
      "Process line clearing",
      "Sludge line restoration",
      "Pre- and post-CCTV inspection",
      "Paired vacuum recovery",
    ],
    keywords: "Hi-Pressure · CCTV · Recovery",
    metaKeywords: [
      "line jetting",
      "pipe cleaning",
      "sewer jetting",
      "industrial line cleaning",
      "industrial pipe cleaning",
    ],
    icon: Wrench,
    photo: "/photos/service-line-jetting.jpg",
    photoAlt:
      "Vacuum hoses rigged to a confined-space manway with gas monitor for line cleaning",
  },
  {
    slug: "line-flushing-decontamination",
    category: "industrial-cleaning",
    code: "S—17",
    title: "Line Flushing & Decontamination",
    shortTitle: "Line Flushing & Decon",
    description:
      "Industrial line flushing and decontamination. Process line, tank, and equipment flush-outs for product changeovers, turnarounds, and decommissioning.",
    intro:
      "Flushing for changeovers, decontamination for turnarounds, decommissioning for end-of-life equipment — process lines returned to spec, residue handled and disposed.",
    content: [
      "Cowart Industrial provides line flushing and decontamination service for industrial process equipment. The work covers product-changeover flushes (clearing one product before introducing another), turnaround decontamination (purging equipment before mechanical work or vessel entry), and end-of-life decommissioning flushes (preparing equipment for demolition or relocation). Each scope is engineered to the specific process and contamination profile.",
      "Flushing chemistries range from water and steam to specialty solvents, depending on the residue. Our crews work with facility process engineers to select the right purge sequence — wrong sequence can leave residue, damage seals, or fail the post-flush sample. We provide pre-work sampling, in-process sampling where needed, and post-flush verification.",
      "Spent flush solutions and decontamination wastes are collected at the point of work — no discharge to facility drains — and transported under Cowart's DOT number to our treatment plant or a permitted facility. The work runs under HAZWOPER 40 and confined-space certification for any entry-required scope.",
    ],
    capabilities: [
      "Process line flushing",
      "Equipment decontamination",
      "Product changeover purging",
      "Turnaround prep flushing",
      "End-of-life decommissioning",
      "Pre- and post-flush sampling",
    ],
    keywords: "Flushes · Decon · Sampling",
    metaKeywords: [
      "line flushing",
      "line decontamination",
      "process decontamination",
      "equipment flushing",
      "industrial decontamination",
    ],
    icon: SprayCan,
    photo: "/photos/service-line-flushing.jpg",
    photoAlt:
      "Cowart crew in Tyvek suits at a permit-required confined-space decontamination job",
  },

  // ────────────────────────── ON-SITE TREATMENT ───────────────────────────
  {
    slug: "on-site-filtration",
    category: "on-site-treatment",
    code: "S—18",
    title: "On-Site Filtration",
    shortTitle: "On-Site Filtration",
    description:
      "Mobile on-site water filtration with comprehensive testing and monitoring at your facility. Lower transport costs, less downtime, full compliance documentation.",
    intro:
      "Treat water where it's generated. Lower transport costs, less downtime, full compliance documentation included with every job.",
    content: [
      "Cowart Industrial brings filtration directly to your facility with our mobile on-site filtration services. By treating water on-site, we reduce transportation costs, minimize downtime, and provide a more efficient solution for your water treatment and filtering needs. The unit moves with the work — no waiting for off-site capacity, no tankers idling between loads.",
      "Our filtration services include comprehensive water testing and monitoring throughout the treatment process. We work with you to ensure the treated water meets all applicable standards and specifications before discharge or reuse. Documentation is part of the deliverable, not an afterthought.",
      "Whether you need one-time filtration for a specific project or ongoing filtration services as part of your facility's operations, our team has the equipment and expertise to deliver reliable results. Common applications include construction dewatering, industrial process water polishing, and project water reuse.",
    ],
    capabilities: [
      "Mobile filtration units",
      "On-site water treatment",
      "Water quality testing",
      "Continuous monitoring",
      "Custom filtration solutions",
      "Compliance documentation",
    ],
    keywords: "Mobile · Testing · Compliance",
    metaKeywords: [
      "on-site filtration",
      "on site filtering",
      "mobile water filtration",
      "industrial water filtration",
    ],
    icon: Filter,
    photo: "/photos/service-on-site-filtration.jpg",
    photoAlt:
      "Bulk storage tanks inside a lined secondary-containment berm at an on-site treatment job",
  },
]

export const servicesBySlug: Record<string, Service> = Object.fromEntries(
  services.map((s) => [s.slug, s]),
)

export const allCategoryIds: CategoryId[] = [
  "waste-management",
  "vacuum-containment",
  "industrial-cleaning",
  "on-site-treatment",
]

export function getServicesByCategory(id: CategoryId): Service[] {
  return services.filter((s) => s.category === id)
}

export function getFeaturedServices(): Service[] {
  return services.filter((s) => s.featured)
}

export function getRelatedServices(slug: string, limit = 3): Service[] {
  const service = servicesBySlug[slug]
  if (!service) return []

  if (service.related && service.related.length > 0) {
    return service.related
      .map((s) => servicesBySlug[s])
      .filter((s): s is Service => Boolean(s))
      .slice(0, limit)
  }

  return services
    .filter((s) => s.category === service.category && s.slug !== slug)
    .slice(0, limit)
}
