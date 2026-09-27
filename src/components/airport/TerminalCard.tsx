import {
  ArrowUpRight,
  Building2,
  Plane,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

import { useTheme } from "../../context/ThemeContext";
import type { Terminal } from "../../types/terminal";

interface TerminalCardProps {
  terminal: Terminal;
}

function TerminalCard({ terminal }: TerminalCardProps) {
  const { theme } = useTheme();

  const darkMode = theme === "dark";

  return (
    <Link
      to={`/terminals/${terminal.id}`}
      className={`group relative block overflow-hidden rounded-[30px] border transition-all duration-500 hover:-translate-y-1 ${
        darkMode
          ? "border-white/10 bg-[#0D1B2A] hover:border-[#C9A86A]/30 hover:shadow-[0_25px_70px_rgba(0,0,0,0.2)]"
          : "border-slate-200 bg-white hover:border-[#C9A86A]/40 hover:shadow-[0_25px_70px_rgba(7,17,31,0.08)]"
      }`}
    >
      {/* Visual */}
      <div className="relative h-52 overflow-hidden bg-[#07111F]">
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#07111F] via-[#0D1B2A] to-[#182B3F]" />

        {/* Decorative rings */}
        <div className="absolute -right-10 -top-16 h-48 w-48 rounded-full border border-[#C9A86A]/10 transition-transform duration-700 group-hover:scale-110" />

        <div className="absolute -bottom-20 -left-10 h-52 w-52 rounded-full border border-white/5 transition-transform duration-700 group-hover:scale-110" />

        <div className="absolute right-10 bottom-8 h-20 w-20 rounded-full bg-[#C9A86A]/5 blur-2xl transition-all duration-500 group-hover:bg-[#C9A86A]/10" />

        <div className="relative flex h-full flex-col justify-between p-6 sm:p-7">
          {/* Top */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-transform duration-300 group-hover:scale-105">
              <Building2
                size={18}
                className="text-[#C9A86A]"
              />
            </div>

            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/60 backdrop-blur-sm sm:text-[10px]">
              {terminal.type}
            </span>
          </div>

          {/* Bottom */}
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/35">
              Aurelia International
            </p>

            <p className="mt-1 text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl">
              {terminal.code}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7">
        <h3
          className={`text-xl font-medium tracking-[-0.025em] ${
            darkMode ? "text-white" : "text-[#07111F]"
          }`}
        >
          {terminal.name}
        </h3>

        <p
          className={`mt-3 text-sm leading-6 ${
            darkMode ? "text-slate-500" : "text-slate-500"
          }`}
        >
          {terminal.description}
        </p>

        {/* Stats */}
        <div
          className={`mt-7 grid grid-cols-3 divide-x border-y py-5 ${
            darkMode
              ? "divide-white/10 border-white/10"
              : "divide-slate-100 border-slate-100"
          }`}
        >
          {/* Gates */}
          <div className="pr-3">
            <Plane
              size={15}
              className="text-[#C9A86A]"
            />

            <p
              className={`mt-2 text-lg font-medium ${
                darkMode ? "text-white" : "text-[#07111F]"
              }`}
            >
              {terminal.gates}
            </p>

            <p
              className={`text-[9px] uppercase tracking-[0.1em] sm:text-[10px] ${
                darkMode ? "text-slate-600" : "text-slate-400"
              }`}
            >
              Gates
            </p>
          </div>

          {/* Airlines */}
          <div className="px-3">
            <Users
              size={15}
              className="text-[#C9A86A]"
            />

            <p
              className={`mt-2 text-lg font-medium ${
                darkMode ? "text-white" : "text-[#07111F]"
              }`}
            >
              {terminal.airlines}
            </p>

            <p
              className={`text-[9px] uppercase tracking-[0.1em] sm:text-[10px] ${
                darkMode ? "text-slate-600" : "text-slate-400"
              }`}
            >
              Airlines
            </p>
          </div>

          {/* Capacity */}
          <div className="pl-3">
            <Building2
              size={15}
              className="text-[#C9A86A]"
            />

            <p
              className={`mt-2 text-sm font-medium ${
                darkMode ? "text-white" : "text-[#07111F]"
              }`}
            >
              {terminal.capacity.split(" ")[0]}
            </p>

            <p
              className={`text-[9px] uppercase tracking-[0.1em] sm:text-[10px] ${
                darkMode ? "text-slate-600" : "text-slate-400"
              }`}
            >
              Capacity
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between gap-4">
          <span
            className={`truncate text-xs ${
              darkMode ? "text-slate-600" : "text-slate-400"
            }`}
          >
            {terminal.location}
          </span>

          <div
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 group-hover:bg-[#C9A86A] group-hover:text-[#07111F] ${
              darkMode
                ? "border-white/10 text-slate-500 group-hover:border-[#C9A86A]"
                : "border-slate-200 text-slate-400 group-hover:border-[#C9A86A]"
            }`}
          >
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default TerminalCard;