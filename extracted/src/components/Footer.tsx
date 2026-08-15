"use client";

import Link from "next/link";
import AnimateIn from "./AnimateIn";

const links = {
  Company: [
    { name: "About", href: "/about" },
    { name: "Brands", href: "/brands" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  Resources: [
    { name: "Investor Relations", href: "/about" },
    { name: "Governance", href: "/about" },
    { name: "Sustainability", href: "/about" },
    { name: "Press", href: "/contact" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "/contact" },
    { name: "Terms of Service", href: "/contact" },
    { name: "Cookie Policy", href: "/contact" },
    { name: "Compliance", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-[#030305] border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-10">
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <AnimateIn className="md:col-span-2" y={20}>
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#D4A853] to-[#9A7B3A] flex items-center justify-center text-[#030305] font-black text-base">
                HN
              </div>
              <span className="text-white font-semibold text-lg tracking-tight">
                Heading North
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              A global holding company building, nurturing, and scaling
              visionary brands that shape industries and redefine possibilities.
            </p>
            <div className="flex gap-4 mt-6">
              {["Twitter", "LinkedIn", "Instagram"].map((s) => (
                <span
                  key={s}
                  className="text-xs text-white/30 hover:text-[#D4A853] transition-colors duration-500 cursor-pointer uppercase tracking-wider"
                >
                  {s}
                </span>
              ))}
            </div>
          </AnimateIn>

          {/* Link groups */}
          {Object.entries(links).map(([group, items], gi) => (
            <AnimateIn key={group} y={20} delay={0.04 + gi * 0.04}>
              <h4 className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-semibold mb-5">
                {group}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/35 hover:text-[#D4A853] transition-colors duration-500"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </AnimateIn>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="section-divider mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-white/25">
            © {new Date().getFullYear()} Heading North Holdings Ltd. All rights
            reserved.
          </p>
          <p className="text-[12px] text-white/25">
            Crafted with vision · Built for the future
          </p>
        </div>
      </div>
    </footer>
  );
}
