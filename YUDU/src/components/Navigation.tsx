"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

const navItems: NavItem[] = [
  {
    label: "Countertops",
    href: "/countertops",
    dropdown: [
      { label: "Granite Collection", href: "/countertops/granite" },
      { label: "Quartz Collection", href: "/countertops/quartz" },
    ],
  },
  {
    label: "Sinks",
    href: "/sinks",
    dropdown: [
      { label: "Stainless Steel", href: "/sinks/stainless-steel" },
      { label: "Ceramic", href: "/sinks/ceramic" },
    ],
  },
  {
    label: "Tile",
    href: "/tile",
    dropdown: [
      { label: "Porcelain", href: "/tile/porcelain" },
      { label: "Ceramic", href: "/tile/ceramic" },
    ],
  },
  {
    label: "Flooring",
    href: "/flooring",
    dropdown: [
      { label: "Designer Collection", href: "/flooring/designer" },
      { label: "Classic Collection", href: "/flooring/classic" },
      { label: "SPC Collection", href: "/flooring/spc" },
    ],
  },
  { label: "Mirrors", href: "/mirrors" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggleMobileDropdown = (label: string) => {
    setMobileExpanded(mobileExpanded === label ? null : label);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          scrolled
            ? "bg-white/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(0,0,0,0.05)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link
              href="/"
              className={`font-[family-name:var(--font-playfair)] tracking-[0.3em] uppercase text-sm transition-colors duration-500 ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              YUDU
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8 xl:gap-10">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  <Link
                    href={item.href}
                    className={`uppercase tracking-[0.2em] text-xs font-light transition-colors duration-300 hover:opacity-60 ${
                      scrolled ? "text-foreground" : "text-white"
                    }`}
                  >
                    {item.label}
                  </Link>

                  {/* Dropdown */}
                  {item.dropdown && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                      <div className="bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] min-w-[220px] py-5 px-6">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="block py-2 text-xs uppercase tracking-[0.15em] font-light text-muted hover:text-foreground transition-colors duration-300"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative w-7 h-5 flex flex-col justify-between"
              aria-label="Toggle menu"
            >
              <span
                className={`block h-[1px] w-full transition-all duration-500 ease-in-out origin-center ${
                  scrolled ? "bg-foreground" : "bg-white"
                } ${mobileOpen ? "rotate-45 translate-y-[9px]" : ""}`}
              />
              <span
                className={`block h-[1px] w-full transition-all duration-500 ease-in-out ${
                  scrolled ? "bg-foreground" : "bg-white"
                } ${mobileOpen ? "opacity-0 scale-x-0" : "opacity-100"}`}
              />
              <span
                className={`block h-[1px] w-full transition-all duration-500 ease-in-out origin-center ${
                  scrolled ? "bg-foreground" : "bg-white"
                } ${mobileOpen ? "-rotate-45 -translate-y-[9px]" : ""}`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Fullscreen Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-500 ease-in-out ${
          mobileOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full px-8 overflow-y-auto">
          {/* Mobile Logo */}
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="font-[family-name:var(--font-playfair)] tracking-[0.3em] uppercase text-sm text-foreground mb-12"
          >
            YUDU
          </Link>

          <div className="flex flex-col items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="text-center">
                {item.dropdown ? (
                  <button
                    onClick={() => toggleMobileDropdown(item.label)}
                    className="uppercase tracking-[0.2em] text-xs font-light text-foreground py-3 px-4 transition-opacity duration-300 hover:opacity-60"
                  >
                    {item.label}
                    <span
                      className={`inline-block ml-2 transition-transform duration-300 ${
                        mobileExpanded === item.label ? "rotate-180" : ""
                      }`}
                    >
                      <svg
                        width="8"
                        height="5"
                        viewBox="0 0 8 5"
                        fill="none"
                        className="inline"
                      >
                        <path
                          d="M1 1L4 4L7 1"
                          stroke="currentColor"
                          strokeWidth="0.75"
                        />
                      </svg>
                    </span>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block uppercase tracking-[0.2em] text-xs font-light text-foreground py-3 px-4 transition-opacity duration-300 hover:opacity-60"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Mobile Dropdown Items */}
                {item.dropdown && (
                  <div
                    className={`overflow-hidden transition-all duration-400 ease-in-out ${
                      mobileExpanded === item.label
                        ? "max-h-60 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pb-2">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 text-[11px] uppercase tracking-[0.15em] font-light text-muted hover:text-foreground transition-colors duration-300"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
