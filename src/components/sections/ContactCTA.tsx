"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Mail, Phone, ArrowUpRight, MapPin } from "lucide-react";
import InstagramIcon from "@/components/ui/InstagramIcon";
import DepthBadge from "@/components/ui/DepthBadge";
import ConsultationModal from "@/components/ui/ConsultationModal";
import { COMPANY_INFO } from "@/data/aquacultureData";

export default function ContactCTA() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative z-10 py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="ocean-glass rounded-3xl p-8 sm:p-14 border border-teal-500/30 relative overflow-hidden shadow-2xl">
          {/* Glowing gradients */}
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-white p-0.5 border border-teal-400/40 shadow-[0_0_12px_rgba(45,212,191,0.4)] flex items-center justify-center overflow-hidden shrink-0">
                <Image
                  src="/logo.png"
                  alt="Sri Kaleeshwari Aqua Farm Logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <DepthBadge label="-40 M · THE HATCHERY & BASE" variant="orange" />
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white mt-4 tracking-tight">
              SURFACE WHEN <br />
              <span className="text-orange-500">YOU&apos;RE READY.</span>
            </h3>

            <p className="text-slate-300 text-sm sm:text-base font-light mt-4 leading-relaxed">
              Livestock availability, pair selection, water parameter consultations, and shipping quotes all start with a message. Send a direct message or email anytime.
            </p>

            {/* Quick Meta Row (Orange Aquaculture layout) */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 pt-8 pb-8 border-y border-white/10 my-8 text-xs font-mono">
              <div>
                <span className="text-slate-400 block uppercase tracking-wider">
                  STUDIO BASE
                </span>
                <span className="text-white font-bold mt-1 block">
                  {COMPANY_INFO.address}
                </span>
                <a
                  href={COMPANY_INFO.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 underline mt-1 inline-flex items-center gap-1 text-[11px]"
                >
                  <MapPin className="w-3 h-3" />
                  <span>Google Maps</span>
                </a>
              </div>
              <div>
                <span className="text-slate-400 block uppercase tracking-wider">
                  DIRECT PHONE
                </span>
                <a
                  href={`tel:${COMPANY_INFO.rawPhone}`}
                  className="text-teal-300 hover:text-teal-200 font-bold mt-1 block"
                >
                  {COMPANY_INFO.phone}
                </a>
                <span className="text-[10px] text-slate-400 mt-1 block">
                  Mon–Sat 8AM–7PM
                </span>
              </div>
              <div>
                <span className="text-slate-400 block uppercase tracking-wider">
                  EMAIL DIRECT
                </span>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-sky-300 hover:text-white font-bold mt-1 block break-all"
                >
                  {COMPANY_INFO.email}
                </a>
                <span className="text-[10px] text-slate-400 mt-1 block">
                  Replies within hours
                </span>
              </div>
              <div>
                <span className="text-slate-400 block uppercase tracking-wider">
                  INSTAGRAM DM
                </span>
                <a
                  href={COMPANY_INFO.socials.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-300 font-bold mt-1 block"
                >
                  {COMPANY_INFO.socials.instagram}
                </a>
                <a
                  href={COMPANY_INFO.socials.instagramDmUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-300 hover:text-white underline mt-1 inline-flex items-center gap-1 text-[11px]"
                >
                  <InstagramIcon className="w-3 h-3" />
                  <span>Open Instagram DM</span>
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={COMPANY_INFO.socials.instagramDmUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full shadow-[0_0_25px_rgba(249,115,22,0.4)] hover:shadow-[0_0_35px_rgba(249,115,22,0.6)] transition-all flex items-center gap-2"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Message on Instagram</span>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 border border-teal-400/40 text-xs font-mono font-bold uppercase tracking-wider px-7 py-4 rounded-full transition flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Email: {COMPANY_INFO.email}</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.rawPhone}`}
                className="bg-white/5 hover:bg-white/10 text-slate-200 border border-white/15 text-xs font-mono font-bold uppercase tracking-wider px-6 py-4 rounded-full transition flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-teal-400" />
                <span>Call Now</span>
              </a>
            </div>

            <p className="text-xs text-slate-400 mt-6 font-light">
              Not on Instagram? Email works just as well — tell us what you&apos;re after and your location, and we&apos;ll reply within a day.
            </p>
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
