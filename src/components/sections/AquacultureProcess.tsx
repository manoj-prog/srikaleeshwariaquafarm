"use client";

import { useState } from "react";
import { PROCESS_STEPS } from "@/data/aquacultureData";
import DepthBadge from "@/components/ui/DepthBadge";
import { CheckCircle2, Clock, ShieldAlert, ArrowRight } from "lucide-react";

export default function AquacultureProcess() {
  const [selectedStep, setSelectedStep] = useState(0);
  const current = PROCESS_STEPS[selectedStep];

  return (
    <section className="relative z-10 py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto border-t border-white/5">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
        <div>
          <DepthBadge label="-24 M · BIOLOGICAL CYCLE" variant="teal" />
          <h2 className="text-xs font-mono uppercase tracking-widest text-orange-400 mt-3 mb-2">
            Scientific Rigor
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight">
            THE 7-STAGE BIOSECURE <br />
            <span className="text-teal-400">AQUACULTURE LIFECYCLE</span>
          </h3>
        </div>
        <p className="text-slate-400 max-w-md text-sm leading-relaxed">
          From soil pathogen purging to night harvest cold-chain chilling, every stage is mapped to international GAP (Good Aquaculture Practices).
        </p>
      </div>

      {/* Step Tabs Navigation */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 mb-8">
        {PROCESS_STEPS.map((step, idx) => {
          const isSelected = selectedStep === idx;
          return (
            <button
              key={step.step}
              onClick={() => setSelectedStep(idx)}
              className={`p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                isSelected
                  ? "bg-teal-500/20 border-teal-400 shadow-[0_0_20px_rgba(45,212,191,0.25)]"
                  : "bg-white/[0.03] border-white/10 hover:bg-white/[0.08] hover:border-white/20 text-slate-400"
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`text-xs font-mono font-bold ${
                    isSelected ? "text-teal-300" : "text-slate-400"
                  }`}
                >
                  STEP {step.step}
                </span>
                <span
                  className={`w-2 h-2 rounded-full ${
                    isSelected ? "bg-orange-500 animate-pulse" : "bg-white/20"
                  }`}
                />
              </div>
              <div
                className={`text-xs font-semibold mt-2 line-clamp-1 ${
                  isSelected ? "text-white" : "text-slate-300"
                }`}
              >
                {step.name.split("&")[0].trim()}
              </div>
            </button>
          );
        })}
      </div>

      {/* Detail Showcase Card */}
      <div className="ocean-glass rounded-3xl p-8 sm:p-10 border border-teal-500/30 shadow-2xl relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="text-3xl sm:text-4xl font-black font-mono text-teal-400">
                STAGE {current.step}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono text-orange-300 bg-orange-500/10 border border-orange-500/20">
                {current.depth}
              </span>
            </div>

            <h4 className="text-2xl sm:text-3xl font-extrabold text-white">
              {current.name}
            </h4>

            <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-light">
              {current.summary}
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-3 text-xs font-mono text-slate-300 border-t border-white/10">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal-400" />
                <span>Protocol Duration: <strong className="text-white">{current.duration}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-400" />
                <span>Critical Benchmark: <strong className="text-white">{current.keyFactor}</strong></span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
            <button
              onClick={() =>
                setSelectedStep((selectedStep + 1) % PROCESS_STEPS.length)
              }
              className="bg-teal-500/20 hover:bg-teal-500/30 border border-teal-400/40 text-teal-300 px-6 py-3 rounded-full text-xs font-mono font-bold tracking-wider flex items-center justify-center gap-2 transition"
            >
              <span>Next Stage ({PROCESS_STEPS[(selectedStep + 1) % PROCESS_STEPS.length].step})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

