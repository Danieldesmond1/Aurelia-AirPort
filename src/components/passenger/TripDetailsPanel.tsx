import {
  Armchair,
  BaggageClaim,
  CalendarDays,
  Clock3,
  DoorOpen,
  MapPin,
  Plane,
  ShieldCheck,
} from "lucide-react";

import type { PassengerTrip } from "../../types/passenger";
import { useTheme } from "../../context/ThemeContext";

interface TripDetailsPanelProps {
  trip: PassengerTrip;
}

function TripDetailsPanel({
  trip,
}: TripDetailsPanelProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const details = [
    {
      label: "Departure",
      value: trip.departureTime,
      icon: Clock3,
    },
    {
      label: "Date",
      value: new Date(
        `${trip.departureDate}T00:00:00`,
      ).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
      icon: CalendarDays,
    },
    {
      label: "Terminal",
      value: trip.terminal,
      icon: MapPin,
    },
    {
      label: "Gate",
      value: trip.gate ?? "Not assigned",
      icon: DoorOpen,
    },
    {
      label: "Seat",
      value: trip.seat ?? "Not assigned",
      icon: Armchair,
    },
    {
      label: "Cabin",
      value: trip.cabinClass,
      icon: Plane,
    },
  ];

  return (
    <div className="space-y-5">
      {/* Flight details */}
      <section
        className={`rounded-3xl border p-5 transition-colors duration-500 sm:p-7 ${
          isDark
            ? "border-white/[0.07] bg-[#0D1B2A]"
            : "border-slate-200 bg-white"
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#07111F] text-[#C9A86A]">
            <Plane size={17} />
          </div>

          <div>
            <h2
              className={`text-base font-semibold ${
                isDark ? "text-white" : "text-[#07111F]"
              }`}
            >
              Flight details
            </h2>

            <p
              className={`text-xs ${
                isDark ? "text-slate-500" : "text-slate-400"
              }`}
            >
              Everything you need for your flight
            </p>
          </div>
        </div>

        <div className="mt-7 grid grid-cols-2 gap-x-5 gap-y-6 sm:grid-cols-3">
          {details.map((detail) => {
            const Icon = detail.icon;

            return (
              <div key={detail.label}>
                <div
                  className={`flex items-center gap-2 ${
                    isDark ? "text-slate-500" : "text-slate-400"
                  }`}
                >
                  <Icon size={14} />

                  <span className="text-[10px] font-semibold uppercase tracking-wider">
                    {detail.label}
                  </span>
                </div>

                <p
                  className={`mt-2 text-sm font-semibold ${
                    isDark ? "text-white" : "text-[#07111F]"
                  }`}
                >
                  {detail.value}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Baggage */}
      <section
        className={`rounded-3xl border p-5 transition-colors duration-500 sm:p-7 ${
          isDark
            ? "border-white/[0.07] bg-[#0D1B2A]"
            : "border-slate-200 bg-white"
        }`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-xl ${
              isDark
                ? "bg-[#07111F] text-[#C9A86A]"
                : "bg-[#F7F8FA] text-[#07111F]"
            }`}
          >
            <BaggageClaim size={18} />
          </div>

          <div>
            <h2
              className={`text-base font-semibold ${
                isDark ? "text-white" : "text-[#07111F]"
              }`}
            >
              Baggage
            </h2>

            <p
              className={`text-xs ${
                isDark ? "text-slate-500" : "text-slate-400"
              }`}
            >
              Your checked baggage allowance
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div
            className={`rounded-2xl p-5 ${
              isDark ? "bg-[#07111F]" : "bg-[#F7F8FA]"
            }`}
          >
            <p
              className={`text-xs ${
                isDark ? "text-slate-500" : "text-slate-400"
              }`}
            >
              Allowance
            </p>

            <p
              className={`mt-2 text-lg font-semibold ${
                isDark ? "text-white" : "text-[#07111F]"
              }`}
            >
              {trip.baggageAllowance ?? "Not specified"}
            </p>
          </div>

          <div
            className={`rounded-2xl p-5 ${
              isDark ? "bg-[#07111F]" : "bg-[#F7F8FA]"
            }`}
          >
            <p
              className={`text-xs ${
                isDark ? "text-slate-500" : "text-slate-400"
              }`}
            >
              Checked bags
            </p>

            <p
              className={`mt-2 text-lg font-semibold ${
                isDark ? "text-white" : "text-[#07111F]"
              }`}
            >
              {trip.checkedBags ?? 0}
            </p>
          </div>
        </div>
      </section>

      {/* Booking security */}
      <section
        className={`flex gap-4 rounded-3xl border p-5 transition-colors duration-500 sm:p-6 ${
          isDark
            ? "border-emerald-400/15 bg-emerald-500/[0.06]"
            : "border-emerald-100 bg-emerald-50/60"
        }`}
      >
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-sm ${
            isDark
              ? "bg-[#0D1B2A] text-emerald-400"
              : "bg-white text-emerald-600"
          }`}
        >
          <ShieldCheck size={18} />
        </div>

        <div>
          <p
            className={`text-sm font-semibold ${
              isDark ? "text-emerald-300" : "text-emerald-900"
            }`}
          >
            Booking confirmed
          </p>

          <p
            className={`mt-1 text-xs leading-5 ${
              isDark ? "text-emerald-400/80" : "text-emerald-700"
            }`}
          >
            Your reservation is confirmed. Keep your
            booking reference available when checking in
            or contacting Aurelia support.
          </p>
        </div>
      </section>
    </div>
  );
}

export default TripDetailsPanel;