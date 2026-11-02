"use client";

import { MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "@/data/aquacultureData";

export default function FloatingWhatsApp() {
  const cleanPhone = COMPANY_INFO.whatsappNumber.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=Hello%20Sri%20Kaleeshwari%20Aqua%20Farm,%20I%20would%20like%20to%20inquire%20about%20your%20aquaculture%20services%20and%20fingerling/shrimp%20seed.`;

  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 left-6 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all duration-300 transform hover:scale-105 active:scale-95"
        aria-label="Chat with Sri Kaleeshwari Aqua Farm on WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline font-bold text-xs uppercase tracking-wider">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
}

