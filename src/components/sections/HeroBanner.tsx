"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Sparkles, Images, ShieldCheck } from "lucide-react";
import InstagramIcon from "@/components/ui/InstagramIcon";
import DepthBadge from "@/components/ui/DepthBadge";
import ConsultationModal from "@/components/ui/ConsultationModal";
import { COMPANY_INFO } from "@/data/aquacultureData";

export default function HeroBanner() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-[92vh] flex flex-col justify-center items-start pt-32 pb-16 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto overflow-hidden">
        {/* Ambient ocean glow behind text */}
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-[#005B96]/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[160px] pointer-events-none" />

        {/* Top Tag & Studio Badge */}
        <div className="relative z-10 flex flex-wrap items-center gap-3 mb-6">
          <DepthBadge label="-0 M · SURFACE STUDIO" variant="teal" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider text-orange-300 bg-orange-500/10 border border-orange-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-ping" />
            <span>{COMPANY_INFO.studioTitle.toUpperCase()}</span>
          </div>
        </div>

        {/* High-Impact Headline */}
        <div className="relative z-10 max-w-5xl">
          <h1 className="text-[10vw] sm:text-[6.5vw] lg:text-[4.8rem] leading-[1.0] font-black uppercase tracking-tight text-white">
            MASTER-BRED EXOTIC <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-400 to-orange-400">
              AQUATIC LINES
            </span> <br />
            WITH SUPERIOR GENETICS.
          </h1>

          <p className="mt-6 md:mt-8 text-base md:text-xl text-slate-300 font-light max-w-3xl leading-relaxed">
            Specialized in high-kok <strong className="text-white font-semibold">Flowerhorn Fish</strong>, vibrant{" "}
            <strong className="text-white font-semibold">Neocaridina Shrimps</strong>, exquisite{" "}
            <strong className="text-white font-semibold">Angelfish strains</strong>, and show-grade{" "}
            <strong className="text-white font-semibold">Platinum Crystal White Mollies</strong>. Raised in conditioned, high-stability parameters.
          </p>
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

          <a
            href={COMPANY_INFO.socials.instagramDmUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-orange-500/40 text-orange-300 hover:text-white bg-orange-500/10 hover:bg-orange-500/20 px-7 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition flex items-center gap-2 group backdrop-blur-md shadow-[0_0_15px_rgba(249,115,22,0.2)]"
            title="Direct Message on Instagram"
          >
            <InstagramIcon className="w-4 h-4 text-orange-400 group-hover:scale-110 transition-transform" />
            <span>DM {COMPANY_INFO.socials.instagram}</span>
          </a>

          <Link
            href="/gallery"
            className="border border-white/20 hover:border-teal-400 text-slate-200 hover:text-white bg-white/5 hover:bg-teal-500/10 px-7 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition flex items-center gap-2 group backdrop-blur-md"
          >
            <Images className="w-4 h-4 text-teal-400 group-hover:scale-110 transition-transform" />
            <span>View Gallery</span>
          </Link>
        </div>

        {/* Live Studio Highlights */}
        <div className="relative z-10 mt-14 pt-8 border-t border-white/10 w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-slate-300">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
              2+ Years
            </div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-medium mt-1">
              Selective Breeding Experience
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-teal-400 font-mono">
              4 Core Lines
            </div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-medium mt-1">
              Pure-Bred Specialized Livestock
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-sky-400 font-mono">
              100% Conditioned
            </div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-medium mt-1">
              Home Water Stable Parameters
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-orange-400 font-mono">
              DOA Protected
            </div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-medium mt-1">
              Guaranteed Live Doorstep Delivery
            </div>
          </div>
        </div>

        {/* Dive scroll indicator */}
        <div className="mt-8 flex items-center gap-2 text-xs font-mono text-slate-400 animate-bounce">
          <ArrowDown className="w-3.5 h-3.5 text-teal-400" />
          <span>Explore our 4 specialized breeding lines below</span>
        </div>
      </section>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
