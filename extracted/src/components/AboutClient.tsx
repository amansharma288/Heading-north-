"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Briefcase, Eye, Heart, Lightbulb } from "lucide-react";
import AnimateIn from "./AnimateIn";
import { IMAGES } from "@/lib/images";

const timeline = [
  { year: "2017", title: "The Seed", desc: "Arctic Finance is founded, laying the financial infrastructure that would become the backbone of everything." },
  { year: "2018", title: "Tech Ignition", desc: "Polaris Tech launches with a mission to redefine consumer electronics through design and performance." },
  { year: "2019", title: "Stories Begin", desc: "Nordica Studios opens in Los Angeles, bringing world-class entertainment to global audiences." },
  { year: "2020", title: "Health Revolution", desc: "Summit Health emerges during a pivotal moment, making quality healthcare accessible through technology." },
  { year: "2021", title: "Investing Forward", desc: "Boreal Ventures launches, investing in 60+ startups across 15 countries within its first two years." },
  { year: "2022", title: "Living Design", desc: "Aurora Living brings the portfolio full circle — innovation for the spaces where life actually happens." },
];

const leadership = [
  { name: "Alexandra Chen", role: "Chief Executive Officer", img: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop" },
  { name: "Marcus Williams", role: "Chief Operating Officer", img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop" },
  { name: "Sofia Nakamura", role: "Chief Technology Officer", img: "https://images.pexels.com/photos/3776932/pexels-photo-3776932.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop" },
  { name: "David Okafor", role: "Chief Financial Officer", img: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop" },
];

const principles = [
  { icon: Eye, title: "Clarity of Vision", desc: "We maintain unwavering focus on long-term value creation, never sacrificing tomorrow for today." },
  { icon: Heart, title: "People First", desc: "Our greatest investment is in the people who build our brands — their growth is our growth." },
  { icon: Lightbulb, title: "Fearless Innovation", desc: "We embrace the unknown, fund bold ideas, and create space for breakthroughs." },
  { icon: Briefcase, title: "Operational Excellence", desc: "World-class execution at every level — from strategy to the smallest detail." },
];

export default function AboutClient() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[550px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src={IMAGES.city} alt="City skyline" fill priority className="object-cover animate-ken-burns" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-[#030305]/70 to-[#030305]/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-20 w-full">
          <AnimateIn>
            <span className="text-[#D4A853]/70 text-[11px] uppercase tracking-[0.3em] font-medium">About Us</span>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <h1 className="mt-4 text-5xl md:text-7xl lg:text-8xl font-black tracking-[-0.04em] leading-[0.9]">
              Built on <span className="text-gradient">Vision.</span>
              <br />
              Driven by <span className="text-gradient">Purpose.</span>
            </h1>
          </AnimateIn>
        </div>
      </section>

      {/* Story */}
      <section className="py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <AnimateIn>
                <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
                  From a single idea to a <span className="text-gradient">global constellation</span>
                </h2>
              </AnimateIn>
              <AnimateIn delay={0.1}>
                <p className="mt-8 text-white/55 text-base leading-relaxed">
                  Heading North began with a simple belief: the world&apos;s most pressing
                  challenges demand not just great companies, but interconnected ecosystems
                  of innovation. In 2017, what started as a fintech venture in a small
                  New York office has grown into a global holding company with six distinct
                  brands operating across 34 countries.
                </p>
              </AnimateIn>
              <AnimateIn delay={0.18}>
                <p className="mt-5 text-white/45 text-base leading-relaxed">
                  Our approach is different from traditional holding companies. We don&apos;t
                  just acquire and optimize — we build from the ground up, giving each brand
                  the autonomy to innovate while providing the shared infrastructure,
                  capital, and strategic guidance that accelerates growth exponentially.
                </p>
              </AnimateIn>
              <AnimateIn delay={0.26}>
                <p className="mt-5 text-white/45 text-base leading-relaxed">
                  The name &quot;Heading North&quot; reflects our philosophy: always moving toward
                  higher ground, guided by a fixed star of purpose and principle. Every
                  decision, every investment, every hire is measured against that bearing.
                </p>
              </AnimateIn>
            </div>
            <AnimateIn delay={0.15} y={30}>
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
                <Image src={IMAGES.meeting} alt="Team meeting" fill className="object-cover" sizes="50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030305]/80 to-transparent" />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-7xl mx-auto" />

      {/* Principles */}
      <section className="py-28 md:py-36 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#D4A853]/[0.02] rounded-full blur-[150px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-16">
            <AnimateIn>
              <span className="text-[#D4A853]/70 text-[11px] uppercase tracking-[0.3em] font-medium">Our Principles</span>
            </AnimateIn>
            <AnimateIn delay={0.08}>
              <h2 className="mt-5 text-3xl md:text-5xl font-black tracking-tight">
                What guides <span className="text-gradient">everything we do</span>
              </h2>
            </AnimateIn>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {principles.map((p, i) => (
              <AnimateIn key={p.title} delay={0.04 + i * 0.06} y={24}>
                <div className="p-7 rounded-2xl glass hover:bg-white/[0.04] transition-all duration-700 group h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#D4A853]/[0.08] flex items-center justify-center mb-5 group-hover:bg-[#D4A853]/[0.15] transition-colors duration-700">
                    <p.icon className="text-[#D4A853]/70" size={22} />
                  </div>
                  <h3 className="text-white/90 font-bold text-lg">{p.title}</h3>
                  <p className="mt-3 text-white/45 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-7xl mx-auto" />

      {/* Timeline */}
      <section className="py-28 md:py-36 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src={IMAGES.shadow} alt="Dark abstract" fill className="object-cover opacity-[0.04]" sizes="100vw" />
          <div className="absolute inset-0 bg-[#030305]/95" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-20">
            <AnimateIn>
              <span className="text-[#D4A853]/70 text-[11px] uppercase tracking-[0.3em] font-medium">Our Journey</span>
            </AnimateIn>
            <AnimateIn delay={0.08}>
              <h2 className="mt-5 text-3xl md:text-5xl font-black tracking-tight">
                A history of <span className="text-gradient">bold moves</span>
              </h2>
            </AnimateIn>
          </div>

          <div className="relative">
            <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D4A853]/20 to-transparent" />

            {timeline.map((item, i) => (
              <AnimateIn
                key={item.year}
                delay={0.04 + i * 0.05}
                x={i % 2 === 0 ? -20 : 20}
                y={0}
              >
                <div className={`relative flex items-start mb-12 ml-12 md:ml-0 ${
                  i % 2 === 0
                    ? "md:flex-row md:pr-[calc(50%+2.5rem)]"
                    : "md:flex-row-reverse md:pl-[calc(50%+2.5rem)]"
                }`}>
                  <div className="absolute left-[-1.75rem] md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-[#D4A853]/60 border-2 border-[#030305] z-10 top-1" />
                  <div className="glass rounded-xl p-5 flex-1">
                    <span className="text-[#D4A853] font-bold text-lg">{item.year}</span>
                    <h3 className="text-white/80 font-semibold mt-1">{item.title}</h3>
                    <p className="text-white/45 text-sm mt-2 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-7xl mx-auto" />

      {/* Leadership */}
      <section className="py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <AnimateIn>
              <span className="text-[#D4A853]/70 text-[11px] uppercase tracking-[0.3em] font-medium">Leadership</span>
            </AnimateIn>
            <AnimateIn delay={0.08}>
              <h2 className="mt-5 text-3xl md:text-5xl font-black tracking-tight">
                The minds <span className="text-gradient">heading north</span>
              </h2>
            </AnimateIn>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((person, i) => (
              <AnimateIn key={person.name} delay={0.04 + i * 0.06} y={24}>
                <div className="group">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4">
                    <Image
                      src={person.img}
                      alt={person.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                      sizes="25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030305]/60 to-transparent" />
                  </div>
                  <h3 className="text-white/90 font-semibold">{person.name}</h3>
                  <p className="text-white/50 text-sm mt-0.5">{person.role}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={IMAGES.industrial} alt="Industrial city" fill className="object-cover opacity-[0.06]" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030305] via-[#030305]/90 to-[#030305]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <AnimateIn>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
              Want to be part of the <span className="text-gradient">journey?</span>
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-5 text-white/45 max-w-md mx-auto">We are always looking for extraordinary people who share our vision.</p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/careers" className="px-8 py-4 bg-gradient-to-r from-[#D4A853] to-[#9A7B3A] text-[#030305] font-semibold text-sm rounded-full hover:shadow-2xl hover:shadow-[#D4A853]/20 transition-all duration-700 hover:scale-[1.03] flex items-center gap-2">
                View Open Positions <ArrowUpRight size={16} />
              </Link>
              <Link href="/contact" className="px-8 py-4 border border-white/[0.08] text-white/50 text-sm rounded-full hover:border-[#D4A853]/30 hover:text-[#D4A853] transition-all duration-700">
                Contact Us
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </main>
  );
}
