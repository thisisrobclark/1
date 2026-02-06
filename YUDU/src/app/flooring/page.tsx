"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
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
      <section className="relative h-[70vh] w-full">
        <Image
          src={flooringImages.hero}
          alt="Flooring"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-[0.2em] font-[family-name:var(--font-playfair)]">
            Flooring
          </h1>
        </div>
      </section>

      {/* Collections */}
      <ScrollReveal>
        <section className="px-6 md:px-12 lg:px-24 py-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {collections.map((collection) => (
              <Link key={collection.title} href={collection.href} className="group">
                <div className="relative aspect-[3/4] img-zoom">
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 transition-opacity group-hover:bg-black/40" />
                  <div className="absolute inset-0 flex items-end justify-center pb-12">
                    <h2 className="text-lg text-white uppercase tracking-[0.15em] font-[family-name:var(--font-playfair)]">
                      {collection.title}
                    </h2>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Editorial Text */}
      <ScrollReveal>
        <section className="py-24 px-6 text-center">
          <p className="font-light text-[#6b6b6b] max-w-2xl mx-auto leading-relaxed">
            The foundation of every extraordinary interior begins underfoot.
            Our curated flooring collections bring together the world&apos;s
            finest hardwoods, engineered innovations, and luxury vinyl &mdash;
            each selected for its beauty, durability, and ability to transform
            a room into an experience.
          </p>
        </section>
      </ScrollReveal>
    </div>
  );
}
