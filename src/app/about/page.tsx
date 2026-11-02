import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import OceanParticles from "@/components/layout/OceanParticles";
import DepthHUD from "@/components/layout/DepthHUD";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import ScrollToTop from "@/components/layout/ScrollToTop";
import DepthBadge from "@/components/ui/DepthBadge";
import {
  ShieldCheck,
  CheckCircle2,
  Award,
  Leaf,
  Users,
  Compass,
  Zap,
  ArrowRight,
  Quote,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/aquacultureData";

export const metadata: Metadata = {
  title: "About Us | Sri Kaleeshwari Aqua Farm",
  description:
    "Learn about Sri Kaleeshwari Aqua Farm's 25-year history, vision for sustainable Indian aquaculture, biosecure infrastructure, and leadership team.",
};

const TIMELINE = [
  {
    year: "2001",
    title: "Pioneering Coastal Roots",
    description:
      "Started as a 15-acre freshwater carp and brackish water culture pond in coastal Tamil Nadu with a clear focus on biosecurity and reducing chemical inputs.",
  },
  {
    year: "2008",
    title: "Biofloc & Closed-Loop RAS R&D",
    description:
      "Transitioned to zero-discharge microbial biofloc systems, eliminating the need for periodic groundwater exchange and proving high-density survival.",
  },
  {
    year: "2015",
    title: "State-of-the-Art SPF Hatchery",
    description:
      "Commissioned our climate-controlled marine hatchery facility with CAA compliance, supplying certified pathogen-screened post-larvae across South India.",
  },
  {
    year: "2020",
    title: "Green Energy & Solar Power",
    description:
      "Installed 450 kW of solar arrays powering pond aeration grids, sloughing off 380+ tons of annual carbon emissions and achieving 100% antibiotic-free certification.",
  },
  {
    year: "Present",
    title: "1,200+ Acres & 8,500+ Farmers",
    description:
      "Leading Indian aquaculture through turnkey EPC consultancy, premium micro-pellet nutrition, and cold-chain harvest linkages delivering directly to global export channels.",
  },
];

const CORE_VALUES = [
  {
    title: "Integrity",
    desc: "Uncompromising honesty in disease screening, seed grading, and market transactions. What we promise in the lab is verified in the pond.",
    icon: ShieldCheck,
    color: "text-teal-300",
  },
  {
    title: "Sustainability",
    desc: "Water recycling, biological probiotics, and zero preventive antibiotics safeguarding both our consumers and our coastal mangroves.",
    icon: Leaf,
    color: "text-emerald-400",
  },
  {
    title: "Innovation",
    desc: "Deploying optical DO telemetrics, microalgae photobioreactors, and acoustic appetite feeders that minimize feed waste.",
    icon: Zap,
    color: "text-orange-400",
  },
  {
    title: "Quality",
    desc: "Triple-stage PCR disease testing and strict temperature logs from harvest net to the export packing plant.",
    icon: Award,
    color: "text-sky-400",
  },
  {
    title: "Customer Success",
    desc: "We measure our accomplishment by the net profit per acre of the farmers who trust our seed, feed, and agronomy advice.",
    icon: Users,
    color: "text-amber-300",
  },
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-[#030f18] text-slate-100 overflow-x-hidden">
      <OceanParticles />
      <DepthHUD />
      <FloatingWhatsApp />
      <ScrollToTop />
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-36 pb-20 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <DepthBadge label="-10 M · HERITAGE ZONE" variant="teal" />

        <div className="max-w-4xl mt-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-[1.05]">
            ROOTED IN TRADITION, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-400 to-orange-400">
              POWERED BY SCIENCE.
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-xl text-slate-300 font-light leading-relaxed max-w-2xl">
            For over two decades, Sri Kaleeshwari Aqua Farm has championed ethical, sustainable aquaculture in India, proving that high commercial yield and marine conservation can thrive hand-in-hand.
          </p>
        </div>
      </section>

      {/* Vision & Mission Two-Column Split */}
      <section className="relative z-10 py-16 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="ocean-glass rounded-3xl p-8 sm:p-10 border border-teal-500/30 relative">
            <div className="w-12 h-12 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center mb-6 border border-teal-500/40">
              <Compass className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-teal-400 font-bold block mb-2">
              Our Vision
            </span>
            <h3 className="text-2xl font-bold text-white mb-4">
              A Self-Reliant, Sustainable Blue Economy
            </h3>
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              To position India as the world’s most trusted source of biosecure, residue-free seafood by empowering small and commercial farmers with scientific biofloc technology, genetically sound seed stock, and fair-market transparency.
            </p>
          </div>

          <div className="ocean-glass rounded-3xl p-8 sm:p-10 border border-orange-500/30 relative">
            <div className="w-12 h-12 rounded-xl bg-orange-500/20 text-orange-300 flex items-center justify-center mb-6 border border-orange-500/40">
              <Zap className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-orange-400 font-bold block mb-2">
              Our Mission
            </span>
            <h3 className="text-2xl font-bold text-white mb-4">
              De-Risking Farmer Investment Through Agronomy
            </h3>
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              To continually research, develop, and deliver pathogen-free aquaculture inputs, zero-discharge water treatment designs, and round-the-clock advisory that maximize farm biomass survival while completely eliminating chemical hazards.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story Timeline */}
      <section className="relative z-10 py-20 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <DepthBadge label="-16 M · CHRONICLE" variant="orange" />
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-white tracking-tight">
            OUR 25-YEAR JOURNEY
          </h2>
          <p className="text-sm text-slate-400">
            From humble coastal beginnings to an integrated aquaculture ecosystem.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-400 via-sky-500 to-orange-500 -translate-x-1/2" />

          <div className="space-y-12">
            {TIMELINE.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={item.year}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  } gap-6 sm:gap-12`}
                >
                  {/* Timeline point */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#030f18] border-2 border-teal-400 flex items-center justify-center shadow-[0_0_10px_#2dd4bf]">
                    <div className="w-2 h-2 rounded-full bg-orange-400" />
                  </div>

                  {/* Content card */}
                  <div className="ml-10 sm:ml-0 sm:w-1/2">
                    <div className="ocean-glass p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-teal-400/40 transition">
                      <span className="text-xl sm:text-2xl font-black font-mono text-orange-400">
                        {item.year}
                      </span>
                      <h4 className="text-lg font-bold text-white mt-1 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative z-10 py-20 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <DepthBadge label="-22 M · GUIDING PRINCIPLES" variant="teal" />
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-white tracking-tight">
            OUR CORE VALUES
          </h2>
          <p className="text-sm text-slate-400">
            The foundational standards guiding every hatch, harvest, and advisory call.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {CORE_VALUES.map((val) => {
            const Icon = val.icon;
            return (
              <div
                key={val.title}
                className="ocean-glass rounded-2xl p-6 border border-white/10 hover:border-teal-500/40 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                    <Icon className={`w-5 h-5 ${val.color}`} />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{val.title}</h4>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Founder Message */}
      <section className="relative z-10 py-20 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto border-t border-white/5">
        <div className="ocean-glass rounded-3xl p-8 sm:p-14 border border-teal-500/30 relative overflow-hidden">
          <Quote className="absolute top-6 right-6 w-24 h-24 text-white/5 pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="relative w-36 h-36 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-2 border-teal-400/50 shrink-0 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
                alt="Founder & Managing Director"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-orange-400 font-bold">
                From the Founder&apos;s Desk
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                &ldquo;Aquaculture is not merely about stocking ponds — it is an art of managing microscopic life.&rdquo;
              </h3>
              <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                When we began Sri Kaleeshwari Aqua Farm in 2001, Indian aquaculture was plagued by high seed mortality and heavy antibiotic reliance. We made a binding commitment to build an operation grounded in water biology, SPF genetics, and mutual trust with farmers. Today, seeing over 8,500 farming families prosper on our protocols is our greatest reward.
              </p>
              <div className="pt-2">
                <div className="font-bold text-white text-base">
                  K. Shanmuga Sundaram
                </div>
                <div className="text-xs font-mono text-teal-400">
                  Founder & Managing Director, Sri Kaleeshwari Aqua Farm
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Regulatory Badges */}
      <section className="relative z-10 py-16 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-teal-400 font-bold">
            Regulatory Compliance & Industry Authorizations
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPANY_INFO.certifications.map((cert) => (
            <div
              key={cert.name}
              className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-teal-500/30 transition text-center space-y-2"
            >
              <ShieldCheck className="w-8 h-8 text-teal-400 mx-auto" />
              <div className="font-bold text-white text-sm">{cert.name}</div>
              <div className="text-xs text-slate-400">{cert.agency}</div>
              <div className="text-[11px] font-mono text-orange-400">
                {cert.code}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

