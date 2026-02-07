"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxImage from "@/components/ParallaxImage";
import { tileImages, catalogs } from "@/lib/images";

const tileThumb = "/images/heroes/tilehero.jpg";

const products = [
  { name: "Carrara Vein", spec: '24" \u00d7 48" \u00b7 Matte \u00b7 Rectified', image: tileThumb },
  { name: "Calacatta Gold", spec: '32" \u00d7 32" \u00b7 Polished \u00b7 Rectified', image: tileThumb },
  { name: "Pietra Grey", spec: '24" \u00d7 24" \u00b7 Honed \u00b7 Through-Body', image: tileThumb },
  { name: "Statuario White", spec: '12" \u00d7 24" \u00b7 Polished \u00b7 Rectified', image: tileThumb },
];

export default function PorcelainPage() {
  return (
    <>
      <ParallaxImage src={tileImages.hero} alt="Porcelain Tile" height="70vh">
        <p
          className="text-sm uppercase tracking-[0.35em] text-white font-light"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          PORCELAIN
        </p>
      </ParallaxImage>

      <section className="bg-white py-24 text-center">
        <ScrollReveal>
          <p className="text-[#908d88] font-light max-w-xl mx-auto text-sm leading-relaxed px-6" style={{ fontFamily: "var(--font-accent)" }}>
            Fired at extreme temperatures for exceptional density and durability.
            Impervious to moisture and virtually maintenance-free.
          </p>
          <a
            href={catalogs.porcelainTile}
            download
            className="text-[10px] uppercase tracking-[0.3em] text-[#b38041] border-b border-[#b38041] pb-1 mt-8 inline-block hover:text-[#333] transition-colors"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            DOWNLOAD CATALOG (PDF)
          </a>
        </ScrollReveal>
      </section>

      <section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 max-w-[1400px] mx-auto">
          {products.map((product, index) => (
            <ScrollReveal key={product.name} delay={index * 80}>
              <div className="img-zoom">
                <div className="relative aspect-[4/3]">
                  <Image src={product.image} alt={product.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
              </div>
              <div className="px-4 py-6">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#333]" style={{ fontFamily: "var(--font-accent)" }}>{product.name}</p>
                <p className="text-[11px] text-[#908d88] mt-1" style={{ fontFamily: "var(--font-accent)" }}>{product.spec}</p>
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
