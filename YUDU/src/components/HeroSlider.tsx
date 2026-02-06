"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface HeroSliderProps {
  images: string[];
  title: string;
  subtitle?: string;
}

export default function HeroSlider({ images, title, subtitle }: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const advanceSlide = useCallback(() => {
    if (images.length <= 1) return;

    setIsTransitioning(true);
    setPreviousIndex(currentIndex);
    setCurrentIndex((prev) => (prev + 1) % images.length);

    // Clear the outgoing slide after the crossfade completes
    setTimeout(() => {
      setPreviousIndex(null);
      setIsTransitioning(false);
    }, 1500);
  }, [currentIndex, images.length]);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(advanceSlide, 6000);
    return () => clearInterval(interval);
  }, [advanceSlide, images.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Image layers */}
      {images.map((src, index) => {
        const isCurrent = index === currentIndex;
        const isPrevious = index === previousIndex;
        const isVisible = isCurrent || isPrevious;

        if (!isVisible) return null;

        return (
          <div
            key={`${src}-${index}`}
            className={`absolute inset-0 ${
              isCurrent && isTransitioning
                ? "hero-slide-enter"
                : ""
            } ${
              isPrevious && isTransitioning
                ? "hero-slide-exit"
                : ""
            }`}
            style={{
              zIndex: isCurrent ? 2 : 1,
            }}
          >
            <Image
              src={src}
              alt={`${title} — slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
          </div>
        );
      })}

      {/* Gradient overlay for text readability */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.40) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.05) 60%, rgba(0,0,0,0.30) 100%)",
        }}
      />

      {/* Text content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6">
        <h1
          className="text-center text-4xl font-semibold uppercase tracking-[0.2em] text-white sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {title}
        </h1>

        {subtitle && (
          <p className="mt-6 text-center text-sm font-light uppercase tracking-[0.3em] text-white/80">
            {subtitle}
          </p>
        )}
      </div>

      {/* Scroll-down indicator */}
      <div className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2">
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] font-light uppercase tracking-[0.3em] text-white/50">
            Scroll
          </span>
          <div className="relative h-12 w-px overflow-hidden bg-white/20">
            <div
              className="absolute left-0 top-0 h-full w-full bg-white/70"
              style={{
                animation: "scrollIndicator 2s cubic-bezier(0.76, 0, 0.24, 1) infinite",
              }}
            />
          </div>
        </div>

        {/* Inline keyframes for the scroll indicator */}
        <style jsx>{`
          @keyframes scrollIndicator {
            0% {
              transform: translateY(-100%);
            }
            50% {
              transform: translateY(0%);
            }
            100% {
              transform: translateY(100%);
            }
          }
        `}</style>
      </div>
    </section>
  );
}
