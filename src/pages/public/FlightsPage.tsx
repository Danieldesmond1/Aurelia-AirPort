import { ArrowLeft, ArrowRight, Plane } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import FlightFilters from "../../components/flights/FlightFilters";
import { useFlights } from "../../hooks/useFlights";
import { useTheme } from "../../context/ThemeContext";
import type { FlightDirection } from "../../types/flight";

function FlightsPage() {
  const { flights, loading } = useFlights();
  const { theme } = useTheme();

  const [direction, setDirection] =
    useState<FlightDirection>("departure");

  const [search, setSearch] = useState("");
  const [terminal, setTerminal] = useState("All");
  const [status, setStatus] = useState("All");

  const darkMode = theme === "dark";

  const filteredFlights = useMemo(() => {
    return flights.filter((flight) => {
      const matchesDirection = flight.direction === direction;

      const searchValue = search.toLowerCase().trim();

      const matchesSearch =
        !searchValue ||
        flight.flightNumber.toLowerCase().includes(searchValue) ||
        flight.destination.toLowerCase().includes(searchValue) ||
        flight.origin.toLowerCase().includes(searchValue) ||
        flight.destinationCode.toLowerCase().includes(searchValue) ||
        flight.originCode.toLowerCase().includes(searchValue);

      const matchesTerminal =
        terminal === "All" || flight.terminal === terminal;

      const matchesStatus =
        status === "All" || flight.status === status;

      return (
        matchesDirection &&
        matchesSearch &&
        matchesTerminal &&
        matchesStatus
      );
    });
  }, [flights, direction, search, terminal, status]);

  const statusStyles = {
    "On Time":
      "bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-400/20",

    Boarding:
      "bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-500/10 dark:text-blue-300 dark:border-blue-400/20",

    Delayed:
      "bg-amber-50 text-amber-700 border-amber-100 dark:bg-amber-500/10 dark:text-amber-300 dark:border-amber-400/20",

    Cancelled:
      "bg-red-50 text-red-700 border-red-100 dark:bg-red-500/10 dark:text-red-300 dark:border-red-400/20",

    Departed:
      "bg-slate-100 text-slate-600 border-slate-200 dark:bg-white/5 dark:text-slate-300 dark:border-white/10",

    Landed:
      "bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-400/20",
  };

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
            to="/"
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
            <span>Back to airport</span>
          </Link>
        </div>
      </header>

      {/* Page intro */}
      <section
        className={`relative overflow-hidden border-b transition-colors duration-500 ${
          darkMode
            ? "border-white/10 bg-[#07111F]"
            : "border-slate-200 bg-white"
        }`}
      >
        <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#C9A86A]/5 blur-3xl" />

        <div className="relative mx-auto max-w-[1400px] px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-24">
          <div className="max-w-4xl">
            <p className="mb-4 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C9A86A] sm:text-xs">
              <span className="h-px w-7 bg-[#C9A86A]" />
              Flight information · AUR
            </p>

            <h1
              className={`max-w-4xl text-4xl font-medium leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-8xl ${
                darkMode ? "text-white" : "text-[#07111F]"
              }`}
            >
              Every flight.
              <br />
              <span
                className={
                  darkMode ? "text-slate-600" : "text-slate-300"
                }
              >
                One place.
              </span>
            </h1>

            <p
              className={`mt-6 max-w-2xl text-sm leading-6 sm:text-base sm:leading-7 ${
                darkMode ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Track arrivals and departures, check terminal information,
              monitor flight status, and stay informed throughout your
              journey.
            </p>
          </div>
        </div>
      </section>

      {/* Flight content */}
      <section className="mx-auto max-w-[1400px] px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-16">
        {/* Arrivals / Departures */}
        <div className="mb-7 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-center sm:justify-between">
          <div
            className={`flex w-full rounded-2xl border p-1 sm:w-auto ${
              darkMode
                ? "border-white/10 bg-[#0D1B2A]"
                : "border-slate-200 bg-white"
            }`}
          >
            <button
              type="button"
              onClick={() => setDirection("departure")}
              className={`flex-1 rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-300 sm:px-6 sm:py-3 ${
                direction === "departure"
                  ? "bg-[#07111F] text-white shadow-sm dark:bg-[#C9A86A] dark:text-[#07111F]"
                  : darkMode
                    ? "text-slate-500 hover:text-white"
                    : "text-slate-500 hover:text-[#07111F]"
              }`}
            >
              Departures
            </button>

            <button
              type="button"
              onClick={() => setDirection("arrival")}
              className={`flex-1 rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-300 sm:px-6 sm:py-3 ${
                direction === "arrival"
                  ? "bg-[#07111F] text-white shadow-sm dark:bg-[#C9A86A] dark:text-[#07111F]"
                  : darkMode
                    ? "text-slate-500 hover:text-white"
                    : "text-slate-500 hover:text-[#07111F]"
              }`}
            >
              Arrivals
            </button>
          </div>

          <div
            className={`text-xs sm:text-sm ${
              darkMode ? "text-slate-500" : "text-slate-400"
            }`}
          >
            <span
              className={`font-semibold ${
                darkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              {filteredFlights.length}
            </span>{" "}
            flight{filteredFlights.length === 1 ? "" : "s"} found
          </div>
        </div>

        {/* Filters */}
        <FlightFilters
          search={search}
          onSearchChange={setSearch}
          terminal={terminal}
          onTerminalChange={setTerminal}
          status={status}
          onStatusChange={setStatus}
        />

        {/* Results */}
        <div
          className={`mt-6 overflow-hidden rounded-[28px] border shadow-[0_20px_60px_rgba(7,17,31,0.05)] transition-colors duration-500 sm:mt-8 ${
            darkMode
              ? "border-white/10 bg-[#0D1B2A] shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
              : "border-slate-200 bg-white"
          }`}
        >
          {loading ? (
            <div className="px-6 py-20 text-center">
              <div
                className={`mx-auto h-10 w-10 animate-pulse rounded-full ${
                  darkMode ? "bg-white/10" : "bg-slate-100"
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
          ) : filteredFlights.length === 0 ? (
            <div className="px-5 py-20 text-center sm:px-6">
              <div
                className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full ${
                  darkMode ? "bg-white/5" : "bg-slate-100"
                }`}
              >
                <Plane
                  size={20}
                  className={
                    darkMode ? "text-slate-500" : "text-slate-400"
                  }
                />
              </div>

              <h2
                className={`mt-5 text-lg font-semibold ${
                  darkMode ? "text-white" : "text-[#07111F]"
                }`}
              >
                No flights found
              </h2>

              <p
                className={`mt-2 text-sm ${
                  darkMode ? "text-slate-500" : "text-slate-400"
                }`}
              >
                Try adjusting your search or filters.
              </p>
            </div>
          ) : (
            <>
              {/* Desktop headings */}
              <div
                className={`hidden grid-cols-[1.2fr_1.5fr_1fr_100px_120px_40px] gap-4 border-b px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.16em] lg:grid ${
                  darkMode
                    ? "border-white/5 bg-white/[0.025] text-slate-500"
                    : "border-slate-100 bg-slate-50/60 text-slate-400"
                }`}
              >
                <span>Flight</span>
                <span>Route</span>
                <span>Time</span>
                <span>Gate</span>
                <span>Status</span>
                <span />
              </div>

              {filteredFlights.map((flight) => (
                <Link
                  key={flight.id}
                  to={`/flights/${flight.id}`}
                  className={`group relative block border-b px-4 py-5 transition-all duration-300 last:border-b-0 sm:px-5 md:px-6 md:py-6 ${
                    darkMode
                      ? "border-white/5 hover:bg-white/[0.03]"
                      : "border-slate-100 hover:bg-slate-50/70"
                  }`}
                >
                  {/* Hover accent */}
                  <div className="absolute left-0 top-0 h-full w-[3px] bg-transparent transition-colors duration-300 group-hover:bg-[#C9A86A]" />

                  <div className="grid gap-5 lg:grid-cols-[1.2fr_1.5fr_1fr_100px_120px_40px] lg:items-center lg:gap-4">
                    {/* Flight */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex min-w-0 items-center gap-3">
                        <div
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105 ${
                            darkMode
                              ? "bg-[#C9A86A]/10"
                              : "bg-[#07111F]"
                          }`}
                        >
                          <Plane
                            size={15}
                            className="text-[#C9A86A]"
                          />
                        </div>

                        <div className="min-w-0">
                          <p
                            className={`font-semibold ${
                              darkMode ? "text-white" : "text-[#07111F]"
                            }`}
                          >
                            {flight.flightNumber}
                          </p>

                          <p
                            className={`truncate text-xs ${
                              darkMode
                                ? "text-slate-500"
                                : "text-slate-400"
                            }`}
                          >
                            {flight.airline}
                          </p>
                        </div>
                      </div>

                      {/* Mobile status */}
                      <span
                        className={`shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-semibold sm:text-[11px] lg:hidden ${
                          statusStyles[flight.status]
                        }`}
                      >
                        {flight.status}
                      </span>
                    </div>

                    {/* Route */}
                    <div>
                      <p
                        className={`flex items-center gap-3 text-sm font-semibold ${
                          darkMode ? "text-white" : "text-[#07111F]"
                        }`}
                      >
                        {flight.originCode}

                        <ArrowRight
                          size={14}
                          className={
                            darkMode
                              ? "text-slate-600"
                              : "text-slate-300"
                          }
                        />

                        {flight.destinationCode}
                      </p>

                      <p
                        className={`mt-1 truncate text-xs ${
                          darkMode
                            ? "text-slate-500"
                            : "text-slate-400"
                        }`}
                      >
                        {flight.origin} → {flight.destination}
                      </p>
                    </div>

                    {/* Time */}
                    <div>
                      <p
                        className={`text-sm font-semibold ${
                          darkMode ? "text-white" : "text-[#07111F]"
                        }`}
                      >
                        {flight.scheduledTime}
                      </p>

                      <p
                        className={`mt-1 text-xs ${
                          darkMode
                            ? "text-slate-500"
                            : "text-slate-400"
                        }`}
                      >
                        {flight.aircraft}
                      </p>
                    </div>

                    {/* Gate */}
                    <div className="flex items-center justify-between lg:block">
                      <p
                        className={`text-[10px] font-medium uppercase tracking-wider lg:hidden ${
                          darkMode
                            ? "text-slate-600"
                            : "text-slate-400"
                        }`}
                      >
                        Gate
                      </p>

                      <p
                        className={`text-sm font-semibold ${
                          darkMode ? "text-white" : "text-[#07111F]"
                        }`}
                      >
                        {flight.gate}
                      </p>
                    </div>

                    {/* Status */}
                    <div className="hidden lg:block">
                      <span
                        className={`inline-flex rounded-full border px-3 py-1.5 text-[11px] font-semibold ${
                          statusStyles[flight.status]
                        }`}
                      >
                        {flight.status}
                      </span>
                    </div>

                    {/* Arrow */}
                    <div className="hidden justify-end lg:flex">
                      <ArrowRight
                        size={17}
                        className={`transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#C9A86A] ${
                          darkMode
                            ? "text-slate-600"
                            : "text-slate-300"
                        }`}
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </>
          )}
        </div>
      </section>
    </main>
  );
}

export default FlightsPage;