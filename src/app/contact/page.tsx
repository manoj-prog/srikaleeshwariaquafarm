"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import OceanParticles from "@/components/layout/OceanParticles";
import DepthHUD from "@/components/layout/DepthHUD";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import ScrollToTop from "@/components/layout/ScrollToTop";
import DepthBadge from "@/components/ui/DepthBadge";
import { COMPANY_INFO } from "@/data/aquacultureData";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import InstagramIcon from "@/components/ui/InstagramIcon";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    inquiryType: "Flowerhorn Fish Inquiry & Video Selection",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const cleanPhone = COMPANY_INFO.whatsappNumber.replace(/[^0-9]/g, "");

  return (
    <main className="relative min-h-screen bg-[#030f18] text-slate-100 overflow-x-hidden">
      <OceanParticles />
      <DepthHUD />
      <FloatingWhatsApp />
      <ScrollToTop />
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-36 pb-16 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <DepthBadge label="-40 M · SURFACE & REACH OUT" variant="orange" />

        <div className="max-w-4xl mt-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-[1.05]">
            CONNECT WITH OUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-400 to-orange-400">
              BREEDING STUDIO
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-xl text-slate-300 font-light leading-relaxed max-w-2xl">
            Livestock availability, Flowerhorn videos, Neocaridina shrimp colonies, Angelfish pairs, and safe pan-India shipping inquiries start with a message. We reply to all inquiries promptly.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Business Info */}
      <section className="relative z-10 py-6 pb-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7 ocean-glass rounded-3xl p-8 sm:p-12 border border-teal-500/30 shadow-2xl relative">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center mx-auto border border-teal-500/40">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Message Dispatched to Breeding Studio
                </h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-white font-semibold">{formData.name}</span>. Our team will review your inquiry regarding{" "}
                  <span className="text-teal-300 font-semibold">{formData.inquiryType}</span> and get in touch with you shortly.
                </p>

                <div className="pt-6 flex flex-wrap justify-center gap-4">
                  <a
                    href={`https://wa.me/${cleanPhone}?text=Hi,%20I%20just%20sent%20a%20website%20inquiry%20regarding%20${encodeURIComponent(formData.inquiryType)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Instant WhatsApp Message</span>
                  </a>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        location: "",
                        inquiryType: "Flowerhorn Fish Inquiry & Video Selection",
                        message: "",
                      });
                    }}
                    className="bg-white/10 hover:bg-white/15 text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-8">
                  <span className="text-xs font-mono uppercase tracking-widest text-orange-400 font-bold block mb-1">
                    Direct Inquiry Desk
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    Send a Livestock Inquiry
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Fill out the form below for stock availability, video selection, or shipping quotes. Or DM us directly on Instagram.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. S. Ramanathan"
                        className="w-full bg-[#030d14] border border-white/15 focus:border-teal-400 focus:outline-none rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+91 94421 87654"
                        className="w-full bg-[#030d14] border border-white/15 focus:border-teal-400 focus:outline-none rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="name@company.com"
                        className="w-full bg-[#030d14] border border-white/15 focus:border-teal-400 focus:outline-none rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Location / District *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.location}
                        onChange={(e) =>
                          setFormData({ ...formData, location: e.target.value })
                        }
                        placeholder="e.g. Nagapattinam / Chennai"
                        className="w-full bg-[#030d14] border border-white/15 focus:border-teal-400 focus:outline-none rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Inquiry Category *
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) =>
                        setFormData({ ...formData, inquiryType: e.target.value })
                      }
                      className="w-full bg-[#030d14] border border-white/15 focus:border-teal-400 focus:outline-none rounded-xl px-4 py-3 text-sm text-white transition"
                    >
                      <option value="Flowerhorn Fish Inquiry & Video Selection">Flowerhorn Selection (Kamfa / Super Red Dragon)</option>
                      <option value="Neocaridina Shrimps Colony Order">Neocaridina Shrimps (Fire Red, Blue Dream, Golden Yellow)</option>
                      <option value="Angelfish Strains & Breeding Pairs">Angelfish Strains (Platinum White, Marble, Koi)</option>
                      <option value="Platinum Crystal Molly Selection">Platinum Crystal Molly (Sailfin, Lyretail)</option>
                      <option value="Safe Shipping & Packaging Inquiries">Safe Shipping & Transit Protocol Inquiries</option>
                      <option value="General Studio Consultation">General Studio Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Livestock & Tank Details
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Please mention the species or strain, quantity desired, tank setup, or any specific questions..."
                      className="w-full bg-[#030d14] border border-white/15 focus:border-teal-400 focus:outline-none rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 transition"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-400">
                      Response within 4 hours
                    </span>

                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-full shadow-[0_0_20px_rgba(249,115,22,0.4)] flex items-center gap-2 transition disabled:opacity-50"
                    >
                      {loading ? (
                        "Transmitting..."
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Official Inquiry</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Business Details & Action Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href={COMPANY_INFO.socials.instagramDmUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-orange-500/15 border border-orange-500/30 hover:bg-orange-500/25 transition flex flex-col justify-between group"
              >
                <div className="w-9 h-9 rounded-xl bg-orange-500 text-white flex items-center justify-center mb-3 shadow-lg shadow-orange-500/40">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-orange-400 font-bold">
                    Direct DM
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    Instagram
                  </div>
                </div>
              </a>

              <a
                href={`https://wa.me/${cleanPhone}?text=Hello%20Sri%20Kaleeshwari%20Aqua%20Farm,%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-[#25D366]/15 border border-[#25D366]/30 hover:bg-[#25D366]/25 transition flex flex-col justify-between group"
              >
                <div className="w-9 h-9 rounded-xl bg-[#25D366] text-white flex items-center justify-center mb-3 shadow-lg shadow-[#25D366]/40">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#25D366] font-bold">
                    Fastest
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    WhatsApp
                  </div>
                </div>
              </a>

              <a
                href={`tel:${COMPANY_INFO.rawPhone}`}
                className="p-4 rounded-2xl bg-teal-500/15 border border-teal-500/30 hover:bg-teal-500/25 transition flex flex-col justify-between group"
              >
                <div className="w-9 h-9 rounded-xl bg-teal-500 text-white flex items-center justify-center mb-3 shadow-lg shadow-teal-500/40">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-teal-400 font-bold">
                    Direct Call
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    Call Now
                  </div>
                </div>
              </a>
            </div>

            {/* Business Contact Cards */}
            <div className="ocean-glass rounded-3xl p-8 border border-white/10 space-y-6">
              <h4 className="text-xs font-mono uppercase tracking-widest text-orange-400 font-bold">
                Studio Base & Contact
              </h4>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white text-xs uppercase tracking-wider">
                      Physical Address
                    </div>
                    <div className="text-xs text-slate-300 mt-1 leading-relaxed">
                      {COMPANY_INFO.address}
                    </div>
                    <a
                      href={COMPANY_INFO.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-teal-400 hover:text-teal-300 underline mt-1 inline-flex items-center gap-1"
                    >
                      <span>Open Google Maps Location</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white text-xs uppercase tracking-wider">
                      Direct Mobile / Phone
                    </div>
                    <a
                      href={`tel:${COMPANY_INFO.rawPhone}`}
                      className="font-mono text-xs text-teal-300 hover:text-white mt-1 block"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <InstagramIcon className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white text-xs uppercase tracking-wider">
                      Instagram Profile & Direct Message
                    </div>
                    <a
                      href={COMPANY_INFO.socials.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-orange-400 hover:text-orange-300 mt-1 block"
                    >
                      {COMPANY_INFO.socials.instagram}
                    </a>
                    <a
                      href={COMPANY_INFO.socials.instagramDmUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-teal-400 hover:text-teal-300 underline mt-0.5 inline-block"
                    >
                      Send direct message (DM) &rarr;
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white text-xs uppercase tracking-wider">
                      Electronic Mail
                    </div>
                    <div className="font-mono text-xs text-slate-300 mt-1">
                      {COMPANY_INFO.email}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white text-xs uppercase tracking-wider">
                      Operational Hours
                    </div>
                    <div className="text-xs text-slate-300 mt-1">
                      {COMPANY_INFO.workingHours}
                    </div>
                  </div>
                </div>
              </div>

              {/* Certifications preview */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-teal-300">
                  <ShieldCheck className="w-4 h-4" />
                  <span>100% Conditioned Livestock</span>
                </span>
                <span>DOA Guarantee Protocol</span>
              </div>
            </div>

            {/* Dark Styled Interactive Map Box */}
            <div className="ocean-glass rounded-3xl p-6 border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                  Geographic Location
                </span>
                <a
                  href={COMPANY_INFO.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-orange-400 hover:text-orange-300 flex items-center gap-1 transition"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <a
                href={COMPANY_INFO.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative h-44 rounded-2xl overflow-hidden bg-[#020b12] border border-white/10 flex items-center justify-center p-4 text-center group cursor-pointer block hover:border-teal-400/50 transition"
              >
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#005B96_1px,transparent_1px)] [background-size:16px_16px] group-hover:opacity-60 transition" />
                <div className="relative z-10 space-y-1">
                  <div className="w-10 h-10 rounded-full bg-teal-500/20 border border-teal-400 text-teal-300 flex items-center justify-center mx-auto shadow-[0_0_15px_#2dd4bf] group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="font-bold text-white text-xs group-hover:text-teal-300 transition-colors">
                    Sri Kaleeshwari Aqua Farm
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 max-w-xs mx-auto">
                    {COMPANY_INFO.address}
                  </div>
                  <div className="text-[10px] font-mono text-orange-400 pt-1">
                    Click to navigate on Google Maps &rarr;
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

