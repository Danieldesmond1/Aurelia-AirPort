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

function PassengerDashboardPage() {
  const { profile, trips, loading } = usePassenger();

  if (loading) {
    return (
      <div className="mx-auto w-full max-w-[1500px] px-5 py-8 sm:px-7 lg:px-10 lg:py-10">
        <div className="animate-pulse">
          <div className="h-3 w-28 rounded bg-slate-200" />
          <div className="mt-4 h-10 w-72 rounded-lg bg-slate-200" />
          <div className="mt-3 h-4 w-96 max-w-full rounded bg-slate-200" />

          <div className="mt-10 h-[420px] rounded-[28px] bg-slate-200" />

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="h-80 rounded-[24px] bg-slate-200" />
            <div className="h-80 rounded-[24px] bg-slate-200" />
          </div>
        </div>
      </div>
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
    <div className="mx-auto w-full max-w-[1500px] px-5 py-8 sm:px-7 lg:px-10 lg:py-10">
      {/* Welcome */}
      <section className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9A86A]">
            Passenger Portal
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-[#07111F] sm:text-4xl lg:text-[42px]">
            Welcome back, {profile?.firstName}.
          </h1>

          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
            Everything you need for your journey, all in one place.
          </p>
        </div>

        <Link
          to="/portal/profile"
          className="group flex w-fit items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:text-[#07111F]"
        >
          <UserRound size={15} />

          Manage profile

          <ArrowRight
            size={14}
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </Link>
      </section>

      {nextTrip ? (
        <>
          {/* Main trip */}
          <UpcomingTripCard trip={nextTrip} />

          {/* Journey + Flight status */}
          <section className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <JourneyProgress trip={nextTrip} />

            <FlightStatusCard trip={nextTrip} />
          </section>

          {/* Quick actions */}
          <div className="mt-8">
            <QuickActions />
          </div>

          {/* Travel details */}
          <section className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
            <div className="rounded-[24px] border border-slate-200 bg-white p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C9A86A]">
                    Trip details
                  </p>

                  <h2 className="mt-1.5 text-xl font-semibold tracking-[-0.025em] text-[#07111F]">
                    Your travel summary
                  </h2>
                </div>

                <Link
                  to={`/portal/trips/${nextTrip.id}`}
                  className="hidden items-center gap-1 text-xs font-semibold text-slate-500 transition-colors hover:text-[#07111F] sm:flex"
                >
                  View details
                  <ChevronRight size={14} />
                </Link>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <CalendarDays
                    size={17}
                    className="text-slate-400"
                  />

                  <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                    Travel date
                  </p>

                  <p className="mt-1.5 text-sm font-semibold text-[#07111F]">
                    {new Date(
                      `${nextTrip.departureDate}T00:00:00`
                    ).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short",
                    })}
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <Luggage
                    size={17}
                    className="text-slate-400"
                  />

                  <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                    Baggage
                  </p>

                  <p className="mt-1.5 text-sm font-semibold text-[#07111F]">
                    {nextTrip.checkedBags ?? 0} checked
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-[17px] font-semibold text-[#07111F]">
                    {nextTrip.seat ?? "—"}
                  </p>

                  <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                    Seat
                  </p>

                  <p className="mt-1.5 text-sm font-semibold text-[#07111F]">
                    {nextTrip.cabinClass}
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-[17px] font-semibold text-[#07111F]">
                    {nextTrip.terminal}
                  </p>

                  <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                    Terminal
                  </p>

                  <p className="mt-1.5 text-sm font-semibold text-[#07111F]">
                    {nextTrip.gate
                      ? `Gate ${nextTrip.gate}`
                      : "Gate pending"}
                  </p>
                </div>
              </div>
            </div>

            {/* Other trips */}
            <div className="rounded-[24px] border border-slate-200 bg-white p-6 sm:p-7">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C9A86A]">
                  Upcoming
                </p>

                <h2 className="mt-1.5 text-xl font-semibold tracking-[-0.025em] text-[#07111F]">
                  Other trips
                </h2>
              </div>

              <div className="mt-6 space-y-3">
                {upcomingTrips.slice(1, 3).map((trip) => (
                  <Link
                    key={trip.id}
                    to={`/portal/trips/${trip.id}`}
                    className="group flex items-center justify-between rounded-2xl border border-slate-100 p-4 transition-colors hover:border-slate-200 hover:bg-slate-50"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
                        <CalendarDays size={15} />
                      </div>

                      <div>
                        <p className="text-xs font-semibold text-[#07111F]">
                          {trip.originCode} → {trip.destinationCode}
                        </p>

                        <p className="mt-1 text-[10px] text-slate-400">
                          {trip.flightNumber} · {trip.departureDate}
                        </p>
                      </div>
                    </div>

                    <ChevronRight
                      size={16}
                      className="text-slate-300 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-slate-500"
                    />
                  </Link>
                ))}

                {upcomingTrips.length <= 1 && (
                  <div className="rounded-2xl bg-slate-50 px-4 py-7 text-center">
                    <p className="text-xs font-medium text-slate-500">
                      No other upcoming trips.
                    </p>

                    <p className="mt-1 text-[10px] text-slate-400">
                      Your next journey will appear here.
                    </p>
                  </div>
                )}
              </div>

              <Link
                to="/portal/trips"
                className="mt-5 flex items-center justify-center gap-2 border-t border-slate-100 pt-5 text-xs font-semibold text-[#07111F]"
              >
                View all trips
                <ArrowRight size={14} />
              </Link>
            </div>
          </section>
        </>
      ) : (
        /* Empty state */
        <section className="rounded-[28px] border border-slate-200 bg-white p-10 text-center sm:p-16">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#07111F] text-[#C9A86A]">
            <CalendarDays size={22} />
          </div>

          <h2 className="mt-6 text-2xl font-semibold tracking-[-0.03em] text-[#07111F]">
            No upcoming journeys
          </h2>

          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-400">
            Your upcoming flights and travel information will appear here
            once you have a confirmed journey.
          </p>

          <Link
            to="/flights"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#07111F] px-5 py-3.5 text-sm font-semibold text-white"
          >
            Explore flights
            <ArrowRight size={15} />
          </Link>
        </section>
      )}
    </div>
  );
}

export default PassengerDashboardPage;