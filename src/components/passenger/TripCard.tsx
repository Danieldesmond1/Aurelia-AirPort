import {
  ArrowRight,
  CalendarDays,
  Clock3,
  MapPin,
  Ticket,
} from "lucide-react";
import { Link } from "react-router-dom";

import type { PassengerTrip } from "../../types/passenger";
import { useTheme } from "../../context/ThemeContext";
import TripStatusBadge from "./TripStatusBadge";

interface TripCardProps {
  trip: PassengerTrip;
}

function TripCard({ trip }: TripCardProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const formattedDate = new Date(
    `${trip.departureDate}T00:00:00`,
  ).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <Link
      to={`/portal/trips/${trip.id}`}
      className={`group block overflow-hidden rounded-3xl border transition-all duration-300 hover:-translate-y-0.5 ${
        isDark
          ? "border-white/[0.07] bg-[#0D1B2A] hover:border-white/[0.12] hover:shadow-xl hover:shadow-black/20"
          : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-xl hover:shadow-black/[0.04]"
      }`}
    >
      {/* Top */}
      <div
        className={`border-b px-5 py-5 sm:px-7 ${
          isDark ? "border-white/[0.07]" : "border-slate-100"
        }`}
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#07111F] text-[#C9A86A]">
                <Ticket size={17} />
              </div>

              <div>
                <p
                  className={`text-sm font-semibold ${
                    isDark ? "text-white" : "text-[#07111F]"
                  }`}
                >
                  {trip.flightNumber}
                </p>

                <p
                  className={`text-xs ${
                    isDark ? "text-slate-500" : "text-slate-400"
                  }`}
                >
                  {trip.airline}
                </p>
              </div>
            </div>
          </div>

          <TripStatusBadge status={trip.status} />
        </div>
      </div>

      {/* Route */}
      <div className="px-5 py-6 sm:px-7">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
          <div>
            <p
              className={`text-3xl font-semibold tracking-tight ${
                isDark ? "text-white" : "text-[#07111F]"
              }`}
            >
              {trip.originCode}
            </p>

            <p
              className={`mt-1 max-w-[150px] truncate text-xs ${
                isDark ? "text-slate-500" : "text-slate-500"
              }`}
            >
              {trip.origin}
            </p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div
              className={`flex items-center gap-2 ${
                isDark ? "text-slate-700" : "text-slate-300"
              }`}
            >
              <span
                className={`h-px w-8 sm:w-14 ${
                  isDark ? "bg-slate-700" : "bg-slate-200"
                }`}
              />

              <ArrowRight
                size={16}
                className="text-[#C9A86A]"
              />

              <span
                className={`h-px w-8 sm:w-14 ${
                  isDark ? "bg-slate-700" : "bg-slate-200"
                }`}
              />
            </div>

            <span
              className={`text-[10px] font-semibold uppercase tracking-[0.15em] ${
                isDark ? "text-slate-600" : "text-slate-400"
              }`}
            >
              Direct
            </span>
          </div>

          <div className="text-right">
            <p
              className={`text-3xl font-semibold tracking-tight ${
                isDark ? "text-white" : "text-[#07111F]"
              }`}
            >
              {trip.destinationCode}
            </p>

            <p
              className={`mt-1 ml-auto max-w-[150px] truncate text-xs ${
                isDark ? "text-slate-500" : "text-slate-500"
              }`}
            >
              {trip.destination}
            </p>
          </div>
        </div>
      </div>

      {/* Details */}
      <div
        className={`grid grid-cols-2 border-t sm:grid-cols-4 ${
          isDark ? "border-white/[0.07]" : "border-slate-100"
        }`}
      >
        <div
          className={`border-b px-5 py-4 sm:border-b-0 sm:border-r ${
            isDark
              ? "border-white/[0.07] sm:border-white/[0.07]"
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
          className={`border-b px-5 py-4 sm:border-b-0 sm:border-r ${
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
          className={`border-b px-5 py-4 sm:border-b-0 sm:border-r ${
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
            <MapPin size={14} />
            <span className="text-[10px] font-semibold uppercase tracking-wider">
              Terminal
            </span>
          </div>

          <p
            className={`mt-2 text-sm font-semibold ${
              isDark ? "text-white" : "text-[#07111F]"
            }`}
          >
            {trip.terminal}
            {trip.gate ? ` · ${trip.gate}` : ""}
          </p>
        </div>

        <div className="px-5 py-4">
          <p
            className={`text-[10px] font-semibold uppercase tracking-wider ${
              isDark ? "text-slate-500" : "text-slate-400"
            }`}
          >
            Booking
          </p>

          <p
            className={`mt-2 text-sm font-semibold ${
              isDark ? "text-white" : "text-[#07111F]"
            }`}
          >
            {trip.bookingReference}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div
        className={`flex items-center justify-between border-t px-5 py-4 sm:px-7 ${
          isDark ? "border-white/[0.07]" : "border-slate-100"
        }`}
      >
        <div>
          <span
            className={`text-xs ${
              isDark ? "text-slate-500" : "text-slate-400"
            }`}
          >
            Cabin
          </span>

          <span
            className={`ml-2 text-xs font-semibold ${
              isDark ? "text-slate-300" : "text-slate-700"
            }`}
          >
            {trip.cabinClass}
          </span>
        </div>

        <span
          className={`flex items-center gap-2 text-sm font-semibold transition group-hover:text-[#C9A86A] ${
            isDark ? "text-white" : "text-[#07111F]"
          }`}
        >
          View trip

          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}

export default TripCard;