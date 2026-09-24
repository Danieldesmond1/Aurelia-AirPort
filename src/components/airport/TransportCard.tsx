import {
  ArrowUpRight,
  Car,
  Clock3,
  MapPin,
  Navigation,
  Plane,
  TrainFront,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

import type { TransportOption } from "../../types/transport";

interface TransportCardProps {
  option: TransportOption;
}

const typeIcons = {
  "Airport Express": TrainFront,
  Taxi: Car,
  Shuttle: Users,
  "Car Rental": Car,
  "Ride Pickup": Navigation,
};

export default function TransportCard({
  option,
}: TransportCardProps) {
  const Icon = typeIcons[option.type];

  return (
    <Link
      to={`/transport/${option.id}`}
      className="group block h-full"
    >
      <article className="relative flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_24px_70px_rgba(15,23,42,0.10)]">
        {/* Top row */}
        <div className="mb-7 flex items-start justify-between gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white transition-transform duration-500 group-hover:scale-105">
            <Icon size={24} strokeWidth={1.7} />
          </div>

          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
              {option.available24Hours
                ? "24 Hours"
                : option.type}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C9A86A]">
            {option.type}
          </p>

          <h3 className="max-w-[300px] text-2xl font-semibold tracking-[-0.03em] text-slate-950">
            {option.name}
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            {option.description}
          </p>
        </div>

        {/* Details */}
        <div className="mt-7 space-y-3 border-t border-slate-100 pt-6">
          <div className="flex items-center gap-3 text-sm text-slate-600">
            <MapPin size={16} className="shrink-0 text-slate-400" />

            <span>{option.location}</span>
          </div>

          <div className="flex items-center gap-3 text-sm text-slate-600">
            <Plane size={16} className="shrink-0 text-slate-400" />

            <span>{option.terminal}</span>
          </div>

          <div className="flex items-center gap-3 text-sm text-slate-600">
            <Clock3 size={16} className="shrink-0 text-slate-400" />

            <span>{option.operatingHours}</span>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-7 flex items-end justify-between gap-4">
          <div>
            {option.priceFrom && (
              <>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                  From
                </p>

                <p className="mt-1 text-lg font-semibold text-slate-950">
                  {option.priceFrom}
                </p>
              </>
            )}
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 transition-all duration-300 group-hover:border-slate-950 group-hover:bg-slate-950 group-hover:text-white">
            <ArrowUpRight size={18} />
          </div>
        </div>
      </article>
    </Link>
  );
}