"use client";

import Image from "next/image";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import AnimateIn from "./AnimateIn";
import { IMAGES } from "@/lib/images";

const offices = [
  { city: "New York", address: "350 Fifth Avenue, Suite 4800", country: "United States", tz: "EST" },
  { city: "London", address: "1 Canada Square, Canary Wharf", country: "United Kingdom", tz: "GMT" },
  { city: "Singapore", address: "1 Raffles Place, Tower 2", country: "Singapore", tz: "SGT" },
];

export default function ContactClient() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src={IMAGES.industrial} alt="City at night" fill priority className="object-cover animate-ken-burns" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-[#030305]/60 to-[#030305]/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-20 w-full">
          <AnimateIn>
            <span className="text-[#D4A853]/70 text-[11px] uppercase tracking-[0.3em] font-medium">Contact</span>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <h1 className="mt-4 text-5xl md:text-7xl lg:text-8xl font-black tracking-[-0.04em] leading-[0.9]">
              Let&apos;s <span className="text-gradient">Connect.</span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.16}>
            <p className="mt-5 text-white/50 max-w-lg text-base">
              Whether it&apos;s a partnership, investment inquiry, press request, or
              you just want to say hello — we&apos;d love to hear from you.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Form & info */}
      <section className="py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Left — info */}
            <div>
              <AnimateIn>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight">
                  Get in <span className="text-gradient">touch</span>
                </h2>
              </AnimateIn>
              <AnimateIn delay={0.08}>
                <p className="mt-5 text-white/45 leading-relaxed">
                  Our team is available Monday through Friday, 9:00 AM — 6:00 PM
                  in all time zones where we operate. Expect a response within
                  24 business hours.
                </p>
              </AnimateIn>

              <AnimateIn delay={0.16}>
                <div className="mt-10 space-y-6">
                  {[
                    { icon: Mail, label: "hello@headingnorth.com" },
                    { icon: Phone, label: "+1 (555) 000-1234" },
                    { icon: MapPin, label: "350 Fifth Avenue, New York, NY 10118" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-[#D4A853]/[0.08] flex items-center justify-center group-hover:bg-[#D4A853]/[0.15] transition-colors duration-700">
                        <item.icon className="text-[#D4A853]/60" size={18} />
                      </div>
                      <span className="text-white/55 group-hover:text-white/75 transition-colors duration-500 text-sm">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </AnimateIn>
            </div>

            {/* Right — form */}
            <AnimateIn delay={0.1} x={30} y={0}>
              <div className="glass-strong rounded-3xl p-8 md:p-10">
                <h3 className="text-xl font-bold mb-7">Send us a message</h3>
                <form className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First name"
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#D4A853]/30 transition-colors duration-500"
                    />
                    <input
                      type="text"
                      placeholder="Last name"
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#D4A853]/30 transition-colors duration-500"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#D4A853]/30 transition-colors duration-500"
                  />
                  <select className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white/40 text-sm focus:outline-none focus:border-[#D4A853]/30 transition-colors duration-500 appearance-none">
                    <option value="">Inquiry type</option>
                    <option value="partnership">Partnership</option>
                    <option value="investment">Investment</option>
                    <option value="press">Press & Media</option>
                    <option value="careers">Careers</option>
                    <option value="other">Other</option>
                  </select>
                  <textarea
                    rows={5}
                    placeholder="Your message..."
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#D4A853]/30 transition-colors duration-500 resize-none"
                  />
                  <button
                    type="button"
                    className="w-full py-4 bg-gradient-to-r from-[#D4A853] to-[#9A7B3A] text-[#030305] font-semibold text-sm rounded-xl hover:shadow-lg hover:shadow-[#D4A853]/15 transition-all duration-700 flex items-center justify-center gap-2 group"
                  >
                    Send Message
                    <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500" />
                  </button>
                </form>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-7xl mx-auto" />

      {/* Offices */}
      <section className="py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <AnimateIn>
              <span className="text-[#D4A853]/70 text-[11px] uppercase tracking-[0.3em] font-medium">Our Offices</span>
            </AnimateIn>
            <AnimateIn delay={0.08}>
              <h2 className="mt-5 text-3xl md:text-5xl font-black tracking-tight">
                Global <span className="text-gradient">presence</span>
              </h2>
            </AnimateIn>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {offices.map((office, i) => (
              <AnimateIn key={office.city} delay={0.04 + i * 0.06} y={20}>
                <div className="p-7 rounded-2xl glass hover:bg-white/[0.04] transition-all duration-700 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white/85 font-bold text-xl">{office.city}</h3>
                    <span className="text-[10px] uppercase tracking-[0.15em] text-white/30 bg-white/[0.04] px-2.5 py-1 rounded-full">{office.tz}</span>
                  </div>
                  <p className="text-white/50 text-sm">{office.address}</p>
                  <p className="text-white/35 text-sm mt-1">{office.country}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
