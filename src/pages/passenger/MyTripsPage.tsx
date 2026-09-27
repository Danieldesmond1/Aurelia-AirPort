import {
  ArrowRight,
  CalendarDays,
  PlaneTakeoff,
} from "lucide-react";
import { Link } from "react-router-dom";

import TripCard from "../../components/passenger/TripCard";
import { usePassenger } from "../../hooks/usePassenger";
import { useTheme } from "../../context/ThemeContext";

function MyTripsPage() {
  const { trips, loading } = usePassenger();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const upcomingTrips = trips.filter(
    (trip) =>
      trip.status === "Upcoming" ||
      trip.status === "Checked In" ||
      trip.status === "Boarding",
  );

  const pastTrips = trips.filter(
    (trip) =>
      trip.status === "Completed" ||
      trip.status === "Cancelled",
  );

  if (loading) {
    return (
      <div
        className={`mx-auto w-full max-w-7xl px-5 py-8 transition-colors duration-500 sm:px-8 lg:px-10 lg:py-10 ${
          isDark ? "text-white" : "text-[#111827]"
        }`}
      >
        <div className="animate-pulse">
          <div
            className={`h-3 w-20 rounded ${
              isDark ? "bg-[#0D1B2A]" : "bg-slate-200"
            }`}
          />
          <div
            className={`mt-4 h-10 w-64 rounded ${
              isDark ? "bg-[#0D1B2A]" : "bg-slate-200"
            }`}
          />
          <div
            className={`mt-3 h-4 w-96 max-w-full rounded ${
              isDark ? "bg-[#0D1B2A]" : "bg-slate-200"
            }`}
          />

          <div className="mt-10 grid gap-5">
            <div
              className={`h-72 rounded-3xl ${
                isDark ? "bg-[#0D1B2A]" : "bg-slate-200"
              }`}
            />
            <div
              className={`h-72 rounded-3xl ${
                isDark ? "bg-[#0D1B2A]" : "bg-slate-200"
              }`}
            />
          </div>
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
      <header className="mb-10">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#C9A86A]">
          <PlaneTakeoff size={14} />
          Passenger portal
        </div>

        <h1
          className={`mt-3 text-3xl font-semibold tracking-tight sm:text-4xl ${
            isDark ? "text-white" : "text-[#07111F]"
          }`}
        >
          My Trips
        </h1>

        <p
          className={`mt-2 max-w-2xl text-sm leading-6 sm:text-base ${
            isDark ? "text-slate-400" : "text-slate-500"
          }`}
        >
          Your journeys, past and upcoming, all in one
          place.
        </p>
      </header>

      {/* Upcoming */}
      <section>
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p
              className={`text-xs font-semibold uppercase tracking-[0.16em] ${
                isDark ? "text-slate-500" : "text-slate-400"
              }`}
            >
              Upcoming
            </p>

            <h2
              className={`mt-1 text-xl font-semibold ${
                isDark ? "text-white" : "text-[#07111F]"
              }`}
            >
              Your next journeys
            </h2>
          </div>

          <span
            className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
              isDark
                ? "bg-[#0D1B2A] text-slate-300"
                : "bg-slate-100 text-slate-600"
            }`}
          >
            {upcomingTrips.length}{" "}
            {upcomingTrips.length === 1 ? "trip" : "trips"}
          </span>
        </div>

        {upcomingTrips.length > 0 ? (
          <div className="grid gap-5">
            {upcomingTrips.map((trip) => (
              <TripCard
                key={trip.id}
                trip={trip}
              />
            ))}
          </div>
        ) : (
          <div
            className={`rounded-3xl border border-dashed px-6 py-14 text-center transition-colors duration-500 ${
              isDark
                ? "border-white/[0.12] bg-[#0D1B2A]"
                : "border-slate-300 bg-white"
            }`}
          >
            <div
              className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl ${
                isDark
                  ? "bg-[#07111F] text-slate-500"
                  : "bg-[#F7F8FA] text-slate-400"
              }`}
            >
              <CalendarDays size={22} />
            </div>

            <h3
              className={`mt-5 text-lg font-semibold ${
                isDark ? "text-white" : "text-[#07111F]"
              }`}
            >
              No upcoming trips
            </h3>

            <p
              className={`mx-auto mt-2 max-w-md text-sm leading-6 ${
                isDark ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Your upcoming journeys will appear here
              once they are added to your Aurelia passenger
              profile.
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

      {/* Past */}
      <section className="mt-14">
        <div className="mb-5">
          <p
            className={`text-xs font-semibold uppercase tracking-[0.16em] ${
              isDark ? "text-slate-500" : "text-slate-400"
            }`}
          >
            History
          </p>

          <h2
            className={`mt-1 text-xl font-semibold ${
              isDark ? "text-white" : "text-[#07111F]"
            }`}
          >
            Past journeys
          </h2>
        </div>

        {pastTrips.length > 0 ? (
          <div className="grid gap-5">
            {pastTrips.map((trip) => (
              <TripCard
                key={trip.id}
                trip={trip}
              />
            ))}
          </div>
        ) : (
          <div
            className={`rounded-3xl border px-6 py-12 text-center transition-colors duration-500 ${
              isDark
                ? "border-white/[0.07] bg-[#0D1B2A]"
                : "border-slate-200 bg-white"
            }`}
          >
            <p
              className={`text-sm font-medium ${
                isDark ? "text-slate-300" : "text-slate-500"
              }`}
            >
              No completed trips yet.
            </p>

            <p
              className={`mt-2 text-xs ${
                isDark ? "text-slate-500" : "text-slate-400"
              }`}
            >
              Your travel history will appear here after
              you complete a journey with Aurelia.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

export default MyTripsPage;