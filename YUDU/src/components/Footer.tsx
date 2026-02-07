import Link from "next/link";
import YuduLogo from "@/components/YuduLogo";

const navLinks = [
  { label: "Countertops", href: "/countertops" },
  { label: "Sinks", href: "/sinks" },
  { label: "Tile", href: "/tile" },
  { label: "Flooring", href: "/flooring" },
  { label: "Mirrors", href: "/mirrors" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#e0dcd6]">
      <div className="max-w-[1400px] mx-auto px-8 py-24 text-center">
        <Link href="/" aria-label="YUDU Products Home">
          <YuduLogo height={32} showTagline color="#333" />
        </Link>

        <div className="w-10 h-px bg-[#b38041] mx-auto mt-12" />

        <nav className="mt-10 flex flex-wrap items-center justify-center gap-6 md:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] uppercase tracking-[0.2em] font-light text-[#908d88] hover:text-[#b38041] transition-colors duration-200"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-16 space-y-2">
          <p
            className="text-[11px] font-light tracking-[0.1em] text-[#908d88]"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            5310 Glenmont Dr, Houston, TX 77081
          </p>
          <p
            className="text-[11px] font-light tracking-[0.1em] text-[#908d88]"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            (713) 555-0100 &nbsp;&middot;&nbsp; info@yuduprod.com
          </p>
        </div>

        <div className="mt-16">
          <p
            className="text-[10px] font-light tracking-[0.15em] text-[#cbae83]"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            &copy; 2025 YUDU Products. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
