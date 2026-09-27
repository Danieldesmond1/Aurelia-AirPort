import {
  ArrowRight,
  CarFront,
  Clock3,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

import ParkingCard from "../../components/airport/ParkingCard";
import { useParking } from "../../hooks/useParking";
import { useTheme } from "../../context/ThemeContext";

export default function ParkingPage() {
  const { parking, loading } = useParking();
  const { theme } = useTheme();

  const isDark = theme === "dark";

  const featuredParking = parking.filter(
    (option) => option.featured
  );

  return (
    <main
      className={`min-h-screen transition-colors duration-500 ${
        isDark ? "bg-[#07111F] text-white" : "bg-white text-[#111827]"
      }`}
    >
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#07111F] text-white">
        <div className="absolute inset-0">
          <div className="absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-[#C9A86A]/10 blur-[130px]" />

          <div className="absolute -right-40 bottom-0 h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-[150px]" />

          <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.015] blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-32 lg:pt-28">
          <div className="max-w-4xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9A86A]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C9A86A] sm:text-[11px]">
                Aurelia Airport Parking
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.055em] sm:text-6xl lg:text-8xl lg:leading-[0.95]">
              Park with
              <br />
              confidence.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:mt-8 sm:text-lg">
              From quick terminal visits to extended journeys,
              Aurelia offers parking options designed around the
              way you travel.
            </p>
          </div>

          <div className="mt-14 grid max-w-4xl grid-cols-2 border-t border-white/10 sm:mt-16 sm:grid-cols-4">
            <div className="border-r border-white/10 py-5 pr-5 sm:py-6 sm:pr-6">
              <p className="text-2xl font-semibold">5</p>

              <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-slate-400 sm:text-xs">
                Parking options
              </p>
            </div>

            <div className="border-r border-white/10 px-5 py-5 sm:px-6 sm:py-6">
              <p className="text-2xl font-semibold">10K+</p>

              <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-slate-400 sm:text-xs">
                Parking spaces
              </p>
            </div>

            <div className="border-r border-white/10 py-5 pl-5 pr-5 sm:px-6 sm:py-6">
              <p className="text-2xl font-semibold">24/7</p>

              <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-slate-400 sm:text-xs">
                Access
              </p>
            </div>

            <div className="py-5 pl-5 sm:py-6 sm:pl-6">
              <p className="text-2xl font-semibold">3</p>

              <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-slate-400 sm:text-xs">
                Terminal areas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARKING OPTIONS */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-32">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9A86A] sm:text-[11px]">
              Find your space
            </p>

            <h2
              className={`mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl ${
                isDark ? "text-white" : "text-slate-950"
              }`}
            >
              Parking for every journey.
            </h2>

            <p
              className={`mt-5 max-w-xl text-base leading-7 ${
                isDark ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Choose the parking experience that fits your trip,
              from short visits to long stays and premium service.
            </p>
          </div>

          <div
            className={`text-sm ${
              isDark ? "text-slate-500" : "text-slate-400"
            }`}
          >
            {loading
              ? "Loading parking..."
              : `${featuredParking.length} parking options`}
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2 xl:grid-cols-3">
          {loading
            ? Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className={`h-[520px] animate-pulse rounded-[28px] ${
                    isDark ? "bg-white/[0.06]" : "bg-slate-100"
                  }`}
                />
              ))
            : featuredParking.map((option) => (
                <ParkingCard
                  key={option.id}
                  option={option}
                />
              ))}
        </div>
      </section>

      {/* PARKING EXPERIENCE */}
      <section
        className={`transition-colors duration-500 ${
          isDark ? "bg-[#0D1B2A]" : "bg-[#F7F8FA]"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9A86A] sm:text-[11px]">
                Designed around you
              </p>

              <h2
                className={`mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl ${
                  isDark ? "text-white" : "text-slate-950"
                }`}
              >
                Leave your car.
                <br />
                Keep your peace of mind.
              </h2>

              <p
                className={`mt-6 max-w-lg text-base leading-7 ${
                  isDark ? "text-slate-400" : "text-slate-500"
                }`}
              >
                Every Aurelia parking facility is positioned to
                make the transition from your vehicle to the
                terminal as smooth as possible.
              </p>

              <Link
                to="/airport"
                className={`mt-8 inline-flex items-center gap-3 text-sm font-semibold transition-colors ${
                  isDark
                    ? "text-white hover:text-[#C9A86A]"
                    : "text-slate-950 hover:text-[#C9A86A]"
                }`}
              >
                Find parking on the airport map
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: ShieldCheck,
                  title: "Secure facilities",
                  description:
                    "Dedicated parking areas with monitored access and regular security patrols.",
                },
                {
                  icon: MapPin,
                  title: "Close to the terminal",
                  description:
                    "Choose from spaces within minutes of the passenger terminals.",
                },
                {
                  icon: Clock3,
                  title: "24-hour access",
                  description:
                    "Flexible access for early departures and late arrivals.",
                },
                {
                  icon: CarFront,
                  title: "Multiple experiences",
                  description:
                    "Short stay, long stay, premium and valet options for different journeys.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className={`group rounded-[28px] border p-7 transition-all duration-500 hover:-translate-y-1 ${
                      isDark
                        ? "border-white/[0.07] bg-[#07111F] hover:border-white/[0.12] hover:shadow-[0_24px_70px_rgba(0,0,0,0.22)]"
                        : "border-slate-200/80 bg-white hover:border-slate-300 hover:shadow-[0_24px_70px_rgba(15,23,42,0.08)]"
                    }`}
                  >
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300 ${
                        isDark
                          ? "bg-white/10 text-white group-hover:bg-[#C9A86A] group-hover:text-[#07111F]"
                          : "bg-slate-950 text-white group-hover:bg-[#C9A86A] group-hover:text-slate-950"
                      }`}
                    >
                      <Icon size={22} strokeWidth={1.7} />
                    </div>

                    <h3
                      className={`mt-8 text-lg font-semibold ${
                        isDark ? "text-white" : "text-slate-950"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`mt-3 text-sm leading-6 ${
                        isDark ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* PARKING GUIDE */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-32">
        <div className="max-w-2xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9A86A] sm:text-[11px]">
            Parking guide
          </p>

          <h2
            className={`mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl ${
              isDark ? "text-white" : "text-slate-950"
            }`}
          >
            Know where to go.
          </h2>

          <p
            className={`mt-5 text-base leading-7 ${
              isDark ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Parking is connected directly to Aurelia's terminal
            network, with clear routes from each facility.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[32px] bg-[#07111F] text-white sm:mt-14">
          <div className="grid lg:grid-cols-3">
            {[
              {
                code: "T1",
                title: "Terminal 1",
                description:
                  "International departures and arrivals.",
                parking:
                  "Short Stay · Premium · Valet",
              },
              {
                code: "T2",
                title: "Terminal 2",
                description:
                  "Regional passenger services.",
                parking:
                  "Short Stay · Long Stay · Accessible",
              },
              {
                code: "T3",
                title: "Terminal 3",
                description:
                  "Premium and long-haul operations.",
                parking:
                  "Short Stay · Premium · Valet",
              },
            ].map((terminal, index) => (
              <div
                key={terminal.code}
                className={`group p-8 transition-colors duration-500 hover:bg-white/[0.025] sm:p-10 ${
                  index < 2
                    ? "border-b border-white/10 lg:border-b-0 lg:border-r"
                    : ""
                }`}
              >
                <p className="text-5xl font-semibold tracking-[-0.05em] text-white">
                  {terminal.code}
                </p>

                <h3 className="mt-10 text-xl font-semibold">
                  {terminal.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {terminal.description}
                </p>

                <div className="mt-8 border-t border-white/10 pt-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500">
                    Available parking
                  </p>

                  <p className="mt-2 text-sm text-slate-300">
                    {terminal.parking}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK INFO */}
      <section
        className={`border-t transition-colors duration-500 ${
          isDark
            ? "border-white/[0.08]"
            : "border-slate-200"
        }`}
      >
        <div
          className={`mx-auto grid max-w-7xl divide-y px-6 lg:grid-cols-3 lg:divide-x lg:divide-y-0 lg:px-8 ${
            isDark
              ? "divide-white/[0.08]"
              : "divide-slate-200"
          }`}
        >
          <div className="py-10 lg:pr-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#C9A86A]">
              Short stay
            </p>

            <h3
              className={`mt-3 font-semibold ${
                isDark ? "text-white" : "text-slate-950"
              }`}
            >
              Ideal for pickups
            </h3>

            <p
              className={`mt-2 text-sm leading-6 ${
                isDark ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Convenient terminal parking when you only need a
              few hours.
            </p>
          </div>

          <div className="py-10 lg:px-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#C9A86A]">
              Long stay
            </p>

            <h3
              className={`mt-3 font-semibold ${
                isDark ? "text-white" : "text-slate-950"
              }`}
            >
              Better for extended trips
            </h3>

            <p
              className={`mt-2 text-sm leading-6 ${
                isDark ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Leave your vehicle securely while you travel.
            </p>
          </div>

          <div className="py-10 lg:pl-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#C9A86A]">
              Premium
            </p>

            <h3
              className={`mt-3 font-semibold ${
                isDark ? "text-white" : "text-slate-950"
              }`}
            >
              Closest to the terminal
            </h3>

            <p
              className={`mt-2 text-sm leading-6 ${
                isDark ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Reserved spaces for travelers who value maximum
              convenience.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#07111F]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9A86A] sm:text-[11px]">
                Continue planning
              </p>

              <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                Need directions to your parking area?
              </h2>
            </div>

            <Link
              to="/airport"
              className="inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-[#C9A86A] hover:shadow-[0_12px_40px_rgba(201,168,106,0.18)]"
            >
              Open airport map
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}