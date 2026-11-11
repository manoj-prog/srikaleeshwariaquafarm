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
import InstagramIcon from "@/components/ui/InstagramIcon";
import ConsultationModal from "@/components/ui/ConsultationModal";
import PackagingDelivery from "@/components/sections/PackagingDelivery";
import { COMPANY_INFO, BREEDING_LINES } from "@/data/aquacultureData";
import {
  CheckCircle2,
  Sparkles,
  Droplets,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

export default function PlatinumCrystalMollyPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const data = BREEDING_LINES.find((b) => b.id === "platinum-crystal-molly")!;

  return (
    <main className="relative min-h-screen bg-[#030f18] text-slate-100 overflow-x-hidden">
      <OceanParticles />
      <DepthHUD />
      <FloatingWhatsApp />
      <ScrollToTop />
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-36 pb-16 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <DepthBadge label="-10 M · PURE WHITE MORPHS" variant="teal" />
          <span className="px-3 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
            {data.badge}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-[1.05]">
              PLATINUM CRYSTAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-teal-200 to-white">
                WHITE MOLLIES
              </span>
            </h1>

            {/* Exact user requested main content */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <p className="text-base sm:text-lg text-slate-100 font-medium leading-relaxed">
                Flawless metallic white sheen without yellowing. Available in C fin and lyretail varieties. Prolific breeders and energetic tank cleaners.
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              {data.description}
            </p>

            {/* Parameter Badges */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-[#030d14] border border-white/10 text-center">
                <div className="text-[10px] font-mono text-slate-400 uppercase">
                  Water pH
                </div>
                <div className="text-sm font-bold text-cyan-300 mt-0.5">
                  {data.waterPh}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#030d14] border border-white/10 text-center">
                <div className="text-[10px] font-mono text-slate-400 uppercase">
                  Water Temp
                </div>
                <div className="text-sm font-bold text-teal-300 mt-0.5">
                  {data.waterTemp}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#030d14] border border-white/10 text-center">
                <div className="text-[10px] font-mono text-slate-400 uppercase">
                  Ideal TDS
                </div>
                <div className="text-sm font-bold text-white mt-0.5">
                  {data.tds}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={COMPANY_INFO.socials.instagramDmUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-600 hover:bg-cyan-500 active:scale-95 text-white font-bold text-xs uppercase tracking-widest px-7 py-3.5 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all flex items-center gap-2"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>DM For Batches & Pairs</span>
              </a>

              <button
                onClick={() => setModalOpen(true)}
                className="bg-white/5 hover:bg-white/10 text-slate-200 border border-white/15 text-xs font-mono font-bold uppercase tracking-wider px-6 py-3.5 rounded-full transition flex items-center gap-2"
              >
                <span>Inquire Molly Stock</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Image Feature */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[420px] rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-[#020b12]">
              <Image
                src={data.image}
                alt="Platinum Crystal White Molly"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030f18] via-transparent to-transparent opacity-70" />

              <div className="absolute bottom-4 left-4 right-4 bg-[#030f18]/90 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-cyan-400 font-bold block">
                      COLOR PURITY
                    </span>
                    <span className="text-xs font-bold text-white mt-0.5 block">
                      Pure Metallic Pearl Sheen
                    </span>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                    Algae Cleaner
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Varieties & Breeding Highlights Grid */}
      <section className="relative z-10 py-16 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Strains Available */}
          <div className="ocean-glass rounded-3xl p-8 border border-white/10 space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span>Available Varieties & Fin Morphs</span>
            </h3>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              Bred for clean snow-white metallic sheen and healthy fin extensions:
            </p>
            <div className="space-y-2.5 pt-2">
              {data.strains.map((strain, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 text-xs text-slate-200 bg-white/5 p-3 rounded-xl border border-white/5"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="font-medium">{strain}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cleanliness & Livebearer Breeding */}
          <div className="ocean-glass rounded-3xl p-8 border border-white/10 space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-teal-300" />
              <span>Planted Tank Utility & Grazing</span>
            </h3>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              Why Crystal Mollies are invaluable functional show fish:
            </p>
            <div className="space-y-2.5 pt-2">
              {data.breedingHighlights.map((point, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 text-xs text-slate-200 bg-white/5 p-3 rounded-xl border border-white/5"
                >
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span className="font-light">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packaging & Delivery Section */}
      <PackagingDelivery />

      <Footer />

      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService="Platinum Crystal Molly Availability"
      />
    </main>
  );
}

