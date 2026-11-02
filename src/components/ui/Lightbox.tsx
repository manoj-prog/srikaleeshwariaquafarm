"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, MapPin, Maximize2 } from "lucide-react";
import { GalleryItem } from "@/data/aquacultureData";

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({
  items,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        onNavigate((currentIndex - 1 + items.length) % items.length);
      }
      if (e.key === "ArrowRight") {
        onNavigate((currentIndex + 1) % items.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, items.length, onClose, onNavigate]);

  if (currentIndex === null || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-20 text-slate-400 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((currentIndex - 1 + items.length) % items.length);
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition hidden sm:flex items-center justify-center"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((currentIndex + 1) % items.length);
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition hidden sm:flex items-center justify-center"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content Box */}
      <div
        className="relative max-w-5xl w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-2xl overflow-hidden border border-white/10 bg-black/40 shadow-2xl">
          <Image
            src={currentItem.image}
            alt={currentItem.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono text-teal-300 border border-teal-500/30">
            {currentItem.category}
          </div>
        </div>

        {/* Caption */}
        <div className="w-full mt-4 bg-[#061824]/90 border border-white/10 rounded-xl p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-slate-200">
          <div>
            <h3 className="text-lg font-bold text-white">{currentItem.title}</h3>
            <p className="text-xs text-slate-300 mt-0.5">{currentItem.caption}</p>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5 text-teal-400">
              <MapPin className="w-3.5 h-3.5" />
              {currentItem.location}
            </span>
            <span className="border-l border-white/15 pl-4">
              {currentIndex + 1} / {items.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

