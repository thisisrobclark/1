"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { tileImages } from "@/lib/images";

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
      <section className="relative h-[70vh] w-full">
        <Image
          src={tileImages.hero}
          alt="YUDU porcelain tile"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl text-white tracking-luxury uppercase text-center px-6">
            Porcelain Collection
          </h1>
        </div>
      </section>

      {/* Intro */}
      <ScrollReveal>
        <section className="max-w-3xl mx-auto px-6 py-24 text-center">
          <div className="divider mx-auto mb-10" />
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl tracking-luxury uppercase mb-8">
            Precision & Purity
          </h2>
          <p className="text-[#6b6b6b] leading-relaxed text-lg">
            Fired at extreme temperatures for exceptional density and durability,
            our porcelain tiles replicate the world&apos;s most coveted natural stones
            with remarkable fidelity. Impervious to moisture and virtually maintenance-free,
            they deliver the beauty of marble and granite without compromise.
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
                    Porcelain
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
