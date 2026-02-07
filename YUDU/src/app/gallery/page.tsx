"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxImage from "@/components/ParallaxImage";
import { galleryImages } from "@/lib/images";

function getAspectClass(index: number): string {
  const position = index % 3;
  if (position === 0) return "aspect-[3/4]";
  if (position === 1) return "aspect-[4/3]";
  return "aspect-square";
}

export default function GalleryPage() {
  return (
    <>
      <ParallaxImage src={galleryImages[0]} alt="Gallery" height="70vh">
        <p
          className="text-sm uppercase tracking-[0.35em] text-white font-light"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          GALLERY
        </p>
      </ParallaxImage>

      <section className="bg-white py-24">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-1 max-w-[1400px] mx-auto px-4">
          {galleryImages.map((src, index) => (
            <ScrollReveal key={index} delay={index * 40}>
              <div className="break-inside-avoid mb-1 img-zoom">
                <div className={`relative ${getAspectClass(index)} group cursor-pointer`}>
                  <Image
                    src={src}
                    alt={`Project ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-700" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 text-center">
        <ScrollReveal>
          <p
            className="text-lg font-light tracking-[0.15em] text-[#333]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            READY TO BEGIN?
          </p>
          <Link
            href="/contact"
            className="text-[10px] uppercase tracking-[0.3em] text-[#666] border-b border-[#ccc] pb-1 mt-8 inline-block hover:text-[#333] transition-colors"
          >
            GET IN TOUCH
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
