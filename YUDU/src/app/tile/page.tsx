"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { tileImages } from "@/lib/images";

const collections = [
  {
    title: "PORCELAIN",
    href: "/tile/porcelain",
    image: tileImages.porcelain[0],
  },
  {
    title: "CERAMIC",
    href: "/tile/ceramic",
    image: tileImages.ceramic[0],
  },
];

export default function TilePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] w-full">
        <Image
          src={tileImages.hero}
          alt="YUDU luxury tile collection"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl text-white tracking-luxury uppercase">
            Tile
          </h1>
        </div>
      </section>

      {/* Editorial Collection Cards */}
      <ScrollReveal>
        <section className="max-w-7xl mx-auto px-6 py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {collections.map((collection, index) => (
              <ScrollReveal key={collection.title} delay={index * 150}>
                <Link href={collection.href} className="group block">
                  <div className="relative aspect-[3/4] img-zoom">
                    <Image
                      src={collection.image}
                      alt={collection.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                      <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-white tracking-luxury uppercase">
                        {collection.title}
                      </h2>
                      <span className="inline-block mt-4 text-sm text-white/80 tracking-widest uppercase border-b border-white/40 pb-1 group-hover:border-white transition-colors duration-500">
                        Explore Collection
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Text Section */}
      <ScrollReveal>
        <section className="max-w-3xl mx-auto px-6 py-24 text-center">
          <div className="divider mx-auto mb-10" />
          <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl tracking-luxury uppercase mb-8">
            Surface & Story
          </h3>
          <p className="text-[#6b6b6b] leading-relaxed text-lg">
            Tile is the language of architecture. Our curated collections span porcelain
            precision and ceramic warmth, offering surfaces that define the character of
            every room they inhabit. Each tile is sourced from the world&apos;s finest
            producers for lasting beauty and uncompromising quality.
          </p>
        </section>
      </ScrollReveal>
    </>
  );
}
