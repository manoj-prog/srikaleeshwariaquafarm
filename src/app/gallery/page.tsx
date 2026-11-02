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
import { GALLERY_ITEMS } from "@/data/aquacultureData";
import { Maximize2, MapPin } from "lucide-react";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    "All",
    "Fish Farming",
    "Shrimp Farming",
    "Facilities",
    "Hatchery",
    "Harvesting",
  ];

  const filteredItems =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <main className="relative min-h-screen bg-[#030f18] text-slate-100 overflow-x-hidden">
      <OceanParticles />
      <DepthHUD />
      <FloatingWhatsApp />
      <ScrollToTop />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-12 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <DepthBadge label="-12 M · VISUAL ARCHIVE" variant="teal" />

        <div className="max-w-4xl mt-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-[1.05]">
            A WINDOW INTO OUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-400 to-orange-400">
              WATERS & OPERATIONS
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-xl text-slate-300 font-light leading-relaxed max-w-2xl">
            Explore authentic photographs of our hatcheries, intensive grow-out water bodies, microbiology diagnostic laboratories, and export harvest dispatches.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition ${
                activeCategory === cat
                  ? "bg-teal-500/20 text-teal-300 border border-teal-500/50 shadow-[0_0_15px_rgba(45,212,191,0.25)]"
                  : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="relative z-10 py-8 pb-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="group relative h-80 rounded-2xl overflow-hidden border border-white/10 bg-[#061824] cursor-pointer shadow-xl transition-all duration-300 hover:border-teal-400/50 hover:-translate-y-1"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020b12] via-[#020b12]/30 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

              {/* Category Pill */}
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-teal-300 border border-teal-500/30">
                {item.category}
              </div>

              {/* Hover Zoom Indicator */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Caption Bar */}
              <div className="absolute bottom-4 left-4 right-4 space-y-1">
                <h3 className="text-base font-bold text-white group-hover:text-teal-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-1 font-light">
                  {item.caption}
                </p>
                <div className="flex items-center gap-1.5 text-[11px] text-orange-400 font-mono pt-1">
                  <MapPin className="w-3 h-3" />
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />

      {/* Lightbox Modal */}
      <Lightbox
        items={filteredItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </main>
  );
}

