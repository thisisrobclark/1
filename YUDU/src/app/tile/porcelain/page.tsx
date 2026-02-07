"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxImage from "@/components/ParallaxImage";
import { tileImages, galleryImages } from "@/lib/images";

const products = [
  { name: "Carrara Bianco 24\u00d724", image: tileImages.porcelain[0] },
  { name: "Calacatta Gold 12\u00d724", image: tileImages.porcelain[1] },
  { name: "Pietra Grey 32\u00d732", image: tileImages.porcelain[2] },
  { name: "Emperador Polished 18\u00d718", image: tileImages.porcelain[3] },
];

export default function PorcelainTilePage() {
  return (
    <>
      {/* Hero */}
      <ParallaxImage src={tileImages.hero} alt="YUDU porcelain tile" height="80vh">
        <h1
          className="text-5xl md:text-7xl text-white font-light uppercase tracking-[0.2em] mb-4"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Porcelain
        </h1>
        <p className="text-white/80 text-lg md:text-xl tracking-[0.15em] uppercase font-light">
          Precision &amp; Purity
        </p>
      </ParallaxImage>

      {/* Intro */}
      <section className="section-white py-[120px]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <div className="divider mx-auto mb-10" />
            <p className="text-[#6b6b6b] leading-relaxed text-lg">
              Fired at extreme temperatures for exceptional density and durability,
              our porcelain tiles replicate the world&apos;s most coveted natural stones
              with remarkable fidelity. Impervious to moisture and virtually maintenance-free,
              they deliver the beauty of marble and granite without compromise.
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
                    Porcelain
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Breather */}
      <ParallaxImage src={galleryImages[8]} alt="Luxury interior" height="45vh" />

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
