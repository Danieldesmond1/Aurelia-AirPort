import {
  ArrowRight,
  CalendarDays,
  Clock3,
  MapPin,
  Plane,
} from "lucide-react";
import { Link } from "react-router-dom";

import type { PassengerTrip } from "../../types/passenger";

interface UpcomingTripCardProps {
  trip: PassengerTrip;
}

function UpcomingTripCard({ trip }: UpcomingTripCardProps) {
  return (
    <section className="overflow-hidden rounded-[28px] bg-[#07111F] text-white shadow-[0_24px_70px_rgba(7,17,31,0.16)]">
      <div className="relative overflow-hidden p-6 sm:p-8 lg:p-10">
        {/* Decorative glow */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#C9A86A]/10 blur-3xl" />

        <div className="relative">
          {/* Header */}
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-[#C9A86A]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9A86A]">
                  Upcoming journey
                </span>
              </div>

              <p className="mt-2 text-xs text-white/35">
                Booking reference · {trip.bookingReference}
              </p>
            </div>

            <span className="w-fit rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-[10px] font-semibold text-emerald-300">
              {trip.status}
            </span>
          </div>

          {/* Route */}
          <div className="mt-10 grid grid-cols-[1fr_auto_1fr] items-center gap-4 sm:gap-8">
            <div>
              <p className="text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
                {trip.originCode}
              </p>

              <p className="mt-2 max-w-[150px] text-xs leading-5 text-white/40 sm:text-sm">
                {trip.origin}
              </p>
            </div>

            <div className="flex min-w-[70px] flex-col items-center gap-2 sm:min-w-[130px]">
              <div className="flex w-full items-center gap-2">
                <div className="h-px flex-1 bg-white/10" />

                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5">
                  <Plane
                    size={15}
                    className="rotate-45 text-[#C9A86A]"
                    strokeWidth={1.6}
                  />
                </div>

                <div className="h-px flex-1 bg-white/10" />
              </div>

              <span className="text-[9px] uppercase tracking-[0.16em] text-white/25">
                {trip.flightNumber}
              </span>
            </div>

            <div className="text-right">
              <p className="text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
                {trip.destinationCode}
              </p>

              <p className="ml-auto mt-2 max-w-[150px] text-xs leading-5 text-white/40 sm:text-sm">
                {trip.destination}
              </p>
            </div>
          </div>

          {/* Details */}
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
              <div className="flex items-center gap-2 text-white/35">
                <CalendarDays size={15} />
                <span className="text-[9px] uppercase tracking-[0.15em]">
                  Departure
                </span>
              </div>

              <p className="mt-3 text-sm font-medium">
                {new Date(`${trip.departureDate}T00:00:00`).toLocaleDateString(
                  "en-US",
                  {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  }
                )}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
              <div className="flex items-center gap-2 text-white/35">
                <Clock3 size={15} />
                <span className="text-[9px] uppercase tracking-[0.15em]">
                  Time
                </span>
              </div>

              <p className="mt-3 text-sm font-medium">
                {trip.departureTime}
                <span className="ml-1 text-white/30">local time</span>
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
              <div className="flex items-center gap-2 text-white/35">
                <MapPin size={15} />
                <span className="text-[9px] uppercase tracking-[0.15em]">
                  Terminal
                </span>
              </div>

              <p className="mt-3 text-sm font-medium">
                {trip.terminal}
                {trip.gate && (
                  <span className="ml-1 text-white/35">· Gate {trip.gate}</span>
                )}
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to={`/portal/trips/${trip.id}`}
              className="group flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-[#07111F] transition-transform duration-200 hover:-translate-y-0.5"
            >
              View trip

              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>

            {trip.boardingPassAvailable && (
              <button
                type="button"
                className="rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                Boarding pass
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default UpcomingTripCard;