"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, ShieldCheck, Waves, Fish, Sparkles } from "lucide-react";
import InstagramIcon from "@/components/ui/InstagramIcon";
import DepthBadge from "@/components/ui/DepthBadge";
import ConsultationModal from "@/components/ui/ConsultationModal";
import { COMPANY_INFO } from "@/data/aquacultureData";

export default function HeroBanner() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex flex-col justify-center items-start pt-28 pb-16 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto overflow-hidden">
        {/* Ambient ocean glow behind text */}
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-[#005B96]/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[160px] pointer-events-none" />

        {/* Depth Tag & Badge */}
        <div className="relative z-10 flex flex-wrap items-center gap-3 mb-6">
          <DepthBadge label="-0 M · SURFACE DIVE" variant="teal" />
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider text-orange-300 bg-orange-500/10 border border-orange-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-ping" />
            <span>ESTABLISHED 2001 • TAMIL NADU</span>
          </div>
        </div>

        {/* High-Impact Headline (Orange Aquaculture typography style) */}
        <div className="relative z-10 max-w-5xl">
          <h1 className="text-[11vw] sm:text-[7vw] lg:text-[5.5rem] leading-[0.95] font-black uppercase tracking-tight text-white">
            LEADING SUSTAINABLE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-400 to-orange-400">
              AQUACULTURE
            </span> <br />
            SOLUTIONS.
          </h1>

          <div className="mt-6 md:mt-8 text-base md:text-xl text-slate-300 font-light max-w-2xl leading-relaxed">
            Empowering fish and shrimp farmers across India through biosecure hatcheries, high-yield biofloc engineering, and responsible ecosystem management.
          </div>
        </div>

        {/* CTA Button Array */}
        <div className="relative z-10 flex flex-wrap items-center gap-4 mt-10 md:mt-12">
          <button
            onClick={() => setModalOpen(true)}
            className="bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full shadow-[0_0_25px_rgba(249,115,22,0.45)] hover:shadow-[0_0_35px_rgba(249,115,22,0.65)] transition-all flex items-center gap-3 group"
          >
            <span>Get Consultation</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <Link
            href="/services"
            className="border border-white/20 hover:border-teal-400 text-slate-200 hover:text-white bg-white/5 hover:bg-teal-500/10 px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition flex items-center gap-2 group backdrop-blur-md"
          >
            <span>Explore Services</span>
            <Waves className="w-4 h-4 text-teal-400 group-hover:scale-110 transition-transform" />
          </Link>

          <a
            href={COMPANY_INFO.socials.instagramDmUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-orange-500/30 text-orange-300 hover:text-white bg-orange-500/10 hover:bg-orange-500/20 px-6 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition flex items-center gap-2 group backdrop-blur-md shadow-[0_0_15px_rgba(249,115,22,0.2)]"
            title="Direct Message on Instagram"
          >
            <InstagramIcon className="w-4 h-4 text-orange-400 group-hover:scale-110 transition-transform" />
            <span>DM {COMPANY_INFO.socials.instagram}</span>
          </a>
        </div>

        {/* Floating Metrics Ribbon */}
        <div className="relative z-10 mt-14 pt-8 border-t border-white/10 w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-slate-300">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
              25+
            </div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">
              Years Aquaculture Leadership
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-teal-400 font-mono">
              1,200+
            </div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">
              Acres Managed Waters
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-sky-400 font-mono">
              8,500+
            </div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">
              Partner Farmers in India
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-orange-400 font-mono">
              15,000+ MT
            </div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">
              Annual Biomass Harvest
            </div>
          </div>
        </div>

        {/* Dive deeper scroll indicator */}
        <div className="mt-8 flex items-center gap-2 text-xs font-mono text-slate-400 animate-bounce">
          <ArrowDown className="w-3.5 h-3.5 text-teal-400" />
          <span>Dive into the farm ecosystem</span>
        </div>
      </section>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

