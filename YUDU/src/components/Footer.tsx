import Link from "next/link";

const productLinks = [
  { label: "Countertops", href: "/countertops/granite" },
  { label: "Sinks", href: "/sinks/stainless-steel" },
  { label: "Tile", href: "/tile/porcelain" },
  { label: "Flooring", href: "/flooring/designer" },
  { label: "Mirrors", href: "/mirrors" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#f7f5f2]">
      {/* Top Divider */}
      <div className="w-full h-[1px] bg-border" />

      {/* Logo & Tagline */}
      <div className="text-center pt-20 pb-16 px-6">
        <Link
          href="/"
          className="font-[family-name:var(--font-playfair)] tracking-[0.3em] uppercase text-sm text-foreground"
        >
          YUDU
        </Link>
        <p className="mt-5 text-xs font-light tracking-[0.15em] uppercase text-muted">
          Luxury Surfaces for Inspired Living
        </p>
      </div>

      {/* Four Columns */}
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Products */}
          <div>
            <h4 className="uppercase tracking-[0.2em] text-[11px] font-normal text-foreground mb-6">
              Products
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs font-light tracking-[0.1em] text-muted hover:text-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="uppercase tracking-[0.2em] text-[11px] font-normal text-foreground mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs font-light tracking-[0.1em] text-muted hover:text-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit Us */}
          <div>
            <h4 className="uppercase tracking-[0.2em] text-[11px] font-normal text-foreground mb-6">
              Visit Us
            </h4>
            <address className="not-italic space-y-1">
              <p className="text-xs font-light tracking-[0.05em] text-muted leading-relaxed">
                5310 Glenmont Dr
              </p>
              <p className="text-xs font-light tracking-[0.05em] text-muted leading-relaxed">
                Houston, TX 77081
              </p>
            </address>
          </div>

          {/* Connect */}
          <div>
            <h4 className="uppercase tracking-[0.2em] text-[11px] font-normal text-foreground mb-6">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+1234567890"
                  className="text-xs font-light tracking-[0.1em] text-muted hover:text-foreground transition-colors duration-300"
                >
                  Phone
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@yuduproducts.com"
                  className="text-xs font-light tracking-[0.1em] text-muted hover:text-foreground transition-colors duration-300"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] font-light tracking-[0.1em] text-warm-gray">
            &copy; 2025 YUDU Products. All rights reserved.
          </p>
          <p className="text-[11px] font-light tracking-[0.1em] text-warm-gray uppercase">
            Houston, Texas
          </p>
        </div>
      </div>
    </footer>
  );
}
