"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxImage from "@/components/ParallaxImage";
import { mirrorHeroImages, mirrorProducts } from "@/lib/images";

export default function MirrorsPage() {
  return (
    <>
      <ParallaxImage src={mirrorHeroImages.hero} alt="Mirrors" height="80vh">
        <p
          className="text-sm uppercase tracking-[0.35em] text-white font-light"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          MIRRORS
        </p>
      </ParallaxImage>

      <section className="bg-white py-24 text-center">
        <ScrollReveal>
          <p
            className="text-lg font-light tracking-[0.15em] text-[#333]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            ILLUMINATE YOUR SPACE
          </p>
          <p className="text-[#908d88] font-light max-w-xl mx-auto mt-6 text-sm leading-relaxed px-6" style={{ fontFamily: "var(--font-accent)" }}>
            Back-lit LED mirrors that transform any bathroom or vanity into a luminous sanctuary.
            Energy-efficient illumination with adjustable color temperature.
          </p>
          <p className="text-[11px] text-[#908d88] mt-4" style={{ fontFamily: "var(--font-accent)" }}>
            {mirrorProducts.length} models
          </p>
        </ScrollReveal>
      </section>

      <section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 max-w-[1400px] mx-auto">
          {mirrorProducts.map((product, index) => (
            <ScrollReveal key={product.name} delay={index * 60}>
              <div className="img-zoom">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
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
          <p
            className="text-lg font-light tracking-[0.15em] text-[#333]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            TRANSFORM YOUR SPACE
          </p>
          <Link
            href="/contact"
            className="text-[10px] uppercase tracking-[0.3em] text-[#908d88] border-b border-[#b38041] pb-1 mt-8 inline-block hover:text-[#b38041] transition-colors"
          >
            REQUEST A CONSULTATION
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
