// Sonam Rubber Works — company + product data

export const COMPANY = {
  name: "Sonam Rubber Works",
  legalName: "Noormohammed Intyazali Siddiqi",
  short: "Sonam",
  brand: "Sonam Rubber Works",
  gstin: "27BCQPS6611G1Z7",
  phone: "+91 9324760876",
  phoneRaw: "+919324760876",
  whatsapp: "919324760876",
  email: "sonamrubberworks@gmail.com",
  hours: "Mon – Sat: 8:00 AM – 8:00 PM · Sunday Closed",
  addressLines: [
    "A-2, Good India, Shiv Shakti Society, Netaji Nagar,",
    "Khadi No. 3, Sakinaka, Kurla West,",
    "Mumbai Suburban, Maharashtra – 400072, India",
  ],
  address:
    "A-2, Good India, Shiv Shakti Society, Netaji Nagar, Khadi No. 3, Sakinaka, Kurla West, Mumbai Suburban, Maharashtra – 400072, India",
  city: "Mumbai",
  state: "Maharashtra",
  pincode: "400072",
  country: "India",
  mapEmbed:
    "https://www.openstreetmap.org/export/embed.html?bbox=72.8830%2C19.0930%2C72.9080%2C19.1130&layer=mapnik&marker=19.1030%2C72.8955",
  mapLink: "https://www.google.com/maps/search/?api=1&query=Shiv+Shakti+Society+Sakinaka+Kurla+West+Mumbai+400072",
  waPrefill:
    "Hello Sonam Rubber Works,\nI visited your website and would like to enquire about your rubber products.\nMy Name: \nCompany Name: \nProduct Requirement: \nQuantity: \nCity: \nPlease contact me.\nThank you.",
  social: {},
};

export const waLink = () =>
  `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(COMPANY.waPrefill)}`;

const img = (slug) => `/products/${slug}.webp`;
const thumb = (slug) => `/products/${slug}-thumb.webp`;

// 20 product catalogue with photographed images
export const PRODUCTS = [
  {
    slug: "rubber-sheets", name: "Industrial Rubber Sheets",
    tagline: "EPDM · Neoprene · Nitrile · Natural Rubber",
    image: img("rubber-sheets"), thumb: thumb("rubber-sheets"),
    short: "Industrial rubber sheets in EPDM, Neoprene, Nitrile and Natural rubber grades — cut to size for gaskets, machinery lining and vibration isolation.",
    alt: "Industrial rubber sheets — EPDM, Neoprene, Nitrile — manufactured by Sonam Rubber Works",
    specs: [
      { k: "Thickness", v: "1.0 mm – 25 mm" },
      { k: "Hardness", v: "40 – 90 Shore A" },
      { k: "Width", v: "1000 / 1200 / 1500 mm" },
      { k: "Grades", v: "EPDM, NBR, CR, SBR, NR" },
    ],
    applications: ["Gasket cutting", "Machinery lining", "Vibration isolation", "Flooring underlay"],
  },
  {
    slug: "rubber-bushes", name: "Rubber Bushes",
    tagline: "Anti-vibration bushes & mountings",
    image: img("rubber-bushes"), thumb: thumb("rubber-bushes"),
    short: "Rubber bushes and rubber-to-metal bonded mountings for suspension, engine mounts and machinery vibration damping.",
    alt: "Rubber bushes with metal inner sleeves — anti-vibration mountings",
    specs: [
      { k: "OD Range", v: "10 – 200 mm" },
      { k: "ID Range", v: "6 – 180 mm" },
      { k: "Bonding", v: "Rubber-to-metal / plastic" },
    ],
    applications: ["Automotive suspension", "Engine mounts", "Industrial pumps", "Machinery"],
  },
  {
    slug: "rubber-gaskets", name: "Rubber Gaskets",
    tagline: "Flange & custom-cut gaskets",
    image: img("rubber-gaskets"), thumb: thumb("rubber-gaskets"),
    short: "Flange gaskets and custom-cut rubber gasket profiles for pipes, pumps and pressure vessels — supplied in NBR, EPDM, Silicone and more.",
    alt: "Rubber flange gaskets in various diameters",
    specs: [
      { k: "Standards", v: "ANSI, DIN, BS, custom" },
      { k: "Materials", v: "NBR, EPDM, Silicone" },
      { k: "Sizes", v: "As per drawing" },
    ],
    applications: ["Pipeline flanges", "Pumps & valves", "Heat exchangers", "Machinery"],
  },
  {
    slug: "rubber-seals", name: "Rubber Oil Seals",
    tagline: "Rotary & static seals",
    image: img("rubber-seals"), thumb: thumb("rubber-seals"),
    short: "Rubber oil seals for rotating shafts — TC and similar profiles with spring-loaded lips for dust-tight, leak-free sealing.",
    alt: "TC-type rubber oil seals with metal casing",
    specs: [
      { k: "Type", v: "TC, TCV, SC" },
      { k: "Bore", v: "6 mm – 300 mm" },
      { k: "Material", v: "NBR, FKM, Silicone" },
    ],
    applications: ["Gearboxes", "Motors", "Wheel hubs", "Hydraulic systems"],
  },
  {
    slug: "o-rings", name: "Rubber O-Rings",
    tagline: "Precision sealing rings",
    image: img("o-rings"), thumb: thumb("o-rings"),
    short: "Rubber O-rings in standard AS568, BS1806 and metric sizes across common elastomer compounds — the workhorse seal for hydraulic and pneumatic systems.",
    alt: "Assorted rubber O-rings",
    specs: [
      { k: "Standards", v: "AS568, BS1806, metric" },
      { k: "Materials", v: "NBR, FKM, EPDM, Silicone" },
      { k: "ID Range", v: "1 mm – 500 mm" },
    ],
    applications: ["Hydraulic cylinders", "Pneumatics", "Valves & fittings"],
  },
  {
    slug: "silicone-rubber-parts", name: "Silicone Rubber Parts",
    tagline: "High-temperature silicone components",
    image: img("silicone-rubber-parts"), thumb: thumb("silicone-rubber-parts"),
    short: "Silicone rubber moulded components for high-temperature and specialty applications — available in transparent and coloured grades.",
    alt: "Silicone rubber moulded parts in red and translucent grades",
    specs: [
      { k: "Temperature", v: "-50°C to +200°C" },
      { k: "Hardness", v: "30 – 80 Shore A" },
      { k: "Colours", v: "Custom / translucent" },
    ],
    applications: ["Kitchenware", "General industry", "Electrical insulation"],
  },
  {
    slug: "rubber-rollers", name: "Rubber Rollers",
    tagline: "Printing, paper & textile rollers",
    image: img("rubber-rollers"), thumb: thumb("rubber-rollers"),
    short: "Rubber rollers for printing, paper, textile and packaging machinery — replacement rollers and new roller manufacturing to your specification.",
    alt: "Industrial rubber rollers with chrome shafts",
    specs: [
      { k: "Length", v: "Up to 3000 mm" },
      { k: "Diameter", v: "20 – 400 mm" },
      { k: "Hardness", v: "30 – 90 Shore A" },
    ],
    applications: ["Printing press", "Paper mills", "Textile machinery", "Packaging"],
  },
  {
    slug: "custom-moulded-components", name: "Custom Moulded Rubber Parts",
    tagline: "Compression & transfer moulding",
    image: img("custom-moulded-components"), thumb: thumb("custom-moulded-components"),
    short: "Send us your drawing or sample — we manufacture custom rubber moulded parts in compression and transfer moulding processes.",
    alt: "Custom moulded rubber components in various shapes",
    specs: [
      { k: "Process", v: "Compression / Transfer" },
      { k: "Tooling", v: "In-house tool support" },
      { k: "MOQ", v: "Small batches accepted" },
    ],
    applications: ["OEM parts", "Machinery components", "Consumer appliances"],
  },
  {
    slug: "rubber-washers", name: "Rubber Washers",
    tagline: "Flat & shaped washers",
    image: img("rubber-washers"), thumb: thumb("rubber-washers"),
    short: "Flat and shaped rubber washers manufactured to your dimensions — for sealing, cushioning and insulation duties.",
    alt: "Rubber washers of assorted diameters",
    specs: [
      { k: "OD Range", v: "5 – 300 mm" },
      { k: "Thickness", v: "0.5 – 20 mm" },
    ],
    applications: ["Plumbing", "Assemblies", "Cushioning", "Insulation"],
  },
  {
    slug: "rubber-diaphragms", name: "Rubber Diaphragms",
    tagline: "Fabric-reinforced diaphragms",
    image: img("rubber-diaphragms"), thumb: thumb("rubber-diaphragms"),
    short: "Fabric-reinforced rubber diaphragms for pumps, valves and pressure regulators.",
    alt: "Fabric-reinforced rubber diaphragms for pumps",
    specs: [
      { k: "Reinforcement", v: "Nylon / Polyester" },
      { k: "Diameter", v: "20 – 500 mm" },
    ],
    applications: ["Diaphragm pumps", "Control valves", "Regulators"],
  },
  {
    slug: "rubber-bellows", name: "Rubber Bellows",
    tagline: "Expansion joints & boots",
    image: img("rubber-bellows"), thumb: thumb("rubber-bellows"),
    short: "Rubber bellows and expansion joints that absorb movement and protect against dust and moisture.",
    alt: "Rubber bellow expansion joint with flanged ends",
    specs: [
      { k: "Type", v: "Single / multi convolution" },
      { k: "Sizes", v: "As per drawing" },
    ],
    applications: ["HVAC pipelines", "Machinery", "Automotive protection"],
  },
  {
    slug: "rubber-mats", name: "Rubber Mats",
    tagline: "Anti-slip & industrial matting",
    image: img("rubber-mats"), thumb: thumb("rubber-mats"),
    short: "Anti-slip rubber mats for workshops, gyms, entrances and industrial floors.",
    alt: "Studded anti-slip industrial rubber mats",
    specs: [
      { k: "Thickness", v: "2 – 20 mm" },
      { k: "Pattern", v: "Studded / diamond / plain" },
    ],
    applications: ["Workshops", "Gyms", "Entrances", "Kitchens"],
  },
  {
    slug: "rubber-hoses", name: "Rubber Hoses",
    tagline: "Industrial rubber hoses & fittings",
    image: img("rubber-hoses"), thumb: thumb("rubber-hoses"),
    short: "Industrial rubber hoses for water, air and general service — supplied cut-to-length with fittings on request.",
    alt: "Industrial rubber hoses with brass fittings",
    specs: [
      { k: "ID Range", v: "6 – 100 mm" },
      { k: "Pressure", v: "Up to 20 bar" },
      { k: "Ends", v: "Plain / with fittings" },
    ],
    applications: ["Water transfer", "Compressed air", "General service"],
  },
  {
    slug: "rubber-cords", name: "Rubber Cords",
    tagline: "Solid rubber cord in continuous length",
    image: img("rubber-cords"), thumb: thumb("rubber-cords"),
    short: "Continuous solid rubber cord in a range of diameters — used for custom seals, splicing and cushioning.",
    alt: "Coiled solid rubber cord in various diameters",
    specs: [
      { k: "Diameter", v: "1 – 30 mm" },
      { k: "Materials", v: "NBR, EPDM, Silicone, Neoprene" },
    ],
    applications: ["Custom seals", "Splicing", "Cushioning strips"],
  },
  {
    slug: "rubber-grommets", name: "Rubber Grommets",
    tagline: "Cable & panel grommets",
    image: img("rubber-grommets"), thumb: thumb("rubber-grommets"),
    short: "Rubber grommets for cable pass-through, panel protection and edge trim — available in standard and custom sizes.",
    alt: "Rubber grommets of various sizes",
    specs: [
      { k: "Panel", v: "1 – 12 mm" },
      { k: "ID Range", v: "3 – 50 mm" },
    ],
    applications: ["Cable pass-through", "Panel protection", "Enclosures"],
  },
  {
    slug: "rubber-plugs-stoppers", name: "Rubber Plugs & Stoppers",
    tagline: "Tapered plugs, end caps & stoppers",
    image: img("rubber-plugs-stoppers"), thumb: thumb("rubber-plugs-stoppers"),
    short: "Tapered rubber plugs and stoppers to protect openings during shipping, paint masking and general use.",
    alt: "Tapered rubber plugs and stoppers",
    specs: [
      { k: "Diameter", v: "3 – 80 mm" },
      { k: "Type", v: "Tapered / straight" },
    ],
    applications: ["Paint masking", "Shipping protection", "General use"],
  },
  {
    slug: "rubber-vibration-mounts", name: "Rubber Vibration Mounts",
    tagline: "Anti-vibration isolator mounts",
    image: img("rubber-vibration-mounts"), thumb: thumb("rubber-vibration-mounts"),
    short: "Rubber-to-metal bonded vibration isolator mounts for motors, compressors and machinery bases.",
    alt: "Rubber vibration isolator mounts with threaded studs",
    specs: [
      { k: "Load", v: "5 – 500 kg / mount" },
      { k: "Stud", v: "M6 – M20" },
    ],
    applications: ["Motors", "Compressors", "Generator sets", "Machinery bases"],
  },
  {
    slug: "rubber-belts", name: "Rubber Conveyor Belts (Cut Sections)",
    tagline: "Conveyor belt cut pieces & sheets",
    image: img("rubber-belts"), thumb: thumb("rubber-belts"),
    short: "Cut sections of rubber conveyor belt for skirt boards, chute liners, mud flaps and general purpose wear protection.",
    alt: "Cut sections of industrial rubber conveyor belt",
    specs: [
      { k: "Thickness", v: "6 – 20 mm" },
      { k: "Widths", v: "Cut to order" },
    ],
    applications: ["Skirt boards", "Chute liners", "Mud flaps", "Wear protection"],
  },
  {
    slug: "nitrile-nbr-parts", name: "Nitrile (NBR) Rubber Parts",
    tagline: "Oil-resistant NBR rubber parts",
    image: img("nitrile-nbr-parts"), thumb: thumb("nitrile-nbr-parts"),
    short: "Nitrile (NBR) rubber components specifically for oil, fuel and hydraulic fluid contact — gaskets, O-rings, seals and moulded parts.",
    alt: "Nitrile (NBR) rubber industrial parts",
    specs: [
      { k: "Compound", v: "NBR — oil & fuel resistant" },
      { k: "Hardness", v: "50 – 90 Shore A" },
    ],
    applications: ["Oil seals", "Fuel systems", "Hydraulics", "Automotive"],
  },
  {
    slug: "neoprene-parts", name: "Neoprene Rubber Parts",
    tagline: "Weather & moderate oil resistance",
    image: img("neoprene-parts"), thumb: thumb("neoprene-parts"),
    short: "Neoprene (CR) rubber sheets and moulded components — a balanced material for weather, ozone and moderate oil contact.",
    alt: "Neoprene rubber sheets and moulded components",
    specs: [
      { k: "Compound", v: "Neoprene (CR)" },
      { k: "Hardness", v: "40 – 80 Shore A" },
    ],
    applications: ["Weather seals", "Bridge pads", "General industry"],
  },
];

export const findProduct = (slug) => PRODUCTS.find((p) => p.slug === slug);

export const INDUSTRIES = [
  { slug: "automotive", name: "Automotive", icon: "fa-car", desc: "OEM rubber parts, bushes, mountings and gaskets for vehicles and workshops.", image: "/industries/automotive.webp" },
  { slug: "agriculture", name: "Agriculture", icon: "fa-seedling", desc: "Rubber parts for tractors, harvesters, irrigation pumps and drip systems.", image: "/industries/agriculture.webp" },
  { slug: "construction", name: "Construction", icon: "fa-helmet-safety", desc: "Vibration isolators, bearing pads and gaskets for construction machinery.", image: "/industries/construction.webp" },
  { slug: "engineering", name: "General Engineering", icon: "fa-gears", desc: "Custom rubber components for engineering workshops and machinery.", image: "/industries/engineering.webp" },
  { slug: "mining", name: "Mining", icon: "fa-mountain", desc: "Abrasion-resistant rubber liners and screen components for mining duty.", image: "/industries/mining.webp" },
  { slug: "railways", name: "Railways", icon: "fa-train", desc: "Vibration dampers and door / gangway seals for railway applications.", image: "/industries/railways.webp" },
  { slug: "chemical", name: "Chemical", icon: "fa-flask", desc: "Chemical-resistant rubber gaskets and seals for the process industry.", image: "/industries/chemical.webp" },
  { slug: "marine", name: "Marine", icon: "fa-anchor", desc: "Rubber components for marine and boating applications.", image: "/industries/marine.webp" },
];

export const WHY_CHOOSE_US = [
  { icon: "fa-user-tie", title: "Direct from Manufacturer", desc: "Deal directly with the workshop — no middlemen, transparent pricing and quicker response." },
  { icon: "fa-sliders", title: "Custom Manufacturing", desc: "Send us your drawing or sample and we manufacture rubber parts to your exact specification." },
  { icon: "fa-shield-halved", title: "Quality-focused Production", desc: "Careful compound selection and dimensional checks on every batch before dispatch." },
  { icon: "fa-file-invoice", title: "GST Registered Business", desc: "GSTIN 27BCQPS6611G1Z7 — proper invoicing and compliant billing for every order." },
  { icon: "fa-comments", title: "Quick Customer Support", desc: "Direct WhatsApp, phone and email support — usually respond within a few working hours." },
  { icon: "fa-truck", title: "Reliable Delivery", desc: "We plan production honestly and communicate lead times upfront so you can plan around them." },
];

export const MFG_STEPS = [
  { step: "01", icon: "fa-cubes", title: "Raw Material Selection", desc: "Rubber grades and compound ingredients are selected based on the operating environment of the finished part." },
  { step: "02", icon: "fa-blender", title: "Mixing & Compounding", desc: "Rubber compound is mixed to a consistent formulation ready for the moulding process." },
  { step: "03", icon: "fa-arrow-down-wide-short", title: "Moulding", desc: "Compression or transfer moulding is used based on the geometry, tolerance and quantity required." },
  { step: "04", icon: "fa-fire", title: "Vulcanisation", desc: "Parts are cured under controlled time, temperature and pressure to develop strength and elasticity." },
  { step: "05", icon: "fa-magnifying-glass", title: "Inspection", desc: "Each batch is dimensionally and visually inspected against the customer drawing before packing." },
  { step: "06", icon: "fa-boxes-packing", title: "Packing & Dispatch", desc: "Parts are carefully packed and dispatched with proper invoicing and dispatch documentation." },
];

export const TRUST_POINTS = [
  { code: "GST Registered", desc: "GSTIN 27BCQPS6611G1Z7 — Government of India registered business.", icon: "fa-file-invoice", color: "#1B3A6D" },
  { code: "Professional Manufacturer", desc: "Rubber component manufacturing under trade name Sonam Rubber Works.", icon: "fa-industry", color: "#1B3A6D" },
  { code: "Transparent Contact", desc: "Complete business address, direct phone, email and WhatsApp — no hidden identity.", icon: "fa-address-card", color: "#28A745" },
  { code: "Owner-led Support", desc: "You speak directly with the person responsible for your order — not a call centre.", icon: "fa-headset", color: "#1B3A6D" },
  { code: "Custom Manufacturing", desc: "Rubber parts manufactured to your drawing, sample or specification.", icon: "fa-sliders", color: "#28A745" },
  { code: "Mumbai-based", desc: "Located in Sakinaka, Kurla West, Mumbai — easy site visits for local buyers.", icon: "fa-location-dot", color: "#1B3A6D" },
];

export const TRUST_SIGNALS = [
  { icon: "fa-check", text: "Professional Rubber Component Manufacturer" },
  { icon: "fa-check", text: "GST Registered Business (27BCQPS6611G1Z7)" },
  { icon: "fa-check", text: "Custom Rubber Parts to Drawing or Sample" },
  { icon: "fa-check", text: "Transparent Address & Direct Owner Contact" },
  { icon: "fa-check", text: "Proper Tax Invoice with Every Order" },
  { icon: "fa-check", text: "Fair, Honest Lead Times — No Over-promises" },
  { icon: "fa-check", text: "Small-batch & Prototype Orders Welcome" },
  { icon: "fa-check", text: "Support in English, Hindi & Marathi" },
];

export const FAQS = [
  { q: "What rubber products does Sonam Rubber Works manufacture?", a: "We manufacture rubber gaskets, rubber bushes, rubber seals, O-rings, rubber washers, rubber sheets, rubber rollers, silicone rubber parts, diaphragms, bellows, hoses, cords, grommets, plugs, vibration mounts, belt cut-sections, nitrile (NBR) parts, neoprene parts and fully custom moulded rubber components for industrial buyers." },
  { q: "Can you manufacture rubber parts from my drawing or sample?", a: "Yes. Please share a 2D drawing, sample or photograph along with the operating conditions (temperature, media, quantity) and we will revert with a suitable material, process suggestion and quotation." },
  { q: "What is your minimum order quantity?", a: "We accept small batch and prototype orders based on the part geometry. For fully custom moulded parts a small tooling cost may apply. Please share your requirement for an exact quote." },
  { q: "Where are you located?", a: "Our workshop is at A-2, Good India, Shiv Shakti Society, Netaji Nagar, Khadi No. 3, Sakinaka, Kurla West, Mumbai – 400072. Local buyers are welcome for a visit by appointment." },
  { q: "Are you a GST registered business?", a: "Yes — our GSTIN is 27BCQPS6611G1Z7. Every order is invoiced with a proper GST tax invoice." },
  { q: "How do I get a quotation?", a: "The fastest way is to WhatsApp us on +91 9324760876 with your requirement and drawing, or use the enquiry form on the Contact page. We usually reply within a few working hours." },
  { q: "What rubber compounds do you work with?", a: "We commonly work with Natural Rubber, EPDM, Nitrile (NBR), Neoprene (CR), Silicone and SBR grades. Specialty compounds are sourced on request." },
  { q: "Do you provide a tax invoice and delivery documentation?", a: "Yes — every order is dispatched with a proper GST tax invoice and dispatch note. Local deliveries can be arranged; outstation dispatches go through reliable transporters." },
];

export const BLOG_POSTS = [
  { slug: "how-to-choose-rubber-material", title: "How to Choose the Right Rubber Material for Your Application", date: "2025-11-12", read: "6 min", category: "Materials", image: "/blog/how-to-choose-rubber-material.webp", excerpt: "Practical guide for buyers — how to match EPDM, Nitrile, Silicone or Neoprene to temperature, oil and outdoor exposure.", body: "The right rubber compound depends on the environment your part will live in: temperature range, chemical or oil contact, sunlight exposure and how much the part will flex. EPDM performs well outdoors and against water and steam. Nitrile (NBR) resists oils and fuels. Silicone tolerates high and low temperatures well. Neoprene is a balanced general-purpose material. When you are unsure, share your operating conditions with us and we will suggest the most cost-effective compound." },
  { slug: "epdm-vs-neoprene", title: "EPDM vs Neoprene — Which One Should You Choose?", date: "2025-10-30", read: "5 min", category: "Comparison", image: "/blog/epdm-vs-neoprene.webp", excerpt: "A short, honest comparison — where EPDM wins, where Neoprene wins, and the trade-offs to keep in mind.", body: "EPDM is a good choice for weather, ozone and steam-exposed parts — think outdoor gaskets, HVAC seals and roofing. Neoprene provides moderate oil resistance and better metal adhesion than EPDM, which makes it useful for general industrial pads and vibration mounts. Both compounds are widely available and cost-competitive." },
  { slug: "rubber-manufacturing-process", title: "How Rubber Parts Are Manufactured — A Simple Walkthrough", date: "2025-10-15", read: "7 min", category: "Process", image: "/blog/rubber-manufacturing-process.webp", excerpt: "From raw compound to finished part — the six steps that every rubber component goes through.", body: "Rubber manufacturing begins with selecting a suitable base polymer and mixing it with fillers and curing agents. The mixed compound is then placed in a mould and cured under heat and pressure — a process known as vulcanisation. After curing, parts are trimmed, inspected and packed for dispatch. Each step influences the final performance of the part." },
  { slug: "rubber-gasket-selection", title: "How to Select the Right Rubber Gasket", date: "2025-09-28", read: "5 min", category: "Selection", image: "/blog/rubber-gasket-selection.webp", excerpt: "Standards, material, thickness and hardness — a short checklist for maintenance engineers.", body: "For a leak-free joint you need the correct standard (flange dimension), a rubber grade compatible with the fluid, the right thickness and a hardness that seats properly under the available bolt load. Share the flange size, media and pressure with us and we can suggest a suitable specification." },
  { slug: "custom-rubber-moulding-guide", title: "Custom Rubber Moulding — A Buyer's Guide", date: "2025-09-10", read: "8 min", category: "Process", image: "/blog/custom-rubber-moulding-guide.webp", excerpt: "Compression vs transfer moulding, tooling cost and how to prepare a good enquiry.", body: "Compression moulding is cost-effective for small and medium volumes. Transfer moulding suits parts with inserts. To prepare a good enquiry, share the drawing, expected quantity, operating conditions and any existing sample. A short technical conversation upfront saves significant time later." },
  { slug: "natural-vs-synthetic-rubber", title: "Natural Rubber vs Synthetic Rubber", date: "2025-08-22", read: "6 min", category: "Materials", image: "/blog/natural-vs-synthetic-rubber.webp", excerpt: "Where natural rubber still wins, and where engineered synthetic polymers do the job better.", body: "Natural rubber offers excellent resilience and tear strength — ideal for shock-absorbing components. Synthetic rubbers such as EPDM, NBR and Silicone are engineered for specific environments like heat, oil or outdoor exposure. Most modern applications use one or the other, and sometimes both in blends." },
  { slug: "care-and-storage-of-rubber-parts", title: "Care & Storage of Rubber Parts", date: "2025-07-30", read: "4 min", category: "Maintenance", image: "/blog/care-and-storage-of-rubber-parts.webp", excerpt: "Simple steps that extend the shelf life of rubber components on the shop floor.", body: "Rubber parts are best stored in a cool, dark place away from ozone-producing motors, direct sunlight and solvents. Avoid stacking heavy items on soft components. When installing seals or O-rings, use a light film of the correct lubricant to prevent nicks." },
  { slug: "rubber-parts-for-oem", title: "Buying Rubber Parts as an OEM — What to Ask Your Supplier", date: "2025-07-05", read: "5 min", category: "Buyers Guide", image: "/blog/rubber-parts-for-oem.webp", excerpt: "A short checklist to make sure the parts you buy match what your machine actually needs.", body: "Ask about the compound and hardness, tolerances, sample approval process, batch traceability, invoice format (GST) and lead time. A transparent supplier will answer all of these without hesitation. Always start with a sample batch before committing to a large order." },
];

export const findPost = (slug) => BLOG_POSTS.find((p) => p.slug === slug);

// Gallery — reuse product photos + a couple of workshop shots
export const GALLERY = [
  { image: img("rubber-sheets"), caption: "Industrial rubber sheets", alt: "Industrial rubber sheets" },
  { image: img("rubber-gaskets"), caption: "Flange rubber gaskets", alt: "Flange rubber gaskets" },
  { image: img("rubber-bushes"), caption: "Anti-vibration bushes", alt: "Anti-vibration rubber bushes" },
  { image: img("rubber-seals"), caption: "Rubber oil seals", alt: "Rubber oil seals" },
  { image: img("o-rings"), caption: "Rubber O-rings", alt: "Assorted rubber O-rings" },
  { image: img("silicone-rubber-parts"), caption: "Silicone moulded parts", alt: "Silicone rubber moulded parts" },
  { image: img("rubber-rollers"), caption: "Rubber rollers", alt: "Industrial rubber rollers" },
  { image: img("custom-moulded-components"), caption: "Custom moulded parts", alt: "Custom moulded rubber parts" },
  { image: img("rubber-washers"), caption: "Rubber washers", alt: "Rubber washers" },
  { image: img("rubber-diaphragms"), caption: "Rubber diaphragms", alt: "Rubber diaphragms" },
  { image: img("rubber-mats"), caption: "Rubber mats", alt: "Studded rubber mats" },
  { image: img("rubber-vibration-mounts"), caption: "Vibration mounts", alt: "Vibration isolator mounts" },
];
