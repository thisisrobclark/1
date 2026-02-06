"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { tileImages } from "@/lib/images";

const products = [
  { name: "Zellige Blanc", image: tileImages.ceramic[0] },
  { name: "Subway Heritage 3\u00d76", image: tileImages.ceramic[1] },
  { name: "Arabesque Matte", image: tileImages.ceramic[2] },
  { name: "Hexagon Artisan", image: tileImages.ceramic[3] },
];

export default function CeramicTilePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] w-full">
        <Image
          src={tileImages.hero}
          alt="YUDU ceramic tile"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl text-white tracking-luxury uppercase text-center px-6">
            Ceramic Tile Collection
          </h1>
        </div>
      </section>

      {/* Intro */}
      <ScrollReveal>
        <section className="max-w-3xl mx-auto px-6 py-24 text-center">
          <div className="divider mx-auto mb-10" />
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl tracking-luxury uppercase mb-8">
            Handcrafted Character
          </h2>
          <p className="text-[#6b6b6b] leading-relaxed text-lg">
            Every ceramic tile carries the subtle imperfections and depth of color
            that only handcrafted processes can achieve. From the shimmering undulations
            of traditional zellige to the clean geometry of heritage subway,
            these tiles bring soul and texture to walls, backsplashes, and beyond.
          </p>
        </section>
      </ScrollReveal>

      {/* Product Grid */}
      <ScrollReveal>
        <section className="max-w-7xl mx-auto px-6 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <ScrollReveal key={product.name} delay={index * 120}>
                <div className="group">
                  <div className="relative aspect-[4/3] img-zoom">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg tracking-luxury uppercase mt-6 mb-1">
                    {product.name}
                  </h3>
                  <p className="text-[#6b6b6b] text-sm tracking-wide">
                    Ceramic
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal>
        <section className="max-w-3xl mx-auto px-6 pb-32 text-center">
          <div className="divider mx-auto mb-10" />
          <h3 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl tracking-luxury uppercase mb-6">
            Begin Your Project
          </h3>
          <p className="text-[#6b6b6b] leading-relaxed mb-10">
            Our tile specialists are ready to help you select the perfect surface.
          </p>
          <Link
            href="/contact"
            className="inline-block border border-foreground px-10 py-4 text-sm tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors duration-500"
          >
            Contact Us
          </Link>
        </section>
      </ScrollReveal>
    </>
  );
}
