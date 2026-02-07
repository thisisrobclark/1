"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxImage from "@/components/ParallaxImage";
import {
  graniteGroundZero,
  graniteLevel1,
  graniteLevel2,
  graniteAdditional,
  allGraniteProducts,
  countertopImages,
  catalogs,
  type GraniteProduct,
} from "@/lib/images";

const levels = [
  { label: "Ground Zero", products: graniteGroundZero },
  { label: "Level 1", products: graniteLevel1 },
  { label: "Level 2", products: graniteLevel2 },
  { label: "Additional Selections", products: graniteAdditional },
];

function ProductGrid({ products }: { products: GraniteProduct[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 max-w-[1400px] mx-auto">
      {products.map((product, index) => (
        <ScrollReveal key={product.name} delay={index * 40}>
          <div className="img-zoom">
            <div className="relative aspect-square">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          </div>
          <div className="px-3 py-4 text-center">
            <p className="text-[11px] uppercase tracking-[0.15em] text-[#333]" style={{ fontFamily: "var(--font-accent)" }}>
              {product.name}
            </p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}

export default function GranitePage() {
  return (
    <>
      <ParallaxImage src={countertopImages.hero} alt="Granite Collection" height="70vh">
        <p
          className="text-sm uppercase tracking-[0.35em] text-white font-light"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          GRANITE COLLECTION
        </p>
      </ParallaxImage>

      <section className="bg-white py-20 text-center">
        <ScrollReveal>
          <p className="text-[#908d88] font-light max-w-xl mx-auto text-sm leading-relaxed px-6" style={{ fontFamily: "var(--font-accent)" }}>
            Born deep within the earth, each granite slab carries millions of years of
            geological artistry — singular veining, crystalline depth, and raw mineral beauty.
          </p>
          <p className="text-[11px] text-[#908d88] mt-4" style={{ fontFamily: "var(--font-accent)" }}>
            {allGraniteProducts.length} selections
          </p>
          <a
            href={catalogs.graniteCare}
            download
            className="text-[10px] uppercase tracking-[0.3em] text-[#b38041] border-b border-[#b38041] pb-1 mt-6 inline-block hover:text-[#333] transition-colors"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            CARE &amp; MAINTENANCE (PDF)
          </a>
        </ScrollReveal>
      </section>

      {levels.map((level, li) => (
        <section key={level.label} className="bg-white pb-16">
          <ScrollReveal>
            <div className="text-center mb-10">
              <div className="w-8 h-px bg-[#b38041] mx-auto mb-6" />
              <p
                className="text-lg font-light tracking-[0.2em] text-[#333]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {level.label.toUpperCase()}
              </p>
              <p className="text-[11px] text-[#908d88] mt-2" style={{ fontFamily: "var(--font-accent)" }}>
                {level.products.length} selections
              </p>
            </div>
          </ScrollReveal>
          <ProductGrid products={level.products} />
          {li < levels.length - 1 && <div className="h-12" />}
        </section>
      ))}

      <section className="bg-white py-24 text-center">
        <ScrollReveal>
          <Link
            href="/contact"
            className="text-[10px] uppercase tracking-[0.3em] text-[#908d88] border-b border-[#b38041] pb-1 inline-block hover:text-[#b38041] transition-colors"
          >
            REQUEST A CONSULTATION
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
