"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxImage from "@/components/ParallaxImage";
import { countertopImages, galleryImages } from "@/lib/images";

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
      <ParallaxImage src={countertopImages.hero} alt="Granite Collection" height="80vh">
        <h1
          className="text-5xl md:text-7xl text-white uppercase tracking-[0.2em] font-light"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Granite Collection
        </h1>
        <p className="text-sm text-white/70 uppercase tracking-[0.2em] mt-4">
          Timeless Elegance, Carved by Nature
        </p>
      </ParallaxImage>

      {/* Intro */}
      <section className="section-white py-[120px] px-6 text-center">
        <ScrollReveal>
          <div className="divider mx-auto mb-10 max-w-[60px]" />
          <p className="font-light text-[#9a948a] max-w-2xl mx-auto leading-relaxed text-base">
            Born deep within the earth over millions of years, granite is nature&apos;s
            masterpiece of strength and beauty. Each slab tells a singular story
            through its unique veining, crystalline depth, and rich mineral
            character — an irreplaceable surface that elevates any space it graces.
          </p>
        </ScrollReveal>
      </section>

      {/* Ground Zero */}
      <section className="fade-to-cream py-[100px] px-6 md:px-12 lg:px-24">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.3em] text-[#9a948a] mb-16 text-center">
            Ground Zero
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
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
                <p className="text-xs uppercase tracking-[0.2em] mt-6 font-light">
                  {product.name}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Breather */}
      <ParallaxImage src={galleryImages[7]} alt="Luxury interior" height="45vh" />

      {/* Level 1 */}
      <section className="section-cream py-[100px] px-6 md:px-12 lg:px-24">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.3em] text-[#9a948a] mb-16 text-center">
            Level 1
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
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
                <p className="text-xs uppercase tracking-[0.2em] mt-6 font-light">
                  {product.name}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* CTA */}
      <section className="fade-cream-to-white py-[100px] px-6 text-center">
        <ScrollReveal>
          <p
            className="text-2xl font-light mb-10"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Begin Your Project
          </p>
          <Link
            href="/contact"
            className="inline-block text-xs uppercase tracking-[0.2em] border-b border-current pb-1 hover:opacity-60 transition-opacity"
          >
            Request a Consultation
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
