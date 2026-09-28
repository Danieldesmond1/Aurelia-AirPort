import {
  ArrowRight,
  CalendarDays,
  Clock3,
  MapPin,
  Plane,
} from "lucide-react";
import { Link } from "react-router-dom";

import type { PassengerTrip } from "../../types/passenger";
import { useTheme } from "../../context/ThemeContext";

interface UpcomingTripCardProps {
  trip: PassengerTrip;
}

function UpcomingTripCard({ trip }: UpcomingTripCardProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className={`overflow-hidden rounded-[28px] border transition-all duration-500 ${
        isDark
          ? "border-white/[0.07] bg-[#0D1B2A]"
          : "border-slate-200 bg-white"
      }`}
    >
      {/* Header */}
      <div
        className={`border-b px-6 py-5 sm:px-7 ${
          isDark ? "border-white/[0.07]" : "border-slate-100"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C9A86A]">
              Upcoming trip
            </p>

            <h2
              className={`mt-1.5 text-xl font-semibold tracking-[-0.025em] ${
                isDark ? "text-white" : "text-[#07111F]"
              }`}
            >
              {trip.destination}
            </h2>
          </div>

          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
              isDark
                ? "bg-[#07111F] text-[#C9A86A]"
                : "bg-slate-50 text-[#07111F]"
            }`}
          >
            <Plane size={18} strokeWidth={1.8} />
          </div>
        </div>
      </div>

      {/* Route */}
      <div className="p-6 sm:p-7">
        <div
          className={`rounded-[22px] p-5 sm:p-6 ${
            isDark ? "bg-[#07111F]" : "bg-slate-50"
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0">
              <p
                className={`text-3xl font-semibold tracking-[-0.04em] sm:text-4xl ${
                  isDark ? "text-white" : "text-[#07111F]"
                }`}
              >
                {trip.originCode}
              </p>

              <p
                className={`mt-1 text-xs ${
                  isDark ? "text-slate-500" : "text-slate-400"
                }`}
              >
                {trip.origin}
              </p>
            </div>

            <div className="flex flex-1 items-center justify-center px-2">
              <div
                className={`h-px flex-1 ${
                  isDark ? "bg-white/[0.10]" : "bg-slate-200"
                }`}
              />

              <div
                className={`mx-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                  isDark
                    ? "bg-[#0D1B2A] text-[#C9A86A]"
                    : "bg-white text-[#07111F]"
                }`}
              >
                <Plane size={14} strokeWidth={1.8} />
              </div>

              <div
                className={`h-px flex-1 ${
                  isDark ? "bg-white/[0.10]" : "bg-slate-200"
                }`}
              />
            </div>

            <div className="min-w-0 text-right">
              <p
                className={`text-3xl font-semibold tracking-[-0.04em] sm:text-4xl ${
                  isDark ? "text-white" : "text-[#07111F]"
                }`}
              >
                {trip.destinationCode}
              </p>

              <p
                className={`mt-1 truncate text-xs ${
                  isDark ? "text-slate-500" : "text-slate-400"
                }`}
              >
                {trip.destination}
              </p>
            </div>
          </div>
        </div>

        {/* Trip details */}
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <div
            className={`rounded-[18px] p-4 ${
              isDark ? "bg-[#07111F]" : "bg-slate-50"
            }`}
          >
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                isDark
                  ? "bg-[#0D1B2A] text-[#C9A86A]"
                  : "bg-white text-[#07111F]"
              }`}
            >
              <CalendarDays size={15} strokeWidth={1.8} />
            </div>

            <p
              className={`mt-3 text-[10px] font-semibold uppercase tracking-[0.14em] ${
                isDark ? "text-slate-600" : "text-slate-400"
              }`}
            >
              Date
            </p>

            <p
              className={`mt-1 text-sm font-semibold ${
                isDark ? "text-white" : "text-[#07111F]"
              }`}
            >
              {trip.departureDate}
            </p>
          </div>

          <div
            className={`rounded-[18px] p-4 ${
              isDark ? "bg-[#07111F]" : "bg-slate-50"
            }`}
          >
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                isDark
                  ? "bg-[#0D1B2A] text-[#C9A86A]"
                  : "bg-white text-[#07111F]"
              }`}
            >
              <Clock3 size={15} strokeWidth={1.8} />
            </div>

            <p
              className={`mt-3 text-[10px] font-semibold uppercase tracking-[0.14em] ${
                isDark ? "text-slate-600" : "text-slate-400"
              }`}
            >
              Departure
            </p>

            <p
              className={`mt-1 text-sm font-semibold ${
                isDark ? "text-white" : "text-[#07111F]"
              }`}
            >
              {trip.departureTime}
            </p>
          </div>

          <div
            className={`rounded-[18px] p-4 ${
              isDark ? "bg-[#07111F]" : "bg-slate-50"
            }`}
          >
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                isDark
                  ? "bg-[#0D1B2A] text-[#C9A86A]"
                  : "bg-white text-[#07111F]"
              }`}
            >
              <MapPin size={15} strokeWidth={1.8} />
            </div>

            <p
              className={`mt-3 text-[10px] font-semibold uppercase tracking-[0.14em] ${
                isDark ? "text-slate-600" : "text-slate-400"
              }`}
            >
              Gate
            </p>

            <p
              className={`mt-1 text-sm font-semibold ${
                isDark ? "text-white" : "text-[#07111F]"
              }`}
            >
              {trip.gate || "TBA"}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p
              className={`text-[10px] font-semibold uppercase tracking-[0.14em] ${
                isDark ? "text-slate-600" : "text-slate-400"
              }`}
            >
              Booking reference
            </p>

            <p
              className={`mt-1 text-sm font-semibold tracking-[0.08em] ${
                isDark ? "text-white" : "text-[#07111F]"
              }`}
            >
              {trip.bookingReference}
            </p>
          </div>

          <Link
            to="/portal/trips"
            className={`group inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold transition-all duration-500 ${
              isDark
                ? "bg-white text-[#07111F] hover:bg-[#C9A86A]"
                : "bg-[#07111F] text-white hover:bg-[#C9A86A] hover:text-[#07111F]"
            }`}
          >
            View trip
            <ArrowRight
              size={14}
              strokeWidth={2}
              className="transition-transform duration-500 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default UpcomingTripCard;