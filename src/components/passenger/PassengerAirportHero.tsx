import {
  ArrowRight,
  MapPin,
  PlaneTakeoff,
} from "lucide-react";
import { Link } from "react-router-dom";

interface PassengerAirportHeroProps {
  flightNumber: string;
  originCode: string;
  destinationCode: string;
  terminal: string;
  gate?: string;
  departureDate: string;
  departureTime: string;
}

function PassengerAirportHero({
  flightNumber,
  originCode,
  destinationCode,
  terminal,
  gate,
  departureDate,
  departureTime,
}: PassengerAirportHeroProps) {
  const formattedDate = new Date(
    `${departureDate}T${departureTime}:00`
  ).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <section className="overflow-hidden rounded-[28px] bg-[#07111F] text-white shadow-[0_20px_60px_rgba(7,17,31,0.12)]">
      <div className="relative px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#C9A86A]/10 blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 h-48 w-48 rounded-full bg-blue-400/5 blur-3xl" />

        <div className="relative">
          <div className="mb-6 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C9A86A]">
            <MapPin size={14} />
            Your airport guide
          </div>

          <div className="max-w-3xl">
            <h1 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              Navigate Aurelia
              <span className="text-white/40">
                {" "}
                with confidence.
              </span>
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/60 sm:text-base">
              Everything you need to find your terminal, gate, essential
              services and your way through the airport.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#C9A86A]/10 text-[#C9A86A]">
                <PlaneTakeoff size={19} />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                  Your next flight
                </p>

                <div className="mt-1 flex items-center gap-2 text-sm font-semibold">
                  <span>{originCode}</span>

                  <ArrowRight
                    size={14}
                    className="text-white/30"
                  />

                  <span>{destinationCode}</span>

                  <span className="ml-1 text-white/40">
                    · {flightNumber}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <div>
                <p className="text-[10px] uppercase tracking-[0.16em] text-white/40">
                  Departure
                </p>

                <p className="mt-1 font-medium">
                  {formattedDate}
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.16em] text-white/40">
                  Time
                </p>

                <p className="mt-1 font-medium">
                  {departureTime}
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.16em] text-white/40">
                  Terminal
                </p>

                <p className="mt-1 font-medium">
                  {terminal}
                </p>
              </div>

              {gate && (
                <div>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-white/40">
                    Gate
                  </p>

                  <p className="mt-1 font-medium text-[#C9A86A]">
                    {gate}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="mt-6">
            <Link
              to="/portal/trips/trip-001"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-[#C9A86A]"
            >
              View trip details
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PassengerAirportHero;