import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import OceanParticles from "@/components/layout/OceanParticles";
import DepthHUD from "@/components/layout/DepthHUD";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import ScrollToTop from "@/components/layout/ScrollToTop";

import HeroBanner from "@/components/sections/HeroBanner";
import SpecialtyLines from "@/components/sections/SpecialtyLines";
import PackagingDelivery from "@/components/sections/PackagingDelivery";
import GalleryPreview from "@/components/sections/GalleryPreview";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#030f18] text-slate-100 overflow-x-hidden selection:bg-teal-500 selection:text-white">
      {/* Interactive Plankton & Bubble Canvas */}
      <OceanParticles />

      {/* Dynamic Depth Meter HUD */}
      <DepthHUD />

      {/* Floating Quick Action Elements */}
      <FloatingWhatsApp />
      <ScrollToTop />

      {/* Global Navigation Header */}
      <Navbar />

      {/* Deep Ocean Layered Background with Radial Depth Transitions */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 inset-x-0 h-[1000px] bg-gradient-to-b from-[#062438] via-[#051a29] to-transparent opacity-60" />
        <div className="absolute top-[1400px] inset-x-0 h-[1000px] bg-radial from-[#005B96]/10 to-transparent pointer-events-none" />
        <div className="absolute top-[2600px] inset-x-0 h-[1000px] bg-radial from-[#007F7F]/10 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-[1000px] bg-gradient-to-t from-[#020b12] to-transparent" />
      </div>

      {/* Main Home Sections Focused on 4 Core Breeding Lines & Transport */}
      <div className="relative z-10">
        <HeroBanner />
        <SpecialtyLines />
        <PackagingDelivery />
        <GalleryPreview />
        <TestimonialsSection />
        <ContactCTA />
      </div>

      {/* Global Corporate Footer */}
      <Footer />
    </main>
  );
}
