"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { mirrorImages } from "@/lib/images";

const products = [
  {
    name: 'Lumi\u00e8re Round 30"',
    spec: '30" Diameter \u00b7 LED Backlit',
  },
  {
    name: "Atelier Rectangle 36\u00d728",
    spec: '36" \u00d7 28" \u00b7 Dimmable',
  },
  {
    name: "Provence Oval 24\u00d736",
    spec: '24" \u00d7 36" \u00b7 Anti-Fog',
  },
  {
    name: "Monaco Arch 26\u00d738",
    spec: '26" \u00d7 38" \u00b7 Touch Sensor',
  },
  {
    name: 'Riviera Square 28"',
    spec: '28" \u00d7 28" \u00b7 RGB Color',
  },
  {
    name: "Ch\u00e2teau Full Length 22\u00d760",
    spec: '22" \u00d7 60" \u00b7 Motion Activated',
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
      <section className="relative h-[70vh] w-full">
        <Image
          src={mirrorImages.hero}
          alt="YUDU Back Lit Mirrors"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-[0.2em] font-[family-name:var(--font-playfair)]">
            Mirrors
          </h1>
          <p className="text-white/70 text-sm uppercase tracking-widest">
            Back Lit Mirror Collection
          </p>
        </div>
      </section>

      {/* Intro */}
      <ScrollReveal>
        <section className="py-24 px-6 text-center">
          <div className="divider mx-auto mb-8" />
          <h2 className="text-2xl md:text-3xl uppercase tracking-[0.15em] font-[family-name:var(--font-playfair)] mb-6">
            Illuminate Your Space
          </h2>
          <p className="font-light text-[#6b6b6b] max-w-2xl mx-auto leading-relaxed">
            Our curated collection of back-lit mirrors transforms any bathroom
            or vanity into a luminous sanctuary. Each mirror features
            energy-efficient LED illumination with adjustable color temperature.
          </p>
        </section>
      </ScrollReveal>

      {/* Product Collection */}
      <ScrollReveal>
        <section className="pb-32">
          <p className="text-xs uppercase tracking-widest text-center mb-16">
            Back Lit Mirror Collection
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 md:px-16 lg:px-24">
            {products.map((product, index) => (
              <div key={product.name}>
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
                <p className="uppercase text-xs tracking-widest mt-4">
                  {product.name}
                </p>
                <p className="text-[#6b6b6b] text-xs mt-1">{product.spec}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Features */}
      <ScrollReveal>
        <section className="bg-[#f7f5f2] py-24 px-6">
          <h2 className="text-2xl md:text-3xl uppercase tracking-[0.15em] font-[family-name:var(--font-playfair)] text-center mb-16">
            Crafted Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <h3 className="uppercase text-xs tracking-widest mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#6b6b6b] text-sm font-light">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Bottom CTA */}
      <ScrollReveal>
        <section className="py-24 text-center">
          <h2 className="text-2xl md:text-3xl uppercase tracking-[0.15em] font-[family-name:var(--font-playfair)] mb-10">
            Transform Your Space
          </h2>
          <Link
            href="/contact"
            className="inline-block border border-foreground px-10 py-4 uppercase tracking-widest text-xs hover:bg-foreground hover:text-white transition-all duration-300"
          >
            Request a Consultation
          </Link>
        </section>
      </ScrollReveal>
    </div>
  );
}
