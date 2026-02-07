"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxImage from "@/components/ParallaxImage";
import { graniteProducts, countertopImages } from "@/lib/images";

export default function GranitePage() {
  return (
    <>
      <ParallaxImage src={countertopImages.hero} alt="Granite Collection" height="70vh">
        <p
          className="text-sm uppercase tracking-[0.35em] text-white font-light"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          GRANITE COLLECTION
        </p>
      </ParallaxImage>

      <section className="bg-white py-20 text-center">
        <ScrollReveal>
          <p className="text-[#908d88] font-light max-w-xl mx-auto text-sm leading-relaxed px-6" style={{ fontFamily: "var(--font-accent)" }}>
            Born deep within the earth, each granite slab carries millions of years of
            geological artistry — singular veining, crystalline depth, and raw mineral beauty.
          </p>
          <p className="text-[11px] text-[#908d88] mt-4" style={{ fontFamily: "var(--font-accent)" }}>
            {graniteProducts.length} selections
          </p>
        </ScrollReveal>
      </section>

      <section className="bg-white">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 max-w-[1400px] mx-auto">
          {graniteProducts.map((product, index) => (
            <ScrollReveal key={product.name} delay={index * 30}>
              <div className="img-zoom">
                <div className="relative aspect-square">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  />
                </div>
              </div>
              <div className="px-3 py-4 text-center">
                <p className="text-[11px] uppercase tracking-[0.15em] text-[#333]" style={{ fontFamily: "var(--font-accent)" }}>
                  {product.name}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="bg-white py-24 text-center">
        <ScrollReveal>
          <Link
            href="/contact"
            className="text-[10px] uppercase tracking-[0.3em] text-[#908d88] border-b border-[#b38041] pb-1 inline-block hover:text-[#b38041] transition-colors"
          >
            REQUEST A CONSULTATION
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
