"use client";

import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import ScrollReveal from "@/components/ScrollReveal";
import CategoryCard from "@/components/CategoryCard";
import { heroImages, categoryImages, galleryImages } from "@/lib/images";

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <HeroSlider
        images={heroImages}
        title="YUDU"
        subtitle="Luxury Surfaces for Inspired Living"
      />

      {/* ── Brand Statement ── */}
      <section className="px-6 py-32 text-center">
        <ScrollReveal>
          <div className="divider mx-auto mb-8" />
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl uppercase tracking-[0.2em] md:text-4xl">
            The Art of Surface
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-base font-light leading-relaxed text-muted">
            Every surface tells a story. At YUDU Products, we curate the
            world&apos;s finest materials&nbsp;&mdash; granite, quartz,
            porcelain, and more&nbsp;&mdash; transforming ordinary spaces into
            extraordinary environments.
          </p>
        </ScrollReveal>
      </section>

      {/* ── Category Showcase ── */}
      <section className="px-6 py-32">
        <ScrollReveal>
          <h2 className="mb-16 text-center font-[family-name:var(--font-playfair)] text-3xl uppercase tracking-[0.2em] md:text-4xl">
            Our Collections
          </h2>

          {/* First row — 3 cards */}
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <CategoryCard
              title="Countertops"
              subtitle="Granite &middot; Quartz &middot; Marble"
              image={categoryImages.countertops}
              href="/countertops/granite"
            />
            <CategoryCard
              title="Sinks"
              subtitle="Stainless &middot; Ceramic &middot; Composite"
              image={categoryImages.sinks}
              href="/sinks/stainless-steel"
            />
            <CategoryCard
              title="Tile"
              subtitle="Porcelain &middot; Ceramic &middot; Stone"
              image={categoryImages.tile}
              href="/tile/porcelain"
            />
          </div>

          {/* Second row — 2 cards, centered */}
          <div className="mx-auto mt-6 flex max-w-6xl flex-wrap justify-center gap-6">
            <div className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
              <CategoryCard
                title="Flooring"
                subtitle="Designer &middot; Classic &middot; SPC"
                image={categoryImages.flooring}
                href="/flooring/designer"
              />
            </div>
            <div className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
              <CategoryCard
                title="Mirrors"
                subtitle="Framed &middot; Frameless &middot; Custom"
                image={categoryImages.mirrors}
                href="/mirrors"
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── Editorial Gallery Preview ── */}
      <section className="bg-[#f7f5f2] px-6 py-32">
        <ScrollReveal>
          <h2 className="mb-16 text-center font-[family-name:var(--font-playfair)] text-3xl uppercase tracking-[0.2em] md:text-4xl">
            Inspiration
          </h2>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2">
            {galleryImages.slice(0, 4).map((src, i) => (
              <div key={i} className="img-zoom relative aspect-[4/3]">
                <Image
                  src={src}
                  alt={`Gallery inspiration ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/gallery"
              className="text-xs uppercase tracking-widest underline underline-offset-4 transition-opacity hover:opacity-60"
            >
              View Full Gallery
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* ── Contact CTA ── */}
      <section className="px-6 py-32 text-center">
        <ScrollReveal>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl uppercase tracking-[0.2em] md:text-4xl">
            Experience YUDU
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-base font-light leading-relaxed text-muted">
            Visit our Houston showroom to see and touch our curated collections.
          </p>
          <Link
            href="/contact"
            className="mt-12 inline-block border border-foreground px-10 py-4 text-xs uppercase tracking-widest transition-colors hover:bg-foreground hover:text-white"
          >
            Schedule a Visit
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
