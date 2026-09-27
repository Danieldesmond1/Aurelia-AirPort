import {
  ArrowRight,
  CalendarDays,
  Clock3,
  DoorOpen,
  Plane,
} from "lucide-react";
import { Link } from "react-router-dom";

import type { Flight } from "../../types/flight";
import type { PassengerTrip } from "../../types/passenger";
import { useTheme } from "../../context/ThemeContext";

interface PassengerFlightStatusCardProps {
  trip: PassengerTrip;
  flight?: Flight;
}

function PassengerFlightStatusCard({
  trip,
  flight,
}: PassengerFlightStatusCardProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const status = flight?.status ?? "On Time";

  const statusStyles: Record<Flight["status"], string> = {
    "On Time": isDark
      ? "bg-emerald-500/10 text-emerald-300 border-emerald-400/20"
      : "bg-emerald-50 text-emerald-700 border-emerald-100",

    Boarding: isDark
      ? "bg-amber-500/10 text-amber-300 border-amber-400/20"
      : "bg-amber-50 text-amber-700 border-amber-100",

    Delayed: isDark
      ? "bg-orange-500/10 text-orange-300 border-orange-400/20"
      : "bg-orange-50 text-orange-700 border-orange-100",

    Departed: isDark
      ? "bg-blue-500/10 text-blue-300 border-blue-400/20"
      : "bg-blue-50 text-blue-700 border-blue-100",

    Landed: isDark
      ? "bg-blue-500/10 text-blue-300 border-blue-400/20"
      : "bg-blue-50 text-blue-700 border-blue-100",

    Cancelled: isDark
      ? "bg-red-500/10 text-red-300 border-red-400/20"
      : "bg-red-50 text-red-700 border-red-100",
  };

  const formattedDate = new Date(
    `${trip.departureDate}T00:00:00`,
  ).toLocaleDateString("en-US", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div
      className={`overflow-hidden rounded-3xl border transition-all duration-300 ${
        isDark
          ? "border-white/[0.07] bg-[#0D1B2A] hover:border-white/[0.12]"
          : "border-slate-200 bg-white hover:border-slate-300"
      }`}
    >
      {/* Header */}
      <div
        className={`flex flex-col gap-4 border-b px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7 ${
          isDark
            ? "border-white/[0.07]"
            : "border-slate-100"
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#07111F] text-[#C9A86A]">
            <Plane size={18} />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <p
                className={`text-sm font-bold ${
                  isDark ? "text-white" : "text-[#07111F]"
                }`}
              >
                {trip.flightNumber}
              </p>

              <span
                className={
                  isDark
                    ? "text-slate-700"
                    : "text-slate-300"
                }
              >
                ·
              </span>

              <p
                className={`text-xs ${
                  isDark ? "text-slate-400" : "text-slate-500"
                }`}
              >
                {trip.airline}
              </p>
            </div>

            <p
              className={`mt-1 text-xs ${
                isDark ? "text-slate-500" : "text-slate-400"
              }`}
            >
              Booking {trip.bookingReference}
            </p>
          </div>
        </div>

        <span
          className={`inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold ${statusStyles[status]}`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          {status}
        </span>
      </div>

      {/* Route */}
      <div className="px-5 py-7 sm:px-7">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
          {/* Origin */}
          <div>
            <p
              className={`text-4xl font-semibold tracking-tight ${
                isDark ? "text-white" : "text-[#07111F]"
              }`}
            >
              {trip.originCode}
            </p>

            <p
              className={`mt-1 max-w-[180px] truncate text-xs ${
                isDark ? "text-slate-500" : "text-slate-500"
              }`}
            >
              {trip.origin}
            </p>

            <p
              className={`mt-3 text-xs font-medium uppercase tracking-wider ${
                isDark ? "text-slate-600" : "text-slate-400"
              }`}
            >
              Departure
            </p>

            <p
              className={`mt-1 text-lg font-semibold ${
                isDark ? "text-white" : "text-[#07111F]"
              }`}
            >
              {trip.departureTime}
            </p>
          </div>

          {/* Plane */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2">
              <span
                className={`h-px w-8 sm:w-14 ${
                  isDark ? "bg-slate-700" : "bg-slate-200"
                }`}
              />

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#07111F] text-[#C9A86A]">
                <Plane size={16} />
              </div>

              <span
                className={`h-px w-8 sm:w-14 ${
                  isDark ? "bg-slate-700" : "bg-slate-200"
                }`}
              />
            </div>

            <span
              className={`mt-2 text-[10px] font-semibold uppercase tracking-[0.15em] ${
                isDark ? "text-slate-600" : "text-slate-400"
              }`}
            >
              Direct
            </span>
          </div>

          {/* Destination */}
          <div className="text-right">
            <p
              className={`text-4xl font-semibold tracking-tight ${
                isDark ? "text-white" : "text-[#07111F]"
              }`}
            >
              {trip.destinationCode}
            </p>

            <p
              className={`mt-1 ml-auto max-w-[180px] truncate text-xs ${
                isDark ? "text-slate-500" : "text-slate-500"
              }`}
            >
              {trip.destination}
            </p>

            <p
              className={`mt-3 text-xs font-medium uppercase tracking-wider ${
                isDark ? "text-slate-600" : "text-slate-400"
              }`}
            >
              Arrival
            </p>

            <p
              className={`mt-1 text-lg font-semibold ${
                isDark ? "text-white" : "text-[#07111F]"
              }`}
            >
              {trip.arrivalTime}
            </p>
          </div>
        </div>
      </div>

      {/* Details */}
      <div
        className={`grid border-t sm:grid-cols-4 ${
          isDark
            ? "border-white/[0.07]"
            : "border-slate-100"
        }`}
      >
        <div
          className={`border-b px-5 py-4 sm:border-b-0 sm:border-r sm:px-6 ${
            isDark
              ? "border-white/[0.07]"
              : "border-slate-100"
          }`}
        >
          <div
            className={`flex items-center gap-2 ${
              isDark ? "text-slate-500" : "text-slate-400"
            }`}
          >
            <CalendarDays size={14} />

            <span className="text-[10px] font-semibold uppercase tracking-wider">
              Date
            </span>
          </div>

          <p
            className={`mt-2 text-sm font-semibold ${
              isDark ? "text-white" : "text-[#07111F]"
            }`}
          >
            {formattedDate}
          </p>
        </div>

        <div
          className={`border-b px-5 py-4 sm:border-b-0 sm:border-r sm:px-6 ${
            isDark
              ? "border-white/[0.07]"
              : "border-slate-100"
          }`}
        >
          <div
            className={`flex items-center gap-2 ${
              isDark ? "text-slate-500" : "text-slate-400"
            }`}
          >
            <Clock3 size={14} />

            <span className="text-[10px] font-semibold uppercase tracking-wider">
              Departure
            </span>
          </div>

          <p
            className={`mt-2 text-sm font-semibold ${
              isDark ? "text-white" : "text-[#07111F]"
            }`}
          >
            {trip.departureTime}
          </p>
        </div>

        <div
          className={`border-b px-5 py-4 sm:border-b-0 sm:border-r sm:px-6 ${
            isDark
              ? "border-white/[0.07]"
              : "border-slate-100"
          }`}
        >
          <div
            className={`flex items-center gap-2 ${
              isDark ? "text-slate-500" : "text-slate-400"
            }`}
          >
            <DoorOpen size={14} />

            <span className="text-[10px] font-semibold uppercase tracking-wider">
              Gate
            </span>
          </div>

          <p
            className={`mt-2 text-sm font-semibold ${
              isDark ? "text-white" : "text-[#07111F]"
            }`}
          >
            {flight?.gate ?? trip.gate ?? "Not assigned"}
          </p>
        </div>

        <div className="px-5 py-4 sm:px-6">
          <p
            className={`text-[10px] font-semibold uppercase tracking-wider ${
              isDark ? "text-slate-500" : "text-slate-400"
            }`}
          >
            Terminal
          </p>

          <p
            className={`mt-2 text-sm font-semibold ${
              isDark ? "text-white" : "text-[#07111F]"
            }`}
          >
            {flight?.terminal ?? trip.terminal}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div
        className={`flex flex-col gap-4 border-t px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7 ${
          isDark
            ? "border-white/[0.07] bg-[#07111F]"
            : "border-slate-100 bg-[#FAFAFA]"
        }`}
      >
        <div>
          <p
            className={`text-xs ${
              isDark ? "text-slate-500" : "text-slate-400"
            }`}
          >
            Last updated
          </p>

          <p
            className={`mt-1 text-xs font-semibold ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Just now
          </p>
        </div>

        <Link
          to={`/flights/${trip.flightId}`}
          className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#07111F] px-4 py-3 text-xs font-semibold text-white transition hover:bg-[#0D1B2A]"
        >
          Full flight details

          <ArrowRight
            size={14}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );
}

export default PassengerFlightStatusCard;