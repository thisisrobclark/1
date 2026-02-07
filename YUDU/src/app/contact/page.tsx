"use client";

import { useState, type FormEvent } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxImage from "@/components/ParallaxImage";
import { galleryImages } from "@/lib/images";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const inputClasses =
    "w-full border-b border-[#e5e2dd] py-5 bg-transparent outline-none text-sm placeholder:uppercase placeholder:tracking-[0.2em] placeholder:text-xs placeholder:text-[#9a948a] focus:border-[#1a1a1a] transition-colors duration-300";

  return (
    <>
      {/* Hero */}
      <ParallaxImage src={galleryImages[5]} alt="Contact hero" height="60vh">
        <h1
          className="text-5xl md:text-7xl text-white font-light uppercase tracking-[0.2em]"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          CONTACT
        </h1>
        <p className="text-sm text-white/70 uppercase tracking-[0.3em] mt-4">
          We&apos;d Love to Hear From You
        </p>
      </ParallaxImage>

      {/* Main Content */}
      <section className="section-white py-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-[1200px] mx-auto px-8 md:px-16">
          {/* Left Column — Form */}
          <ScrollReveal>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClasses}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClasses}
              />
              <input
                type="tel"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={inputClasses}
              />
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className={`${inputClasses} ${
                  subject === ""
                    ? "text-[#9a948a] uppercase tracking-[0.2em] text-xs"
                    : ""
                }`}
              >
                <option value="">SUBJECT</option>
                <option value="countertops">Countertops</option>
                <option value="sinks">Sinks</option>
                <option value="tile">Tile</option>
                <option value="flooring">Flooring</option>
                <option value="mirrors">Mirrors</option>
                <option value="general">General Inquiry</option>
              </select>
              <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`${inputClasses} min-h-[140px] resize-none`}
              />
              <button
                type="submit"
                className="w-full bg-[#1a1a1a] text-white py-5 uppercase tracking-[0.25em] text-xs hover:bg-[#333] transition-all duration-500 mt-10"
              >
                Send Message
              </button>
            </form>
          </ScrollReveal>

          {/* Right Column — Info */}
          <ScrollReveal delay={200}>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#9a948a] mb-8">
                VISIT OUR SHOWROOM
              </p>
              <div className="text-[#6b6b6b] text-sm leading-[2]">
                <p className="font-medium text-[#1a1a1a]">YUDU Products</p>
                <p>5310 Glenmont Dr</p>
                <p>Houston, TX 77081</p>
              </div>

              <div className="mt-16">
                <p className="text-xs uppercase tracking-[0.3em] text-[#9a948a] mb-8">
                  HOURS
                </p>
                <div className="text-[#6b6b6b] text-sm font-light leading-[2]">
                  <p>Monday &ndash; Friday: 9am &ndash; 6pm</p>
                  <p>Saturday: 10am &ndash; 4pm</p>
                  <p>Sunday: By Appointment</p>
                </div>
              </div>

              <div className="mt-16">
                <p className="text-xs uppercase tracking-[0.3em] text-[#9a948a] mb-8">
                  GET IN TOUCH
                </p>
                <div className="text-[#6b6b6b] text-sm font-light leading-[2]">
                  <p>Phone: (713) 555-0100</p>
                  <p>Email: info@yuduprod.com</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="fade-to-cream">
        <div className="w-full h-[350px] flex items-center justify-center">
          <p className="text-[#9a948a] uppercase tracking-[0.25em] text-xs">
            MAP &middot; 5310 GLENMONT DR, HOUSTON, TX 77081
          </p>
        </div>
      </section>
    </>
  );
}
