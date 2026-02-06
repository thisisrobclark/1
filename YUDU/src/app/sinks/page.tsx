"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxImage from "@/components/ParallaxImage";
import { sinkImages } from "@/lib/images";

export default function SinksPage() {
  return (
    <>
      {/* Hero */}
      <ParallaxImage src={sinkImages.hero} alt="YUDU luxury sinks collection" height="80vh">
        <h1
          className="text-5xl md:text-7xl text-white font-light uppercase tracking-[0.2em]"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Sinks
        </h1>
      </ParallaxImage>

      {/* Intro */}
      <section className="section-white py-[120px]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <div className="divider mx-auto mb-10" />
            <h2
              className="text-3xl text-[#2a2a2a] uppercase tracking-[0.15em] mb-8"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              The Art of Water
            </h2>
            <p className="text-[#6b6b6b] leading-relaxed text-lg">
              Each YUDU sink is selected for its exceptional craftsmanship and enduring beauty.
              From hand-finished stainless steel to artisan-glazed ceramic, our collections
              represent the pinnacle of functional luxury for the modern home.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Split: Image Left / Text Right — Stainless Steel */}
      <section className="fade-to-cream py-[100px]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <ScrollReveal>
              <div className="relative aspect-[4/5] img-zoom">
                <Image
                  src={sinkImages.stainless[0]}
                  alt="Stainless steel sink collection"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-xs uppercase tracking-[0.2em] text-[#9a948a] mb-4">
                Collection
              </p>
              <h3
                className="text-3xl md:text-4xl text-[#2a2a2a] uppercase tracking-[0.12em] mb-6"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Stainless Steel
              </h3>
              <p className="text-[#6b6b6b] leading-relaxed mb-8">
                Forged from premium-gauge stainless steel with brushed and satin finishes,
                each sink balances industrial strength with refined aesthetics. Engineered
                for superior sound dampening and equipped with commercial-grade drainage.
              </p>
              <Link
                href="/sinks/stainless-steel"
                className="inline-block text-sm uppercase tracking-[0.2em] border-b border-[#2a2a2a] pb-1 hover:border-[#9a948a] transition-colors duration-500"
              >
                Explore Collection
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Split Reversed: Text Left / Image Right — Ceramic */}
      <section className="section-cream py-[100px]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <ScrollReveal className="order-2 md:order-1">
              <p className="text-xs uppercase tracking-[0.2em] text-[#9a948a] mb-4">
                Collection
              </p>
              <h3
                className="text-3xl md:text-4xl text-[#2a2a2a] uppercase tracking-[0.12em] mb-6"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Ceramic
              </h3>
              <p className="text-[#6b6b6b] leading-relaxed mb-8">
                Born from centuries of ceramic tradition, each piece is individually crafted
                and finished with exacting precision. Luminous glazes and sculpted forms bring
                enduring warmth and organic elegance to every space.
              </p>
              <Link
                href="/sinks/ceramic"
                className="inline-block text-sm uppercase tracking-[0.2em] border-b border-[#2a2a2a] pb-1 hover:border-[#9a948a] transition-colors duration-500"
              >
                Explore Collection
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={200} className="order-1 md:order-2">
              <div className="relative aspect-[4/5] img-zoom">
                <Image
                  src={sinkImages.ceramic[0]}
                  alt="Ceramic sink collection"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

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
              Speak with our design consultants to find the perfect sink for your space.
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
