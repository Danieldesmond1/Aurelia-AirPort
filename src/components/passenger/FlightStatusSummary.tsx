import {
  Bell,
  Clock3,
  MapPin,
  Radio,
} from "lucide-react";

import type { Flight } from "../../types/flight";
import { useTheme } from "../../context/ThemeContext";

interface FlightStatusSummaryProps {
  flights: Flight[];
}

function FlightStatusSummary({
  flights,
}: FlightStatusSummaryProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const onTime = flights.filter(
    (flight) => flight.status === "On Time",
  ).length;

  const boarding = flights.filter(
    (flight) => flight.status === "Boarding",
  ).length;

  const delayed = flights.filter(
    (flight) => flight.status === "Delayed",
  ).length;

  const cards = [
    {
      label: "Overall",
      value: onTime,
      description: "flights on time",
      icon: Clock3,
      iconStyle: isDark
        ? "bg-emerald-500/10 text-emerald-400"
        : "bg-emerald-50 text-emerald-600",
    },
    {
      label: "Active",
      value: boarding,
      description: "currently boarding",
      icon: Radio,
      iconStyle: isDark
        ? "bg-amber-500/10 text-amber-400"
        : "bg-amber-50 text-amber-600",
    },
    {
      label: "Attention",
      value: delayed,
      description: "delayed flights",
      icon: Bell,
      iconStyle: isDark
        ? "bg-orange-500/10 text-orange-400"
        : "bg-orange-50 text-orange-600",
    },
    {
      label: "Airport",
      value: "AUR",
      description: "Aurelia International",
      icon: MapPin,
      iconStyle: isDark
        ? "bg-blue-500/10 text-blue-400"
        : "bg-blue-50 text-blue-600",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.label}
            className={`rounded-2xl border p-5 transition-all duration-300 ${
              isDark
                ? "border-white/[0.07] bg-[#0D1B2A] hover:border-white/[0.12]"
                : "border-slate-200 bg-white hover:border-slate-300"
            }`}
          >
            <div className="flex items-center justify-between">
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-xl ${card.iconStyle}`}
              >
                <Icon size={16} />
              </div>

              <span
                className={`text-[10px] font-semibold uppercase tracking-wider ${
                  isDark ? "text-slate-600" : "text-slate-400"
                }`}
              >
                {card.label}
              </span>
            </div>

            <p
              className={`mt-5 text-2xl font-semibold ${
                isDark ? "text-white" : "text-[#07111F]"
              }`}
            >
              {card.value}
            </p>

            <p
              className={`mt-1 text-xs ${
                isDark ? "text-slate-500" : "text-slate-500"
              }`}
            >
              {card.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default FlightStatusSummary;