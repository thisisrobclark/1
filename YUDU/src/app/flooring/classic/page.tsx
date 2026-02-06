"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxImage from "@/components/ParallaxImage";
import { flooringImages, galleryImages } from "@/lib/images";

const products = [
  { name: "Natural Maple", image: flooringImages.classic[0] },
  { name: "Brazilian Cherry", image: flooringImages.classic[1] },
  { name: "Rustic Pecan", image: flooringImages.classic[2] },
  { name: "Espresso Bamboo", image: flooringImages.classic[3] },
];

export default function ClassicFlooringPage() {
  return (
    <div>
      {/* Hero */}
      <ParallaxImage
        src={flooringImages.hero}
        alt="Classic Collection"
        height="80vh"
      >
        <h1
          className="text-5xl md:text-7xl text-white font-light uppercase tracking-[0.2em]"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Classic Collection
        </h1>
        <p className="mt-4 text-sm text-white/70 uppercase tracking-[0.3em]">
          Enduring Sophistication
        </p>
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
              Rooted in tradition and refined for modern living, our Classic
              Collection celebrates the timeless warmth of natural hardwood.
              These are the floors that age with grace &mdash; rich species
              chosen for their enduring beauty, depth of color, and the quiet
              confidence they bring to every room.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Product Grid */}
      <section className="fade-to-cream py-[100px] px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {products.map((product, i) => (
            <ScrollReveal key={product.name} delay={i * 150}>
              <div>
                <div className="relative aspect-[4/3] overflow-hidden img-zoom">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p
                  className="text-xs uppercase tracking-[0.2em] font-light mt-6"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {product.name}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Breather Image */}
      <ParallaxImage
        src={galleryImages[4]}
        alt="Lifestyle interior"
        height="45vh"
      />

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
            Schedule a Consultation
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
