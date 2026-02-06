"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxImage from "@/components/ParallaxImage";
import { countertopImages, galleryImages } from "@/lib/images";

export default function CountertopsPage() {
  return (
    <div>
      {/* Hero */}
      <ParallaxImage src={countertopImages.hero} alt="YUDU Countertops" height="80vh">
        <h1
          className="text-5xl md:text-7xl text-white uppercase tracking-[0.2em] font-light"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Countertops
        </h1>
      </ParallaxImage>

      {/* Brand Text */}
      <section className="section-white py-[120px] px-6 text-center">
        <ScrollReveal>
          <div className="divider mx-auto mb-10 max-w-[60px]" />
          <h2
            className="text-3xl font-light mb-8"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            The Surface of Distinction
          </h2>
          <p className="font-light text-[#9a948a] max-w-2xl mx-auto leading-relaxed text-base">
            YUDU curates the world&apos;s finest countertop materials — from the raw
            grandeur of natural granite to the precision-engineered brilliance of
            quartz. Each surface is hand-selected for its character, quality, and
            ability to transform a space into something extraordinary.
          </p>
        </ScrollReveal>
      </section>

      {/* Granite — Split Layout */}
      <section className="fade-to-cream py-[100px] px-6 md:px-12 lg:px-24">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="relative aspect-[4/5] img-zoom">
              <Image
                src={countertopImages.granite[0]}
                alt="Granite Collection"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#9a948a] mb-4">
                Granite Collection
              </p>
              <h3
                className="text-3xl font-light mb-6"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Carved by Nature
              </h3>
              <p className="font-light text-[#9a948a] leading-relaxed mb-10 max-w-md">
                Born deep within the earth, each granite slab carries millions of years
                of geological artistry — singular veining, crystalline depth, and raw
                mineral beauty that no two surfaces can replicate.
              </p>
              <Link
                href="/countertops/granite"
                className="text-xs uppercase tracking-[0.2em] border-b border-current pb-1 hover:opacity-60 transition-opacity"
              >
                Explore
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Quartz — Split Layout Reversed */}
      <section className="section-cream py-[100px] px-6 md:px-12 lg:px-24">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="md:order-2 relative aspect-[4/5] img-zoom">
              <Image
                src={countertopImages.quartz[0]}
                alt="Quartz Collection"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:order-1">
              <p className="text-xs uppercase tracking-[0.3em] text-[#9a948a] mb-4">
                Quartz Collection
              </p>
              <h3
                className="text-3xl font-light mb-6"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Engineered Perfection
              </h3>
              <p className="font-light text-[#9a948a] leading-relaxed mb-10 max-w-md">
                Where cutting-edge engineering meets the allure of natural stone.
                Non-porous, stain-resistant, and available in an extraordinary range
                of patterns — the refined aesthetic of marble with enduring performance.
              </p>
              <Link
                href="/countertops/quartz"
                className="text-xs uppercase tracking-[0.2em] border-b border-current pb-1 hover:opacity-60 transition-opacity"
              >
                Explore
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Breather Image */}
      <ParallaxImage src={galleryImages[5]} alt="Luxury interior" height="50vh" />

      {/* CTA */}
      <section className="fade-cream-to-white py-[100px] px-6 text-center">
        <ScrollReveal>
          <p
            className="text-2xl font-light mb-10"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Begin Your Project
          </p>
          <Link
            href="/contact"
            className="inline-block text-xs uppercase tracking-[0.2em] border-b border-current pb-1 hover:opacity-60 transition-opacity"
          >
            Request a Consultation
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
