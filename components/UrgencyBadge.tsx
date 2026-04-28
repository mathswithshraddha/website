import { CalendarDays } from "lucide-react";

interface UrgencyBadgeProps {
  tone?: "light" | "dark";
  text?: string;
  className?: string;
}

export default function UrgencyBadge({
  tone = "light",
  text = "Next Batch Starting June 2026",
  className = "",
}: UrgencyBadgeProps) {
  const toneClasses =
    tone === "dark"
      ? "bg-white/10 text-white border-white/20"
      : "bg-accent/10 text-primary border-accent/20";

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold tracking-tight ${toneClasses} ${className}`}
    >
      <CalendarDays className="h-4 w-4 text-accent" />
      <span>{text}</span>
    </div>
  );
}
