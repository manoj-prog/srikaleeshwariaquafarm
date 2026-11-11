import Link from "next/link";
import { Fish, MapPin, Phone, Mail, Clock, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import InstagramIcon from "@/components/ui/InstagramIcon";
import { COMPANY_INFO, BREEDING_LINES } from "@/data/aquacultureData";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-[#020b12] border-t border-white/10 text-slate-300 pt-16 pb-12 overflow-hidden">
      {/* Background ambient radial gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/10">
          {/* Brand info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-teal-500 to-orange-500 p-[2px] flex items-center justify-center">
                <div className="w-full h-full bg-[#020b12] rounded-full flex items-center justify-center">
                  <Fish className="w-5 h-5 text-teal-300" />
                </div>
              </div>
              <div>
                <span className="font-extrabold text-white text-lg uppercase tracking-tight block">
                  Sri Kaleeshwari
                </span>
                <span className="text-[10px] font-mono tracking-widest text-teal-400 uppercase">
                  AQUA FARM • CHENNAI
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {COMPANY_INFO.studioTitle} based in Chennai, India. Master-bred exotic aquatic lines with superior genetics, raised in conditioned, high-stability parameters.
            </p>

            <div className="pt-2">
              <div className="text-xs font-mono text-orange-400 uppercase tracking-widest mb-2 font-bold">
                Specialized Livestock Standards
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "2+ Years Breeding Focus",
                  "100% Home Water Conditioned",
                  "Pure Oxygen Transit Bagging",
                  "DOA Replacement Guarantee",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-white mb-4">
              Explore Studio
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              {[
                { name: "Home", href: "/" },
                { name: "Flowerhorn", href: "/flowerhorn" },
                { name: "Neocaridina Shrimps", href: "/neocaridina-shrimps" },
                { name: "Angelfish", href: "/angelfish" },
                { name: "Platinum Crystal Molly", href: "/platinum-crystal-molly" },
                { name: "Livestock Gallery", href: "/gallery" },
                { name: "Contact & Location", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-teal-400 transition-colors flex items-center gap-1.5 text-slate-400"
                  >
                    <ArrowRight className="w-3 h-3 text-teal-500/70" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Breeding Lines */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-white mb-4">
              Breeding Lines
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              {BREEDING_LINES.map((line) => (
                <li key={line.id}>
                  <Link
                    href={line.slug}
                    className="hover:text-orange-400 transition-colors text-slate-400 block line-clamp-1"
                  >
                    {line.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-white mb-4">
              Studio Base & Contact
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <a
                    href={COMPANY_INFO.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-teal-300 transition leading-relaxed block"
                  >
                    {COMPANY_INFO.address}
                  </a>
                  <a
                    href={COMPANY_INFO.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] text-teal-400 hover:underline block mt-0.5 font-mono"
                  >
                    Open in Google Maps &rarr;
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.rawPhone}`}
                  className="font-mono text-slate-200 hover:text-teal-300 transition"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="font-mono text-slate-200 hover:text-teal-300 transition break-all"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <InstagramIcon className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <a
                    href={COMPANY_INFO.socials.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-orange-400 hover:text-orange-300 transition block"
                  >
                    {COMPANY_INFO.socials.instagram}
                  </a>
                  <a
                    href={COMPANY_INFO.socials.instagramDmUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] text-teal-400 hover:text-teal-300 underline font-mono block"
                  >
                    Direct Message (DM) &rarr;
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.workingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ambient Easter Egg & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 font-mono">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name} • CHENNAI, INDIA
          </div>

          <div className="text-center text-teal-400/80 hover:text-teal-300 transition-colors cursor-default">
            Move your light — the plankton scatter. Click anywhere to release a breath of bubbles.
          </div>

          <div className="flex items-center gap-4">
            <a
              href={COMPANY_INFO.socials.instagramDmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 transition"
            >
              Instagram DM
            </a>
            <span>•</span>
            <a
              href={COMPANY_INFO.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              Google Maps
            </a>
            <span>•</span>
            <Link href="/sitemap.xml" className="hover:text-white transition">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
