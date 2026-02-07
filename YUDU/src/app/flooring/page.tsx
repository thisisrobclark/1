"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxImage from "@/components/ParallaxImage";
import { flooringImages } from "@/lib/images";

const collections = [
  { title: "Designer Collection", href: "/flooring/designer", image: flooringImages.designer[0] },
  { title: "Classic Collection", href: "/flooring/classic", image: flooringImages.classic[0] },
  { title: "SPC Collection", href: "/flooring/spc", image: flooringImages.spc[0] },
];

export default function FlooringPage() {
  return (
    <>
      <ParallaxImage src={flooringImages.hero} alt="Flooring" height="80vh">
        <p
          className="text-sm uppercase tracking-[0.35em] text-white font-light"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          FLOORING
        </p>
      </ParallaxImage>

      <section className="bg-white py-24 text-center">
        <ScrollReveal>
          <p
            className="text-lg font-light tracking-[0.15em] text-[#333]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            THE FOUNDATION
          </p>
          <p className="text-[#666] font-light max-w-xl mx-auto mt-6 text-sm leading-relaxed px-6">
            The world&apos;s finest hardwoods, engineered innovations, and luxury vinyl &mdash;
            each selected for beauty, durability, and the ability to transform a room.
          </p>
        </ScrollReveal>
      </section>

      <section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 max-w-[1400px] mx-auto">
          {collections.map((collection, i) => (
            <ScrollReveal key={collection.title} delay={i * 100}>
              <Link href={collection.href} className="group block">
                <div className="relative aspect-[3/4] img-zoom">
                  <Image src={collection.image} alt={collection.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-700" />
                </div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#666] font-light text-center mt-6 mb-12">
                  {collection.title}
                </p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="bg-white py-24 text-center">
        <ScrollReveal>
          <Link
            href="/contact"
            className="text-[10px] uppercase tracking-[0.3em] text-[#666] border-b border-[#ccc] pb-1 inline-block hover:text-[#333] transition-colors"
          >
            GET IN TOUCH
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
