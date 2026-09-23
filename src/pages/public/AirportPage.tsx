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

function AirportPage() {
  const { locations, loading } = useAirportLocations();

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
    <main className="min-h-screen bg-[#F7F8FA]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#07111F] px-6 pb-16 pt-10 text-white md:pb-20 md:pt-14">
        {/* Decorative glow */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#C9A86A]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[#C9A86A]">
              <Compass size={14} />
              Explore Aurelia
            </div>

            <h1 className="mt-7 text-5xl font-semibold tracking-[-0.05em] sm:text-6xl md:text-7xl">
              Find your way
              <br />
              <span className="text-slate-400">with confidence.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              Explore terminals, gates, lounges, dining, shopping,
              baggage services, and everything you need to navigate
              Aurelia International Airport.
            </p>
          </div>

          {/* Quick search */}
          <div className="mt-10 max-w-3xl">
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-2 backdrop-blur-xl">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                <Search size={19} className="text-[#C9A86A]" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Search airport
                </p>

                <p className="mt-1 truncate text-sm text-slate-300">
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
                className="hidden rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#07111F] transition hover:bg-[#C9A86A] sm:block"
              >
                Explore map
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <section className="border-b border-slate-200 bg-white px-6">
        <div className="mx-auto grid max-w-7xl divide-y divide-slate-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          <div className="flex items-center gap-4 px-0 py-6 sm:px-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100">
              <Building2 size={18} className="text-[#07111F]" />
            </div>

            <div>
              <p className="text-2xl font-semibold text-[#07111F]">
                3
              </p>
              <p className="text-xs text-slate-400">
                Passenger terminals
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 px-0 py-6 sm:px-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100">
              <Plane size={18} className="text-[#07111F]" />
            </div>

            <div>
              <p className="text-2xl font-semibold text-[#07111F]">
                80
              </p>
              <p className="text-xs text-slate-400">
                Departure & arrival gates
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 px-0 py-6 sm:px-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100">
              <Clock3 size={18} className="text-[#07111F]" />
            </div>

            <div>
              <p className="text-2xl font-semibold text-[#07111F]">
                24/7
              </p>
              <p className="text-xs text-slate-400">
                Airport operations
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 px-0 py-6 sm:px-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100">
              <MapPin size={18} className="text-[#07111F]" />
            </div>

            <div>
              <p className="text-2xl font-semibold text-[#07111F]">
                AUR
              </p>
              <p className="text-xs text-slate-400">
                Airport code
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section
        id="airport-map"
        className="px-6 py-16 md:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C9A86A]">
                Interactive airport map
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#07111F] md:text-4xl">
                Explore Aurelia
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-500">
                Select a terminal or search for a location to see
                where everything is and plan your route.
              </p>
            </div>

            <div className="hidden items-center gap-2 text-sm text-slate-400 md:flex">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Airport map operational
            </div>
          </div>

          {loading ? (
            <div className="flex min-h-[620px] items-center justify-center rounded-[32px] border border-slate-200 bg-white">
              <div className="text-center">
                <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-slate-200 border-t-[#07111F]" />

                <p className="mt-4 text-sm text-slate-400">
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
      <section className="border-y border-slate-200 bg-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C9A86A]">
                Terminals
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#07111F] md:text-4xl">
                Know where you're going.
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-500">
                Explore each terminal before you arrive and
                understand what you'll find inside.
              </p>
            </div>

            <Link
              to="/terminals"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#07111F] transition hover:text-[#C9A86A]"
            >
              View all terminals
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {terminalLocations.map((location) => (
              <button
                key={location.id}
                type="button"
                onClick={() => setSelectedLocation(location)}
                className="group overflow-hidden rounded-[28px] border border-slate-200 bg-[#F7F8FA] text-left transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50"
              >
                <div className="relative h-36 overflow-hidden bg-[#07111F]">
                  <div className="absolute inset-0 opacity-40">
                    <div className="absolute -right-10 -top-20 h-56 w-56 rounded-full bg-[#C9A86A]/20 blur-3xl" />
                  </div>

                  <div className="absolute bottom-5 left-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C9A86A]">
                      {location.terminal}
                    </p>

                    <h3 className="mt-1 text-xl font-semibold text-white">
                      {location.name}
                    </h3>
                  </div>

                  <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    <Building2
                      size={18}
                      className="text-[#C9A86A]"
                    />
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm leading-6 text-slate-500">
                    {location.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs text-slate-400">
                      {location.floor}
                    </span>

                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#07111F] transition group-hover:text-[#C9A86A]">
                      View on map
                      <ArrowRight size={13} />
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Essentials */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C9A86A]">
              Airport essentials
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#07111F] md:text-4xl">
              Everything within reach.
            </h2>

            <p className="mt-4 leading-7 text-slate-500">
              Find the services that matter most during your
              journey.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
                  className="rounded-[24px] border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/40"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#07111F]">
                    <Icon
                      size={19}
                      className="text-[#C9A86A]"
                    />
                  </div>

                  <h3 className="mt-6 font-semibold text-[#07111F]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured locations */}
      <section className="border-t border-slate-200 bg-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C9A86A]">
                Featured locations
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#07111F] md:text-4xl">
                Places worth knowing.
              </h2>
            </div>

            <span className="text-sm text-slate-400">
              {featuredLocations.length} highlighted locations
            </span>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-[#F7F8FA] p-4 text-left transition hover:bg-white hover:shadow-md"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#07111F]">
                  <MapPin
                    size={17}
                    className="text-[#C9A86A]"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-[#07111F]">
                    {location.name}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    {location.terminal} · {location.zone}
                  </p>
                </div>

                <ArrowRight
                  size={15}
                  className="shrink-0 text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#07111F]"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#07111F] p-8 md:p-12 lg:p-14">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C9A86A]">
                Plan your journey
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Know before you go.
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                Check your flight, explore your terminal, and
                discover everything Aurelia has to offer.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/flights"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#07111F] transition hover:bg-[#C9A86A]"
              >
                Check flights
                <ArrowRight size={16} />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
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