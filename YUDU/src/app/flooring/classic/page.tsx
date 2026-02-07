"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxImage from "@/components/ParallaxImage";
import { classicVinyl, catalogs } from "@/lib/images";

export default function ClassicFlooringPage() {
  return (
    <>
      <ParallaxImage src={classicVinyl[0].image} alt="Classic Collection" height="70vh">
        <p
          className="text-sm uppercase tracking-[0.35em] text-white font-light"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          CLASSIC COLLECTION
        </p>
      </ParallaxImage>

      <section className="bg-white py-20 text-center">
        <ScrollReveal>
          <p className="text-[#908d88] font-light max-w-xl mx-auto text-sm leading-relaxed px-6" style={{ fontFamily: "var(--font-accent)" }}>
            Time-honored wood and stone looks in durable luxury vinyl.
            The warmth and character your space deserves.
          </p>
          <a
            href={catalogs.classicVinyl}
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
          {classicVinyl.map((product, index) => (
            <ScrollReveal key={product.name} delay={index * 40}>
              <div className="img-zoom">
                <div className="relative aspect-square">
                  <Image src={product.image} alt={product.name} fill className="object-cover" sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw" />
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
