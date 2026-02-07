"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import YuduLogo from "@/components/YuduLogo";

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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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
      <nav className="fixed top-0 left-0 right-0 z-50">
        {/* Top Utility Bar */}
        <div className="bg-[#faf8f5] border-b border-[#e0dcd6]">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
            <div className="flex items-center justify-center h-[28px]">
              <span
                className="text-[10px] uppercase tracking-[0.25em] font-light text-[#908d88] select-none"
                style={{ fontFamily: "var(--font-accent)" }}
              >
                Complimentary Design Consultation &nbsp;&mdash;&nbsp; Free
                Shipping on All Orders
              </span>
            </div>
          </div>
        </div>

        {/* Main Nav Bar */}
        <div className="bg-white border-b border-[#e0dcd6]">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
            {/* Logo Row */}
            <div className="flex items-center justify-center h-[60px] relative">
              {/* Mobile Hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden absolute left-0 top-1/2 -translate-y-1/2 w-6 h-4 flex flex-col justify-between"
                aria-label="Toggle menu"
              >
                <span
                  className={`block h-[0.5px] w-full bg-[#333] transition-all duration-400 ease-in-out origin-center ${
                    mobileOpen ? "rotate-45 translate-y-[7.5px]" : ""
                  }`}
                />
                <span
                  className={`block h-[0.5px] w-full bg-[#333] transition-all duration-400 ease-in-out ${
                    mobileOpen ? "opacity-0 scale-x-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block h-[0.5px] w-full bg-[#333] transition-all duration-400 ease-in-out origin-center ${
                    mobileOpen ? "-rotate-45 -translate-y-[7.5px]" : ""
                  }`}
                />
              </button>

              {/* Centered Logo */}
              <Link href="/" aria-label="YUDU Products Home">
                <YuduLogo height={36} color="#333" />
              </Link>
            </div>

            {/* Desktop Category Links Row */}
            <div className="hidden lg:flex items-center justify-center gap-8 xl:gap-10 pb-4">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() =>
                    item.dropdown ? setActiveDropdown(item.label) : undefined
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="text-[11px] uppercase tracking-[0.2em] font-light text-[#908d88] transition-colors duration-200 hover:text-[#b38041]"
                    style={{ fontFamily: "var(--font-accent)" }}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Mega-Menu Dropdown Panel */}
        {navItems.map(
          (item) =>
            item.dropdown && (
              <div
                key={item.label}
                className={`absolute left-0 right-0 bg-white border-t border-[#e0dcd6] transition-all duration-200 ease-in-out ${
                  activeDropdown === item.label
                    ? "opacity-100 visible"
                    : "opacity-0 invisible pointer-events-none"
                }`}
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16 py-8">
                  <div className="flex justify-center gap-16">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="text-[11px] uppercase tracking-[0.15em] font-light text-[#908d88] hover:text-[#b38041] transition-colors duration-200"
                        style={{ fontFamily: "var(--font-accent)" }}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )
        )}
      </nav>

      {/* Spacer */}
      <div className="h-[88px] lg:h-[116px]" />

      {/* Mobile Fullscreen Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-400 ease-in-out ${
          mobileOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full px-8 overflow-y-auto">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="mb-12"
            aria-label="YUDU Products Home"
          >
            <YuduLogo height={36} color="#333" />
          </Link>

          <div className="flex flex-col items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="text-center">
                {item.dropdown ? (
                  <button
                    onClick={() => toggleMobileDropdown(item.label)}
                    className="uppercase tracking-[0.2em] text-[11px] font-light text-[#908d88] py-3 px-4 transition-colors duration-200 hover:text-[#b38041]"
                    style={{ fontFamily: "var(--font-accent)" }}
                  >
                    {item.label}
                    <span
                      className={`inline-block ml-2 transition-transform duration-300 ${
                        mobileExpanded === item.label ? "rotate-180" : ""
                      }`}
                    >
                      <svg
                        width="7"
                        height="4"
                        viewBox="0 0 7 4"
                        fill="none"
                        className="inline"
                      >
                        <path
                          d="M0.5 0.5L3.5 3.5L6.5 0.5"
                          stroke="currentColor"
                          strokeWidth="0.5"
                        />
                      </svg>
                    </span>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block uppercase tracking-[0.2em] text-[11px] font-light text-[#908d88] py-3 px-4 transition-colors duration-200 hover:text-[#b38041]"
                    style={{ fontFamily: "var(--font-accent)" }}
                  >
                    {item.label}
                  </Link>
                )}

                {item.dropdown && (
                  <div
                    className={`overflow-hidden transition-all duration-400 ease-in-out ${
                      mobileExpanded === item.label
                        ? "max-h-60 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pb-2 pt-1">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 text-[11px] uppercase tracking-[0.15em] font-light text-[#cbae83] hover:text-[#b38041] transition-colors duration-200"
                          style={{ fontFamily: "var(--font-accent)" }}
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
