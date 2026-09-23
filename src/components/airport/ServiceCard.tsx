import {
  ArrowUpRight,
  Clock3,
  MapPin,
  Plane,
} from "lucide-react";
import { Link } from "react-router-dom";
import type { AirportService } from "../../types/service";

interface ServiceCardProps {
  service: AirportService;
}

function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      to={`/services/${service.id}`}
      className="group relative block overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#07111F]">
          <Plane size={17} className="text-[#C9A86A]" />
        </div>

        <span className="rounded-full bg-slate-100 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-slate-500">
          {service.category}
        </span>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-medium tracking-[-0.025em] text-[#07111F]">
          {service.name}
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          {service.description}
        </p>
      </div>

      <div className="mt-7 space-y-3 border-t border-slate-100 pt-5">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <MapPin size={14} />
          {service.location}
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-400">
          <Clock3 size={14} />
          {service.hours}
        </div>
      </div>

      <div className="mt-7 flex items-center justify-between">
        <span className="text-xs font-medium text-[#07111F]">
          {service.terminal}
        </span>

        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition group-hover:border-[#C9A86A] group-hover:text-[#07111F]">
          <ArrowUpRight size={15} />
        </div>
      </div>
    </Link>
  );
}

export default ServiceCard;