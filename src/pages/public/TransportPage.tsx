import {
  ArrowRight,
  Car,
  Clock3,
  MapPin,
  Navigation,
  TrainFront,
} from "lucide-react";

import { Link } from "react-router-dom";

import TransportCard from "../../components/airport/TransportCard";
import { useTransport } from "../../hooks/useTransport";
import { useTheme } from "../../context/ThemeContext";

export default function TransportPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const { transport, loading } = useTransport();

  const featuredTransport = transport.filter(
    (option) => option.featured
  );

  return (
    <main
      className={`min-h-screen transition-colors duration-500 ${
        isDark
          ? "bg-[#07111F] text-white"
          : "bg-white text-[#07111F]"
      }`}
    >
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#07111F] text-white">
        {/* Background atmosphere */}
        <div className="absolute inset-0">
          <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#C9A86A]/10 blur-[120px]" />

          <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[140px]" />

          <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.015] blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-5 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:px-10 lg:pb-32 lg:pt-28">
          <div className="max-w-4xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9A86A]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C9A86A]">
                Aurelia Ground Transport
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
              Get where
              <br />
              <span className="text-white/45">
                you're going.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              From high-speed rail connections to terminal
              shuttles, taxis and car rentals, getting to and
              from Aurelia is designed to be simple.
            </p>
          </div>

          {/* Hero stats */}
          <div className="mt-16 grid max-w-4xl grid-cols-2 border-t border-white/10 sm:grid-cols-4">
            <div className="border-r border-white/10 py-6 pr-5 sm:pr-6">
              <p className="text-2xl font-semibold">5</p>

              <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-slate-400 sm:text-xs">
                Transport options
              </p>
            </div>

            <div className="border-r border-white/10 px-5 py-6 sm:px-6">
              <p className="text-2xl font-semibold">
                24/7
              </p>

              <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-slate-400 sm:text-xs">
                Airport access
              </p>
            </div>

            <div className="border-r border-white/10 py-6 pl-5 sm:px-6">
              <p className="text-2xl font-semibold">
                28 min
              </p>

              <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-slate-400 sm:text-xs">
                City centre
              </p>
            </div>

            <div className="py-6 pl-5 sm:pl-6">
              <p className="text-2xl font-semibold">3</p>

              <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-slate-400 sm:text-xs">
                Terminal hubs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSPORT OPTIONS */}
      <section
        className={`transition-colors duration-500 ${
          isDark ? "bg-[#07111F]" : "bg-white"
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9A86A]">
                Choose your connection
              </p>

              <h2
                className={`mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl ${
                  isDark
                    ? "text-white"
                    : "text-slate-950"
                }`}
              >
                Transport made simple.
              </h2>

              <p
                className={`mt-5 max-w-xl text-base leading-7 ${
                  isDark
                    ? "text-white/40"
                    : "text-slate-500"
                }`}
              >
                Everything you need to plan the final part of
                your journey, from arrival to the city and back
                again.
              </p>
            </div>

            <div
              className={`text-sm ${
                isDark
                  ? "text-white/30"
                  : "text-slate-400"
              }`}
            >
              {loading
                ? "Loading transport..."
                : `${featuredTransport.length} services available`}
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:mt-14 xl:grid-cols-3">
            {loading
              ? Array.from({ length: 5 }).map((_, index) => (
                  <div
                    key={index}
                    className={`h-[430px] animate-pulse rounded-[28px] ${
                      isDark
                        ? "bg-white/[0.05]"
                        : "bg-slate-100"
                    }`}
                  />
                ))
              : featuredTransport.map((option) => (
                  <TransportCard
                    key={option.id}
                    option={option}
                  />
                ))}
          </div>
        </div>
      </section>

      {/* PLAN YOUR JOURNEY */}
      <section
        className={`transition-colors duration-500 ${
          isDark
            ? "bg-[#0D1B2A]"
            : "bg-[#F7F8FA]"
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9A86A]">
                Plan your journey
              </p>

              <h2
                className={`mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl ${
                  isDark
                    ? "text-white"
                    : "text-slate-950"
                }`}
              >
                From the runway to the city.
              </h2>

              <p
                className={`mt-6 max-w-lg text-base leading-7 ${
                  isDark
                    ? "text-white/40"
                    : "text-slate-500"
                }`}
              >
                Aurelia connects directly to the city's major
                transport network, making the journey beyond
                the terminal just as straightforward as the
                journey through it.
              </p>

              <Link
                to="/airport"
                className={`mt-8 inline-flex items-center gap-3 text-sm font-semibold transition-colors ${
                  isDark
                    ? "text-white hover:text-[#C9A86A]"
                    : "text-slate-950 hover:text-[#C9A86A]"
                }`}
              >
                View airport map
                <ArrowRight size={17} />
              </Link>
            </div>

            {/* Journey card */}
            <div className="relative overflow-hidden rounded-[32px] bg-[#07111F] p-7 text-white sm:p-10">
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#C9A86A]/10 blur-3xl" />

              <div className="relative flex items-start justify-between gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                  <TrainFront
                    size={25}
                    strokeWidth={1.7}
                  />
                </div>

                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-emerald-300 sm:text-[10px]">
                  Recommended connection
                </span>
              </div>

              <div className="relative mt-12">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Aurelia Airport
                </p>

                <div className="my-4 flex items-center gap-4">
                  <div className="h-3 w-3 shrink-0 rounded-full bg-[#C9A86A]" />

                  <div className="h-px flex-1 bg-white/15" />

                  <div className="h-3 w-3 shrink-0 rounded-full border border-white/50" />
                </div>

                <div className="flex justify-between gap-6">
                  <div>
                    <p className="text-xl font-semibold">
                      AUR
                    </p>

                    <p className="mt-1 text-sm text-slate-400">
                      Airport
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-xl font-semibold">
                      CITY
                    </p>

                    <p className="mt-1 text-sm text-slate-400">
                      Central Station
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative mt-10 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-slate-500">
                    Journey time
                  </p>

                  <p className="mt-2 text-lg font-semibold">
                    28 minutes
                  </p>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-slate-500">
                    From
                  </p>

                  <p className="mt-2 text-lg font-semibold">
                    $12
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHERE TO FIND US */}
      <section
        className={`transition-colors duration-500 ${
          isDark ? "bg-[#07111F]" : "bg-white"
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9A86A]">
              Where to find us
            </p>

            <h2
              className={`mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl ${
                isDark
                  ? "text-white"
                  : "text-slate-950"
              }`}
            >
              Three terminals.
              <br />
              <span
                className={
                  isDark
                    ? "text-white/35"
                    : "text-slate-400"
                }
              >
                One connected airport.
              </span>
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3 lg:mt-14">
            {[
              {
                terminal: "T1",
                title: "Terminal 1",
                location: "International",
                detail:
                  "Ground Transport Hub · Level 1",
              },
              {
                terminal: "T2",
                title: "Terminal 2",
                location: "Regional",
                detail:
                  "Ground Transport Hub · Arrivals",
              },
              {
                terminal: "T3",
                title: "Terminal 3",
                location: "Premium",
                detail:
                  "Ground Transport Hub · Level 1",
              },
            ].map((terminal) => (
              <div
                key={terminal.terminal}
                className={`group rounded-[28px] border p-7 transition-all duration-500 hover:-translate-y-1 ${
                  isDark
                    ? "border-white/10 bg-[#0D1B2A] hover:border-white/20 hover:shadow-2xl hover:shadow-black/20"
                    : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-[0_24px_70px_rgba(15,23,42,0.08)]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-5xl font-semibold tracking-[-0.05em] ${
                      isDark
                        ? "text-white"
                        : "text-slate-950"
                    }`}
                  >
                    {terminal.terminal}
                  </span>

                  <MapPin
                    size={21}
                    className={`transition-colors ${
                      isDark
                        ? "text-white/20 group-hover:text-[#C9A86A]"
                        : "text-slate-300 group-hover:text-[#C9A86A]"
                    }`}
                  />
                </div>

                <h3
                  className={`mt-10 text-xl font-semibold ${
                    isDark
                      ? "text-white"
                      : "text-slate-950"
                  }`}
                >
                  {terminal.title}
                </h3>

                <p className="mt-2 text-sm font-medium text-[#C9A86A]">
                  {terminal.location}
                </p>

                <p
                  className={`mt-4 text-sm leading-6 ${
                    isDark
                      ? "text-white/40"
                      : "text-slate-500"
                  }`}
                >
                  {terminal.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK INFO */}
      <section
        className={`border-t transition-colors duration-500 ${
          isDark
            ? "border-white/10 bg-[#07111F]"
            : "border-slate-200 bg-white"
        }`}
      >
        <div
          className={`mx-auto grid max-w-[1400px] divide-y px-5 sm:px-6 lg:grid-cols-3 lg:divide-x lg:divide-y-0 lg:px-10 ${
            isDark
              ? "divide-white/10"
              : "divide-slate-200"
          }`}
        >
          <div className="flex gap-5 py-10 lg:pr-10">
            <Clock3
              size={22}
              className="mt-1 shrink-0 text-[#C9A86A]"
            />

            <div>
              <h3
                className={`font-semibold ${
                  isDark
                    ? "text-white"
                    : "text-slate-950"
                }`}
              >
                24-hour connections
              </h3>

              <p
                className={`mt-2 text-sm leading-6 ${
                  isDark
                    ? "text-white/40"
                    : "text-slate-500"
                }`}
              >
                Taxi, shuttle and ride pickup services remain
                available around the clock.
              </p>
            </div>
          </div>

          <div className="flex gap-5 py-10 lg:px-10">
            <Navigation
              size={22}
              className="mt-1 shrink-0 text-[#C9A86A]"
            />

            <div>
              <h3
                className={`font-semibold ${
                  isDark
                    ? "text-white"
                    : "text-slate-950"
                }`}
              >
                Easy to find
              </h3>

              <p
                className={`mt-2 text-sm leading-6 ${
                  isDark
                    ? "text-white/40"
                    : "text-slate-500"
                }`}
              >
                Clearly marked transport hubs are located at
                every passenger terminal.
              </p>
            </div>
          </div>

          <div className="flex gap-5 py-10 lg:pl-10">
            <Car
              size={22}
              className="mt-1 shrink-0 text-[#C9A86A]"
            />

            <div>
              <h3
                className={`font-semibold ${
                  isDark
                    ? "text-white"
                    : "text-slate-950"
                }`}
              >
                More ways to travel
              </h3>

              <p
                className={`mt-2 text-sm leading-6 ${
                  isDark
                    ? "text-white/40"
                    : "text-slate-500"
                }`}
              >
                Compare rail, taxi, shuttle, rental and ride
                pickup options before you arrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#07111F]">
        <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-6 sm:py-20 lg:px-10">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9A86A]">
                Continue planning
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                Need to know your way around?
              </h2>
            </div>

            <Link
              to="/airport"
              className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all hover:bg-[#C9A86A]"
            >
              Explore airport map
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}