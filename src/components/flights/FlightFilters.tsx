import { Search, SlidersHorizontal } from "lucide-react";
import type { FlightStatus } from "../../types/flight";

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
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm md:p-5">
      <div className="flex flex-col gap-3 lg:flex-row">
        {/* Search */}
        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search flight number or destination..."
            className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-[#07111F] outline-none transition placeholder:text-slate-400 focus:border-[#C9A86A] focus:bg-white"
          />
        </div>

        {/* Terminal */}
        <select
          value={terminal}
          onChange={(event) => onTerminalChange(event.target.value)}
          className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-[#07111F] outline-none transition focus:border-[#C9A86A] focus:bg-white"
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
          className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-[#07111F] outline-none transition focus:border-[#C9A86A] focus:bg-white"
        >
          <option value="All">All statuses</option>

          {statuses.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <div className="hidden items-center justify-center rounded-2xl border border-slate-200 px-4 text-slate-400 lg:flex">
          <SlidersHorizontal size={18} />
        </div>
      </div>
    </div>
  );
}

export default FlightFilters;