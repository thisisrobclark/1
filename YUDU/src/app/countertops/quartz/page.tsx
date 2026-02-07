"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxImage from "@/components/ParallaxImage";
import { countertopImages } from "@/lib/images";

const products = [
  { name: "Calacatta Laza", spec: "Polished · 3cm · Jumbo Slab" },
  { name: "Statuario Nuvo", spec: "Polished · 2cm · Jumbo Slab" },
  { name: "Coastal Grey", spec: "Honed · 3cm · Standard Slab" },
  { name: "White Attica", spec: "Polished · 2cm · Jumbo Slab" },
  { name: "Empira Black", spec: "Polished · 3cm · Standard Slab" },
  { name: "Taj Royale", spec: "Polished · 2cm · Jumbo Slab" },
];

export default function QuartzPage() {
  return (
    <>
      <ParallaxImage src={countertopImages.quartz[0]} alt="Quartz" height="70vh">
        <p
          className="text-sm uppercase tracking-[0.35em] text-white font-light"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          QUARTZ COLLECTION
        </p>
      </ParallaxImage>

      <section className="bg-white py-24 text-center">
        <ScrollReveal>
          <p className="text-[#666] font-light max-w-xl mx-auto text-sm leading-relaxed px-6">
            Where cutting-edge engineering meets the allure of natural stone.
            Non-porous, stain-resistant, and available in an extraordinary range of patterns.
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
                    src={countertopImages.quartz[index]}
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
