import { ArrowRight, Clock3, Plane } from "lucide-react";
import type { Flight } from "../../types/flight";

interface FlightBoardProps {
  flights: Flight[];
}

function FlightBoard({ flights }: FlightBoardProps) {
  const statusStyles = {
    "On Time": "text-emerald-600 bg-emerald-50",
    Boarding: "text-blue-600 bg-blue-50",
    Delayed: "text-amber-700 bg-amber-50",
    Departed: "text-slate-500 bg-slate-100",
    Landed: "text-emerald-600 bg-emerald-50",
    Cancelled: "text-red-600 bg-red-50",
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
      <div className="hidden grid-cols-[1.2fr_1fr_1.2fr_100px_100px] gap-4 border-b border-slate-100 px-6 py-4 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400 md:grid">
        <span>Flight</span>
        <span>Route</span>
        <span>Time</span>
        <span>Gate</span>
        <span>Status</span>
      </div>

      {flights.map((flight) => (
        <div
          key={flight.id}
          className="grid gap-5 border-b border-slate-100 px-6 py-6 last:border-b-0 md:grid-cols-[1.2fr_1fr_1.2fr_100px_100px] md:items-center md:gap-4"
        >
          {/* Flight */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#07111F]">
              <Plane size={16} className="text-[#C9A86A]" />
            </div>

            <div>
              <p className="font-semibold text-[#07111F]">
                {flight.flightNumber}
              </p>

              <p className="text-xs text-slate-400">
                {flight.airline}
              </p>
            </div>
          </div>

          {/* Route */}
          <div className="flex items-center gap-3">
            <span className="font-medium text-[#07111F]">
              {flight.originCode}
            </span>

            <ArrowRight size={14} className="text-slate-300" />

            <span className="font-medium text-[#07111F]">
              {flight.destinationCode}
            </span>
          </div>

          {/* Time */}
          <div className="flex items-center gap-2">
            <Clock3 size={15} className="text-slate-400" />

            <div>
              <p className="font-medium text-[#07111F]">
                {flight.scheduledTime}
              </p>

              <p className="text-xs text-slate-400">
                {flight.direction === "arrival"
                  ? "Arrival"
                  : "Departure"}
              </p>
            </div>
          </div>

          {/* Gate */}
          <div>
            <p className="text-xs text-slate-400 md:hidden">Gate</p>
            <p className="font-medium text-[#07111F]">
              {flight.gate}
            </p>
          </div>

          {/* Status */}
          <div>
            <span
              className={`inline-flex rounded-full px-3 py-1.5 text-xs font-medium ${statusStyles[flight.status]}`}
            >
              {flight.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FlightBoard;