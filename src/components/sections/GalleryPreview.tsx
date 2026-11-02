"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Maximize2, MapPin } from "lucide-react";
import DepthBadge from "@/components/ui/DepthBadge";
import Lightbox from "@/components/ui/Lightbox";
import { GALLERY_ITEMS } from "@/data/aquacultureData";

export default function GalleryPreview() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const previewItems = GALLERY_ITEMS.slice(0, 4);

  return (
    <>
      <section className="relative z-10 py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto border-t border-white/5">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <DepthBadge label="-32 M · VISUAL EVIDENCE" variant="teal" />
            <h2 className="text-xs font-mono uppercase tracking-widest text-orange-400 mt-3 mb-2">
              On the Ground
            </h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight">
              INSIDE SRI KALEESHWARI <br />
              <span className="text-teal-400">PONDS & HATCHERIES</span>
            </h3>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-orange-400 hover:text-orange-300 font-bold transition group"
          >
            <span>View All 20+ Facilities & Crops</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="group relative h-80 rounded-2xl overflow-hidden border border-white/10 bg-[#061824] cursor-pointer shadow-xl transition-all duration-300 hover:border-teal-400/50 hover:-translate-y-1"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020b12] via-[#020b12]/40 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

              {/* Tag */}
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-mono text-teal-300 border border-teal-500/30">
                {item.category}
              </div>

              {/* Zoom icon */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Details */}
              <div className="absolute bottom-4 left-4 right-4 space-y-1">
                <h4 className="text-base font-bold text-white group-hover:text-teal-300 transition-colors">
                  {item.title}
                </h4>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-300 font-mono">
                  <MapPin className="w-3 h-3 text-orange-400" />
                  <span className="line-clamp-1">{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        items={previewItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </>
  );
}

