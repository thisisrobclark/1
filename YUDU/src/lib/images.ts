// Centralized product image paths and data for the YUDU site
// Local images served from /public/images/

// Prefix for countertop paths
const CT = "/images/4. Countertops";
const VN = "/images/1. Vinyl/Vinyl Picture";
const SPC = "/images/spc-products";

// ─── Hero / lifestyle images (keep Unsplash for cinematic full-bleed shots) ───
export const heroImages = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&q=80",
];

// ─── Quartz — organized by level ───
export interface QuartzProduct {
  name: string;
  image: string;
}

export const quartzLevel1: QuartzProduct[] = [
  { name: "Black Galaxy", image: `${CT}/Quartz Pictures/Level 1/Black Galaxy.png` },
  { name: "Blizzard White", image: `${CT}/Quartz Pictures/Level 1/Blizzard White.png` },
  { name: "Dot Grey", image: `${CT}/Quartz Pictures/Level 1/Dot Grey.png` },
  { name: "Galaxy Grey", image: `${CT}/Quartz Pictures/Level 1/Galaxy Grey.png` },
  { name: "Grey Quartz", image: `${CT}/Quartz Pictures/Level 1/Grey Quartz.png` },
  { name: "Iced White", image: `${CT}/Quartz Pictures/Level 1/Iced White.png` },
  { name: "Mirror White", image: `${CT}/Quartz Pictures/Level 1/Mirror White.png` },
  { name: "Snow White", image: `${CT}/Quartz Pictures/Level 1/Snow White.png` },
];

export const quartzLevel2: QuartzProduct[] = [
  { name: "Argent", image: `${CT}/Quartz Pictures/Level 2/Argent.png` },
  { name: "Bianco Venitino", image: `${CT}/Quartz Pictures/Level 2/Bianco Venitino.png` },
  { name: "Gris", image: `${CT}/Quartz Pictures/Level 2/Gris.png` },
  { name: "Lyra", image: `${CT}/Quartz Pictures/Level 2/Lyra.png` },
  { name: "New Cement", image: `${CT}/Quartz Pictures/Level 2/New Cement.png` },
  { name: "Pebble", image: `${CT}/Quartz Pictures/Level 2/Pebble.png` },
  { name: "Piatra Grey", image: `${CT}/Quartz Pictures/Level 2/Piatra Grey.png` },
  { name: "Pure White", image: `${CT}/Quartz Pictures/Level 2/Pure White.png` },
  { name: "Warm Terrazzo", image: `${CT}/Quartz Pictures/Level 2/Warm Terrazzo.jpg` },
];

export const quartzLevel3: QuartzProduct[] = [
  { name: "Archer Grey", image: `${CT}/Quartz Pictures/Level 3/Archer Grey.jpg` },
  { name: "Babylon Grey", image: `${CT}/Quartz Pictures/Level 3/Babylon Grey.jpg` },
  { name: "Calacatta Nuvo", image: `${CT}/Quartz Pictures/Level 3/Calacatta Nuvo.png` },
  { name: "Cosmopolitan White", image: `${CT}/Quartz Pictures/Level 3/Cosmopolitan White.png` },
  { name: "Dusk", image: `${CT}/Quartz Pictures/Level 3/Dusk.png` },
  { name: "Fairy White", image: `${CT}/Quartz Pictures/Level 3/Fairy White.png` },
  { name: "Lagos Azul", image: `${CT}/Quartz Pictures/Level 3/Lagos Azul.png` },
  { name: "Luna", image: `${CT}/Quartz Pictures/Level 3/Luna.png` },
  { name: "Mirragio Gold", image: `${CT}/Quartz Pictures/Level 3/Mirragio Gold.jpg` },
  { name: "Organic White", image: `${CT}/Quartz Pictures/Level 3/Organic White.jpg` },
  { name: "Shitake", image: `${CT}/Quartz Pictures/Level 3/Shitake.png` },
  { name: "Storm", image: `${CT}/Quartz Pictures/Level 3/Storm.png` },
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

// ─── Granite (all products, single tier) ───
export interface GraniteProduct {
  name: string;
  image: string;
}

export const graniteProducts: GraniteProduct[] = [
  { name: "Absolute Black", image: `${CT}/Granite Pictures/Absolute Black.png` },
  { name: "Alaska White", image: `${CT}/Granite Pictures/Alaska White.png` },
  { name: "Andromeda White", image: `${CT}/Granite Pictures/Andromeda White.png` },
  { name: "Artisan White", image: `${CT}/Granite Pictures/Artisan White.png` },
  { name: "Bianco Antico", image: `${CT}/Granite Pictures/Bianco Antico.png` },
  { name: "Bianco Romano", image: `${CT}/Granite Pictures/Bianco Romano.png` },
  { name: "Black Galaxy", image: `${CT}/Granite Pictures/Black Galaxy.png` },
  { name: "Black Pearl", image: `${CT}/Granite Pictures/Black Pearl.png` },
  { name: "Butterfly White", image: `${CT}/Granite Pictures/Butterfly White.png` },
  { name: "Butterfly Yellow", image: `${CT}/Granite Pictures/Butterfly Yellow.png` },
  { name: "China Ubatuba", image: `${CT}/Granite Pictures/China Ubatuba.png` },
  { name: "Creama Pearl", image: `${CT}/Granite Pictures/Creama Pearl.png` },
  { name: "Flaw Silk Ivory", image: `${CT}/Granite Pictures/Flaw Silk Ivory.png` },
  { name: "Fujian White", image: `${CT}/Granite Pictures/Fujian White.png` },
  { name: "Giallo Fiorito", image: `${CT}/Granite Pictures/Giallo Fiorito.png` },
  { name: "Giallo Ornamental", image: `${CT}/Granite Pictures/Giallo Ornamental.png` },
  { name: "Impala Black", image: `${CT}/Granite Pictures/Impala Black.png` },
  { name: "Kashmir Gold", image: `${CT}/Granite Pictures/Kashmir Gold.png` },
  { name: "Luna Pearl", image: `${CT}/Granite Pictures/Luna Pearl.png` },
  { name: "Mystic Black", image: `${CT}/Granite Pictures/Mystic Black.png` },
  { name: "New Caledonia", image: `${CT}/Granite Pictures/New Caledonia.png` },
  { name: "New River White", image: `${CT}/Granite Pictures/New River White.png` },
  { name: "New Venetian Gold", image: `${CT}/Granite Pictures/New Venetian Gold.png` },
  { name: "Rose White", image: `${CT}/Granite Pictures/Rose White.png` },
  { name: "Samoa", image: `${CT}/Granite Pictures/Samoa.png` },
  { name: "Santa Cecilia Dark", image: `${CT}/Granite Pictures/Santa Cecilia Dark.png` },
  { name: "Santa Cecilia Light", image: `${CT}/Granite Pictures/Santa Cecilia Light.png` },
  { name: "Sapphire Brown", image: `${CT}/Granite Pictures/Sapphire Brown.png` },
  { name: "Sesame Black", image: `${CT}/Granite Pictures/Sesame Black.png` },
  { name: "Steel Grey", image: `${CT}/Granite Pictures/Steel Grey.png` },
  { name: "Tahoe White", image: `${CT}/Granite Pictures/Tahoe White.png` },
  { name: "Tiger Skin Yellow", image: `${CT}/Granite Pictures/Tiger Skin Yellow.png` },
  { name: "White Galaxy", image: `${CT}/Granite Pictures/White Galaxy.png` },
  { name: "White Leopard", image: `${CT}/Granite Pictures/White Leopard.png` },
  { name: "White Wave", image: `${CT}/Granite Pictures/White Wave.png` },
];

// ─── Vinyl / Flooring — Classic Collection ───
export interface FlooringProduct {
  name: string;
  image: string;
}

export const classicVinyl: FlooringProduct[] = [
  { name: "Ash", image: `${VN}/Classic Collection/Ash.jpg` },
  { name: "Cappuccino", image: `${VN}/Classic Collection/Cappuccino.jpg` },
  { name: "Cloud", image: `${VN}/Classic Collection/Cloud.jpg` },
  { name: "Dark Walnut", image: `${VN}/Classic Collection/Dark Walnut.jpg` },
  { name: "Driftwood", image: `${VN}/Classic Collection/Driftwood.jpg` },
  { name: "Harbor Grey", image: `${VN}/Classic Collection/Harbor Grey.jpg` },
  { name: "Iron", image: `${VN}/Classic Collection/Iron.png` },
  { name: "Sand", image: `${VN}/Classic Collection/Sand.jpg` },
  { name: "Smoke", image: `${VN}/Classic Collection/Smoke.jpg` },
  { name: "Stone", image: `${VN}/Classic Collection/Stone.jpg` },
  { name: "Warm Oak", image: `${VN}/Classic Collection/Warm Oak.jpg` },
  { name: "Weathered Barnwood", image: `${VN}/Classic Collection/Weathered Barnwood.jpg` },
];

// ─── Vinyl / Flooring — Designer Collection ───
export const designerVinyl: FlooringProduct[] = [
  { name: "Alabaster", image: `${VN}/Designer Collection/Alabaster.jpg` },
  { name: "Dapper Tan", image: `${VN}/Designer Collection/Dapper Tan.png` },
  { name: "Desert Acacia", image: `${VN}/Designer Collection/Desert Acacia.jpg` },
  { name: "French Beige", image: `${VN}/Designer Collection/French Beige.jpg` },
  { name: "Modern Cedar", image: `${VN}/Designer Collection/Modern Cedar.png` },
  { name: "Sandalwood", image: `${VN}/Designer Collection/Sandalwood.png` },
  { name: "Tempered Gray", image: `${VN}/Designer Collection/Tempered Gray.jpg` },
  { name: "White Oak", image: `${VN}/Designer Collection/White Oak.jpg` },
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

// ─── PDF Catalogs (downloadable) ───
export const catalogs = {
  classicVinyl: "/images/1. Vinyl/Classic Collection Catalog-v.0622.pdf",
  designerVinyl: "/images/1. Vinyl/Designer Collection Catalog-v.0724.pdf",
  spcFlooring: "/images/3. SPC Flooring Catalog/Yudu SPC Flooring Catalog-v.0325.pdf",
};

// ─── Category hero images (keep Unsplash for lifestyle shots) ───
export const categoryImages = {
  countertops: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  sinks: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
  tile: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
  flooring: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
  mirrors: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
};

// ─── Unsplash lifestyle images for heroes / sinks / tile / mirrors / gallery ───
export const countertopImages = {
  hero: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80",
};

export const sinkImages = {
  hero: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1920&q=80",
  stainless: [
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
    "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80",
  ],
  ceramic: [
    "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  ],
};

export const tileImages = {
  hero: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1920&q=80",
  porcelain: [
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
    "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800&q=80",
    "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80",
    "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=800&q=80",
  ],
  ceramic: [
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80",
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
  ],
};

export const mirrorImages = {
  hero: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80",
  products: [
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
  ],
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
