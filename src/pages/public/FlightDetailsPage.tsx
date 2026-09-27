import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock3,
  MapPin,
  Plane,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { useTheme } from "../../context/ThemeContext";
import { flightService } from "../../services/flightService";
import type { Flight } from "../../types/flight";

function FlightDetailsPage() {
  const { id } = useParams<{ id: string }>();

  const { theme } = useTheme();

  const [flight, setFlight] = useState<Flight | undefined>();
  const [loading, setLoading] = useState(true);

  const darkMode = theme === "dark";

  useEffect(() => {
    const loadFlight = async () => {
      if (!id) {
        setLoading(false);
        return;
      }

      try {
        const data = await flightService.getFlightById(id);
        setFlight(data);
      } finally {
        setLoading(false);
      }
    };

    loadFlight();
  }, [id]);

  const statusStyles = {
    "On Time":
      "bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-400/20",

    Boarding:
      "bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-500/10 dark:text-blue-300 dark:border-blue-400/20",

    Delayed:
      "bg-amber-50 text-amber-700 border-amber-100 dark:bg-amber-500/10 dark:text-amber-300 dark:border-amber-400/20",

    Departed:
      "bg-slate-100 text-slate-600 border-slate-200 dark:bg-white/5 dark:text-slate-300 dark:border-white/10",

    Landed:
      "bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-400/20",

    Cancelled:
      "bg-red-50 text-red-700 border-red-100 dark:bg-red-500/10 dark:text-red-300 dark:border-red-400/20",
  };

  if (loading) {
    return (
      <main
        className={`flex min-h-screen items-center justify-center transition-colors duration-500 ${
          darkMode ? "bg-[#07111F]" : "bg-[#F7F8FA]"
        }`}
      >
        <div className="text-center">
          <div
            className={`mx-auto h-10 w-10 animate-pulse rounded-full ${
              darkMode ? "bg-white/10" : "bg-slate-200"
            }`}
          />

          <p
            className={`mt-5 text-sm ${
              darkMode ? "text-slate-500" : "text-slate-400"
            }`}
          >
            Loading flight information...
          </p>
        </div>
      </main>
    );
  }

  if (!flight) {
    return (
      <main
        className={`flex min-h-screen items-center justify-center px-5 transition-colors duration-500 ${
          darkMode ? "bg-[#07111F]" : "bg-[#F7F8FA]"
        }`}
      >
        <div className="w-full max-w-md text-center">
          <div
            className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${
              darkMode ? "bg-white/5" : "bg-slate-100"
            }`}
          >
            <Plane
              size={22}
              className={darkMode ? "text-slate-500" : "text-slate-400"}
            />
          </div>

          <h1
            className={`mt-6 text-2xl font-medium ${
              darkMode ? "text-white" : "text-[#07111F]"
            }`}
          >
            Flight not found
          </h1>

          <p
            className={`mt-2 text-sm ${
              darkMode ? "text-slate-500" : "text-slate-500"
            }`}
          >
            We couldn't find the flight you're looking for.
          </p>

          <Link
            to="/flights"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#07111F] px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#0D1B2A] hover:-translate-y-0.5 dark:bg-[#C9A86A] dark:text-[#07111F] dark:hover:bg-[#D7B97F]"
          >
            <ArrowLeft size={16} />
            Back to flights
          </Link>
        </div>
      </main>
    );
  }

  const isDeparture = flight.direction === "departure";

  return (
    <main
      className={`min-h-screen transition-colors duration-500 ${
        darkMode
          ? "bg-[#07111F] text-white"
          : "bg-[#F7F8FA] text-[#07111F]"
      }`}
    >
      {/* Header */}
      <header
        className={`sticky top-0 z-40 border-b backdrop-blur-xl transition-colors duration-500 ${
          darkMode
            ? "border-white/10 bg-[#07111F]/90"
            : "border-slate-200 bg-white/90"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-10">
          <Link
            to="/"
            className="group flex min-w-0 items-center gap-3"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#07111F] shadow-sm transition-transform duration-300 group-hover:scale-105 dark:bg-[#C9A86A]/10">
              <Plane
                size={17}
                strokeWidth={1.5}
                className="text-[#C9A86A]"
              />
            </div>

            <div className="min-w-0">
              <p
                className={`text-[13px] font-semibold tracking-[0.22em] ${
                  darkMode ? "text-white" : "text-[#07111F]"
                }`}
              >
                AURELIA
              </p>

              <p
                className={`truncate text-[7px] tracking-[0.28em] sm:text-[8px] sm:tracking-[0.32em] ${
                  darkMode ? "text-slate-500" : "text-slate-400"
                }`}
              >
                INTERNATIONAL AIRPORT
              </p>
            </div>
          </Link>

          <Link
            to="/flights"
            className={`group flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium transition-all duration-300 sm:px-4 sm:text-sm ${
              darkMode
                ? "text-slate-400 hover:bg-white/5 hover:text-white"
                : "text-slate-500 hover:bg-slate-100 hover:text-[#07111F]"
            }`}
          >
            <ArrowLeft
              size={15}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />

            <span>All flights</span>
          </Link>
        </div>
      </header>

      {/* Main */}
      <section className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 sm:py-12 lg:px-10 lg:py-16">
        {/* Flight heading */}
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9A86A] sm:text-xs">
              Flight {flight.flightNumber}
            </span>

            <span
              className={`rounded-full border px-3 py-1.5 text-[10px] font-semibold sm:text-xs ${
                statusStyles[flight.status]
              }`}
            >
              {flight.status}
            </span>
          </div>

          <h1
            className={`mt-5 max-w-4xl text-4xl font-medium leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl ${
              darkMode ? "text-white" : "text-[#07111F]"
            }`}
          >
            {flight.destination}
          </h1>

          <p
            className={`mt-4 text-sm sm:text-base ${
              darkMode ? "text-slate-500" : "text-slate-500"
            }`}
          >
            {flight.airline} · {flight.aircraft}
          </p>
        </div>

        {/* Route card */}
        <div className="relative mt-8 overflow-hidden rounded-[30px] bg-[#07111F] text-white shadow-[0_25px_70px_rgba(7,17,31,0.18)] sm:mt-10 sm:rounded-[34px]">
          {/* Decorative glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#C9A86A]/10 blur-3xl" />

          <div className="relative px-5 py-8 sm:px-8 sm:py-10 lg:px-14 lg:py-14">
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto_1fr] md:gap-10">
              {/* Origin */}
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 sm:text-xs">
                  {isDeparture ? "Departure" : "Origin"}
                </p>

                <p className="mt-3 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
                  {flight.originCode}
                </p>

                <p className="mt-2 text-sm text-white/50">
                  {flight.origin}
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm text-white/70">
                  <Clock3 size={15} className="text-[#C9A86A]" />
                  <span>{flight.scheduledTime}</span>
                </div>
              </div>

              {/* Flight indicator */}
              <div className="flex flex-row items-center justify-center gap-4 md:flex-col md:gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 sm:h-14 sm:w-14">
                  <Plane
                    size={20}
                    className="text-[#C9A86A]"
                  />
                </div>

                <div className="h-px flex-1 bg-white/10 md:h-px md:w-28 md:flex-none" />

                <ArrowRight
                  size={17}
                  className="text-[#C9A86A]"
                />
              </div>

              {/* Destination */}
              <div className="md:text-right">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 sm:text-xs">
                  {isDeparture ? "Destination" : "Arrival"}
                </p>

                <p className="mt-3 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
                  {flight.destinationCode}
                </p>

                <p className="mt-2 text-sm text-white/50">
                  {flight.destination}
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm text-white/70 md:justify-end">
                  <Clock3 size={15} className="text-[#C9A86A]" />
                  <span>
                    {flight.estimatedTime ||
                      "Estimated time unavailable"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Status strip */}
          <div className="relative border-t border-white/10 px-5 py-5 sm:px-8 lg:px-14">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/35">
                  Current status
                </p>

                <p className="mt-1 text-sm text-white/75">
                  {flight.status}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-white/45 sm:text-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.6)]" />
                Live airport information
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div
          className={`mt-6 rounded-[30px] border p-5 transition-colors duration-500 sm:mt-8 sm:p-8 lg:p-10 ${
            darkMode
              ? "border-white/10 bg-[#0D1B2A]"
              : "border-slate-200 bg-white"
          }`}
        >
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9A86A] sm:text-xs">
              Journey status
            </p>

            <h2
              className={`mt-3 text-2xl font-medium tracking-[-0.03em] sm:text-3xl ${
                darkMode ? "text-white" : "text-[#07111F]"
              }`}
            >
              Flight progress
            </h2>
          </div>

          <div className="mt-9">
            <div className="relative">
              {/* Connecting line */}
              <div
                className={`absolute left-[15px] top-4 h-[calc(100%-32px)] w-px ${
                  darkMode ? "bg-white/10" : "bg-slate-200"
                }`}
              />

              <div className="relative space-y-8">
                {/* Scheduled */}
                <div className="flex gap-5">
                  <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#07111F]">
                    <Check size={14} className="text-[#C9A86A]" />
                  </div>

                  <div className="pt-1">
                    <p
                      className={`text-sm font-semibold ${
                        darkMode ? "text-white" : "text-[#07111F]"
                      }`}
                    >
                      Scheduled
                    </p>

                    <p
                      className={`mt-1 text-sm ${
                        darkMode ? "text-slate-500" : "text-slate-400"
                      }`}
                    >
                      Flight scheduled for {flight.scheduledTime}
                    </p>
                  </div>
                </div>

                {/* Check-in */}
                <div className="flex gap-5">
                  <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#07111F]">
                    <Check size={14} className="text-[#C9A86A]" />
                  </div>

                  <div className="pt-1">
                    <p
                      className={`text-sm font-semibold ${
                        darkMode ? "text-white" : "text-[#07111F]"
                      }`}
                    >
                      Check-in
                    </p>

                    <p
                      className={`mt-1 text-sm ${
                        darkMode ? "text-slate-500" : "text-slate-400"
                      }`}
                    >
                      Check-in available at {flight.terminal}
                    </p>
                  </div>
                </div>

                {/* Boarding */}
                <div className="flex gap-5">
                  <div
                    className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                      flight.status === "Boarding"
                        ? "bg-blue-600"
                        : darkMode
                          ? "bg-white/5"
                          : "bg-slate-100"
                    }`}
                  >
                    <Plane
                      size={14}
                      className={
                        flight.status === "Boarding"
                          ? "text-white"
                          : darkMode
                            ? "text-slate-500"
                            : "text-slate-400"
                      }
                    />
                  </div>

                  <div className="pt-1">
                    <p
                      className={`text-sm font-semibold ${
                        darkMode ? "text-white" : "text-[#07111F]"
                      }`}
                    >
                      Boarding
                    </p>

                    <p
                      className={`mt-1 text-sm ${
                        darkMode ? "text-slate-500" : "text-slate-400"
                      }`}
                    >
                      Gate {flight.gate}
                    </p>
                  </div>
                </div>

                {/* Departure */}
                <div className="flex gap-5">
                  <div
                    className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                      darkMode ? "bg-white/5" : "bg-slate-100"
                    }`}
                  >
                    <Plane
                      size={14}
                      className={
                        darkMode ? "text-slate-500" : "text-slate-400"
                      }
                    />
                  </div>

                  <div className="pt-1">
                    <p
                      className={`text-sm font-semibold ${
                        darkMode ? "text-slate-300" : "text-slate-500"
                      }`}
                    >
                      Departure
                    </p>

                    <p
                      className={`mt-1 text-sm ${
                        darkMode ? "text-slate-500" : "text-slate-400"
                      }`}
                    >
                      Awaiting departure
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Flight details */}
        <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Terminal */}
          <div
            className={`group rounded-[26px] border p-5 transition-all duration-300 hover:-translate-y-1 sm:p-6 ${
              darkMode
                ? "border-white/10 bg-[#0D1B2A] hover:border-[#C9A86A]/30"
                : "border-slate-200 bg-white hover:border-[#C9A86A]/50"
            }`}
          >
            <MapPin size={18} className="text-[#C9A86A]" />

            <p
              className={`mt-6 text-[10px] font-semibold uppercase tracking-[0.16em] ${
                darkMode ? "text-slate-500" : "text-slate-400"
              }`}
            >
              Terminal
            </p>

            <p
              className={`mt-2 text-xl font-medium ${
                darkMode ? "text-white" : "text-[#07111F]"
              }`}
            >
              {flight.terminal}
            </p>
          </div>

          {/* Gate */}
          <div
            className={`group rounded-[26px] border p-5 transition-all duration-300 hover:-translate-y-1 sm:p-6 ${
              darkMode
                ? "border-white/10 bg-[#0D1B2A] hover:border-[#C9A86A]/30"
                : "border-slate-200 bg-white hover:border-[#C9A86A]/50"
            }`}
          >
            <Plane size={18} className="text-[#C9A86A]" />

            <p
              className={`mt-6 text-[10px] font-semibold uppercase tracking-[0.16em] ${
                darkMode ? "text-slate-500" : "text-slate-400"
              }`}
            >
              Gate
            </p>

            <p
              className={`mt-2 text-xl font-medium ${
                darkMode ? "text-white" : "text-[#07111F]"
              }`}
            >
              {flight.gate}
            </p>
          </div>

          {/* Scheduled */}
          <div
            className={`group rounded-[26px] border p-5 transition-all duration-300 hover:-translate-y-1 sm:p-6 ${
              darkMode
                ? "border-white/10 bg-[#0D1B2A] hover:border-[#C9A86A]/30"
                : "border-slate-200 bg-white hover:border-[#C9A86A]/50"
            }`}
          >
            <Clock3 size={18} className="text-[#C9A86A]" />

            <p
              className={`mt-6 text-[10px] font-semibold uppercase tracking-[0.16em] ${
                darkMode ? "text-slate-500" : "text-slate-400"
              }`}
            >
              Scheduled
            </p>

            <p
              className={`mt-2 text-xl font-medium ${
                darkMode ? "text-white" : "text-[#07111F]"
              }`}
            >
              {flight.scheduledTime}
            </p>
          </div>

          {/* Aircraft */}
          <div
            className={`group rounded-[26px] border p-5 transition-all duration-300 hover:-translate-y-1 sm:p-6 ${
              darkMode
                ? "border-white/10 bg-[#0D1B2A] hover:border-[#C9A86A]/30"
                : "border-slate-200 bg-white hover:border-[#C9A86A]/50"
            }`}
          >
            <Plane size={18} className="text-[#C9A86A]" />

            <p
              className={`mt-6 text-[10px] font-semibold uppercase tracking-[0.16em] ${
                darkMode ? "text-slate-500" : "text-slate-400"
              }`}
            >
              Aircraft
            </p>

            <p
              className={`mt-2 text-xl font-medium leading-snug ${
                darkMode ? "text-white" : "text-[#07111F]"
              }`}
            >
              {flight.aircraft}
            </p>
          </div>
        </div>

        {/* Bottom navigation */}
        <div className="mt-8 flex sm:mt-10">
          <Link
            to="/flights"
            className={`group inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
              darkMode
                ? "text-slate-400 hover:bg-white/5 hover:text-white"
                : "text-slate-500 hover:bg-white hover:text-[#07111F]"
            }`}
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />

            All flights
          </Link>
        </div>
      </section>
    </main>
  );
}

export default FlightDetailsPage;