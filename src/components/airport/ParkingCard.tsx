import {
  ArrowUpRight,
  CarFront,
  Clock3,
  MapPin,
  ParkingCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

import type { ParkingOption } from "../../types/parking";

interface ParkingCardProps {
  option: ParkingOption;
}

const typeIcons = {
  "Short Stay": ParkingCircle,
  "Long Stay": ParkingCircle,
  Premium: CarFront,
  Valet: CarFront,
  Accessible: ParkingCircle,
};

export default function ParkingCard({
  option,
}: ParkingCardProps) {
  const Icon = typeIcons[option.type];

  return (
    <Link
      to={`/parking/${option.id}`}
      className="group block h-full"
    >
      <article className="flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_24px_70px_rgba(15,23,42,0.10)]">
        {/* Visual header */}
        <div className="relative overflow-hidden bg-[#07111F] px-7 pb-8 pt-7 text-white">
          <div className="absolute -right-16 -top-20 h-48 w-48 rounded-full bg-[#C9A86A]/10 blur-3xl transition-transform duration-700 group-hover:scale-125" />

          <div className="relative flex items-start justify-between gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
              <Icon size={24} strokeWidth={1.7} />
            </div>

            <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-300">
              {option.type}
            </span>
          </div>

          <div className="relative mt-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9A86A]">
              Aurelia Parking
            </p>

            <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">
              {option.name}
            </h3>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-7">
          <p className="text-sm leading-6 text-slate-500">
            {option.description}
          </p>

          <div className="mt-7 space-y-3 border-t border-slate-100 pt-6">
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <MapPin
                size={16}
                className="shrink-0 text-slate-400"
              />

              <span>{option.location}</span>
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-600">
              <ParkingCircle
                size={16}
                className="shrink-0 text-slate-400"
              />

              <span>{option.spaces}</span>
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-600">
              <Clock3
                size={16}
                className="shrink-0 text-slate-400"
              />

              <span>{option.operatingHours}</span>
            </div>
          </div>

          <div className="mt-auto flex items-end justify-between gap-4 pt-7">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                From
              </p>

              <p className="mt-1 text-lg font-semibold text-slate-950">
                {option.priceFrom}
              </p>

              {option.distance && (
                <p className="mt-1 text-xs text-slate-400">
                  {option.distance}
                </p>
              )}
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 transition-all duration-300 group-hover:border-slate-950 group-hover:bg-slate-950 group-hover:text-white">
              <ArrowUpRight size={18} />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}