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
import Lightbox from "@/components/ui/Lightbox";
import { FACILITIES_LIST, GALLERY_ITEMS } from "@/data/aquacultureData";
import { CheckCircle2, ShieldCheck, Maximize2, MapPin } from "lucide-react";

export default function FacilitiesPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const facilityGalleryItems = GALLERY_ITEMS.filter(
    (item) => item.category === "Facilities" || item.category === "Hatchery"
  );

  return (
    <main className="relative min-h-screen bg-[#030f18] text-slate-100 overflow-x-hidden">
      <OceanParticles />
      <DepthHUD />
      <FloatingWhatsApp />
      <ScrollToTop />
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-36 pb-16 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <DepthBadge label="-32 M · INFRASTRUCTURE ZONE" variant="teal" />

        <div className="max-w-4xl mt-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-[1.05]">
            WORLD-CLASS BIOSECURE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-400 to-orange-400">
              AQUACULTURE INFRASTRUCTURE
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-xl text-slate-300 font-light leading-relaxed max-w-2xl">
            Tour our SPF maturation cleanrooms, 500-micron HDPE grow-out ponds, closed-loop RAS recirculation stations, and export-compliant chilled harvest terminal.
          </p>
        </div>
      </section>

      {/* Facilities Breakdown Cards */}
      <section className="relative z-10 py-10 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto space-y-16">
        {FACILITIES_LIST.map((facility, idx) => {
          const isReversed = idx % 2 !== 0;

          return (
            <div
              key={facility.id}
              className="ocean-glass rounded-3xl p-8 sm:p-12 border border-white/10 hover:border-teal-500/40 transition-all duration-300"
            >
              <div
                className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-14 ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Visual Image */}
                <div className="w-full lg:w-1/2 relative">
                  <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#061824]">
                    <Image
                      src={facility.image}
                      alt={facility.name}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020b12] via-transparent to-transparent opacity-80" />

                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono text-teal-300 border border-teal-500/30">
                      {facility.depthTag}
                    </div>

                    <div className="absolute bottom-4 left-4 bg-[#030f18]/90 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 text-xs font-mono text-orange-400">
                      {facility.area}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-5">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {facility.name}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                    {facility.description}
                  </p>

                  {/* Specifications Grid */}
                  <div className="grid grid-cols-2 gap-3 border-t border-white/10 pt-4">
                    {facility.specs.map((spec) => (
                      <div
                        key={spec.label}
                        className="p-3 rounded-xl bg-white/5 border border-white/5"
                      >
                        <div className="text-[11px] font-mono text-slate-400 uppercase">
                          {spec.label}
                        </div>
                        <div className="text-sm font-bold text-teal-300 mt-0.5">
                          {spec.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-2 border-t border-white/10 pt-4">
                    <div className="text-xs font-mono uppercase tracking-wider text-orange-400 font-bold">
                      Key Engineering Highlights
                    </div>
                    {facility.features.map((feat, i) => (
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
              </div>
            </div>
          );
        })}
      </section>

      {/* Facility Masonry Gallery Preview with Lightbox */}
      <section className="relative z-10 py-20 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <DepthBadge label="-35 M · ON-SITE ARCHIVE" variant="teal" />
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-white tracking-tight">
            FACILITIES PHOTO ARCHIVE
          </h2>
          <p className="text-sm text-slate-400">
            Click any photograph to view high-resolution laboratory and pond infrastructure details.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilityGalleryItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="group relative h-72 rounded-2xl overflow-hidden border border-white/10 bg-[#061824] cursor-pointer shadow-xl transition-all duration-300 hover:border-teal-400/50 hover:-translate-y-1"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020b12] via-transparent to-transparent opacity-80" />

              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              <div className="absolute bottom-3 left-3 right-3">
                <div className="text-xs font-bold text-white group-hover:text-teal-300 transition-colors">
                  {item.title}
                </div>
                <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                  {item.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />

      <Lightbox
        items={facilityGalleryItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </main>
  );
}

