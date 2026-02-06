"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { countertopImages } from "@/lib/images";

const groundZeroProducts = [
  { name: "Absolute Black", image: countertopImages.granite[0] },
  { name: "Bianco Antico", image: countertopImages.granite[1] },
  { name: "Colonial White", image: countertopImages.granite[2] },
];

const levelOneProducts = [
  { name: "Giallo Ornamental", image: countertopImages.granite[3] },
  { name: "Steel Grey", image: countertopImages.granite[4] },
  { name: "Typhoon Bordeaux", image: countertopImages.granite[5] },
];

export default function GranitePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] w-full">
        <Image
          src={countertopImages.hero}
          alt="Granite Collection"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-[0.2em] font-[family-name:var(--font-playfair)]"
          >
            Granite Collection
          </h1>
        </div>
      </section>

      {/* Intro */}
      <ScrollReveal>
        <section className="py-24 px-6 text-center">
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] mb-6">
            Timeless Elegance, Carved by Nature
          </h2>
          <p className="font-light text-muted max-w-2xl mx-auto leading-relaxed">
            Born deep within the earth over millions of years, granite is nature&apos;s
            masterpiece of strength and beauty. Each slab tells a singular story
            through its unique veining, crystalline depth, and rich mineral
            character — an irreplaceable surface that elevates any space it graces.
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
