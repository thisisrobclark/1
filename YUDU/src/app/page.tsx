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
      {/* ── 1. Hero ── */}
      <HeroSlider
        images={heroImages}
        title="YUDU"
        subtitle="Luxury Surfaces for Inspired Living"
      />

      {/* ── 2. Brand Statement ── */}
      <section className="section-white px-6 py-20 md:py-[120px] text-center">
        <ScrollReveal>
          <div className="divider mx-auto mb-10" />
          <h2
            className="text-3xl md:text-4xl lg:text-5xl uppercase tracking-[0.2em] font-light"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            The Art of Surface
          </h2>
          <p className="text-[#6b6b6b] max-w-2xl mx-auto text-lg leading-[1.8] font-light mt-8">
            Every surface tells a story. At YUDU Products, we curate the
            world&apos;s finest materials&nbsp;&mdash; granite, quartz,
            porcelain, and more&nbsp;&mdash; transforming ordinary spaces into
            extraordinary environments.
          </p>
        </ScrollReveal>
      </section>

      {/* ── 3. Visual Breather ── */}
      <ParallaxImage
        src={galleryImages[0]}
        alt="Luxury interior lifestyle"
        height="60vh"
      />

      {/* ── 4. Split: Image Left / Text Right — Countertops ── */}
      <section className="fade-to-cream px-6 py-20 md:py-[120px]">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center max-w-[1400px] mx-auto">
            <div className="img-zoom relative aspect-[4/5]">
              <Image
                src={categoryImages.countertops}
                alt="Countertops collection"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="px-12 lg:px-20 mt-10 lg:mt-0">
              <span className="text-xs uppercase tracking-[0.3em] text-[#9a948a] mb-4 block">
                Countertops
              </span>
              <h3
                className="text-3xl font-light"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Nature&apos;s Masterwork
              </h3>
              <p className="text-[#6b6b6b] font-light leading-[1.8] mt-6">
                From the raw grandeur of granite to the refined elegance of
                quartz, our countertop collections honor the beauty inherent in
                natural stone. Each slab is hand-selected for its unique veining,
                depth of color, and timeless character.
              </p>
              <Link
                href="/countertops/granite"
                className="text-xs uppercase tracking-[0.2em] border-b border-[#1a1a1a] pb-1 mt-8 inline-block hover:opacity-60 transition-opacity"
              >
                Explore Collection
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── 5. Split: Text Left / Image Right — Sinks (Reversed) ── */}
      <section className="section-cream px-6 py-20 md:py-[120px]">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center max-w-[1400px] mx-auto">
            <div className="px-12 lg:px-20 mb-10 lg:mb-0 order-2 lg:order-1">
              <span className="text-xs uppercase tracking-[0.3em] text-[#9a948a] mb-4 block">
                Sinks
              </span>
              <h3
                className="text-3xl font-light"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                The Art of Water
              </h3>
              <p className="text-[#6b6b6b] font-light leading-[1.8] mt-6">
                A sink is more than utility&nbsp;&mdash; it is a daily ritual.
                Our collection spans hand-hammered stainless steel, sculptural
                ceramic vessels, and seamlessly integrated composite designs,
                each crafted to elevate the everyday.
              </p>
              <Link
                href="/sinks/stainless-steel"
                className="text-xs uppercase tracking-[0.2em] border-b border-[#1a1a1a] pb-1 mt-8 inline-block hover:opacity-60 transition-opacity"
              >
                Explore Collection
              </Link>
            </div>
            <div className="img-zoom relative aspect-[4/5] order-1 lg:order-2">
              <Image
                src={categoryImages.sinks}
                alt="Sinks collection"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── 6. Visual Breather ── */}
      <ParallaxImage
        src={galleryImages[4]}
        alt="Luxury surface detail"
        height="50vh"
      />

      {/* ── 7. Three-Column Editorial Grid ── */}
      <section className="fade-cream-to-white px-6 py-20 md:py-[120px]">
        <ScrollReveal>
          <h2
            className="text-center text-2xl lg:text-3xl uppercase tracking-[0.2em] font-light mb-20"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Our Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto px-8">
            <Link href="/tile/porcelain" className="group block">
              <div className="img-zoom relative aspect-[3/4]">
                <Image
                  src={categoryImages.tile}
                  alt="Tile collection"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <p className="text-xs uppercase tracking-[0.25em] mt-6">Tile</p>
              <p className="text-[#9a948a] text-xs mt-1">
                Porcelain &middot; Ceramic &middot; Stone
              </p>
            </Link>
            <Link href="/flooring/designer" className="group block">
              <div className="img-zoom relative aspect-[3/4]">
                <Image
                  src={categoryImages.flooring}
                  alt="Flooring collection"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <p className="text-xs uppercase tracking-[0.25em] mt-6">
                Flooring
              </p>
              <p className="text-[#9a948a] text-xs mt-1">
                Designer &middot; Classic &middot; SPC
              </p>
            </Link>
            <Link href="/mirrors" className="group block">
              <div className="img-zoom relative aspect-[3/4]">
                <Image
                  src={categoryImages.mirrors}
                  alt="Mirrors collection"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <p className="text-xs uppercase tracking-[0.25em] mt-6">
                Mirrors
              </p>
              <p className="text-[#9a948a] text-xs mt-1">
                Framed &middot; Frameless &middot; Custom
              </p>
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* ── 8. Full-Width Quote ── */}
      <section className="section-cream px-6 py-20 md:py-[120px]">
        <ScrollReveal>
          <blockquote className="text-center">
            <p
              className="text-2xl md:text-3xl lg:text-4xl font-light italic max-w-3xl mx-auto leading-[1.6]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              &ldquo;We don&apos;t just sell surfaces. We curate the foundation
              of extraordinary spaces.&rdquo;
            </p>
            <footer className="text-xs uppercase tracking-[0.3em] text-[#9a948a] mt-10">
              &mdash; YUDU Products
            </footer>
          </blockquote>
        </ScrollReveal>
      </section>

      {/* ── 9. Gallery Preview ── */}
      <section className="fade-cream-to-white px-6 py-20 md:py-[120px]">
        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[1200px] mx-auto">
            <div className="img-zoom relative aspect-[4/3]">
              <Image
                src={galleryImages[1]}
                alt="Gallery preview 1"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="img-zoom relative aspect-[4/3]">
              <Image
                src={galleryImages[2]}
                alt="Gallery preview 2"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="text-center mt-16">
            <Link
              href="/gallery"
              className="text-xs uppercase tracking-[0.25em] border-b border-[#1a1a1a] pb-1 inline-block hover:opacity-60 transition-opacity"
            >
              View Gallery
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* ── 10. Contact CTA ── */}
      <section className="section-white px-6 py-20 md:py-[120px] text-center">
        <ScrollReveal>
          <div className="divider mx-auto mb-10" />
          <h2
            className="text-3xl font-light uppercase tracking-[0.2em]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Experience YUDU
          </h2>
          <p className="text-[#6b6b6b] font-light mt-6 text-lg max-w-xl mx-auto">
            Visit our Houston showroom to see and touch our curated collections.
            Let our design consultants help you discover the perfect surfaces for
            your vision.
          </p>
          <Link
            href="/contact"
            className="border border-[#1a1a1a] px-12 py-5 text-xs uppercase tracking-[0.25em] hover:bg-[#1a1a1a] hover:text-white transition-all duration-500 mt-12 inline-block"
          >
            Schedule a Visit
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
