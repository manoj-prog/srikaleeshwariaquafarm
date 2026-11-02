import {
  Award,
  Cpu,
  Leaf,
  Headphones,
  ShieldCheck,
  Truck,
} from "lucide-react";
import DepthBadge from "@/components/ui/DepthBadge";
import { WHY_CHOOSE_US } from "@/data/aquacultureData";

export default function WhyChooseUs() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Award":
        return <Award className="w-6 h-6 text-orange-400" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-teal-300" />;
      case "Leaf":
        return <Leaf className="w-6 h-6 text-emerald-400" />;
      case "Headphones":
        return <Headphones className="w-6 h-6 text-sky-400" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-teal-400" />;
      case "Truck":
        return <Truck className="w-6 h-6 text-amber-400" />;
      default:
        return <Award className="w-6 h-6 text-teal-300" />;
    }
  };

  return (
    <section className="relative z-10 py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto border-t border-white/5">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <DepthBadge label="-20 M · CORE ADVANTAGES" variant="orange" />
        <h2 className="text-xs font-mono uppercase tracking-widest text-orange-400">
          The Sri Kaleeshwari Difference
        </h2>
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight">
          WHY COMMERCIAL FARMERS & EXPORTERS <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-sky-400">
            CHOOSE OUR ECOSYSTEM
          </span>
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed">
          We do not just supply seed and feed; we deliver an accountable biological system engineered to minimize mortality, optimize FCR, and secure guaranteed harvest profits.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {WHY_CHOOSE_US.map((item, idx) => (
          <div
            key={item.title}
            className="ocean-glass ocean-glass-hover rounded-2xl p-8 border border-white/10 hover:border-teal-500/40 relative group transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getIcon(item.icon)}
                </div>
                <span className="text-xs font-mono font-bold text-slate-400">
                  0{idx + 1}
                </span>
              </div>

              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-teal-300 transition-colors">
                {item.title}
              </h4>

              <p className="text-sm text-slate-300 leading-relaxed font-light mb-6">
                {item.desc}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <span className="text-xs font-mono font-bold text-teal-400 bg-teal-500/10 border border-teal-500/20 px-3 py-1 rounded-full">
                {item.metric}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

