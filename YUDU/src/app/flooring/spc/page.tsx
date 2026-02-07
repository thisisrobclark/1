"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxImage from "@/components/ParallaxImage";
import { spcProducts, catalogs } from "@/lib/images";

export default function SPCFlooringPage() {
  return (
    <>
      <ParallaxImage src="/images/spc-products/page-01.jpg" alt="SPC Flooring" height="70vh">
        <p
          className="text-sm uppercase tracking-[0.35em] text-white font-light"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          SPC COLLECTION
        </p>
      </ParallaxImage>

      <section className="bg-white py-20 text-center">
        <ScrollReveal>
          <p className="text-[#908d88] font-light max-w-xl mx-auto text-sm leading-relaxed px-6" style={{ fontFamily: "var(--font-accent)" }}>
            Stone polymer composite with the look of real hardwood.
            100% waterproof, dimensionally stable, and built for modern living.
          </p>
          <a
            href={catalogs.spcFlooring}
            download
            className="text-[10px] uppercase tracking-[0.3em] text-[#b38041] border-b border-[#b38041] pb-1 mt-8 inline-block hover:text-[#333] transition-colors"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            DOWNLOAD FULL CATALOG (PDF)
          </a>
        </ScrollReveal>
      </section>

      <section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 max-w-[1400px] mx-auto">
          {spcProducts.map((product, index) => (
            <ScrollReveal key={product.name} delay={index * 60}>
              <div className="img-zoom">
                <div className="relative aspect-[4/3]">
                  <Image src={product.image} alt={product.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
              </div>
              <div className="px-4 py-5">
                <p className="text-[12px] uppercase tracking-[0.15em] text-[#333]" style={{ fontFamily: "var(--font-accent)" }}>
                  {product.name}
                </p>
                <p className="text-[11px] text-[#908d88] mt-1" style={{ fontFamily: "var(--font-accent)" }}>
                  {product.dimensions} &nbsp;&middot;&nbsp; Wear Layer: {product.wearLayer} &nbsp;&middot;&nbsp; {product.padding}
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
