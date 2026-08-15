"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Clock, Briefcase } from "lucide-react";
import AnimateIn from "./AnimateIn";
import { IMAGES } from "@/lib/images";

const perks = [
  { emoji: "🌍", title: "Remote-First", desc: "Work from anywhere in the world. We hire talent, not zip codes." },
  { emoji: "📈", title: "Equity & Growth", desc: "Competitive equity packages and clear paths for career advancement." },
  { emoji: "🎓", title: "Learning Budget", desc: "$5,000 annual learning budget for courses, conferences, and books." },
  { emoji: "🏥", title: "Full Benefits", desc: "Comprehensive health, dental, vision, and mental health coverage." },
  { emoji: "🏖️", title: "Unlimited PTO", desc: "Take the time you need. We trust you to manage your own schedule." },
  { emoji: "🤝", title: "Team Retreats", desc: "Quarterly in-person gatherings in inspiring locations worldwide." },
];

const openings = [
  { title: "Senior Product Designer", brand: "Polaris Tech", location: "San Francisco / Remote", type: "Full-time", dept: "Design" },
  { title: "Staff Software Engineer", brand: "Arctic Finance", location: "New York / Remote", type: "Full-time", dept: "Engineering" },
  { title: "Content Strategist", brand: "Nordica Studios", location: "Los Angeles", type: "Full-time", dept: "Creative" },
  { title: "Data Science Lead", brand: "Summit Health", location: "Boston / Remote", type: "Full-time", dept: "Data & AI" },
  { title: "Investment Analyst", brand: "Boreal Ventures", location: "London", type: "Full-time", dept: "Finance" },
  { title: "Head of Brand", brand: "Aurora Living", location: "Copenhagen", type: "Full-time", dept: "Marketing" },
  { title: "DevOps Engineer", brand: "Heading North", location: "Remote", type: "Full-time", dept: "Engineering" },
  { title: "General Counsel", brand: "Heading North", location: "New York", type: "Full-time", dept: "Legal" },
];

export default function CareersClient() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[550px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src={IMAGES.team} alt="Team collaboration" fill priority className="object-cover animate-ken-burns" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-[#030305]/60 to-[#030305]/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-20 w-full">
          <AnimateIn>
            <span className="text-[#D4A853]/70 text-[11px] uppercase tracking-[0.3em] font-medium">Careers</span>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <h1 className="mt-4 text-5xl md:text-7xl lg:text-8xl font-black tracking-[-0.04em] leading-[0.9]">
              Build the <span className="text-gradient">Future</span>
              <br />
              With Us.
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.16}>
            <p className="mt-6 text-white/50 max-w-lg text-base">
              We are looking for extraordinary people who want to do the most
              meaningful work of their careers. Join 12,000+ team members across
              34 countries.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Culture */}
      <section className="py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <AnimateIn>
                <span className="text-[#D4A853]/70 text-[11px] uppercase tracking-[0.3em] font-medium">Our Culture</span>
              </AnimateIn>
              <AnimateIn delay={0.08}>
                <h2 className="mt-5 text-3xl md:text-5xl font-black tracking-tight leading-tight">
                  Where ambition meets <span className="text-gradient">purpose</span>
                </h2>
              </AnimateIn>
              <AnimateIn delay={0.16}>
                <p className="mt-6 text-white/50 leading-relaxed">
                  At Heading North, we don&apos;t just build products — we build careers,
                  communities, and legacies. Our culture is rooted in autonomy,
                  transparency, and the belief that diverse perspectives create the
                  best outcomes.
                </p>
              </AnimateIn>
              <AnimateIn delay={0.22}>
                <p className="mt-4 text-white/45 leading-relaxed">
                  Every team member, from intern to CEO, has a voice. We celebrate
                  bold ideas, learn from failures, and never stop pushing the
                  boundaries of what&apos;s possible.
                </p>
              </AnimateIn>
            </div>
            <AnimateIn delay={0.1} y={30}>
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                <Image src={IMAGES.lab} alt="Innovation lab" fill className="object-cover" sizes="50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030305]/50 to-transparent" />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-7xl mx-auto" />

      {/* Perks */}
      <section className="py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <AnimateIn>
              <span className="text-[#D4A853]/70 text-[11px] uppercase tracking-[0.3em] font-medium">Benefits & Perks</span>
            </AnimateIn>
            <AnimateIn delay={0.08}>
              <h2 className="mt-5 text-3xl md:text-5xl font-black tracking-tight">
                We take care of <span className="text-gradient">our people</span>
              </h2>
            </AnimateIn>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {perks.map((perk, i) => (
              <AnimateIn key={perk.title} delay={0.04 + i * 0.05} y={20}>
                <div className="p-7 rounded-2xl glass hover:bg-white/[0.04] transition-all duration-700 h-full">
                  <span className="text-3xl">{perk.emoji}</span>
                  <h3 className="text-white/85 font-semibold text-lg mt-4">{perk.title}</h3>
                  <p className="mt-2 text-white/45 text-sm leading-relaxed">{perk.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-7xl mx-auto" />

      {/* Openings */}
      <section className="py-28 md:py-36 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src={IMAGES.shadow} alt="Abstract" fill className="object-cover opacity-[0.03]" sizes="100vw" />
          <div className="absolute inset-0 bg-[#030305]/95" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <AnimateIn>
              <span className="text-[#D4A853]/70 text-[11px] uppercase tracking-[0.3em] font-medium">Open Positions</span>
            </AnimateIn>
            <AnimateIn delay={0.08}>
              <h2 className="mt-5 text-3xl md:text-5xl font-black tracking-tight">
                Find your <span className="text-gradient">place</span>
              </h2>
            </AnimateIn>
          </div>

          <div className="space-y-3">
            {openings.map((job, i) => (
              <AnimateIn key={job.title + job.brand} delay={0.03 + i * 0.03} y={14}>
                <div className="group p-5 md:p-6 rounded-xl glass hover:bg-white/[0.04] transition-all duration-700 cursor-pointer flex items-center justify-between gap-4 flex-wrap">
                  <div className="flex-1 min-w-[200px]">
                    <h3 className="text-white/85 font-semibold group-hover:text-white transition-colors duration-500">{job.title}</h3>
                    <div className="flex items-center gap-4 mt-1.5 flex-wrap">
                      <span className="text-[#D4A853]/70 text-sm">{job.brand}</span>
                      <span className="flex items-center gap-1 text-white/35 text-xs">
                        <MapPin size={11} /> {job.location}
                      </span>
                      <span className="flex items-center gap-1 text-white/35 text-xs">
                        <Clock size={11} /> {job.type}
                      </span>
                      <span className="flex items-center gap-1 text-white/35 text-xs">
                        <Briefcase size={11} /> {job.dept}
                      </span>
                    </div>
                  </div>
                  <div className="w-9 h-9 rounded-full border border-white/[0.06] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 shrink-0">
                    <ArrowUpRight size={14} className="text-white/40" />
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimateIn>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
              Don&apos;t see your role? <span className="text-gradient">Reach out anyway.</span>
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-5 text-white/45 max-w-md mx-auto">
              We are always looking for exceptional people. Send us your story.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.18}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-gradient-to-r from-[#D4A853] to-[#9A7B3A] text-[#030305] font-semibold text-sm rounded-full hover:shadow-2xl hover:shadow-[#D4A853]/20 transition-all duration-700 hover:scale-[1.03]"
            >
              Get In Touch <ArrowUpRight size={16} />
            </Link>
          </AnimateIn>
        </div>
      </section>
    </main>
  );
}
