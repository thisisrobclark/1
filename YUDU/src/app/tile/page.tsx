"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxImage from "@/components/ParallaxImage";
import { tileImages } from "@/lib/images";

export default function TilePage() {
  return (
    <>
      {/* Hero */}
      <ParallaxImage src={tileImages.hero} alt="YUDU luxury tile collection" height="80vh">
        <h1
          className="text-5xl md:text-7xl text-white font-light uppercase tracking-[0.2em]"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Tile
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
              Surface &amp; Story
            </h2>
            <p className="text-[#6b6b6b] leading-relaxed text-lg">
              Tile is the language of architecture. Our curated collections span porcelain
              precision and ceramic warmth, offering surfaces that define the character of
              every room they inhabit. Each tile is sourced from the world&apos;s finest
              producers for lasting beauty and uncompromising quality.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Split: Image Left / Text Right — Porcelain */}
      <section className="fade-to-cream py-[100px]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <ScrollReveal>
              <div className="relative aspect-[4/5] img-zoom">
                <Image
                  src={tileImages.porcelain[0]}
                  alt="Porcelain tile collection"
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
                Porcelain
              </h3>
              <p className="text-[#6b6b6b] leading-relaxed mb-8">
                Fired at extreme temperatures for exceptional density and durability,
                our porcelain tiles replicate the world&apos;s most coveted natural stones
                with remarkable fidelity. Impervious to moisture and virtually maintenance-free.
              </p>
              <Link
                href="/tile/porcelain"
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
                Every ceramic tile carries the subtle imperfections and depth of color
                that only handcrafted processes can achieve. From shimmering zellige
                to clean heritage subway, these tiles bring soul and texture to every surface.
              </p>
              <Link
                href="/tile/ceramic"
                className="inline-block text-sm uppercase tracking-[0.2em] border-b border-[#2a2a2a] pb-1 hover:border-[#9a948a] transition-colors duration-500"
              >
                Explore Collection
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={200} className="order-1 md:order-2">
              <div className="relative aspect-[4/5] img-zoom">
                <Image
                  src={tileImages.ceramic[0]}
                  alt="Ceramic tile collection"
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
              Our tile specialists are ready to help you select the perfect surface.
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
