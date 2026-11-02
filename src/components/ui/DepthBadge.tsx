interface DepthBadgeProps {
  label: string;
  variant?: "teal" | "orange" | "blue";
  className?: string;
}

export default function DepthBadge({
  label,
  variant = "teal",
  className = "",
}: DepthBadgeProps) {
  const dotColor =
    variant === "orange"
      ? "bg-orange-500 shadow-[0_0_8px_#f97316]"
      : variant === "blue"
      ? "bg-sky-400 shadow-[0_0_8px_#38bdf8]"
      : "bg-teal-400 shadow-[0_0_8px_#2dd4bf]";

  const borderColor =
    variant === "orange"
      ? "border-orange-500/30 text-orange-300"
      : variant === "blue"
      ? "border-sky-500/30 text-sky-200"
      : "border-teal-500/30 text-teal-200";

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono tracking-widest uppercase border bg-[#061824]/80 backdrop-blur-md ${borderColor} ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${dotColor} animate-pulse`} />
      <span>{label}</span>
    </div>
  );
}

