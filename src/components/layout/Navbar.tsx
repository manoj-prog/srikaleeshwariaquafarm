"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Fish, Droplet } from "lucide-react";
import InstagramIcon from "@/components/ui/InstagramIcon";
import ConsultationModal from "@/components/ui/ConsultationModal";
import { COMPANY_INFO } from "@/data/aquacultureData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Facilities", href: "/facilities" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#030f18]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3"
            : "bg-gradient-to-b from-[#030f18]/80 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-[#005B96] via-[#007F7F] to-orange-500 flex items-center justify-center p-[2px] shadow-[0_0_15px_rgba(0,127,127,0.4)] group-hover:shadow-[0_0_20px_rgba(249,115,22,0.6)] transition-all duration-300">
              <div className="w-full h-full bg-[#030f18] rounded-full flex items-center justify-center">
                <Fish className="w-5 h-5 text-teal-300 group-hover:text-orange-400 transition-colors" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-white text-base sm:text-lg leading-none uppercase">
                Sri Kaleeshwari
              </span>
              <span className="text-[10px] font-mono tracking-widest text-teal-400 uppercase mt-0.5 font-semibold">
                Aqua Farm • India
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-white/[0.04] border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? "bg-teal-500/20 text-teal-300 border border-teal-500/40 shadow-[0_0_10px_rgba(45,212,191,0.2)]"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Consultation CTA + Mobile Menu Button */}
          <div className="flex items-center gap-2.5">
            <a
              href={COMPANY_INFO.socials.instagramDmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 border border-orange-500/30 text-orange-400 hover:text-white hover:bg-orange-500/20 px-3.5 py-2 rounded-full text-xs font-mono font-semibold transition"
              title="Direct Message on Instagram"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>DM Us</span>
            </a>

            <button
              onClick={() => setConsultModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_25px_rgba(249,115,22,0.6)] transition-all transform active:scale-95"
            >
              <span>Get Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Out Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#030f18]/98 backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-300">
                <Fish className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-white text-base leading-none">
                  Sri Kaleeshwari
                </div>
                <div className="text-[10px] font-mono text-teal-400 tracking-wider">
                  AQUA FARM
                </div>
              </div>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full bg-white/10 text-slate-300 hover:text-white"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between p-3.5 rounded-xl font-bold uppercase tracking-wider text-sm transition-all ${
                      isActive
                        ? "bg-teal-500/20 text-teal-300 border border-teal-500/30"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className="text-xs font-mono opacity-50">0{idx + 1}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="pt-8 border-t border-white/10 space-y-3">
              <a
                href={COMPANY_INFO.socials.instagramDmUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border border-orange-500/40 bg-orange-500/10 text-orange-300 hover:text-white hover:bg-orange-500/20 font-bold uppercase tracking-wider text-xs py-3 rounded-full flex items-center justify-center gap-2 transition"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>DM on Instagram</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setConsultModalOpen(true);
                }}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase tracking-wider text-xs py-3.5 rounded-full shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2"
              >
                <span>Get Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="text-center text-xs text-slate-400 font-mono">
                Direct Agronomist Line: {COMPANY_INFO.phone}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={consultModalOpen}
        onClose={() => setConsultModalOpen(false)}
      />
    </>
  );
}

