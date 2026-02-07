"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxImage from "@/components/ParallaxImage";
import { flooringImages } from "@/lib/images";

const products = [
  { name: "Heritage Oak", spec: '3/4" Solid · 5" Plank · Natural' },
  { name: "Estate Walnut", spec: '3/4" Solid · 4" Plank · Dark Stain' },
  { name: "Manor Ash", spec: '3/4" Solid · 5" Plank · Light Finish' },
  { name: "Cambridge Cherry", spec: '3/4" Solid · 3.25" Strip · Amber' },
];

export default function ClassicFlooringPage() {
  return (
    <>
      <ParallaxImage src={flooringImages.classic[0]} alt="Classic Flooring" height="70vh">
        <p
          className="text-sm uppercase tracking-[0.35em] text-white font-light"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          CLASSIC COLLECTION
        </p>
      </ParallaxImage>

      <section className="bg-white py-24 text-center">
        <ScrollReveal>
          <p className="text-[#666] font-light max-w-xl mx-auto text-sm leading-relaxed px-6">
            Time-honored solid hardwoods in traditional profiles.
            The warmth and character that only real wood can deliver.
          </p>
        </ScrollReveal>
      </section>

      <section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 max-w-[1400px] mx-auto">
          {products.map((product, index) => (
            <ScrollReveal key={product.name} delay={index * 80}>
              <div className="img-zoom">
                <div className="relative aspect-[4/3]">
                  <Image src={flooringImages.classic[index]} alt={product.name} fill className="object-cover" />
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
