import Link from "next/link";

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
    <footer className="bg-white border-t border-[#e8e8e8]">
      <div className="max-w-[1400px] mx-auto px-8 py-24 text-center">
        <Link
          href="/"
          className="uppercase text-[16px] tracking-[0.4em] text-[#333]"
          style={{ fontFamily: "var(--font-serif, 'Times New Roman', serif)", fontWeight: 300 }}
        >
          YUDU
        </Link>

        <nav className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] uppercase tracking-[0.2em] font-light text-[#666] hover:text-[#333] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-16 space-y-2">
          <p className="text-[11px] font-light tracking-[0.1em] text-[#888]">
            5310 Glenmont Dr, Houston, TX 77081
          </p>
          <p className="text-[11px] font-light tracking-[0.1em] text-[#888]">
            (713) 555-0100 &nbsp;&middot;&nbsp; info@yuduprod.com
          </p>
        </div>

        <div className="mt-16">
          <p className="text-[10px] font-light tracking-[0.15em] text-[#aaa]">
            &copy; 2025 YUDU Products. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
