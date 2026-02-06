"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

interface ParallaxImageProps {
  src: string;
  alt: string;
  height?: string;
  speed?: number;
  overlay?: boolean;
  children?: React.ReactNode;
}

export default function ParallaxImage({
  src,
  alt,
  height = "70vh",
  speed = 0.3,
  overlay = true,
  children,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const visible =
        rect.top < windowHeight && rect.bottom > 0;
      if (visible) {
        const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
        setOffset((progress - 0.5) * speed * 200);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className="parallax-wrap"
      style={{ height }}
    >
      <div
        className="parallax-img absolute inset-[-15%]"
        style={{ transform: `translateY(${offset}px)` }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/30" />
      )}
      {children && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
}
