import { useMemo, useState } from "react";
import {
  ArrowRight,
  Building2,
  Clock3,
  Compass,
  Luggage,
  MapPin,
  Plane,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

import AirportMap from "../../components/airport/AirportMap";
import { useAirportLocations } from "../../hooks/useAirportLocations";
import type { AirportLocation } from "../../types/airport";
import { useTheme } from "../../context/ThemeContext";

function AirportPage() {
  const { locations, loading } = useAirportLocations();
  const { theme } = useTheme();
  const darkMode = theme === "dark";

  const [selectedLocation, setSelectedLocation] =
    useState<AirportLocation | undefined>();

  const featuredLocations = useMemo(
    () =>
      locations.filter((location) => location.featured).slice(0, 6),
    [locations]
  );

  const terminalLocations = useMemo(
    () =>
      locations.filter(
        (location) => location.type === "terminal"
      ),
    [locations]
  );

  return (
    <main
      className={`min-h-screen transition-colors duration-500 ${
        darkMode
          ? "bg-[#07111F] text-white"
          : "bg-[#F7F8FA] text-[#07111F]"
      }`}
    >
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#07111F] px-4 pb-14 pt-8 text-white sm:px-6 sm:pb-16 sm:pt-10 md:pb-20 md:pt-14">
        {/* Decorative glow */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#C9A86A]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="pointer-events-none absolute right-[20%] top-[40%] h-32 w-32 rounded-full border border-[#C9A86A]/10" />

        <div className="relative mx-auto max-w-[1400px]">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-[#C9A86A] backdrop-blur-sm sm:px-4 sm:text-xs">
              <Compass size={14} />
              Explore Aurelia
            </div>

            <h1 className="mt-6 text-4xl font-medium leading-[0.98] tracking-[-0.055em] sm:mt-7 sm:text-6xl md:text-7xl lg:text-8xl">
              Find your way
              <br />
              <span className="text-slate-500">
                with confidence.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8 md:text-lg">
              Explore terminals, gates, lounges, dining, shopping,
              baggage services, and everything you need to navigate
              Aurelia International Airport.
            </p>
          </div>

          {/* Quick search */}
          <div className="mt-8 max-w-3xl sm:mt-10">
            <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.06] p-2 backdrop-blur-xl transition-colors duration-300 hover:border-white/15 sm:gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 sm:h-12 sm:w-12">
                <Search size={19} className="text-[#C9A86A]" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-500 sm:text-[10px]">
                  Search airport
                </p>

                <p className="mt-1 truncate text-xs text-slate-300 sm:text-sm">
                  Find a gate, lounge, restaurant, terminal...
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("airport-map")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    })
                }
                className="hidden rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#07111F] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C9A86A] hover:shadow-lg sm:block"
              >
                Explore map
              </button>

              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("airport-map")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    })
                }
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#07111F] transition-all duration-300 hover:bg-[#C9A86A] sm:hidden"
                aria-label="Explore map"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <section
        className={`border-b transition-colors duration-500 ${
          darkMode
            ? "border-white/10 bg-[#0D1B2A]"
            : "border-slate-200 bg-white"
        }`}
      >
        <div className="mx-auto grid max-w-[1400px] divide-y sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          <div
            className={`flex items-center gap-4 px-4 py-5 sm:px-6 sm:py-6 ${
              darkMode ? "divide-white/10" : "divide-slate-200"
            }`}
          >
            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                darkMode ? "bg-[#C9A86A]/10" : "bg-slate-100"
              }`}
            >
              <Building2
                size={18}
                className="text-[#C9A86A]"
              />
            </div>

            <div>
              <p
                className={`text-2xl font-medium ${
                  darkMode ? "text-white" : "text-[#07111F]"
                }`}
              >
                3
              </p>

              <p
                className={`text-xs ${
                  darkMode ? "text-slate-500" : "text-slate-400"
                }`}
              >
                Passenger terminals
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 px-4 py-5 sm:px-6 sm:py-6">
            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                darkMode ? "bg-[#C9A86A]/10" : "bg-slate-100"
              }`}
            >
              <Plane size={18} className="text-[#C9A86A]" />
            </div>

            <div>
              <p
                className={`text-2xl font-medium ${
                  darkMode ? "text-white" : "text-[#07111F]"
                }`}
              >
                80
              </p>

              <p
                className={`text-xs ${
                  darkMode ? "text-slate-500" : "text-slate-400"
                }`}
              >
                Departure & arrival gates
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 px-4 py-5 sm:px-6 sm:py-6">
            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                darkMode ? "bg-[#C9A86A]/10" : "bg-slate-100"
              }`}
            >
              <Clock3 size={18} className="text-[#C9A86A]" />
            </div>

            <div>
              <p
                className={`text-2xl font-medium ${
                  darkMode ? "text-white" : "text-[#07111F]"
                }`}
              >
                24/7
              </p>

              <p
                className={`text-xs ${
                  darkMode ? "text-slate-500" : "text-slate-400"
                }`}
              >
                Airport operations
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 px-4 py-5 sm:px-6 sm:py-6">
            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                darkMode ? "bg-[#C9A86A]/10" : "bg-slate-100"
              }`}
            >
              <MapPin size={18} className="text-[#C9A86A]" />
            </div>

            <div>
              <p
                className={`text-2xl font-medium ${
                  darkMode ? "text-white" : "text-[#07111F]"
                }`}
              >
                AUR
              </p>

              <p
                className={`text-xs ${
                  darkMode ? "text-slate-500" : "text-slate-400"
                }`}
              >
                Airport code
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section
        id="airport-map"
        className={`px-4 py-12 transition-colors duration-500 sm:px-6 sm:py-16 md:py-20 ${
          darkMode ? "bg-[#07111F]" : "bg-[#F7F8FA]"
        }`}
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-8 flex flex-col justify-between gap-5 sm:mb-10 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9A86A] sm:text-xs">
                Interactive airport map
              </p>

              <h2
                className={`mt-3 text-3xl font-medium tracking-[-0.04em] sm:text-4xl ${
                  darkMode ? "text-white" : "text-[#07111F]"
                }`}
              >
                Explore Aurelia
              </h2>

              <p
                className={`mt-4 max-w-2xl text-sm leading-7 sm:text-base ${
                  darkMode ? "text-slate-400" : "text-slate-500"
                }`}
              >
                Select a terminal or search for a location to see
                where everything is and plan your route.
              </p>
            </div>

            <div
              className={`hidden items-center gap-2 text-sm md:flex ${
                darkMode ? "text-slate-500" : "text-slate-400"
              }`}
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Airport map operational
            </div>
          </div>

          {loading ? (
            <div
              className={`flex min-h-[500px] items-center justify-center rounded-[28px] border sm:min-h-[620px] sm:rounded-[32px] ${
                darkMode
                  ? "border-white/10 bg-[#0D1B2A]"
                  : "border-slate-200 bg-white"
              }`}
            >
              <div className="text-center">
                <div
                  className={`mx-auto h-8 w-8 animate-spin rounded-full border-2 ${
                    darkMode
                      ? "border-white/10 border-t-[#C9A86A]"
                      : "border-slate-200 border-t-[#07111F]"
                  }`}
                />

                <p
                  className={`mt-4 text-sm ${
                    darkMode ? "text-slate-500" : "text-slate-400"
                  }`}
                >
                  Loading airport map...
                </p>
              </div>
            </div>
          ) : (
            <AirportMap
              locations={locations}
              selectedLocationId={selectedLocation?.id}
              onSelectLocation={setSelectedLocation}
            />
          )}
        </div>
      </section>

      {/* Terminal explorer */}
      <section
        className={`border-y px-4 py-14 transition-colors duration-500 sm:px-6 sm:py-16 md:py-20 ${
          darkMode
            ? "border-white/10 bg-[#0D1B2A]/50"
            : "border-slate-200 bg-white"
        }`}
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9A86A] sm:text-xs">
                Terminals
              </p>

              <h2
                className={`mt-3 text-3xl font-medium tracking-[-0.04em] sm:text-4xl ${
                  darkMode ? "text-white" : "text-[#07111F]"
                }`}
              >
                Know where you're going.
              </h2>

              <p
                className={`mt-4 max-w-2xl text-sm leading-7 sm:text-base ${
                  darkMode ? "text-slate-400" : "text-slate-500"
                }`}
              >
                Explore each terminal before you arrive and
                understand what you'll find inside.
              </p>
            </div>

            <Link
              to="/terminals"
              className={`group inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                darkMode
                  ? "text-slate-300 hover:text-[#C9A86A]"
                  : "text-[#07111F] hover:text-[#C9A86A]"
              }`}
            >
              View all terminals
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:mt-10 lg:grid-cols-3">
            {terminalLocations.map((location) => (
              <button
                key={location.id}
                type="button"
                onClick={() => {
                  setSelectedLocation(location);

                  document
                    .getElementById("airport-map")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
                className={`group overflow-hidden rounded-[28px] border text-left transition-all duration-300 hover:-translate-y-1 ${
                  darkMode
                    ? "border-white/10 bg-[#0D1B2A] hover:border-[#C9A86A]/25 hover:bg-[#102235] hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)]"
                    : "border-slate-200 bg-[#F7F8FA] hover:border-[#C9A86A]/40 hover:bg-white hover:shadow-[0_25px_60px_rgba(7,17,31,0.07)]"
                }`}
              >
                <div className="relative h-36 overflow-hidden bg-[#07111F]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#07111F] via-[#0D1B2A] to-[#182B3F]" />

                  <div className="absolute -right-10 -top-20 h-56 w-56 rounded-full border border-[#C9A86A]/10 transition-transform duration-700 group-hover:scale-110" />

                  <div className="absolute bottom-5 left-6">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C9A86A]">
                      {location.terminal}
                    </p>

                    <h3 className="mt-1 text-xl font-medium text-white">
                      {location.name}
                    </h3>
                  </div>

                  <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                    <Building2
                      size={18}
                      className="text-[#C9A86A]"
                    />
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <p
                    className={`text-sm leading-6 ${
                      darkMode ? "text-slate-500" : "text-slate-500"
                    }`}
                  >
                    {location.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between gap-4">
                    <span
                      className={`text-xs ${
                        darkMode ? "text-slate-600" : "text-slate-400"
                      }`}
                    >
                      {location.floor}
                    </span>

                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-colors ${
                        darkMode
                          ? "text-slate-300 group-hover:text-[#C9A86A]"
                          : "text-[#07111F] group-hover:text-[#C9A86A]"
                      }`}
                    >
                      View on map
                      <ArrowRight
                        size={13}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Essentials */}
      <section
        className={`px-4 py-14 transition-colors duration-500 sm:px-6 sm:py-16 md:py-20 ${
          darkMode ? "bg-[#07111F]" : "bg-[#F7F8FA]"
        }`}
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9A86A] sm:text-xs">
              Airport essentials
            </p>

            <h2
              className={`mt-3 text-3xl font-medium tracking-[-0.04em] sm:text-4xl ${
                darkMode ? "text-white" : "text-[#07111F]"
              }`}
            >
              Everything within reach.
            </h2>

            <p
              className={`mt-4 text-sm leading-7 sm:text-base ${
                darkMode ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Find the services that matter most during your
              journey.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: ShieldCheck,
                title: "Security",
                description:
                  "Find screening areas and fast-track access.",
              },
              {
                icon: Luggage,
                title: "Baggage",
                description:
                  "Locate baggage claim and support services.",
              },
              {
                icon: Sparkles,
                title: "Lounges",
                description:
                  "Discover premium spaces to relax.",
              },
              {
                icon: Search,
                title: "Information",
                description:
                  "Find assistance throughout the airport.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`group rounded-[24px] border p-5 transition-all duration-300 hover:-translate-y-1 sm:p-6 ${
                    darkMode
                      ? "border-white/10 bg-[#0D1B2A] hover:border-[#C9A86A]/25 hover:bg-[#102235] hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)]"
                      : "border-slate-200 bg-white hover:border-[#C9A86A]/40 hover:shadow-[0_20px_50px_rgba(7,17,31,0.06)]"
                  }`}
                >
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105 ${
                      darkMode ? "bg-[#C9A86A]/10" : "bg-[#07111F]"
                    }`}
                  >
                    <Icon
                      size={19}
                      className="text-[#C9A86A]"
                    />
                  </div>

                  <h3
                    className={`mt-6 font-semibold ${
                      darkMode ? "text-white" : "text-[#07111F]"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`mt-2 text-sm leading-6 ${
                      darkMode ? "text-slate-500" : "text-slate-500"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured locations */}
      <section
        className={`border-t px-4 py-14 transition-colors duration-500 sm:px-6 sm:py-16 md:py-20 ${
          darkMode
            ? "border-white/10 bg-[#0D1B2A]/50"
            : "border-slate-200 bg-white"
        }`}
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9A86A] sm:text-xs">
                Featured locations
              </p>

              <h2
                className={`mt-3 text-3xl font-medium tracking-[-0.04em] sm:text-4xl ${
                  darkMode ? "text-white" : "text-[#07111F]"
                }`}
              >
                Places worth knowing.
              </h2>
            </div>

            <span
              className={`text-sm ${
                darkMode ? "text-slate-500" : "text-slate-400"
              }`}
            >
              {featuredLocations.length} highlighted locations
            </span>
          </div>

          <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
            {featuredLocations.map((location) => (
              <button
                key={location.id}
                type="button"
                onClick={() => {
                  setSelectedLocation(location);

                  document
                    .getElementById("airport-map")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
                className={`group flex items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-300 hover:-translate-y-0.5 ${
                  darkMode
                    ? "border-white/10 bg-[#0D1B2A] hover:border-[#C9A86A]/20 hover:bg-[#102235]"
                    : "border-slate-200 bg-[#F7F8FA] hover:border-[#C9A86A]/30 hover:bg-white hover:shadow-md"
                }`}
              >
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                    darkMode ? "bg-[#C9A86A]/10" : "bg-[#07111F]"
                  }`}
                >
                  <MapPin
                    size={17}
                    className="text-[#C9A86A]"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p
                    className={`truncate text-sm font-semibold ${
                      darkMode ? "text-white" : "text-[#07111F]"
                    }`}
                  >
                    {location.name}
                  </p>

                  <p
                    className={`mt-1 text-xs ${
                      darkMode ? "text-slate-600" : "text-slate-400"
                    }`}
                  >
                    {location.terminal} · {location.zone}
                  </p>
                </div>

                <ArrowRight
                  size={15}
                  className={`shrink-0 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#C9A86A] ${
                    darkMode ? "text-slate-600" : "text-slate-300"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[28px] bg-[#07111F] p-7 sm:rounded-[32px] sm:p-10 md:p-12 lg:p-14">
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-[#C9A86A]/10" />
          <div className="pointer-events-none absolute -bottom-24 right-1/3 h-48 w-48 rounded-full bg-[#C9A86A]/5 blur-3xl" />

          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center lg:gap-10">
            <div className="max-w-2xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9A86A] sm:text-xs">
                Plan your journey
              </p>

              <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl">
                Know before you go.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                Check your flight, explore your terminal, and
                discover everything Aurelia has to offer.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/flights"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#07111F] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C9A86A]"
              >
                Check flights
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
              >
                Explore services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AirportPage;