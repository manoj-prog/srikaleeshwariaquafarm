export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  category: 'fish' | 'shrimp' | 'consultancy' | 'hatchery' | 'feed' | 'infrastructure';
  icon: string;
  heroTag: string;
  depthTag: string;
  description: string;
  keyFeatures: string[];
  benefits: string[];
  technologies: string[];
  targetAudience: string;
  image: string;
}

export interface FacilityItem {
  id: string;
  name: string;
  area: string;
  depthTag: string;
  description: string;
  specs: { label: string; value: string }[];
  features: string[];
  image: string;
}

export interface SustainabilityPillar {
  id: string;
  title: string;
  subtitle: string;
  metric: string;
  description: string;
  highlights: string[];
  icon: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Fish Farming' | 'Shrimp Farming' | 'Facilities' | 'Hatchery' | 'Harvesting';
  location: string;
  image: string;
  caption: string;
  dimensions: string;
}

export const COMPANY_INFO = {
  name: "Sri Kaleeshwari Aqua Farm",
  legalName: "Sri Kaleeshwari Aqua Farm Pvt. Ltd.",
  tagline: "Sustainable Aquaculture for a Better Tomorrow",
  slogan: "LIFE HERE IS NURTURED, NOT EXPLOITED.",
  foundedYear: 2001,
  headquarters: "2/3 Pudhukamarajar nagar, Royapuram, Chennai 600013, Tamil Nadu, India",
  address: "2/3 Pudhukamarajar nagar, Royapuram, Chennai 600013",
  phone: "+91 81220 66281",
  rawPhone: "+918122066281",
  secondaryPhone: "+91 44 2847 9102",
  email: "contact@srikaleeshwariaquafarm.com",
  salesEmail: "orders@srikaleeshwariaquafarm.com",
  whatsappNumber: "+918122066281",
  mapUrl: "https://maps.app.goo.gl/grt9o3VgVpR6zNmG9",
  workingHours: "Monday – Saturday: 7:00 AM – 6:30 PM IST",
  socials: {
    instagram: "@sri_kaleeshwari_aquafarm",
    instagramUrl: "https://www.instagram.com/sri_kaleeshwari_aquafarm/",
    instagramDmUrl: "https://ig.me/m/sri_kaleeshwari_aquafarm",
    linkedin: "sri-kaleeshwari-aqua-farm",
    youtube: "SriKaleeshwariAqua",
    facebook: "srikaleeshwariaqua"
  },
  certifications: [
    { name: "CAA Approved", agency: "Coastal Aquaculture Authority, Govt of India", code: "CAA/FARM/TN/2018/842" },
    { name: "MPEDA Registered", agency: "Marine Products Export Development Authority", code: "MPEDA/AQ/TN/0984" },
    { name: "ISO 9001:2015", agency: "International Quality Management Standard", code: "QMS-AQ-2023-11" },
    { name: "FSSAI Compliant", agency: "Food Safety and Standards Authority of India", code: "FSSAI-LIC-124200" }
  ]
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "freshwater-fish-farming",
    title: "Freshwater Fish Farming",
    shortDesc: "High-density commercial farming of genetically improved Tilapia, Pangasius, Catla, and Rohu using zero-discharge biofloc ponds.",
    category: "fish",
    icon: "Fish",
    heroTag: "HIGH YIELD • HIGH DENSITY",
    depthTag: "-6 M · SUNLIGHT ZONE",
    description: "Sri Kaleeshwari Aqua Farm pioneers scientific freshwater fish aquaculture across Tamil Nadu and coastal India. By coupling advanced dissolved oxygen automation, probiotic dosing, and genetically resilient broodstock, we achieve rapid biomass growth while protecting regional water tables.",
    keyFeatures: [
      "Genetically Superior Fry (Catla, Rohu, Gift Tilapia, Pangasius)",
      "High-Survival Acclimatization Protocol (98%+ Survival)",
      "Biosecure lined nursery and grow-out ponds",
      "Floating micro-pellet precision feeding schedules"
    ],
    benefits: [
      "Consistent 30% higher growth cycle compared to traditional wild-harvested fingerlings",
      "Robust immunity against common bacterial dropsy and fin rot",
      "Predictable harvest cycles tailored for domestic and processing markets"
    ],
    technologies: [
      "Biofloc microbial protein recycling",
      "Continuous DO monitoring with Venturi aspirators",
      "Multi-tier sedimentation filtration"
    ],
    targetAudience: "Commercial fish farmers, estate pond owners, regional wholesalers",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "shrimp-farming",
    title: "Vannamei & Tiger Shrimp Culture",
    shortDesc: "State-of-the-art Specific Pathogen Free (SPF) Litopenaeus vannamei and Penaeus monodon grow-out systems adhering to CAA guidelines.",
    category: "shrimp",
    icon: "Shell",
    heroTag: "EXPORT GRADE • SPF SEED",
    depthTag: "-14 M · REEF SLOPE",
    description: "Our shrimp culture operations set the benchmark for biosecure brackish and coastal farming. Employing HDPE-lined reservoirs, central drainage sludges, and strict quarantine protocols, we produce disease-free, export-grade vannamei with exceptional count per kilogram.",
    keyFeatures: [
      "100% SPF certified broodstock lineage",
      "HDPE 500-micron geotextile pond lining",
      "Automated auto-feeders with acoustic appetite sensing",
      "Daily viral and vibrio microbiological testing"
    ],
    benefits: [
      "Uniform size distribution (20-30 count premium export grade)",
      "Low Feed Conversion Ratio (FCR < 1.25)",
      "Zero antibiotic usage (100% export compliance)"
    ],
    technologies: [
      "Spiral paddlewheel aeration arrays (8 HP per acre)",
      "Probiotic competitive exclusion culture",
      "Central sump sludge siphon removal"
    ],
    targetAudience: "Seafood processors, export syndicates, progressive brackish-water farmers",
    image: "https://images.unsplash.com/photo-1559884743-74a57598c6c7?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "hatchery-services",
    title: "Biosecure Hatchery & Seed Services",
    shortDesc: "Controlled SPF larval rearing, salinity-conditioned post-larvae (PL 10–15), and fingerlings delivered with live oxygen packing.",
    category: "hatchery",
    icon: "Sparkles",
    heroTag: "CONTROLLED BREEDING • 99% PACK SURVIVAL",
    depthTag: "-26 M · TWILIGHT ZONE",
    description: "Our climate-controlled indoor hatchery facility houses dedicated maturation bays, larval rearing tanks, and live feed enrichment rooms. We supply certified pathogen-screened seed directly to farmers across South India with doorstep oxygenated live transport.",
    keyFeatures: [
      "PCR-tested SPF Post Larvae (PL 10 to PL 15)",
      "Graded uniform fish fingerlings (2 inch to 4 inch size)",
      "Nutrient enrichment via pure live copepods and artemia nauplii",
      "Triple-bagged oxygen packaging tested for up to 36-hour transit"
    ],
    benefits: [
      "Guaranteed zero White Spot Syndrome Virus (WSSV) and EHP pathogen presence",
      "Immediate feeding response upon pond stocking",
      "Free water salinity and pH acclimatization charts with every dispatch"
    ],
    technologies: [
      "Micro-filtered UV-sterilized oceanic intake water",
      "Live microalgae (Chaetoceros & Isochrysis) culture chambers",
      "Automated photoperiod and thermal regulation"
    ],
    targetAudience: "Shrimp and fish culturists requiring certified seed across India",
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "aquaculture-consultancy",
    title: "Aquaculture Consultancy & Turnkey Setup",
    shortDesc: "Full-lifecycle engineering: soil testing, pond topography, biosecurity masterplans, subsidy paperwork, and farm harvest audits.",
    category: "consultancy",
    icon: "Compass",
    heroTag: "EXPERT SCIENTISTS • TURNKEY EPC",
    depthTag: "-20 M · RESEARCH CORRIDOR",
    description: "Leverage over two decades of practical, ground-tested aquaculture engineering. From raw land appraisal and soil chemistry analysis to complete EPC pond construction and government subsidy guidance, our agronomists de-risk your investment.",
    keyFeatures: [
      "Site feasibility, soil seepage testing, and water profile analysis",
      "CAD pond layout, inlet/drainage slope design, and biosecurity fencing",
      "Farming SOP manuals, daily logs, and farm worker training",
      "Assistance with CAA approvals, electricity subsidies, and bank DPRs"
    ],
    benefits: [
      "Avoid costly construction mistakes and improper water gradient layouts",
      "Lower operational risk with preventive bio-defense protocols",
      "Achieve operational profitability in the first harvest cycle"
    ],
    technologies: [
      "Hydraulic soil compaction standards",
      "Digital multi-point farm mapping",
      "Remote farm telemetry monitoring"
    ],
    targetAudience: "New agricultural investors, farm owners converting agricultural land, corporate agribusinesses",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "pond-management",
    title: "Pond Setup & Biofloc Management",
    shortDesc: "Comprehensive biosecurity management, biofloc microbial conditioning, bottom soil sanitization, and algae bloom control.",
    category: "infrastructure",
    icon: "Layers",
    heroTag: "ZERO DISCHARGE • BIOFLOC SYSTEMS",
    depthTag: "-10 M · POND SURFACE",
    description: "Maintaining optimal pond bottom ecology is the secret to high survival. We deliver turnkey pond management regimes that balance carbon-nitrogen ratios, neutralize black soil toxicity, and manage phytoplankton crashes before they endanger your crop.",
    keyFeatures: [
      "Carbon-to-nitrogen ratio calibration (molasses and wheat bran dosing)",
      "Probiotic soil conditioning (Bacillus subtilis & Thiobacillus)",
      "Sludge removal and pond bottom drying protocols",
      "Dissolved oxygen buffer strategies for cloudy and rainy days"
    ],
    benefits: [
      "Zero water discharge requirements, conserving valuable groundwater",
      "In-situ microbial flocs serve as 24/7 natural supplemental nutrition",
      "Reduction of toxic unionized ammonia (NH3) to undetectable levels"
    ],
    technologies: [
      "Imhoff cone floc volume indexing",
      "Submersible turbo-aerators",
      "Bacterial inoculum bioreactors"
    ],
    targetAudience: "Commercial biofloc operators, intensive RAS farmers, community cooperatives",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "fish-feed-supply",
    title: "Nutritional Feed Supply & Live Feeds",
    shortDesc: "Formulated floating extruded pellets, sinking shrimp crumble, and live micro-crustacean starters (copepods, rotifers, artemia).",
    category: "feed",
    icon: "Wheat",
    heroTag: "OPTIMAL FCR • BALANCED AMINO ACIDS",
    depthTag: "-8 M · NUTRITION ZONE",
    description: "Feed represents up to 60% of aquaculture expenditure. We manufacture and distribute nutrient-dense, water-stable extruded feeds enriched with marine phospholipids, organic trace minerals, and immunostimulants that accelerate weight gain without fouling pond water.",
    keyFeatures: [
      "Floating micro-pellets (0.8mm to 4mm) with > 2-hour water stability",
      "High-protein broodstock conditioner feeds (40% - 44% Crude Protein)",
      "Live feed biological cultures (Phytoplankton, Copepods, Rotifers)",
      "Vitamin C and Beta-Glucan immune boost formulations"
    ],
    benefits: [
      "Minimal nutrient leaching maintains crystal-clear water quality",
      "Exceptional feed conversion ratio (FCR 1.15 to 1.35)",
      "Vibrant fish skin coloration and firm meat texture preferred by buyers"
    ],
    technologies: [
      "Twin-screw twin-barrel extrusion processing",
      "Vacuum lipid coating technology",
      "Cold-chain moisture sealed multi-wall kraft packaging"
    ],
    targetAudience: "Hatcheries, nursery operators, commercial fish & shrimp producers",
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "water-quality-monitoring",
    title: "Water Quality Testing & Lab Diagnostics",
    shortDesc: "On-site and remote lab diagnostics for DO, pH, salinity, alkalinity, ammonia, nitrite, vibrio plate counts, and PCR disease screening.",
    category: "consultancy",
    icon: "Activity",
    heroTag: "PREVENTIVE HEALTH • REAL-TIME DATA",
    depthTag: "-30 M · DIAGNOSTIC LAB",
    description: "Sudden water quality spikes can wipe out entire ponds overnight. Our ISO-certified aquaculture testing laboratory in Tamil Nadu processes water, soil, and tissue samples with rapid 4-hour turnaround to identify stress factors before mortality occurs.",
    keyFeatures: [
      "Multi-parameter water analysis: DO, pH, Salinity, Alkalinity, Hardness",
      "Toxic gas quantification: TAN (Total Ammonia Nitrogen), NO2, H2S",
      "Microbiology: TCBS agar vibrio green/yellow colony count",
      "PCR diagnostics for WSSV, EHP, IHHNV, and EMS/AHPND"
    ],
    benefits: [
      "Early warning alerts enable corrective dosing before disease outbreaks",
      "Accurate water conditioning recommendations tailored to your soil",
      "Detailed analytical certificates for export compliance audits"
    ],
    technologies: [
      "Optical dissolved oxygen spectrophotometers",
      "Real-time quantitative PCR thermal cyclers",
      "Automated digital refractometers and titrators"
    ],
    targetAudience: "Pond operators requiring preventive surveillance and emergency outbreak response",
    image: "https://images.unsplash.com/photo-1579165466791-788226ab77b6?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "harvest-support",
    title: "Harvest Logistics & Marketing Support",
    shortDesc: "End-to-end harvest planning, night-time temperature chilling, oxygenated live hauling, and transparent market link-up with exporters.",
    category: "fish",
    icon: "Truck",
    heroTag: "COLD CHAIN • TOP VALUE HARVEST",
    depthTag: "-40 M · HARVEST & DISPATCH",
    description: "From counting and grading to immediate slush-ice chilling and transport, we handle harvest operations with surgical precision to ensure zero quality degradation. We connect our network of farmers directly with institutional seafood buyers and exporters to guarantee top market prices.",
    keyFeatures: [
      "Professional harvest crews equipped with clean knotless seine nets",
      "Immediate slush-icing to arrest bacterial breakdown within 90 seconds",
      "Specialized live-fish transportation tankers with liquid oxygen manifolds",
      "Direct linkage with MPEDA-registered processing plants & exporters"
    ],
    benefits: [
      "Eliminate middlemen commissions and predatory local price gauging",
      "Zero body discoloration or soft-shell rejection at factory gates",
      "Prompt transparent digital weighment and rapid payment settlements"
    ],
    technologies: [
      "Automated laser shrimp sorters and weight counters",
      "GPS-monitored refrigerated reefers with continuous temperature loggers",
      "Food-grade hygienic poly-insulated holding bins"
    ],
    targetAudience: "Farmers ready for harvest, seafood exporters, major metro fish markets",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1200&q=80"
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    name: "Pond Preparation & Liming",
    depth: "-0 M · SURFACE",
    summary: "Sun-drying, mechanical desiltation, tilling, and agricultural limestone / dolomite soil conditioning to eliminate pathogens and optimize soil pH (7.5 - 8.2).",
    duration: "10 - 14 Days",
    keyFactor: "pH & Soil Organic Matter"
  },
  {
    step: "02",
    name: "Water Intake & Biosecurity",
    depth: "-6 M · FILTRATION",
    summary: "Intake water through 60-mesh multi-stage plankton filtration nets, reservoir sedimentation, chlorination disinfection, and de-chlorination aeration.",
    duration: "5 - 7 Days",
    keyFactor: "100% Wild Vector Exclusion"
  },
  {
    step: "03",
    name: "Seed Selection & PCR Testing",
    depth: "-12 M · QUARANTINE",
    summary: "Procurement of SPF certified post-larvae/fry, rigorous microscopic stress tests (salinity shock & formalin dip), and batch PCR pathogen confirmation.",
    duration: "2 - 3 Days",
    keyFactor: "Zero WSSV / EHP Pathogens"
  },
  {
    step: "04",
    name: "Stocking & Acclimatization",
    depth: "-18 M · STOCKING",
    summary: "Gradual water temperature equalization (within 1°C) and salinity transition over 2-3 hours during cool morning or evening hours to eliminate stocking shock.",
    duration: "Day of Stocking",
    keyFactor: "> 98% Initial Survival"
  },
  {
    step: "05",
    name: "Precision Feeding & Probiotics",
    depth: "-24 M · CULTURE",
    summary: "Demand-based feeding using check trays, automated solar feed dispensers, and weekly gut-friendly probiotic inoculation to maximize assimilation.",
    duration: "90 - 120 Days",
    keyFactor: "FCR < 1.25 Achieved"
  },
  {
    step: "06",
    name: "Water Monitoring & Biosecurity",
    depth: "-32 M · SURVEILLANCE",
    summary: "Continuous tracking of DO, pH, alkalinity, and ammonia levels twice daily. Preventative mineral supplementation during moulting cycles.",
    duration: "Continuous",
    keyFactor: "DO Maintained > 5.0 ppm"
  },
  {
    step: "07",
    name: "Harvesting & Cold-Chain Dispatch",
    depth: "-40 M · HARVEST",
    summary: "Rapid night harvest, immediate ice slurry shock chilling to 0°C, precision grading, and dispatch via refrigerated or live-transport vehicles.",
    duration: "Harvest Night",
    keyFactor: "100% Export Quality Freshness"
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Experienced Team",
    desc: "Over 25 years of aquaculture agronomy and marine biology leadership steering practical, field-proven farming success.",
    icon: "Award",
    metric: "25+ Yrs Field Expertise"
  },
  {
    title: "Modern Infrastructure",
    desc: "High-density lined ponds, continuous optical DO telemetrics, and climate-controlled biosecure hatchery environments.",
    icon: "Cpu",
    metric: "1,200+ Acres Under Management"
  },
  {
    title: "Sustainable Practices",
    desc: "Zero-discharge biofloc systems, solar farm operations, and zero preventive antibiotic protocols safeguarding public health.",
    icon: "Leaf",
    metric: "100% Antibiotic-Free"
  },
  {
    title: "24/7 Technical Support",
    desc: "Dedicated field technicians and laboratory agronomists providing continuous on-site pond diagnostics and guidance.",
    icon: "Headphones",
    metric: "4-Hour Lab Turnaround"
  },
  {
    title: "Strict Quality Assurance",
    desc: "Every batch of seed, feed, and harvested product is multi-stage PCR tested and certified for domestic and export compliance.",
    icon: "ShieldCheck",
    metric: "99.2% Customer Satisfaction"
  },
  {
    title: "Reliable Supply Chain",
    desc: "Fleet of specialized oxygen-manifold live fry transport vehicles and chilled reefers guaranteeing freshness at your farm.",
    icon: "Truck",
    metric: "Pan-India Live Transit"
  }
];

export const KEY_STATISTICS = [
  { label: "Years of Experience", value: "25+", subtext: "Established in 2001 in Tamil Nadu" },
  { label: "Acres Managed", value: "1,200+", subtext: "High-density biosecure water bodies" },
  { label: "Happy Farmers Empowered", value: "8,500+", subtext: "Across Tamil Nadu, AP, & Kerala" },
  { label: "Annual Biomass Production", value: "15,000+ MT", subtext: "Freshwater fish & SPF shrimp" }
];

export const TESTIMONIALS = [
  {
    name: "S. Rajendran",
    role: "Commercial Fish Farmer",
    location: "Thanjavur, Tamil Nadu",
    review: "Sri Kaleeshwari Aqua Farm transformed my 10-acre farm. Their GIFT Tilapia fingerlings had exceptional vigor, and their biofloc advisory reduced our feed expenditure by 22%. We achieved 18 tons per acre in our very first crop.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    crop: "GIFT Tilapia"
  },
  {
    name: "Dr. K. Annamalai",
    role: "Shrimp Culturist & Hatchery Partner",
    location: "Nellore, Andhra Pradesh",
    review: "Their SPF Vannamei post-larvae (PL-12) were certified clean on PCR, and the survival rate in our nursery reached an astounding 97%. Their team helped us calibrate our paddlewheel aeration setup. Unrivaled professionalism.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    crop: "Vannamei Shrimp"
  },
  {
    name: "Murugan Selvam",
    role: "Pond Management Operator",
    location: "Nagapattinam, Tamil Nadu",
    review: "Whenever we noticed sudden nitrite spikes or dissolved oxygen dips, Sri Kaleeshwari's diagnostic lab sent immediate corrective dosing instructions within 3 hours. They saved our entire grow-out pond.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    crop: "Catla & Rohu Carp"
  },
  {
    name: "P. Vigneshwaran",
    role: "Seafood Procurement Manager",
    location: "Kochi, Kerala",
    review: "The cold-chain harvest management from Sri Kaleeshwari is world-class. Uniform size grading, flawless black tiger shrimp count, and zero chemical residues. Our international buyers are consistently impressed.",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    crop: "Black Tiger Shrimp"
  }
];

export const SUSTAINABILITY_PILLARS: SustainabilityPillar[] = [
  {
    id: "water-conservation",
    title: "Water Conservation & Recirculation",
    subtitle: "Conserving India's Vital Blue Reserves",
    metric: "72% Reduction in Water Usage",
    description: "Our biofloc and Recirculating Aquaculture Systems (RAS) cycle and treat water through biological nitrification and sediment settling basins, allowing up to 8 months of intensive farming without continuous groundwater draw.",
    highlights: [
      "Multi-stage sand and bio-media filtration loops",
      "Rainwater harvesting collection ponds totaling 50 million liters",
      "Zero surface effluent runoff into pristine local estuaries"
    ],
    icon: "Droplets"
  },
  {
    id: "biosecure-antibiotic-free",
    title: "100% Antibiotic-Free Protocol",
    subtitle: "Natural Microbial Immunity",
    metric: "0% Synthetic Antibiotics",
    description: "We completely reject the use of prophylactic antibiotics. By cultivating beneficial lactic acid and bacillus bacteria in the water column, pathogenic Vibrio species are naturally out-competed, yielding pure seafood.",
    highlights: [
      "Continuous TCBS agar microbiological monitoring",
      "Phytogenic herbal extract feed supplements (Garlic & Oregano extracts)",
      "Strict bird netting and crab fencing perimeter defense"
    ],
    icon: "ShieldAlert"
  },
  {
    id: "solar-green-energy",
    title: "Green Energy & Solar Farm Power",
    subtitle: "Harnessing the Coastal Sun",
    metric: "450 kW Grid-Connected Solar",
    description: "Continuous aeration demands substantial energy. We have installed rooftop and embankment solar arrays that power 65% of our daily aeration and pump operations, slashing greenhouse emissions.",
    highlights: [
      "Solar-driven variable frequency drive (VFD) aerators",
      "Energy-efficient high-volume low-pressure root blowers",
      "Offsetting over 380 metric tons of CO2 annually"
    ],
    icon: "Sun"
  },
  {
    id: "sludge-nutrient-recycling",
    title: "Circular Sludge & Nutrient Recycling",
    subtitle: "From Pond Waste to Organic Fertilizer",
    metric: "100% Waste Converted",
    description: "Pond bottom organic sediments are systematically evacuated through central drain sumps, solar-dried, and enriched with beneficial microbes to create high-grade bio-fertilizer for coconut and paddy plantations.",
    highlights: [
      "Zero accumulation of toxic hydrogen sulfide in pond bottoms",
      "Partnership with 400+ local agricultural farmers who use our compost",
      "True circular agriculture integrating aquaculture with horticulture"
    ],
    icon: "Recycle"
  },
  {
    id: "community-empowerment",
    title: "Coastal Community Empowerment",
    subtitle: "Upskilling Local Farming Families",
    metric: "1,400+ Rural Jobs Created",
    description: "We actively invest in training coastal youth and traditional fishermen in modern biosecure aquaculture techniques, providing steady living wages, safety gear, and healthcare access.",
    highlights: [
      "Free monthly aquaculture workshops in Tamil and English",
      "Women-led microalgae culture and feed packaging teams",
      "Fair-price harvest purchase guarantee for enrolled partner farmers"
    ],
    icon: "Users"
  },
  {
    id: "mangrove-conservation",
    title: "Mangrove & Estuary Protection",
    subtitle: "Safeguarding Coastal Biodiversity",
    metric: "15,000 Mangrove Saplings Planted",
    description: "Our facilities maintain a mandatory 200-meter green buffer from coastal wetlands. We actively sponsor and participate in mangrove reforestation programs along the Bay of Bengal coastline.",
    highlights: [
      "Dedicated Rhizophora and Avicennia mangrove nurseries",
      "Preservation of native wading bird nesting sanctuaries",
      "Regular public coastal cleanup drives"
    ],
    icon: "Trees"
  }
];

export const FACILITIES_LIST: FacilityItem[] = [
  {
    id: "indoor-hatchery-complex",
    name: "Indoor SPF Hatchery & Maturation Complex",
    area: "35,000 sq.ft Climate-Controlled Facility",
    depthTag: "-28 M · HATCHERY VAULT",
    description: "Fully sealed biosecure facility equipped with HEPA air filters, micro-filtered seawater UV sterilization, automated photoperiod cycles, and broodstock maturation tanks.",
    specs: [
      { label: "Annual Seed Capacity", value: "350 Million Post-Larvae" },
      { label: "Water Filtration", value: "0.2 Micron Multi-Media + Ozone" },
      { label: "Temperature Control", value: "28.5°C ± 0.5°C Regulated" },
      { label: "Air Filtration", value: "Positive Pressure Cleanrooms" }
    ],
    features: [
      "Live microalgae and rotifer continuous cultivation photobioreactors",
      "Isolated quarantine holding tanks for imported SPF broodstock",
      "Automated nauplii collection and gentle photo-taxis sorting"
    ],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "biosecure-growout-ponds",
    name: "HDPE-Lined Intensive Grow-Out Ponds",
    area: "120 Acres Dedicated Water Surface",
    depthTag: "-14 M · GROW-OUT WATERS",
    description: "Engineered grow-out ponds lined with 500-micron virgin HDPE geomembrane, sloped central siphon drains, and automated aeration grids engineered to support up to 60 shrimp / m².",
    specs: [
      { label: "Pond Units", value: "85 Biosecure Lined Ponds" },
      { label: "Aeration Density", value: "8–12 HP per 0.5 Hectare" },
      { label: "Lining Material", value: "500μ Virgin HDPE (UV-Treated)" },
      { label: "Average Survival", value: "> 92% per Crop Cycle" }
    ],
    features: [
      "Central sludge drainage sumps for continuous waste removal",
      "Double crab-barrier fencing and anti-bird overhead filament grids",
      "Dedicated solar backup generators guaranteeing zero power disruption"
    ],
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "water-treatment-ras",
    name: "Multi-Stage Water Treatment & RAS Station",
    area: "5 Million Liters/Day Capacity",
    depthTag: "-22 M · FILTRATION PLANT",
    description: "Industrial water purification plant combining high-rate sand filters, moving bed biofilm reactors (MBBR), protein skimmers, and high-intensity UV irradiation.",
    specs: [
      { label: "Processing Volume", value: "5,000,000 L / Day" },
      { label: "Nitrification Media", value: "K1 Moving Bed Micro-Carriers" },
      { label: "Sterilization", value: "Ozone Gas Infusion + Industrial UV" },
      { label: "Recirculation Rate", value: "85% Closed-Loop Recovery" }
    ],
    features: [
      "Elimination of bacterial pathogens, wild fish larvae, and parasites",
      "Mineralization basin for calcium and magnesium balancing",
      "Real-time SCADA digital dashboard monitoring flow and purity"
    ],
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "feed-nutrition-lab",
    name: "Feed Storage & Specialized Nutrition Laboratory",
    area: "18,000 sq.ft Temperature-Controlled Depot",
    depthTag: "-10 M · NUTRITION LAB",
    description: "Insulated dehumidified storage warehousing 1,000 metric tons of premium aquatic feeds, adjacent to an advanced analytical laboratory for proximate feed analysis.",
    specs: [
      { label: "Storage Capacity", value: "1,000 Metric Tons" },
      { label: "Humidity Control", value: "< 55% Relative Humidity" },
      { label: "Analytical Tools", value: "Kjeldahl Nitrogen & Bomb Calorimeter" },
      { label: "Shelf Life Preservation", value: "6 Months Guaranteed Integrity" }
    ],
    features: [
      "Palletized automated storage with batch RFID tracking",
      "Custom oil-top-coating equipment for medication/vitamin infusion",
      "Dedicated cool-room for biological live feed cultures"
    ],
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "cold-chain-processing",
    name: "Hygienic Harvest & Cold-Chain Processing Hub",
    area: "22,000 sq.ft Export Standard Facility",
    depthTag: "-40 M · HARVEST TERMINAL",
    description: "HACCP and MPEDA compliant harvest terminal with automated mechanical grading, 50-ton daily slurry ice production, and pre-cooling holding chambers.",
    specs: [
      { label: "Daily Ice Capacity", value: "50 Metric Tons Slurry Ice" },
      { label: "Cold Storage Temp", value: "-18°C Controlled Chambers" },
      { label: "Grading Speed", value: "2.5 Metric Tons / Hour" },
      { label: "Dispatch Fleet", value: "12 Refrigerated Reefer Trucks" }
    ],
    features: [
      "Stainless steel SS-316 food-grade grading tables and roller sorters",
      "Immediate chilled core temperature reduction to 0.5°C within 3 minutes",
      "Electronic trace-tagging with QR codes identifying pond origin"
    ],
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1200&q=80"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "GIFT Tilapia Broodstock Selection",
    category: "Fish Farming",
    location: "Freshwater Breeding Ponds",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80",
    caption: "Inspection of healthy, fast-growing GIFT Tilapia parent stock conditioned on high-protein pellets.",
    dimensions: "1920x1080"
  },
  {
    id: "g2",
    title: "Vannamei Shrimp Night Harvest",
    category: "Harvesting",
    location: "Pond Cluster B, Nagapattinam",
    image: "https://images.unsplash.com/photo-1559884743-74a57598c6c7?auto=format&fit=crop&w=1000&q=80",
    caption: "Night-time harvest under floodlights to preserve optimum muscle firmness and shell sheen.",
    dimensions: "1920x1080"
  },
  {
    id: "g3",
    title: "SPF Larval Rearing Tanks",
    category: "Hatchery",
    location: "Indoor Marine Hatchery Unit",
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=1000&q=80",
    caption: "Circular parabolic tanks with continuous micro-bubble aeration cultivating PL post-larvae.",
    dimensions: "1920x1080"
  },
  {
    id: "g4",
    title: "HDPE Lined Reservoir & Ponds",
    category: "Facilities",
    location: "Coastal Farm Sector",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80",
    caption: "Acre-wide geomembrane lined ponds with perimeter netting and paddlewheel aeration arrays.",
    dimensions: "1920x1080"
  },
  {
    id: "g5",
    title: "Live Microalgae Photobioreactors",
    category: "Hatchery",
    location: "Live Feed Enrichment Wing",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
    caption: "Pure strains of Chaetoceros and Isochrysis microalgae cultivated under precision artificial spectra.",
    dimensions: "1920x1080"
  },
  {
    id: "g6",
    title: "Microbial Biofloc Sampling",
    category: "Fish Farming",
    location: "Zero-Discharge Test Ponds",
    image: "https://images.unsplash.com/photo-1579165466791-788226ab77b6?auto=format&fit=crop&w=1000&q=80",
    caption: "Microbiologist assessing Imhoff cone floc density to adjust molasses-to-feed carbon ratios.",
    dimensions: "1920x1080"
  },
  {
    id: "g7",
    title: "Export Packing & Slush Ice Chilling",
    category: "Harvesting",
    location: "Chilled Terminal Hub",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1000&q=80",
    caption: "Immediate 0°C ice slurry immersion locking in sea-fresh flavor within 90 seconds of net collection.",
    dimensions: "1920x1080"
  },
  {
    id: "g8",
    title: "Multi-Tier Water Filtration Bank",
    category: "Facilities",
    location: "RAS Plant Center",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=80",
    caption: "High-pressure sand and biological filter banks processing 5 million liters of clean intake water daily.",
    dimensions: "1920x1080"
  },
  {
    id: "g9",
    title: "Tiger Shrimp (P. monodon) Sizing",
    category: "Shrimp Farming",
    location: "Quarantine Testing Bay",
    image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=1000&q=80",
    caption: "Premium 15-count black tiger shrimp demonstrating deep natural pigmentation and thick cuticle.",
    dimensions: "1920x1080"
  }
];

