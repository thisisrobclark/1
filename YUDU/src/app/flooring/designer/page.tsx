"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxImage from "@/components/ParallaxImage";
import { designerVinyl, catalogs } from "@/lib/images";

export default function DesignerFlooringPage() {
  return (
    <>
      <ParallaxImage src={designerVinyl[0].image} alt="Designer Collection" height="70vh">
        <p
          className="text-sm uppercase tracking-[0.35em] text-white font-light"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          DESIGNER COLLECTION
        </p>
      </ParallaxImage>

      <section className="bg-white py-20 text-center">
        <ScrollReveal>
          <p className="text-[#908d88] font-light max-w-xl mx-auto text-sm leading-relaxed px-6" style={{ fontFamily: "var(--font-accent)" }}>
            Premium luxury vinyl in artisan finishes.
            Designed for spaces that demand distinction.
          </p>
          <a
            href={catalogs.designerVinyl}
            download
            className="text-[10px] uppercase tracking-[0.3em] text-[#b38041] border-b border-[#b38041] pb-1 mt-8 inline-block hover:text-[#333] transition-colors"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            DOWNLOAD CATALOG (PDF)
          </a>
        </ScrollReveal>
      </section>

      <section className="bg-white">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 max-w-[1400px] mx-auto">
          {designerVinyl.map((product, index) => (
            <ScrollReveal key={product.name} delay={index * 40}>
              <div className="group img-zoom">
                <div className="relative aspect-square">
                  <Image src={product.image} alt={product.name} fill className="object-cover" sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center pointer-events-none">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2">
                      <p className="text-[11px] uppercase tracking-[0.15em] text-white font-light" style={{ fontFamily: "var(--font-accent)" }}>
                        {product.dimensions}
                      </p>
                      <p className="text-[10px] text-white/70 mt-1" style={{ fontFamily: "var(--font-accent)" }}>
                        {product.thickness} &middot; {product.wearLayer} wear layer
                      </p>
                    </div>
                  </div>
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
