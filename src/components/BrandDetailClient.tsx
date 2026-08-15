"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Globe, Calendar, MapPin, Users, Sparkles, ArrowUpRight, ExternalLink } from "lucide-react";
import AnimateIn from "./AnimateIn";
import type { Brand } from "@/db/schema";

export default function BrandDetailClient({ brand }: { brand: Brand }) {
  return (
    <main>
      <section className="relative h-[70vh] min-h-[550px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          {brand.imageUrl && <Image src={brand.imageUrl} alt={brand.name} fill priority className="object-cover animate-ken-burns" sizes="100vw" />}
          <div className="absolute inset-0 bg-gradient-to-t from-[#08080e] via-[#08080e]/60 to-[#08080e]/20" />
          <div className="absolute inset-0 opacity-[0.1]" style={{ background: `radial-gradient(ellipse at 50% 40%, ${brand.color}, transparent 70%)` }} />
        </div>
        <motion.div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full blur-[120px] opacity-[0.08]" style={{ backgroundColor: brand.color }} animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.12, 0.05] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-16 w-full">
          <AnimateIn y={12}>
            <Link href="/brands" className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 transition-colors duration-500 mb-8 group text-sm">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-500" /> All brands
            </Link>
          </AnimateIn>
          <div className="flex items-end gap-6 flex-wrap">
            <AnimateIn delay={0.05}>
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl glass-strong flex items-center justify-center text-4xl md:text-5xl">{brand.iconEmoji}</div>
            </AnimateIn>
            <div className="flex-1 min-w-[240px]">
              <AnimateIn delay={0.1}><h1 className="text-5xl md:text-7xl font-black tracking-[-0.04em]">{brand.name}</h1></AnimateIn>
              <AnimateIn delay={0.15}><p className="mt-2 text-xl md:text-2xl font-light" style={{ color: brand.color }}>{brand.tagline}</p></AnimateIn>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <AnimateIn><h2 className="text-2xl md:text-3xl font-bold tracking-tight">About {brand.name}</h2></AnimateIn>
              <AnimateIn delay={0.08}><p className="mt-6 text-white/70 text-base leading-[1.85]">{brand.description}</p></AnimateIn>
              {brand.longDescription && <AnimateIn delay={0.14}><p className="mt-5 text-white/60 text-base leading-[1.85]">{brand.longDescription}</p></AnimateIn>}
              <div className="mt-14 grid sm:grid-cols-2 gap-5">
                <AnimateIn delay={0.1} y={20}>
                  <div className="p-7 rounded-2xl glass hover:bg-white/[0.06] transition-all duration-700 group h-full">
                    <Sparkles className="text-[#D4A853] mb-4" size={24} />
                    <h3 className="text-white font-semibold text-lg">Innovation</h3>
                    <p className="mt-3 text-white/60 text-sm leading-relaxed">Pushing the boundaries of {brand.industry.toLowerCase()} with solutions that define the future of the industry.</p>
                  </div>
                </AnimateIn>
                <AnimateIn delay={0.16} y={20}>
                  <div className="p-7 rounded-2xl glass hover:bg-white/[0.06] transition-all duration-700 group h-full">
                    <Globe className="text-[#D4A853] mb-4" size={24} />
                    <h3 className="text-white font-semibold text-lg">Global Impact</h3>
                    <p className="mt-3 text-white/60 text-sm leading-relaxed">Operating across multiple international markets with localized strategies and global ambitions.</p>
                  </div>
                </AnimateIn>
              </div>
            </div>

            <div className="space-y-6">
              <AnimateIn delay={0.08} y={20}>
                <div className="glass rounded-2xl p-7">
                  <h3 className="text-[11px] uppercase tracking-[0.2em] text-white/50 mb-5">Quick Facts</h3>
                  <div className="space-y-5">
                    <div className="flex items-center gap-3.5"><Calendar size={16} className="text-[#D4A853] shrink-0" /><div><div className="text-[10px] text-white/40 uppercase tracking-wider">Founded</div><div className="text-white/85 font-medium text-sm">{brand.founded}</div></div></div>
                    <div className="flex items-center gap-3.5"><Sparkles size={16} className="text-[#D4A853] shrink-0" /><div><div className="text-[10px] text-white/40 uppercase tracking-wider">Industry</div><div className="text-white/85 font-medium text-sm">{brand.industry}</div></div></div>
                    {brand.employees && <div className="flex items-center gap-3.5"><Users size={16} className="text-[#D4A853] shrink-0" /><div><div className="text-[10px] text-white/40 uppercase tracking-wider">Team Size</div><div className="text-white/85 font-medium text-sm">{brand.employees}</div></div></div>}
                    {brand.headquarters && <div className="flex items-center gap-3.5"><MapPin size={16} className="text-[#D4A853] shrink-0" /><div><div className="text-[10px] text-white/40 uppercase tracking-wider">Headquarters</div><div className="text-white/85 font-medium text-sm">{brand.headquarters}</div></div></div>}
                    {brand.website && <div className="flex items-center gap-3.5"><ExternalLink size={16} className="text-[#D4A853] shrink-0" /><div><div className="text-[10px] text-white/40 uppercase tracking-wider">Website</div><div className="text-white/85 font-medium text-sm">{brand.website}</div></div></div>}
                  </div>
                </div>
              </AnimateIn>

              <AnimateIn delay={0.14} y={20}>
                <div className="rounded-2xl p-7 border" style={{ borderColor: `${brand.color}25`, background: `${brand.color}08` }}>
                  <h3 className="font-semibold mb-2" style={{ color: brand.color }}>Part of Heading North</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{brand.name} operates as an independent brand under the Heading North umbrella, benefiting from shared resources, strategic guidance, and a commitment to excellence.</p>
                  <Link href="/about" className="inline-flex items-center gap-1.5 mt-4 text-sm hover:gap-2 transition-all duration-500" style={{ color: brand.color }}>Learn about Heading North <ArrowUpRight size={14} /></Link>
                </div>
              </AnimateIn>

              <AnimateIn delay={0.2} y={20}>
                <Link href="/brands" className="block w-full py-3.5 text-center border border-white/10 rounded-xl text-white/55 hover:border-[#D4A853]/40 hover:text-[#D4A853] transition-all duration-700 text-sm">View All Brands</Link>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
