import {
  ArrowRight,
  CalendarDays,
  ChevronRight,
  Luggage,
  UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";

import FlightStatusCard from "../../components/passenger/FlightStatusCard";
import JourneyProgress from "../../components/passenger/JourneyProgress";
import QuickActions from "../../components/passenger/QuickActions";
import UpcomingTripCard from "../../components/passenger/UpcomingTripCard";
import { usePassenger } from "../../hooks/usePassenger";
import { useTheme } from "../../context/ThemeContext";

function PassengerDashboardPage() {
  const { profile, trips, loading } = usePassenger();
  const { theme } = useTheme();

  const isDark = theme === "dark";

  if (loading) {
    return (
      <main
        className={`min-h-screen transition-colors duration-500 ${
          isDark
            ? "bg-[#07111F] text-white"
            : "bg-white text-[#111827]"
        }`}
      >
        <div className="mx-auto w-full max-w-[1500px] px-5 py-8 sm:px-7 lg:px-10 lg:py-10">
          <div className="animate-pulse">
            <div
              className={`h-3 w-28 rounded ${
                isDark ? "bg-white/10" : "bg-slate-200"
              }`}
            />

            <div
              className={`mt-4 h-10 w-72 rounded-lg ${
                isDark ? "bg-white/10" : "bg-slate-200"
              }`}
            />

            <div
              className={`mt-3 h-4 w-96 max-w-full rounded ${
                isDark ? "bg-white/10" : "bg-slate-200"
              }`}
            />

            <div
              className={`mt-10 h-[420px] rounded-[28px] ${
                isDark ? "bg-white/[0.06]" : "bg-slate-200"
              }`}
            />

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <div
                className={`h-80 rounded-[24px] ${
                  isDark ? "bg-white/[0.06]" : "bg-slate-200"
                }`}
              />

              <div
                className={`h-80 rounded-[24px] ${
                  isDark ? "bg-white/[0.06]" : "bg-slate-200"
                }`}
              />
            </div>
          </div>
        </div>
      </main>
    );
  }

  const upcomingTrips = trips.filter(
    (trip) =>
      trip.status === "Upcoming" ||
      trip.status === "Checked In" ||
      trip.status === "Boarding"
  );

  const nextTrip = upcomingTrips[0];

  return (
    <main
      className={`min-h-screen transition-colors duration-500 ${
        isDark
          ? "bg-[#07111F] text-white"
          : "bg-white text-[#111827]"
      }`}
    >
      <div className="mx-auto w-full max-w-[1500px] px-5 py-8 sm:px-7 lg:px-10 lg:py-10">
        {/* WELCOME */}
        <section className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-[#C9A86A]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9A86A] sm:text-[11px]">
                Passenger Portal
              </p>
            </div>

            <h1
              className={`text-3xl font-semibold tracking-[-0.045em] sm:text-4xl lg:text-[42px] ${
                isDark ? "text-white" : "text-[#07111F]"
              }`}
            >
              Welcome back, {profile?.firstName}.
            </h1>

            <p
              className={`mt-2 max-w-xl text-sm leading-6 ${
                isDark ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Everything you need for your journey, all in one
              place.
            </p>
          </div>

          <Link
            to="/portal/profile"
            className={`group flex w-fit items-center gap-2 rounded-xl border px-4 py-3 text-xs font-semibold transition-all duration-300 ${
              isDark
                ? "border-white/[0.08] bg-[#0D1B2A] text-slate-200 hover:border-white/[0.14] hover:text-white"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:text-[#07111F]"
            }`}
          >
            <UserRound size={15} />

            Manage profile

            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </Link>
        </section>

        {nextTrip ? (
          <>
            {/* UPCOMING JOURNEY */}
            <UpcomingTripCard trip={nextTrip} />

            {/* JOURNEY + FLIGHT STATUS */}
            <section className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <JourneyProgress trip={nextTrip} />

              <FlightStatusCard trip={nextTrip} />
            </section>

            {/* QUICK ACTIONS */}
            <div className="mt-8">
              <QuickActions />
            </div>

            {/* TRAVEL DETAILS */}
            <section className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
              {/* TRIP DETAILS */}
              <div
                className={`rounded-[24px] border p-6 transition-colors duration-500 sm:p-7 ${
                  isDark
                    ? "border-white/[0.07] bg-[#0D1B2A]"
                    : "border-slate-200 bg-white"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C9A86A]">
                      Trip details
                    </p>

                    <h2
                      className={`mt-1.5 text-xl font-semibold tracking-[-0.025em] ${
                        isDark ? "text-white" : "text-[#07111F]"
                      }`}
                    >
                      Your travel summary
                    </h2>
                  </div>

                  <Link
                    to={`/portal/trips/${nextTrip.id}`}
                    className={`group hidden items-center gap-1 text-xs font-semibold transition-colors sm:flex ${
                      isDark
                        ? "text-slate-500 hover:text-white"
                        : "text-slate-500 hover:text-[#07111F]"
                    }`}
                  >
                    View details

                    <ChevronRight
                      size={14}
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {/* DATE */}
                  <div
                    className={`rounded-2xl p-4 transition-colors duration-300 ${
                      isDark ? "bg-[#07111F]" : "bg-slate-50"
                    }`}
                  >
                    <CalendarDays
                      size={17}
                      className={
                        isDark
                          ? "text-slate-500"
                          : "text-slate-400"
                      }
                    />

                    <p
                      className={`mt-4 text-[9px] font-semibold uppercase tracking-[0.12em] ${
                        isDark
                          ? "text-slate-500"
                          : "text-slate-400"
                      }`}
                    >
                      Travel date
                    </p>

                    <p
                      className={`mt-1.5 text-sm font-semibold ${
                        isDark ? "text-white" : "text-[#07111F]"
                      }`}
                    >
                      {new Date(
                        `${nextTrip.departureDate}T00:00:00`
                      ).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                      })}
                    </p>
                  </div>

                  {/* BAGGAGE */}
                  <div
                    className={`rounded-2xl p-4 transition-colors duration-300 ${
                      isDark ? "bg-[#07111F]" : "bg-slate-50"
                    }`}
                  >
                    <Luggage
                      size={17}
                      className={
                        isDark
                          ? "text-slate-500"
                          : "text-slate-400"
                      }
                    />

                    <p
                      className={`mt-4 text-[9px] font-semibold uppercase tracking-[0.12em] ${
                        isDark
                          ? "text-slate-500"
                          : "text-slate-400"
                      }`}
                    >
                      Baggage
                    </p>

                    <p
                      className={`mt-1.5 text-sm font-semibold ${
                        isDark ? "text-white" : "text-[#07111F]"
                      }`}
                    >
                      {nextTrip.checkedBags ?? 0} checked
                    </p>
                  </div>

                  {/* SEAT */}
                  <div
                    className={`rounded-2xl p-4 transition-colors duration-300 ${
                      isDark ? "bg-[#07111F]" : "bg-slate-50"
                    }`}
                  >
                    <p
                      className={`text-[17px] font-semibold ${
                        isDark ? "text-white" : "text-[#07111F]"
                      }`}
                    >
                      {nextTrip.seat ?? "—"}
                    </p>

                    <p
                      className={`mt-4 text-[9px] font-semibold uppercase tracking-[0.12em] ${
                        isDark
                          ? "text-slate-500"
                          : "text-slate-400"
                      }`}
                    >
                      Seat
                    </p>

                    <p
                      className={`mt-1.5 text-sm font-semibold ${
                        isDark ? "text-white" : "text-[#07111F]"
                      }`}
                    >
                      {nextTrip.cabinClass}
                    </p>
                  </div>

                  {/* TERMINAL */}
                  <div
                    className={`rounded-2xl p-4 transition-colors duration-300 ${
                      isDark ? "bg-[#07111F]" : "bg-slate-50"
                    }`}
                  >
                    <p
                      className={`text-[17px] font-semibold ${
                        isDark ? "text-white" : "text-[#07111F]"
                      }`}
                    >
                      {nextTrip.terminal}
                    </p>

                    <p
                      className={`mt-4 text-[9px] font-semibold uppercase tracking-[0.12em] ${
                        isDark
                          ? "text-slate-500"
                          : "text-slate-400"
                      }`}
                    >
                      Terminal
                    </p>

                    <p
                      className={`mt-1.5 text-sm font-semibold ${
                        isDark ? "text-white" : "text-[#07111F]"
                      }`}
                    >
                      {nextTrip.gate
                        ? `Gate ${nextTrip.gate}`
                        : "Gate pending"}
                    </p>
                  </div>
                </div>

                {/* MOBILE DETAILS LINK */}
                <Link
                  to={`/portal/trips/${nextTrip.id}`}
                  className={`mt-5 flex items-center justify-center gap-1 border-t pt-5 text-xs font-semibold sm:hidden ${
                    isDark
                      ? "border-white/[0.07] text-slate-300"
                      : "border-slate-100 text-[#07111F]"
                  }`}
                >
                  View trip details
                  <ChevronRight size={14} />
                </Link>
              </div>

              {/* OTHER TRIPS */}
              <div
                className={`rounded-[24px] border p-6 transition-colors duration-500 sm:p-7 ${
                  isDark
                    ? "border-white/[0.07] bg-[#0D1B2A]"
                    : "border-slate-200 bg-white"
                }`}
              >
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C9A86A]">
                    Upcoming
                  </p>

                  <h2
                    className={`mt-1.5 text-xl font-semibold tracking-[-0.025em] ${
                      isDark ? "text-white" : "text-[#07111F]"
                    }`}
                  >
                    Other trips
                  </h2>
                </div>

                <div className="mt-6 space-y-3">
                  {upcomingTrips.slice(1, 3).map((trip) => (
                    <Link
                      key={trip.id}
                      to={`/portal/trips/${trip.id}`}
                      className={`group flex items-center justify-between rounded-2xl border p-4 transition-all duration-300 ${
                        isDark
                          ? "border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.025]"
                          : "border-slate-100 hover:border-slate-200 hover:bg-slate-50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                            isDark
                              ? "bg-[#07111F] text-slate-500"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          <CalendarDays size={15} />
                        </div>

                        <div>
                          <p
                            className={`text-xs font-semibold ${
                              isDark
                                ? "text-white"
                                : "text-[#07111F]"
                            }`}
                          >
                            {trip.originCode} →{" "}
                            {trip.destinationCode}
                          </p>

                          <p
                            className={`mt-1 text-[10px] ${
                              isDark
                                ? "text-slate-500"
                                : "text-slate-400"
                            }`}
                          >
                            {trip.flightNumber} ·{" "}
                            {trip.departureDate}
                          </p>
                        </div>
                      </div>

                      <ChevronRight
                        size={16}
                        className={`transition-all duration-200 ${
                          isDark
                            ? "text-slate-600 group-hover:translate-x-0.5 group-hover:text-slate-300"
                            : "text-slate-300 group-hover:translate-x-0.5 group-hover:text-slate-500"
                        }`}
                      />
                    </Link>
                  ))}

                  {upcomingTrips.length <= 1 && (
                    <div
                      className={`rounded-2xl px-4 py-7 text-center ${
                        isDark ? "bg-[#07111F]" : "bg-slate-50"
                      }`}
                    >
                      <p
                        className={`text-xs font-medium ${
                          isDark
                            ? "text-slate-400"
                            : "text-slate-500"
                        }`}
                      >
                        No other upcoming trips.
                      </p>

                      <p
                        className={`mt-1 text-[10px] ${
                          isDark
                            ? "text-slate-600"
                            : "text-slate-400"
                        }`}
                      >
                        Your next journey will appear here.
                      </p>
                    </div>
                  )}
                </div>

                <Link
                  to="/portal/trips"
                  className={`group mt-5 flex items-center justify-center gap-2 border-t pt-5 text-xs font-semibold transition-colors ${
                    isDark
                      ? "border-white/[0.07] text-slate-300 hover:text-white"
                      : "border-slate-100 text-[#07111F] hover:text-[#C9A86A]"
                  }`}
                >
                  View all trips

                  <ArrowRight
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </section>
          </>
        ) : (
          /* EMPTY STATE */
          <section
            className={`rounded-[28px] border p-10 text-center transition-colors duration-500 sm:p-16 ${
              isDark
                ? "border-white/[0.07] bg-[#0D1B2A]"
                : "border-slate-200 bg-white"
            }`}
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#07111F] text-[#C9A86A]">
              <CalendarDays size={22} />
            </div>

            <h2
              className={`mt-6 text-2xl font-semibold tracking-[-0.03em] ${
                isDark ? "text-white" : "text-[#07111F]"
              }`}
            >
              No upcoming journeys
            </h2>

            <p
              className={`mx-auto mt-2 max-w-md text-sm leading-6 ${
                isDark ? "text-slate-400" : "text-slate-400"
              }`}
            >
              Your upcoming flights and travel information will
              appear here once you have a confirmed journey.
            </p>

            <Link
              to="/flights"
              className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-[#07111F] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C9A86A] hover:text-[#07111F]"
            >
              Explore flights

              <ArrowRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
          </section>
        )}
      </div>
    </main>
  );
}

export default PassengerDashboardPage;
