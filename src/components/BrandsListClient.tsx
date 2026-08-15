"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import AnimateIn from "./AnimateIn";
import type { Brand } from "@/db/schema";
import { IMAGES } from "@/lib/images";

export default function BrandsListClient({ brands }: { brands: Brand[] }) {
  return (
    <main>
      <section className="relative h-[60vh] min-h-[450px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src={IMAGES.cubes} alt="Abstract cubes" fill priority className="object-cover animate-ken-burns" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08080e] via-[#08080e]/60 to-[#08080e]/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-20 w-full">
          <AnimateIn>
            <span className="text-[#D4A853] text-[11px] uppercase tracking-[0.3em] font-medium">Our Portfolio</span>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <h1 className="mt-4 text-5xl md:text-7xl lg:text-8xl font-black tracking-[-0.04em] leading-[0.9]">
              Our <span className="text-gradient">Brands</span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.16}>
            <p className="mt-5 text-white/65 max-w-lg text-base">
              Six world-class brands united by a shared commitment to innovation,
              excellence, and creating value that lasts.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-8">
          {brands.map((brand, i) => (
            <AnimateIn key={brand.id} delay={i * 0.05} y={30}>
              <Link href={`/brands/${brand.slug}`} className="block group">
                <div className="relative rounded-3xl overflow-hidden bg-[#10101a] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-700">
                  <div className="grid md:grid-cols-2">
                    <div className="relative h-64 md:h-auto md:min-h-[360px] overflow-hidden">
                      {brand.imageUrl && (
                        <Image src={brand.imageUrl} alt={brand.name} fill className="object-cover transition-transform duration-[2s] group-hover:scale-105" sizes="50vw" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#10101a] hidden md:block" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#10101a] to-transparent md:hidden" />
                      <div className="absolute top-6 left-6 w-14 h-14 rounded-xl glass-strong flex items-center justify-center text-3xl">
                        {brand.iconEmoji}
                      </div>
                    </div>

                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="text-[10px] uppercase tracking-[0.2em] text-white/45">{brand.industry}</span>
                          <h2 className="text-3xl md:text-4xl font-black text-white mt-1 tracking-tight group-hover:text-white transition-colors duration-500">
                            {brand.name}
                          </h2>
                          <p className="text-sm mt-1 font-medium" style={{ color: brand.color }}>{brand.tagline}</p>
                        </div>
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-2 group-hover:translate-y-0 shrink-0 mt-2">
                          <ArrowUpRight size={16} className="text-white/60" />
                        </div>
                      </div>

                      <p className="mt-5 text-white/60 text-sm leading-relaxed line-clamp-3">
                        {brand.description}
                      </p>

                      <div className="mt-8 flex flex-wrap gap-6 text-sm">
                        <div>
                          <div className="text-white/40 text-[10px] uppercase tracking-wider">Founded</div>
                          <div className="text-white/75 font-medium mt-0.5">{brand.founded}</div>
                        </div>
                        {brand.employees && (
                          <div>
                            <div className="text-white/40 text-[10px] uppercase tracking-wider">Team</div>
                            <div className="text-white/75 font-medium mt-0.5">{brand.employees}</div>
                          </div>
                        )}
                        {brand.headquarters && (
                          <div>
                            <div className="text-white/40 text-[10px] uppercase tracking-wider">HQ</div>
                            <div className="text-white/75 font-medium mt-0.5">{brand.headquarters}</div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-20 right-20 w-60 h-40 rounded-full opacity-0 group-hover:opacity-[0.1] transition-opacity duration-1000 blur-[80px]" style={{ backgroundColor: brand.color }} />
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </section>
    </main>
  );
}
