"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisible, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToSurface = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToSurface}
      className="fixed bottom-6 right-6 z-40 bg-[#071c2b]/90 hover:bg-teal-600 text-teal-300 hover:text-white border border-teal-500/30 p-3 rounded-full backdrop-blur-md shadow-lg shadow-black/50 transition-all duration-300 transform hover:scale-110 active:scale-95 group"
      aria-label="Surface to top"
      title="Surface to Top"
    >
      <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
    </button>
  );
}

