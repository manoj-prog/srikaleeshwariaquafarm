import DepthBadge from "@/components/ui/DepthBadge";
import { KEY_STATISTICS } from "@/data/aquacultureData";

export default function StatsCounter() {
  return (
    <section className="relative z-10 py-20 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto border-t border-white/5">
      <div className="bg-gradient-to-r from-[#005B96]/30 via-[#007F7F]/20 to-[#030f18] border border-teal-500/30 rounded-3xl p-8 sm:p-14 backdrop-blur-md relative overflow-hidden shadow-2xl">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial from-teal-500/10 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 text-center max-w-2xl mx-auto mb-12">
          <DepthBadge label="-28 M · MEASURABLE IMPACT" variant="teal" />
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase text-white mt-3 tracking-tight">
            PROVEN PERFORMANCE AT SCALE
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm mt-2">
            Quarter-century metrics validating India&apos;s leading responsible aquaculture model.
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {KEY_STATISTICS.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center px-4 ${i !== 0 ? "pt-6 sm:pt-0" : ""}`}
            >
              <div className="text-3xl sm:text-5xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-br from-white via-teal-200 to-teal-400">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-white uppercase tracking-wider mt-2">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400 mt-1 font-light">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

