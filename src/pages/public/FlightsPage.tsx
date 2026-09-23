import { ArrowLeft, ArrowRight, Plane } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import FlightFilters from "../../components/flights/FlightFilters";
import { useFlights } from "../../hooks/useFlights";
import type { FlightDirection } from "../../types/flight";

function FlightsPage() {
  const { flights, loading } = useFlights();

  const [direction, setDirection] =
    useState<FlightDirection>("departure");

  const [search, setSearch] = useState("");
  const [terminal, setTerminal] = useState("All");
  const [status, setStatus] = useState("All");

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

  return (
    <main className="min-h-screen bg-[#F7F8FA] text-[#07111F]">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-10">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#07111F]">
              <Plane
                size={17}
                strokeWidth={1.5}
                className="text-[#C9A86A]"
              />
            </div>

            <div>
              <p className="text-[14px] font-semibold tracking-[0.22em]">
                AURELIA
              </p>
              <p className="text-[8px] tracking-[0.32em] text-slate-400">
                INTERNATIONAL AIRPORT
              </p>
            </div>
          </Link>

          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-[#07111F]"
          >
            <ArrowLeft size={16} />
            Back to airport
          </Link>
        </div>
      </header>

      {/* Page intro */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-20">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-[#C9A86A]">
            Flight information · AUR
          </p>

          <h1 className="max-w-3xl text-5xl font-medium tracking-[-0.045em] lg:text-7xl">
            Every flight.
            <br />
            <span className="text-slate-400">One place.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-500">
            Track arrivals and departures, check terminal information,
            monitor flight status, and stay informed throughout your
            journey.
          </p>
        </div>
      </section>

      {/* Flight content */}
      <section className="mx-auto max-w-[1400px] px-6 py-12 lg:px-10 lg:py-16">
        {/* Arrivals / Departures */}
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div className="flex rounded-2xl border border-slate-200 bg-white p-1.5">
            <button
              onClick={() => setDirection("departure")}
              className={`rounded-xl px-6 py-3 text-sm font-medium transition ${
                direction === "departure"
                  ? "bg-[#07111F] text-white"
                  : "text-slate-500 hover:text-[#07111F]"
              }`}
            >
              Departures
            </button>

            <button
              onClick={() => setDirection("arrival")}
              className={`rounded-xl px-6 py-3 text-sm font-medium transition ${
                direction === "arrival"
                  ? "bg-[#07111F] text-white"
                  : "text-slate-500 hover:text-[#07111F]"
              }`}
            >
              Arrivals
            </button>
          </div>

          <div className="text-sm text-slate-400">
            {filteredFlights.length} flight
            {filteredFlights.length === 1 ? "" : "s"} found
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
        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white">
          {loading ? (
            <div className="px-6 py-20 text-center text-sm text-slate-400">
              Loading flight information...
            </div>
          ) : filteredFlights.length === 0 ? (
            <div className="px-6 py-20 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
                <Plane size={20} className="text-slate-400" />
              </div>

              <h2 className="mt-5 text-lg font-medium">
                No flights found
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                Try adjusting your search or filters.
              </p>
            </div>
          ) : (
            <>
              {/* Desktop headings */}
              <div className="hidden grid-cols-[1.2fr_1.5fr_1fr_100px_120px_40px] gap-4 border-b border-slate-100 px-6 py-4 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-400 lg:grid">
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
                  className="group block border-b border-slate-100 px-6 py-6 transition last:border-b-0 hover:bg-slate-50"
                >
                  <div className="grid gap-5 lg:grid-cols-[1.2fr_1.5fr_1fr_100px_120px_40px] lg:items-center lg:gap-4">
                    {/* Flight */}
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#07111F]">
                        <Plane
                          size={15}
                          className="text-[#C9A86A]"
                        />
                      </div>

                      <div>
                        <p className="font-semibold">
                          {flight.flightNumber}
                        </p>

                        <p className="text-xs text-slate-400">
                          {flight.airline}
                        </p>
                      </div>
                    </div>

                    {/* Route */}
                    <div>
                      <p className="flex items-center gap-3 font-medium">
                        {flight.originCode}

                        <ArrowRight
                          size={14}
                          className="text-slate-300"
                        />

                        {flight.destinationCode}
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        {flight.origin} → {flight.destination}
                      </p>
                    </div>

                    {/* Time */}
                    <div>
                      <p className="font-medium">
                        {flight.scheduledTime}
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        {flight.aircraft}
                      </p>
                    </div>

                    {/* Gate */}
                    <div>
                      <p className="text-xs text-slate-400 lg:hidden">
                        Gate
                      </p>
                      <p className="font-medium">{flight.gate}</p>
                    </div>

                    {/* Status */}
                    <div>
                      <span
                        className={`inline-flex rounded-full px-3 py-1.5 text-xs font-medium ${
                          flight.status === "On Time"
                            ? "bg-emerald-50 text-emerald-600"
                            : flight.status === "Boarding"
                              ? "bg-blue-50 text-blue-600"
                              : flight.status === "Delayed"
                                ? "bg-amber-50 text-amber-700"
                                : flight.status === "Cancelled"
                                  ? "bg-red-50 text-red-600"
                                  : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {flight.status}
                      </span>
                    </div>

                    {/* Arrow */}
                    <div className="hidden justify-end lg:flex">
                      <ArrowRight
                        size={17}
                        className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#C9A86A]"
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