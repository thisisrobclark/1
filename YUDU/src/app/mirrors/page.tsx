"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxImage from "@/components/ParallaxImage";
import { mirrorImages, galleryImages } from "@/lib/images";

const products = [
  {
    name: 'Lumière Round 30"',
    spec: '30" Diameter · LED Backlit',
  },
  {
    name: "Atelier Rectangle 36×28",
    spec: '36" × 28" · Dimmable',
  },
  {
    name: "Provence Oval 24×36",
    spec: '24" × 36" · Anti-Fog',
  },
  {
    name: "Monaco Arch 26×38",
    spec: '26" × 38" · Touch Sensor',
  },
  {
    name: 'Riviera Square 28"',
    spec: '28" × 28" · RGB Color',
  },
  {
    name: "Château Full Length 22×60",
    spec: '22" × 60" · Motion Activated',
  },
];

const features = [
  {
    title: "LED Illumination",
    description:
      "Energy-efficient LED strips with 50,000+ hour lifespan",
  },
  {
    title: "Smart Controls",
    description:
      "Touch sensors, dimmers, and color temperature adjustment",
  },
  {
    title: "Premium Materials",
    description:
      "Anti-fog coating, shatter-resistant glass, aluminum frames",
  },
];

export default function MirrorsPage() {
  return (
    <div>
      {/* Hero */}
      <ParallaxImage src={mirrorImages.hero} alt="YUDU Back Lit Mirrors" height="80vh">
        <h1
          className="text-5xl md:text-7xl text-white font-light uppercase tracking-[0.2em]"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          MIRRORS
        </h1>
        <p className="text-sm text-white/70 uppercase tracking-[0.3em] mt-4">
          Back Lit Mirror Collection
        </p>
      </ParallaxImage>

      {/* Intro */}
      <section className="section-white py-[120px] text-center">
        <ScrollReveal>
          <div className="divider mx-auto mb-10" />
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-light uppercase tracking-[0.15em]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            ILLUMINATE YOUR SPACE
          </h2>
          <p className="font-light text-[#6b6b6b] max-w-2xl mx-auto text-lg leading-[1.8] mt-8">
            Our curated collection of back-lit mirrors transforms any bathroom
            or vanity into a luminous sanctuary. Each mirror features
            energy-efficient LED illumination with adjustable color temperature,
            blending artful design with everyday function.
          </p>
        </ScrollReveal>
      </section>

      {/* Product Collection */}
      <section className="fade-to-cream py-[100px]">
        <p className="text-xs uppercase tracking-[0.3em] text-[#9a948a] text-center mb-20">
          BACK LIT MIRROR COLLECTION
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 max-w-[1200px] mx-auto px-8">
          {products.map((product, index) => (
            <ScrollReveal key={product.name} delay={index * 100}>
              <div className="img-zoom">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={mirrorImages.products[index]}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <p className="text-xs uppercase tracking-[0.2em] mt-6">
                {product.name}
              </p>
              <p className="text-[#9a948a] text-xs mt-1">{product.spec}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Breather */}
      <ParallaxImage src={galleryImages[1]} alt="Luxury interior" height="45vh" />

      {/* Features */}
      <section className="section-cream py-[100px]">
        <ScrollReveal>
          <h2
            className="text-2xl font-light uppercase tracking-[0.15em] text-center mb-16"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            CRAFTED DETAILS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-[900px] mx-auto px-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <h3 className="text-xs uppercase tracking-[0.25em] mb-4">
                  {feature.title}
                </h3>
                <p className="text-[#6b6b6b] text-sm font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* CTA */}
      <section className="fade-cream-to-white py-[120px] text-center">
        <ScrollReveal>
          <h2
            className="text-3xl font-light"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            TRANSFORM YOUR SPACE
          </h2>
          <Link
            href="/contact"
            className="border border-[#1a1a1a] px-12 py-5 text-xs uppercase tracking-[0.25em] hover:bg-[#1a1a1a] hover:text-white transition-all duration-500 inline-block mt-12"
          >
            Request a Consultation
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
