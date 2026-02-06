"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
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
      {/* Hero */}
      <section className="h-[50vh] bg-[#f7f5f2] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl uppercase tracking-[0.2em]">
            GALLERY
          </h1>
          <p className="text-muted text-sm uppercase tracking-widest mt-4">
            Project Showcase &amp; Inspiration
          </p>
          <div className="divider mx-auto mt-8" />
        </div>
      </section>

      {/* Masonry Gallery Grid */}
      <section className="px-8 md:px-16 lg:px-24 py-24">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
          {galleryImages.map((src, index) => (
            <ScrollReveal key={index} delay={index * 80}>
              <div className="break-inside-avoid mb-4 img-zoom">
                <div className={`relative ${getAspectClass(index)} group cursor-pointer`}>
                  <Image
                    src={src}
                    alt={`Gallery project ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                    <span className="text-white text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      View Project
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA Bottom Section */}
      <section className="py-24 text-center bg-[#f7f5f2]">
        <ScrollReveal>
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl uppercase tracking-[0.2em]">
            READY TO BEGIN YOUR PROJECT?
          </h2>
          <p className="text-muted font-light mt-4">
            Let our design team help bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="border border-foreground px-10 py-4 uppercase tracking-widest text-xs hover:bg-foreground hover:text-white transition-all duration-300 inline-block mt-8"
          >
            GET IN TOUCH
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
