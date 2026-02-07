import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;300;400&family=Raleway:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-background text-foreground">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
