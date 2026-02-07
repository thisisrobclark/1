"use client";

import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxImage from "@/components/ParallaxImage";
import { heroImages, categoryImages, galleryImages } from "@/lib/images";

export default function Home() {
  return (
    <>
      {/* ── 1. Full-Screen Hero ── */}
      <HeroSlider
        images={heroImages}
        title="YUDU"
        subtitle="Luxury Surfaces for Inspired Living"
      />

      {/* ── 2. Full-Bleed: Countertops ── */}
      <ParallaxImage
        src={categoryImages.countertops}
        alt="Countertops collection"
        height="100vh"
      >
        <p
          className="text-sm uppercase tracking-[0.35em] text-white font-light"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          COUNTERTOPS
        </p>
        <Link
          href="/countertops"
          className="text-[10px] uppercase tracking-[0.3em] text-white/70 border-b border-white/40 pb-1 hover:text-white hover:border-white transition-all mt-4 inline-block"
        >
          EXPLORE
        </Link>
      </ParallaxImage>

      {/* ── 3. Full-Bleed: Sinks ── */}
      <ParallaxImage
        src={categoryImages.sinks}
        alt="Sinks collection"
        height="100vh"
      >
        <p
          className="text-sm uppercase tracking-[0.35em] text-white font-light"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          SINKS
        </p>
        <Link
          href="/sinks"
          className="text-[10px] uppercase tracking-[0.3em] text-white/70 border-b border-white/40 pb-1 hover:text-white hover:border-white transition-all mt-4 inline-block"
        >
          EXPLORE
        </Link>
      </ParallaxImage>

      {/* ── 4. Text Interstitial ── */}
      <section className="bg-white py-24 text-center">
        <ScrollReveal>
          <p
            className="text-xl font-light tracking-[0.15em] text-[#333]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            The World of YUDU
          </p>
        </ScrollReveal>
      </section>

      {/* ── 5. Full-Bleed: Tile ── */}
      <ParallaxImage
        src={categoryImages.tile}
        alt="Tile collection"
        height="100vh"
      >
        <p
          className="text-sm uppercase tracking-[0.35em] text-white font-light"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          TILE
        </p>
        <Link
          href="/tile"
          className="text-[10px] uppercase tracking-[0.3em] text-white/70 border-b border-white/40 pb-1 hover:text-white hover:border-white transition-all mt-4 inline-block"
        >
          EXPLORE
        </Link>
      </ParallaxImage>

      {/* ── 6. Full-Bleed: Flooring ── */}
      <ParallaxImage
        src={categoryImages.flooring}
        alt="Flooring collection"
        height="100vh"
      >
        <p
          className="text-sm uppercase tracking-[0.35em] text-white font-light"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          FLOORING
        </p>
        <Link
          href="/flooring"
          className="text-[10px] uppercase tracking-[0.3em] text-white/70 border-b border-white/40 pb-1 hover:text-white hover:border-white transition-all mt-4 inline-block"
        >
          EXPLORE
        </Link>
      </ParallaxImage>

      {/* ── 7. Full-Bleed: Mirrors ── */}
      <ParallaxImage
        src={categoryImages.mirrors}
        alt="Mirrors collection"
        height="85vh"
      >
        <p
          className="text-sm uppercase tracking-[0.35em] text-white font-light"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          MIRRORS
        </p>
        <Link
          href="/mirrors"
          className="text-[10px] uppercase tracking-[0.3em] text-white/70 border-b border-white/40 pb-1 hover:text-white hover:border-white transition-all mt-4 inline-block"
        >
          EXPLORE
        </Link>
      </ParallaxImage>

      {/* ── 8. Gallery Preview ── */}
      <section className="bg-white py-20">
        <ScrollReveal>
          <div className="grid grid-cols-2 gap-1 mx-auto max-w-[1400px]">
            <div className="img-zoom relative aspect-[16/9]">
              <Image
                src={galleryImages[1]}
                alt="Gallery preview 1"
                fill
                sizes="50vw"
                className="object-cover"
              />
            </div>
            <div className="img-zoom relative aspect-[16/9]">
              <Image
                src={galleryImages[2]}
                alt="Gallery preview 2"
                fill
                sizes="50vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/gallery"
              className="text-[10px] uppercase tracking-[0.3em] text-[#908d88] border-b border-[#b38041] pb-1 inline-block hover:text-[#b38041] transition-colors"
            >
              VIEW GALLERY
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* ── 9. Contact CTA ── */}
      <section className="bg-white py-32 text-center">
        <ScrollReveal>
          <p
            className="text-lg font-light tracking-[0.2em] text-[#333]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            EXPERIENCE THE WORLD OF YUDU
          </p>
          <p className="text-[11px] text-[#908d88] font-light mt-3" style={{ fontFamily: "var(--font-accent)" }}>
            Visit our Houston showroom
          </p>
          <Link
            href="/contact"
            className="text-[10px] uppercase tracking-[0.3em] text-[#908d88] border-b border-[#b38041] pb-1 mt-8 inline-block hover:text-[#b38041] transition-colors"
          >
            SCHEDULE A VISIT
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
