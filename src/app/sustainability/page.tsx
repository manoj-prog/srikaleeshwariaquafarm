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
  SUSTAINABILITY_PILLARS,
  COMPANY_INFO,
} from "@/data/aquacultureData";
import {
  Droplets,
  ShieldAlert,
  Sun,
  Recycle,
  Users,
  Trees,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sustainability & Ecological Aquaculture | Sri Kaleeshwari Aqua Farm",
  description:
    "Discover how Sri Kaleeshwari Aqua Farm protects coastal groundwater, runs 100% antibiotic-free biofloc ponds, and harnesses solar power.",
};

export default function SustainabilityPage() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Droplets":
        return <Droplets className="w-6 h-6 text-sky-400" />;
      case "ShieldAlert":
        return <ShieldAlert className="w-6 h-6 text-emerald-400" />;
      case "Sun":
        return <Sun className="w-6 h-6 text-amber-400" />;
      case "Recycle":
        return <Recycle className="w-6 h-6 text-teal-300" />;
      case "Users":
        return <Users className="w-6 h-6 text-orange-400" />;
      case "Trees":
        return <Trees className="w-6 h-6 text-green-400" />;
      default:
        return <Droplets className="w-6 h-6 text-teal-300" />;
    }
  };

  return (
    <main className="relative min-h-screen bg-[#030f18] text-slate-100 overflow-x-hidden">
      <OceanParticles />
      <DepthHUD />
      <FloatingWhatsApp />
      <ScrollToTop />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-16 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <DepthBadge label="-22 M · ECOSYSTEM ZONE" variant="teal" />

        <div className="max-w-4xl mt-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-[1.05]">
            RESPONSIBLE AQUACULTURE FOR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-400 to-emerald-400">
              A THRIVING TOMORROW
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-xl text-slate-300 font-light leading-relaxed max-w-2xl">
            We reject the short-term exploitative aquaculture that depletes coastal aquifers. Our closed-loop biofloc models cycle water indefinitely, eliminate antibiotic runoff, and empower local farming communities.
          </p>
        </div>
      </section>

      {/* Impact Stats Banner */}
      <section className="relative z-10 py-10 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-[#005B96]/40 via-[#007F7F]/30 to-[#030f18] border border-teal-500/30 rounded-3xl p-8 sm:p-12 backdrop-blur-md shadow-2xl grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-3xl sm:text-4xl font-black font-mono text-teal-300">
              72%
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-300 mt-1 font-bold">
              Groundwater Saved
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              Closed-loop RAS recirculation
            </div>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-black font-mono text-emerald-400">
              0%
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-300 mt-1 font-bold">
              Prophylactic Antibiotics
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              Pure biological immunity
            </div>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-black font-mono text-amber-400">
              450 kW
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-300 mt-1 font-bold">
              Clean Solar Power
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              Offsetting 380 MT CO2 annually
            </div>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-black font-mono text-sky-400">
              15,000+
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-300 mt-1 font-bold">
              Mangrove Saplings Planted
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              Coastal buffer rehabilitation
            </div>
          </div>
        </div>
      </section>

      {/* 6 Sustainability Pillars Grid */}
      <section className="relative z-10 py-16 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SUSTAINABILITY_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="ocean-glass rounded-3xl p-8 border border-white/10 hover:border-teal-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {getIcon(pillar.icon)}
                </div>

                <span className="text-[10px] font-mono uppercase tracking-widest text-teal-400 font-bold block mb-1">
                  {pillar.subtitle}
                </span>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-300 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-6">
                  {pillar.description}
                </p>

                <div className="space-y-2 border-t border-white/5 pt-4 mb-6">
                  {pillar.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-xs text-slate-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                  {pillar.metric}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Call to Action */}
      <section className="relative z-10 py-16 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Partner in Sustainable Blue Agriculture
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
            Whether you want to convert existing ponds to biofloc or need certified antibiotic-free shrimp for institutional export, our team is at your service.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-full transition shadow-lg shadow-orange-500/30"
            >
              <span>Connect with Sustainability Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

