"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { flooringImages } from "@/lib/images";

const products = [
  { name: "Alabaster Stone", image: flooringImages.spc[0] },
  { name: "Midnight Slate", image: flooringImages.spc[1] },
  { name: "Coastal Driftwood", image: flooringImages.spc[2] },
  { name: "Alpine Marble", image: flooringImages.spc[3] },
];

export default function SpcFlooringPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] w-full">
        <Image
          src={flooringImages.hero}
          alt="SPC Collection"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-[0.2em] font-[family-name:var(--font-playfair)]">
            SPC Collection
          </h1>
        </div>
      </section>

      {/* Intro */}
      <ScrollReveal>
        <section className="py-24 px-6 text-center">
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] mb-6">
            Innovation Meets Design
          </h2>
          <p className="font-light text-[#6b6b6b] max-w-2xl mx-auto leading-relaxed">
            Stone Polymer Composite represents the pinnacle of luxury vinyl
            engineering &mdash; 100% waterproof, dimensionally stable, and
            virtually indestructible. Our SPC Collection pairs this advanced
            performance core with stunningly realistic surfaces that replicate
            natural stone and hardwood with remarkable fidelity, delivering
            beauty without compromise in kitchens, bathrooms, and every
            space in between.
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
