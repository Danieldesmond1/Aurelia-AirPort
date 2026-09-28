import {
  ArrowRight,
  Clock3,
  Map,
  Navigation,
} from "lucide-react";
import { Link } from "react-router-dom";

import AirportMap from "../../components/airport/AirportMap";
import AirportEssentials from "../../components/passenger/AirportEssentials";
import AirportJourneyPath from "../../components/passenger/AirportJourneyPath";
import PassengerAirportHero from "../../components/passenger/PassengerAirportHero";

import { useAirportLocations } from "../../hooks/useAirportLocations";
import { usePassenger } from "../../hooks/usePassenger";
import { useTheme } from "../../context/ThemeContext";

function PassengerAirportGuidePage() {
  const {
    trips,
    loading: passengerLoading,
  } = usePassenger();

  const {
    locations,
    loading: locationsLoading,
  } = useAirportLocations();

  const { theme } = useTheme();
  const isDark = theme === "dark";

  const upcomingTrip = trips.find(
    (trip) =>
      trip.status === "Upcoming" ||
      trip.status === "Checked In" ||
      trip.status === "Boarding"
  );

  if (passengerLoading || locationsLoading) {
    return (
      <div
        className={`mx-auto w-full max-w-[1440px] px-5 py-8 transition-colors duration-500 sm:px-8 lg:px-10 ${
          isDark ? "bg-[#07111F]" : "bg-[#F7F8FA]"
        }`}
      >
        <div className="animate-pulse space-y-5">
          <div
            className={`h-[280px] rounded-[28px] ${
              isDark ? "bg-white/[0.05]" : "bg-slate-200"
            }`}
          />

          <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
            <div
              className={`h-[420px] rounded-[24px] ${
                isDark ? "bg-white/[0.05]" : "bg-slate-200"
              }`}
            />

            <div
              className={`h-[420px] rounded-[24px] ${
                isDark ? "bg-white/[0.05]" : "bg-slate-200"
              }`}
            />
          </div>
        </div>
      </div>
    );
  }

  if (!upcomingTrip) {
    return (
      <div
        className={`mx-auto flex min-h-[70vh] w-full max-w-[900px] items-center justify-center px-5 py-12 transition-colors duration-500 sm:px-8 ${
          isDark ? "bg-[#07111F]" : "bg-[#F7F8FA]"
        }`}
      >
        <div
          className={`w-full rounded-[28px] border p-8 text-center transition-colors duration-500 sm:p-12 ${
            isDark
              ? "border-white/[0.07] bg-[#0D1B2A] shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
              : "border-slate-200 bg-white shadow-[0_12px_40px_rgba(7,17,31,0.05)]"
          }`}
        >
          <div
            className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl ${
              isDark
                ? "bg-[#07111F] text-[#C9A86A]"
                : "bg-[#F7F8FA] text-[#07111F]"
            }`}
          >
            <Map size={22} />
          </div>

          <h1
            className={`mt-5 text-2xl font-semibold tracking-[-0.04em] ${
              isDark ? "text-white" : "text-[#07111F]"
            }`}
          >
            Your airport guide
          </h1>

          <p
            className={`mx-auto mt-3 max-w-md text-sm leading-6 ${
              isDark ? "text-slate-400" : "text-[#667085]"
            }`}
          >
            Once you have an upcoming journey, we'll personalize the airport
            guide around your terminal and flight.
          </p>

          <Link
            to="/portal/trips"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#07111F] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0D1B2A]"
          >
            View my trips
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    );
  }

  const terminalLocations = locations.filter(
    (location) => location.terminal === upcomingTrip.terminal
  );

  return (
    <div
      className={`mx-auto w-full max-w-[1440px] px-5 py-7 transition-colors duration-500 sm:px-8 sm:py-9 lg:px-10 lg:py-10 ${
        isDark ? "text-white" : "text-[#111827]"
      }`}
    >
      <div className="mb-8">
        <div
          className={`flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] ${
            isDark ? "text-slate-500" : "text-[#667085]"
          }`}
        >
          <Navigation size={13} />
          Passenger portal
        </div>

        <p
          className={`mt-2 text-sm ${
            isDark ? "text-slate-400" : "text-[#667085]"
          }`}
        >
          Airport navigation · Personalized for your next journey
        </p>
      </div>

      <PassengerAirportHero
        flightNumber={upcomingTrip.flightNumber}
        originCode={upcomingTrip.originCode}
        destinationCode={upcomingTrip.destinationCode}
        terminal={upcomingTrip.terminal}
        gate={upcomingTrip.gate}
        departureDate={upcomingTrip.departureDate}
        departureTime={upcomingTrip.departureTime}
      />

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
        <AirportJourneyPath
          terminal={upcomingTrip.terminal}
          gate={upcomingTrip.gate}
        />

        <section
          className={`overflow-hidden rounded-[24px] border shadow-[0_12px_40px_rgba(7,17,31,0.05)] transition-colors duration-500 ${
            isDark
              ? "border-white/[0.07] bg-[#0D1B2A]"
              : "border-slate-200 bg-white"
          }`}
        >
          <div
            className={`border-b px-6 py-5 transition-colors duration-500 sm:px-7 ${
              isDark ? "border-white/[0.07]" : "border-slate-200"
            }`}
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9A86A]">
                  Interactive map
                </p>

                <h2
                  className={`mt-2 text-xl font-semibold tracking-[-0.03em] ${
                    isDark ? "text-white" : "text-[#07111F]"
                  }`}
                >
                  Find your way
                </h2>
              </div>

              <div
                className={`hidden items-center gap-2 text-xs sm:flex ${
                  isDark ? "text-slate-400" : "text-[#667085]"
                }`}
              >
                <Clock3 size={14} />
                {upcomingTrip.terminal} · Gate {upcomingTrip.gate}
              </div>
            </div>
          </div>

          <div className="p-3 sm:p-4">
            <AirportMap locations={terminalLocations} />
          </div>
        </section>
      </div>

      <div className="mt-10">
        <AirportEssentials terminal={upcomingTrip.terminal} />
      </div>

      <section className="mt-10 overflow-hidden rounded-[24px] bg-[#07111F] text-white">
        <div className="flex flex-col gap-6 px-6 py-7 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9A86A]">
              Need more?
            </p>

            <h2 className="mt-2 text-xl font-semibold tracking-[-0.03em]">
              Explore the full Aurelia airport
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-white/55">
              Browse every terminal, facility and airport location using the
              complete airport guide.
            </p>
          </div>

          <Link
            to="/airport"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#07111F] transition hover:bg-[#F7F8FA]"
          >
            Open full airport guide
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default PassengerAirportGuidePage;
