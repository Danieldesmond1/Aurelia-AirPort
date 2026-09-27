import { Search, SlidersHorizontal } from "lucide-react";

import type { FlightStatus } from "../../types/flight";
import { useTheme } from "../../context/ThemeContext";

interface FlightFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;

  terminal: string;
  onTerminalChange: (value: string) => void;

  status: string;
  onStatusChange: (value: string) => void;
}

const statuses: FlightStatus[] = [
  "On Time",
  "Boarding",
  "Delayed",
  "Departed",
  "Landed",
  "Cancelled",
];

function FlightFilters({
  search,
  onSearchChange,
  terminal,
  onTerminalChange,
  status,
  onStatusChange,
}: FlightFiltersProps) {
  const { theme } = useTheme();

  const darkMode = theme === "dark";

  return (
    <div
      className={`rounded-[28px] border p-4 shadow-[0_15px_45px_rgba(7,17,31,0.04)] transition-colors duration-500 sm:p-5 ${
        darkMode
          ? "border-white/10 bg-[#0D1B2A] shadow-[0_15px_45px_rgba(0,0,0,0.16)]"
          : "border-slate-200 bg-white"
      }`}
    >
      <div className="flex flex-col gap-3 lg:flex-row">
        {/* Search */}
        <div className="relative min-w-0 flex-1">
          <Search
            size={18}
            strokeWidth={1.8}
            className={`absolute left-4 top-1/2 -translate-y-1/2 ${
              darkMode ? "text-slate-500" : "text-slate-400"
            }`}
          />

          <input
            type="text"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search flight number or destination..."
            className={`h-12 w-full rounded-2xl border pl-11 pr-4 text-sm outline-none transition-all duration-300 placeholder:text-slate-400 ${
              darkMode
                ? "border-white/10 bg-white/[0.035] text-white focus:border-[#C9A86A] focus:bg-white/[0.05] placeholder:text-slate-600"
                : "border-slate-200 bg-slate-50 text-[#07111F] focus:border-[#C9A86A] focus:bg-white"
            }`}
          />
        </div>

        {/* Filters */}
        <div className="grid grid-cols-2 gap-3 lg:flex">
          {/* Terminal */}
          <select
            value={terminal}
            onChange={(event) => onTerminalChange(event.target.value)}
            className={`h-12 min-w-0 rounded-2xl border px-3 text-sm outline-none transition-all duration-300 sm:px-4 lg:min-w-[150px] ${
              darkMode
                ? "border-white/10 bg-white/[0.035] text-white focus:border-[#C9A86A]"
                : "border-slate-200 bg-slate-50 text-[#07111F] focus:border-[#C9A86A] focus:bg-white"
            }`}
          >
            <option value="All">All terminals</option>
            <option value="T1">Terminal 1</option>
            <option value="T2">Terminal 2</option>
            <option value="T3">Terminal 3</option>
          </select>

          {/* Status */}
          <select
            value={status}
            onChange={(event) => onStatusChange(event.target.value)}
            className={`h-12 min-w-0 rounded-2xl border px-3 text-sm outline-none transition-all duration-300 sm:px-4 lg:min-w-[150px] ${
              darkMode
                ? "border-white/10 bg-white/[0.035] text-white focus:border-[#C9A86A]"
                : "border-slate-200 bg-slate-50 text-[#07111F] focus:border-[#C9A86A] focus:bg-white"
            }`}
          >
            <option value="All">All statuses</option>

            {statuses.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Filter icon */}
        <div
          className={`hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl border lg:flex ${
            darkMode
              ? "border-white/10 bg-white/[0.035] text-slate-500"
              : "border-slate-200 bg-slate-50 text-slate-400"
          }`}
        >
          <SlidersHorizontal size={18} strokeWidth={1.8} />
        </div>
      </div>
    </div>
  );
}

export default FlightFilters;