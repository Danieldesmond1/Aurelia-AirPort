import {
  ArrowUpRight,
  CircleCheck,
  Clock3,
  Plane,
} from "lucide-react";
import { Link } from "react-router-dom";

import type { PassengerTrip } from "../../types/passenger";
import { useTheme } from "../../context/ThemeContext";

interface FlightStatusCardProps {
  trip: PassengerTrip;
}

function FlightStatusCard({ trip }: FlightStatusCardProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const isOnTime = trip.status !== "Cancelled";

  return (
    <section
      className={`rounded-[24px] border p-6 transition-all duration-500 sm:p-7 ${
        isDark
          ? "border-white/[0.07] bg-[#0D1B2A] text-white"
          : "border-slate-200 bg-white text-[#07111F]"
      }`}
    >
      {/* HEADER */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C9A86A]">
            Flight status
          </p>

          <h2
            className={`mt-1.5 text-xl font-semibold tracking-[-0.025em] ${
              isDark ? "text-white" : "text-[#07111F]"
            }`}
          >
            {trip.flightNumber}
          </h2>
        </div>

        <div
          className={[
            "flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[10px] font-semibold",
            isOnTime
              ? isDark
                ? "bg-emerald-400/10 text-emerald-300"
                : "bg-emerald-50 text-emerald-600"
              : isDark
                ? "bg-red-400/10 text-red-300"
                : "bg-red-50 text-red-500",
          ].join(" ")}
        >
          <CircleCheck size={13} />

          {isOnTime ? "On schedule" : "Cancelled"}
        </div>
      </div>

      {/* ROUTE */}
      <div className="mt-7 flex items-center justify-between">
        <div>
          <p
            className={`text-3xl font-semibold tracking-[-0.04em] sm:text-4xl ${
              isDark ? "text-white" : "text-[#07111F]"
            }`}
          >
            {trip.originCode}
          </p>

          <p
            className={`mt-1 text-[11px] ${
              isDark ? "text-slate-500" : "text-slate-400"
            }`}
          >
            {trip.departureTime}
          </p>
        </div>

        <div className="flex flex-1 items-center justify-center px-3 sm:px-4">
          <div className="flex w-full max-w-[130px] items-center">
            <div
              className={`h-px flex-1 ${
                isDark ? "bg-white/10" : "bg-slate-200"
              }`}
            />

            <div
              className={`mx-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                isDark ? "bg-[#07111F]" : "bg-slate-50"
              }`}
            >
              <Plane
                size={14}
                className="rotate-45 text-[#C9A86A]"
              />
            </div>

            <div
              className={`h-px flex-1 ${
                isDark ? "bg-white/10" : "bg-slate-200"
              }`}
            />
          </div>
        </div>

        <div className="text-right">
          <p
            className={`text-3xl font-semibold tracking-[-0.04em] sm:text-4xl ${
              isDark ? "text-white" : "text-[#07111F]"
            }`}
          >
            {trip.destinationCode}
          </p>

          <p
            className={`mt-1 text-[11px] ${
              isDark ? "text-slate-500" : "text-slate-400"
            }`}
          >
            {trip.arrivalTime}
          </p>
        </div>
      </div>

      {/* STATUS DETAILS */}
      <div className="mt-7 grid grid-cols-2 gap-3">
        <div
          className={`rounded-xl p-3.5 transition-colors duration-300 ${
            isDark ? "bg-[#07111F]" : "bg-slate-50"
          }`}
        >
          <div
            className={`flex items-center gap-2 ${
              isDark ? "text-slate-500" : "text-slate-400"
            }`}
          >
            <Clock3 size={14} />

            <span className="text-[9px] uppercase tracking-[0.12em]">
              Status
            </span>
          </div>

          <p
            className={`mt-2 text-xs font-semibold ${
              isDark ? "text-slate-200" : "text-slate-700"
            }`}
          >
            {trip.status}
          </p>
        </div>

        <div
          className={`rounded-xl p-3.5 transition-colors duration-300 ${
            isDark ? "bg-[#07111F]" : "bg-slate-50"
          }`}
        >
          <div
            className={`flex items-center gap-2 ${
              isDark ? "text-slate-500" : "text-slate-400"
            }`}
          >
            <Plane size={14} />

            <span className="text-[9px] uppercase tracking-[0.12em]">
              Aircraft
            </span>
          </div>

          <p
            className={`mt-2 text-xs font-semibold ${
              isDark ? "text-slate-200" : "text-slate-700"
            }`}
          >
            Aurelia Airways
          </p>
        </div>
      </div>

      {/* FOOTER LINK */}
      <Link
        to="/portal/flights"
        className={`group mt-5 flex items-center justify-between border-t pt-5 text-xs font-semibold transition-colors ${
          isDark
            ? "border-white/[0.07] text-slate-300 hover:text-white"
            : "border-slate-100 text-[#07111F] hover:text-[#C9A86A]"
        }`}
      >
        View flight status

        <ArrowUpRight
          size={15}
          className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </Link>
    </section>
  );
}

export default FlightStatusCard;