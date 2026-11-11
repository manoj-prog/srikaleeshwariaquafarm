"use client";

import { PACKAGING_STEPS } from "@/data/aquacultureData";
import DepthBadge from "@/components/ui/DepthBadge";
import { ShieldCheck } from "lucide-react";

export default function PackagingDelivery() {
  const getNumberColor = (step: number) => {
    switch (step) {
      case 1:
        return "bg-cyan-500/20 text-cyan-300 border-cyan-400/40 shadow-[0_0_15px_rgba(6,182,212,0.3)]";
      case 2:
        return "bg-blue-500/20 text-blue-300 border-blue-400/40 shadow-[0_0_15px_rgba(59,130,246,0.3)]";
      case 3:
        return "bg-emerald-500/20 text-emerald-300 border-emerald-400/40 shadow-[0_0_15px_rgba(16,185,129,0.3)]";
      case 4:
        return "bg-purple-500/20 text-purple-300 border-purple-400/40 shadow-[0_0_15px_rgba(168,85,247,0.3)]";
      default:
        return "bg-teal-500/20 text-teal-300 border-teal-400/40";
    }
  };

  return (
    <section className="relative z-10 py-20 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto border-t border-white/5">
      <div className="ocean-glass rounded-3xl p-8 sm:p-14 border border-teal-500/30 relative overflow-hidden shadow-2xl">
        {/* Subtle Ambient Backlight */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3 relative z-10">
          <DepthBadge label="-18 M · SAFE TRANSIT PROTOCOL" variant="teal" />
          <h2 className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold">
            SAFE TRANSPORT PROTOCOL
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight">
            How We Package & Deliver
          </h3>
          <p className="text-slate-400 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Zero stress transit guaranteed. Here is how your fish arrive healthy and active.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {PACKAGING_STEPS.map((item) => (
            <div
              key={item.step}
              className="bg-[#030f18]/80 rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-teal-500/40 transition-all duration-300 flex flex-col items-center text-center group"
            >
              {/* Step Number Circle */}
              <div
                className={`w-12 h-12 rounded-full border flex items-center justify-center font-mono font-black text-lg mb-6 transition-transform group-hover:scale-110 ${getNumberColor(
                  item.step
                )}`}
              >
                {item.step}
              </div>

              {/* Title */}
              <h4 className="text-base font-bold text-white mb-2.5">
                {item.title}
              </h4>

              {/* Description */}
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400 relative z-10">
          <div className="flex items-center gap-2 text-teal-300">
            <ShieldCheck className="w-4 h-4" />
            <span>Pan-India Overnight Air & Express Road Cargo Available</span>
          </div>
          <div className="text-slate-400">
            Pre-flight oxygen replenishment & heat/ice pack regulation
          </div>
        </div>
      </div>
    </section>
  );
}
