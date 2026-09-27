import {
  ArrowUpRight,
  Car,
  Clock3,
  MapPin,
  Navigation,
  Plane,
  TrainFront,
  Users,
} from "lucide-react";

import { Link } from "react-router-dom";

import type { TransportOption } from "../../types/transport";
import { useTheme } from "../../context/ThemeContext";

interface TransportCardProps {
  option: TransportOption;
}

const typeIcons = {
  "Airport Express": TrainFront,
  Taxi: Car,
  Shuttle: Users,
  "Car Rental": Car,
  "Ride Pickup": Navigation,
};

export default function TransportCard({
  option,
}: TransportCardProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const Icon = typeIcons[option.type];

  return (
    <Link
      to={`/transport/${option.id}`}
      className="group block h-full"
    >
      <article
        className={`relative flex h-full flex-col overflow-hidden rounded-[28px] border p-6 transition-all duration-500 sm:p-7 ${
          isDark
            ? "border-white/10 bg-[#0D1B2A] hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl hover:shadow-black/20"
            : "border-slate-200 bg-white hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_24px_70px_rgba(15,23,42,0.10)]"
        }`}
      >
        {/* Subtle hover glow */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#C9A86A]/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

        {/* Top row */}
        <div className="relative mb-7 flex items-start justify-between gap-4">
          <div
            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-105 ${
              isDark
                ? "bg-white text-[#07111F]"
                : "bg-slate-950 text-white"
            }`}
          >
            <Icon size={24} strokeWidth={1.7} />
          </div>

          <div
            className={`flex items-center gap-2 rounded-full border px-3 py-1.5 ${
              isDark
                ? "border-white/10 bg-white/[0.04]"
                : "border-slate-200 bg-slate-50"
            }`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

            <span
              className={`text-[9px] font-semibold uppercase tracking-[0.16em] sm:text-[10px] ${
                isDark
                  ? "text-white/45"
                  : "text-slate-500"
              }`}
            >
              {option.available24Hours
                ? "24 Hours"
                : option.type}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="relative flex-1">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C9A86A]">
            {option.type}
          </p>

          <h3
            className={`max-w-[300px] text-2xl font-semibold tracking-[-0.03em] transition-colors ${
              isDark
                ? "text-white group-hover:text-[#C9A86A]"
                : "text-slate-950 group-hover:text-[#8E6F32]"
            }`}
          >
            {option.name}
          </h3>

          <p
            className={`mt-3 text-sm leading-6 ${
              isDark
                ? "text-white/40"
                : "text-slate-500"
            }`}
          >
            {option.description}
          </p>
        </div>

        {/* Details */}
        <div
          className={`relative mt-7 space-y-3 border-t pt-6 ${
            isDark
              ? "border-white/10"
              : "border-slate-100"
          }`}
        >
          <div
            className={`flex items-center gap-3 text-sm ${
              isDark
                ? "text-white/50"
                : "text-slate-600"
            }`}
          >
            <MapPin
              size={16}
              className={`shrink-0 ${
                isDark
                  ? "text-white/25"
                  : "text-slate-400"
              }`}
            />

            <span>{option.location}</span>
          </div>

          <div
            className={`flex items-center gap-3 text-sm ${
              isDark
                ? "text-white/50"
                : "text-slate-600"
            }`}
          >
            <Plane
              size={16}
              className={`shrink-0 ${
                isDark
                  ? "text-white/25"
                  : "text-slate-400"
              }`}
            />

            <span>{option.terminal}</span>
          </div>

          <div
            className={`flex items-center gap-3 text-sm ${
              isDark
                ? "text-white/50"
                : "text-slate-600"
            }`}
          >
            <Clock3
              size={16}
              className={`shrink-0 ${
                isDark
                  ? "text-white/25"
                  : "text-slate-400"
              }`}
            />

            <span>{option.operatingHours}</span>
          </div>
        </div>

        {/* Bottom */}
        <div className="relative mt-7 flex items-end justify-between gap-4">
          <div>
            {option.priceFrom && (
              <>
                <p
                  className={`text-[10px] font-semibold uppercase tracking-[0.16em] ${
                    isDark
                      ? "text-white/25"
                      : "text-slate-400"
                  }`}
                >
                  From
                </p>

                <p
                  className={`mt-1 text-lg font-semibold ${
                    isDark
                      ? "text-white"
                      : "text-slate-950"
                  }`}
                >
                  {option.priceFrom}
                </p>
              </>
            )}
          </div>

          <div
            className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 ${
              isDark
                ? "border-white/10 text-white/30 group-hover:border-[#C9A86A] group-hover:bg-[#C9A86A] group-hover:text-[#07111F]"
                : "border-slate-200 text-slate-400 group-hover:border-slate-950 group-hover:bg-slate-950 group-hover:text-white"
            }`}
          >
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </div>
        </div>
      </article>
    </Link>
  );
}