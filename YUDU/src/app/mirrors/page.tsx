"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxImage from "@/components/ParallaxImage";
import { mirrorImages } from "@/lib/images";

const products = [
  { name: 'Lumière Round 30"', spec: '30" Diameter · LED Backlit' },
  { name: "Atelier Rectangle 36×28", spec: '36" × 28" · Dimmable' },
  { name: "Provence Oval 24×36", spec: '24" × 36" · Anti-Fog' },
  { name: "Monaco Arch 26×38", spec: '26" × 38" · Touch Sensor' },
  { name: 'Riviera Square 28"', spec: '28" × 28" · RGB Color' },
  { name: "Château Full Length 22×60", spec: '22" × 60" · Motion Activated' },
];

export default function MirrorsPage() {
  return (
    <>
      <ParallaxImage src={mirrorImages.hero} alt="Mirrors" height="80vh">
        <p
          className="text-sm uppercase tracking-[0.35em] text-white font-light"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          MIRRORS
        </p>
      </ParallaxImage>

      <section className="bg-white py-24 text-center">
        <ScrollReveal>
          <p
            className="text-lg font-light tracking-[0.15em] text-[#333]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            ILLUMINATE YOUR SPACE
          </p>
          <p className="text-[#666] font-light max-w-xl mx-auto mt-6 text-sm leading-relaxed px-6">
            Back-lit mirrors that transform any bathroom or vanity into a luminous sanctuary.
            Energy-efficient LED illumination with adjustable color temperature.
          </p>
        </ScrollReveal>
      </section>

      <section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 max-w-[1400px] mx-auto">
          {products.map((product, index) => (
            <ScrollReveal key={product.name} delay={index * 80}>
              <div className="img-zoom">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={mirrorImages.products[index]}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="px-4 py-6">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#333]">{product.name}</p>
                <p className="text-[11px] text-[#888] mt-1">{product.spec}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="bg-white py-24 text-center">
        <ScrollReveal>
          <p
            className="text-lg font-light tracking-[0.15em] text-[#333]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            TRANSFORM YOUR SPACE
          </p>
          <Link
            href="/contact"
            className="text-[10px] uppercase tracking-[0.3em] text-[#666] border-b border-[#ccc] pb-1 mt-8 inline-block hover:text-[#333] transition-colors"
          >
            REQUEST A CONSULTATION
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
