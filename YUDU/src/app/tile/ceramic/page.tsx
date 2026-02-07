"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxImage from "@/components/ParallaxImage";
import { tileImages, galleryImages } from "@/lib/images";

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
      <ParallaxImage src={tileImages.hero} alt="YUDU ceramic tile" height="80vh">
        <h1
          className="text-5xl md:text-7xl text-white font-light uppercase tracking-[0.2em] mb-4"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Ceramic Tile
        </h1>
        <p className="text-white/80 text-lg md:text-xl tracking-[0.15em] uppercase font-light">
          Handcrafted Character
        </p>
      </ParallaxImage>

      {/* Intro */}
      <section className="section-white py-[120px]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <div className="divider mx-auto mb-10" />
            <p className="text-[#6b6b6b] leading-relaxed text-lg">
              Every ceramic tile carries the subtle imperfections and depth of color
              that only handcrafted processes can achieve. From the shimmering undulations
              of traditional zellige to the clean geometry of heritage subway,
              these tiles bring soul and texture to walls, backsplashes, and beyond.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Product Grid */}
      <section className="fade-to-cream py-[100px]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
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
                  <p
                    className="text-xs uppercase tracking-[0.2em] mt-6"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {product.name}
                  </p>
                  <p className="text-[#9a948a] text-xs mt-1">
                    Ceramic
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Breather */}
      <ParallaxImage src={galleryImages[10]} alt="Luxury interior" height="45vh" />

      {/* CTA */}
      <section className="fade-cream-to-white py-[100px]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <div className="divider mx-auto mb-10" />
            <h3
              className="text-xl md:text-2xl text-[#2a2a2a] uppercase tracking-[0.15em] mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Begin Your Project
            </h3>
            <p className="text-[#6b6b6b] leading-relaxed mb-10">
              Our tile specialists are ready to help you select the perfect surface.
            </p>
            <Link
              href="/contact"
              className="inline-block border border-[#2a2a2a] px-10 py-4 text-sm tracking-widest uppercase hover:bg-[#2a2a2a] hover:text-white transition-colors duration-500"
            >
              Contact Us
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
