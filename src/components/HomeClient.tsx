"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ChevronDown,
  ArrowUpRight,
  Compass,
  Globe,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Award,
  Target,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import AnimateIn from "./AnimateIn";
import type { Brand } from "@/db/schema";
import { IMAGES } from "@/lib/images";

const marqueeWords = [
  "TECHNOLOGY", "✦", "ENTERTAINMENT", "✦", "HEALTHCARE", "✦",
  "FINTECH", "✦", "VENTURES", "✦", "LIFESTYLE", "✦", "INNOVATION", "✦",
];

const values = [
  { icon: Compass, title: "Vision-Led", desc: "We see beyond trends to identify lasting opportunities that create enduring value across generations." },
  { icon: Globe, title: "Global Reach", desc: "Our brands operate across 30+ markets, connecting with communities and cultures worldwide." },
  { icon: Zap, title: "Innovation First", desc: "Every brand under our umbrella pushes boundaries and challenges how industries operate." },
  { icon: Shield, title: "Built to Last", desc: "We invest in sustainable growth, building brands that thrive for decades, not quarters." },
];

const stats = [
  { icon: TrendingUp, number: "247%", label: "Avg. Growth", desc: "Year-over-year portfolio performance" },
  { icon: Users, number: "12K+", label: "Team Members", desc: "Talented people across the globe" },
  { icon: Award, number: "150+", label: "Awards", desc: "Industry recognition for excellence" },
  { icon: Target, number: "34", label: "Countries", desc: "Global presence, local impact" },
];

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function HomeClient({ brands: allBrands }: { brands: Brand[] }) {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <main>
      {/* ═══════════════ HERO ═══════════════ */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <Image
            src={IMAGES.hero}
            alt="Milky way galaxy"
            fill
            priority
            className="object-cover animate-ken-burns"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030305]/60 via-[#030305]/40 to-[#030305]" />
        </motion.div>

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[15%] left-[10%] w-[400px] h-[400px] rounded-full bg-[#D4A853]/[0.04] blur-[100px] animate-float-slow" />
          <div className="absolute bottom-[20%] right-[5%] w-[350px] h-[350px] rounded-full bg-[#8B5CF6]/[0.04] blur-[120px] animate-float-slow" style={{ animationDelay: "-5s" }} />
        </div>

        <motion.div className="relative z-10 max-w-5xl mx-auto px-6 text-center" style={{ opacity: heroOpacity }}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass mb-10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A853] animate-pulse-soft" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-white/50">
              Global Holding Company
            </span>
          </motion.div>

          <motion.h1
            className="text-6xl sm:text-8xl md:text-[9rem] font-black leading-[0.85] tracking-[-0.04em]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
          >
            <span className="block text-white/95">HEADING</span>
            <span className="block text-gradient">NORTH</span>
          </motion.h1>

          <motion.p
            className="mt-8 text-base sm:text-lg md:text-xl text-white/55 max-w-xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
          >
            We build, nurture, and scale visionary brands that shape industries.
            A constellation of innovation under one guiding star.
          </motion.p>

          <motion.div
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease }}
          >
            <Link
              href="/brands"
              className="px-8 py-4 bg-gradient-to-r from-[#D4A853] to-[#9A7B3A] text-[#030305] font-semibold text-sm rounded-full hover:shadow-2xl hover:shadow-[#D4A853]/20 transition-all duration-700 hover:scale-[1.03]"
            >
              Explore Our Brands
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 border border-white/[0.08] text-white/50 text-sm rounded-full hover:border-[#D4A853]/30 hover:text-[#D4A853] transition-all duration-700"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
            <ChevronDown className="text-white/15" size={28} />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════ MARQUEE ═══════════════ */}
      <div className="py-6 border-y border-white/[0.03] overflow-hidden bg-[#030305]">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...marqueeWords, ...marqueeWords].map((word, i) => (
            <span
              key={i}
              className={`mx-5 text-xl md:text-3xl font-black tracking-[0.1em] ${
                word === "✦" ? "text-[#D4A853]/40" : "text-white/[0.06]"
              }`}
            >
              {word}
            </span>
          ))}
        </div>
      </div>

      {/* ═══════════════ ABOUT TEASER ═══════════════ */}
      <section className="relative py-32 md:py-44 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={IMAGES.cityRiver} alt="City at night" fill className="object-cover opacity-[0.07] animate-ken-burns" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030305] via-transparent to-[#030305]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <AnimateIn>
                <span className="text-[#D4A853]/70 text-[11px] uppercase tracking-[0.3em] font-medium">
                  Who We Are
                </span>
              </AnimateIn>
              <AnimateIn delay={0.08}>
                <h2 className="mt-5 text-4xl md:text-6xl font-black tracking-[-0.03em] leading-[1.05]">
                  One Direction.
                  <br />
                  <span className="text-gradient">Infinite Horizons.</span>
                </h2>
              </AnimateIn>
              <AnimateIn delay={0.16}>
                <p className="mt-7 text-white/55 text-base md:text-lg leading-relaxed">
                  Heading North is more than a holding company — we are
                  architects of the future. We cultivate a portfolio of
                  transformative brands, each leading their industry with bold
                  innovation and unwavering purpose.
                </p>
              </AnimateIn>
              <AnimateIn delay={0.24}>
                <div className="mt-10 grid grid-cols-3 gap-8">
                  {[
                    { n: "6+", l: "Brands" },
                    { n: "30+", l: "Markets" },
                    { n: "$2B+", l: "Revenue" },
                  ].map((s) => (
                    <div key={s.l}>
                      <div className="text-3xl md:text-4xl font-black text-gradient">{s.n}</div>
                      <div className="text-xs text-white/40 mt-1 uppercase tracking-wider">{s.l}</div>
                    </div>
                  ))}
                </div>
              </AnimateIn>
              <AnimateIn delay={0.32}>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 mt-10 text-[#D4A853]/80 text-sm hover:text-[#D4A853] transition-colors duration-500 group"
                >
                  Discover our story
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500" />
                </Link>
              </AnimateIn>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((v, i) => (
                <AnimateIn key={v.title} delay={0.08 + i * 0.06} y={30}>
                  <div className="p-6 rounded-2xl glass hover:bg-white/[0.04] transition-all duration-700 group h-full">
                    <div className="w-11 h-11 rounded-xl bg-[#D4A853]/[0.08] flex items-center justify-center mb-5 group-hover:bg-[#D4A853]/[0.15] transition-colors duration-700">
                      <v.icon className="text-[#D4A853]/70" size={20} />
                    </div>
                    <h3 className="text-white/90 font-semibold">{v.title}</h3>
                    <p className="mt-2 text-white/45 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ BRANDS SHOWCASE ═══════════════ */}
      <section className="relative py-32 md:py-44">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full bg-[#D4A853]/[0.03] blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-20">
            <AnimateIn>
              <span className="text-[#D4A853]/70 text-[11px] uppercase tracking-[0.3em] font-medium">
                Our Portfolio
              </span>
            </AnimateIn>
            <AnimateIn delay={0.08}>
              <h2 className="mt-5 text-4xl md:text-6xl font-black tracking-[-0.03em]">
                Brands That <span className="text-gradient">Define Industries</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.16}>
              <p className="mt-5 text-white/45 max-w-lg mx-auto text-base">
                Each brand in our portfolio is a leader in its field, driven by
                innovation and united by our shared vision of excellence.
              </p>
            </AnimateIn>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {allBrands.map((brand, i) => (
              <AnimateIn key={brand.id} delay={0.04 + i * 0.05} y={30}>
                <Link href={`/brands/${brand.slug}`} className="block group">
                  <div className="relative rounded-2xl overflow-hidden bg-[#0A0A12] border border-white/[0.04] hover:border-white/[0.08] transition-all duration-700 h-full">
                    <div className="relative h-44 overflow-hidden">
                      {brand.imageUrl && (
                        <Image
                          src={brand.imageUrl}
                          alt={brand.name}
                          fill
                          className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A12] via-[#0A0A12]/40 to-transparent" />
                      <div className="absolute top-4 left-4 w-12 h-12 rounded-xl glass-strong flex items-center justify-center text-2xl">
                        {brand.iconEmoji}
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-bold text-white/90 group-hover:text-white transition-colors duration-500">
                            {brand.name}
                          </h3>
                          <p className="text-sm mt-0.5" style={{ color: brand.color }}>
                            {brand.tagline}
                          </p>
                        </div>
                        <div className="w-8 h-8 rounded-full border border-white/[0.06] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-1 group-hover:translate-y-0">
                          <ArrowUpRight size={14} className="text-white/40" />
                        </div>
                      </div>
                      <p className="mt-3 text-white/40 text-sm leading-relaxed line-clamp-2">
                        {brand.description}
                      </p>
                      <div className="mt-5 pt-4 border-t border-white/[0.04] flex items-center justify-between">
                        <span className="text-[10px] text-white/30 uppercase tracking-[0.15em]">
                          {brand.industry}
                        </span>
                        <span className="text-[10px] text-white/20">Est. {brand.founded}</span>
                      </div>
                    </div>

                    <div
                      className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full opacity-0 group-hover:opacity-[0.12] transition-opacity duration-1000 blur-3xl"
                      style={{ backgroundColor: brand.color }}
                    />
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={0.2} className="text-center mt-14">
            <Link
              href="/brands"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/[0.08] text-white/50 text-sm rounded-full hover:border-[#D4A853]/30 hover:text-[#D4A853] transition-all duration-700"
            >
              View All Brands
              <ArrowUpRight size={16} />
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ═══════════════ IMPACT / STATS ═══════════════ */}
      <section className="relative py-32 md:py-44 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={IMAGES.abstract} alt="Abstract" fill className="object-cover opacity-[0.05]" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030305] via-[#030305]/95 to-[#030305]" />
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/[0.015] animate-orbit pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-[#D4A853]/[0.04] animate-orbit-reverse pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-20">
            <AnimateIn>
              <span className="text-[#D4A853]/70 text-[11px] uppercase tracking-[0.3em] font-medium">Our Impact</span>
            </AnimateIn>
            <AnimateIn delay={0.08}>
              <h2 className="mt-5 text-4xl md:text-6xl font-black tracking-[-0.03em]">
                Numbers That <span className="text-gradient">Speak Volumes</span>
              </h2>
            </AnimateIn>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((s, i) => (
              <AnimateIn key={s.label} delay={0.06 + i * 0.06} y={24}>
                <div className="p-8 rounded-2xl glass text-center group hover:bg-white/[0.04] transition-all duration-700">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-[#D4A853]/[0.08] flex items-center justify-center mb-6 group-hover:bg-[#D4A853]/[0.15] transition-colors duration-700">
                    <s.icon className="text-[#D4A853]/70" size={22} />
                  </div>
                  <div className="text-4xl font-black text-gradient">{s.number}</div>
                  <div className="mt-2 text-white/80 font-medium text-sm">{s.label}</div>
                  <div className="mt-1 text-white/40 text-xs">{s.desc}</div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="relative py-32 md:py-44 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={IMAGES.nebula} alt="Nebula" fill className="object-cover opacity-[0.08] animate-ken-burns" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030305] via-[#030305]/80 to-[#030305]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <AnimateIn>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-[-0.03em] leading-[1.05]">
              Ready to Head
              <br />
              <span className="text-gradient">North?</span>
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-6 text-white/45 text-base md:text-lg max-w-md mx-auto">
              Whether you are a founder, investor, or future team member — we
              would love to connect with you.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-[#D4A853] to-[#9A7B3A] text-[#030305] font-semibold text-sm rounded-full hover:shadow-2xl hover:shadow-[#D4A853]/20 transition-all duration-700 hover:scale-[1.03]"
              >
                Get In Touch
              </Link>
              <Link
                href="/careers"
                className="px-8 py-4 border border-white/[0.08] text-white/50 text-sm rounded-full hover:border-[#D4A853]/30 hover:text-[#D4A853] transition-all duration-700"
              >
                Join Our Team
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </main>
  );
}
