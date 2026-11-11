"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import DepthBadge from "@/components/ui/DepthBadge";
import { BREEDING_LINES } from "@/data/aquacultureData";

export default function SpecialtyLines() {
  return (
    <section className="relative z-10 py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto border-t border-white/5">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <DepthBadge label="-6 M · SELECTIVE BREEDING" variant="teal" />
        <h2 className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold">
          OUR SPECIALTY FOCUS
        </h2>
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight">
          4 Core Specialized Breeding Lines
        </h3>
        <p className="text-slate-400 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
          Every strain listed below is selectively bred in-house for vibrant coloration, structural symmetry, robust immune response, and tank adaptability.
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {BREEDING_LINES.map((line) => (
          <div
            key={line.id}
            className="ocean-glass ocean-glass-hover rounded-2xl p-4 flex flex-col justify-between border border-white/10 hover:border-teal-500/40 relative overflow-hidden transition-all duration-300 group"
          >
            <div>
              {/* Image & Badge container */}
              <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4 bg-[#020b12] border border-white/10">
                <Image
                  src={line.image}
                  alt={line.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030f18] via-transparent to-transparent opacity-60" />

                {/* Badge Tag from Image */}
                <div className="absolute top-2.5 left-2.5">
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider border backdrop-blur-md ${line.badgeColor}`}
                  >
                    {line.badge}
                  </span>
                </div>
              </div>

              {/* Title & Desc */}
              <h4 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors mb-2">
                {line.name}
              </h4>

              <p className="text-xs text-slate-300 font-light leading-relaxed mb-4">
                {line.shortDesc}
              </p>
            </div>

            {/* Bottom Meta Table matching user's image */}
            <div className="pt-3 border-t border-white/10 space-y-1.5 text-[11px] font-mono">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Key Traits:</span>
                <span className="text-slate-200 font-semibold">{line.keyTraits}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Care Level:</span>
                <span className={`font-semibold ${line.careLevelColor}`}>
                  {line.careLevel}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Water pH:</span>
                <span className="text-teal-300 font-semibold">{line.waterPh}</span>
              </div>

              {/* Link to species page */}
              <div className="pt-3 mt-2 border-t border-white/5">
                <Link
                  href={line.slug}
                  className="text-xs font-semibold text-orange-400 hover:text-orange-300 transition flex items-center justify-between group-hover:translate-x-0.5"
                >
                  <span>Explore {line.name.split(" ")[0]} Strains</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

