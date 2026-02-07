"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxImage from "@/components/ParallaxImage";
import { tileImages } from "@/lib/images";

const products = [
  { name: "Carrara Vein", spec: '24" \u00d7 48" \u00b7 Matte \u00b7 Rectified' },
  { name: "Calacatta Gold", spec: '32" \u00d7 32" \u00b7 Polished \u00b7 Rectified' },
  { name: "Pietra Grey", spec: '24" \u00d7 24" \u00b7 Honed \u00b7 Through-Body' },
  { name: "Statuario White", spec: '12" \u00d7 24" \u00b7 Polished \u00b7 Rectified' },
];

export default function PorcelainPage() {
  return (
    <>
      <ParallaxImage src={tileImages.porcelain[0]} alt="Porcelain Tile" height="70vh">
        <p
          className="text-sm uppercase tracking-[0.35em] text-white font-light"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          PORCELAIN
        </p>
      </ParallaxImage>

      <section className="bg-white py-24 text-center">
        <ScrollReveal>
          <p className="text-[#666] font-light max-w-xl mx-auto text-sm leading-relaxed px-6">
            Fired at extreme temperatures for exceptional density and durability.
            Impervious to moisture and virtually maintenance-free.
          </p>
        </ScrollReveal>
      </section>

      <section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 max-w-[1400px] mx-auto">
          {products.map((product, index) => (
            <ScrollReveal key={product.name} delay={index * 80}>
              <div className="img-zoom">
                <div className="relative aspect-[4/3]">
                  <Image src={tileImages.porcelain[index]} alt={product.name} fill className="object-cover" />
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
