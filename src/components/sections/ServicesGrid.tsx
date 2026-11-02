"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Fish,
  Waves,
  Sparkles,
  Compass,
  Layers,
  Wheat,
  Activity,
  Truck,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import DepthBadge from "@/components/ui/DepthBadge";
import { SERVICES_LIST } from "@/data/aquacultureData";
import ConsultationModal from "@/components/ui/ConsultationModal";

export default function ServicesGrid() {
  const [activeService, setActiveService] = useState<string | null>(null);

  // Helper to render icon
  const getIcon = (id: string) => {
    switch (id) {
      case "freshwater-fish-farming":
        return <Fish className="w-6 h-6 text-teal-300" />;
      case "shrimp-farming":
        return <Waves className="w-6 h-6 text-orange-400" />;
      case "hatchery-services":
        return <Sparkles className="w-6 h-6 text-sky-400" />;
      case "aquaculture-consultancy":
        return <Compass className="w-6 h-6 text-emerald-400" />;
      case "pond-management":
        return <Layers className="w-6 h-6 text-cyan-400" />;
      case "fish-feed-supply":
        return <Wheat className="w-6 h-6 text-amber-400" />;
      case "water-quality-monitoring":
        return <Activity className="w-6 h-6 text-rose-400" />;
      case "harvest-support":
        return <Truck className="w-6 h-6 text-indigo-400" />;
      default:
        return <Fish className="w-6 h-6 text-teal-300" />;
    }
  };

  return (
    <>
      <section className="relative z-10 py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto border-t border-white/5">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <DepthBadge label="-14 M · REEF SLOPE" variant="teal" />
            <h2 className="text-xs font-mono uppercase tracking-widest text-orange-400 mt-3 mb-2">
              Comprehensive Operations
            </h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight">
              SPECIALIZED AQUACULTURE <br />
              <span className="text-teal-400">SERVICES & INFRASTRUCTURE</span>
            </h3>
          </div>
          <p className="text-slate-400 max-w-md text-sm leading-relaxed">
            From SPF larval rearing and turnkey biofloc engineering to lab testing and chilled export logistics, we cover the full commercial farming lifecycle.
          </p>
        </div>

        {/* 8 Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              className="group ocean-glass ocean-glass-hover rounded-2xl p-6 flex flex-col justify-between border border-white/10 hover:border-teal-500/40 relative overflow-hidden transition-all duration-300"
            >
              {/* Subtle top indicator */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/5 group-hover:bg-teal-500/15 rounded-bl-full transition-colors duration-500 pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-teal-400/40 transition-all duration-300">
                    {getIcon(service.id)}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 px-2 py-0.5 rounded-full bg-white/5 border border-white/10">
                    {service.depthTag.split("·")[0].trim()}
                  </span>
                </div>

                <div className="text-[10px] font-mono text-orange-400 uppercase tracking-widest mb-1.5 font-bold">
                  {service.heroTag}
                </div>

                <h4 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors mb-2.5">
                  {service.title}
                </h4>

                <p className="text-xs text-slate-300 leading-relaxed font-light mb-4">
                  {service.shortDesc}
                </p>

                {/* Key Bullet Preview */}
                <div className="space-y-1.5 mb-6 border-t border-white/5 pt-3">
                  {service.keyFeatures.slice(0, 2).map((feat, i) => (
                    <div
                      key={i}
                      className="text-[11px] text-slate-400 flex items-start gap-1.5"
                    >
                      <span className="w-1 h-1 rounded-full bg-teal-400 shrink-0 mt-1.5" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <Link
                  href={`/services#${service.id}`}
                  className="text-teal-400 hover:text-white transition flex items-center gap-1"
                >
                  <span>Specs</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  onClick={() => setActiveService(service.title)}
                  className="text-orange-400 hover:text-orange-300 font-bold transition flex items-center gap-1"
                >
                  <span>Book</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-300 hover:text-teal-300 bg-white/5 hover:bg-white/10 px-6 py-3 rounded-full border border-white/10 transition"
          >
            <span>View Full Technical Specifications & Protocols</span>
            <ArrowRight className="w-3.5 h-3.5 text-orange-400" />
          </Link>
        </div>
      </section>

      {/* Booking / Consultation modal */}
      <ConsultationModal
        isOpen={!!activeService}
        onClose={() => setActiveService(null)}
        defaultService={activeService || undefined}
      />
    </>
  );
}

