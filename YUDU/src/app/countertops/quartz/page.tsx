"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { countertopImages } from "@/lib/images";

const groundZeroProducts = [
  { name: "Calacatta Classique", image: countertopImages.quartz[0] },
  { name: "Statuario Maximus", image: countertopImages.quartz[1] },
  { name: "Ethereal Noctis", image: countertopImages.quartz[2] },
];

const levelOneProducts = [
  { name: "Empira White", image: countertopImages.quartz[3] },
  { name: "Coastal Grey", image: countertopImages.quartz[4] },
  { name: "Noble Grey", image: countertopImages.quartz[5] },
];

export default function QuartzPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] w-full">
        <Image
          src={countertopImages.hero}
          alt="Quartz Collection"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-[0.2em] font-[family-name:var(--font-playfair)]"
          >
            Quartz Collection
          </h1>
        </div>
      </section>

      {/* Intro */}
      <ScrollReveal>
        <section className="py-24 px-6 text-center">
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] mb-6">
            Engineered Perfection, Infinite Possibility
          </h2>
          <p className="font-light text-muted max-w-2xl mx-auto leading-relaxed">
            Where cutting-edge engineering meets the allure of natural stone, quartz
            delivers uncompromising beauty without sacrifice. Non-porous, stain-resistant,
            and available in an extraordinary range of patterns, it offers the
            refined aesthetic of marble with the enduring performance modern living demands.
          </p>
        </section>
      </ScrollReveal>

      {/* Ground Zero */}
      <ScrollReveal>
        <section className="px-6 md:px-12 lg:px-24 pb-24">
          <div className="flex items-center gap-6 mb-12">
            <span className="text-xs uppercase tracking-widest text-muted whitespace-nowrap">
              Ground Zero
            </span>
            <div className="divider flex-grow" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {groundZeroProducts.map((product) => (
              <div key={product.name}>
                <div className="relative aspect-[4/3] img-zoom">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mt-4 text-sm tracking-wide font-light">
                  {product.name}
                </p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Level 1 */}
      <ScrollReveal>
        <section className="px-6 md:px-12 lg:px-24 pb-32">
          <div className="flex items-center gap-6 mb-12">
            <span className="text-xs uppercase tracking-widest text-muted whitespace-nowrap">
              Level 1
            </span>
            <div className="divider flex-grow" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {levelOneProducts.map((product) => (
              <div key={product.name}>
                <div className="relative aspect-[4/3] img-zoom">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mt-4 text-sm tracking-wide font-light">
                  {product.name}
                </p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal>
        <section className="py-24 text-center border-t border-border">
          <p className="text-xs uppercase tracking-widest text-muted mb-8">
            Begin Your Project
          </p>
          <Link
            href="/contact"
            className="inline-block text-sm uppercase tracking-[0.15em] border-b border-foreground pb-1 hover:opacity-60 transition-opacity"
          >
            Request a Consultation
          </Link>
        </section>
      </ScrollReveal>
    </div>
  );
}
