import {
  Box,
  Container,
  Cylinder,
  Droplet,
  Droplets,
  Factory,
  Filter,
  FlaskConical,
  Layers,
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
  extendedContent?: { heading: string; paragraphs: string[] }[]
  industries?: string[]
  serviceAreas?: { state: string; cities: string[] }[]
  faqs?: { question: string; answer: string }[]
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
      "Industrial environmental services across the Southeast — waste management, transport, cleaning, and on-site treatment under one DOT number since 1974.",
    intro:
      "One phone number for everything that has to leave your plant — non-hazardous waste, sludge, wastewater, cleaning, transport, and compliance documentation.",
    content: [
      "Cowart Industrial Services is a full-service industrial environmental services company built around a single operating principle: industrial sites need one partner who can handle whatever the plant generates, not a roster of subcontractors with overlapping handoffs. We provide environmental services across the Southeastern United States from our base in Carrollton, Georgia, with our own fleet, our own non-hazardous wastewater treatment plant, and crews credentialed to operate inside any industrial facility we accept work in.",
      "Our environmental services cover the full lifecycle of non-hazardous industrial byproducts — generation, collection, transportation, processing, treatment, and final disposal. The work spans manufacturing plants, food processors, chemical operations, refineries, power generation, pulp and paper mills, automotive plants, pharmaceutical manufacturers, and municipal facilities across an 8-state Southeast footprint: Georgia, Alabama, Tennessee, South Carolina, North Carolina, Florida, Mississippi, and Kentucky. Every job ships with the compliance paperwork your environmental department needs — manifests, scale tickets, sampling records, certificates of disposition, and the chain-of-custody documentation that ties each step together.",
      "From routine scheduled service to 24-hour emergency response, the work runs under the credentials that actually matter for industrial environmental services: HAZWOPER-40, OSHA-30, DOT Hazmat, EPA RCRA awareness, and confined-space certification across the workforce. When you call us, you reach a person — not a phone tree — and the dispatcher who answers can put a truck on the road that day. After 50+ years in the business, the relationship is as much the product as the trucks are.",
    ],
    capabilities: [
      "Non-hazardous waste management",
      "Industrial cleaning and decontamination",
      "Hydroblasting (10,000 to 40,000 PSI)",
      "Vacuum and pneumatic services",
      "Liquid wastewater treatment in-house",
      "Frac tank and vacuum box rental",
      "DOT-certified transportation",
      "On-site filtration and treatment",
      "24-hour emergency response",
      "Compliance documentation and reporting",
    ],
    keywords: "Full Lifecycle · Compliance · 8 States",
    metaKeywords: [
      "industrial environmental services",
      "environmental services",
      "environmental services Southeast",
      "industrial environmental services Georgia",
      "non-hazardous waste management",
      "environmental services company",
      "environmental services Atlanta",
      "industrial services Georgia",
      "industrial environmental contractor",
      "environmental services Alabama",
    ],
    icon: Leaf,
    photo: "/photos/service-environmental.jpg",
    photoAlt:
      "Cowart-branded bulk storage tanks in a lined secondary-containment berm",
    featured: true,
    extendedContent: [
      {
        heading: "What industrial environmental services actually covers",
        paragraphs: [
          "The term 'environmental services' gets used loosely. In the industrial context it covers everything that happens to a plant's non-hazardous byproducts between the point of generation and the point of final disposal — and the work usually crosses several specialized trades. There's the cleaning side (vacuuming, hydroblasting, chemical cleaning, decontamination) that gets material out of equipment. There's the containment and transport side (vacuum trucks, sealed boxes, roll-offs, frac tanks, DOT-regulated transport). There's the treatment side (wastewater treatment, sludge solidification, oil-water separation). And there's the compliance documentation that ties the whole thing together — manifests, sampling records, disposition certificates.",
          "Most environmental services companies do one or two of those trades and subcontract the rest. The customer ends up with a binder of vendors, a stack of insurance certificates, and a manifest trail that crosses company lines. Cowart's model — built since 1974 — is to run all of it: the cleaning crews, the trucks, the treatment plant, and the compliance documentation all under one company. One vendor on your audit, one Certificate of Insurance on file, one phone number to call when something needs attention.",
        ],
      },
      {
        heading: "Why single-vendor environmental services matters",
        paragraphs: [
          "If your plant produces non-hazardous waste streams — wastewater, sludge, process water, oily water, parts-washer fluid, cleaning residuals, contaminated stormwater — managing them through three or four vendors creates real friction. Each vendor has its own DOT registration, its own insurance certificate, its own audit posture, its own pricing model. The handoffs between them are where things go wrong: manifest mismatches, dropped loads, surprise tipping fees, finger-pointing when something doesn't reconcile.",
          "Cowart's single-DOT, in-house-treatment model means the cleaning crew, the vacuum truck driver, the long-haul transport, and the treatment plant operator all work for the same company. When the load on your invoice doesn't tie back to the manifest, there's one person to call — and that person has all the records. When EPA or a state environmental agency shows up for a generator audit, your contractor file has one tab, not five.",
          "It also keeps cost predictable. Companies that subcontract treatment and disposal pass through whatever the third-party facility charges, usually with markup and the occasional surprise increase. We own the treatment side, so the price quoted is the price charged.",
        ],
      },
      {
        heading: "How we're different from the typical environmental services company",
        paragraphs: [
          "Most companies that compete in the Southeast for industrial environmental services fall into one of two camps. The first is national rollups (Republic Services, Clean Harbors, Veolia) that operate at scale but treat any individual facility as a small account inside a much bigger book of business. The service is professional but generic, and the local relationships are weak. The second is regional cleaning-and-hauling shops that handle the field work well but subcontract treatment and disposal to facilities like ours.",
          "Cowart sits between those: regional enough to be responsive (24-hour dispatch from Carrollton, same driver each visit, the dispatcher knows your gate code), but vertically integrated enough to handle the work end-to-end. Family-owned since 1974, with the same family still running the business. Most direct competitors in the Southeast are either much younger (typical operator is 20-30 years old) or part of a national chain.",
          "The trade-off is simple: if you need a vendor with the lowest possible commodity price across thousands of accounts, the national chains win. If you need a vendor that can quote your turnaround, mobilize the right crew, transport under their own DOT, treat at their own plant, and put their name on the disposition paperwork, that's the work we're built for.",
        ],
      },
    ],
    industries: [
      "Manufacturing (general and heavy)",
      "Food and beverage processing",
      "Automotive and assembly plants",
      "Pulp and paper mills",
      "Steel and aluminum mills",
      "Chemical manufacturing",
      "Pharmaceutical manufacturing",
      "Refineries and petrochemical",
      "Power generation (coal, gas, biomass)",
      "Textile and carpet mills",
      "Mining and aggregates",
      "Municipal and government facilities",
    ],
    serviceAreas: [
      { state: "Georgia", cities: ["Atlanta", "Augusta", "Columbus", "Macon", "Savannah", "Carrollton", "LaGrange", "Newnan", "Rome"] },
      { state: "Alabama", cities: ["Birmingham", "Mobile", "Montgomery", "Huntsville", "Tuscaloosa", "Anniston"] },
      { state: "Tennessee", cities: ["Knoxville", "Chattanooga", "Nashville", "Memphis"] },
      { state: "South Carolina", cities: ["Columbia", "Charleston", "Greenville", "Spartanburg"] },
      { state: "North Carolina", cities: ["Charlotte", "Raleigh", "Greensboro", "Wilmington"] },
      { state: "Florida", cities: ["Jacksonville", "Tampa", "Pensacola", "Panama City"] },
      { state: "Mississippi", cities: ["Jackson", "Meridian", "Pascagoula", "Gulfport"] },
      { state: "Kentucky", cities: ["Louisville", "Lexington", "Owensboro", "Paducah"] },
    ],
    faqs: [
      {
        question: "What are industrial environmental services?",
        answer:
          "Industrial environmental services covers the lifecycle management of non-hazardous waste streams from industrial facilities — collection, transport, treatment, and disposal — plus the cleaning and containment work that gets material out of equipment in the first place. At Cowart that includes vacuum trucks, hydroblasting, chemical cleaning, line jetting, frac tank rental, on-site filtration, wastewater treatment, sludge solidification, and the compliance documentation that ties each step together.",
      },
      {
        question: "Do you handle hazardous waste?",
        answer:
          "No. Cowart's operation and treatment plant are permitted for non-hazardous industrial streams only. RCRA-hazardous, characteristic-hazardous (corrosive, ignitable, reactive, toxic above thresholds), and PCB-containing material aren't accepted. If your facility generates hazardous waste, we can refer you to a permitted hazmat responder under a documented handoff — but the rest of your non-hazardous stream stays with us.",
      },
      {
        question: "What states do you serve?",
        answer:
          "Georgia, Alabama, Tennessee, South Carolina, North Carolina, Florida, Mississippi, and Kentucky. Our base is in Carrollton, GA (west of Atlanta) and we maintain 24-hour dispatch across the full 8-state Southeast footprint.",
      },
      {
        question: "How long have you been in business?",
        answer:
          "Cowart Industrial Services has been in continuous operation since 1974 — over 50 years of family-operated industrial environmental services in the Southeast. The company has grown from a single vacuum truck to a multi-state operation with its own treatment plant, but the ownership and the family-operated character haven't changed.",
      },
      {
        question: "What makes Cowart different from other environmental services companies?",
        answer:
          "Three things, all structural. First, we operate our own non-hazardous wastewater treatment plant in Carrollton, so cleaning, transport, treatment, and disposal all stay under one company. Second, every truck runs under our own DOT number, which means single-vendor compliance documentation for your audit file. Third, we're family-owned since 1974 — the dispatcher you talk to has been doing this for years and the company isn't going to disappear in a merger next quarter.",
      },
      {
        question: "Do you provide compliance documentation?",
        answer:
          "Yes. Manifests, scale tickets, sampling records, certificates of disposition, and chain-of-custody documentation are included with every job. For sites under permit (NPDES, RCRA generator, industrial pretreatment), documentation cadence and format are matched to what your permit requires.",
      },
      {
        question: "Can you support plant turnarounds and emergency response?",
        answer:
          "Yes. Plant turnarounds and 24-hour emergency response are core scopes. For turnarounds we mobilize multiple crews and equipment lines (vacuum trucks, hydroblasting rigs, chemical cleaning, frac tank staging) under one dispatcher and one work order. For emergencies — spills, containment failures, tank overflows — 24-hour dispatch from Carrollton covers same-day response across most of our service area.",
      },
      {
        question: "How do I get a quote?",
        answer:
          "Call dispatch at 770.834.2158 or use the contact form for a quote within one business day. We'll need the material profile (what it is, roughly how much), the access constraints at your site, and the schedule. For routine scheduled service, most facilities start with a single pickup and convert to a standing schedule once we understand the volume pattern.",
      },
    ],
  },
  {
    slug: "waste-water-management",
    category: "waste-management",
    code: "S—02",
    title: "Wastewater Management",
    shortTitle: "Waste Water",
    description:
      "Non-hazardous industrial wastewater treatment and disposal across the Southeast — sludge solidification, vacuum transport, in-house treatment plant.",
    intro:
      "Industrial wastewater management end-to-end — collection, transport, treatment, and disposal under a single DOT number, with no third-party handoffs.",
    content: [
      "Cowart Industrial Services provides complete non-hazardous wastewater management for industrial facilities across the Southeast. The work includes on-site sludge solidification, vacuum truck collection, regulated transport under our own DOT number, and final treatment and disposal at our own plant in Carrollton, Georgia. The wastewater that comes out of your facility doesn't get handed off — it stays with us from the moment the vacuum hose drops in the tank to the moment the treated effluent is released under permit.",
      "We treat the full range of non-hazardous liquid waste streams found in industrial operations: process water, oily water and emulsions, sump and pit liquids, parts-washer fluids, food-process wastewater, contaminated stormwater, leachate, latex and paint wash, and water-based cleaning residuals. The treatment train at our plant handles solids separation, oil-water separation, pH adjustment, coagulation/flocculation, and biological polishing as needed for the influent profile. Characterization is done on every load before processing.",
      "Because we operate the entire chain ourselves, compliance documentation is consolidated. One vendor, one set of manifests, one phone number for your environmental coordinator. That matters when audit season starts and your generator records need to tie cleanly to disposition documents. Cowart has been doing this work since 1974 — over 50 years of family-operated wastewater service in the Southeast — and the treatment plant in Carrollton has been the anchor of the operation from the start.",
    ],
    capabilities: [
      "Non-hazardous wastewater treatment",
      "On-site sludge solidification",
      "Vacuum truck collection and transport",
      "Oily-water separation and emulsion breaking",
      "Process water and parts-washer fluid disposal",
      "Sump, pit, and trench dewatering",
      "Scheduled service and 24-hour emergency response",
      "Single-vendor manifest and compliance documentation",
    ],
    keywords: "Treatment · Sludge · Disposal",
    metaKeywords: [
      "industrial wastewater treatment",
      "wastewater management",
      "wastewater treatment services",
      "non-hazardous wastewater",
      "non-hazardous wastewater disposal",
      "wastewater treatment Georgia",
      "industrial wastewater disposal",
      "sludge solidification",
      "oily water disposal",
      "process water disposal",
    ],
    icon: Droplets,
    photo: "/photos/service-waste-water.jpg",
    photoAlt: "Cowart technician pumping in a confined-space manhole",
    related: ["oil-water-separator-service", "liquid-vacuum-service", "on-site-filtration"],
    featured: true,
    extendedContent: [
      {
        heading: "What we treat at the Carrollton plant",
        paragraphs: [
          "Cowart's wastewater treatment plant in Carrollton, Georgia is permitted for non-hazardous industrial wastewater. The streams that come in range from clean rinse water at the easy end to heavily emulsified parts-washer fluid and oily water at the difficult end. Common influents include manufacturing process water, sump and pit pumpouts, food-process wastewater (with FOG and high BOD), latex and paint-line wash, contaminated stormwater from secondary containment, leachate from holding ponds, and water-based cleaning residuals from industrial cleaning jobs we ran in the field.",
          "What we don't take: RCRA hazardous waste, characteristic-hazardous streams (corrosive, ignitable, reactive, toxic above thresholds), and PCB-containing material. The plant is designed and permitted for non-hazardous treatment, and we honor those limits. Every load is profiled before it's accepted, and out-of-profile material is rejected at the gate — that's the cost of running a clean operation.",
          "The treatment train pairs the right unit operations to the load: solids settling and clarification, dissolved air flotation for emulsified oils, chemistry-driven coagulation and flocculation for fine solids, pH adjustment, and polishing as the permit requires. Treated effluent is released under permit; recovered solids are dewatered and disposed appropriately.",
        ],
      },
      {
        heading: "Why single-vendor wastewater management matters",
        paragraphs: [
          "Industrial wastewater rarely moves in one step from generator to final disposal. There's a collection step, a transport step, a treatment step, and a disposal step — and at most companies, those four steps involve three or four different vendors. Each of those vendors has its own insurance certificate, its own DOT registration, its own audit history, and its own line on your manifest log. The math gets ugly when something goes wrong: which company had custody when the spill happened, which manifest is authoritative, which insurance carrier covers the loss.",
          "Cowart runs all four steps. The vacuum truck that collects your wastewater carries our DOT number. The transport runs on our highway authority. The treatment happens at our plant. The disposal documentation is generated by our system. For your compliance department, that's a single Certificate of Insurance, a single contractor on the auditable-vendor list, and a single phone number to call.",
        ],
      },
      {
        heading: "Service models — scheduled, on-demand, and emergency",
        paragraphs: [
          "Most of our wastewater work runs on standing pickup schedules: weekly, biweekly, or monthly tankage cycles for plants that generate predictable volumes. The driver and the dispatch contact don't change, which means access procedures, gate codes, weight tickets, and signoff routines stay consistent. On-demand pickups handle one-off needs — a tank that has to be emptied for inspection, a sump that filled faster than expected, a project that generated more wash water than the holding pond can hold.",
          "Emergency service is the third leg. Spill response, containment overflow, equipment failure that leaves you holding wastewater you can't process — 24-hour dispatch from Carrollton, with vacuum trucks staged for response and the treatment plant ready to receive whatever comes back. Most emergencies are non-hazardous; we handle them in-house. The few that escalate to hazardous classification get referred under a documented handoff to a permitted hazmat responder.",
        ],
      },
    ],
    industries: [
      "Manufacturing (general and heavy)",
      "Food and beverage processing",
      "Automotive and assembly plants",
      "Pulp and paper mills",
      "Chemical manufacturing",
      "Pharmaceutical manufacturing",
      "Textile and carpet mills",
      "Metal finishing and plating",
      "Power generation",
      "Municipal and industrial wastewater",
      "Restaurants and FOG generators",
      "Logistics, distribution, and parts cleaning",
    ],
    serviceAreas: [
      {
        state: "Georgia",
        cities: ["Atlanta", "Augusta", "Columbus", "Macon", "Savannah", "Carrollton", "LaGrange", "Newnan", "Rome"],
      },
      {
        state: "Alabama",
        cities: ["Birmingham", "Mobile", "Montgomery", "Huntsville", "Tuscaloosa", "Anniston"],
      },
      {
        state: "Tennessee",
        cities: ["Knoxville", "Chattanooga", "Nashville", "Memphis"],
      },
      {
        state: "South Carolina",
        cities: ["Columbia", "Charleston", "Greenville", "Spartanburg"],
      },
      {
        state: "North Carolina",
        cities: ["Charlotte", "Raleigh", "Greensboro", "Wilmington"],
      },
      {
        state: "Florida",
        cities: ["Jacksonville", "Tampa", "Pensacola", "Panama City"],
      },
      {
        state: "Mississippi",
        cities: ["Jackson", "Meridian", "Pascagoula", "Gulfport"],
      },
      {
        state: "Kentucky",
        cities: ["Louisville", "Lexington", "Owensboro", "Paducah"],
      },
    ],
    faqs: [
      {
        question: "What is industrial wastewater management?",
        answer:
          "Industrial wastewater management is the regulated collection, transport, treatment, and disposal of liquid waste generated by industrial operations — process water, oily water, sumps, pits, parts-washer fluids, food-process wastewater, and similar non-hazardous streams. It requires a generator-to-disposal paper trail (manifests, weight tickets, treatment records, disposition documentation) so the waste can be tracked from the facility where it was created to the point where it was treated and released under permit.",
      },
      {
        question: "Do you treat hazardous wastewater?",
        answer:
          "No. Cowart's treatment plant is permitted for non-hazardous industrial wastewater. Streams that classify as RCRA hazardous (corrosive, ignitable, reactive, toxic above thresholds) or contain regulated quantities of PCBs aren't accepted at our plant. We profile every load before pickup, and out-of-profile material is rejected at the gate. If your facility generates hazardous wastewater, we can refer you to a permitted hazmat responder under a documented handoff.",
      },
      {
        question: "What wastewater streams do you accept?",
        answer:
          "Non-hazardous process water, oily water and emulsions, sump and pit pumpouts, parts-washer fluids, food-process wastewater (including FOG/high-BOD streams), latex and paint-line wash, contaminated stormwater from secondary containment, leachate, and water-based cleaning residuals. If you're not sure whether your stream qualifies, send us a profile — we'll characterize it and tell you whether we can accept it before scheduling a pickup.",
      },
      {
        question: "Do you operate your own treatment plant?",
        answer:
          "Yes. Cowart's non-hazardous wastewater treatment plant is in Carrollton, Georgia, west of Atlanta. The plant has been operating since the company was founded in 1974 and is the anchor of our single-DOT, single-vendor service model. Treated effluent is released under permit; recovered solids are dewatered and disposed appropriately.",
      },
      {
        question: "How is single-vendor wastewater service different?",
        answer:
          "Most industrial wastewater jobs involve three or four vendors — one for collection, one for transport, one for treatment, one for disposal documentation. Cowart runs all four. One DOT number on every truck, one Certificate of Insurance for your audit file, one contractor on the regulated-vendor list, one phone number when something needs attention. Your compliance department gets a simpler audit trail; your finance department gets predictable disposal costs.",
      },
      {
        question: "Can you do on-site sludge solidification?",
        answer:
          "Yes. On-site sludge solidification is a routine part of our wastewater work. We bring the equipment and reagents to the facility, solidify the sludge to pass paint-filter testing for landfill acceptance, and transport the resulting solid material to a permitted disposal facility under our own DOT number. This is often the right approach when liquid handling and trucking is more expensive than solidification and bulk transport.",
      },
      {
        question: "Do you offer scheduled wastewater pickup?",
        answer:
          "Yes. Most of our wastewater customers run on weekly, biweekly, or monthly standing pickup schedules. Drivers and dispatch contacts stay consistent, so gate codes, weight ticket procedures, and signoff routines don't have to be re-explained each visit. We also handle on-demand pickups and 24-hour emergency response — spill events, containment overflow, equipment failure that leaves a facility holding wastewater it can't process.",
      },
      {
        question: "What states do you serve for wastewater management?",
        answer:
          "Cowart Industrial provides wastewater management services across the Southeast — Georgia, Alabama, Tennessee, South Carolina, North Carolina, Florida, Mississippi, and Kentucky. The treatment plant is in Carrollton, GA, and 24-hour dispatch covers the full eight-state footprint for both scheduled and emergency wastewater work.",
      },
    ],
  },
  {
    slug: "oil-water-separator-service",
    category: "waste-management",
    code: "S—19",
    title: "Oil-Water Separator Service",
    shortTitle: "Oil-Water Separator",
    description:
      "Oil-water separator cleaning and pump-out across the Southeast — quarterly oil removal, annual full pump-out, in-house disposal in Carrollton, GA.",
    intro:
      "Quarterly oil removal and annual full pump-outs for oil-water separators at gas stations, repair shops, fleet yards, and industrial facilities — under one DOT number, disposed at Cowart's treatment plant.",
    content: [
      "Oil-water separators (OWS, also called oil/water interceptors) collect the oily wastewater generated by maintenance bays, wash bays, fuel islands, and similar operations and physically separate the oil layer from the water before discharge to sewer. Gravity does the work — denser water settles, lighter oil floats — assisted by baffles, coalescing media, and sediment chambers depending on the design. The water side typically discharges under a local sewer authority permit. The oil side accumulates between service visits and has to be pumped out by a licensed contractor before the separator's capacity fills and starts allowing oil to bypass into the sewer.",
      "Cowart Industrial provides oil-water separator service across an 8-state Southeastern footprint — scheduled quarterly oil-skim pumpouts, annual full pump-outs with cleaning and inspection, coalescing media replacement, and emergency response when a separator overflows or fails inspection. The work uses our liquid vacuum trucks (3,000–5,000 gallon Kenworth tankers), runs under Cowart's own DOT number, and ends at our non-hazardous wastewater treatment plant in Carrollton, Georgia. One vendor, one Certificate of Insurance, one paper trail.",
      "OWS service customers run the range from single-bay auto repair shops up through multi-location dealership groups, fleet maintenance yards, transportation fueling facilities, and industrial maintenance operations. The cadence depends on volume of oily water generated and the discharge permit conditions set by the local sewer authority — typically quarterly oil-only pumpouts plus an annual full-cleaning service, but more frequent for high-volume operations. We'll tell you straight what your specific operation actually needs based on the inspection at the first visit.",
    ],
    capabilities: [
      "Quarterly free-oil skim pumpouts",
      "Annual full pump-out and cleaning",
      "Coalescing media inspection and replacement",
      "Sludge and sediment chamber cleanout",
      "Baffle and chamber inspection",
      "Vacuum truck service (3,000–5,000 gal tankers)",
      "In-house disposal at Carrollton treatment plant",
      "DOT-certified transport under one DOT number",
      "Sewer-permit compliance documentation",
      "24-hour emergency response for overflows or failures",
    ],
    keywords: "OWS · Quarterly + Annual",
    metaKeywords: [
      "oil water separator service",
      "oil-water separator cleaning",
      "oil water separator pump out",
      "oil water separator maintenance",
      "OWS service",
      "oil water separator Carrollton GA",
      "oil water separator Atlanta",
      "oil water separator Georgia",
      "oil water interceptor service",
      "oil water separator near me",
    ],
    icon: Layers,
    photo: "/photos/gallery-vac-transfer.jpg",
    photoAlt: "Cowart vacuum tanker connected by hoses for an on-site oil-water separator pump-out",
    related: ["waste-water-management", "liquid-vacuum-service", "on-site-filtration"],
    extendedContent: [
      {
        heading: "What an oil-water separator does and who needs one",
        paragraphs: [
          "An oil-water separator is essentially a multi-chamber tank engineered around the density difference between water and petroleum products. Wastewater enters the inlet chamber, where heavier solids (grit, sediment, sludge) drop out. The flow then passes into a separation chamber sized to slow the water enough that suspended oil droplets can rise and coalesce — often helped along by coalescing media (corrugated plates or media packs that give the oil droplets surfaces to stick to and merge). Oil accumulates in an oil reservoir at the top; clean(er) water discharges from an outlet chamber to the sewer.",
          "Facilities required to have one typically include auto dealerships with service departments, auto and heavy truck repair shops, commercial car washes (especially those that clean undercarriages), transportation fueling facilities and truck stops, fleet maintenance yards, vehicle auction yards, salvage and tow yards, scrap metal processors, and industrial maintenance operations where machinery is washed or oily process water is generated. Most are required by the local sewer authority's industrial discharge permit. The permit conditions usually dictate how often the separator must be serviced and inspected, with documentation kept on file for the permit reviewer.",
        ],
      },
      {
        heading: "Quarterly oil removal vs. annual full pump-out — what each visit actually covers",
        paragraphs: [
          "The industry-standard service cadence is **quarterly oil-only pumpouts** plus **one annual full cleaning** per year. The quarterly visits skim the accumulated free oil off the top of the separator (and any easily-accessible sludge in the sediment chamber), keeping the unit's capacity from filling and reducing the risk of oil bypass into the sewer between annual cleanings. The annual visit empties the entire unit, washes the chambers, inspects baffles and coalescing media for damage or fouling, replaces media if needed, and verifies the unit is functioning as designed before refilling with clean water.",
          "Facilities with higher oil-generation rates (busy car washes, heavy-truck repair shops, high-volume fueling) often need more frequent service than the quarterly/annual baseline. Conversely, low-volume operations may only need the annual visit. The first inspection visit tells us which category your operation falls into — we'll measure free-oil thickness and sediment accumulation and recommend a cadence calibrated to your actual usage rather than a generic schedule.",
          "Every service visit produces a documentation packet: vacuum truck weight ticket, inspection notes (oil and sediment levels, media condition, any visible damage), and a certificate of disposition for the recovered material. For accounts under a sewer discharge permit, that documentation goes straight into the file the permit reviewer asks for during inspections.",
        ],
      },
      {
        heading: "Why a single-DOT, in-house treatment contractor matters for OWS work",
        paragraphs: [
          "Most oil-water separator service companies are middlemen on the disposal side. They pump out the separator, load the recovered oil/water/sludge into a tanker, and haul it to a third-party disposal facility — often through another subcontractor. The customer ends up with a manifest crossing two or three vendors and a disposal cost the OWS contractor doesn't control.",
          "Cowart owns the whole chain. The vacuum truck that empties your separator is a Cowart truck. The driver is a Cowart employee. The DOT authority on the trailer is Cowart's. The destination is our non-hazardous wastewater treatment plant in Carrollton, GA, where the recovered material is characterized, treated, and disposed under our own permits and manifests. For your sewer-permit file, that means a single contractor name on every disposition record — and predictable pricing because we're not passing through markup from third-party haulers or disposal facilities.",
          "We've been doing this work since 1974. Same family ownership, same treatment plant location, same operating model. For OWS customers under sewer discharge permits — where the inspector wants to see consistent contractor records year over year — that continuity is part of the value.",
        ],
      },
    ],
    industries: [
      "Auto dealerships (service and repair departments)",
      "Auto and heavy-truck repair shops",
      "Commercial car washes",
      "Transportation fueling facilities and truck stops",
      "Fleet maintenance yards",
      "Vehicle auction yards",
      "Salvage and tow yards",
      "Scrap metal processors and recyclers",
      "Industrial maintenance operations",
      "Heavy equipment dealers",
      "Rail and marine maintenance",
      "Municipal fleet operations",
    ],
    serviceAreas: [
      { state: "Georgia", cities: ["Atlanta", "Augusta", "Columbus", "Macon", "Savannah", "Carrollton", "LaGrange", "Newnan", "Rome"] },
      { state: "Alabama", cities: ["Birmingham", "Mobile", "Montgomery", "Huntsville", "Tuscaloosa", "Anniston"] },
      { state: "Tennessee", cities: ["Knoxville", "Chattanooga", "Nashville", "Memphis"] },
      { state: "South Carolina", cities: ["Columbia", "Charleston", "Greenville", "Spartanburg"] },
      { state: "North Carolina", cities: ["Charlotte", "Raleigh", "Greensboro", "Wilmington"] },
      { state: "Florida", cities: ["Jacksonville", "Tampa", "Pensacola", "Panama City"] },
      { state: "Mississippi", cities: ["Jackson", "Meridian", "Pascagoula", "Gulfport"] },
      { state: "Kentucky", cities: ["Louisville", "Lexington", "Owensboro", "Paducah"] },
    ],
    faqs: [
      {
        question: "What is an oil-water separator?",
        answer:
          "An oil-water separator (OWS, sometimes called an oil/water interceptor) is a multi-chamber tank that separates oil from water in wastewater before discharge to sewer. Used at auto repair shops, dealerships, car washes, fueling facilities, fleet maintenance yards, and industrial maintenance operations — anywhere oily wastewater is generated and the local sewer authority requires pretreatment before discharge.",
      },
      {
        question: "How often does an oil-water separator need to be serviced?",
        answer:
          "Industry standard is quarterly oil-skim pumpouts plus one full pump-out and cleaning per year. Higher-volume operations (busy car washes, heavy-truck shops, high-traffic fueling) often need more frequent service; low-volume operations sometimes only need the annual visit. Your local sewer discharge permit may specify a required minimum cadence — we'll match the schedule to your permit and your actual oil-accumulation rate.",
      },
      {
        question: "What's the difference between a quarterly oil-skim and an annual full pump-out?",
        answer:
          "Quarterly visits pump just the accumulated free oil off the top of the separator (and accessible sediment from the sludge chamber), keeping the unit's separation capacity from filling up between annual cleanings. The annual visit empties the whole unit, washes the chambers, inspects and replaces coalescing media as needed, checks baffles for damage, and verifies the separator is functioning before refilling with clean water. Both come with documentation for your permit file.",
      },
      {
        question: "Do you replace coalescing media?",
        answer:
          "Yes — coalescing media replacement is part of our annual full-service visit when the inspection shows the media has fouled, collapsed, or worn out. For separators with corrugated-plate media, we clean and reinstall when possible; for media-pack designs, we replace with manufacturer-spec material. We document media condition at every visit so you can track when replacement is coming due.",
      },
      {
        question: "What kinds of facilities need oil-water separator service?",
        answer:
          "Auto dealerships with service departments, auto and heavy-truck repair shops, commercial car washes (especially with undercarriage cleaning), transportation fueling facilities and truck stops, fleet maintenance yards, vehicle auction and storage yards, salvage/tow yards, scrap metal processors, industrial maintenance shops, and any operation generating oily wastewater that discharges to a sewer system under a pretreatment permit.",
      },
      {
        question: "Where does the recovered oil and water go?",
        answer:
          "Recovered material travels under Cowart's own DOT number from your facility directly to our non-hazardous wastewater treatment plant in Carrollton, Georgia. We don't subcontract transport or disposal — the same company that pumped your separator characterizes, treats, and disposes the recovered material. Your sewer-permit file gets a single contractor name on every disposition record.",
      },
      {
        question: "Can you respond to emergency oil-water separator issues?",
        answer:
          "Yes. 24-hour dispatch from Carrollton, GA. Common emergencies — separator overflow, failed inspection requiring immediate pump-out, mechanical failure of a fixed pump, or oil-discharge incidents — get same-day response across Georgia, Alabama, and the eastern half of our 8-state service area. Call dispatch and we'll route the right truck before working out the paperwork.",
      },
      {
        question: "What states do you serve for oil-water separator service?",
        answer:
          "Georgia, Alabama, Tennessee, South Carolina, North Carolina, Florida, Mississippi, and Kentucky. Carrollton, GA is the dispatch hub and treatment plant location. For accounts in the immediate Atlanta metro and West Georgia footprint, response is typically same-day or next-day; longer distances follow appropriately scaled response windows.",
      },
    ],
  },
  {
    slug: "waste-disposal",
    category: "waste-management",
    code: "S—03",
    title: "Industrial Waste Disposal",
    shortTitle: "Waste Disposal",
    description:
      "Non-hazardous industrial waste disposal across the Southeast — liquid, sludge, and solid streams treated at Cowart's own plant since 1974.",
    intro:
      "From scheduled pickups to one-time projects, Cowart handles disposal end-to-end — waste profile, transport, treatment, manifests, and proof of disposition.",
    content: [
      "Cowart Industrial provides non-hazardous industrial waste disposal for facilities across the Southeastern United States. We accept liquid waste streams directly at our own treatment plant in Carrollton, Georgia, and we route specialized streams to permitted disposal partners under our coordinated handoff. Every disposal job ships with the manifests, scale tickets, sampling records, and certificates of disposition your compliance team requires — generator to final disposal in one paper trail.",
      "Our disposal services cover the full range of non-hazardous industrial waste streams: wastewater, process water, oily water and emulsions, sludge, sump and pit contents, parts-washer fluids, food-process wastewater (including high-BOD and FOG streams), latex and paint-line wash, contaminated stormwater, and water-based cleaning residuals. Solid waste is handled through our roll-off container and dump-trailer services. We provide waste profiles upfront — what's accepted, what isn't, what the rate is — so your environmental department isn't guessing on disposal cost or capacity.",
      "Disposal works the way regulators expect: profiled, tracked, documented. Crews are DOT Hazmat-certified for transport (some non-hazardous materials still require hazmat transport rules), EPA RCRA-aware for handling, and HAZWOPER-40 for any field work that touches the material before disposal. The records that come with the job — manifest, weight ticket, sampling, disposition — match what your generator file needs for a routine audit or an unannounced regulator visit. Scheduled service and emergency call-outs run under the same paperwork standards.",
    ],
    capabilities: [
      "Non-hazardous liquid waste disposal",
      "Sludge and slurry disposal",
      "Oily water and emulsion disposal",
      "Food-process waste (FOG, high-BOD)",
      "Waste profiling and acceptance",
      "Manifest, weight ticket, and disposition records",
      "Permitted facility routing",
      "24-hour emergency disposal response",
    ],
    keywords: "Profiled · Permitted · Documented",
    metaKeywords: [
      "industrial waste disposal",
      "non-hazardous waste disposal",
      "industrial waste disposal Georgia",
      "non-hazardous waste disposal Southeast",
      "liquid waste disposal",
      "industrial liquid disposal",
      "sludge disposal services",
      "waste disposal company near me",
    ],
    icon: Trash2,
    photo: "/photos/service-waste-disposal.jpg",
    photoAlt: "Cowart 20-yard roll-off box staged for solid waste disposal",
    extendedContent: [
      {
        heading: "What we accept — and what we don't",
        paragraphs: [
          "Cowart's treatment plant in Carrollton, GA is permitted for non-hazardous industrial waste. The streams we routinely accept include process wastewater, oily water and emulsions, sludge and tank bottoms, sump and pit contents, parts-washer fluids, food-process wastewater (FOG, high-BOD, dairy and beverage residuals), latex and paint-line wash, contaminated stormwater from secondary containment, leachate from holding ponds, and water-based cleaning residuals from industrial cleaning work. Solid waste (debris, dewatered cake, contaminated soil, ash) goes through our roll-off or dump-trailer service to permitted landfill or recovery facilities.",
          "What we don't accept: RCRA-hazardous waste, characteristic-hazardous streams (corrosive below pH 2 or above pH 12.5, ignitable, reactive, toxic above thresholds), PCB-containing material, radioactive material, and any stream out of profile with our permit. Every load is characterized before pickup, and out-of-profile material is rejected at the source rather than being delivered to the plant and refused there. If your facility generates hazardous waste, we can refer you to a permitted hazmat responder under a documented handoff.",
        ],
      },
      {
        heading: "How disposal works at Cowart",
        paragraphs: [
          "Disposal starts with a waste profile — a sampling pass and lab characterization that tells us what's in the stream. For routine generators with consistent waste, the profile is good for a year and re-sampled annually. For one-off projects, the profile happens at quote time. Once the profile is approved, the material moves: our vacuum truck (or your truck delivering to our plant) collects the load under our DOT number, weighs in at the plant, and the material enters the treatment train.",
          "At the plant, liquid waste goes through solids separation, oil-water separation, chemistry-driven pH adjustment and clarification, biological polishing, and final filtration as the stream profile requires. Treated effluent is released under permit; recovered solids are dewatered and routed to a permitted landfill. The customer receives a certificate of disposition tied to the original manifest, closing the loop on generator-to-disposal documentation.",
          "Solid waste runs a parallel path — roll-off containers and dump trailers transport to landfill or recovery facilities matched to the material. Same DOT number on the trucks, same documentation discipline, different end point.",
        ],
      },
      {
        heading: "Compliance documentation that comes with the disposal",
        paragraphs: [
          "Every disposal job produces a documentation packet: signed manifest (generator copy, transporter copy, disposal facility copy), scale ticket from the weigh-in, sampling records when applicable, treatment record from the plant, and certificate of disposition for the final fate of the material. For sites under permit (RCRA generator, industrial pretreatment, NPDES), documentation cadence and format are matched to permit requirements.",
          "This matters because the disposal step is the part most generators get audited on. EPA and state environmental agencies want to see the paper trail from the waste leaving your facility to its final fate. Cowart's single-DOT, in-house-treatment model produces that paper trail under one company's name — so your contractor file has one tab and your auditor doesn't chase phantom subcontractors.",
        ],
      },
    ],
    industries: [
      "Manufacturing (general and heavy)",
      "Food and beverage processing",
      "Automotive and assembly plants",
      "Pulp and paper mills",
      "Chemical manufacturing",
      "Pharmaceutical manufacturing",
      "Power generation",
      "Refineries and petrochemical",
      "Textile and carpet mills",
      "Metal finishing and parts cleaning",
      "Municipal and industrial wastewater",
      "Logistics and distribution",
    ],
    serviceAreas: [
      { state: "Georgia", cities: ["Atlanta", "Augusta", "Columbus", "Macon", "Savannah", "Carrollton", "LaGrange", "Newnan", "Rome"] },
      { state: "Alabama", cities: ["Birmingham", "Mobile", "Montgomery", "Huntsville", "Tuscaloosa", "Anniston"] },
      { state: "Tennessee", cities: ["Knoxville", "Chattanooga", "Nashville", "Memphis"] },
      { state: "South Carolina", cities: ["Columbia", "Charleston", "Greenville", "Spartanburg"] },
      { state: "North Carolina", cities: ["Charlotte", "Raleigh", "Greensboro", "Wilmington"] },
      { state: "Florida", cities: ["Jacksonville", "Tampa", "Pensacola", "Panama City"] },
      { state: "Mississippi", cities: ["Jackson", "Meridian", "Pascagoula", "Gulfport"] },
      { state: "Kentucky", cities: ["Louisville", "Lexington", "Owensboro", "Paducah"] },
    ],
    faqs: [
      {
        question: "What kinds of industrial waste do you dispose of?",
        answer:
          "Non-hazardous liquid and solid industrial waste — wastewater, oily water, sludge, sump and pit contents, parts-washer fluids, food-process waste (FOG, high-BOD), latex and paint-line wash, contaminated stormwater, water-based cleaning residuals, dewatered cake, contaminated soil, and demolition debris. Solid streams go to permitted landfill or recovery; liquid streams are treated at our own plant in Carrollton.",
      },
      {
        question: "Do you dispose of hazardous waste?",
        answer:
          "No. Cowart's treatment plant and operations are permitted for non-hazardous streams only. RCRA-hazardous, characteristic-hazardous (corrosive, ignitable, reactive, toxic above thresholds), PCB-containing material, and radioactive material aren't accepted. If your facility generates hazardous waste, we can refer you to a permitted hazmat disposal contractor under a documented handoff.",
      },
      {
        question: "How do I get a waste profile?",
        answer:
          "Call dispatch or use the contact form to start a profile. For most streams we ask for a representative sample and a description of how the waste is generated; we run the lab work and return a profile sheet within a few business days. The profile names the acceptance status, the disposal rate, and any handling notes. Profiles are good for a year and re-sampled annually for routine generators.",
      },
      {
        question: "What documentation do I get with each disposal?",
        answer:
          "Signed manifest (generator, transporter, and disposal facility copies), scale ticket from the weigh-in, sampling records, treatment record from the plant, and certificate of disposition for the final fate of the material. For sites under permit (RCRA generator, NPDES, industrial pretreatment), documentation cadence and format are matched to what your permit requires.",
      },
      {
        question: "Do you do scheduled pickup, or just one-off?",
        answer:
          "Both. Most generators run on weekly, biweekly, or monthly standing pickup schedules — same driver, same procedure, same dispatch contact each visit. One-off pickups handle project waste, turnaround volume, and unscheduled cleanouts. Emergency dispatch is available 24 hours from Carrollton for spills, containment failures, and process upsets.",
      },
      {
        question: "What does waste disposal cost?",
        answer:
          "Cost depends on the waste profile, volume, transport distance, and treatment complexity. We quote in $/gallon for liquid streams and in $/ton or $/load for solids, with the rate set when the profile is approved. We own the treatment side, so the rate quoted is the rate charged — no pass-through markup from a third-party disposal facility, no surprise tipping fees.",
      },
      {
        question: "What states do you serve for waste disposal?",
        answer:
          "Georgia, Alabama, Tennessee, South Carolina, North Carolina, Florida, Mississippi, and Kentucky. Dispatch is from Carrollton, GA. For sites outside the 8-state footprint, contact us — depending on the volume and material, we may still be able to accept the work.",
      },
    ],
  },
  {
    slug: "waste-transport",
    category: "waste-management",
    code: "S—04",
    title: "Industrial Waste Transport",
    shortTitle: "Waste Transport",
    description:
      "DOT-certified industrial waste transport across 8 Southeastern states — vacuum tankers, dump trailers, roll-off trucks, no broker handoffs.",
    intro:
      "Our trucks, our drivers, our DOT number — no broker handoffs. When the load leaves your site, it stays Cowart's responsibility until it reaches the disposal facility.",
    content: [
      "Cowart Industrial provides DOT-certified industrial waste transport for non-hazardous waste streams across the Southeastern United States. The fleet covers liquid vacuum tankers (3,000–5,000 gallon), sealed vacuum boxes, dump trailers for bulk solids, and roll-off trucks for containerized waste. Drivers are credentialed for the materials they haul, and every truck operates under Cowart's own DOT number — chain of custody never breaks across a subcontractor or a broker.",
      "Waste transport covers the full range of non-hazardous industrial streams: process water and wastewater, sumps and pit contents, oily water and emulsions, parts-washer fluids, food-process waste, sludge and slurries (when contained in sealed vacuum boxes), and solid waste in roll-off containers or dump trailers. We handle scheduled standing routes for facilities with recurring volume, one-call dispatch for project work and plant turnarounds, and 24-hour emergency mobilization. Every load travels with a manifest, weight ticket, and the chain-of-custody documentation your generator file needs.",
      "Our 8-state footprint covers Georgia, Alabama, Tennessee, South Carolina, North Carolina, Florida, Mississippi, and Kentucky. Drivers carry HAZWOPER-40, OSHA-30, DOT Hazmat, and EPA RCRA awareness credentials — some non-hazardous materials still require hazmat transport rules, and we run that way as default to avoid surprises. The compliance team can produce records for any load on request, with a turnaround measured in hours, not days. If you need waste off-site today, dispatch from Carrollton can usually have a truck on the road within hours.",
    ],
    capabilities: [
      "DOT-certified liquid waste transport (3K-5K gal tankers)",
      "Sealed vacuum box transport for sludge",
      "Roll-off and dump-trailer hauling for solids",
      "Direct chain of custody under one DOT number",
      "Manifest, BOL, and weight-ticket documentation",
      "Standing scheduled routes",
      "Plant turnaround and project mobilization",
      "Emergency dispatch (24/7)",
    ],
    keywords: "DOT · 8 States · Same-Day",
    metaKeywords: [
      "industrial waste transport",
      "DOT waste transport",
      "waste transport Georgia",
      "industrial waste hauling Southeast",
      "non-hazardous waste transport",
      "liquid waste transport",
      "sludge transport service",
      "industrial waste hauler near me",
    ],
    icon: Truck,
    photo: "/photos/service-waste-transport.jpg",
    photoAlt: "Cowart Kenworth tractor staged with blue waste containers",
    extendedContent: [
      {
        heading: "Why our own DOT number matters",
        paragraphs: [
          "Most industrial waste transport happens through a chain of vendors: the generator hires a hauler, the hauler may subcontract to an actual trucking company, the trucking company drops the load at a transfer station, and a different hauler takes it to the disposal facility. Each step has its own DOT number, its own insurance certificate, and its own paperwork. When something goes wrong on the road — a spill, an accident, a manifest mismatch — figuring out who was in custody at the moment of the incident becomes a forensic exercise.",
          "Cowart operates under its own DOT number on every truck that leaves your facility. The driver is a Cowart employee. The trailer is on Cowart's authority. The destination — our treatment plant in Carrollton, GA, or a permitted partner facility — is reached without a subcontracted leg in between. Your generator file shows one transporter, one Certificate of Insurance, one phone number when something needs attention.",
        ],
      },
      {
        heading: "What our fleet hauls",
        paragraphs: [
          "Liquid vacuum tankers are the workhorses — 3,000 and 5,000 gallon Kenworth tankers configured for industrial pickup. They handle wastewater, oily water, sludge that pumps as a liquid, sump and pit contents, process water, parts-washer fluids, food-process wastewater. The truck's positive-displacement blower pulls the load through the hose; no on-site pump is required.",
          "For sludge and semi-solid material that won't pump as a liquid, we use sealed vacuum boxes — 20-yard steel containers rated for vacuum loading and DOT-regulated liquid transport. The boxes are staged on site, vacuumed full, sealed, and hauled out as a single contained load.",
          "Dry-bulk solids (dewatered cake, contaminated soil, ash, refractory debris, demolition material) move in dump trailers — end-dump or live-bottom configurations for the volume and material type. Containerized waste (general industrial debris, dewatered sludge boxes) moves on roll-off trucks. Each configuration carries its own DOT manifest pattern, and we run all of them under one fleet operator so the dispatch is one phone call.",
        ],
      },
      {
        heading: "Scheduled, on-demand, emergency — all three run on the same paperwork",
        paragraphs: [
          "Most of our transport work runs on standing pickup schedules: weekly, biweekly, or monthly cycles for plants that generate predictable volume. The driver is consistent visit-to-visit — gate codes, weight ticket procedures, signoff routines stay the same — and dispatch knows the site. On-demand pickups handle one-off needs: project waste, turnaround volume, tank cleanouts that don't fit the standing cycle.",
          "Emergency dispatch is 24-hour. Spill response, containment overflow, equipment failure that leaves a facility holding waste it can't process — call dispatch from Carrollton and tell them what's holding the waste. Same-day mobilization is typical across Georgia, Alabama, and the eastern half of our service area; the full 8-state footprint is reached on appropriately scaled response windows. The paperwork on a 2 AM spill call matches the paperwork on a Tuesday-morning scheduled pickup — manifest, weight ticket, sampling if applicable, disposition certificate when the load is treated or landfilled.",
        ],
      },
    ],
    industries: [
      "Manufacturing (general and heavy)",
      "Food and beverage processing",
      "Automotive and assembly plants",
      "Pulp and paper mills",
      "Chemical manufacturing",
      "Pharmaceutical manufacturing",
      "Power generation",
      "Refineries and petrochemical",
      "Metal finishing and parts cleaning",
      "Construction and remediation",
      "Municipal and industrial wastewater",
      "Logistics and distribution",
    ],
    serviceAreas: [
      { state: "Georgia", cities: ["Atlanta", "Augusta", "Columbus", "Macon", "Savannah", "Carrollton", "LaGrange", "Newnan", "Rome"] },
      { state: "Alabama", cities: ["Birmingham", "Mobile", "Montgomery", "Huntsville", "Tuscaloosa", "Anniston"] },
      { state: "Tennessee", cities: ["Knoxville", "Chattanooga", "Nashville", "Memphis"] },
      { state: "South Carolina", cities: ["Columbia", "Charleston", "Greenville", "Spartanburg"] },
      { state: "North Carolina", cities: ["Charlotte", "Raleigh", "Greensboro", "Wilmington"] },
      { state: "Florida", cities: ["Jacksonville", "Tampa", "Pensacola", "Panama City"] },
      { state: "Mississippi", cities: ["Jackson", "Meridian", "Pascagoula", "Gulfport"] },
      { state: "Kentucky", cities: ["Louisville", "Lexington", "Owensboro", "Paducah"] },
    ],
    faqs: [
      {
        question: "What is industrial waste transport?",
        answer:
          "Industrial waste transport is the DOT-regulated movement of non-hazardous waste streams from the generating facility to a treatment or disposal site. It includes the truck, driver, manifest, and chain-of-custody documentation that tracks the load from pickup to final disposition. The transport step is regulated under DOT hazmat rules (even for many non-hazardous materials) and is part of the generator's compliance paper trail.",
      },
      {
        question: "What trucks do you operate?",
        answer:
          "3,000 and 5,000 gallon liquid vacuum tankers on Kenworth chassis, sealed 20-yard vacuum boxes for sludge transport, dump trailers (end-dump and live-bottom) for dry bulk, and roll-off trucks for containerized waste. Every truck runs under Cowart's own DOT number, and drivers carry HAZWOPER-40, OSHA-30, DOT Hazmat, and EPA RCRA awareness credentials.",
      },
      {
        question: "Do you operate under your own DOT number?",
        answer:
          "Yes. Every truck that leaves your facility is a Cowart truck operated by a Cowart driver under Cowart's DOT authority. We don't subcontract transport to brokers or third-party haulers. The chain of custody is unbroken from pickup at your site to delivery at our treatment plant in Carrollton, GA or to a permitted partner facility.",
      },
      {
        question: "Can you handle scheduled pickups and emergency response?",
        answer:
          "Both. Most generators run on weekly, biweekly, or monthly standing schedules with the same driver each visit. 24-hour emergency dispatch from Carrollton covers spill response, containment overflow, tank failure, and any unplanned event that puts a facility on the clock to move waste off site.",
      },
      {
        question: "What documentation comes with each transport?",
        answer:
          "Signed manifest (generator, transporter, and disposal facility copies), weight ticket from the weigh-in, BOL where applicable, sampling records when required, and certificate of disposition tying the load to its final treatment or disposal. Documentation is in your hands within standard turnaround — same week for routine, same day for urgent.",
      },
      {
        question: "Do you transport hazardous waste?",
        answer:
          "No. The fleet is set up for non-hazardous waste transport only. RCRA hazardous, characteristic-hazardous (corrosive, ignitable, reactive, toxic above thresholds), and PCB-containing material aren't accepted. Drivers are DOT Hazmat-trained because some non-hazardous materials require hazmat transport precautions, but the disposal end of the operation is non-hazardous.",
      },
      {
        question: "What states do you transport in?",
        answer:
          "Georgia, Alabama, Tennessee, South Carolina, North Carolina, Florida, Mississippi, and Kentucky. The treatment plant is in Carrollton, GA, and routes radiate from there. For sites outside the 8-state footprint, contact us — depending on the volume and material, we may still be able to handle the work.",
      },
    ],
  },
  {
    slug: "roll-off-containers",
    category: "waste-management",
    code: "S—05",
    title: "Industrial Roll-Off Container",
    shortTitle: "Roll-Off",
    description:
      "Industrial roll-off container service across the Southeast — 20, 30, and 40 yard boxes for non-hazardous solid waste and plant cleanouts.",
    intro:
      "Roll-off containers for plant cleanouts, turnarounds, debris removal, and project waste. Sizes 20–40 yards, delivered when you need them and pulled when they're full.",
    content: [
      "Cowart Industrial provides roll-off container service for industrial facilities across an 8-state Southeastern footprint. The roll-off fleet covers 20, 30, and 40-yard open-top boxes — sized for the work, not just whatever's on the lot. Standard delivery is within 24 hours of the call; emergency same-day service is available across most of our service area, dispatched from Carrollton, GA.",
      "Roll-off containers handle non-hazardous solid waste: demolition debris, plant cleanout material, dewatered sludge cake, contaminated soil suitable for landfill, general project waste, refractory debris, packaging and pallets, and most bulk solid streams. We do not accept hazardous materials, wet sludge (use a sealed vacuum box instead), or free-flowing liquids in open-top roll-offs — for those streams, dispatch will route you to the right container.",
      "Containers come with the documentation industrial customers expect: delivery and pickup tickets, weight slips from the disposal facility, and certificates of disposition once the load is offloaded at the permitted disposal site. Every truck runs under Cowart's own DOT number, so the manifest and disposition paperwork stay under one contractor. Whether you're running a one-time cleanout or a recurring schedule for a production line, the paperwork standard is the same.",
    ],
    capabilities: [
      "20, 30, and 40-yard open-top boxes",
      "Same-day and 24-hour scheduled delivery",
      "Non-hazardous solid waste haul-off",
      "Demolition and project debris removal",
      "Plant cleanout and turnaround support",
      "Weight tickets and disposition records",
      "DOT-certified transport to permitted disposal",
      "Standing schedules for ongoing volume",
    ],
    keywords: "20—40 Yard · Same-Day",
    metaKeywords: [
      "roll off container service",
      "industrial roll off",
      "roll off dumpster rental",
      "roll off Georgia",
      "industrial roll off Southeast",
      "construction roll off",
      "demolition roll off",
      "roll off container near me",
    ],
    icon: Container,
    photo: "/photos/service-roll-off.jpg",
    photoAlt: "Cowart roll-off truck hauling box CRB-060",
    extendedContent: [
      {
        heading: "What size roll-off do you need?",
        paragraphs: [
          "Roll-off sizing isn't just about volume — it's about the weight of the material, the access at the loading site, and how often the box gets pulled. A 20-yard box is the right call for heavy material (concrete, soil, refractory) where weight limits hit before the box is full. A 30-yard works for mixed solids of moderate density. A 40-yard is for lighter, bulkier material (packaging, demolition wood, debris) where volume runs out before weight does.",
          "Most plant cleanouts and turnaround work uses 30-yard boxes as a default. Demolition jobs and large-scale renovation lean toward 40-yard. Soil-heavy work like contaminated-soil removal usually stages 20-yard boxes with multiple pulls. If you're not sure, tell dispatch what the material is and the rough volume — they'll match the box and the pull schedule to the job.",
        ],
      },
      {
        heading: "What we accept and what we don't",
        paragraphs: [
          "Open-top roll-off containers are for non-hazardous solid waste. Accepted streams include demolition debris, contaminated soil that's been characterized for landfill acceptance, dewatered sludge cake, plant cleanout debris, refractory material, packaging, dewatered process residuals, and general industrial bulk solids. The acceptance criterion is dry-handling and non-hazardous classification — if it weeps liquid or doesn't pass paint-filter testing, it needs a sealed vacuum box instead, not a roll-off.",
          "We don't accept: free-flowing liquids, wet sludge that hasn't been solidified, hazardous waste (RCRA, characteristic, PCB, radioactive), or anything our partner disposal facilities aren't permitted to receive. If your material classification is on the edge, run a profile before pickup — out-of-profile material gets rejected at the disposal facility and the customer eats the round-trip transport cost.",
        ],
      },
      {
        heading: "Plant turnarounds and project work",
        paragraphs: [
          "Plant turnarounds are a heavy roll-off application. Shutdowns produce large volumes of cleanout material in compressed windows — refractory removal, equipment cleaning residue, packaging from new parts, demolition debris from the work itself. We stage multiple boxes on site for the duration of the turnaround, with a pull schedule that keeps the work area cleared without bottlenecking the maintenance crews. One dispatcher coordinates deliveries, pulls, and weight-slip aggregation across the entire shutdown.",
          "Project work runs similarly. Site preparation, demolition, new construction, and capital projects all generate roll-off-friendly waste streams. We coordinate with the general contractor or facility project manager on box placement, pull cadence, and disposal documentation. The work happens under one work order, one Certificate of Insurance, one paper trail.",
        ],
      },
    ],
    industries: [
      "Manufacturing (general and heavy)",
      "Refineries and petrochemical",
      "Power generation",
      "Pulp and paper mills",
      "Steel and aluminum mills",
      "Chemical manufacturing",
      "Food and beverage processing",
      "Automotive and assembly plants",
      "Construction and demolition",
      "Mining and aggregates",
      "Environmental remediation",
      "Municipal and government facilities",
    ],
    serviceAreas: [
      { state: "Georgia", cities: ["Atlanta", "Augusta", "Columbus", "Macon", "Savannah", "Carrollton", "LaGrange", "Newnan", "Rome"] },
      { state: "Alabama", cities: ["Birmingham", "Mobile", "Montgomery", "Huntsville", "Tuscaloosa", "Anniston"] },
      { state: "Tennessee", cities: ["Knoxville", "Chattanooga", "Nashville", "Memphis"] },
      { state: "South Carolina", cities: ["Columbia", "Charleston", "Greenville", "Spartanburg"] },
      { state: "North Carolina", cities: ["Charlotte", "Raleigh", "Greensboro", "Wilmington"] },
      { state: "Florida", cities: ["Jacksonville", "Tampa", "Pensacola", "Panama City"] },
      { state: "Mississippi", cities: ["Jackson", "Meridian", "Pascagoula", "Gulfport"] },
      { state: "Kentucky", cities: ["Louisville", "Lexington", "Owensboro", "Paducah"] },
    ],
    faqs: [
      {
        question: "What sizes of roll-off containers do you offer?",
        answer:
          "20, 30, and 40-yard open-top boxes. 20-yard for heavy material (concrete, soil, refractory) where weight limits hit early; 30-yard as the default for mixed solid waste of moderate density; 40-yard for lighter bulky material (packaging, demolition wood) where volume runs out before weight does.",
      },
      {
        question: "How fast can you deliver a roll-off?",
        answer:
          "Standard delivery is within 24 hours of the call. Same-day delivery is available across most of our 8-state Southeast service area when dispatch is called by mid-morning. For plant turnarounds and projects, we pre-schedule the delivery and pull cadence around the work plan.",
      },
      {
        question: "What can I put in a roll-off?",
        answer:
          "Non-hazardous solid waste — demolition debris, contaminated soil characterized for landfill acceptance, dewatered sludge cake, plant cleanout material, refractory, packaging, dewatered process residuals, and general industrial bulk solids. Anything that's dry-handling and non-hazardous. Free-flowing liquids and wet sludge need a sealed vacuum box, not an open-top roll-off.",
      },
      {
        question: "What can't I put in a roll-off?",
        answer:
          "Hazardous waste (RCRA, characteristic, PCB, radioactive), free-flowing liquids, wet sludge that hasn't been solidified, or anything out of profile with the receiving disposal facility's permit. If the material classification is on the edge, run a profile before pickup — out-of-profile loads get rejected at the disposal facility and the customer pays the round trip.",
      },
      {
        question: "Do you provide weight tickets and disposal records?",
        answer:
          "Yes. Delivery and pickup tickets, weight slips from the disposal facility, and certificates of disposition come standard with every roll-off job. For sites under permit (RCRA generator, NPDES, industrial pretreatment), documentation cadence and format match the permit.",
      },
      {
        question: "Can you support plant turnarounds with multiple boxes?",
        answer:
          "Yes — turnaround work is a core roll-off application. We stage multiple boxes on site for the duration of the shutdown, coordinate pull schedules with the maintenance plan, and aggregate documentation into a single packet at the end. One dispatcher, one work order, one paper trail.",
      },
      {
        question: "What states do you deliver roll-offs to?",
        answer:
          "Georgia, Alabama, Tennessee, South Carolina, North Carolina, Florida, Mississippi, and Kentucky. Dispatch is from Carrollton, GA. Delivery time varies with distance; the eastern half of our region typically gets same-day or next-day service.",
      },
    ],
  },
  {
    slug: "dump-trailer-service",
    category: "waste-management",
    code: "S—06",
    title: "Industrial Dump Trailer Service",
    shortTitle: "Dump Trailer",
    description:
      "End-dump trailer service across the Southeast for industrial bulk material — contaminated soil, dewatered sludge, ash, aggregates, and demolition debris.",
    intro:
      "End-dump trailers for loose bulk material — loaded on site, hauled under our DOT number, and tipped at the disposal facility. The right tool when the load is too loose for a roll-off and too solid for a tanker.",
    content: [
      "Cowart Industrial provides dump trailer service for industrial sites moving high volumes of loose bulk material across the Southeastern United States. Our end-dump trailers carry significantly more per load than a roll-off box and discharge by raising the front and tipping the load out the rear — efficient for material that flows on tip-out: contaminated soil, dewatered sludge cake, industrial ash, sand, aggregates, grit, refractory removal debris, and demolition material. Live-bottom configurations are also available for materials that don't tip cleanly.",
      "Dump trailers are the right call when the volume is too large for roll-off boxes and the material is too solid for a vacuum tanker. We load on site — by excavator, loader, conveyor, or directly from a dewatering operation — and haul the material to our own non-hazardous treatment plant in Carrollton or to a permitted disposal facility matched to the material profile. Multiple trailers can run in rotation to keep a loading operation moving without downtime, common during plant turnarounds and large remediation projects.",
      "Every load travels under Cowart's own DOT number with the manifests, scale tickets, and certificates of disposition your environmental department expects. Drivers carry HAZWOPER-40, OSHA-30, DOT Hazmat, and EPA RCRA awareness credentials. Scheduled hauling for ongoing projects and one-call dispatch for turnarounds, cleanouts, and emergency mobilization all run under the same paperwork standards across our 8-state Southeastern footprint: GA, AL, TN, SC, NC, FL, MS, KY.",
    ],
    capabilities: [
      "High-volume end-dump hauling",
      "Live-bottom trailers for non-tip-out material",
      "Contaminated soil and ash transport",
      "Dewatered sludge cake haul-off",
      "Refractory removal hauling",
      "Aggregate and bulk material moves",
      "On-site loading coordination",
      "Multi-trailer rotation for high-throughput projects",
      "Manifests, scale tickets, and disposition records",
    ],
    keywords: "End-Dump · Bulk · Tipping",
    metaKeywords: [
      "industrial dump trailer service",
      "end dump trailer",
      "bulk material hauling",
      "contaminated soil hauling",
      "dewatered sludge hauling",
      "ash hauling",
      "dump trailer Georgia",
      "industrial bulk transport Southeast",
    ],
    icon: Truck,
    photo: "/photos/service-dump-trailer.jpg",
    photoAlt: "Cowart end-dump trailers staged in the fleet yard",
    extendedContent: [
      {
        heading: "When dump trailer is the right choice",
        paragraphs: [
          "Three vehicle classes handle bulk material movement on industrial sites: vacuum tankers (free-flowing liquids), sealed vacuum boxes (sludge and semi-solids), and dump trailers (dry bulk solids). The right call depends on the material's consistency, volume, and how it gets loaded. If you can move it with a loader or excavator and it tips out cleanly when the trailer raises, you want a dump trailer. If it pumps as a liquid, you want a tanker. If it's somewhere in between, you want a sealed vacuum box.",
          "Dump trailers shine on three job types: contaminated soil removal (remediation projects, tank pulls, underground storage tank cleanups), dewatered sludge transport (when a wastewater plant or industrial dewatering operation produces filter cake that ships dry), and post-demolition cleanup (refractory removal, debris from equipment teardown, ash and bottom solids from boilers). The economics favor dump trailers for any sustained, high-volume job — they carry significantly more per load than a 40-yard roll-off, and the loading/tipping cycle is faster.",
        ],
      },
      {
        heading: "End-dump vs. live-bottom",
        paragraphs: [
          "Our standard configuration is end-dump — the trailer raises from the front and the load discharges out the back. It works well for free-flowing material (soil, ash, sand, aggregates, broken refractory). What it doesn't handle well is sticky material — wet clay, oily soil, partially-dewatered sludge that bridges in the trailer instead of flowing out.",
          "For those materials, live-bottom trailers move the load with an internal conveyor belt while the trailer stays flat. The material walks out the back continuously instead of being dumped at once. Live-bottom is available on request when the material profile warrants it; standard end-dump handles the vast majority of jobs.",
        ],
      },
      {
        heading: "Single-DOT, single-vendor on bulk moves",
        paragraphs: [
          "Same model as the rest of Cowart's operation: every dump trailer that leaves your facility is a Cowart trailer pulled by a Cowart tractor with a Cowart driver, operating under Cowart's DOT authority. We don't subcontract bulk transport to brokers or owner-operators. The chain of custody on the load is unbroken from the loader's bucket to the disposal facility's tipping floor.",
          "That matters for environmental compliance: when EPA or a state agency wants to know who was in custody of the contaminated soil between the remediation site and the landfill, the answer is one company, on one Certificate of Insurance, with one set of records. For large remediation projects with regulatory oversight, that simplicity is the actual product.",
        ],
      },
    ],
    industries: [
      "Environmental remediation",
      "Construction and demolition",
      "Power generation (coal ash, biomass)",
      "Steel and aluminum mills (refractory removal)",
      "Manufacturing (general and heavy)",
      "Chemical manufacturing",
      "Pulp and paper mills",
      "Mining and aggregates",
      "Wastewater treatment plants (dewatered cake)",
      "Municipal projects",
      "Site preparation contractors",
      "Tank cleaning and decommissioning",
    ],
    serviceAreas: [
      { state: "Georgia", cities: ["Atlanta", "Augusta", "Columbus", "Macon", "Savannah", "Carrollton", "LaGrange", "Newnan", "Rome"] },
      { state: "Alabama", cities: ["Birmingham", "Mobile", "Montgomery", "Huntsville", "Tuscaloosa", "Anniston"] },
      { state: "Tennessee", cities: ["Knoxville", "Chattanooga", "Nashville", "Memphis"] },
      { state: "South Carolina", cities: ["Columbia", "Charleston", "Greenville", "Spartanburg"] },
      { state: "North Carolina", cities: ["Charlotte", "Raleigh", "Greensboro", "Wilmington"] },
      { state: "Florida", cities: ["Jacksonville", "Tampa", "Pensacola", "Panama City"] },
      { state: "Mississippi", cities: ["Jackson", "Meridian", "Pascagoula", "Gulfport"] },
      { state: "Kentucky", cities: ["Louisville", "Lexington", "Owensboro", "Paducah"] },
    ],
    faqs: [
      {
        question: "What is an end-dump trailer used for?",
        answer:
          "End-dump trailers haul loose bulk solid material in industrial volumes — contaminated soil, dewatered sludge cake, industrial ash, sand, aggregates, refractory debris, and demolition material. The trailer raises from the front and tips the load out the rear, which is efficient for material that flows freely on discharge.",
      },
      {
        question: "How does a dump trailer differ from a roll-off?",
        answer:
          "Roll-off containers are stationary boxes you load on site, then a roll-off truck hauls them away as a unit. Dump trailers are towed behind a tractor and load while connected — so the same trailer can run multiple loads per day on a sustained operation. Dump trailers carry significantly more per load and are usually the right choice when you need to move a large bulk volume in a compressed window.",
      },
      {
        question: "What materials can you haul in dump trailers?",
        answer:
          "Non-hazardous bulk solids — contaminated soil characterized for landfill acceptance, dewatered sludge cake, industrial ash (fly ash, bottom ash, ESP hopper material), sand, aggregates, grit, refractory removal debris, and demolition material that's been size-reduced for the trailer. Wet, sticky, or partially-liquid materials need a sealed vacuum box instead.",
      },
      {
        question: "Do you offer live-bottom trailers?",
        answer:
          "Yes, on request. Live-bottom trailers use an internal conveyor to walk the load out the back while the trailer stays flat — useful for sticky materials that don't tip out cleanly (wet clay, oily soil, partially-dewatered sludge). Standard end-dump handles the vast majority of jobs; live-bottom is matched to the material when the profile warrants it.",
      },
      {
        question: "Do you handle hazardous material in dump trailers?",
        answer:
          "No. The fleet is set up for non-hazardous bulk hauling only. RCRA-hazardous waste, characteristic-hazardous material, PCB-containing material, and radioactive material aren't accepted. Some non-hazardous contaminated soils require hazmat-style transport precautions; drivers are DOT Hazmat-trained to handle those cases.",
      },
      {
        question: "Can you run multiple trailers for a high-throughput project?",
        answer:
          "Yes. Multi-trailer rotation is common for remediation projects, plant turnarounds, and sustained dewatering operations. We coordinate trailer pulls and tractor rotation to keep the loading operation moving without bottlenecks — typically 3-6 trailers in continuous rotation for medium-large projects.",
      },
      {
        question: "What states do you serve for dump trailer work?",
        answer:
          "Georgia, Alabama, Tennessee, South Carolina, North Carolina, Florida, Mississippi, and Kentucky. Dispatch is from Carrollton, GA. For large multi-trailer projects, we can stage equipment near the job site for the project duration.",
      },
    ],
  },

  // ───────────────────────── VACUUM & CONTAINMENT ─────────────────────────
  {
    slug: "vacuum-trucks",
    category: "vacuum-containment",
    code: "S—07",
    title: "Industrial Vacuum Trucks",
    shortTitle: "Vacuum Trucks",
    description:
      "Industrial vacuum truck service across the Southeast — wet/dry vacuuming, liquid recovery, air-mover dry-bulk transfer, and sealed vacuum boxes.",
    intro:
      "One fleet, four service lines: tankers for liquids, air movers for solids, vacuum boxes for sludge, and roll-offs for haul-off. Dispatched, transported, and disposed under one DOT number.",
    content: [
      "Cowart Industrial operates a full vacuum truck fleet from our Carrollton, Georgia headquarters, serving industrial customers across an eight-state Southeastern footprint. The fleet is organized around four service lines: liquid vacuum tankers, high-volume air movers, sealed vacuum boxes, and roll-off containers. Most jobs use more than one — a typical sludge cleanout might pair a tanker for the liquids, an air mover for the dewatered solids, and a box for staging. One dispatcher coordinates the whole sequence, not three.",
      "The unifying theme is single-vendor compliance. Every truck runs under Cowart's own DOT number. Every driver carries HAZWOPER-40, OSHA-30, DOT Hazmat, and confined-space training current and documented. Loads recovered in the field come back to our own treatment plant in Carrollton — they're not handed off to a third-party hauler or a third-party treatment facility. For your environmental coordinator, that means one Certificate of Insurance on file, one contractor on the regulated-vendor list, and one phone number when something needs attention at 2 AM.",
      "Below are the four vacuum truck service lines, each linked to a dedicated page with equipment specs, typical applications, and material handling profile. If you're not sure which service fits your job, call dispatch — we'd rather route you correctly than sell you the wrong truck. The right vacuum truck for a 5,000-gallon caustic pumpout is not the right truck for a dry-bulk silo cleanout, and the wrong choice costs everybody time.",
    ],
    capabilities: [
      "Wet/dry vacuum trucks (liquids and solids)",
      "Liquid vacuum tankers (3,000-5,000 gal)",
      "High-volume air movers (dry bulk transfer)",
      "Sealed vacuum boxes (sludge containment)",
      "Roll-off containers (bulk waste haul-off)",
      "Confined-space entry and tank cleaning",
      "Spill response and emergency dispatch (24/7)",
      "In-house treatment and disposal",
    ],
    keywords: "Fleet · Dispatch · One DOT#",
    metaKeywords: [
      "vacuum truck services",
      "industrial vacuum truck",
      "wet dry vacuum truck",
      "vacuum truck service near me",
      "vacuum truck Georgia",
      "vacuum truck Southeast",
      "industrial vacuum services",
      "vac truck services",
      "vacuum tanker services",
      "spill response vacuum truck",
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
    extendedContent: [
      {
        heading: "Wet, dry, and what's in between",
        paragraphs: [
          "Industrial vacuum trucks come in a handful of fundamental configurations, and matching the configuration to the material is the difference between a one-shift job and a three-shift job. Liquid vacuum tankers (the trucks most people picture when they hear \"vac truck\") run a positive-displacement blower against an integrated tank — they're the right answer for free-flowing liquids: process water, oily water, sumps, pits, parts-washer fluids, spill response, and tank pumpouts. Cowart runs 3,000 and 5,000 gallon configurations from a Kenworth-based fleet.",
          "High-volume air movers use a much larger blower and a different recovery path — they pull dry bulk material (catalyst, fly ash, sand, lime, sawdust, refractory) through a high-velocity airstream into a separator and discharge it under control. They aren't liquid trucks pressed into double duty; the engineering is different and so is the operator skillset. Air movers are how dry silos, dust collectors, baghouses, and bulk piles get cleaned without manual entry.",
          "Sealed vacuum boxes — sometimes called \"vac boxes\" or \"sludge boxes\" — are the bridge between the two. A roll-off-style sealed container is pre-staged on site, vacuumed full of sludge or contaminated material, sealed, and hauled off as a single unit. They're the right answer when the material is too thick to pump as a liquid but too wet to handle as a dry solid: sludge, tank bottoms, mud, slurry, contaminated soils, dewatered solids. They also keep odor and exposure contained.",
        ],
      },
      {
        heading: "Why Cowart's vacuum truck operation is different",
        paragraphs: [
          "Most vacuum truck services are middlemen. They show up, suck up the material, and haul it to whoever will take it — a third-party treatment plant, a transfer station, a permitted hauler who then re-routes it again. Every handoff is another vendor on your manifest, another insurance certificate to vet, another phone number to call if something goes wrong on the disposal end. The disposal cost compounds at each handoff.",
          "Cowart owns the full chain. The truck that arrives at your facility runs under our DOT number, is operated by a Cowart driver, and brings the recovered material back to our own non-hazardous wastewater treatment plant in Carrollton, Georgia. Treatment, dewatering, solidification, and final disposal happen under our roof and our manifests. One vendor on your audit, one Certificate of Insurance on file, one phone number for the whole job.",
          "That model has been the structure of the business since 1974. The treatment plant came first; the trucks came after. The vacuum trucks are how material gets from the generator to the plant — they're an extension of the treatment operation, not a separate business line that happens to be co-located. That's why dispatch can promise that a load will be accepted at the plant before the driver leaves the yard.",
        ],
      },
      {
        heading: "Dispatch, response time, and 24/7 service",
        paragraphs: [
          "Standing pickup schedules cover most of the work. A facility that generates a known volume of wastewater or sludge on a known cadence gets a weekly, biweekly, or monthly truck assignment with the same driver wherever possible — gate codes, weight ticket procedures, and signoff routines stay consistent. The dispatch contact at Cowart is the same person each week, so handoffs and exceptions don't require re-explaining the site.",
          "On-demand pickups handle one-off requests — a tank that needs to be emptied for inspection, a sump that filled faster than expected, a project that generated more wash water than the holding pond can handle. Most on-demand requests are quoted within one business day and on site within the same week.",
          "Emergency response is the third leg, and it's the one that defines the operation. Spill events, containment overflow, equipment failure that leaves a facility holding material it can't process — 24-hour dispatch from Carrollton has trucks staged for response, the treatment plant ready to receive, and credentialed crews on call. The crews that show up on a 2 AM spill response are the same crews you'd see on a scheduled pickup — that consistency matters when the situation is already stressful.",
        ],
      },
    ],
    industries: [
      "Refineries and petrochemical",
      "Power generation (coal, gas, biomass)",
      "Pulp and paper mills",
      "Steel and aluminum mills",
      "Chemical manufacturing",
      "Food and beverage processing",
      "Automotive and assembly plants",
      "Pharmaceutical manufacturing",
      "Mining and aggregates",
      "Municipal water and wastewater",
      "Logistics and distribution",
      "General manufacturing",
    ],
    serviceAreas: [
      {
        state: "Georgia",
        cities: ["Atlanta", "Augusta", "Columbus", "Macon", "Savannah", "Carrollton", "LaGrange", "Newnan", "Rome"],
      },
      {
        state: "Alabama",
        cities: ["Birmingham", "Mobile", "Montgomery", "Huntsville", "Tuscaloosa", "Anniston"],
      },
      {
        state: "Tennessee",
        cities: ["Knoxville", "Chattanooga", "Nashville", "Memphis"],
      },
      {
        state: "South Carolina",
        cities: ["Columbia", "Charleston", "Greenville", "Spartanburg"],
      },
      {
        state: "North Carolina",
        cities: ["Charlotte", "Raleigh", "Greensboro", "Wilmington"],
      },
      {
        state: "Florida",
        cities: ["Jacksonville", "Tampa", "Pensacola", "Panama City"],
      },
      {
        state: "Mississippi",
        cities: ["Jackson", "Meridian", "Pascagoula", "Gulfport"],
      },
      {
        state: "Kentucky",
        cities: ["Louisville", "Lexington", "Owensboro", "Paducah"],
      },
    ],
    faqs: [
      {
        question: "What is a vacuum truck used for?",
        answer:
          "An industrial vacuum truck is a tank-mounted recovery vehicle used to remove and transport liquids, sludge, or dry bulk material from a facility. Common applications include tank and pit pumpouts, spill response, wastewater collection, dry-bulk silo and dust-collector cleaning, sludge dewatering, and emergency containment. The truck is matched to the material — liquid trucks for free-flowing fluids, air movers for dry bulk, vacuum boxes for thick sludge.",
      },
      {
        question: "What's the difference between a wet vac and a dry vac truck?",
        answer:
          "Wet vacuum trucks (liquid tankers) are built around positive-displacement blowers and integrated liquid tanks — they recover water, oil, sludge, and other free-flowing material. Dry vacuum trucks (air movers) use much higher airflow to recover dry bulk: catalyst, fly ash, sand, lime, refractory, sawdust, baghouse dust. The two configurations aren't interchangeable; a liquid truck pressed into dry-bulk service will plug, and a dry truck handling liquids will damage the blower.",
      },
      {
        question: "What can vacuum trucks suck up?",
        answer:
          "Free-flowing liquids (water, oils, emulsions, parts-washer fluids), pumpable sludge, slurries, mud, drilling fluid, dewatered solids, dry bulk powders and granular materials, dust, light debris, and contaminated soils. The right truck configuration depends on the consistency and the load weight. Vacuum trucks are not used for hazardous waste at Cowart — our plant is permitted for non-hazardous streams only, and we profile every load before pickup.",
      },
      {
        question: "How fast can you respond to a spill or emergency?",
        answer:
          "24-hour emergency dispatch from Carrollton, GA. Trucks are staged for response and the treatment plant is on standby to receive. Same-day response is typical across Georgia, Alabama, and the eastern half of our service area; the full eight-state footprint is covered with appropriately scaled response times. Call dispatch and tell them what you're holding — we'll route the right truck before we work out the paperwork.",
      },
      {
        question: "Do you do scheduled vacuum truck pickups?",
        answer:
          "Yes. Most of our vacuum truck customers run on weekly, biweekly, or monthly standing schedules. The same driver, the same dispatcher, the same gate procedure each visit. That consistency reduces friction, and the standing schedule means trucks don't compete for slots with on-demand work.",
      },
      {
        question: "Do you handle hazardous materials with your vacuum trucks?",
        answer:
          "No. Cowart's vacuum truck operation and treatment plant are set up for non-hazardous industrial waste. We don't accept RCRA hazardous streams or PCB-contaminated material at our plant. Drivers are DOT Hazmat trained because some materials look hazardous in transit and need to be transported under hazmat rules even when the final classification is non-hazardous — but our service line stops short of full hazardous waste response. If your material classifies as hazardous, we can refer you to a permitted hazmat responder.",
      },
      {
        question: "What size vacuum trucks do you operate?",
        answer:
          "Our standard liquid vacuum tankers are 3,000 and 5,000 gallon configurations on Kenworth chassis. Air mover units are sized for high-airflow dry-bulk applications. Sealed vacuum boxes are roll-off-style containers sized to standard transport specifications. If your job has a specific volume or vehicle-access constraint, tell dispatch — we'll match the truck to the site, not the other way around.",
      },
      {
        question: "What states do you serve with vacuum trucks?",
        answer:
          "Cowart's vacuum truck fleet operates across the Southeast — Georgia, Alabama, Tennessee, South Carolina, North Carolina, Florida, Mississippi, and Kentucky. Dispatch is based in Carrollton, GA, west of Atlanta, and the treatment plant is co-located so recovered material doesn't travel through third-party hands on its way to final disposal.",
      },
    ],
  },
  {
    slug: "liquid-vacuum-service",
    category: "vacuum-containment",
    code: "S—08",
    title: "Liquid Vacuum Truck Service",
    shortTitle: "Liquid Vacuum",
    description:
      "Liquid vacuum truck service across the Southeast — wastewater, sludge, slurries, sumps, and pits pumped, transported, and disposed in-house.",
    intro:
      "Liquid vacuum tankers built for industrial work — wastewater, sludge, slurries, process water, sumps, and pits. Pumped, transported, and disposed in a single dispatch under Cowart's own DOT number.",
    content: [
      "Cowart Industrial's liquid vacuum service uses dedicated vacuum tankers built for industrial liquid removal. The fleet runs 3,000 and 5,000 gallon configurations on Kenworth chassis — enough capacity to clear most industrial sumps or holding tanks in a single dispatch. Trucks are equipped with positive-displacement blowers, integrated steel tanks, and standard fittings that mate to vacuum hoses and on-site pumping connections.",
      "The trucks handle wastewater, sludge, slurries, process water, oily water and emulsions, parts-washer fluids, sump and pit contents, food-process wastewater, and most non-hazardous industrial liquid waste streams. The work runs on standing scheduled pickups for facilities with recurring volume and 24-hour emergency response for tank overflows, line breaks, and containment events. Crews are HAZWOPER-40 and OSHA-30 certified, and confined-space credentials are standard — pit and sump cleanouts often require entry.",
      "Liquid vacuum service runs end-to-end at Cowart: pump, transport, and dispose at our own non-hazardous wastewater treatment plant in Carrollton, Georgia. No broker handoffs. The driver who pumps the load is operating under the same DOT number as the company that owns the treatment plant — chain of custody stays intact from your site to the disposal facility, with one Certificate of Insurance on your audit file and one phone number to call if anything needs attention.",
    ],
    capabilities: [
      "3,000 and 5,000 gallon vacuum tankers",
      "Wastewater, sludge, and slurry pumping",
      "Sump, pit, and trench cleanout",
      "Oily water and emulsion recovery",
      "Process water and parts-washer fluid disposal",
      "Confined-space entry",
      "24-hour emergency liquid response",
      "End-to-end treatment and disposal",
    ],
    keywords: "Tanker · Sumps · 24/7",
    metaKeywords: [
      "liquid vacuum service",
      "liquid vacuum truck",
      "industrial liquid vacuum",
      "sludge vacuum service",
      "vacuum tanker service",
      "wastewater vacuum truck",
      "vacuum truck Georgia",
      "liquid vacuum near me",
    ],
    icon: Droplet,
    photo: "/photos/service-liquid-vacuum.jpg",
    photoAlt: "Cowart Kenworth TT-044 liquid vacuum tanker",
    related: ["oil-water-separator-service", "vacuum-trucks", "frac-tank-rental"],
    extendedContent: [
      {
        heading: "What liquid vacuum trucks actually do",
        paragraphs: [
          "An industrial liquid vacuum truck is a tank-on-a-chassis with a positive-displacement blower that pulls a partial vacuum on the tank interior. Drop a hose into a sump, holding tank, or pit and the blower lifts the liquid into the tank — no on-site pump required, no priming, no fuss with suction lift limits the way a centrifugal pump would have. The truck takes the load with it and delivers to a treatment or disposal point.",
          "The 3,000 and 5,000 gallon configurations Cowart runs are sized for industrial work: enough capacity to clear a normal sump in one drop, small enough to navigate the access constraints of operating plants. A 5,000-gallon truck handles a typical industrial sump or holding tank pumpout in one cycle; multiple loads run back-to-back when the volume requires.",
        ],
      },
      {
        heading: "What we pump — and what we don't",
        paragraphs: [
          "We pump non-hazardous industrial liquids: wastewater (process, rinse, cooling), oily water and emulsions, parts-washer fluids, sludge that pumps as a liquid, slurries with manageable solids content, sump and pit contents, food-process wastewater (including high-BOD and FOG streams), latex and paint-line wash, contaminated stormwater, and water-based cleaning residuals. Liquid profile is verified before pickup — out-of-profile material is rejected at the source, not delivered to the plant and refused there.",
          "We don't pump RCRA hazardous waste, characteristic-hazardous streams above thresholds, PCB-containing material, or anything our treatment plant isn't permitted to accept. If your material classifies as hazardous, we can refer you to a permitted hazmat responder under a documented handoff — but the liquid vacuum service itself is non-hazardous only.",
        ],
      },
    ],
    industries: [
      "Manufacturing (general and heavy)",
      "Food and beverage processing",
      "Automotive and assembly plants",
      "Pulp and paper mills",
      "Chemical manufacturing",
      "Pharmaceutical manufacturing",
      "Power generation",
      "Refineries and petrochemical",
      "Municipal and industrial wastewater",
      "Metal finishing and parts cleaning",
      "Textile and carpet mills",
      "Logistics and distribution",
    ],
    serviceAreas: [
      { state: "Georgia", cities: ["Atlanta", "Augusta", "Columbus", "Macon", "Savannah", "Carrollton", "LaGrange", "Newnan", "Rome"] },
      { state: "Alabama", cities: ["Birmingham", "Mobile", "Montgomery", "Huntsville", "Tuscaloosa", "Anniston"] },
      { state: "Tennessee", cities: ["Knoxville", "Chattanooga", "Nashville", "Memphis"] },
      { state: "South Carolina", cities: ["Columbia", "Charleston", "Greenville", "Spartanburg"] },
      { state: "North Carolina", cities: ["Charlotte", "Raleigh", "Greensboro", "Wilmington"] },
      { state: "Florida", cities: ["Jacksonville", "Tampa", "Pensacola", "Panama City"] },
      { state: "Mississippi", cities: ["Jackson", "Meridian", "Pascagoula", "Gulfport"] },
      { state: "Kentucky", cities: ["Louisville", "Lexington", "Owensboro", "Paducah"] },
    ],
    faqs: [
      {
        question: "What is a liquid vacuum truck used for?",
        answer:
          "An industrial liquid vacuum truck pumps non-hazardous liquids out of tanks, sumps, pits, trenches, and containment basins, transports them under DOT regulation, and delivers them to a treatment or disposal facility. Common loads include process wastewater, oily water, sludge, parts-washer fluids, food-process waste, contaminated stormwater, and water-based cleaning residuals from industrial cleaning jobs.",
      },
      {
        question: "How big are your vacuum tankers?",
        answer:
          "Cowart's standard liquid vacuum tankers are 3,000 and 5,000 gallons on Kenworth chassis. A 5,000-gallon truck handles a typical industrial sump or holding tank pumpout in a single load; larger jobs run back-to-back loads or use vacuum boxes as on-site staging.",
      },
      {
        question: "Can you do emergency liquid vacuum response?",
        answer:
          "Yes. 24-hour dispatch from Carrollton, GA, with trucks staged for spill events, tank overflows, line breaks, and containment failures. Same-day response is typical across Georgia, Alabama, and the eastern half of our 8-state Southeast service area.",
      },
      {
        question: "What happens to the liquid after pickup?",
        answer:
          "Recovered liquid travels under Cowart's own DOT number directly to our non-hazardous wastewater treatment plant in Carrollton, Georgia. We don't subcontract the transport or hand the load to a third-party disposal vendor — treatment and disposal stay under one company, one set of manifests, one Certificate of Insurance.",
      },
      {
        question: "Do you handle hazardous liquids?",
        answer:
          "No. The liquid vacuum service and our treatment plant are non-hazardous only. Drivers are DOT Hazmat trained because some non-hazardous materials require hazmat transport precautions, but RCRA hazardous waste isn't accepted. We can refer you to a permitted hazmat responder if your material classifies as hazardous.",
      },
      {
        question: "What states do you cover for liquid vacuum service?",
        answer:
          "Georgia, Alabama, Tennessee, South Carolina, North Carolina, Florida, Mississippi, and Kentucky. Dispatch is based in Carrollton, GA, with 24-hour coverage for both scheduled and emergency liquid vacuum work across the full 8-state footprint.",
      },
    ],
  },
  {
    slug: "air-mover-vacuum",
    category: "vacuum-containment",
    code: "S—09",
    title: "Industrial Air Mover Vacuum",
    shortTitle: "Air Mover",
    description:
      "High-volume air mover vacuum service across the Southeast — pneumatic conveyance for sand, dust, catalyst, fly ash, powders, and dry bulk material.",
    intro:
      "Air movers move solids — sand, dust, dewatered cake, fly ash, catalyst, powders, and dry bulk material — pneumatically, fast, without water or chemicals.",
    content: [
      "Cowart Industrial's high-volume air mover vacuum service uses pneumatic conveyance to remove dry solids and bulk material from industrial facilities. Air movers (sometimes called industrial dry-vac trucks or pneumatic vacuum trucks) are the right tool for sand, dust, dewatered cake, fly ash, catalyst, powders, grain, refractory, and any solid waste stream that handles dry. Unlike water-based vacuum trucks, air movers don't introduce moisture into the load — important for material that has to stay dry for downstream handling, off-spec product that may be reused, or pyrophoric and water-reactive deposits where adding water creates a hazard.",
      "Air mover service runs at high CFM, which means cleanouts that would take days with manual labor finish in hours. Typical jobs include silo and bin cleanouts, baghouse and dust collector emptying, catalyst removal from reactors, spilled-product recovery, fly-ash recovery from boilers and ESPs, refractory removal, and confined-space material removal for vessel entry prep. The work pairs naturally with sealed vacuum boxes and roll-off containers for haul-off — the air mover does the recovery, the box catches the material, and a tractor moves it to disposal under one DOT number.",
      "Air mover operations require trained operators. The pressure differentials, pneumatic conveyance velocities, and dust loadings carry their own safety profile, especially in confined spaces and around combustible-dust environments. Cowart's crews are HAZWOPER-40 and OSHA-30 certified, hold confined-space credentials, and are trained on combustible-dust protocols (grounding, bonding, deflagration prevention) where the material warrants it. The crew that arrives on a fly-ash cleanout isn't a generic vacuum-truck crew — it's a crew trained for that material.",
    ],
    capabilities: [
      "High-CFM pneumatic conveyance",
      "Dry bulk material removal (sand, dust, catalyst, powders)",
      "Silo, bin, and hopper cleanouts",
      "Baghouse and dust collector emptying",
      "Fly ash and ESP hopper recovery",
      "Catalyst removal and changeout",
      "Refractory removal",
      "Confined-space material recovery",
      "Combustible-dust protocols",
    ],
    keywords: "Solids · Pneumatic · High CFM",
    metaKeywords: [
      "air mover vacuum",
      "high volume air mover",
      "industrial dry vac",
      "pneumatic vacuum truck",
      "silo cleanout service",
      "baghouse cleanout",
      "fly ash recovery",
      "catalyst removal service",
      "dry bulk vacuum service",
    ],
    icon: Wind,
    photo: "/photos/service-air-mover.jpg",
    photoAlt: "Cowart Guzzler air-mover unit AM-044 staged for dispatch",
    extendedContent: [
      {
        heading: "Air mover vs. liquid vacuum — when to use which",
        paragraphs: [
          "Air movers and liquid vacuum trucks look superficially similar but are engineered for different material. A liquid vacuum truck runs a positive-displacement blower against a sealed tank to pull free-flowing liquids up a hose. An air mover runs a much larger blower at much higher airflow (thousands of CFM) to convey dry bulk material through an airstream into a cyclone separator and discharge it under control. Pressing a liquid truck into dry-bulk service plugs the hose and damages the blower; pressing a dry truck into liquid service damages the blower from a different direction.",
          "Air movers are the right tool when the material is dry and free-flowing or can be agitated free, when adding water would create a problem (reactive deposits, off-spec product reuse, downstream processing constraints), and when production rate matters more than absolute fine-particle capture. They are not the right tool for sludge, slurries, or anything that needs to be sealed against moisture migration — vacuum boxes or liquid tankers are the right answer there.",
        ],
      },
      {
        heading: "Common applications",
        paragraphs: [
          "Silo and bin cleanouts are the textbook air mover job — empty a 50-foot silo without sending people inside, which is the safest possible answer for a confined-space inspection or product changeover. Baghouse and dust collector emptying is similar: the air mover pulls the accumulated dust into the truck through a hose attached to the hopper drop, no manual scooping, no exposure to whatever the baghouse was capturing.",
          "Fly-ash recovery from coal and biomass boilers, ESP hopper cleanout, and bottom-ash recovery are heavy-duty air mover applications. Catalyst removal from reactors during turnarounds — both spent catalyst recovery and fresh catalyst loading — is another standard scope. Refractory removal from boilers and furnaces, especially the broken and friable material that demolition crews leave behind, is recovered by air mover before the next refractory crew comes in.",
          "Spill response for dry material — bulk powder spills, off-loaded product accidents, dust accumulation in equipment rooms — runs on air movers as well. The pneumatic recovery preserves the material when it's reusable and contains it when it's not.",
        ],
      },
    ],
    industries: [
      "Power generation (coal, biomass, gas)",
      "Cement and aggregates",
      "Pulp and paper mills",
      "Steel and aluminum mills",
      "Chemical manufacturing",
      "Petrochemical and refining",
      "Food and grain processing",
      "Pharmaceutical manufacturing",
      "Mining and minerals",
      "Foundries and metal casting",
      "Glass and ceramics",
      "General manufacturing",
    ],
    serviceAreas: [
      { state: "Georgia", cities: ["Atlanta", "Augusta", "Columbus", "Macon", "Savannah", "Carrollton", "LaGrange", "Newnan", "Rome"] },
      { state: "Alabama", cities: ["Birmingham", "Mobile", "Montgomery", "Huntsville", "Tuscaloosa", "Anniston"] },
      { state: "Tennessee", cities: ["Knoxville", "Chattanooga", "Nashville", "Memphis"] },
      { state: "South Carolina", cities: ["Columbia", "Charleston", "Greenville", "Spartanburg"] },
      { state: "North Carolina", cities: ["Charlotte", "Raleigh", "Greensboro", "Wilmington"] },
      { state: "Florida", cities: ["Jacksonville", "Tampa", "Pensacola", "Panama City"] },
      { state: "Mississippi", cities: ["Jackson", "Meridian", "Pascagoula", "Gulfport"] },
      { state: "Kentucky", cities: ["Louisville", "Lexington", "Owensboro", "Paducah"] },
    ],
    faqs: [
      {
        question: "What is an air mover vacuum truck?",
        answer:
          "An air mover (or industrial dry-vac truck) is a high-airflow pneumatic vacuum truck designed to recover dry bulk material — sand, dust, catalyst, fly ash, powders, refractory, and similar solids. It uses a large blower and a cyclone separator to convey material through an airstream into a sealed compartment, then discharges it under control to a vacuum box or other receiver.",
      },
      {
        question: "What can air mover trucks pick up?",
        answer:
          "Sand, dust, dewatered cake, fly ash, catalyst pellets, refractory debris, dry powders (food, chemical, mineral), grain, plastic pellets, cement, lime, sawdust, and most dry bulk industrial material. The material has to be dry — slurries, sludge, and wet material aren't recovered cleanly by air movers and should go to a liquid vacuum truck or vacuum box instead.",
      },
      {
        question: "Can air movers work in combustible-dust environments?",
        answer:
          "Yes, with the right protocols. Combustible-dust work requires grounding and bonding of all conductive equipment, dust-tight connections, deflagration prevention measures on the truck, and operator training specific to the material's hazard profile. Our crews are trained for combustible-dust protocols, and we can produce the documentation your facility safety program requires before the work starts.",
      },
      {
        question: "What about silo cleanouts — do you do those?",
        answer:
          "Yes — silo and bin cleanout is one of the most common air mover applications. We recover the residual material through the discharge hopper or a top access without sending people into the silo. That keeps the cleanout out of confined-space classification (or, if entry is still required, dramatically reduces the time inside) and minimizes exposure to whatever the silo was holding.",
      },
      {
        question: "Can you remove catalyst from reactors?",
        answer:
          "Yes. Catalyst removal and changeout is a standard turnaround scope. We recover spent catalyst by air mover, transport it under appropriate manifests, and can load fresh catalyst into the reactor for the same outage. Inert-atmosphere catalyst work (where the catalyst is pyrophoric or requires nitrogen blanket) requires additional preparation; we work that scope with the reactor's process engineer to set the procedure.",
      },
      {
        question: "What's the difference between an air mover and a regular vacuum truck?",
        answer:
          "A regular (liquid) vacuum truck uses a positive-displacement blower to lift free-flowing liquids into a sealed tank. An air mover uses a much larger blower at much higher airflow to convey dry bulk material through an airstream into a cyclone separator. The blower sizes, hose diameters, separator designs, and operator training are different — the two trucks are not interchangeable, and most industrial cleanout jobs need one or the other (or both).",
      },
      {
        question: "What states do you cover with air mover service?",
        answer:
          "Georgia, Alabama, Tennessee, South Carolina, North Carolina, Florida, Mississippi, and Kentucky — the full 8-state Southeastern footprint, dispatched from Carrollton, GA. Air mover units are scheduled like the rest of our vacuum fleet, with 24-hour emergency dispatch for spill response and unplanned cleanouts.",
      },
    ],
  },
  {
    slug: "vacuum-box-service",
    category: "vacuum-containment",
    code: "S—10",
    title: "Vacuum and Sludge Box Rental",
    shortTitle: "Vacuum Box",
    description:
      "Sealed 20-yard vacuum boxes for industrial sludge containment and on-site staging across the Southeast — delivered, loaded, hauled, disposed.",
    intro:
      "Sealed vacuum boxes for liquid containment, sludge staging, and project work where a roll-off won't hold the load and a tanker is the wrong shape.",
    content: [
      "Cowart Industrial provides vacuum box and sludge box service for industrial sites that need sealed containment for liquid or sludge — material a standard open-top roll-off can't hold. Our vacuum boxes are 20-yard sealed steel containers, rated for vacuum loading and built to keep liquids in place during transport. They're the bridge between a tanker (free-flowing liquid only) and a roll-off (dry solid only): the right tool for sludge, slurries, dewatered cake, tank bottoms, semi-solid waste streams, and any project where the material won't pump as a liquid but won't sit dry either.",
      "The service is end-to-end. Boxes deliver and stage on-site at the location you specify, accept vacuum-truck loading from our tankers (or yours), and pull when full. One dispatcher coordinates the loading truck, the box, and the haul-off — not three. Once full, the box transports under Cowart's own DOT number to our non-hazardous wastewater treatment plant in Carrollton, Georgia or to a permitted disposal facility appropriate to the material profile. Boxes are washed and inspected between rentals.",
      "Common applications include sludge pit cleanouts, dewatering operations, food-process waste, oily-water bottoms, tank cleanings, refractory removal staging, and any job where the waste stream is too wet for a roll-off but too solid or too volume-heavy for a tanker. Boxes are available for scheduled service or emergency response across our 8-state Southeastern footprint.",
    ],
    capabilities: [
      "20-yard sealed steel vacuum boxes",
      "Vacuum-truck loading from tankers and air movers",
      "Sludge, slurry, and semi-solid containment",
      "Sealed transport under DOT regulation",
      "On-site staging for multi-day projects",
      "End-to-end transport and disposal",
      "Scheduled and emergency dispatch",
      "Wash and inspection between rentals",
    ],
    keywords: "Sealed · 20-Yard · Vacuum-Rated",
    metaKeywords: [
      "vacuum box service",
      "vacuum box rental",
      "sludge box rental",
      "sealed vacuum box",
      "vac box rental",
      "industrial sludge box",
      "sludge containment box",
      "vacuum box Georgia",
    ],
    icon: Box,
    photo: "/photos/service-vacuum-box.jpg",
    photoAlt: "Cowart sealed vacuum box CVB-118 staged for vacuum-truck loading",
    extendedContent: [
      {
        heading: "What a vacuum box is — and what it isn't",
        paragraphs: [
          "A vacuum box (sometimes called a sludge box, vac box, or roll-off vacuum container) is a sealed steel container engineered to be loaded under vacuum and transported under DOT regulation as a liquid-bearing container. The seal matters: standard open-top roll-offs vent material during transport and aren't rated for liquids or sludge that hasn't been solidified. A vacuum box keeps the load in place from the loading point to the disposal facility.",
          "It's the right tool when the material is too wet for a roll-off but you don't want to truck it as a liquid load. Sludge that pumps but doesn't flow, dewatered filter cake, tank bottoms, oily-water emulsions that have separated, slurries thick enough to challenge a tanker — all of those move efficiently in a vacuum box. Material gets loaded by vacuum truck (the truck pulls the load from the source, discharges to the box, repeats), and the box ships out when full.",
        ],
      },
      {
        heading: "How the service runs",
        paragraphs: [
          "Standard delivery is a 20-yard sealed steel box dropped at your loading point on flat, prepared ground. Box dimensions and weight are sized to standard roll-off transport. Once on-site, the box can stage for the duration of the project — a multi-day pit cleanout, a turnaround that produces sludge over a week, a tank cleaning that fills a box per shift. Loading is done by Cowart vacuum trucks (or yours, if your facility runs its own vacuum fleet) drawing material into the box through standard fittings.",
          "When the box is full or the project ends, we pull it on a roll-off chassis and haul under our DOT number to our treatment plant in Carrollton, Georgia, or to a permitted disposal facility matched to the material profile. Disposition documentation is generated by our system and tied to the original manifest — your environmental coordinator sees the full chain from generation to final disposal under one vendor.",
        ],
      },
    ],
    industries: [
      "Refineries and petrochemical",
      "Power generation",
      "Pulp and paper mills",
      "Steel and aluminum mills",
      "Chemical manufacturing",
      "Food and beverage processing",
      "Pharmaceutical manufacturing",
      "Automotive and assembly plants",
      "Mining and aggregates",
      "Municipal water and wastewater",
      "Environmental remediation",
      "General manufacturing",
    ],
    serviceAreas: [
      { state: "Georgia", cities: ["Atlanta", "Augusta", "Columbus", "Macon", "Savannah", "Carrollton", "LaGrange", "Newnan", "Rome"] },
      { state: "Alabama", cities: ["Birmingham", "Mobile", "Montgomery", "Huntsville", "Tuscaloosa", "Anniston"] },
      { state: "Tennessee", cities: ["Knoxville", "Chattanooga", "Nashville", "Memphis"] },
      { state: "South Carolina", cities: ["Columbia", "Charleston", "Greenville", "Spartanburg"] },
      { state: "North Carolina", cities: ["Charlotte", "Raleigh", "Greensboro", "Wilmington"] },
      { state: "Florida", cities: ["Jacksonville", "Tampa", "Pensacola", "Panama City"] },
      { state: "Mississippi", cities: ["Jackson", "Meridian", "Pascagoula", "Gulfport"] },
      { state: "Kentucky", cities: ["Louisville", "Lexington", "Owensboro", "Paducah"] },
    ],
    faqs: [
      {
        question: "What is a vacuum box?",
        answer:
          "A vacuum box (also called a sludge box or vac box) is a sealed steel roll-off-style container rated for vacuum loading and DOT-regulated liquid transport. It bridges the gap between a tanker (free-flowing liquid only) and a standard open-top roll-off (dry solid only) — the right container for sludge, slurries, dewatered cake, and semi-solid material.",
      },
      {
        question: "What size are your vacuum boxes?",
        answer:
          "Standard 20-yard sealed steel construction, sized to standard roll-off transport. Each box accepts vacuum-truck loading through standard fittings and is rated to keep liquids in place during transport under DOT regulation.",
      },
      {
        question: "When should I use a vacuum box instead of a roll-off?",
        answer:
          "Whenever the material is too wet for a standard roll-off — sludge, slurry, dewatered cake, tank bottoms, oily-water emulsions, or anything that would weep or shift in an open-top container. Open-top roll-offs aren't sealed and aren't DOT-rated for liquid transport. If the load has any free liquid, you need a vacuum box.",
      },
      {
        question: "When should I use a vacuum box instead of a tanker?",
        answer:
          "When the material won't pump as a liquid — sludge that's too thick, slurry with high solids content, semi-solid material from a pit or tank bottom. A tanker's blower and pump aren't designed for that consistency; a vacuum box stages the material and ships it as a contained load.",
      },
      {
        question: "Do you load the box, or do I?",
        answer:
          "Either works. Cowart can dispatch a vacuum truck to load the box (most common for one-off projects), or your facility's own vacuum trucks can load the box if you run a fleet. The box has standard fittings that mate to most industrial vacuum equipment.",
      },
      {
        question: "How long can the box stay on-site?",
        answer:
          "As long as the project runs. Vacuum boxes are designed for multi-day or multi-week staging on-site. Common scenarios include turnaround scope that produces sludge over a 5–14 day window, tank cleanings that fill a box per shift, and pit cleanouts where loading happens incrementally as the work progresses.",
      },
      {
        question: "Where does the material go when the box ships?",
        answer:
          "Material classified as non-hazardous comes back to Cowart's treatment plant in Carrollton, Georgia under our own DOT number. Out-of-profile or non-Cowart-accepted material goes to a permitted disposal facility matched to its profile. Either way, transport and disposal happen under our manifests and our compliance documentation.",
      },
      {
        question: "What states do you deliver vacuum boxes to?",
        answer:
          "Georgia, Alabama, Tennessee, South Carolina, North Carolina, Florida, Mississippi, and Kentucky. Delivery, on-site staging, loading coordination, and pickup are all dispatched from Carrollton, GA.",
      },
    ],
  },
  {
    slug: "hydro-excavating",
    category: "vacuum-containment",
    code: "S—11",
    title: "Hydro Excavation & Hydrovac",
    shortTitle: "Hydro Excavating",
    description:
      "Hydrovac and hydro excavation services across the Southeast — non-destructive digging, utility daylighting, potholing, slot trenching, 24/7 response.",
    intro:
      "Non-destructive digging with high-pressure water and simultaneous vacuum recovery — safer than mechanical digging around buried utilities, faster than hand-digging, cleaner than air excavation.",
    content: [
      "Cowart Industrial's hydro excavation service uses high-pressure water and simultaneous vacuum recovery to excavate soil without ever putting a digging tool against buried infrastructure. The water jet cuts and slurries the soil; the vacuum hose lifts the slurry into an onboard debris tank in real time. The result is a clean, precisely shaped hole with zero mechanical contact between the dig and any pipe, cable, or conduit in the ground. It is, by every objective measure, the safest excavation method commercially available — and on jobs where a utility strike means a million-dollar event, that's the only measure that matters.",
      "Common hydrovac applications include utility locating and daylighting (exposing existing utilities before adjacent work), potholing for engineering survey, slot trenching for fiber and gas, post-hole excavation, debris removal from utility vaults and manholes, frozen-ground excavation, and emergency exposure during utility strikes. We work with general contractors, utility companies, engineering firms, telecoms, gas distribution operators, and municipalities across an eight-state Southeastern footprint. Most of our hydro excavating work is scheduled against a construction calendar — but emergency response is a real part of the operation and is dispatched 24/7 from Carrollton.",
      "Hydro excavation pairs naturally with the rest of Cowart's vacuum truck fleet and treatment operation. The same trucks that excavate can also vacuum sludge, transport liquid waste, and dispose of the spoil at our own non-hazardous treatment plant or a permitted disposal facility. End-to-end under one DOT number, one dispatch, one phone call — without subcontracting the spoil disposal step to a hauler you didn't pick.",
    ],
    capabilities: [
      "Non-destructive utility daylighting",
      "Potholing and engineering survey",
      "Slot trenching for fiber, gas, and utilities",
      "Post-hole and small-bore excavation",
      "Utility-strike emergency exposure",
      "Frozen-ground and winter excavation",
      "Vault, manhole, and valve-box cleanout",
      "Spoil transport and in-house disposal",
    ],
    keywords: "Hydrovac · Daylighting · Potholing",
    metaKeywords: [
      "hydro excavation",
      "hydro excavating",
      "hydrovac services",
      "hydrovac contractor",
      "non-destructive digging",
      "utility daylighting",
      "potholing service",
      "slot trenching",
      "hydro excavation Georgia",
      "hydrovac Atlanta",
    ],
    icon: Shovel,
    photo: "/photos/hero-truck.jpg",
    photoAlt:
      "Cowart Guzzacator hydro-excavation rig — Kenworth tractor with truck-mounted vacuum excavator",
    extendedContent: [
      {
        heading: "How hydro excavation actually works",
        paragraphs: [
          "A hydrovac rig combines two pieces of equipment on a single chassis: a high-pressure water system and a high-flow vacuum recovery system. Water is heated and pressurized through a wand to roughly 2,000–3,000 PSI — high enough to break and slurry typical soils, low enough that a glancing hit on a buried pipe or cable does not damage it. As the wand cuts, an 8-inch vacuum hose alongside the operator pulls the resulting slurry into the truck's debris tank in real time. The hole develops as fast as the operator can sweep, and the spoil never piles up around the dig.",
          "The safety case rests on one fact: no mechanical contact. Backhoes and trenchers cut through whatever they meet. Hydro excavation cuts soil and is functionally inert against the targets that matter — fiber-optic conduit, gas mains, fiber bundles, copper telecom, water mains, electrical primaries. That changes the math on damage prevention. A backhoe operator who clips a 4-inch gas main creates an incident; a hydrovac wand that brushes the same main exposes it for inspection.",
          "It's also fast for what it is. Compared with hand-digging — which has historically been the only \"safe\" method around live utilities — hydrovac runs 3–10× the production rate. Compared with mechanical excavation, it's slower but eliminates the strike risk and the rework that follows a hit. For the right job (small dimension, buried utilities present, no tolerance for damage), it's simply the right tool.",
        ],
      },
      {
        heading: "When to call for hydro excavation vs. mechanical digging",
        paragraphs: [
          "Hydrovac is the right method when: existing utilities are in or adjacent to the dig footprint, the dig dimension is small enough that production rate doesn't dominate cost, the spoil has to be removed cleanly (no piles on adjacent surfaces), the substrate is frozen or otherwise tough on mechanical equipment, or a strike would cause damage out of proportion to the job's cost. Common scenarios: locating and daylighting before adjacent backhoe work, potholing for engineering survey, exposing existing utilities for tie-in, slot trenching in a roadway, vault and manhole cleanout, and any dig where the locate paint is dense.",
          "Mechanical excavation is the right method when: the dig is large-volume, no utilities are present (or have been positively cleared by daylighting), production rate is the dominant cost, and the substrate is suited to a bucket. The two methods are complementary, not competing — most projects of any scale use hydro to expose what's there and a backhoe to move what's not.",
          "Cowart's role on most projects is the hydro phase. We work with the general contractor or the utility's contractor and own the daylighting, potholing, and emergency-exposure scope while a separate crew handles the bulk dig.",
        ],
      },
      {
        heading: "Spoil disposal — the part most contractors hand off",
        paragraphs: [
          "The slurry that goes into the debris tank has to come back out somewhere. For most hydrovac contractors, that somewhere is a third-party disposal site, which means a transport vendor, a tipping fee, and a separate paper trail per load. The cost shows up on the customer's invoice as a pass-through and tends to be vague.",
          "Cowart hauls hydrovac spoil to its own treatment plant in Carrollton, Georgia under its own DOT number. For non-hazardous spoil (the vast majority of hydrovac jobs), the disposal step is integrated, characterized, and priced predictably. Your project doesn't get held up while the truck waits for a slot at a third-party transfer station; it doesn't get a surprise charge for a tipping fee adjustment; and the disposition documentation comes out of the same system that generated the vacuum job.",
        ],
      },
    ],
    industries: [
      "Utility contractors (gas, water, electric, telecom)",
      "General contractors and site work",
      "Engineering and survey firms",
      "Fiber-optic and broadband deployment",
      "Municipal public works",
      "Industrial plants and refineries",
      "Power generation",
      "Pipeline operators",
      "Roadway and DOT projects",
      "Commercial development",
      "Environmental remediation",
      "Emergency response and utility strikes",
    ],
    serviceAreas: [
      {
        state: "Georgia",
        cities: ["Atlanta", "Augusta", "Columbus", "Macon", "Savannah", "Carrollton", "LaGrange", "Newnan", "Rome"],
      },
      {
        state: "Alabama",
        cities: ["Birmingham", "Mobile", "Montgomery", "Huntsville", "Tuscaloosa", "Anniston"],
      },
      {
        state: "Tennessee",
        cities: ["Knoxville", "Chattanooga", "Nashville", "Memphis"],
      },
      {
        state: "South Carolina",
        cities: ["Columbia", "Charleston", "Greenville", "Spartanburg"],
      },
      {
        state: "North Carolina",
        cities: ["Charlotte", "Raleigh", "Greensboro", "Wilmington"],
      },
      {
        state: "Florida",
        cities: ["Jacksonville", "Tampa", "Pensacola", "Panama City"],
      },
      {
        state: "Mississippi",
        cities: ["Jackson", "Meridian", "Pascagoula", "Gulfport"],
      },
      {
        state: "Kentucky",
        cities: ["Louisville", "Lexington", "Owensboro", "Paducah"],
      },
    ],
    faqs: [
      {
        question: "What is hydro excavation?",
        answer:
          "Hydro excavation (also called hydrovac excavation or non-destructive digging) uses high-pressure water and simultaneous vacuum recovery to excavate soil without mechanical contact with the ground. A water jet at roughly 2,000–3,000 PSI cuts and slurries the soil, and an 8-inch vacuum hose lifts the slurry into an onboard debris tank in real time. The result is a clean, precisely shaped hole with zero risk of striking buried utilities.",
      },
      {
        question: "How is hydro excavation different from regular digging?",
        answer:
          "Mechanical excavation (backhoes, trenchers, augers) cuts through whatever it meets — soil and any utility lines in the path. Hydro excavation only cuts soil; it does not damage gas mains, water lines, fiber conduit, telecom, or electrical primaries even on direct contact. The trade-off is production rate: hydrovac is slower than a backhoe per cubic yard, but eliminates the strike risk that drives most utility-damage incidents.",
      },
      {
        question: "When should hydro excavation be used?",
        answer:
          "Whenever existing utilities are in or near the dig area, when potholing or daylighting is required, for slot trenching in roadways, for emergency exposure during utility strikes, in frozen or otherwise tough ground, and any time spoil has to be removed cleanly without piles around the dig. Most jobs that combine \"buried utilities present\" with \"small dig dimension\" are better done with hydrovac.",
      },
      {
        question: "Can you do utility daylighting and potholing?",
        answer:
          "Yes — that's the most common application of our hydro excavation service. Daylighting exposes the top of existing buried utilities so they can be visually verified before adjacent work begins. Potholing exposes specific points (typically every 25–100 ft along a route) for engineering survey. Both are done quickly, cleanly, and without risk to the utility being exposed.",
      },
      {
        question: "Do you handle utility-strike emergencies?",
        answer:
          "Yes. 24-hour emergency dispatch from Carrollton, GA. If a backhoe has clipped a line and the utility needs to be exposed quickly to assess damage, our hydrovac rig can be on site fast across Georgia, Alabama, and the eastern half of our service area. Crews are trained to work alongside the responding utility company and follow their isolation procedures before the wand is energized.",
      },
      {
        question: "What does hydro excavation cost?",
        answer:
          "Hydrovac work is typically priced by the day or by the hour, plus disposal of the recovered spoil. The day-rate is higher than a backhoe day-rate, but the apples-to-apples comparison has to include the cost of a utility strike — which, for fiber, gas, or telecom, can run into six or seven figures with regulatory penalties. For jobs with buried utilities in play, hydrovac is usually the cheaper method on expected-value terms even when the per-hour rate is higher.",
      },
      {
        question: "What happens to the spoil after the dig?",
        answer:
          "The spoil — soil and water slurry — is transported under our own DOT number to Cowart's treatment plant in Carrollton, Georgia, or to a permitted disposal facility appropriate to the material. We handle disposal in-house for non-hazardous spoil rather than handing the load off to a third-party hauler, which keeps the paper trail and the cost predictable.",
      },
      {
        question: "What states do you serve for hydro excavation?",
        answer:
          "Cowart's hydro excavation service operates across the Southeast — Georgia, Alabama, Tennessee, South Carolina, North Carolina, Florida, Mississippi, and Kentucky. Dispatch is based in Carrollton, GA, with 24-hour emergency response for utility strikes and same-week scheduling for routine daylighting and potholing work.",
      },
    ],
  },
  {
    slug: "frac-tank-rental",
    category: "vacuum-containment",
    code: "S—12",
    title: "21,000-Gallon Frac Tank Rental",
    shortTitle: "Frac Tank",
    description:
      "21,000-gallon frac tank rental across the Southeast for industrial liquid storage, turnaround projects, wastewater staging, and emergency containment.",
    intro:
      "Frac tanks for on-site liquid storage — process water, wastewater, project staging, hydroblasting feed, and containment for facility turnarounds, drill sites, and emergency response.",
    content: [
      "Cowart Industrial provides 21,000-gallon frac tank rental for industrial sites that need temporary on-site liquid storage. The standard tank is steel-walled with internal epoxy lining, manway access, sample ports, and standard fittings that mate to vacuum trucks, on-site pumps, and process hoses. Each tank holds the equivalent of 500 barrels of liquid — enough capacity to stage a meaningful volume of process water, wastewater, or project liquid without the access constraints of permanent tankage.",
      "Frac tank applications include process water storage during plant turnarounds, wastewater staging before treatment or disposal, project water supply for hydroblasting and line-flushing operations, secondary containment for facility maintenance, holding capacity for spill response, dewatering tank for hydrovac and excavation projects, and temporary capacity expansion for facilities running over their normal tankage. Multiple tanks can be manifolded together for larger volumes — talk to dispatch if your project needs 50,000 to 200,000+ gallons of staged liquid.",
      "Tanks are washed and inspected between rentals. Standard rental includes delivery to your site, level set on prepared ground, and pickup at end of rental. Optional services include level monitoring, transfer pumping, end-of-rental cleanout, and integrated vacuum-truck pickup of the tank contents. Pair frac tank rental with our vacuum truck service and treatment plant for a fully managed liquid handling program — one vendor on the rental, the trucks, the treatment, and the disposal.",
    ],
    capabilities: [
      "21,000-gallon (500 bbl) steel frac tanks",
      "Internal epoxy lining for chemical compatibility",
      "Manway access, sample ports, standard fittings",
      "Delivery, level set, and pickup",
      "Multi-tank manifold setups (50K+ gallons)",
      "Project and turnaround staging",
      "Wastewater holding before treatment",
      "Hydroblasting and line-flushing feed water",
      "End-of-rental cleanout and integrated pickup",
    ],
    keywords: "21K Gallon · Portable · Steel",
    metaKeywords: [
      "frac tank rental",
      "frac tank rental near me",
      "21000 gallon frac tank",
      "500 bbl frac tank",
      "portable liquid storage rental",
      "industrial frac tank",
      "frac tank Georgia",
      "frac tank Southeast",
      "wastewater storage tank rental",
      "process water tank rental",
    ],
    icon: Cylinder,
    photo: "/photos/service-frac-tank.jpg",
    photoAlt: "Cowart 21,000-gallon portable frac tank with yellow safety steps and manway access",
    extendedContent: [
      {
        heading: "What a 21,000-gallon frac tank is built for",
        paragraphs: [
          "The 21,000-gallon (500 bbl) frac tank is the industry-standard portable storage unit for industrial liquids. The dimensions, weight, and configuration are standardized across the rental market because the use cases are common: temporary capacity expansion, project staging, turnaround water management, dewatering, and containment. A single tank ships on a flatbed or roll-off chassis, sets on prepared ground without a foundation, and is connected to your operation through standard 4-inch and 6-inch flanged or camlock fittings.",
          "The internal epoxy lining handles most non-hazardous industrial liquids — process water, wastewater, cooling water, dewatering effluent, rinse water, and project water. Chemical compatibility for specific streams is verified before deployment; for aggressive chemistry, specialty-lined tanks or coated alternatives are available on request. The tank's external steel construction is sized for full hydrostatic load — 21,000 gallons of water weighs about 87 tons — so site preparation (level, load-bearing) matters and is confirmed before drop.",
        ],
      },
      {
        heading: "Typical applications across our customer base",
        paragraphs: [
          "Plant turnarounds are the biggest use case. A 5- to 14-day turnaround often produces and consumes more water than the facility's normal tankage can absorb — hydroblasting feed, equipment flushwater, dewatering volume, contaminated stormwater from secondary containment, holding for treatment scheduling. One or two frac tanks staged for the turnaround keep the schedule moving without forcing trucks to wait for tank capacity.",
          "Wastewater holding is the next-largest application. When a facility's wastewater generation exceeds its treatment cadence — a process upset, a seasonal spike, a delayed haul-off — a frac tank gives you buffer capacity until trucks can be scheduled. The tank can be pumped down progressively as Cowart vacuum trucks run loads to the treatment plant.",
          "Project water supply for hydroblasting and line flushing rounds out the heavy use cases. Hydroblasting rigs consume thousands of gallons per shift; line flushing operations sometimes consume more. Staging clean water in a frac tank on-site means the rig isn't waiting on facility water supply or competing with operations for capacity.",
        ],
      },
      {
        heading: "What a fully managed frac tank program looks like",
        paragraphs: [
          "Most frac tank rental companies are equipment-only. They drop the tank and pick it up. Cowart's model is different: the tank is part of a service package that includes the vacuum trucks that load and unload it, the treatment plant that processes the contents, and the disposal documentation that closes the loop. For a facility running a turnaround, that means one vendor handles tank rental, water supply, wastewater pickup, treatment, and disposal — instead of three or four separate contracts.",
          "On the operational side, the integration matters at small scale too. A frac tank that's holding wastewater for treatment doesn't need a separate vendor to come empty it; the same Cowart dispatcher who scheduled the rental schedules the pickup. The same DOT number that brought the tank takes the load. The same Certificate of Insurance covers the whole program. Pricing is predictable because the markup chain is one company instead of three.",
        ],
      },
    ],
    industries: [
      "Refineries and petrochemical",
      "Power generation (coal, gas, biomass)",
      "Pulp and paper mills",
      "Chemical manufacturing",
      "Food and beverage processing",
      "Pharmaceutical manufacturing",
      "Construction and dewatering",
      "Pipeline and utility contractors",
      "Drilling and energy services",
      "Environmental remediation",
      "Municipal projects",
      "General manufacturing",
    ],
    serviceAreas: [
      { state: "Georgia", cities: ["Atlanta", "Augusta", "Columbus", "Macon", "Savannah", "Carrollton", "LaGrange", "Newnan", "Rome"] },
      { state: "Alabama", cities: ["Birmingham", "Mobile", "Montgomery", "Huntsville", "Tuscaloosa", "Anniston"] },
      { state: "Tennessee", cities: ["Knoxville", "Chattanooga", "Nashville", "Memphis"] },
      { state: "South Carolina", cities: ["Columbia", "Charleston", "Greenville", "Spartanburg"] },
      { state: "North Carolina", cities: ["Charlotte", "Raleigh", "Greensboro", "Wilmington"] },
      { state: "Florida", cities: ["Jacksonville", "Tampa", "Pensacola", "Panama City"] },
      { state: "Mississippi", cities: ["Jackson", "Meridian", "Pascagoula", "Gulfport"] },
      { state: "Kentucky", cities: ["Louisville", "Lexington", "Owensboro", "Paducah"] },
    ],
    faqs: [
      {
        question: "How big is a standard frac tank?",
        answer:
          "Our standard frac tank is 21,000 gallons — also called a 500-barrel (500 bbl) tank. The dimensions and weight are standardized across the rental market so the tank ships on a flatbed or roll-off chassis and sets on prepared ground without a foundation. A single tank handles most project-scale liquid storage needs; multiple tanks can be manifolded for larger volumes.",
      },
      {
        question: "What can I store in a frac tank?",
        answer:
          "Process water, wastewater, cooling water, dewatering effluent, rinse water, hydroblasting feed water, contaminated stormwater, drilling fluids, and most non-hazardous industrial liquids. The internal epoxy lining handles standard industrial chemistry; aggressive or specialty chemistry is matched to specialty-lined tank options on request.",
      },
      {
        question: "Can I rent multiple tanks for a large project?",
        answer:
          "Yes. Multiple frac tanks can be manifolded together for projects that need 50,000+ gallons of staged liquid. We've supported turnarounds and projects requiring 4–10 tanks staged together. Talk to dispatch about layout, fitting requirements, and delivery sequence — large multi-tank setups need coordination with the site logistics plan.",
      },
      {
        question: "Do you handle the wastewater pickup at the end of the project?",
        answer:
          "Yes — that's the integrated service model. Cowart's vacuum trucks empty the tank under our own DOT number and transport the contents to our treatment plant in Carrollton, Georgia or a permitted disposal facility. One vendor handles the rental, the pickup, the transport, and the treatment.",
      },
      {
        question: "How long can I rent a frac tank for?",
        answer:
          "Rental terms run from a few days (project staging, emergency response) to multiple months (long-term capacity expansion, dewatering programs). Pricing is by the day, with discounts for longer-term commitments. Most turnaround rentals run 1–3 weeks; standby capacity rentals often run 30+ days.",
      },
      {
        question: "What kind of site preparation do I need?",
        answer:
          "A flat, level, load-bearing surface. A full 21,000-gallon tank weighs roughly 87 tons including the tank weight, so site bearing capacity matters. Prepared gravel or asphalt is preferred; soft soil or unprepared fill is not acceptable for sustained rental. We confirm site conditions during the pre-delivery walkthrough.",
      },
      {
        question: "Are frac tanks cleaned between rentals?",
        answer:
          "Yes. Tanks are washed and inspected between rentals. Lined tanks coming off duty for one customer aren't deployed to the next customer until they've been cleaned and the lining condition verified. For specialty chemistry, additional dedicated-service options are available.",
      },
      {
        question: "What states do you rent frac tanks in?",
        answer:
          "Georgia, Alabama, Tennessee, South Carolina, North Carolina, Florida, Mississippi, and Kentucky. Delivery, level set, pickup, and integrated vacuum-truck service are all dispatched from Carrollton, GA.",
      },
    ],
  },

  // ───────────────────────── INDUSTRIAL CLEANING ──────────────────────────
  {
    slug: "industrial-cleaning",
    category: "industrial-cleaning",
    code: "S—13",
    title: "Industrial Cleaning Services",
    shortTitle: "Industrial Cleaning",
    description:
      "Industrial cleaning across the Southeast — vacuuming, pressure washing, hydroblasting to 40,000 PSI, and chemical cleaning by HAZWOPER-40 crews.",
    intro:
      "Industrial cleaning from routine maintenance through major plant turnarounds — handled by HAZWOPER-40 and OSHA-30 crews with confined-space credentials, backed by Cowart's own treatment plant in Carrollton, GA.",
    content: [
      "Industrial cleaning at Cowart means matching the method to the deposit, not selling whichever rig is on the truck. Vacuum recovery, high-pressure washing, hydroblasting from 10,000 to 40,000 PSI, and chemical cleaning are all in the toolkit — and the cleaning plan names which one (or which combination) gets used before a crew arrives on site. Wrong method costs time and wears equipment; the right method ends the job in one pass.",
      "Our industrial cleaning services cover the full range of non-hazardous buildup found inside operating plants: scale and mineral deposits in heat exchangers and boilers, sludge in pits and sumps, hardened residue in tanks and reactors, hydrocarbon films on equipment, biological fouling in cooling towers, and process buildup on piping and ductwork. Confined-space entry, UST and AST cleaning, lockout/tagout coordination, and isolation work are routine — most industrial cleaning jobs touch at least one of those, and our crews carry the credentials for all of them.",
      "Cowart Industrial Services has been doing this work since 1974. We're a family-operated company based in Carrollton, Georgia, with our own treatment plant on site and our own DOT number on every truck. That matters because it means cleaning, transport, treatment, and disposal all stay under one compliance umbrella — one phone number, one paper trail, one vendor on your audit. Most cleaning contractors stop at the door of the plant and hand the waste off to someone else. We don't.",
    ],
    capabilities: [
      "Vacuum recovery and material removal",
      "High-pressure washing (up to 4,000 PSI)",
      "Hydroblasting (10,000 to 40,000 PSI)",
      "Chemical cleaning (acid, caustic, solvent)",
      "Confined-space entry and cleaning",
      "UST and AST entry, cleaning, and decommissioning",
      "Pit, sump, trench, and sludge removal",
      "Heat exchanger and boiler cleaning",
    ],
    keywords: "Vacuum · Pressure · Hydro · Chemical",
    metaKeywords: [
      "industrial cleaning",
      "industrial cleaning services",
      "industrial cleaning company",
      "industrial cleaning southeast",
      "industrial cleaning Georgia",
      "industrial cleaning Alabama",
      "plant cleaning services",
      "facility cleaning services",
      "industrial cleaning contractors",
      "industrial cleaning company near me",
    ],
    icon: Factory,
    photo: "/photos/service-industrial-cleaning.jpg",
    photoAlt:
      "Cowart crew pressure-washing a sludge pit inside an industrial facility",
    featured: true,
    extendedContent: [
      {
        heading: "How we choose the right cleaning method",
        paragraphs: [
          "Industrial cleaning is a method-selection problem first and a labor problem second. The wrong method either fails to remove the deposit, damages the substrate, or generates a waste stream that costs more to dispose of than the cleaning saved. Before a crew is dispatched, we build a written cleaning plan that names the substrate, the deposit, the access method, the target end-state, and the disposal path for whatever comes out. The plan is the deliverable — the cleaning is the execution.",
          "Vacuum recovery is the right tool when the material is loose or already liquid: tank bottoms, sumps, trenches, spills, and bulk solids that can be drawn into a tank truck. Pressure washing — up to about 4,000 PSI — handles general cleaning, light grease, and architectural-grade industrial surfaces. Hydroblasting takes over above 10,000 PSI when scale, hardened deposits, or failed coatings have to come off, and runs up to 40,000 PSI for surface preparation that meets SSPC SP-WJ standards before recoating. Chemical cleaning is reserved for what mechanical methods can't reach: closed circuits, fouled heat exchangers, biological growth in cooling towers, and process residues that need to be dissolved rather than blasted.",
          "Most real plant jobs use two or more of these in sequence. A heat exchanger going into a turnaround might get a chemical pre-soak to loosen scale, a hydroblast pass to remove what the chemistry knocked loose, and a vacuum recovery on the spent rinse water. We're set up to run the whole sequence under one work order with one crew supervisor — not three separate vendors and three separate manifests.",
        ],
      },
      {
        heading: "Why a single-DOT, in-house treatment model matters",
        paragraphs: [
          "Most industrial cleaning contractors are good at cleaning. They are not, by and large, set up to take the waste with them. The recovered material gets pumped into a third-party tanker, hauled to a third-party treatment facility, and manifested across three companies — each of which has to be auditable, insured, and compliant. When something goes wrong on the disposal side, the trail crosses vendor lines.",
          "Cowart runs the entire chain. Our own DOT number is on every truck that leaves your facility. Recovered water, sludge, and slurries come back to our Carrollton, Georgia treatment plant, are characterized in-house, and disposed under our manifests. For your compliance department, that's one vendor on the audit, one set of insurance certificates to file, one phone call if EPA shows up asking questions. It also keeps disposal cost predictable — third-party haulers and treatment facilities price-shock customers; we don't.",
        ],
      },
      {
        heading: "What our crews carry",
        paragraphs: [
          "Every cleaning crew runs with HAZWOPER-40, OSHA-30, DOT Hazmat, EPA RCRA awareness, and confined-space training current and documented. We send those certs to your safety department before the first truck rolls — not after the first incident. Site-specific training (your LOTO procedures, your PPE matrix, your contractor orientation) is layered on top of the baseline credentials. Crew leads carry CSE supervisor designations where required.",
          "Equipment is matched to the credentials. Hydroblasting rigs go out with the safety perimeter, dump valves, dead-man controls, and operator face shields the standard calls for. Vacuum trucks are inspected and pressure-tested on schedule. Confined-space jobs are run with continuous atmospheric monitoring, retrieval systems, and a dedicated standby attendant on every entry. The safety case is built into the quote — it isn't a line item we cut to win a bid.",
        ],
      },
    ],
    industries: [
      "Refineries and petrochemical",
      "Power generation (coal, gas, biomass)",
      "Pulp and paper mills",
      "Steel and aluminum mills",
      "Chemical manufacturing",
      "Food and beverage processing",
      "Pharmaceutical manufacturing",
      "Automotive and assembly plants",
      "Textile and carpet mills",
      "Mining and aggregates",
      "Municipal water and wastewater",
      "General manufacturing",
    ],
    serviceAreas: [
      {
        state: "Georgia",
        cities: ["Atlanta", "Augusta", "Columbus", "Macon", "Savannah", "Carrollton", "LaGrange", "Newnan", "Rome"],
      },
      {
        state: "Alabama",
        cities: ["Birmingham", "Mobile", "Montgomery", "Huntsville", "Tuscaloosa", "Anniston"],
      },
      {
        state: "Tennessee",
        cities: ["Knoxville", "Chattanooga", "Nashville", "Memphis"],
      },
      {
        state: "South Carolina",
        cities: ["Columbia", "Charleston", "Greenville", "Spartanburg"],
      },
      {
        state: "North Carolina",
        cities: ["Charlotte", "Raleigh", "Greensboro", "Wilmington"],
      },
      {
        state: "Florida",
        cities: ["Jacksonville", "Tampa", "Pensacola", "Panama City"],
      },
      {
        state: "Mississippi",
        cities: ["Jackson", "Meridian", "Pascagoula", "Gulfport"],
      },
      {
        state: "Kentucky",
        cities: ["Louisville", "Lexington", "Owensboro", "Paducah"],
      },
    ],
    faqs: [
      {
        question: "What does industrial cleaning include?",
        answer:
          "Industrial cleaning covers the removal of process buildup, scale, sludge, residue, and contamination from operating plant equipment and facilities. At Cowart that includes vacuum recovery, pressure washing, hydroblasting from 10,000 to 40,000 PSI, chemical cleaning, confined-space entry, tank and vessel cleaning, pit and sump cleanout, and heat-exchanger and boiler service. The work is matched to the deposit and substrate — one method rarely covers everything.",
      },
      {
        question: "How is industrial cleaning different from commercial cleaning?",
        answer:
          "Commercial cleaning is janitorial work — floors, restrooms, offices, light facility maintenance. Industrial cleaning is process work inside operating plants: cleaning the equipment that makes the product, not the spaces around it. Industrial cleaning requires HAZWOPER and confined-space credentials, specialized equipment (vacuum trucks, hydroblasting rigs, chemical systems), and the ability to characterize and dispose of the recovered material as a regulated waste stream. The two trades don't overlap in practice.",
      },
      {
        question: "What industries do you clean for?",
        answer:
          "Refineries and petrochemical plants, power generation (coal, gas, biomass), pulp and paper mills, steel and aluminum mills, chemical manufacturing, food and beverage processors, pharmaceutical plants, automotive and assembly facilities, textile and carpet mills, mining and aggregates, municipal water and wastewater treatment, and general manufacturing across the Southeastern US.",
      },
      {
        question: "Are your industrial cleaning crews certified?",
        answer:
          "Yes. Every crew carries HAZWOPER-40, OSHA-30, DOT Hazmat, EPA RCRA awareness, and confined-space credentials. Crew leads add CSE supervisor designations where the job requires it. Certifications and current insurance certificates are sent to your safety department before the first truck rolls on site, not after an incident.",
      },
      {
        question: "Do you handle the waste stream from industrial cleaning?",
        answer:
          "Yes — that's the part that makes Cowart different. Most industrial cleaning contractors stop at the door and hand the recovered material to a third-party hauler and a third-party treatment facility. We bring it back to our own treatment plant in Carrollton, Georgia under our own DOT number, characterize it in-house, and dispose it under our manifests. Cleaning, transport, treatment, and disposal all stay under one compliance umbrella.",
      },
      {
        question: "Can you support plant turnarounds and outages?",
        answer:
          "Yes. Plant turnarounds are a core part of our work. We mobilize multiple crews, hydroblasting rigs, vacuum trucks, and chemical-cleaning equipment for shutdowns that compress weeks of cleaning into a 5–14 day window. We coordinate with your turnaround planner, work to the schedule, and provide a single point of contact for cleaning scope. 24-hour operation is standard during outages.",
      },
      {
        question: "What states do you serve for industrial cleaning?",
        answer:
          "Cowart Industrial provides industrial cleaning services across the Southeastern US — Georgia, Alabama, Tennessee, South Carolina, North Carolina, Florida, Mississippi, and Kentucky. Our base is in Carrollton, GA, west of Atlanta, and we maintain 24-hour emergency dispatch for plant breakdowns, spills, and turnaround support.",
      },
      {
        question: "How long have you been in business?",
        answer:
          "Cowart Industrial Services has been in continuous operation since 1974 — over 50 years of family-operated industrial environmental services in the Southeast. The company has grown from a single vacuum truck to a multi-state operation with its own treatment plant, its own DOT number, and a fleet covering the full range of industrial cleaning methods, but the ownership and the family-operated character haven't changed.",
      },
    ],
  },
  {
    slug: "hydro-blasting",
    category: "industrial-cleaning",
    code: "S—14",
    title: "Industrial Hydroblasting",
    shortTitle: "Hydroblasting",
    description:
      "Industrial hydroblasting from 10K to 40K PSI for scale, coatings, and surface prep across the Southeast. Water-only, no chemicals, no waste media.",
    intro:
      "Industrial hydroblasting up to 40,000 PSI — water-only material removal that descales, strips, and surface-preps without chemicals, abrasives, or secondary waste.",
    content: [
      "Industrial hydroblasting (also written hydro blasting or water blasting) uses ultra-high-pressure water — UHP in industry shorthand — to remove scale, rust, hardened deposits, and failed coatings from industrial surfaces. Cowart operates hydroblasting equipment from 10,000 PSI for general cleaning up to 40,000 PSI for the hardest deposits and most demanding surface-preparation work. Because the process uses only water, it produces no chemical residue and leaves no abrasive media behind — the substrate comes out clean and the waste stream is just spent water and the material you removed.",
      "Hydroblasting is the right method when mechanical cleaning is too slow, sandblasting is too damaging or too dusty, and chemical cleaning isn't permitted or worth the rinse cycle. Common targets include heat-exchanger tube bundles, fired-boiler tube walls, fin-fan and condenser tube banks, piping and process lines, storage tanks, pressure vessels, reactors, and concrete or steel structures being prepped for new coatings. The pressure, flow rate, and nozzle are matched to the material — the same rig that strips epoxy off concrete can be dialed back to clean a stainless heat exchanger without polishing the metal.",
      "Cowart Industrial runs hydroblasting projects from single-shift maintenance work up through multi-week plant turnarounds. Operators are HAZWOPER-40 and OSHA-30 certified and carry confined-space credentials — most industrial hydroblasting jobs touch at least one of those — and we coordinate with site safety, lockout/tagout, and isolation procedures before the trigger is pulled. Spent water and dislodged material are collected on site, transported under our own DOT number, and disposed through our Carrollton, Georgia treatment plant. The job ends in one place, not three.",
    ],
    capabilities: [
      "10,000 to 40,000 PSI water cleaning",
      "Heat exchanger and tube-bundle cleaning",
      "Boiler tube and waterwall cleaning",
      "Hydro prep surface preparation system (SSPC SP-WJ)",
      "Coating and paint stripping",
      "Pipe, line, and process-system cleaning",
      "Tank, vessel, and reactor cleaning",
    ],
    keywords: "Industrial Hydroblasting · 10K–40K PSI",
    metaKeywords: [
      "industrial hydroblasting",
      "hydroblasting services",
      "hydroblasting companies",
      "hydro prep surface preparation",
      "hydro prep system",
      "UHP surface prep",
      "hydro blasting",
      "40000 psi hydroblasting",
      "high pressure water blasting",
      "water blasting services",
      "UHP water cleaning",
      "hydroblasting near me",
      "hydroblasting Georgia",
    ],
    icon: Waves,
    photo: "/photos/service-hydro-blasting.jpg",
    photoAlt: "Cowart hydroblasting operator cleaning an industrial tank at 40,000 PSI",
    featured: true,
    extendedContent: [
      {
        heading: "How industrial hydroblasting works",
        paragraphs: [
          "Hydroblasting turns water into a cutting tool. A high-pressure pump — typically a positive-displacement plunger pump driven by a diesel engine — pressurizes water to between 10,000 and 40,000 PSI and pushes it through a small-diameter, abrasion-resistant hose to a hand-held or automated tool. At the nozzle, the pressure is converted to velocity: a 40,000 PSI jet leaves the orifice at roughly Mach 2, fast enough to fracture hardened scale, sever coatings from steel, and erode concrete laitance — all without touching the substrate with anything but water.",
          "The choice of pressure depends on the substrate and the deposit. 10,000 to 15,000 PSI is the working range for general industrial cleaning, soft scale, and biological fouling. 20,000 to 25,000 PSI is where coating removal and most heat-exchanger work lives — it cuts paint and epoxy without distorting metal. 35,000 to 40,000 PSI is reserved for hard mineral scale, concrete preparation, and the hydro prep surface preparation system used for coatings that have to meet SSPC SP-WJ standards before recoating. Higher pressure isn't always better: over-pressuring a soft substrate polishes or pits it. Method selection is part of the job, not an afterthought.",
          "Tool choice matters as much as pressure. Hand-held lances are still standard for general cleaning, but automated tools — rotating tube lances for heat exchangers, semi-automated tank cleaners, and robotic crawlers — keep operators out of the kill zone and produce more consistent results. Cowart operates both, and the right one for the job is the one specified in the cleaning plan, not the one already on the truck.",
        ],
      },
      {
        heading: "Hydroblasting vs. sandblasting, dry ice, and chemical cleaning",
        paragraphs: [
          "Hydroblasting is often the preferred method because it removes the deposit without adding to the waste stream. Sandblasting buries the contamination under spent abrasive that has to be disposed as one combined waste — a disposal cost multiplier on contaminated equipment. Dry-ice blasting is clean but slow and expensive at industrial scale, and it can't touch hardened mineral deposits. Chemical cleaning works for the inside of equipment when access is limited, but it adds a rinse cycle, a neutralization step, and a regulated waste stream of its own.",
          "Hydroblasting's limits are honest ones: it can't dissolve scale chemically locked to a substrate (gypsum, some sulfate deposits), and it doesn't work well on water-reactive process residues — those need a chemistry pass first, then a hydro rinse. For most heat-exchanger, boiler, tank, and surface-prep work, hydroblasting is faster, cheaper to dispose of, and easier to permit than the alternatives.",
        ],
      },
    ],
    industries: [
      "Refineries and petrochemical",
      "Power generation (coal, gas, biomass)",
      "Pulp and paper mills",
      "Steel and aluminum mills",
      "Chemical manufacturing",
      "Food and beverage processing",
      "Pharmaceutical manufacturing",
      "Automotive and assembly plants",
      "Mining and aggregates",
      "Municipal water and wastewater",
      "Textile and carpet mills",
      "General manufacturing",
    ],
    serviceAreas: [
      {
        state: "Georgia",
        cities: ["Atlanta", "Augusta", "Columbus", "Macon", "Savannah", "Carrollton", "LaGrange", "Newnan", "Rome"],
      },
      {
        state: "Alabama",
        cities: ["Birmingham", "Mobile", "Montgomery", "Huntsville", "Tuscaloosa", "Anniston"],
      },
      {
        state: "Tennessee",
        cities: ["Knoxville", "Chattanooga", "Nashville", "Memphis"],
      },
      {
        state: "South Carolina",
        cities: ["Columbia", "Charleston", "Greenville", "Spartanburg"],
      },
      {
        state: "North Carolina",
        cities: ["Charlotte", "Raleigh", "Greensboro", "Wilmington"],
      },
      {
        state: "Florida",
        cities: ["Jacksonville", "Tampa", "Pensacola", "Panama City"],
      },
      {
        state: "Mississippi",
        cities: ["Jackson", "Meridian", "Pascagoula", "Gulfport"],
      },
      {
        state: "Kentucky",
        cities: ["Louisville", "Lexington", "Owensboro", "Paducah"],
      },
    ],
    faqs: [
      {
        question: "What is industrial hydroblasting?",
        answer:
          "Industrial hydroblasting uses ultra-high-pressure water — typically between 10,000 and 40,000 PSI — to clean, descale, and prepare industrial surfaces. The water itself does the cutting, so the process introduces no abrasives, no chemicals, and no secondary waste media. It's the standard method for cleaning heat exchangers, boilers, tanks, piping, and concrete or steel surfaces being prepped for new coatings.",
      },
      {
        question: "How is hydroblasting different from pressure washing?",
        answer:
          "Pressure washing tops out around 4,000 PSI and is designed for surface dirt, light grease, and architectural cleaning. Industrial hydroblasting starts where pressure washing ends — 10,000 PSI is the working floor, and 40,000 PSI is the upper end of what's commercially available. The higher pressure means hydroblasting can remove hardened scale, mineral deposits, failed coatings, and process buildup that pressure washing won't touch.",
      },
      {
        question: "What PSI does industrial hydroblasting use?",
        answer:
          "Cowart runs hydroblasting equipment from 10,000 PSI up to 40,000 PSI. The right pressure depends on the substrate and the deposit: 10–15K PSI for general industrial cleaning, 20–25K PSI for coating removal and most heat-exchanger work, and 35–40K PSI for hard scale, concrete preparation, and surface profiling for new coatings. Higher pressure isn't always better — over-pressuring a soft substrate polishes or pits it.",
      },
      {
        question: "Will hydroblasting damage my equipment?",
        answer:
          "Not when the pressure, flow rate, and nozzle are matched to the substrate. Hydroblasting is widely used on stainless heat exchangers, carbon-steel boiler tubes, and lined pressure vessels because — done right — it removes the deposit without thinning the underlying metal. Damage happens when the wrong tool is used for the job. Our operators select equipment based on a written cleaning plan that names the substrate, the deposit, the access method, and the target pressure.",
      },
      {
        question: "What can be cleaned with hydroblasting?",
        answer:
          "Heat exchangers (shell-side and tube-side), fired boilers, fin-fan and air-cooled condensers, storage tanks, pressure vessels, reactors, piping and process lines, cooling-tower fill and structure, sumps and trenches, concrete pads and containment, and steel structures being prepped for new coatings. If a deposit is mechanically removable and the surface tolerates water, hydroblasting is usually the right answer.",
      },
      {
        question: "Does hydroblasting produce hazardous waste?",
        answer:
          "The hydroblasting process itself doesn't add anything to the waste stream — it's just water. The waste profile depends entirely on what you're removing. Scale, mineral deposits, and most coatings are non-hazardous; some chemical-service deposits aren't. We characterize the recovered material, transport it under our own DOT number, and dispose it through our Carrollton treatment plant or a permitted facility, with full manifests.",
      },
      {
        question: "What states do you serve for hydroblasting?",
        answer:
          "Cowart Industrial provides hydroblasting services across the Southeast — Georgia, Alabama, Tennessee, South Carolina, North Carolina, Florida, Mississippi, and Kentucky. Our base is in Carrollton, GA, west of Atlanta, and we maintain 24-hour emergency dispatch for plant breakdowns and turnaround support.",
      },
      {
        question: "How fast can you respond to a hydroblasting request?",
        answer:
          "For scheduled work, we typically quote within one business day and can be on site within the same week. For emergencies — a fouled exchanger before a planned outage, a stuck boiler tube bundle, a coating failure holding up production — 24-hour dispatch from Carrollton covers the eight-state service area, and crews can mobilize the same day across Georgia, Alabama, and the eastern half of our region.",
      },
    ],
  },
  {
    slug: "chemical-cleaning",
    category: "industrial-cleaning",
    code: "S—15",
    title: "Industrial Chemical Cleaning",
    shortTitle: "Chemical Cleaning",
    description:
      "Industrial chemical cleaning and descaling across the Southeast — heat exchangers, boilers, cooling towers, tanks, and piping by HAZWOPER crews.",
    intro:
      "Chemical cleaning when mechanical methods won't reach — scale, deposits, biological fouling, and process residue dissolved with the right chemistry for the substrate, then collected and disposed under one DOT number.",
    content: [
      "Cowart Industrial provides chemical cleaning for industrial process equipment where mechanical methods — hydroblasting, vacuum recovery, manual cleaning — won't reach or won't return the surface to spec. Our crews apply acids (hydrochloric, sulfamic, citric, formic, phosphoric, hydrofluoric where required), caustics, organic solvents, biocides, and specialty chemistries to dissolve scale, mineral deposits, biological fouling, hydrocarbon residue, and process buildup from the inside of operating equipment — often without disassembly. The work is engineered, not improvised: every chemical cleaning scope starts with a written procedure that names the substrate, the deposit profile, the cleaning chemistry, the contact time, the temperature, the rinse sequence, and the pass/fail criteria for completion.",
      "Typical applications include heat-exchanger descaling (shell-side and tube-side), boiler tube cleaning, fired-boiler waterwall passivation, cooling-tower fill cleaning and biocide treatment, tank passivation and acid pickling for new stainless installations, process piping system cleaning, reactor and process vessel decontamination, and pre-commissioning chemical cleaning for new equipment going into service. We work closely with facility process engineers and equipment OEMs to match the chemistry to the substrate — wrong chemistry can damage stainless, embrittle carbon steel, attack elastomer seals, or void warranty on lined equipment, so the selection isn't ad-hoc.",
      "The work runs under full HAZWOPER-40, OSHA-30, and confined-space credentials. Cleaning solutions, rinse waters, and recovered residue are collected at the point of generation — no discharge to facility drains, no surprises in your wastewater permit — and transported under Cowart's own DOT number to our treatment plant in Carrollton, Georgia or to a permitted disposal facility appropriate to the spent chemistry. The entire process, including the waste stream, stays under one compliance umbrella. That matters because chemical cleaning generates regulated waste, and the disposal path is usually the part that gets contractors in trouble, not the cleaning itself.",
    ],
    capabilities: [
      "Acid descaling (HCl, sulfamic, citric, formic, phosphoric, HF)",
      "Caustic cleaning and degreasing",
      "Solvent cleaning (organic and specialty)",
      "Heat-exchanger shell- and tube-side cleaning",
      "Boiler tube and waterwall chemistry",
      "Cooling tower fill cleaning and biocide treatment",
      "Tank passivation and stainless pickling",
      "Pre-commissioning chemical cleaning",
      "Spent chemistry collection and disposal",
    ],
    keywords: "Acid · Caustic · Specialty",
    metaKeywords: [
      "industrial chemical cleaning",
      "chemical cleaning services",
      "heat exchanger descaling",
      "boiler chemical cleaning",
      "process equipment cleaning",
      "chemical descaling services",
      "acid cleaning industrial",
      "passivation services",
      "industrial chemical cleaning Georgia",
      "chemical cleaning Southeast",
    ],
    icon: FlaskConical,
    photo: "/photos/service-chemical-cleaning.jpg",
    photoAlt:
      "Cowart crew in PPE performing confined-space chemical cleaning inside a process vessel",
    extendedContent: [
      {
        heading: "Why chemistry beats mechanical cleaning for certain jobs",
        paragraphs: [
          "Mechanical cleaning — hydroblasting, brushing, scraping, sandblasting — only works on surfaces a tool can reach. The inside of a tube bundle, the closed circuit of a boiler waterwall, the fill of a cooling tower, the internals of a reactor — those are physically inaccessible to a wand or a brush. Chemistry, by contrast, fills the volume. Pump the right cleaning solution through the equipment at the right temperature for the right contact time, and it dissolves what's in there. Pump rinse water, and you flush the residue out. The equipment never has to come apart.",
          "The classic case is heat exchanger descaling. Calcium carbonate scale on the tube-side of a shell-and-tube exchanger reduces heat transfer (a 1 mm scale layer can drop fuel efficiency by ~9% on a fired boiler), and over time blocks tubes outright. Mechanical cleaning means pulling the bundle, hydroblasting the tubes individually, and reinstalling — a multi-day job that requires bundle handling equipment. Chemical cleaning in place means closing the tube-side off, filling it with inhibited HCl (or sulfamic acid, depending on the metallurgy), circulating for 4–8 hours, neutralizing, rinsing, and putting the exchanger back in service. Same result, often in one shift instead of three.",
          "Same logic applies to fired-boiler chemical cleaning, cooling-tower fill cleaning, and process-piping system cleaning. The cost trade-off favors chemistry whenever the equipment is hard to disassemble and the deposit is chemistry-removable.",
        ],
      },
      {
        heading: "Why chemistry selection matters",
        paragraphs: [
          "The wrong chemistry costs more than no cleaning at all. Hydrochloric acid on stainless steel risks chloride stress-corrosion cracking; you use sulfamic or citric instead. Caustic on aluminum dissolves the metal; you use a specifically inhibited cleaner. Formic acid passes through copper-bearing brass without damage where HCl would attack it. Hydrofluoric acid is the only practical chemistry for silica-bearing scale but requires PPE and handling protocols that most contractors don't have. The chemistry has to match the substrate's metallurgy and the deposit's composition — and that match is verified, not assumed.",
          "Cowart writes a cleaning procedure for every chemical cleaning scope before the chemistry is mixed. The procedure names the deposit (typically based on a deposit sample analyzed for composition), the substrate (verified from drawings or sampling), the candidate chemistries, the selected chemistry with rationale, the concentration, the temperature, the contact time, the inhibitor package, and the rinse sequence. The procedure is reviewed with the facility's process engineer and approved before circulation begins. That's the difference between cleaning and equipment damage.",
        ],
      },
      {
        heading: "Spent chemistry — the disposal problem most contractors hand off",
        paragraphs: [
          "Chemical cleaning generates a regulated waste stream: spent acid, spent caustic, dissolved metals, oxidized organic residue, sometimes hazardous constituents depending on what came off the equipment. Most chemical cleaning contractors load the spent chemistry into a vacuum truck and call a third-party hazmat hauler. The customer ends up with a manifest crossing two or three vendors, a disposal cost the contractor doesn't control, and a waste profile they have to characterize themselves.",
          "Cowart's model is different. Spent chemistry is collected on site by our own crew, characterized in-house, and routed to the right disposal path under our DOT number. Non-hazardous spent chemistry (the majority of routine descaling and passivation work) goes to our treatment plant in Carrollton, Georgia for neutralization and discharge under permit. Hazardous spent chemistry (HF residue, heavy-metals-laden caustic, specific solvents) goes to a permitted hazardous facility under our coordinated handoff — but the coordination is ours, not yours. One contractor's name on the cleaning, one contractor's documentation on the disposal.",
        ],
      },
    ],
    industries: [
      "Refineries and petrochemical",
      "Power generation (coal, gas, biomass, nuclear support)",
      "Pulp and paper mills",
      "Chemical manufacturing",
      "Food and beverage processing",
      "Pharmaceutical manufacturing",
      "Steel and aluminum mills",
      "Pre-commissioning and equipment manufacturers",
      "HVAC and commercial chiller plants",
      "Cooling tower operators",
      "District energy and CHP plants",
      "General manufacturing",
    ],
    serviceAreas: [
      { state: "Georgia", cities: ["Atlanta", "Augusta", "Columbus", "Macon", "Savannah", "Carrollton", "LaGrange", "Newnan", "Rome"] },
      { state: "Alabama", cities: ["Birmingham", "Mobile", "Montgomery", "Huntsville", "Tuscaloosa", "Anniston"] },
      { state: "Tennessee", cities: ["Knoxville", "Chattanooga", "Nashville", "Memphis"] },
      { state: "South Carolina", cities: ["Columbia", "Charleston", "Greenville", "Spartanburg"] },
      { state: "North Carolina", cities: ["Charlotte", "Raleigh", "Greensboro", "Wilmington"] },
      { state: "Florida", cities: ["Jacksonville", "Tampa", "Pensacola", "Panama City"] },
      { state: "Mississippi", cities: ["Jackson", "Meridian", "Pascagoula", "Gulfport"] },
      { state: "Kentucky", cities: ["Louisville", "Lexington", "Owensboro", "Paducah"] },
    ],
    faqs: [
      {
        question: "What is industrial chemical cleaning?",
        answer:
          "Industrial chemical cleaning uses acids, caustics, solvents, or specialty chemistries to dissolve scale, mineral deposits, biological fouling, hydrocarbon residue, and process buildup from the inside of operating equipment. It's used when mechanical cleaning (hydroblasting, manual cleaning) can't reach the deposit — typically inside heat exchangers, boiler tubes, cooling towers, process piping, and reactors. Done correctly, it cleans the equipment without disassembly and without damaging the substrate.",
      },
      {
        question: "What can be chemically cleaned?",
        answer:
          "Heat exchangers (shell- and tube-side), fired boilers, cooling tower fill, process piping systems, reactors and process vessels, tank interiors, condensers, evaporators, fin-fans, distillation columns, and most closed-circuit process equipment. If the equipment can be isolated and filled with a circulating solution, it can usually be chemically cleaned.",
      },
      {
        question: "What chemistries do you use?",
        answer:
          "Hydrochloric acid for carbon-steel descaling; sulfamic and citric acids for stainless-compatible work; formic acid for copper-bearing alloys; phosphoric acid for passivation and rust conversion; hydrofluoric acid for silica scale (specialty PPE and protocols required); inhibited caustics for organic and grease deposits; solvents for hydrocarbon residue. Chemistry is selected by writing a cleaning procedure that matches the substrate and the deposit — not by reaching for what's on the truck.",
      },
      {
        question: "Will chemical cleaning damage my equipment?",
        answer:
          "Not when the chemistry, concentration, temperature, contact time, and inhibitor package are correctly matched to the substrate and the deposit. Damage happens when the wrong chemistry is selected (HCl on stainless, caustic on aluminum, uninhibited acid on carbon steel) or when contact time is exceeded. We write a cleaning procedure for every scope and have it reviewed by your process engineer before circulation begins. The procedure is the safety case.",
      },
      {
        question: "How long does chemical cleaning take?",
        answer:
          "Most in-place chemical cleaning runs in a single 8–24 hour outage window. Heat-exchanger descaling typically takes 4–8 hours of circulation plus rinse; boiler chemical cleaning runs 12–24 hours depending on scope; pre-commissioning cleans on new equipment can run 12–48 hours through multiple chemistry steps. The full window includes setup, cleaning, neutralization, rinsing, and pass-criteria sampling.",
      },
      {
        question: "What happens to the spent cleaning chemistry?",
        answer:
          "Spent chemistry is collected at the point of generation (no discharge to facility drains), characterized in-house, and routed to disposal under Cowart's own DOT number. Non-hazardous spent chemistry goes to our treatment plant in Carrollton, GA for neutralization and discharge under permit; hazardous spent chemistry goes to a permitted hazardous facility under our coordinated handoff. The customer sees one contractor on the cleaning and one contractor's documentation on the disposal.",
      },
      {
        question: "Do you do pre-commissioning chemical cleaning for new equipment?",
        answer:
          "Yes. New boilers, heat exchangers, and process systems often require alkaline degreasing, acid pickling, passivation, and a final demineralized rinse before going into service. We run pre-commissioning scopes coordinated with the EPC contractor and the equipment OEM, with sample-based pass criteria documented and signed off at each step.",
      },
      {
        question: "What states do you serve for chemical cleaning?",
        answer:
          "Georgia, Alabama, Tennessee, South Carolina, North Carolina, Florida, Mississippi, and Kentucky. Chemical cleaning work is dispatched from Carrollton, GA with mobile chemistry pumps, heating units, and rinse-water staging trailers that travel with the crew.",
      },
    ],
  },
  {
    slug: "line-jetting-pipe-cleaning",
    category: "industrial-cleaning",
    code: "S—16",
    title: "Line Jetting and Pipe Cleaning",
    shortTitle: "Line Jetting",
    description:
      "Industrial line jetting and pipe cleaning across the Southeast — high-pressure water clears scale, grease, and process buildup. CCTV included.",
    intro:
      "Pipe blockages, scale, grease, and process buildup cleared with high-pressure water — no chemicals, no disassembly, full flow restored, dislodged material recovered and disposed.",
    content: [
      "Cowart Industrial provides line jetting and pipe cleaning service for industrial facilities. The work uses high-pressure water — typically 4,000 to 10,000+ PSI depending on the line — and rotating or directional jetting nozzles to clear blockages, scale, grease, biological growth, and process buildup from inside piping, drain lines, sewer mains, and process equipment. Nozzles are matched to the line size, material, and obstruction profile; pressure is selected to clear the deposit without damaging the pipe interior or seals. The result is full flow restored without disassembly, downtime, or chemistry — just water through the line and recovery on the other end.",
      "Common applications include process drain-line cleaning, sewer main jetting, sludge-line clearing, food-process waste-line decontamination, cooling-tower drain restoration, oil-water separator drain cleaning, slot-drain and trench-drain restoration, and emergency response for blocked or backed-up systems. We handle lines from small process drains (2-inch and up) through large industrial sewer mains (24-inch and beyond), with pre- and post-CCTV inspection available to document condition, identify root causes (root intrusion, pipe failure, scale buildup), and verify the clean.",
      "Line jetting pairs naturally with Cowart's vacuum truck service — material dislodged from the line is recovered by the vacuum unit at the downstream cleanout, captured rather than discharged to the next section of pipe or to the facility drain system. The complete loop — jet, vacuum, transport, dispose at our treatment plant — runs under one dispatch and one DOT number. That's important because line jetting without recovery just moves the problem downstream; recovery is what makes it a real cleaning, not a flush.",
    ],
    capabilities: [
      "High-pressure water jetting (4K to 10K+ PSI)",
      "Drain and sewer line cleaning (2-inch to 24-inch+)",
      "Process line and sludge-line clearing",
      "Food-process waste-line decontamination",
      "Slot-drain and trench-drain restoration",
      "Oil-water separator drain cleaning",
      "Pre- and post-CCTV inspection",
      "Root intrusion and grease blockage removal",
      "Paired vacuum recovery and in-house disposal",
    ],
    keywords: "Hi-Pressure · CCTV · Recovery",
    metaKeywords: [
      "industrial line jetting",
      "pipe cleaning services",
      "sewer jetting",
      "hydro jetting industrial",
      "drain cleaning industrial",
      "industrial pipe cleaning",
      "sewer jetter service",
      "line cleaning Georgia",
      "hydro jetting Southeast",
    ],
    icon: Wrench,
    photo: "/photos/service-line-jetting.jpg",
    photoAlt:
      "Vacuum hoses rigged to a confined-space manway with gas monitor for line cleaning",
    extendedContent: [
      {
        heading: "Industrial line jetting vs. residential drain cleaning",
        paragraphs: [
          "Residential drain cleaning uses small hydro jetters at 1,500–4,000 PSI, designed for 1.5- to 4-inch domestic plumbing. It clears soap scum, hair, paper, and the kind of light grease that builds up in kitchen and bathroom lines. The equipment is sized for service vans and the work is straightforward.",
          "Industrial line jetting is a different category. The pressure is higher (4K to 10K+ PSI for tough deposits), the equipment is truck-mounted, the lines are larger (often 6 to 24-inch industrial sewer or process drain), and the deposits are harder: process scale, hardened grease from food production, sludge accumulation, mineral deposits from cooling water, biological growth from anaerobic conditions, and root intrusion through deteriorated pipe joints. The nozzles, hose, and pump are scaled to the work, and the operator skillset is different — industrial work requires confined-space credentials, line-isolation procedures, and the ability to coordinate with facility operations to take the line out of service for the cleaning.",
        ],
      },
      {
        heading: "CCTV inspection — before and after",
        paragraphs: [
          "Pre-cleaning CCTV inspection tells you what's actually in the line before the jetting starts. That matters because the obstruction isn't always what the symptom suggests: a backed-up drain might be a buildup, a partial collapse, a root intrusion, or a foreign object. The right cleaning method depends on which one. We deploy CCTV cameras through the line, record the inspection video, and produce a written report identifying the obstructions, the pipe condition, and the recommended cleaning approach.",
          "Post-cleaning CCTV verifies the clean. The video shows the line restored to full bore, documents any underlying pipe damage exposed by the cleaning (cracks, broken joints, deformations) for follow-up, and provides documentation for your facility records. For lines under regulatory inspection — food-process drains, industrial sewer mains tied to a discharge permit — the pre/post CCTV record is often part of the compliance paper trail.",
        ],
      },
    ],
    industries: [
      "Food and beverage processing",
      "Manufacturing (general and heavy)",
      "Pulp and paper mills",
      "Chemical manufacturing",
      "Pharmaceutical manufacturing",
      "Automotive and assembly plants",
      "Refineries and petrochemical",
      "Power generation",
      "Municipal industrial sewer",
      "Cooling tower operators",
      "Hotel and hospitality (industrial-scale)",
      "Commercial and institutional facilities",
    ],
    serviceAreas: [
      { state: "Georgia", cities: ["Atlanta", "Augusta", "Columbus", "Macon", "Savannah", "Carrollton", "LaGrange", "Newnan", "Rome"] },
      { state: "Alabama", cities: ["Birmingham", "Mobile", "Montgomery", "Huntsville", "Tuscaloosa", "Anniston"] },
      { state: "Tennessee", cities: ["Knoxville", "Chattanooga", "Nashville", "Memphis"] },
      { state: "South Carolina", cities: ["Columbia", "Charleston", "Greenville", "Spartanburg"] },
      { state: "North Carolina", cities: ["Charlotte", "Raleigh", "Greensboro", "Wilmington"] },
      { state: "Florida", cities: ["Jacksonville", "Tampa", "Pensacola", "Panama City"] },
      { state: "Mississippi", cities: ["Jackson", "Meridian", "Pascagoula", "Gulfport"] },
      { state: "Kentucky", cities: ["Louisville", "Lexington", "Owensboro", "Paducah"] },
    ],
    faqs: [
      {
        question: "What is industrial line jetting?",
        answer:
          "Industrial line jetting uses high-pressure water (4,000 to 10,000+ PSI) and specialized jetting nozzles to clear scale, grease, sludge, roots, and process buildup from inside industrial drain lines, sewer mains, and process piping. The water does the cutting — no chemicals, no disassembly. Dislodged material is recovered by a paired vacuum truck so the obstruction is removed from the system, not just pushed downstream.",
      },
      {
        question: "What's the difference between hydro jetting and line jetting?",
        answer:
          "The terms are used interchangeably. \"Hydro jetting\" is more common in plumbing and commercial drain contexts; \"line jetting\" is the more typical industrial term, especially for process piping and industrial sewer mains. Both refer to the same fundamental technique: high-pressure water through a directional nozzle clears the pipe interior.",
      },
      {
        question: "What can you clean with line jetting?",
        answer:
          "Process drain lines, industrial sewer mains, sludge lines, food-process waste lines, cooling-tower drain restoration, oil-water separator drains, slot drains and trench drains, condensate drains, and most non-pressurized piping systems. Lines from 2-inch through 24-inch and larger are within standard scope.",
      },
      {
        question: "Do you do CCTV pipe inspection?",
        answer:
          "Yes. Pre-cleaning CCTV identifies what's in the line before work starts (buildup, roots, collapse, foreign object) so the right cleaning method is selected. Post-cleaning CCTV documents the clean and exposes any underlying pipe damage that needs follow-up. Video and written inspection reports are provided as part of the deliverable.",
      },
      {
        question: "Can you handle grease lines from food processing?",
        answer:
          "Yes. Food-process waste lines are a routine application — hardened grease buildup, FOG accumulation, organic deposits, and the kind of biological growth that comes with high-BOD waste streams. The cleaning is paired with vacuum recovery so the dislodged grease and waste don't end up downstream in your interceptor or the municipal sewer connection.",
      },
      {
        question: "What about emergency response for backed-up lines?",
        answer:
          "24-hour dispatch from Carrollton, GA. Backed-up process drains, sewer overflows, and line failures get same-day response across Georgia, Alabama, and the eastern half of our 8-state Southeast service area. Bring the line back to flow first, document the cause, schedule the follow-up.",
      },
      {
        question: "What happens to the material that gets jetted out of the line?",
        answer:
          "Material dislodged by the jet is recovered by a paired vacuum truck at the downstream cleanout, transported under Cowart's DOT number, and disposed at our treatment plant or a permitted facility. Without paired recovery, line jetting just moves the obstruction downstream — recovery is what makes the job a real cleaning rather than a flush.",
      },
      {
        question: "What states do you serve for line jetting?",
        answer:
          "Georgia, Alabama, Tennessee, South Carolina, North Carolina, Florida, Mississippi, and Kentucky. Line jetting trucks and crews are dispatched from Carrollton, GA with paired vacuum recovery and CCTV inspection capability.",
      },
    ],
  },
  {
    slug: "line-flushing-decontamination",
    category: "industrial-cleaning",
    code: "S—17",
    title: "Industrial Decontamination",
    shortTitle: "Line Flushing & Decon",
    description:
      "Industrial line flushing and decontamination across the Southeast for changeovers, turnarounds, and decommissioning — purge, sample, dispose.",
    intro:
      "Flushing for changeovers, decontamination for turnarounds, decommissioning for end-of-life equipment — process lines returned to spec, residue captured and disposed, every step documented.",
    content: [
      "Cowart Industrial provides line flushing and industrial decontamination service for process equipment that has to be cleaned to a defined end-state. The work covers three distinct scopes that look similar but have different acceptance criteria: product-changeover flushes (clearing one product from a line before introducing another, with cross-contamination thresholds set by the receiving product), turnaround decontamination (purging hazardous or hot process material before vessel entry or mechanical work, with safety-driven exposure criteria), and end-of-life decommissioning flushes (preparing equipment for demolition, sale, or relocation, with regulatory disposal criteria). Each scope is engineered to its own purge sequence — what works for a changeover doesn't necessarily satisfy a vessel-entry decon.",
      "Flushing media range from water and steam through specialty solvents and decontamination chemistries, depending on the residue, the substrate, and the acceptance criteria. Our crews work with facility process engineers to write the purge sequence before the work starts: which media, in what order, at what temperature, for how long, with what sampling protocol. Wrong sequence can leave residue that fails the changeover sample, damage seals or elastomers, or fail the regulatory clearance for vessel entry. Right sequence ends the job once with documentation that satisfies the customer's QA team and (where applicable) the regulator.",
      "Spent flush solutions and decontamination wastes are collected at the point of generation — no discharge to facility drains, no surprise loading on the wastewater permit — and transported under Cowart's DOT number to our treatment plant in Carrollton, Georgia or to a permitted hazardous facility under coordinated handoff for the small fraction of decon work that generates regulated hazardous waste. The work runs under HAZWOPER-40, OSHA-30, and confined-space certification; for vessel-entry decon (the most safety-critical scope), atmospheric monitoring is continuous and standby attendants are on every entry.",
    ],
    capabilities: [
      "Process line flushing (water, steam, solvent)",
      "Vessel and equipment decontamination",
      "Product-changeover purge sequences",
      "Turnaround vessel-entry prep decon",
      "End-of-life decommissioning flushes",
      "Steam-out and nitrogen purge support",
      "Pre-work, in-process, and post-flush sampling",
      "Sampling QA chain-of-custody documentation",
      "Spent-flush collection and disposal under one DOT#",
    ],
    keywords: "Flushes · Decon · Sampling",
    metaKeywords: [
      "industrial line flushing",
      "industrial decontamination",
      "process decontamination",
      "equipment flushing services",
      "product changeover flushing",
      "vessel entry decontamination",
      "decommissioning decontamination",
      "line flushing Georgia",
      "industrial decon Southeast",
    ],
    icon: SprayCan,
    photo: "/photos/service-line-flushing.jpg",
    photoAlt:
      "Cowart crew in Tyvek suits at a permit-required confined-space decontamination job",
    extendedContent: [
      {
        heading: "The three scopes — and why they're different jobs",
        paragraphs: [
          "A product-changeover flush exists to make a piece of equipment safe to introduce a new product without contamination. The acceptance criterion is usually a chemical or microbiological sample showing the residual of the prior product is below a specified threshold. The flush sequence is driven by what the prior product was, what the new product is, and what the receiving QA team will sign off on. Most changeovers are done with water or steam through a defined sequence; some need solvent intermediates. The work is fast — usually one shift — and ends when the sample passes.",
          "A turnaround decontamination is a different problem. The equipment is being opened for mechanical work or vessel entry, and the goal is to drive the contained material to a level safe for entry under permit. The acceptance criterion is exposure-driven — LEL, oxygen, toxic gas thresholds — and the work is done before the maintenance crew arrives. Steam-out, nitrogen purge, water flush, and chemical decontamination steps may all be involved depending on what was in the equipment. The sampling protocol satisfies safety procedures, not QA.",
          "A decommissioning decon is a regulatory exercise. The equipment is leaving service — sold, demolished, or relocated — and the residual contamination has to be characterized and either cleaned to a regulatory threshold or disposed of along with the equipment. The acceptance criteria are set by environmental regulations (RCRA, TSCA, state programs) and the documentation has to satisfy the disposing or receiving party. This is the slowest scope and the most paper-intensive.",
        ],
      },
      {
        heading: "Sampling — the part that turns flushing into engineering",
        paragraphs: [
          "Flushing without sampling is just rinsing. The discipline that makes line flushing a real service is the sampling protocol that proves the equipment is at the required end-state. Pre-work samples establish the starting concentration; in-process samples track the cleaning progress; post-flush samples verify the acceptance criterion is met. Sampling locations are selected to be representative — typically multiple points in a line, not just the discharge — and chain-of-custody is documented for samples going to a third-party lab.",
          "Done right, the sampling tells you when the job is done and gives you the documentation to defend the result. Done wrong, you either over-clean (wasted time and chemistry) or under-clean (fail the receiving QA sample, repeat the work, lose the schedule). Cowart's sampling protocols are written into the cleaning procedure before the work starts and reviewed with the customer's QA contact.",
        ],
      },
      {
        heading: "What happens to the spent flush",
        paragraphs: [
          "Flushing generates waste — sometimes a lot of it, especially on large process systems. The spent flush solution carries whatever was in the equipment, in whatever concentration the flush removed. For non-hazardous changeovers and routine decon, the spent flush goes to Cowart's treatment plant in Carrollton, Georgia for processing under our existing wastewater permit. For decommissioning work that involves regulated material, the spent flush is profiled, manifested, and shipped to a permitted hazardous facility under coordinated handoff.",
          "Either way, the spent flush is captured at the equipment — collected into vacuum trucks or sealed boxes at the discharge — rather than discharged to your facility drains. That's important because facility wastewater systems are usually permitted for steady-state plant flows, not for concentrated flush slugs, and a flush going to the drain can show up as a permit excursion. Capturing the flush at source keeps your discharge clean and your wastewater operator out of an investigation.",
        ],
      },
    ],
    industries: [
      "Chemical manufacturing",
      "Pharmaceutical manufacturing",
      "Food and beverage processing",
      "Refineries and petrochemical",
      "Pulp and paper mills",
      "Specialty and fine chemicals",
      "Cosmetics and personal care",
      "Power generation and process steam",
      "Pipeline operators",
      "Equipment OEMs (pre-commissioning)",
      "Decommissioning contractors",
      "General manufacturing",
    ],
    serviceAreas: [
      { state: "Georgia", cities: ["Atlanta", "Augusta", "Columbus", "Macon", "Savannah", "Carrollton", "LaGrange", "Newnan", "Rome"] },
      { state: "Alabama", cities: ["Birmingham", "Mobile", "Montgomery", "Huntsville", "Tuscaloosa", "Anniston"] },
      { state: "Tennessee", cities: ["Knoxville", "Chattanooga", "Nashville", "Memphis"] },
      { state: "South Carolina", cities: ["Columbia", "Charleston", "Greenville", "Spartanburg"] },
      { state: "North Carolina", cities: ["Charlotte", "Raleigh", "Greensboro", "Wilmington"] },
      { state: "Florida", cities: ["Jacksonville", "Tampa", "Pensacola", "Panama City"] },
      { state: "Mississippi", cities: ["Jackson", "Meridian", "Pascagoula", "Gulfport"] },
      { state: "Kentucky", cities: ["Louisville", "Lexington", "Owensboro", "Paducah"] },
    ],
    faqs: [
      {
        question: "What is industrial line flushing?",
        answer:
          "Industrial line flushing is the controlled purge of process equipment — piping, tanks, vessels, heat exchangers — to remove residual product, contamination, or hazardous material. It's used for product changeovers (clearing one product before another), turnaround prep (purging equipment before vessel entry), and decommissioning (preparing equipment to leave service). The flush sequence is engineered to the specific process and contamination profile, with sampling to verify the end-state.",
      },
      {
        question: "How is line flushing different from line jetting?",
        answer:
          "Line jetting uses high-pressure water to mechanically dislodge buildup from inside a pipe — scale, grease, sludge, roots — and recovers the dislodged material. Line flushing uses controlled volumes of water, steam, or specialty media to chemically purge product or contamination from inside a process system, with sampling to verify the end-state. Jetting is about clearing obstructions; flushing is about driving residual concentrations to a defined threshold.",
      },
      {
        question: "Can you do vessel-entry decontamination?",
        answer:
          "Yes. Pre-entry decon is one of our core scopes — driving the residual atmosphere in a tank, reactor, or vessel down to safe-entry thresholds (LEL, oxygen, toxic gases) before the maintenance crew arrives. The work is run under HAZWOPER-40, OSHA-30, and confined-space certification, with continuous atmospheric monitoring and standby attendants for any entry-required step.",
      },
      {
        question: "What sampling do you do for flushing work?",
        answer:
          "Pre-work samples establish the starting concentration; in-process samples track the cleaning progress; post-flush samples verify the acceptance criterion. Sampling locations are selected to be representative, chain-of-custody is documented for samples going to a third-party lab, and the sampling protocol is written into the cleaning procedure before the work starts.",
      },
      {
        question: "What media do you use for flushing?",
        answer:
          "Water is the most common, used for routine changeovers and rinses. Steam is used for hot service and decontamination where temperature drives the cleaning. Specialty solvents (matched to the residue and substrate) are used when water/steam won't reach. Nitrogen purge supports inert-atmosphere work. The media sequence is engineered, not improvised.",
      },
      {
        question: "Do you handle the spent flush solution?",
        answer:
          "Yes. Spent flush is captured at the equipment (not discharged to facility drains), characterized, transported under Cowart's DOT number, and disposed at our treatment plant in Carrollton, GA or at a permitted hazardous facility under coordinated handoff. The customer doesn't end up holding the spent flush waste.",
      },
      {
        question: "Can you support pre-commissioning decon for new equipment?",
        answer:
          "Yes. New process equipment often requires a documented pre-commissioning clean before it goes into product service — alkaline degreasing, water rinse, passivation, demineralized rinse, sampling. We coordinate this scope with the EPC contractor and the equipment OEM, with sample-based pass criteria documented and signed off at each step.",
      },
      {
        question: "What states do you serve for line flushing and decon?",
        answer:
          "Georgia, Alabama, Tennessee, South Carolina, North Carolina, Florida, Mississippi, and Kentucky. Decon crews are dispatched from Carrollton, GA with mobile sampling and chemistry equipment that travels with the team.",
      },
    ],
  },

  // ────────────────────────── ON-SITE TREATMENT ───────────────────────────
  {
    slug: "on-site-filtration",
    category: "on-site-treatment",
    code: "S—18",
    title: "On-Site Water Filtration",
    shortTitle: "On-Site Filtration",
    description:
      "Mobile on-site industrial water filtration across the Southeast — multi-media, bag, cartridge, carbon. Treat water where it's generated.",
    intro:
      "Treat water where it's generated. Lower transport costs, less downtime, full compliance documentation included with every job — mobile filtration trailers, on-site sampling, and discharge support across the Southeast.",
    content: [
      "Cowart Industrial brings water filtration directly to your facility with our mobile on-site filtration service. By treating water at the generation point, we eliminate transport costs to off-site treatment, reduce facility downtime waiting for tanker turnaround, and provide compliance documentation tied to the actual treated water rather than reconstructed after the fact. The filtration unit travels with the work — skid- and trailer-mounted systems that connect to your dewatering, process water, or contaminated stormwater stream and produce treated water ready for discharge or reuse on-site.",
      "Our on-site filtration train pairs the unit operations to the influent profile. Multi-media filtration handles suspended solids and turbidity; bag and cartridge filtration polish for fine particulate; granular activated carbon removes dissolved organics, hydrocarbons, and trace contaminants; specialty media handle iron, manganese, and heavy metals where present. The system can be configured for single-pass treatment, recirculation polishing, or batch processing depending on the project. Throughput sizing runs from low-flow polishing applications through high-throughput dewatering work.",
      "Common applications include construction dewatering (treating groundwater pumped from excavations to a discharge-ready condition before release), industrial process-water polishing (final-stage filtration before discharge or reuse), contaminated stormwater treatment (treating water collected in secondary containment before release), project water reuse (filtering recovered project water so it can be reused in the next cycle), and emergency containment treatment. The work is documented end-to-end: influent and effluent samples, treatment logs, and the disposition documentation your environmental coordinator needs for the permit file. Discharge sampling and compliance reporting are part of the deliverable.",
    ],
    capabilities: [
      "Mobile, trailer-mounted filtration units",
      "Multi-media and bag/cartridge filtration",
      "Granular activated carbon (GAC) polishing",
      "Iron, manganese, and metals removal",
      "Construction dewatering treatment",
      "Process-water and stormwater polishing",
      "Continuous in-process monitoring",
      "Influent/effluent sampling and lab coordination",
      "Discharge documentation and compliance reporting",
    ],
    keywords: "Mobile · Testing · Compliance",
    metaKeywords: [
      "on-site water filtration",
      "mobile water treatment",
      "industrial water filtration",
      "construction dewatering treatment",
      "stormwater filtration industrial",
      "mobile filtration services",
      "on-site water treatment Georgia",
      "water filtration Southeast",
    ],
    icon: Filter,
    photo: "/photos/service-on-site-filtration.jpg",
    photoAlt:
      "Cowart-branded bulk storage tanks inside a lined secondary-containment berm at an on-site treatment job",
    extendedContent: [
      {
        heading: "Why on-site treatment beats hauling",
        paragraphs: [
          "The default approach to industrial wastewater is to truck it off site to a treatment facility. That works fine when the volume is manageable and the treatment is straightforward — and it's how most of Cowart's wastewater management work runs. But when the volume is large, when the treatment is simple (suspended solids, hydrocarbons, biological), or when the water can be reused on-site instead of disposed, the haul-and-treat model gets expensive. A construction dewatering project producing 50,000 gallons a day can put 5–10 tankers on the road every shift; an on-site filtration trailer pulls the same flow through media and discharges treated water in real time.",
          "The economics depend on the project. For small volumes or chemistry that needs the treatment plant, hauling is cheaper. For sustained projects with high-volume, low-complexity water, on-site filtration wins on every line item: less transport, less truck-time on the schedule, less waiting between loads, and treated water on-spec for permit discharge or reuse without the round-trip. We size the option to the project before committing to either approach.",
        ],
      },
      {
        heading: "What we treat and what we measure",
        paragraphs: [
          "Standard influent profiles run from suspended-solids-heavy dewatering water (groundwater from excavations, contaminated stormwater, sediment-laden process water) through hydrocarbon-impacted water (parts-washer rinse, equipment-wash water, oily process water) to specific-contaminant streams (iron- and manganese-laden well water, metals-contaminated stormwater). The filtration train is configured to the influent — multi-media for solids and turbidity, bag/cartridge for polishing, GAC for organics and hydrocarbons, specialty media for metals.",
          "Sampling is part of the service. Influent samples document what we received; in-process sampling tracks the treatment performance; effluent samples document compliance with the discharge limit. Samples go to certified labs with chain-of-custody documentation. For projects under a permit (NPDES, construction stormwater, industrial pretreatment), we provide the sampling cadence and documentation the permit requires. For projects under regulatory scrutiny (remediation discharge, contaminated stormwater), we coordinate with the regulator and the customer's environmental consultant on the sampling plan.",
        ],
      },
    ],
    industries: [
      "Construction and earthworks (dewatering)",
      "Environmental remediation",
      "Refineries and petrochemical",
      "Power generation",
      "Mining and aggregates",
      "Manufacturing (general and heavy)",
      "Pulp and paper mills",
      "Food and beverage processing",
      "Pharmaceutical manufacturing",
      "Pipeline and utility contractors",
      "Industrial site stormwater",
      "Municipal projects",
    ],
    serviceAreas: [
      { state: "Georgia", cities: ["Atlanta", "Augusta", "Columbus", "Macon", "Savannah", "Carrollton", "LaGrange", "Newnan", "Rome"] },
      { state: "Alabama", cities: ["Birmingham", "Mobile", "Montgomery", "Huntsville", "Tuscaloosa", "Anniston"] },
      { state: "Tennessee", cities: ["Knoxville", "Chattanooga", "Nashville", "Memphis"] },
      { state: "South Carolina", cities: ["Columbia", "Charleston", "Greenville", "Spartanburg"] },
      { state: "North Carolina", cities: ["Charlotte", "Raleigh", "Greensboro", "Wilmington"] },
      { state: "Florida", cities: ["Jacksonville", "Tampa", "Pensacola", "Panama City"] },
      { state: "Mississippi", cities: ["Jackson", "Meridian", "Pascagoula", "Gulfport"] },
      { state: "Kentucky", cities: ["Louisville", "Lexington", "Owensboro", "Paducah"] },
    ],
    faqs: [
      {
        question: "What is on-site water filtration?",
        answer:
          "On-site filtration is mobile water treatment delivered at the facility or project where the water is generated, instead of hauling the water to an off-site treatment plant. Trailer-mounted filtration units connect to your dewatering pump, process discharge, or contaminated stormwater stream and produce treated water ready for permit discharge or on-site reuse. The unit moves with the project.",
      },
      {
        question: "What does on-site filtration cost compared to hauling?",
        answer:
          "It depends on the project. For low volumes, hauling to our treatment plant is typically cheaper. For sustained high-volume projects (construction dewatering, large-scale stormwater treatment, multi-week process water programs), on-site filtration is dramatically cheaper because the transport cost goes to zero. We size both options for the project before committing to either.",
      },
      {
        question: "What contaminants can be removed by on-site filtration?",
        answer:
          "Suspended solids and turbidity (multi-media filtration), fine particulate (bag and cartridge filtration), dissolved organics and hydrocarbons (granular activated carbon), iron and manganese, and specific metals with the right media. The filtration train is configured to the influent profile — we don't deploy a one-size-fits-all unit.",
      },
      {
        question: "Can you treat construction dewatering water?",
        answer:
          "Yes. Construction dewatering is a core application — groundwater pumped from excavations is treated on-site to a permit-discharge condition (usually suspended solids, turbidity, sometimes pH adjustment) before release. The filtration trailer sets up adjacent to the dewatering pump and treats the flow in real time, with sampling documenting the discharge condition.",
      },
      {
        question: "Do you provide discharge sampling and documentation?",
        answer:
          "Yes. Influent and effluent samples are collected at the prescribed cadence, sent to certified labs with chain-of-custody documentation, and reported with the treatment record. For projects under a permit (NPDES, construction stormwater, industrial pretreatment), the sampling and reporting match the permit requirements.",
      },
      {
        question: "How fast can you deploy a filtration unit?",
        answer:
          "Standard deployment is within the same week for scheduled projects. Emergency deployment (spill response, sudden discharge needs) is dispatched from Carrollton, GA on a 24-hour basis, with same-day setup possible across Georgia, Alabama, and the eastern half of our Southeast service area depending on equipment availability.",
      },
      {
        question: "Can the treated water be reused on-site?",
        answer:
          "Yes — that's often the point. Project water reuse is common for hydroblasting feed (treat the recovered water, send it back to the hydro rig), dust-control applications, and any operation where filtered water replaces fresh-water supply. Reuse reduces both intake and discharge.",
      },
      {
        question: "What states do you serve for on-site filtration?",
        answer:
          "Georgia, Alabama, Tennessee, South Carolina, North Carolina, Florida, Mississippi, and Kentucky. Mobile filtration trailers are dispatched from Carrollton, GA and can be staged at sites across the 8-state Southeast footprint for projects ranging from one-shift jobs through multi-month deployments.",
      },
    ],
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
