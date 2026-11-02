"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import DepthBadge from "@/components/ui/DepthBadge";
import { TESTIMONIALS } from "@/data/aquacultureData";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const t = TESTIMONIALS[current];

  return (
    <section className="relative z-10 py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto border-t border-white/5">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <DepthBadge label="-36 M · TESTIMONIALS" variant="teal" />
        <h2 className="text-xs font-mono uppercase tracking-widest text-orange-400">
          Field Feedback
        </h2>
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight">
          TRUSTED BY OVER 8,500 <br />
          <span className="text-teal-400">FARMERS & HATCHERIES</span>
        </h3>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="ocean-glass rounded-3xl p-8 sm:p-12 border border-white/10 relative shadow-2xl">
          <Quote className="absolute top-6 right-6 w-16 h-16 text-white/5 pointer-events-none" />

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-teal-400 shrink-0 shadow-lg shadow-teal-500/30">
              <Image
                src={t.avatar}
                alt={t.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-4 text-center sm:text-left flex-1">
              {/* Stars */}
              <div className="flex items-center justify-center sm:justify-start gap-1 text-orange-400">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <blockquote className="text-base sm:text-lg text-slate-200 font-light italic leading-relaxed">
                &ldquo;{t.review}&rdquo;
              </blockquote>

              <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="font-bold text-white text-base">{t.name}</div>
                  <div className="text-xs text-slate-400">
                    {t.role} • <span className="text-teal-400">{t.location}</span>
                  </div>
                </div>

                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono bg-orange-500/10 text-orange-400 border border-orange-500/20 self-center sm:self-auto">
                  Crop: {t.crop}
                </div>
              </div>
            </div>
          </div>

          {/* Carousel controls */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-2 rounded-full transition-all ${
                    current === idx
                      ? "w-8 bg-teal-400 shadow-[0_0_8px_#2dd4bf]"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
                }
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() =>
                  setCurrent((prev) => (prev + 1) % TESTIMONIALS.length)
                }
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

