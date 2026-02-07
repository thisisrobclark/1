// Centralized product image paths and data for the YUDU site
// Local images served from /public/images/

const CT = "/images/4. Countertops";
const VN = "/images/1. Vinyl/Vinyl Picture";
const SPC = "/images/spc-products";

// Placeholder for products without uploaded photos
const PH = {
  granite: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
  quartz: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80",
  sink: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
  sinkAlt: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  mirror: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
  mirrorAlt: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
};

// ─── Hero / lifestyle images (Unsplash for cinematic full-bleed shots) ───
export const heroImages = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&q=80",
];

// ═══════════════════════════════════════════════════════════════
// QUARTZ — organized by level
// ═══════════════════════════════════════════════════════════════
export interface QuartzProduct {
  name: string;
  image: string;
}

export const quartzLevel1: QuartzProduct[] = [
  { name: "Snow White", image: `${CT}/Quartz Pictures/Level 1/Snow White.png` },
  { name: "Iced White", image: `${CT}/Quartz Pictures/Level 1/Iced White.png` },
  { name: "Blizzard", image: `${CT}/Quartz Pictures/Level 1/Blizzard White.png` },
  { name: "Crystal Pepper", image: PH.quartz },
  { name: "Woven Wool", image: PH.quartz },
  { name: "Moon", image: PH.quartz },
  { name: "Dot Grey", image: `${CT}/Quartz Pictures/Level 1/Dot Grey.png` },
  { name: "Mirror White", image: `${CT}/Quartz Pictures/Level 1/Mirror White.png` },
  { name: "Grey Galaxy", image: `${CT}/Quartz Pictures/Level 1/Galaxy Grey.png` },
  { name: "Black Galaxy", image: `${CT}/Quartz Pictures/Level 1/Black Galaxy.png` },
];

export const quartzLevel2: QuartzProduct[] = [
  { name: "Pure White", image: `${CT}/Quartz Pictures/Level 2/Pure White.png` },
  { name: "Warm Terrazzo", image: `${CT}/Quartz Pictures/Level 2/Warm Terrazzo.jpg` },
  { name: "Ash Grey Quartz", image: PH.quartz },
  { name: "Argent", image: `${CT}/Quartz Pictures/Level 2/Argent.png` },
  { name: "Gris", image: `${CT}/Quartz Pictures/Level 2/Gris.png` },
];

export const quartzLevel3: QuartzProduct[] = [
  { name: "Organic White", image: `${CT}/Quartz Pictures/Level 3/Organic White.jpg` },
  { name: "Cosmopolitan White", image: `${CT}/Quartz Pictures/Level 3/Cosmopolitan White.png` },
  { name: "Frosty Carrina", image: PH.quartz },
  { name: "Fairy White", image: `${CT}/Quartz Pictures/Level 3/Fairy White.png` },
  { name: "Bianco Venitino", image: `${CT}/Quartz Pictures/Level 2/Bianco Venitino.png` },
];

export const quartzLevel4: QuartzProduct[] = [
  { name: "Alpine Roots", image: `${CT}/Quartz Pictures/Level 4/Alpine Roots.png` },
  { name: "Bianco Wave", image: `${CT}/Quartz Pictures/Level 4/Bianco Wave.png` },
  { name: "Club Monaco", image: `${CT}/Quartz Pictures/Level 4/Club Monaco.jpg` },
  { name: "Fish White", image: `${CT}/Quartz Pictures/Level 4/Fish White.png` },
  { name: "Mirragio Gold", image: `${CT}/Quartz Pictures/Level 4/Mirragio Gold.jpg` },
  { name: "Soapstone Metropolis", image: `${CT}/Quartz Pictures/Level 4/Soapstone Metropolis.jpg` },
  { name: "Vena Blanc", image: `${CT}/Quartz Pictures/Level 4/Vena Blanc.png` },
];

// ═══════════════════════════════════════════════════════════════
// GRANITE — organized by pricing tier
// ═══════════════════════════════════════════════════════════════
export interface GraniteProduct {
  name: string;
  image: string;
}

export const graniteGroundZero: GraniteProduct[] = [
  { name: "Platinum Mist", image: PH.granite },
  { name: "Saint Lucia", image: PH.granite },
];

export const graniteLevel1: GraniteProduct[] = [
  { name: "Artisan White", image: `${CT}/Granite Pictures/Artisan White.png` },
  { name: "Tahoe White", image: `${CT}/Granite Pictures/Tahoe White.png` },
  { name: "Luna Pearl", image: `${CT}/Granite Pictures/Luna Pearl.png` },
  { name: "White Leopard", image: `${CT}/Granite Pictures/White Leopard.png` },
  { name: "Fujian White", image: `${CT}/Granite Pictures/Fujian White.png` },
  { name: "Tiger Skin White", image: PH.granite },
];

export const graniteLevel2: GraniteProduct[] = [
  { name: "Rose White", image: `${CT}/Granite Pictures/Rose White.png` },
  { name: "Santa Cecilia Light", image: `${CT}/Granite Pictures/Santa Cecilia Light.png` },
  { name: "Butterfly White", image: `${CT}/Granite Pictures/Butterfly White.png` },
  { name: "Steel Grey", image: `${CT}/Granite Pictures/Steel Grey.png` },
];

export const graniteAdditional: GraniteProduct[] = [
  { name: "Absolute Black", image: `${CT}/Granite Pictures/Absolute Black.png` },
  { name: "Alaska White", image: `${CT}/Granite Pictures/Alaska White.png` },
  { name: "Andromeda White", image: `${CT}/Granite Pictures/Andromeda White.png` },
  { name: "Bianco Antico", image: `${CT}/Granite Pictures/Bianco Antico.png` },
  { name: "Bianco Romano", image: `${CT}/Granite Pictures/Bianco Romano.png` },
  { name: "Black Galaxy", image: `${CT}/Granite Pictures/Black Galaxy.png` },
  { name: "Black Pearl", image: `${CT}/Granite Pictures/Black Pearl.png` },
  { name: "Butterfly Yellow", image: `${CT}/Granite Pictures/Butterfly Yellow.png` },
  { name: "China Ubatuba", image: `${CT}/Granite Pictures/China Ubatuba.png` },
  { name: "Creama Pearl", image: `${CT}/Granite Pictures/Creama Pearl.png` },
  { name: "Flaw Silk Ivory", image: `${CT}/Granite Pictures/Flaw Silk Ivory.png` },
  { name: "Giallo Fiorito", image: `${CT}/Granite Pictures/Giallo Fiorito.png` },
  { name: "Giallo Ornamental", image: `${CT}/Granite Pictures/Giallo Ornamental.png` },
  { name: "Impala Black", image: `${CT}/Granite Pictures/Impala Black.png` },
  { name: "Kashmir Gold", image: `${CT}/Granite Pictures/Kashmir Gold.png` },
  { name: "Mystic Black", image: `${CT}/Granite Pictures/Mystic Black.png` },
  { name: "New Caledonia", image: `${CT}/Granite Pictures/New Caledonia.png` },
  { name: "New River White", image: `${CT}/Granite Pictures/New River White.png` },
  { name: "New Venetian Gold", image: `${CT}/Granite Pictures/New Venetian Gold.png` },
  { name: "Samoa", image: `${CT}/Granite Pictures/Samoa.png` },
  { name: "Santa Cecilia Dark", image: `${CT}/Granite Pictures/Santa Cecilia Dark.png` },
  { name: "Sapphire Brown", image: `${CT}/Granite Pictures/Sapphire Brown.png` },
  { name: "Sesame Black", image: `${CT}/Granite Pictures/Sesame Black.png` },
  { name: "Tiger Skin Yellow", image: `${CT}/Granite Pictures/Tiger Skin Yellow.png` },
  { name: "White Galaxy", image: `${CT}/Granite Pictures/White Galaxy.png` },
  { name: "White Wave", image: `${CT}/Granite Pictures/White Wave.png` },
];

// Combined for total count display
export const allGraniteProducts: GraniteProduct[] = [
  ...graniteGroundZero,
  ...graniteLevel1,
  ...graniteLevel2,
  ...graniteAdditional,
];

// ═══════════════════════════════════════════════════════════════
// VINYL / FLOORING
// ═══════════════════════════════════════════════════════════════
export interface FlooringProduct {
  name: string;
  image: string;
  dimensions: string;
  thickness: string;
  wearLayer: string;
}

export const classicVinyl: FlooringProduct[] = [
  { name: "Ash", image: `${VN}/Classic Collection/Ash.jpg`, dimensions: '7" × 48"', thickness: "2mm", wearLayer: "8 mil" },
  { name: "Cappuccino", image: `${VN}/Classic Collection/Cappuccino.jpg`, dimensions: '7" × 48"', thickness: "2mm", wearLayer: "8 mil" },
  { name: "Cloud", image: `${VN}/Classic Collection/Cloud.jpg`, dimensions: '7" × 48"', thickness: "2mm", wearLayer: "8 mil" },
  { name: "Dark Walnut", image: `${VN}/Classic Collection/Dark Walnut.jpg`, dimensions: '7" × 48"', thickness: "2mm", wearLayer: "8 mil" },
  { name: "Driftwood", image: `${VN}/Classic Collection/Driftwood.jpg`, dimensions: '7" × 48"', thickness: "2mm", wearLayer: "8 mil" },
  { name: "Harbor Grey", image: `${VN}/Classic Collection/Harbor Grey.jpg`, dimensions: '7" × 48"', thickness: "2mm", wearLayer: "8 mil" },
  { name: "Iron", image: `${VN}/Classic Collection/Iron.png`, dimensions: '7" × 48"', thickness: "2mm", wearLayer: "8 mil" },
  { name: "Sand", image: `${VN}/Classic Collection/Sand.jpg`, dimensions: '7" × 48"', thickness: "2mm", wearLayer: "8 mil" },
  { name: "Smoke", image: `${VN}/Classic Collection/Smoke.jpg`, dimensions: '7" × 48"', thickness: "2mm", wearLayer: "8 mil" },
  { name: "Stone", image: `${VN}/Classic Collection/Stone.jpg`, dimensions: '7" × 48"', thickness: "2mm", wearLayer: "8 mil" },
  { name: "Warm Oak", image: `${VN}/Classic Collection/Warm Oak.jpg`, dimensions: '7" × 48"', thickness: "2mm", wearLayer: "8 mil" },
  { name: "Weathered Barnwood", image: `${VN}/Classic Collection/Weathered Barnwood.jpg`, dimensions: '7" × 48"', thickness: "2mm", wearLayer: "8 mil" },
];

export const designerVinyl: FlooringProduct[] = [
  { name: "Alabaster", image: `${VN}/Designer Collection/Alabaster.jpg`, dimensions: '7" × 48"', thickness: "2mm", wearLayer: "12 mil" },
  { name: "Dapper Tan", image: `${VN}/Designer Collection/Dapper Tan.png`, dimensions: '7" × 48"', thickness: "2mm", wearLayer: "12 mil" },
  { name: "Desert Acacia", image: `${VN}/Designer Collection/Desert Acacia.jpg`, dimensions: '7" × 48"', thickness: "2mm", wearLayer: "12 mil" },
  { name: "French Beige", image: `${VN}/Designer Collection/French Beige.jpg`, dimensions: '7" × 48"', thickness: "2mm", wearLayer: "12 mil" },
  { name: "Modern Cedar", image: `${VN}/Designer Collection/Modern Cedar.png`, dimensions: '7" × 48"', thickness: "2mm", wearLayer: "12 mil" },
  { name: "Sandalwood", image: `${VN}/Designer Collection/Sandalwood.png`, dimensions: '7" × 48"', thickness: "2mm", wearLayer: "12 mil" },
  { name: "Tempered Gray", image: `${VN}/Designer Collection/Tempered Gray.jpg`, dimensions: '7" × 48"', thickness: "2mm", wearLayer: "12 mil" },
  { name: "White Oak", image: `${VN}/Designer Collection/White Oak.jpg`, dimensions: '7" × 48"', thickness: "2mm", wearLayer: "12 mil" },
];

// ─── SPC Flooring (extracted from PDF catalog) ───
export interface SPCProduct {
  name: string;
  image: string;
  dimensions: string;
  wearLayer: string;
  padding: string;
}

export const spcProducts: SPCProduct[] = [
  { name: "Caramel Oak", image: `${SPC}/page-02.jpg`, dimensions: '48" × 7" × 4mm', wearLayer: "0.3mm", padding: "IXPE 1mm" },
  { name: "Golden Maple", image: `${SPC}/page-03.jpg`, dimensions: '48" × 7" × 4mm', wearLayer: "0.3mm", padding: "IXPE 1mm" },
  { name: "Seaside Breeze", image: `${SPC}/page-04.jpg`, dimensions: '48" × 7" × 4mm', wearLayer: "0.3mm", padding: "IXPE 1mm" },
  { name: "Weathered Birch", image: `${SPC}/page-05.jpg`, dimensions: '48" × 7" × 4mm', wearLayer: "0.3mm", padding: "IXPE 1mm" },
  { name: "Feather Grey", image: `${SPC}/page-06.jpg`, dimensions: '48" × 7" × 4mm', wearLayer: "0.3mm", padding: "IXPE 1mm" },
  { name: "Silver Smoke", image: `${SPC}/page-07.jpg`, dimensions: '48" × 7" × 4mm', wearLayer: "0.3mm", padding: "IXPE 1mm" },
  { name: "Charcoal Pine", image: `${SPC}/page-08.jpg`, dimensions: '48" × 7" × 4mm', wearLayer: "0.3mm", padding: "IXPE 1mm" },
  { name: "Toasted Chestnut", image: `${SPC}/page-09.jpg`, dimensions: '48" × 7" × 4mm', wearLayer: "0.3mm", padding: "IXPE 1mm" },
  { name: "Cafe Mocha", image: `${SPC}/page-10.jpg`, dimensions: '48" × 7" × 4mm', wearLayer: "0.3mm", padding: "IXPE 1mm" },
  { name: "Magnolia Rust", image: `${SPC}/page-11.jpg`, dimensions: '48" × 7" × 4mm', wearLayer: "0.3mm", padding: "IXPE 1mm" },
];

// ═══════════════════════════════════════════════════════════════
// SINKS
// ═══════════════════════════════════════════════════════════════
export interface SinkProduct {
  name: string;
  image: string;
  spec: string;
  specSheet?: string;
}

export const stainlessSinks: SinkProduct[] = [
  { name: "Craftsman I-26", image: PH.sink, spec: '26" Single Bowl · 16-Gauge Stainless', specSheet: "/docs/sinks/craftsman-i-26.pdf" },
  { name: "Craftsman I-28", image: PH.sinkAlt, spec: '28" Single Bowl · 16-Gauge Stainless', specSheet: "/docs/sinks/craftsman-i-28.pdf" },
  { name: "Craftsman I-31.5", image: PH.sink, spec: '31.5" Single Bowl · 16-Gauge Stainless', specSheet: "/docs/sinks/craftsman-i-31-5.pdf" },
  { name: "Monterey-28", image: PH.sinkAlt, spec: '28" Double Bowl · 18-Gauge Stainless', specSheet: "/docs/sinks/monterey-28.pdf" },
  { name: "Monterey-29", image: PH.sink, spec: '29" Double Bowl · 18-Gauge Stainless', specSheet: "/docs/sinks/monterey-29.pdf" },
];

export const ceramicSinks: SinkProduct[] = [
  { name: "Regency I", image: PH.sink, spec: "Undermount · Vitreous China · White", specSheet: "/docs/sinks/regency-i.pdf" },
  { name: "Regency I-ADA", image: PH.sinkAlt, spec: "ADA Compliant · Undermount · Vitreous China", specSheet: "/docs/sinks/regency-i-ada.pdf" },
  { name: "International", image: PH.sink, spec: "Drop-In · Vitreous China · White", specSheet: "/docs/sinks/international.pdf" },
];

// ═══════════════════════════════════════════════════════════════
// MIRRORS — Back-Lit LED Collection
// ═══════════════════════════════════════════════════════════════
export interface MirrorProduct {
  name: string;
  image: string;
  spec: string;
}

export const mirrorProducts: MirrorProduct[] = [
  { name: "YDP-LED031", image: PH.mirror, spec: "Round · LED Backlit · Dimmable" },
  { name: "YDP-LED201", image: PH.mirrorAlt, spec: "Rectangle · LED Backlit · Anti-Fog" },
  { name: "YDP-LED209", image: PH.mirror, spec: "Oval · LED Backlit · Touch Sensor" },
  { name: "YDP-LED200", image: PH.mirrorAlt, spec: "Rectangle · LED Backlit · Dimmable" },
  { name: "YDP-LED065", image: PH.mirror, spec: "Round · LED Backlit · Color Temp Adjust" },
  { name: "YDP-LED208F", image: PH.mirrorAlt, spec: "Frameless · LED Backlit · Anti-Fog" },
  { name: "YDP-LED207", image: PH.mirror, spec: "Rectangle · LED Backlit · Touch Sensor" },
  { name: "YDP-LED210B1", image: PH.mirrorAlt, spec: "Arched · LED Backlit · Dimmable" },
  { name: "YDP-LED206", image: PH.mirror, spec: "Square · LED Backlit · Anti-Fog" },
  { name: "YDP-LED204", image: PH.mirrorAlt, spec: "Rectangle · LED Backlit · Motion Sensor" },
  { name: "YDP-LED203", image: PH.mirror, spec: "Full Length · LED Backlit · Dimmable" },
];

// ═══════════════════════════════════════════════════════════════
// PDF CATALOGS (downloadable)
// ═══════════════════════════════════════════════════════════════
export const catalogs = {
  classicVinyl: "/images/1. Vinyl/Classic Collection Catalog-v.0622.pdf",
  designerVinyl: "/images/1. Vinyl/Designer Collection Catalog-v.0724.pdf",
  spcFlooring: "/images/3. SPC Flooring Catalog/Yudu SPC Flooring Catalog-v.0325.pdf",
  graniteCare: "/docs/granite-care-maintenance.pdf",
  porcelainTile: "/docs/tile/porcelain-catalog.pdf",
  ceramicTile: "/docs/tile/ceramic-catalog.pdf",
};

// ═══════════════════════════════════════════════════════════════
// CATEGORY HERO & LIFESTYLE IMAGES (Unsplash)
// ═══════════════════════════════════════════════════════════════
export const categoryImages = {
  countertops: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  sinks: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
  tile: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
  flooring: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
  mirrors: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
};

export const countertopImages = {
  hero: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80",
};

export const sinkImages = {
  hero: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1920&q=80",
};

export const tileImages = {
  hero: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1920&q=80",
};

export const mirrorHeroImages = {
  hero: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80",
};

export const galleryImages = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80",
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&q=80",
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
  "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200&q=80",
  "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80",
  "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80",
  "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
];

// ─── Vinyl hero/lifestyle images ───
export const flooringHeroImage = `${VN}/Stillwater.png`;
export const flooringLifestyle = `${VN}/White Oak.png`;
