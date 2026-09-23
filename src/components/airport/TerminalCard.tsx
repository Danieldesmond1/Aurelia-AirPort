import {
  ArrowUpRight,
  Building2,
  Plane,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

import type { Terminal } from "../../types/terminal";

interface TerminalCardProps {
  terminal: Terminal;
}

function TerminalCard({ terminal }: TerminalCardProps) {
  return (
    <Link
      to={`/terminals/${terminal.id}`}
      className="group block overflow-hidden rounded-[30px] border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50"
    >
      {/* Visual */}
      <div className="relative h-52 overflow-hidden bg-[#07111F]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#07111F] via-[#0D1B2A] to-[#182B3F]" />

        <div className="absolute -right-10 -top-16 h-48 w-48 rounded-full border border-[#C9A86A]/10" />
        <div className="absolute -bottom-20 -left-10 h-52 w-52 rounded-full border border-white/5" />

        <div className="relative flex h-full flex-col justify-between p-7">
          <div className="flex items-start justify-between">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
              <Building2
                size={18}
                className="text-[#C9A86A]"
              />
            </div>

            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-white/60">
              {terminal.type}
            </span>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/35">
              Aurelia International
            </p>

            <p className="mt-2 text-3xl font-medium tracking-[-0.04em] text-white">
              {terminal.code}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-7">
        <h3 className="text-xl font-medium tracking-[-0.025em]">
          {terminal.name}
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          {terminal.description}
        </p>

        {/* Stats */}
        <div className="mt-7 grid grid-cols-3 divide-x divide-slate-100 border-y border-slate-100 py-5">
          <div className="pr-3">
            <Plane size={15} className="text-[#C9A86A]" />

            <p className="mt-2 text-lg font-medium">
              {terminal.gates}
            </p>

            <p className="text-[10px] uppercase tracking-[0.1em] text-slate-400">
              Gates
            </p>
          </div>

          <div className="px-3">
            <Users size={15} className="text-[#C9A86A]" />

            <p className="mt-2 text-lg font-medium">
              {terminal.airlines}
            </p>

            <p className="text-[10px] uppercase tracking-[0.1em] text-slate-400">
              Airlines
            </p>
          </div>

          <div className="pl-3">
            <Building2
              size={15}
              className="text-[#C9A86A]"
            />

            <p className="mt-2 text-sm font-medium">
              {terminal.capacity.split(" ")[0]}
            </p>

            <p className="text-[10px] uppercase tracking-[0.1em] text-slate-400">
              Capacity
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            {terminal.location}
          </span>

          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition group-hover:border-[#C9A86A] group-hover:text-[#07111F]">
            <ArrowUpRight size={15} />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default TerminalCard;