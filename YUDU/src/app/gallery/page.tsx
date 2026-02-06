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
      {/* Hero */}
      <ParallaxImage src={galleryImages[0]} alt="Gallery hero" height="70vh">
        <h1
          className="text-5xl md:text-7xl text-white font-light uppercase tracking-[0.2em]"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          GALLERY
        </h1>
        <p className="text-sm text-white/70 uppercase tracking-[0.3em] mt-4">
          Project Showcase &amp; Inspiration
        </p>
      </ParallaxImage>

      {/* Masonry Gallery */}
      <section className="section-white py-[100px]">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 max-w-[1400px] mx-auto px-8 md:px-16">
          {galleryImages.map((src, index) => (
            <ScrollReveal key={index} delay={index * 60}>
              <div className="break-inside-avoid mb-4 img-zoom">
                <div
                  className={`relative ${getAspectClass(index)} group cursor-pointer`}
                >
                  <Image
                    src={src}
                    alt={`Gallery project ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-700 flex items-center justify-center">
                    <span className="text-white text-xs uppercase tracking-[0.25em] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      View Project
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="fade-to-cream py-[120px]">
        <ScrollReveal>
          <p
            className="text-2xl md:text-3xl font-light italic max-w-3xl mx-auto text-center leading-[1.6] px-8"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            &ldquo;Every project begins with a vision. We&rsquo;re here to help
            you realize it.&rdquo;
          </p>
        </ScrollReveal>
      </section>

      {/* CTA */}
      <section className="section-cream py-[100px] text-center">
        <ScrollReveal>
          <h2
            className="text-2xl md:text-3xl font-light uppercase tracking-[0.15em]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            READY TO BEGIN YOUR PROJECT?
          </h2>
          <p className="text-[#6b6b6b] font-light mt-6">
            Let our design team help bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="border border-[#1a1a1a] px-12 py-5 text-xs uppercase tracking-[0.25em] hover:bg-[#1a1a1a] hover:text-white transition-all duration-500 inline-block mt-10"
          >
            GET IN TOUCH
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
