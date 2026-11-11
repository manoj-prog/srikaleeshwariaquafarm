export interface BreedingLine {
  id: string;
  slug: string;
  name: string;
  badge: string;
  badgeColor: string;
  shortDesc: string;
  keyTraits: string;
  careLevel: string;
  careLevelColor: string;
  waterPh: string;
  waterTemp: string;
  tds: string;
  image: string;
  description: string;
  strains: string[];
  breedingHighlights: string[];
  careGuide: string[];
}

export interface PackagingStep {
  step: number;
  title: string;
  description: string;
  color: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Flowerhorn' | 'Neocaridina Shrimps' | 'Angelfish' | 'Platinum Crystal Molly' | 'Breeding Setup';
  location?: string;
  image: string;
  caption: string;
  dimensions: string;
}

export const COMPANY_INFO = {
  name: "Sri Kaleeshwari Aqua Farm",
  logo: "/logo.png",
  studioTitle: "Premium Aquarium Livestock Breeding Studio",
  tagline: "Master-Bred Exotic Aquatic Lines With Superior Genetics.",
  heroSummary:
    "Specialized in high-kok Flowerhorn Fish, vibrant Neocaridina Shrimps, exquisite Angelfish strains, and show-grade Platinum Crystal White Mollies. Raised in conditioned, high-stability parameters.",
  experience: "2 Years of Dedicated Breeding Focus",
  foundedYear: 2024,
  headquarters: "2/3 Pudhukamarajar nagar, Royapuram, Chennai 600013, Tamil Nadu, India",
  address: "2/3 Pudhukamarajar nagar, Royapuram, Chennai 600013",
  phone: "+91 81220 66281",
  rawPhone: "+918122066281",
  email: "bhuvaneshanandh@gmail.com",
  salesEmail: "bhuvaneshanandh@gmail.com",
  whatsappNumber: "+918122066281",
  mapUrl: "https://maps.app.goo.gl/grt9o3VgVpR6zNmG9",
  workingHours: "Monday – Saturday: 8:00 AM – 7:00 PM IST",
  socials: {
    instagram: "@sri_kaleeshwari_aquafarm",
    instagramUrl: "https://www.instagram.com/sri_kaleeshwari_aquafarm/",
    instagramDmUrl: "https://ig.me/m/sri_kaleeshwari_aquafarm",
  },
};

export const BREEDING_LINES: BreedingLine[] = [
  {
    id: "flowerhorn",
    slug: "/flowerhorn",
    name: "Flowerhorn Breeding",
    badge: "AGGRESSIVE HEAD BUMP",
    badgeColor: "bg-pink-500/20 text-pink-300 border-pink-500/40",
    shortDesc:
      "High-profile Kamfa, Super Red Dragon, and Master Kok strains. Selected for massive nuchal humps, full body pearls, and vibrant red saturation.",
    keyTraits: "Big Kok, Vivid Pearls",
    careLevel: "Intermediate",
    careLevelColor: "text-amber-400",
    waterPh: "7.4 – 8.0",
    waterTemp: "28°C – 30°C",
    tds: "180 – 260 ppm",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80",
    description:
      "Our Flowerhorn breeding program focuses strictly on genetics that produce high-dome water kok (nuchal humps), sharp fiery red coloration, and cross-pearl coverage. Every fry and juvenile is conditioned in individual growth compartments to foster aggressive personality and bold demeanor.",
    strains: [
      "Kamfa F3 / F4 Selected Lines",
      "Super Red Dragon (SRD) High-Kok",
      "Master Kok Competition Grade",
      "Golden Base / Fader Strains",
    ],
    breedingHighlights: [
      "Individual cubicle rearing prevents fin nipping and territorial stress",
      "Nutrient-dense feeding regime using high-protein krill & color enhancers",
      "Strict culling ensures only top 15% pearl and kok potential are released",
      "Mirror training routine developed for maximum interactive personality",
    ],
    careGuide: [
      "Minimum tank size: 50–75 gallons for an adult specimen",
      "Maintain stable temperature between 28°C to 30°C with reliable heater",
      "Weekly 30% water change with treated, aged water",
      "High aeration and efficient canister or sump filtration",
    ],
  },
  {
    id: "neocaridina-shrimps",
    slug: "/neocaridina-shrimps",
    name: "Neocaridina Shrimps",
    badge: "HIGH-GRADE COLONY",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
    shortDesc:
      "Deeply culled lines of Bloody Mary Cherry, Blue Dream, Yellow Neon Backstripe, and Jade Green. Bred on home water parameters for high survival rates.",
    keyTraits: "Full Opaque Shells",
    careLevel: "Beginner Friendly",
    careLevelColor: "text-emerald-400",
    waterPh: "6.8 – 7.5",
    waterTemp: "22°C – 26°C",
    tds: "180 – 220 ppm",
    image:
      "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=1000&q=80",
    description:
      "Unlike sensitive imported caridina, our Neocaridina colonies are bred and raised in conditioned Chennai tap water parameters. This gives them robust shells, exceptional molt success, and near-100% survival upon arriving at your planted community tank.",
    strains: [
      "Bloody Mary & Fire Red Cherry (Solid Opaque Carapace)",
      "Blue Dream & Deep Velvet Blue",
      "Yellow Neon Golden Backstripe",
      "Green Jade & Black Rose Lines",
    ],
    breedingHighlights: [
      "Conditioned on balanced home water parameters (pH 7.0–7.4, TDS ~200)",
      "Strict continuous culling maintaining pure color density without wild reversion",
      "Natural biofilm feeding with Indian Almond leaves, chola wood & spirulina",
      "Safe mineral supplementation supporting seamless shell moulting",
    ],
    careGuide: [
      "Ideal tank size: 5 to 20 gallon planted aquarium",
      "Sponge filtration to safeguard baby shrimp shrimplets",
      "Keep stable TDS; avoid sudden salinity or temperature swings",
      "Abundant mosses (Java, Christmas, or Phoenix moss) for grazing",
    ],
  },
  {
    id: "angelfish",
    slug: "/angelfish",
    name: "Angelfish Strains",
    badge: "ELEGANT FINS",
    badgeColor: "bg-sky-500/20 text-sky-300 border-sky-500/40",
    shortDesc:
      "Graceful Platinum Blue, Veil Tail, Marble, and Pinoy Paraiba Angels. Long symmetrical finnage paired with peaceful community temperament.",
    keyTraits: "Tall Fins, Iridescent",
    careLevel: "Easy - Medium",
    careLevelColor: "text-teal-300",
    waterPh: "6.5 – 7.4",
    waterTemp: "26°C – 28°C",
    tds: "120 – 190 ppm",
    image:
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=1000&q=80",
    description:
      "Selective pairing of parent breeders ensures extraordinary vertical height, straight dorsal fins, and breathtaking iridescent metallic sheen. Raised peacefully in community aquariums, our Angelfish are sociable, calm, and feed eagerly from hand.",
    strains: [
      "Platinum White & Metallic Blue Angels",
      "Koi Angels (Deep Orange Cap & Calico Mottling)",
      "Long Veil Tail Symmetrical Strain",
      "Pinoy Paraiba & Philippine Blue Gene",
    ],
    breedingHighlights: [
      "Tall rearing tanks prevent dorsal fin bending or stunted height",
      "Live artemia nauplii and enriched daphnia conditioning for breeders",
      "Zero aggressive wild strains; peaceful temperament established across generations",
      "Healthy gill formation and clean, clamped-free finnage",
    ],
    careGuide: [
      "Minimum tank height: At least 18–24 inches tall to support vertical fins",
      "Gentle water flow with planted shelter (Vallisneria, Amazon Swords)",
      "Feed variety of sinking pellets, freeze-dried bloodworms, and flakes",
      "Keep with peaceful community tetras, rasboras, and corydoras",
    ],
  },
  {
    id: "platinum-crystal-molly",
    slug: "/platinum-crystal-molly",
    name: "Platinum Crystal Molly",
    badge: "PURE WHITE STRAIN",
    badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    shortDesc:
      "Flawless metallic white sheen without yellowing. Available in high-fin sailfin and lyretail varieties. Prolific breeders and energetic tank cleaners.",
    keyTraits: "Pure Metallic Pearl Sheen",
    careLevel: "Beginner",
    careLevelColor: "text-emerald-400",
    waterPh: "7.2 – 8.2",
    waterTemp: "24°C – 28°C",
    tds: "200 – 350 ppm",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80",
    description:
      "A true showstopper strain characterized by an immaculate, snow-white metallic sheen that retains its purity without muddy spotting or yellow discolouration. Energetic and inquisitive, these mollies constantly clean biofilm and soft algae from plants and glass.",
    strains: [
      "High-Fin Sailfin Platinum Crystal",
      "Lyretail Platinum Pearl Molly",
      "Classic C-Fin Pure White Line",
      "Short-Body Balloon Platinum Strain",
    ],
    breedingHighlights: [
      "100% solid white lineage with zero black spots or translucent patches",
      "High fertility and strong fry survival in community livebearer setups",
      "Active grazing instinct continuously clearing tank biofilm and algae",
      "Extremely hardy immune system accustomed to diverse freshwater setups",
    ],
    careGuide: [
      "Tank size: 15+ gallons with swimming room",
      "Thrives in slightly hard, alkaline water (pH 7.5–8.2)",
      "Add vegetable matter or spirulina flakes to daily feeding",
      "Wonderful tankmates for peaceful community fish and live plants",
    ],
  },
];

export const PACKAGING_STEPS: PackagingStep[] = [
  {
    step: 1,
    title: "Purge & Starve",
    description:
      "Fish are fasted for 24–48 hours before packing to ensure pristine water conditions during transit.",
    color: "from-cyan-500 to-teal-400",
  },
  {
    step: 2,
    title: "Pure Oxygen Bagging",
    description:
      "Double-bagged in heavy-gauge leakproof plastic with 70% pure oxygen injection.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    step: 3,
    title: "Thermal Insulation",
    description:
      "Packed in thick Styrofoam containers with heat or cold packs depending on route weather.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    step: 4,
    title: "DOA Guarantee",
    description:
      "Unboxing video within 2 hours of delivery ensures full refund or instant replacement.",
    color: "from-purple-500 to-pink-500",
  },
];

export const TESTIMONIALS = [
  {
    name: "Karthik Subramanian",
    role: "Aquarium Hobbyist",
    location: "Chennai, Tamil Nadu",
    review:
      "The Kamfa Flowerhorn juvenile arrived in Chennai within 24 hours with an active appetite and brilliant kok development. Outstanding packaging and condition.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    crop: "Kamfa Flowerhorn",
  },
  {
    name: "Divya R.",
    role: "Planted Tank Aquascaper",
    location: "Bangalore, Karnataka",
    review:
      "Ordered 25 Blue Dream and Bloody Mary Neocaridina shrimps. All arrived active with zero casualties thanks to the pure oxygen bagging. Their shell colors are vibrant and opaque.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    crop: "Neocaridina Shrimps",
  },
  {
    name: "Dr. Arvind Menon",
    role: "Exotic Fish Collector",
    location: "Coimbatore, Tamil Nadu",
    review:
      "Their Platinum Crystal Mollies have the most reflective metallic white sheen I have seen in South India. 100% true-breeding line with great vigor.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    crop: "Platinum Crystal Molly",
  },
  {
    name: "Siddharth Verma",
    role: "Aquarium Enthusiast",
    location: "Hyderabad, Telangana",
    review:
      "The Platinum Blue and Koi Angelfish pair came with flawless veil fins and zero damage. Acclimatized within 30 minutes and eating happily.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    crop: "Veil Tail Angelfish",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Master Kok Kamfa Male",
    category: "Flowerhorn",
    location: "Studio Tank 01",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80",
    caption:
      "Show-grade Kamfa Flowerhorn showcasing massive nuchal hump and intense crimson pearl saturation.",
    dimensions: "1920x1080",
  },
  {
    id: "g2",
    title: "Bloody Mary Shrimp Colony",
    category: "Neocaridina Shrimps",
    location: "Planted Colony Tank",
    image:
      "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=1000&q=80",
    caption:
      "Deeply pigmented Bloody Mary dwarf shrimps grazing on moss in our breeding conditioning tanks.",
    dimensions: "1920x1080",
  },
  {
    id: "g3",
    title: "Platinum White Veil Tail Angel",
    category: "Angelfish",
    location: "Breeding Cubicle A",
    image:
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=1000&q=80",
    caption:
      "Magnificent Platinum White Angelfish with symmetrical tall finnage and iridescent scales.",
    dimensions: "1920x1080",
  },
  {
    id: "g4",
    title: "Platinum Crystal Sailfin Molly",
    category: "Platinum Crystal Molly",
    location: "Selective Livebearer Vat",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80",
    caption:
      "Pure metallic white body with tall sailfin dorsal, completely free of yellow or dark blemishes.",
    dimensions: "1920x1080",
  },
  {
    id: "g5",
    title: "Super Red Dragon Juvenile",
    category: "Flowerhorn",
    location: "Nursery Compartment",
    image:
      "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=1000&q=80",
    caption:
      "4-inch SRD showing early kok development, brilliant red eye rings, and metallic dorsal pearls.",
    dimensions: "1920x1080",
  },
  {
    id: "g6",
    title: "Blue Dream Velvet Shrimps",
    category: "Neocaridina Shrimps",
    location: "Shrimp Room Rack 2",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
    caption:
      "High-grade Blue Dream females with solid sapphire blue coloration across the full carapace.",
    dimensions: "1920x1080",
  },
  {
    id: "g7",
    title: "Koi Angelfish Breeding Pair",
    category: "Angelfish",
    location: "Spawning Slate 04",
    image:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1000&q=80",
    caption:
      "Tricolor Koi Angelfish with vivid red-orange crown markings and tall vertical finnage.",
    dimensions: "1920x1080",
  },
  {
    id: "g8",
    title: "Lyretail Platinum Crystal Molly",
    category: "Platinum Crystal Molly",
    location: "Show Display Tank",
    image:
      "https://images.unsplash.com/photo-1579165466791-788226ab77b6?auto=format&fit=crop&w=1000&q=80",
    caption:
      "Extended lyretail filaments on pure white metallic body, active in planted breeding community.",
    dimensions: "1920x1080",
  },
  {
    id: "g9",
    title: "Live Stock Packaging & Oxygen Bagging",
    category: "Breeding Setup",
    location: "Packing Station, Chennai",
    image:
      "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=1000&q=80",
    caption:
      "Heavy-gauge pure oxygen double-bagging and thermal styrofoam packing bench for safe doorstep delivery.",
    dimensions: "1920x1080",
  },
];
