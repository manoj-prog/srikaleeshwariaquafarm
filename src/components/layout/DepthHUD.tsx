"use client";

import { useEffect, useState } from "react";

export default function DepthHUD() {
  const [depth, setDepth] = useState(0);
  const [zone, setZone] = useState("SURFACE LEVEL");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(scrollY / docHeight, 1) : 0;

      // Map progress to 0 to 45 meters depth
      const calculatedDepth = Math.round(progress * 42);
      setDepth(calculatedDepth);

      if (calculatedDepth < 8) {
        setZone("SURFACE ZONE");
      } else if (calculatedDepth < 18) {
        setZone("SUNLIGHT ZONE");
      } else if (calculatedDepth < 28) {
        setZone("REEF SLOPE");
      } else if (calculatedDepth < 36) {
        setZone("TWILIGHT ZONE");
      } else {
        setZone("THE BENTHOS & LABS");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-4 bottom-24 z-30 hidden lg:flex flex-col items-end gap-1 pointer-events-none select-none">
      <div className="flex items-center gap-2.5 bg-[#030e17]/85 border border-teal-500/20 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg shadow-black/40">
        <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse shadow-[0_0_8px_#2dd4bf]" />
        <span className="text-xs font-mono font-bold text-teal-300">
          -{depth} M
        </span>
        <span className="text-[10px] font-mono tracking-wider text-slate-400 border-l border-white/10 pl-2">
          {zone}
        </span>
      </div>
      {/* Subtle depth bar */}
      <div className="w-1.5 h-16 bg-white/5 rounded-full mr-2 overflow-hidden border border-white/10">
        <div
          className="w-full bg-gradient-to-b from-teal-400 via-sky-500 to-orange-500 transition-all duration-150 rounded-full"
          style={{ height: `${Math.min(100, Math.max(5, (depth / 42) * 100))}%` }}
        />
      </div>
    </div>
  );
}

