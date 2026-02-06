"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { flooringImages } from "@/lib/images";

const products = [
  { name: "European White Oak", image: flooringImages.designer[0] },
  { name: "Herringbone Walnut", image: flooringImages.designer[1] },
  { name: "Wide Plank Hickory", image: flooringImages.designer[2] },
  { name: "French Grey Oak", image: flooringImages.designer[3] },
];

export default function DesignerFlooringPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] w-full">
        <Image
          src={flooringImages.hero}
          alt="Designer Collection"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-[0.2em] font-[family-name:var(--font-playfair)]">
            Designer Collection
          </h1>
        </div>
      </section>

      {/* Intro */}
      <ScrollReveal>
        <section className="py-24 px-6 text-center">
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] mb-6">
            Bespoke Beauty
          </h2>
          <p className="font-light text-[#6b6b6b] max-w-2xl mx-auto leading-relaxed">
            Crafted for those who demand the extraordinary, our Designer
            Collection showcases premium hardwoods sourced from the finest mills
            in Europe and North America. Each plank is hand-selected for its
            grain character, tonal richness, and architectural presence &mdash;
            flooring that transcends the functional to become a work of art.
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
