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
    "w-full border-b border-[#e8e8e8] py-5 bg-transparent outline-none text-sm text-[#333] placeholder:uppercase placeholder:tracking-[0.2em] placeholder:text-[11px] placeholder:text-[#cbae83] focus:border-[#333] transition-colors duration-300";

  return (
    <>
      <ParallaxImage src={galleryImages[5]} alt="Contact" height="60vh">
        <p
          className="text-sm uppercase tracking-[0.35em] text-white font-light"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          CONTACT
        </p>
      </ParallaxImage>

      <section className="bg-white py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-[1200px] mx-auto px-8 md:px-16">
          <ScrollReveal>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className={inputClasses} />
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClasses} />
              <input type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} className={inputClasses} />
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className={`${inputClasses} ${subject === "" ? "text-[#cbae83] uppercase tracking-[0.2em] text-[11px]" : ""}`}
              >
                <option value="">SUBJECT</option>
                <option value="countertops">Countertops</option>
                <option value="sinks">Sinks</option>
                <option value="tile">Tile</option>
                <option value="flooring">Flooring</option>
                <option value="mirrors">Mirrors</option>
                <option value="general">General Inquiry</option>
              </select>
              <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} className={`${inputClasses} min-h-[140px] resize-none`} />
              <button type="submit" className="w-full bg-[#333] text-white py-5 uppercase tracking-[0.25em] text-[11px] hover:bg-[#1a1a1a] transition-all duration-500 mt-10">
                Send Message
              </button>
            </form>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#908d88] mb-8" style={{ fontFamily: "var(--font-accent)" }}>
                VISIT OUR SHOWROOM
              </p>
              <div className="text-[#908d88] text-sm leading-[2] font-light" style={{ fontFamily: "var(--font-accent)" }}>
                <p className="font-normal text-[#333]">YUDU Products</p>
                <p>5310 Glenmont Dr</p>
                <p>Houston, TX 77081</p>
              </div>

              <div className="mt-16">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#908d88] mb-8" style={{ fontFamily: "var(--font-accent)" }}>HOURS</p>
                <div className="text-[#908d88] text-sm font-light leading-[2]" style={{ fontFamily: "var(--font-accent)" }}>
                  <p>Monday &ndash; Friday: 9am &ndash; 6pm</p>
                  <p>Saturday: 10am &ndash; 4pm</p>
                  <p>Sunday: By Appointment</p>
                </div>
              </div>

              <div className="mt-16">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#908d88] mb-8" style={{ fontFamily: "var(--font-accent)" }}>GET IN TOUCH</p>
                <div className="text-[#908d88] text-sm font-light leading-[2]" style={{ fontFamily: "var(--font-accent)" }}>
                  <p>(713) 555-0100</p>
                  <p>info@yuduprod.com</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
