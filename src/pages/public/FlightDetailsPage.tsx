import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock3,
  MapPin,
  Plane,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { flightService } from "../../services/flightService";
import type { Flight } from "../../types/flight";

function FlightDetailsPage() {
  const { id } = useParams<{ id: string }>();

  const [flight, setFlight] = useState<Flight | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFlight = async () => {
      if (!id) {
        setLoading(false);
        return;
      }

      try {
        const data = await flightService.getFlightById(id);
        setFlight(data);
      } finally {
        setLoading(false);
      }
    };

    loadFlight();
  }, [id]);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F7F8FA]">
        <p className="text-sm text-slate-400">
          Loading flight information...
        </p>
      </main>
    );
  }

  if (!flight) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F7F8FA] px-6">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
            <Plane size={22} className="text-slate-400" />
          </div>

          <h1 className="mt-6 text-2xl font-medium text-[#07111F]">
            Flight not found
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            We couldn't find the flight you're looking for.
          </p>

          <Link
            to="/flights"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#07111F] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#0D1B2A]"
          >
            <ArrowLeft size={16} />
            Back to flights
          </Link>
        </div>
      </main>
    );
  }

  const statusStyles = {
    "On Time": "bg-emerald-50 text-emerald-600",
    Boarding: "bg-blue-50 text-blue-600",
    Delayed: "bg-amber-50 text-amber-700",
    Departed: "bg-slate-100 text-slate-500",
    Landed: "bg-emerald-50 text-emerald-600",
    Cancelled: "bg-red-50 text-red-600",
  };

  const isDeparture = flight.direction === "departure";

  return (
    <main className="min-h-screen bg-[#F7F8FA] text-[#07111F]">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-10">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#07111F]">
              <Plane
                size={17}
                strokeWidth={1.5}
                className="text-[#C9A86A]"
              />
            </div>

            <div>
              <p className="text-[14px] font-semibold tracking-[0.22em]">
                AURELIA
              </p>

              <p className="text-[8px] tracking-[0.32em] text-slate-400">
                INTERNATIONAL AIRPORT
              </p>
            </div>
          </Link>

          <Link
            to="/flights"
            className="flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-[#07111F]"
          >
            <ArrowLeft size={16} />
            All flights
          </Link>
        </div>
      </header>

      {/* Main */}
      <section className="mx-auto max-w-[1200px] px-6 py-12 lg:px-10 lg:py-16">
        {/* Flight heading */}
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#C9A86A]">
              Flight {flight.flightNumber}
            </span>

            <span
              className={`rounded-full px-3 py-1.5 text-xs font-medium ${statusStyles[flight.status]}`}
            >
              {flight.status}
            </span>
          </div>

          <h1 className="mt-5 text-5xl font-medium tracking-[-0.045em] lg:text-7xl">
            {flight.destination}
          </h1>

          <p className="mt-3 text-base text-slate-500">
            {flight.airline} · {flight.aircraft}
          </p>
        </div>

        {/* Route card */}
        <div className="mt-10 overflow-hidden rounded-[32px] bg-[#07111F] text-white">
          <div className="px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
            <div className="grid items-center gap-10 md:grid-cols-[1fr_auto_1fr]">
              {/* Origin */}
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                  {isDeparture ? "Departure" : "Origin"}
                </p>

                <p className="mt-3 text-5xl font-medium tracking-[-0.04em]">
                  {flight.originCode}
                </p>

                <p className="mt-2 text-sm text-white/50">
                  {flight.origin}
                </p>

                <p className="mt-5 flex items-center gap-2 text-sm text-white/70">
                  <Clock3 size={15} />
                  {flight.scheduledTime}
                </p>
              </div>

              {/* Plane */}
              <div className="flex flex-col items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5">
                  <Plane
                    size={21}
                    className="text-[#C9A86A]"
                  />
                </div>

                <div className="hidden h-px w-28 bg-white/10 md:block" />

                <ArrowRight
                  size={18}
                  className="text-[#C9A86A]"
                />
              </div>

              {/* Destination */}
              <div className="md:text-right">
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                  {isDeparture ? "Destination" : "Arrival"}
                </p>

                <p className="mt-3 text-5xl font-medium tracking-[-0.04em]">
                  {flight.destinationCode}
                </p>

                <p className="mt-2 text-sm text-white/50">
                  {flight.destination}
                </p>

                <p className="mt-5 flex items-center gap-2 text-sm text-white/70 md:justify-end">
                  <Clock3 size={15} />
                  {flight.estimatedTime || "Estimated time unavailable"}
                </p>
              </div>
            </div>
          </div>

          {/* Status strip */}
          <div className="border-t border-white/10 px-6 py-5 sm:px-10 lg:px-14">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/35">
                  Current status
                </p>

                <p className="mt-1 text-sm text-white/75">
                  {flight.status}
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm text-white/45">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Live airport information
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-8 rounded-[32px] border border-slate-200 bg-white p-6 sm:p-8 lg:p-10">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#C9A86A]">
              Journey status
            </p>

            <h2 className="mt-3 text-2xl font-medium tracking-[-0.03em]">
              Flight progress
            </h2>
          </div>

          <div className="mt-10">
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-[15px] top-4 h-[calc(100%-32px)] w-px bg-slate-200" />

              <div className="relative space-y-8">
                {/* Scheduled */}
                <div className="flex gap-5">
                  <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#07111F]">
                    <Check size={14} className="text-[#C9A86A]" />
                  </div>

                  <div className="pt-1">
                    <p className="font-medium">Scheduled</p>
                    <p className="mt-1 text-sm text-slate-400">
                      Flight scheduled for {flight.scheduledTime}
                    </p>
                  </div>
                </div>

                {/* Check-in */}
                <div className="flex gap-5">
                  <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#07111F]">
                    <Check size={14} className="text-[#C9A86A]" />
                  </div>

                  <div className="pt-1">
                    <p className="font-medium">Check-in</p>
                    <p className="mt-1 text-sm text-slate-400">
                      Check-in available at {flight.terminal}
                    </p>
                  </div>
                </div>

                {/* Boarding */}
                <div className="flex gap-5">
                  <div
                    className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                      flight.status === "Boarding"
                        ? "bg-blue-600"
                        : "bg-slate-100"
                    }`}
                  >
                    <Plane
                      size={14}
                      className={
                        flight.status === "Boarding"
                          ? "text-white"
                          : "text-slate-400"
                      }
                    />
                  </div>

                  <div className="pt-1">
                    <p className="font-medium">Boarding</p>
                    <p className="mt-1 text-sm text-slate-400">
                      Gate {flight.gate}
                    </p>
                  </div>
                </div>

                {/* Departure */}
                <div className="flex gap-5">
                  <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100">
                    <Plane
                      size={14}
                      className="text-slate-400"
                    />
                  </div>

                  <div className="pt-1">
                    <p className="font-medium text-slate-500">
                      Departure
                    </p>
                    <p className="mt-1 text-sm text-slate-400">
                      Awaiting departure
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Flight details */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <MapPin size={18} className="text-[#C9A86A]" />

            <p className="mt-6 text-xs uppercase tracking-[0.16em] text-slate-400">
              Terminal
            </p>

            <p className="mt-2 text-xl font-medium">
              {flight.terminal}
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <Plane size={18} className="text-[#C9A86A]" />

            <p className="mt-6 text-xs uppercase tracking-[0.16em] text-slate-400">
              Gate
            </p>

            <p className="mt-2 text-xl font-medium">
              {flight.gate}
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <Clock3 size={18} className="text-[#C9A86A]" />

            <p className="mt-6 text-xs uppercase tracking-[0.16em] text-slate-400">
              Scheduled
            </p>

            <p className="mt-2 text-xl font-medium">
              {flight.scheduledTime}
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <Plane size={18} className="text-[#C9A86A]" />

            <p className="mt-6 text-xs uppercase tracking-[0.16em] text-slate-400">
              Aircraft
            </p>

            <p className="mt-2 text-xl font-medium">
              {flight.aircraft}
            </p>
          </div>
        </div>

        {/* Bottom navigation */}
        <div className="mt-10 flex justify-between">
          <Link
            to="/flights"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-[#07111F]"
          >
            <ArrowLeft size={16} />
            All flights
          </Link>
        </div>
      </section>
    </main>
  );
}

export default FlightDetailsPage;