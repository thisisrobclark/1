import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "YUDU Products | Luxury Home Surfaces & Design",
  description:
    "Houston's premier source for luxury countertops, sinks, tile, flooring, and mirrors. Elevate your space with YUDU Products.",
  keywords: [
    "luxury countertops",
    "Houston",
    "granite",
    "quartz",
    "tile",
    "flooring",
    "mirrors",
    "sinks",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-background text-foreground`}
        style={{ fontFamily: "var(--font-inter)" }}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
