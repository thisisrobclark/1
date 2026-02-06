"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { flooringImages } from "@/lib/images";

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
      <section className="relative h-[70vh] w-full">
        <Image
          src={flooringImages.hero}
          alt="Classic Collection"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-[0.2em] font-[family-name:var(--font-playfair)]">
            Classic Collection
          </h1>
        </div>
      </section>

      {/* Intro */}
      <ScrollReveal>
        <section className="py-24 px-6 text-center">
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] mb-6">
            Enduring Sophistication
          </h2>
          <p className="font-light text-[#6b6b6b] max-w-2xl mx-auto leading-relaxed">
            Rooted in tradition and refined for modern living, our Classic
            Collection celebrates the timeless warmth of natural hardwood.
            These are the floors that age with grace &mdash; rich species
            chosen for their enduring beauty, depth of color, and the quiet
            confidence they bring to every room.
          </p>
        </section>
      </ScrollReveal>

      {/* Product Grid */}
      <ScrollReveal>
        <section className="px-6 md:px-12 lg:px-24 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {products.map((product) => (
              <div key={product.name}>
                <div className="relative aspect-[4/3] img-zoom">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mt-4 text-xs uppercase tracking-widest font-light">
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
          <p className="text-xs uppercase tracking-widest text-[#6b6b6b] mb-8">
            Begin Your Project
          </p>
          <Link
            href="/contact"
            className="inline-block border border-foreground px-10 py-4 text-xs uppercase tracking-widest transition-colors hover:bg-foreground hover:text-white"
          >
            Schedule a Consultation
          </Link>
        </section>
      </ScrollReveal>
    </div>
  );
}
