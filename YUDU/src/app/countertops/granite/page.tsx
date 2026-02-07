"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxImage from "@/components/ParallaxImage";
import { countertopImages } from "@/lib/images";

const products = [
  { name: "Absolute Black", spec: 'Polished · 3cm · 126" × 63"' },
  { name: "Colonial White", spec: 'Polished · 3cm · 120" × 60"' },
  { name: "Giallo Ornamental", spec: 'Polished · 3cm · 118" × 64"' },
  { name: "Steel Grey", spec: 'Leathered · 3cm · 124" × 62"' },
  { name: "Bianco Antico", spec: 'Polished · 3cm · 122" × 66"' },
  { name: "Typhoon Bordeaux", spec: 'Polished · 3cm · 120" × 63"' },
];

export default function GranitePage() {
  return (
    <>
      <ParallaxImage src={countertopImages.granite[0]} alt="Granite" height="70vh">
        <p
          className="text-sm uppercase tracking-[0.35em] text-white font-light"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          GRANITE COLLECTION
        </p>
      </ParallaxImage>

      <section className="bg-white py-24 text-center">
        <ScrollReveal>
          <p className="text-[#666] font-light max-w-xl mx-auto text-sm leading-relaxed px-6">
            Born deep within the earth, each granite slab carries millions of years of
            geological artistry — singular veining, crystalline depth, and raw mineral beauty.
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
                    src={countertopImages.granite[index]}
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
          <Link
            href="/contact"
            className="text-[10px] uppercase tracking-[0.3em] text-[#666] border-b border-[#ccc] pb-1 inline-block hover:text-[#333] transition-colors"
          >
            REQUEST A CONSULTATION
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
