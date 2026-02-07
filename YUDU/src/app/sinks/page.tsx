"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxImage from "@/components/ParallaxImage";
import { sinkImages } from "@/lib/images";

export default function SinksPage() {
  return (
    <>
      <ParallaxImage src={sinkImages.hero} alt="Sinks" height="80vh">
        <p
          className="text-sm uppercase tracking-[0.35em] text-white font-light"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          SINKS
        </p>
      </ParallaxImage>

      <section className="bg-white py-24 text-center">
        <ScrollReveal>
          <p
            className="text-lg font-light tracking-[0.15em] text-[#333]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            THE ART OF WATER
          </p>
          <p className="text-[#666] font-light max-w-xl mx-auto mt-6 text-sm leading-relaxed px-6">
            Each YUDU sink is selected for exceptional craftsmanship and enduring beauty.
            From hand-finished stainless steel to artisan-glazed ceramic.
          </p>
        </ScrollReveal>
      </section>

      <section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 max-w-[1400px] mx-auto">
          <ScrollReveal>
            <Link href="/sinks/stainless-steel" className="group block">
              <div className="relative aspect-[4/5] img-zoom">
                <Image src={sinkImages.stainless[0]} alt="Stainless Steel" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-700 flex items-end justify-center pb-12">
                  <span className="text-[11px] uppercase tracking-[0.25em] text-white font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Stainless Steel
                  </span>
                </div>
              </div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#666] font-light text-center mt-6 mb-12">
                Stainless Steel
              </p>
            </Link>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <Link href="/sinks/ceramic" className="group block">
              <div className="relative aspect-[4/5] img-zoom">
                <Image src={sinkImages.ceramic[0]} alt="Ceramic" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-700 flex items-end justify-center pb-12">
                  <span className="text-[11px] uppercase tracking-[0.25em] text-white font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Ceramic
                  </span>
                </div>
              </div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#666] font-light text-center mt-6 mb-12">
                Ceramic
              </p>
            </Link>
          </ScrollReveal>
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
