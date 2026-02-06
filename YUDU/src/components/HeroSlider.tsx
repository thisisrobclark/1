"use client";

import { useState, useEffect, useCallback, useRef } from "react";
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
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const advanceSlide = useCallback(() => {
    if (images.length <= 1) return;
    setIsTransitioning(true);
    setPreviousIndex(currentIndex);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => {
      setPreviousIndex(null);
      setIsTransitioning(false);
    }, 2000);
  }, [currentIndex, images.length]);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(advanceSlide, 7000);
    return () => clearInterval(interval);
  }, [advanceSlide, images.length]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.bottom > 0) {
        setParallaxOffset(-rect.top * 0.25);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden bg-black">
      {images.map((src, index) => {
        const isCurrent = index === currentIndex;
        const isPrevious = index === previousIndex;
        if (!isCurrent && !isPrevious) return null;

        return (
          <div
            key={`${src}-${index}`}
            className={`absolute inset-0 ${
              isCurrent && isTransitioning ? "hero-slide-enter" : ""
            } ${isPrevious && isTransitioning ? "hero-slide-exit" : ""}`}
            style={{ zIndex: isCurrent ? 2 : 1 }}
          >
            <div
              className="absolute inset-[-10%]"
              style={{ transform: `translateY(${parallaxOffset}px)` }}
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
          </div>
        );
      })}

      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.08) 40%, rgba(0,0,0,0.05) 60%, rgba(0,0,0,0.35) 100%)",
        }}
      />

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6">
        <h1
          className="text-center text-4xl font-light uppercase tracking-[0.25em] text-white sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-8 text-center text-xs font-light uppercase tracking-[0.35em] text-white/70 md:text-sm">
            {subtitle}
          </p>
        )}
      </div>

      <div className="absolute bottom-12 left-1/2 z-20 -translate-x-1/2">
        <div className="flex flex-col items-center gap-4">
          <span className="text-[9px] font-light uppercase tracking-[0.4em] text-white/40">
            Scroll
          </span>
          <div className="relative h-16 w-px overflow-hidden bg-white/15">
            <div
              className="absolute left-0 top-0 h-full w-full bg-white/50"
              style={{
                animation: "scrollLine 2.5s cubic-bezier(0.76, 0, 0.24, 1) infinite",
              }}
            />
          </div>
        </div>
        <style jsx>{`
          @keyframes scrollLine {
            0% { transform: translateY(-100%); }
            50% { transform: translateY(0%); }
            100% { transform: translateY(100%); }
          }
        `}</style>
      </div>
    </section>
  );
}
