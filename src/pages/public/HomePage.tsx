import { Link } from "react-router-dom";
import { ArrowRight, Plane, Search } from "lucide-react";

import FlightBoard from "../../components/flights/FlightBoard";
import { useFlights } from "../../hooks/useFlights";

function App() {
  const { flights, loading } = useFlights();

  return (
    <main className="min-h-screen bg-[#07111F] text-white">
      {/* Navigation */}
      <header className="absolute left-0 right-0 top-0 z-50">
        <div className="mx-auto flex h-24 max-w-[1400px] items-center justify-between px-6 lg:px-10">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C9A86A]/50">
              <Plane
                size={18}
                strokeWidth={1.5}
                className="text-[#C9A86A]"
              />
            </div>

            <div>
              <p className="text-[15px] font-semibold tracking-[0.22em]">
                AURELIA
              </p>

              <p className="text-[9px] tracking-[0.35em] text-white/50">
                INTERNATIONAL AIRPORT
              </p>
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            <a
              href="#"
              className="text-sm text-white/80 transition hover:text-white"
            >
              Flights
            </a>

            <a
              href="Terminals"
              className="text-sm text-white/80 transition hover:text-white"
            >
              Terminals
            </a>

            <a
              href="Services"
              className="text-sm text-white/80 transition hover:text-white"
            >
              Services
            </a>

            <a
              href="#"
              className="text-sm text-white/80 transition hover:text-white"
            >
              Experience
            </a>

            <a
              href="#"
              className="text-sm text-white/80 transition hover:text-white"
            >
              About
            </a>
          </nav>

          {/* Passenger portal */}
          <button className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm backdrop-blur-md transition hover:bg-white/10 md:flex">
            Passenger Portal
            <ArrowRight size={15} />
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-[760px] items-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2200&q=90')",
          }}
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-[#07111F]/55" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#07111F] via-[#07111F]/70 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-transparent to-[#07111F]/30" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pt-32 lg:px-10">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-medium tracking-[0.35em] text-[#C9A86A]">
              AURELIA INTERNATIONAL · AUR
            </p>

            <h1 className="text-5xl font-medium leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
              Your journey
              <br />
              <span className="text-white/60">starts here.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-white/65 lg:text-lg">
              Discover a seamless airport experience designed around the way
              you travel. From departure to arrival, everything is within
              reach.
            </p>

            {/* Search */}
            <div className="mt-10 flex max-w-2xl flex-col gap-3 rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-xl sm:flex-row">
              <div className="flex flex-1 items-center gap-3 rounded-xl bg-white px-4 py-3 text-[#07111F]">
                <Search size={18} />

                <input
                  type="text"
                  placeholder="Search flights, destinations..."
                  className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                />
              </div>

              <button className="flex items-center justify-center gap-2 rounded-xl bg-[#C9A86A] px-7 py-3 text-sm font-medium text-[#07111F] transition hover:bg-[#d7ba83]">
                Search
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-[#07111F]/50 backdrop-blur-xl">
          <div className="mx-auto grid max-w-[1400px] grid-cols-2 divide-x divide-white/10 px-6 sm:grid-cols-4 lg:px-10">
            <div className="px-4 py-6 sm:px-6">
              <p className="text-2xl font-medium">186</p>
              <p className="mt-1 text-xs text-white/45">Destinations</p>
            </div>

            <div className="px-4 py-6 sm:px-6">
              <p className="text-2xl font-medium">42</p>
              <p className="mt-1 text-xs text-white/45">Airlines</p>
            </div>

            <div className="px-4 py-6 sm:px-6">
              <p className="text-2xl font-medium">24/7</p>
              <p className="mt-1 text-xs text-white/45">
                Airport Operations
              </p>
            </div>

            <div className="px-4 py-6 sm:px-6">
              <p className="text-2xl font-medium">32M+</p>
              <p className="mt-1 text-xs text-white/45">
                Annual Passengers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Flight Information */}
      <section className="bg-[#F7F8FA] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />

                <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                  Live flight information
                </span>
              </div>

              <h2 className="max-w-xl text-4xl font-medium tracking-[-0.035em] text-[#07111F] lg:text-5xl">
                Know where you're going.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500">
                Stay up to date with the latest arrival and departure
                information from Aurelia International Airport.
              </p>
            </div>

            <Link
              to="/flights"
              className="flex w-fit items-center gap-2 text-sm font-medium text-[#07111F] transition hover:text-[#C9A86A]"
            >
              View all flights
              <ArrowRight size={16} />
            </Link>
          </div>

          {loading ? (
            <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center text-sm text-slate-400">
              Loading flight information...
            </div>
          ) : (
            <FlightBoard flights={flights.slice(0, 5)} />
          )}
        </div>
      </section>
    </main>
  );
}

export default App;