import { ArrowRight, Clock3, Plane } from "lucide-react";

import type { Flight } from "../../types/flight";

interface FlightBoardProps {
  flights: Flight[];
}

function FlightBoard({ flights }: FlightBoardProps) {
  const statusStyles = {
    "On Time":
      "text-emerald-700 bg-emerald-50 border border-emerald-100 dark:text-emerald-300 dark:bg-emerald-500/10 dark:border-emerald-400/20",

    Boarding:
      "text-blue-700 bg-blue-50 border border-blue-100 dark:text-blue-300 dark:bg-blue-500/10 dark:border-blue-400/20",

    Delayed:
      "text-amber-700 bg-amber-50 border border-amber-100 dark:text-amber-300 dark:bg-amber-500/10 dark:border-amber-400/20",

    Departed:
      "text-slate-600 bg-slate-100 border border-slate-200 dark:text-slate-300 dark:bg-white/5 dark:border-white/10",

    Landed:
      "text-emerald-700 bg-emerald-50 border border-emerald-100 dark:text-emerald-300 dark:bg-emerald-500/10 dark:border-emerald-400/20",

    Cancelled:
      "text-red-700 bg-red-50 border border-red-100 dark:text-red-300 dark:bg-red-500/10 dark:border-red-400/20",
  };

  return (
    <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(7,17,31,0.06)] transition-colors duration-500 dark:border-white/10 dark:bg-[#0D1B2A] dark:shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
      {/* Desktop header */}
      <div className="hidden grid-cols-[1.25fr_1fr_1.15fr_90px_110px] gap-5 border-b border-slate-100 bg-slate-50/60 px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 dark:border-white/5 dark:bg-white/[0.025] dark:text-slate-500 md:grid lg:px-7">
        <span>Flight</span>
        <span>Route</span>
        <span>Time</span>
        <span>Gate</span>
        <span>Status</span>
      </div>

      {/* Flights */}
      {flights.map((flight, index) => (
        <div
          key={flight.id}
          className={`group relative border-b border-slate-100 px-4 py-5 transition-all duration-300 last:border-b-0 hover:bg-slate-50/70 dark:border-white/5 dark:hover:bg-white/[0.03] sm:px-5 md:grid md:grid-cols-[1.25fr_1fr_1.15fr_90px_110px] md:items-center md:gap-5 md:px-6 md:py-6 lg:px-7 ${
            index === 0 ? "bg-white dark:bg-transparent" : ""
          }`}
        >
          {/* Hover accent */}
          <div className="absolute left-0 top-0 h-full w-[3px] bg-transparent transition-colors duration-300 group-hover:bg-[#C9A86A]" />

          {/* Flight */}
          <div className="flex items-center justify-between md:justify-start">
            <div className="flex min-w-0 items-center gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#07111F] shadow-sm transition-transform duration-300 group-hover:scale-105 dark:bg-[#C9A86A]/10">
                <Plane
                  size={17}
                  strokeWidth={1.8}
                  className="text-[#C9A86A]"
                />
              </div>

              <div className="min-w-0">
                <p className="text-[15px] font-semibold tracking-tight text-[#07111F] dark:text-white">
                  {flight.flightNumber}
                </p>

                <p className="mt-0.5 truncate text-xs text-slate-400 dark:text-slate-500">
                  {flight.airline}
                </p>
              </div>
            </div>

            {/* Mobile status */}
            <span
              className={`inline-flex shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold md:hidden ${
                statusStyles[flight.status]
              }`}
            >
              {flight.status}
            </span>
          </div>

          {/* Route */}
          <div className="mt-5 flex items-center justify-between md:mt-0 md:justify-start">
            <div className="flex items-center gap-3">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500 md:hidden">
                  From
                </p>

                <p className="text-sm font-semibold text-[#07111F] dark:text-white">
                  {flight.originCode}
                </p>
              </div>

              <div className="flex items-center gap-1.5">
                <div className="hidden h-px w-5 bg-slate-200 dark:bg-white/10 sm:block" />

                <ArrowRight
                  size={15}
                  strokeWidth={1.8}
                  className="text-slate-300 dark:text-slate-600"
                />

                <div className="hidden h-px w-5 bg-slate-200 dark:bg-white/10 sm:block" />
              </div>

              <div>
                <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500 md:hidden">
                  To
                </p>

                <p className="text-sm font-semibold text-[#07111F] dark:text-white">
                  {flight.destinationCode}
                </p>
              </div>
            </div>

            <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500 md:hidden">
              {flight.direction === "arrival" ? "Arrival" : "Departure"}
            </span>
          </div>

          {/* Time */}
          <div className="mt-4 flex items-center gap-3 md:mt-0">
            <div className="hidden h-9 w-9 items-center justify-center rounded-xl bg-slate-50 dark:bg-white/[0.04] md:flex">
              <Clock3
                size={15}
                strokeWidth={1.8}
                className="text-slate-400 dark:text-slate-500"
              />
            </div>

            <div>
              <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500 md:hidden">
                Scheduled time
              </p>

              <p className="text-sm font-semibold text-[#07111F] dark:text-white">
                {flight.scheduledTime}
              </p>

              <p className="hidden text-xs text-slate-400 dark:text-slate-500 md:block">
                {flight.direction === "arrival" ? "Arrival" : "Departure"}
              </p>
            </div>
          </div>

          {/* Gate */}
          <div className="mt-4 flex items-center justify-between md:mt-0 md:block">
            <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500 md:hidden">
              Gate
            </p>

            <p className="text-sm font-semibold text-[#07111F] dark:text-white">
              {flight.gate}
            </p>
          </div>

          {/* Desktop status */}
          <div className="hidden md:block">
            <span
              className={`inline-flex rounded-full px-3 py-1.5 text-[11px] font-semibold ${
                statusStyles[flight.status]
              }`}
            >
              {flight.status}
            </span>
          </div>
        </div>
      ))}

      {/* Empty state */}
      {flights.length === 0 && (
        <div className="px-6 py-16 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 dark:bg-white/5">
            <Plane size={18} className="text-slate-400 dark:text-slate-500" />
          </div>

          <p className="mt-4 text-sm font-semibold text-[#07111F] dark:text-white">
            No flights found
          </p>

          <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
            Try adjusting your search or filters.
          </p>
        </div>
      )}
    </div>
  );
}

export default FlightBoard;