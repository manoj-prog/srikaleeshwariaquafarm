"use client";

import { useState } from "react";
import Image from "next/image";
import { X, CheckCircle, Send, PhoneCall, Mail } from "lucide-react";
import InstagramIcon from "@/components/ui/InstagramIcon";
import { COMPANY_INFO } from "@/data/aquacultureData";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function ConsultationModal({
  isOpen,
  onClose,
  defaultService = "Flowerhorn Selection (Kamfa / Super Red Dragon)",
}: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    interest: defaultService,
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-[#061824] border border-teal-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-teal-950/50 text-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow accent */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 bg-teal-500/20 text-teal-400 rounded-full flex items-center justify-center mx-auto border border-teal-500/40">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-white">Inquiry Received</h3>
            <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-white font-semibold">{formData.name}</span>! Our aquaculture agronomists have received your details. We will contact you at <span className="text-teal-300 font-mono">{formData.phone}</span> within 4 business hours.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={COMPANY_INFO.socials.instagramDmUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold flex items-center justify-center gap-2 transition"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>DM on Instagram</span>
              </a>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber.replace(/[^0-9]/g, "")}?text=Hi,%20I%20just%20submitted%20a%20consultation%20request%20for%20${encodeURIComponent(formData.interest)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold flex items-center justify-center gap-2 transition"
              >
                Chat on WhatsApp Now
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="bg-white/10 hover:bg-white/15 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-12 h-12 rounded-full bg-white p-0.5 border border-teal-400/40 shadow-lg shadow-teal-500/20 flex items-center justify-center overflow-hidden shrink-0">
                <Image
                  src="/logo.png"
                  alt="Sri Kaleeshwari Aqua Farm Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-teal-400 font-bold block">
                  Sri Kaleeshwari Aqua Farm
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                  Livestock Selection & Advisory
                </h2>
                <p className="text-xs text-slate-300 mt-0.5">
                  Select your species, request tank video previews, or ask about parameters and shipping.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. S. Ramanathan"
                    className="w-full bg-[#030d14] border border-white/15 focus:border-teal-400 focus:outline-none rounded-lg px-3.5 py-2 text-sm text-white placeholder-slate-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#030d14] border border-white/15 focus:border-teal-400 focus:outline-none rounded-lg px-3.5 py-2 text-sm text-white placeholder-slate-500 transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full bg-[#030d14] border border-white/15 focus:border-teal-400 focus:outline-none rounded-lg px-3.5 py-2 text-sm text-white placeholder-slate-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Farm Location / District *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Thanjavur / Nellore"
                    className="w-full bg-[#030d14] border border-white/15 focus:border-teal-400 focus:outline-none rounded-lg px-3.5 py-2 text-sm text-white placeholder-slate-500 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Primary Area of Interest
                </label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full bg-[#030d14] border border-white/15 focus:border-teal-400 focus:outline-none rounded-lg px-3.5 py-2 text-sm text-white transition"
                >
                  <option value="Flowerhorn Fish Inquiry & Video Selection">Flowerhorn Selection (Kamfa / Super Red Dragon)</option>
                  <option value="Neocaridina Shrimps Colony Order">Neocaridina Shrimps (Fire Red, Blue Dream, Golden Yellow)</option>
                  <option value="Angelfish Strains & Breeding Pairs">Angelfish Strains (Platinum White, Marble, Koi)</option>
                  <option value="Platinum Crystal Molly Selection">Platinum Crystal Molly (Sailfin, Lyretail)</option>
                  <option value="Safe Shipping & Transit Protocol Inquiries">Safe Shipping & Transit Protocol Inquiries</option>
                  <option value="General Studio Consultation">General Studio Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Livestock & Tank Details
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your tank size, desired strain, parameters, or questions..."
                  className="w-full bg-[#030d14] border border-white/15 focus:border-teal-400 focus:outline-none rounded-lg px-3.5 py-2 text-sm text-white placeholder-slate-500 transition"
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-[11px] text-slate-400">
                  <PhoneCall className="w-3.5 h-3.5 text-teal-400" />
                  <span>Call directly: {COMPANY_INFO.phone}</span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full flex items-center gap-2 transition shadow-[0_0_20px_rgba(249,115,22,0.35)] disabled:opacity-50"
                >
                  {loading ? (
                    "Transmitting..."
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      Submit Request
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

