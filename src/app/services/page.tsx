"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import OceanParticles from "@/components/layout/OceanParticles";
import DepthHUD from "@/components/layout/DepthHUD";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import ScrollToTop from "@/components/layout/ScrollToTop";
import DepthBadge from "@/components/ui/DepthBadge";
import ConsultationModal from "@/components/ui/ConsultationModal";
import {
  SERVICES_LIST,
  ServiceItem,
} from "@/data/aquacultureData";
import {
  CheckCircle2,
  Cpu,
  TrendingUp,
  Users,
  ArrowUpRight,
  Fish,
  Waves,
  Sparkles,
  Compass,
  Layers,
  Wheat,
  Activity,
  Truck,
} from "lucide-react";

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [modalService, setModalService] = useState<string | null>(null);

  const filteredServices =
    selectedCategory === "all"
      ? SERVICES_LIST
      : SERVICES_LIST.filter((s) => s.category === selectedCategory);

  const categories = [
    { label: "All Services", value: "all" },
    { label: "Fish Culture", value: "fish" },
    { label: "Shrimp Culture", value: "shrimp" },
    { label: "Hatchery & Seed", value: "hatchery" },
    { label: "Feed & Live Nutrition", value: "feed" },
    { label: "Infrastructure & Pond Setup", value: "infrastructure" },
    { label: "Consultancy & Lab Diagnostics", value: "consultancy" },
  ];

  return (
    <main className="relative min-h-screen bg-[#030f18] text-slate-100 overflow-x-hidden">
      <OceanParticles />
      <DepthHUD />
      <FloatingWhatsApp />
      <ScrollToTop />
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-36 pb-16 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <DepthBadge label="-18 M · PRODUCTION ZONE" variant="teal" />

        <div className="max-w-4xl mt-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-[1.05]">
            END-TO-END COMMERCIAL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-400 to-orange-400">
              AQUACULTURE SOLUTIONS
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-xl text-slate-300 font-light leading-relaxed max-w-2xl">
            From SPF certified broodstock seed and high-stability extruded nutrition to turnkey pond biofloc engineering, diagnostic surveillance, and export-grade harvest logistics.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2.5 mt-10">
          {categories.map((c) => (
            <button
              key={c.value}
              onClick={() => setSelectedCategory(c.value)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition ${
                selectedCategory === c.value
                  ? "bg-teal-500/20 text-teal-300 border border-teal-500/50 shadow-[0_0_15px_rgba(45,212,191,0.25)]"
                  : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="relative z-10 py-10 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto space-y-16">
        {filteredServices.map((service, index) => {
          const isReversed = index % 2 !== 0;

          return (
            <div
              key={service.id}
              id={service.id}
              className="ocean-glass rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden transition-all duration-300 hover:border-teal-500/40"
            >
              <div
                className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-14 ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Visual / Image */}
                <div className="w-full lg:w-1/2 relative">
                  <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#061824]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020b12] via-transparent to-transparent opacity-80" />

                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono text-teal-300 border border-teal-500/30">
                      {service.depthTag}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 bg-[#030f18]/90 backdrop-blur-md p-3.5 rounded-xl border border-white/10">
                      <div className="flex items-center gap-2 text-xs font-mono text-orange-400">
                        <Users className="w-3.5 h-3.5" />
                        <span>Ideal for: {service.targetAudience}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-5">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-orange-400 font-bold block mb-1">
                      {service.heroTag}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                    {service.description}
                  </p>

                  {/* Key Features */}
                  <div className="space-y-2 border-t border-white/10 pt-4">
                    <div className="text-xs font-mono uppercase tracking-wider text-teal-400 font-bold">
                      Key Capabilities & Specifications
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.keyFeatures.map((feat, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 text-xs text-slate-200"
                        >
                          <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies Used */}
                  <div className="border-t border-white/10 pt-4">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      <Cpu className="w-3.5 h-3.5 text-sky-400" />
                      <span>Proprietary Systems & Technology</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-300 bg-white/5 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA button */}
                  <div className="pt-2">
                    <button
                      onClick={() => setModalService(service.title)}
                      className="bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-full shadow-[0_0_20px_rgba(249,115,22,0.35)] flex items-center gap-2 transition"
                    >
                      <span>Consult on {service.title}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <Footer />

      <ConsultationModal
        isOpen={!!modalService}
        onClose={() => setModalService(null)}
        defaultService={modalService || undefined}
      />
    </main>
  );
}

