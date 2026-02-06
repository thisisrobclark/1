import Link from "next/link";

const productLinks = [
  { label: "Countertops", href: "/countertops" },
  { label: "Sinks", href: "/sinks" },
  { label: "Tile", href: "/tile" },
  { label: "Flooring", href: "/flooring" },
  { label: "Mirrors", href: "/mirrors" },
];

const companyLinks = [
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="fade-to-cream">
      {/* Logo & Tagline */}
      <div className="text-center pt-[120px] pb-20 px-6">
        <Link
          href="/"
          className="uppercase text-sm tracking-[0.3em]"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          YUDU
        </Link>
        <p className="mt-6 text-xs font-light tracking-[0.2em] uppercase text-[#9a948a]">
          Luxury Surfaces for Inspired Living
        </p>
        <div className="divider mx-auto mt-10" />
      </div>

      {/* Columns */}
      <div className="mx-auto max-w-[1000px] px-8 md:px-16 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
          <div>
            <h4 className="uppercase tracking-[0.25em] text-[10px] text-[#9a948a] mb-8">
              Products
            </h4>
            <ul className="space-y-4">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs font-light tracking-[0.1em] text-[#6b6b6b] hover:text-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="uppercase tracking-[0.25em] text-[10px] text-[#9a948a] mb-8">
              Company
            </h4>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs font-light tracking-[0.1em] text-[#6b6b6b] hover:text-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="uppercase tracking-[0.25em] text-[10px] text-[#9a948a] mb-8">
              Visit Us
            </h4>
            <address className="not-italic space-y-2">
              <p className="text-xs font-light tracking-[0.05em] text-[#6b6b6b] leading-relaxed">
                5310 Glenmont Dr
              </p>
              <p className="text-xs font-light tracking-[0.05em] text-[#6b6b6b] leading-relaxed">
                Houston, TX 77081
              </p>
            </address>
          </div>

          <div>
            <h4 className="uppercase tracking-[0.25em] text-[10px] text-[#9a948a] mb-8">
              Connect
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+17135550100"
                  className="text-xs font-light tracking-[0.1em] text-[#6b6b6b] hover:text-foreground transition-colors duration-300"
                >
                  (713) 555-0100
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@yuduprod.com"
                  className="text-xs font-light tracking-[0.1em] text-[#6b6b6b] hover:text-foreground transition-colors duration-300"
                >
                  info@yuduprod.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="section-cream">
        <div className="mx-auto max-w-[1000px] px-8 md:px-16 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-light tracking-[0.15em] text-[#9a948a]">
            &copy; 2025 YUDU Products. All rights reserved.
          </p>
          <p className="text-[10px] font-light tracking-[0.15em] text-[#9a948a] uppercase">
            Houston, Texas
          </p>
        </div>
      </div>
    </footer>
  );
}
