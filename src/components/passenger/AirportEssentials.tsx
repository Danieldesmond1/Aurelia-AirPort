import {
  Armchair,
  Info,
  Luggage,
  MapPinned,
  ShoppingBag,
  ShieldCheck,
  Utensils,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

interface EssentialItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

const essentials: EssentialItem[] = [
  {
    title: "Security",
    description: "Security checkpoints and fast-track access.",
    icon: ShieldCheck,
  },
  {
    title: "Lounges",
    description: "Relax before your flight in premium spaces.",
    icon: Armchair,
  },
  {
    title: "Dining",
    description: "Restaurants, cafés and quick bites.",
    icon: Utensils,
  },
  {
    title: "Shopping",
    description: "Duty free and airport retail.",
    icon: ShoppingBag,
  },
  {
    title: "Baggage",
    description: "Baggage services and collection areas.",
    icon: Luggage,
  },
  {
    title: "Information",
    description: "Passenger assistance and information desks.",
    icon: Info,
  },
];

interface AirportEssentialsProps {
  terminal: string;
}

function AirportEssentials({
  terminal,
}: AirportEssentialsProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section>
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9A86A]">
            Terminal essentials
          </p>

          <h2
            className={`mt-2 text-2xl font-semibold tracking-[-0.04em] ${
              isDark ? "text-white" : "text-[#07111F]"
            }`}
          >
            Everything around you
          </h2>

          <p
            className={`mt-2 text-sm ${
              isDark ? "text-slate-400" : "text-[#667085]"
            }`}
          >
            Useful services available around {terminal}.
          </p>
        </div>

        <div
          className={`flex items-center gap-2 text-xs font-medium ${
            isDark ? "text-slate-500" : "text-[#667085]"
          }`}
        >
          <MapPinned size={14} />
          {terminal}
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {essentials.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className={`group rounded-2xl border p-5 transition duration-300 hover:-translate-y-0.5 hover:border-[#C9A86A]/30 ${
                isDark
                  ? "border-white/[0.07] bg-[#0D1B2A] hover:shadow-[0_12px_30px_rgba(0,0,0,0.16)]"
                  : "border-slate-200 bg-white hover:shadow-[0_12px_30px_rgba(7,17,31,0.06)]"
              }`}
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl transition ${
                  isDark
                    ? "bg-[#07111F] text-slate-300 group-hover:bg-[#C9A86A]/10 group-hover:text-[#C9A86A]"
                    : "bg-[#F7F8FA] text-[#07111F] group-hover:bg-[#07111F] group-hover:text-[#C9A86A]"
                }`}
              >
                <Icon size={17} />
              </div>

              <h3
                className={`mt-4 text-sm font-semibold ${
                  isDark ? "text-white" : "text-[#07111F]"
                }`}
              >
                {item.title}
              </h3>

              <p
                className={`mt-1.5 text-xs leading-5 ${
                  isDark ? "text-slate-500" : "text-[#667085]"
                }`}
              >
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default AirportEssentials;