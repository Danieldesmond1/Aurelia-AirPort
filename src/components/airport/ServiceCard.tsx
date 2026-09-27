import {
  ArrowUpRight,
  Clock3,
  MapPin,
  Plane,
} from "lucide-react";
import { Link } from "react-router-dom";

import type { AirportService } from "../../types/service";
import { useTheme } from "../../context/ThemeContext";

interface ServiceCardProps {
  service: AirportService;
}

function ServiceCard({ service }: ServiceCardProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Link
      to={`/services/${service.id}`}
      className={`group relative block overflow-hidden rounded-[28px] border p-6 transition duration-300 hover:-translate-y-1 ${
        isDark
          ? "border-white/10 bg-[#0D1B2A] hover:border-white/20 hover:shadow-2xl hover:shadow-black/20"
          : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50"
      }`}
    >
      {/* Hover glow */}
      <div
        className={`pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#C9A86A]/10 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100`}
      />

      <div className="relative flex items-start justify-between gap-4">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${
            isDark
              ? "bg-white text-[#07111F]"
              : "bg-[#07111F] text-[#C9A86A]"
          }`}
        >
          <Plane size={17} strokeWidth={1.5} />
        </div>

        <span
          className={`rounded-full px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] ${
            isDark
              ? "bg-white/[0.06] text-white/45"
              : "bg-slate-100 text-slate-500"
          }`}
        >
          {service.category}
        </span>
      </div>

      <div className="relative mt-8">
        <h3
          className={`text-xl font-medium tracking-[-0.025em] transition ${
            isDark
              ? "text-white group-hover:text-[#C9A86A]"
              : "text-[#07111F] group-hover:text-[#8E6F32]"
          }`}
        >
          {service.name}
        </h3>

        <p
          className={`mt-3 line-clamp-3 text-sm leading-6 ${
            isDark
              ? "text-white/45"
              : "text-slate-500"
          }`}
        >
          {service.description}
        </p>
      </div>

      <div
        className={`relative mt-7 space-y-3 border-t pt-5 ${
          isDark
            ? "border-white/10"
            : "border-slate-100"
        }`}
      >
        <div
          className={`flex items-center gap-2 text-xs ${
            isDark
              ? "text-white/35"
              : "text-slate-400"
          }`}
        >
          <MapPin size={14} />
          <span className="truncate">
            {service.location}
          </span>
        </div>

        <div
          className={`flex items-center gap-2 text-xs ${
            isDark
              ? "text-white/35"
              : "text-slate-400"
          }`}
        >
          <Clock3 size={14} />
          {service.hours}
        </div>
      </div>

      <div className="relative mt-7 flex items-center justify-between">
        <span
          className={`text-xs font-medium ${
            isDark
              ? "text-white/60"
              : "text-[#07111F]"
          }`}
        >
          {service.terminal}
        </span>

        <div
          className={`flex h-9 w-9 items-center justify-center rounded-full border transition ${
            isDark
              ? "border-white/10 text-white/35 group-hover:border-[#C9A86A] group-hover:text-[#C9A86A]"
              : "border-slate-200 text-slate-400 group-hover:border-[#C9A86A] group-hover:text-[#07111F]"
          }`}
        >
          <ArrowUpRight
            size={15}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </div>
      </div>
    </Link>
  );
}

export default ServiceCard;