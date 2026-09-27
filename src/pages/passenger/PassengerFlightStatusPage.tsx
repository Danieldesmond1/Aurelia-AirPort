import {
  ArrowRight,
  Info,
  PlaneTakeoff,
  RefreshCw,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import FlightStatusSummary from "../../components/passenger/FlightStatusSummary";
import FlightStatusTimeline from "../../components/passenger/FlightStatusTimeline";
import PassengerFlightStatusCard from "../../components/passenger/PassengerFlightStatusCard";
import { usePassenger } from "../../hooks/usePassenger";
import { flightService } from "../../services/flightService";
import type { Flight } from "../../types/flight";
import { useTheme } from "../../context/ThemeContext";

function PassengerFlightStatusPage() {
  const {
    trips,
    loading: passengerLoading,
  } = usePassenger();

  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [flights, setFlights] = useState<Flight[]>([]);
  const [flightLoading, setFlightLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date>(
    new Date(),
  );

  const loadFlights = async () => {
    setFlightLoading(true);

    try {
      const data = await flightService.getFlights();
      setFlights(data);
      setLastUpdated(new Date());
    } finally {
      setFlightLoading(false);
    }
  };

  useEffect(() => {
    loadFlights();
  }, []);

  const loading = passengerLoading || flightLoading;

  const upcomingTrips = trips.filter(
    (trip) =>
      trip.status === "Upcoming" ||
      trip.status === "Checked In" ||
      trip.status === "Boarding",
  );

  const getFlightForTrip = (flightId: string) =>
    flights.find((flight) => flight.id === flightId);

  const activeTrip =
    upcomingTrips.length > 0
      ? upcomingTrips[0]
      : undefined;

  if (loading) {
    return (
      <div
        className={`mx-auto w-full max-w-7xl px-5 py-8 transition-colors duration-500 sm:px-8 lg:px-10 lg:py-10 ${
          isDark ? "text-white" : "text-[#111827]"
        }`}
      >
        <div className="animate-pulse">
          <div
            className={`h-3 w-28 rounded ${
              isDark ? "bg-[#0D1B2A]" : "bg-slate-200"
            }`}
          />

          <div
            className={`mt-4 h-10 w-72 rounded ${
              isDark ? "bg-[#0D1B2A]" : "bg-slate-200"
            }`}
          />

          <div
            className={`mt-3 h-4 w-96 max-w-full rounded ${
              isDark ? "bg-[#0D1B2A]" : "bg-slate-200"
            }`}
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className={`h-32 rounded-2xl ${
                  isDark ? "bg-[#0D1B2A]" : "bg-slate-200"
                }`}
              />
            ))}
          </div>

          <div
            className={`mt-8 h-96 rounded-3xl ${
              isDark ? "bg-[#0D1B2A]" : "bg-slate-200"
            }`}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`mx-auto w-full max-w-7xl px-5 py-8 transition-colors duration-500 sm:px-8 lg:px-10 lg:py-10 ${
        isDark ? "text-white" : "text-[#111827]"
      }`}
    >
      {/* Header */}
      <header>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#C9A86A]">
          <PlaneTakeoff size={14} />
          Passenger portal
        </div>

        <div className="mt-3 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1
              className={`text-3xl font-semibold tracking-tight sm:text-4xl ${
                isDark ? "text-white" : "text-[#07111F]"
              }`}
            >
              Flight Status
            </h1>

            <p
              className={`mt-2 max-w-2xl text-sm leading-6 sm:text-base ${
                isDark ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Stay up to date with your upcoming flights
              and the latest airport information.
            </p>
          </div>

          <button
            type="button"
            onClick={loadFlights}
            className={`inline-flex w-fit items-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition-all duration-300 ${
              isDark
                ? "border-white/[0.08] bg-[#0D1B2A] text-white hover:border-white/[0.14] hover:bg-[#07111F]"
                : "border-slate-200 bg-white text-[#07111F] hover:border-slate-300 hover:bg-slate-50"
            }`}
          >
            <RefreshCw size={15} />
            Refresh status
          </button>
        </div>

        <div
          className={`mt-4 flex items-center gap-2 text-xs ${
            isDark ? "text-slate-500" : "text-slate-400"
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Updated{" "}
          {lastUpdated.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </header>

      {/* Summary */}
      <section className="mt-8">
        <FlightStatusSummary flights={flights} />
      </section>

      {/* Upcoming flights */}
      <section className="mt-10">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p
              className={`text-xs font-semibold uppercase tracking-[0.16em] ${
                isDark ? "text-slate-500" : "text-slate-400"
              }`}
            >
              Your flights
            </p>

            <h2
              className={`mt-1 text-xl font-semibold ${
                isDark ? "text-white" : "text-[#07111F]"
              }`}
            >
              Upcoming flight status
            </h2>
          </div>

          <Link
            to="/portal/trips"
            className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
              isDark
                ? "text-slate-300 hover:text-[#C9A86A]"
                : "text-[#07111F] hover:text-[#C9A86A]"
            }`}
          >
            View all trips
            <ArrowRight size={15} />
          </Link>
        </div>

        {upcomingTrips.length > 0 ? (
          <div className="grid gap-5">
            {upcomingTrips.map((trip) => (
              <PassengerFlightStatusCard
                key={trip.id}
                trip={trip}
                flight={getFlightForTrip(trip.flightId)}
              />
            ))}
          </div>
        ) : (
          <div
            className={`rounded-3xl border px-6 py-14 text-center transition-colors duration-500 ${
              isDark
                ? "border-white/[0.07] bg-[#0D1B2A]"
                : "border-slate-200 bg-white"
            }`}
          >
            <div
              className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl ${
                isDark
                  ? "bg-[#07111F] text-slate-500"
                  : "bg-[#F7F8FA] text-slate-400"
              }`}
            >
              <PlaneTakeoff size={22} />
            </div>

            <h3
              className={`mt-5 text-lg font-semibold ${
                isDark ? "text-white" : "text-[#07111F]"
              }`}
            >
              No upcoming flights
            </h3>

            <p
              className={`mx-auto mt-2 max-w-md text-sm leading-6 ${
                isDark ? "text-slate-400" : "text-slate-500"
              }`}
            >
              When you have an upcoming journey, its
              live flight status will appear here.
            </p>

            <Link
              to="/flights"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#07111F] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0D1B2A]"
            >
              Explore flights
              <ArrowRight size={15} />
            </Link>
          </div>
        )}
      </section>

      {/* Active journey timeline */}
      {activeTrip && (
        <section className="mt-10">
          <div className="mb-5">
            <p
              className={`text-xs font-semibold uppercase tracking-[0.16em] ${
                isDark ? "text-slate-500" : "text-slate-400"
              }`}
            >
              Journey tracker
            </p>

            <h2
              className={`mt-1 text-xl font-semibold ${
                isDark ? "text-white" : "text-[#07111F]"
              }`}
            >
              Your current journey
            </h2>
          </div>

          <FlightStatusTimeline trip={activeTrip} />
        </section>
      )}

      {/* Information */}
      <section className="mt-10">
        <div
          className={`flex gap-4 rounded-3xl border p-5 transition-colors duration-500 sm:p-6 ${
            isDark
              ? "border-blue-400/15 bg-blue-500/[0.06]"
              : "border-blue-100 bg-blue-50/60"
          }`}
        >
          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-sm ${
              isDark
                ? "bg-[#0D1B2A] text-blue-400"
                : "bg-white text-blue-600"
            }`}
          >
            <Info size={18} />
          </div>

          <div>
            <h3
              className={`text-sm font-semibold ${
                isDark ? "text-blue-300" : "text-blue-950"
              }`}
            >
              About flight information
            </h3>

            <p
              className={`mt-1 max-w-3xl text-xs leading-5 ${
                isDark ? "text-blue-300/70" : "text-blue-800/70"
              }`}
            >
              Flight times and gate assignments can
              change during airport operations. Check
              your flight status regularly and follow
              announcements at the airport for the
              latest information.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PassengerFlightStatusPage;