"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { countertopImages } from "@/lib/images";

const collections = [
  {
    title: "Granite Collection",
    href: "/countertops/granite",
    image: countertopImages.granite[0],
  },
  {
    title: "Quartz Collection",
    href: "/countertops/quartz",
    image: countertopImages.quartz[0],
  },
];

export default function CountertopsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] w-full">
        <Image
          src={countertopImages.hero}
          alt="YUDU Countertops"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-[0.2em] font-[family-name:var(--font-playfair)]"
          >
            Countertops
          </h1>
        </div>
      </section>

      {/* Intro */}
      <ScrollReveal>
        <section className="py-24 px-6 text-center">
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] mb-6">
            The Surface of Distinction
          </h2>
          <p className="font-light text-muted max-w-2xl mx-auto leading-relaxed">
            YUDU curates the world&apos;s finest countertop materials — from the raw
            grandeur of natural granite to the precision-engineered brilliance of
            quartz. Each surface is hand-selected for its character, quality, and
            ability to transform a space into something extraordinary.
          </p>
        </section>
      </ScrollReveal>

      {/* Collection Cards */}
      <ScrollReveal>
        <section className="px-6 md:px-12 lg:px-24 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collections.map((collection) => (
              <Link
                key={collection.title}
                href={collection.href}
                className="group block"
              >
                <div className="relative aspect-[3/4] img-zoom">
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500" />
                  <div className="absolute inset-0 flex flex-col items-center justify-end pb-16">
                    <h3 className="text-white text-lg uppercase tracking-[0.2em] font-[family-name:var(--font-playfair)] mb-4">
                      {collection.title}
                    </h3>
                    <span className="text-white/70 text-xs uppercase tracking-widest border-b border-white/40 pb-1 group-hover:border-white/70 transition-colors">
                      Explore
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
