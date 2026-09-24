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

export default function ParkingPage() {
  const { parking, loading } = useParking();

  const featuredParking = parking.filter(
    (option) => option.featured
  );

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#07111F] text-white">
        <div className="absolute inset-0">
          <div className="absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-[#C9A86A]/10 blur-[130px]" />

          <div className="absolute -right-40 bottom-0 h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-[150px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-8 lg:pb-32 lg:pt-28">
          <div className="max-w-4xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9A86A]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C9A86A]">
                Aurelia Airport Parking
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.055em] sm:text-6xl lg:text-8xl lg:leading-[0.95]">
              Park with
              <br />
              confidence.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              From quick terminal visits to extended journeys,
              Aurelia offers parking options designed around the
              way you travel.
            </p>
          </div>

          <div className="mt-16 grid max-w-4xl grid-cols-2 border-t border-white/10 sm:grid-cols-4">
            <div className="border-r border-white/10 py-6 pr-6">
              <p className="text-2xl font-semibold">5</p>

              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-slate-400">
                Parking options
              </p>
            </div>

            <div className="border-r border-white/10 px-6 py-6">
              <p className="text-2xl font-semibold">10K+</p>

              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-slate-400">
                Parking spaces
              </p>
            </div>

            <div className="border-r border-white/10 px-6 py-6">
              <p className="text-2xl font-semibold">24/7</p>

              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-slate-400">
                Access
              </p>
            </div>

            <div className="py-6 pl-6">
              <p className="text-2xl font-semibold">3</p>

              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-slate-400">
                Terminal areas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARKING OPTIONS */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9A86A]">
              Find your space
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
              Parking for every journey.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-500">
              Choose the parking experience that fits your trip,
              from short visits to long stays and premium service.
            </p>
          </div>

          <div className="text-sm text-slate-400">
            {loading
              ? "Loading parking..."
              : `${featuredParking.length} parking options`}
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {loading
            ? Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="h-[520px] animate-pulse rounded-[28px] bg-slate-100"
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
      <section className="bg-[#F7F8FA]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9A86A]">
                Designed around you
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
                Leave your car.
                <br />
                Keep your peace of mind.
              </h2>

              <p className="mt-6 max-w-lg text-base leading-7 text-slate-500">
                Every Aurelia parking facility is positioned to
                make the transition from your vehicle to the
                terminal as smooth as possible.
              </p>

              <Link
                to="/airport"
                className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-slate-950 transition-colors hover:text-[#C9A86A]"
              >
                Find parking on the airport map
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] bg-white p-7 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <ShieldCheck
                    size={22}
                    strokeWidth={1.7}
                  />
                </div>

                <h3 className="mt-8 text-lg font-semibold text-slate-950">
                  Secure facilities
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Dedicated parking areas with monitored access
                  and regular security patrols.
                </p>
              </div>

              <div className="rounded-[28px] bg-white p-7 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <MapPin
                    size={22}
                    strokeWidth={1.7}
                  />
                </div>

                <h3 className="mt-8 text-lg font-semibold text-slate-950">
                  Close to the terminal
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Choose from spaces within minutes of the
                  passenger terminals.
                </p>
              </div>

              <div className="rounded-[28px] bg-white p-7 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <Clock3
                    size={22}
                    strokeWidth={1.7}
                  />
                </div>

                <h3 className="mt-8 text-lg font-semibold text-slate-950">
                  24-hour access
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Flexible access for early departures and late
                  arrivals.
                </p>
              </div>

              <div className="rounded-[28px] bg-white p-7 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <CarFront
                    size={22}
                    strokeWidth={1.7}
                  />
                </div>

                <h3 className="mt-8 text-lg font-semibold text-slate-950">
                  Multiple experiences
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Short stay, long stay, premium and valet
                  options for different journeys.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARKING GUIDE */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9A86A]">
            Parking guide
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
            Know where to go.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-500">
            Parking is connected directly to Aurelia's terminal
            network, with clear routes from each facility.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-[32px] bg-[#07111F] text-white">
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
                className={`p-8 sm:p-10 ${
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
      <section className="border-t border-slate-200">
        <div className="mx-auto grid max-w-7xl divide-y divide-slate-200 px-6 lg:grid-cols-3 lg:divide-x lg:divide-y-0 lg:px-8">
          <div className="py-10 lg:pr-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#C9A86A]">
              Short stay
            </p>

            <h3 className="mt-3 font-semibold text-slate-950">
              Ideal for pickups
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Convenient terminal parking when you only need a
              few hours.
            </p>
          </div>

          <div className="py-10 lg:px-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#C9A86A]">
              Long stay
            </p>

            <h3 className="mt-3 font-semibold text-slate-950">
              Better for extended trips
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Leave your vehicle securely while you travel.
            </p>
          </div>

          <div className="py-10 lg:pl-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#C9A86A]">
              Premium
            </p>

            <h3 className="mt-3 font-semibold text-slate-950">
              Closest to the terminal
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Reserved spaces for travelers who value maximum
              convenience.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#07111F]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9A86A]">
                Continue planning
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                Need directions to your parking area?
              </h2>
            </div>

            <Link
              to="/airport"
              className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all hover:bg-[#C9A86A]"
            >
              Open airport map
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}