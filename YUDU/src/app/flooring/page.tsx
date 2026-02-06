"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxImage from "@/components/ParallaxImage";
import { flooringImages } from "@/lib/images";

const collections = [
  {
    title: "Designer Collection",
    href: "/flooring/designer",
    image: flooringImages.designer[0],
  },
  {
    title: "Classic Collection",
    href: "/flooring/classic",
    image: flooringImages.classic[0],
  },
  {
    title: "SPC Collection",
    href: "/flooring/spc",
    image: flooringImages.spc[0],
  },
];

export default function FlooringPage() {
  return (
    <div>
      {/* Hero */}
      <ParallaxImage src={flooringImages.hero} alt="Flooring" height="80vh">
        <h1
          className="text-5xl md:text-7xl text-white font-light uppercase tracking-[0.2em]"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Flooring
        </h1>
      </ParallaxImage>

      {/* Intro */}
      <section className="section-white py-[120px] px-6 text-center">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto">
            <div className="w-12 h-px bg-[#1a1a1a]/30 mx-auto mb-10" />
            <p
              className="font-light text-[#6b6b6b] leading-[1.9] text-base"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              The foundation of every extraordinary interior begins underfoot.
              Our curated flooring collections bring together the world&apos;s
              finest hardwoods, engineered innovations, and luxury vinyl &mdash;
              each selected for its beauty, durability, and ability to transform
              a room into an experience.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Three-Column Editorial Grid */}
      <section className="fade-to-cream py-[100px] px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {collections.map((collection, i) => (
            <ScrollReveal key={collection.title} delay={i * 150}>
              <Link href={collection.href} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden img-zoom">
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p
                  className="mt-6 text-xs uppercase tracking-[0.2em] text-[#1a1a1a] font-light text-center"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {collection.title}
                </p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="fade-cream-to-white py-[100px] px-6 text-center">
        <ScrollReveal>
          <p
            className="text-xs uppercase tracking-[0.25em] text-[#6b6b6b] mb-8"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Begin Your Project
          </p>
          <Link
            href="/contact"
            className="inline-block border border-[#1a1a1a] px-12 py-5 text-xs uppercase tracking-[0.25em] hover:bg-[#1a1a1a] hover:text-white transition-all duration-500"
          >
            Get in Touch
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
