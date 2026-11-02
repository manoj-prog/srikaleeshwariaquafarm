import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Award } from "lucide-react";
import DepthBadge from "@/components/ui/DepthBadge";
import { COMPANY_INFO } from "@/data/aquacultureData";

export default function AboutPreview() {
  return (
    <section className="relative z-10 py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto border-t border-white/5">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left Column: Image with Glass Overlay */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative h-[380px] sm:h-[480px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#061824]">
            <Image
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80"
              alt="Sri Kaleeshwari Aquaculture Ponds"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030f18] via-transparent to-transparent opacity-80" />

            {/* Floating Glass Pill */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#030f18]/85 border border-white/15 backdrop-blur-md">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono text-teal-400 uppercase tracking-wider">
                    Biofloc & RAS Pioneers
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    Zero-Antibiotic Certified Quality
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center border border-teal-500/40">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* Experience Badge */}
          <div className="absolute -top-4 -right-4 bg-orange-500 text-white p-4 rounded-2xl shadow-xl shadow-orange-500/30 border border-white/20 hidden sm:block">
            <div className="text-2xl font-black font-mono leading-none">25+</div>
            <div className="text-[10px] uppercase tracking-wider font-bold mt-1">
              Years in India
            </div>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <DepthBadge label="-6 M · SUNLIGHT ZONE" variant="teal" />

          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-orange-400 mb-2">
              Our Heritage & Vision
            </h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight">
              AQUACULTURE ENGINEERED FOR <br />
              <span className="text-teal-400">Generations Ahead</span>
            </h3>
          </div>

          <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-light">
            Founded in 2001 on the Tamil Nadu coast, Sri Kaleeshwari Aqua Farm was established to answer a fundamental challenge: How can India cultivate world-class seafood biomass while replenishing coastal aquatic ecosystems?
          </p>

          <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-light">
            Today, across 1,200+ managed acres, we combine microbiological biofloc balances, SPF genetic seed selection, and closed-loop recirculation to deliver exceptional yield to farmers with zero toxic chemical inputs.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {[
              "100% Probiotic Immune Water Ecology",
              "Govt of India CAA Approved & MPEDA Registered",
              "In-House Microalgae & Live Copepod Feeds",
              "24/7 Rapid Diagnostics Laboratory",
            ].map((point) => (
              <div key={point} className="flex items-center gap-2.5 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{point}</span>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <Link
              href="/about"
              className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-orange-400 hover:text-orange-300 transition group"
            >
              <span>Explore Our Story, Vision & Infrastructure</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

