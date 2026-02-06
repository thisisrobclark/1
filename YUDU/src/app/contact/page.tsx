"use client";

import { useState, type FormEvent } from "react";
import ScrollReveal from "@/components/ScrollReveal";

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
    "w-full border-b border-[#e5e2dd] py-4 bg-transparent outline-none text-sm placeholder:uppercase placeholder:tracking-widest placeholder:text-xs placeholder:text-[#9a948a]";

  return (
    <>
      {/* Hero */}
      <section className="h-[50vh] bg-[#f7f5f2] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl uppercase tracking-[0.2em]">
            CONTACT
          </h1>
          <p className="text-muted text-sm uppercase tracking-widest mt-4">
            We&apos;d Love to Hear From You
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 px-8 md:px-16 lg:px-24 py-24">
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
                subject === "" ? "text-[#9a948a] uppercase tracking-widest text-xs" : ""
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
              className={`${inputClasses} min-h-[120px] resize-none`}
            />
            <button
              type="submit"
              className="w-full bg-foreground text-white py-4 uppercase tracking-widest text-xs hover:bg-[#333] transition-all duration-300 mt-8"
            >
              Send Message
            </button>
          </form>
        </ScrollReveal>

        {/* Right Column — Contact Info */}
        <ScrollReveal delay={200}>
          <div>
            <h3 className="uppercase tracking-widest text-xs mb-6">
              Visit Our Showroom
            </h3>
            <div className="text-muted text-sm leading-relaxed">
              <p className="font-medium text-foreground">YUDU Products</p>
              <p>5310 Glenmont Dr</p>
              <p>Houston, TX 77081</p>
            </div>

            <div className="mt-12">
              <h3 className="uppercase tracking-widest text-xs mb-6">Hours</h3>
              <div className="text-muted text-sm font-light leading-relaxed">
                <p>Monday &ndash; Friday: 9am &ndash; 6pm</p>
                <p>Saturday: 10am &ndash; 4pm</p>
                <p>Sunday: By Appointment</p>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="uppercase tracking-widest text-xs mb-6">
                Get In Touch
              </h3>
              <div className="text-muted text-sm font-light leading-relaxed">
                <p>Phone: (713) 555-0100</p>
                <p>Email: info@yuduprod.com</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Map Placeholder */}
      <section className="w-full h-[400px] bg-[#e5e2dd] flex items-center justify-center">
        <p className="text-muted uppercase tracking-widest text-xs">
          MAP &middot; 5310 GLENMONT DR, HOUSTON, TX 77081
        </p>
      </section>
    </>
  );
}
