import {
  ArrowUpRight,
  CircleCheck,
  Clock3,
  Plane,
} from "lucide-react";
import { Link } from "react-router-dom";

import type { PassengerTrip } from "../../types/passenger";

interface FlightStatusCardProps {
  trip: PassengerTrip;
}

function FlightStatusCard({ trip }: FlightStatusCardProps) {
  const isOnTime = trip.status !== "Cancelled";

  return (
    <section className="rounded-[24px] border border-slate-200 bg-white p-6 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C9A86A]">
            Flight status
          </p>

          <h2 className="mt-1.5 text-xl font-semibold tracking-[-0.025em] text-[#07111F]">
            {trip.flightNumber}
          </h2>
        </div>

        <div
          className={[
            "flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[10px] font-semibold",
            isOnTime
              ? "bg-emerald-50 text-emerald-600"
              : "bg-red-50 text-red-500",
          ].join(" ")}
        >
          <CircleCheck size={13} />

          {isOnTime ? "On schedule" : "Cancelled"}
        </div>
      </div>

      <div className="mt-7 flex items-center justify-between">
        <div>
          <p className="text-3xl font-semibold tracking-[-0.04em] text-[#07111F]">
            {trip.originCode}
          </p>

          <p className="mt-1 text-[11px] text-slate-400">
            {trip.departureTime}
          </p>
        </div>

        <div className="flex flex-1 items-center justify-center px-4">
          <div className="flex w-full max-w-[110px] items-center">
            <div className="h-px flex-1 bg-slate-200" />

            <div className="mx-2 flex h-8 w-8 items-center justify-center rounded-full bg-slate-50">
              <Plane
                size={14}
                className="rotate-45 text-[#07111F]"
              />
            </div>

            <div className="h-px flex-1 bg-slate-200" />
          </div>
        </div>

        <div className="text-right">
          <p className="text-3xl font-semibold tracking-[-0.04em] text-[#07111F]">
            {trip.destinationCode}
          </p>

          <p className="mt-1 text-[11px] text-slate-400">
            {trip.arrivalTime}
          </p>
        </div>
      </div>

      <div className="mt-7 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-slate-50 p-3.5">
          <div className="flex items-center gap-2 text-slate-400">
            <Clock3 size={14} />
            <span className="text-[9px] uppercase tracking-[0.12em]">
              Status
            </span>
          </div>

          <p className="mt-2 text-xs font-semibold text-slate-700">
            {trip.status}
          </p>
        </div>

        <div className="rounded-xl bg-slate-50 p-3.5">
          <div className="flex items-center gap-2 text-slate-400">
            <Plane size={14} />
            <span className="text-[9px] uppercase tracking-[0.12em]">
              Aircraft
            </span>
          </div>

          <p className="mt-2 text-xs font-semibold text-slate-700">
            Aurelia Airways
          </p>
        </div>
      </div>

      <Link
        to={`/portal/flights`}
        className="group mt-5 flex items-center justify-between border-t border-slate-100 pt-5 text-xs font-semibold text-[#07111F]"
      >
        View flight status

        <ArrowUpRight
          size={15}
          className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </Link>
    </section>
  );
}

export default FlightStatusCard;