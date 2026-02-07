"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxImage from "@/components/ParallaxImage";
import { sinkImages, stainlessSinks } from "@/lib/images";

export default function StainlessSteelPage() {
  return (
    <>
      <ParallaxImage src={sinkImages.hero} alt="Stainless Steel Sinks" height="70vh">
        <p
          className="text-sm uppercase tracking-[0.35em] text-white font-light"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          STAINLESS STEEL
        </p>
      </ParallaxImage>

      <section className="bg-white py-24 text-center">
        <ScrollReveal>
          <p className="text-[#908d88] font-light max-w-xl mx-auto text-sm leading-relaxed px-6" style={{ fontFamily: "var(--font-accent)" }}>
            Premium-gauge stainless steel with brushed and satin finishes.
            Engineered for superior sound dampening and commercial-grade drainage.
          </p>
        </ScrollReveal>
      </section>

      <section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 max-w-[1400px] mx-auto">
          {stainlessSinks.map((product, index) => (
            <ScrollReveal key={product.name} delay={index * 80}>
              <div className="img-zoom">
                <div className="relative aspect-[4/3]">
                  <Image src={product.image} alt={product.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
              </div>
              <div className="px-4 py-6">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#333]" style={{ fontFamily: "var(--font-accent)" }}>{product.name}</p>
                <p className="text-[11px] text-[#908d88] mt-1" style={{ fontFamily: "var(--font-accent)" }}>{product.spec}</p>
                {product.specSheet && (
                  <a
                    href={product.specSheet}
                    download
                    className="text-[10px] uppercase tracking-[0.2em] text-[#b38041] mt-2 inline-block hover:text-[#333] transition-colors"
                    style={{ fontFamily: "var(--font-accent)" }}
                  >
                    SPEC SHEET (PDF)
                  </a>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="bg-white py-24 text-center">
        <ScrollReveal>
          <Link
            href="/contact"
            className="text-[10px] uppercase tracking-[0.3em] text-[#908d88] border-b border-[#b38041] pb-1 inline-block hover:text-[#b38041] transition-colors"
          >
            REQUEST A CONSULTATION
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
