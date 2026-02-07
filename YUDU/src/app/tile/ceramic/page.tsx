"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxImage from "@/components/ParallaxImage";
import { tileImages } from "@/lib/images";

const products = [
  { name: "Zellige Blanc", spec: '4" \u00d7 4" \u00b7 Handmade \u00b7 Glossy' },
  { name: "Heritage Subway", spec: '3" \u00d7 12" \u00b7 Crackle Glaze' },
  { name: "Artisan Hex", spec: '6" Hexagon \u00b7 Matte \u00b7 Handpainted' },
  { name: "Terra Cotto", spec: '8" \u00d7 8" \u00b7 Natural Clay \u00b7 Matte' },
];

export default function CeramicTilePage() {
  return (
    <>
      <ParallaxImage src={tileImages.ceramic[0]} alt="Ceramic Tile" height="70vh">
        <p
          className="text-sm uppercase tracking-[0.35em] text-white font-light"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          CERAMIC
        </p>
      </ParallaxImage>

      <section className="bg-white py-24 text-center">
        <ScrollReveal>
          <p className="text-[#908d88] font-light max-w-xl mx-auto text-sm leading-relaxed px-6" style={{ fontFamily: "var(--font-accent)" }}>
            Every ceramic tile carries the subtle imperfections and depth of color
            that only handcrafted processes can achieve.
          </p>
        </ScrollReveal>
      </section>

      <section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 max-w-[1400px] mx-auto">
          {products.map((product, index) => (
            <ScrollReveal key={product.name} delay={index * 80}>
              <div className="img-zoom">
                <div className="relative aspect-[4/3]">
                  <Image src={tileImages.ceramic[index]} alt={product.name} fill className="object-cover" />
                </div>
              </div>
              <div className="px-4 py-6">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#333]" style={{ fontFamily: "var(--font-accent)" }}>{product.name}</p>
                <p className="text-[11px] text-[#908d88] mt-1" style={{ fontFamily: "var(--font-accent)" }}>{product.spec}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

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
