import {
  ArrowLeft,
  Building2,
  Plane,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

import TerminalCard from "../../components/airport/TerminalCard";
import { terminals } from "../../data/terminals";
import { useTheme } from "../../context/ThemeContext";

function TerminalsPage() {
  const { theme } = useTheme();

  const darkMode = theme === "dark";

  return (
    <main
      className={`min-h-screen transition-colors duration-500 ${
        darkMode
          ? "bg-[#07111F] text-white"
          : "bg-[#F7F8FA] text-[#07111F]"
      }`}
    >
      {/* Header */}
      <header
        className={`sticky top-0 z-40 border-b backdrop-blur-xl transition-colors duration-500 ${
          darkMode
            ? "border-white/10 bg-[#07111F]/90"
            : "border-slate-200 bg-white/90"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-10">
          <Link
            to="/"
            className="group flex min-w-0 items-center gap-3"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#07111F] shadow-sm transition-transform duration-300 group-hover:scale-105 dark:bg-[#C9A86A]/10">
              <Plane
                size={17}
                strokeWidth={1.5}
                className="text-[#C9A86A]"
              />
            </div>

            <div className="min-w-0">
              <p
                className={`text-[13px] font-semibold tracking-[0.22em] ${
                  darkMode ? "text-white" : "text-[#07111F]"
                }`}
              >
                AURELIA
              </p>

              <p
                className={`truncate text-[7px] tracking-[0.28em] sm:text-[8px] sm:tracking-[0.32em] ${
                  darkMode ? "text-slate-500" : "text-slate-400"
                }`}
              >
                INTERNATIONAL AIRPORT
              </p>
            </div>
          </Link>

          <Link
            to="/"
            className={`group flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium transition-all duration-300 sm:px-4 sm:text-sm ${
              darkMode
                ? "text-slate-400 hover:bg-white/5 hover:text-white"
                : "text-slate-500 hover:bg-slate-100 hover:text-[#07111F]"
            }`}
          >
            <ArrowLeft
              size={15}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />

            <span>Back to airport</span>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section
        className={`relative overflow-hidden border-b transition-colors duration-500 ${
          darkMode
            ? "border-white/10 bg-[#07111F]"
            : "border-slate-200 bg-white"
        }`}
      >
        {/* Decorative elements */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#C9A86A]/10" />

        <div className="pointer-events-none absolute -bottom-40 right-20 h-80 w-80 rounded-full bg-[#C9A86A]/5 blur-3xl" />

        <div className="relative mx-auto max-w-[1400px] px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-24">
          <div className="max-w-4xl">
            <p className="mb-4 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C9A86A] sm:text-xs">
              <span className="h-px w-7 bg-[#C9A86A]" />
              Airport terminals · AUR
            </p>

            <h1
              className={`text-4xl font-medium leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-8xl ${
                darkMode ? "text-white" : "text-[#07111F]"
              }`}
            >
              Three terminals.
              <br />

              <span
                className={
                  darkMode ? "text-slate-600" : "text-slate-300"
                }
              >
                One seamless airport.
              </span>
            </h1>

            <p
              className={`mt-6 max-w-2xl text-sm leading-6 sm:text-base sm:leading-7 ${
                darkMode ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Explore Aurelia International Airport's terminals and
              discover check-in areas, gates, lounges, dining,
              shopping, and passenger facilities.
            </p>
          </div>
        </div>
      </section>

      {/* Overview + terminals */}
      <section className="mx-auto max-w-[1400px] px-4 py-8 sm:px-6 sm:py-12 lg:px-10 lg:py-16">
        {/* Overview */}
        <div className="grid gap-4 md:grid-cols-3">
          {/* Terminals */}
          <div
            className={`group rounded-[26px] border p-5 transition-all duration-300 hover:-translate-y-1 sm:p-6 ${
              darkMode
                ? "border-white/10 bg-[#0D1B2A] hover:border-[#C9A86A]/30"
                : "border-slate-200 bg-white hover:border-[#C9A86A]/50"
            }`}
          >
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-2xl ${
                darkMode ? "bg-[#C9A86A]/10" : "bg-[#07111F]"
              }`}
            >
              <Building2
                size={19}
                className="text-[#C9A86A]"
              />
            </div>

            <p
              className={`mt-6 text-3xl font-medium tracking-[-0.04em] ${
                darkMode ? "text-white" : "text-[#07111F]"
              }`}
            >
              3
            </p>

            <p
              className={`mt-1 text-sm ${
                darkMode ? "text-slate-500" : "text-slate-400"
              }`}
            >
              Passenger terminals
            </p>
          </div>

          {/* Gates */}
          <div
            className={`group rounded-[26px] border p-5 transition-all duration-300 hover:-translate-y-1 sm:p-6 ${
              darkMode
                ? "border-white/10 bg-[#0D1B2A] hover:border-[#C9A86A]/30"
                : "border-slate-200 bg-white hover:border-[#C9A86A]/50"
            }`}
          >
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-2xl ${
                darkMode ? "bg-[#C9A86A]/10" : "bg-[#07111F]"
              }`}
            >
              <Plane
                size={19}
                className="text-[#C9A86A]"
              />
            </div>

            <p
              className={`mt-6 text-3xl font-medium tracking-[-0.04em] ${
                darkMode ? "text-white" : "text-[#07111F]"
              }`}
            >
              80
            </p>

            <p
              className={`mt-1 text-sm ${
                darkMode ? "text-slate-500" : "text-slate-400"
              }`}
            >
              Passenger gates
            </p>
          </div>

          {/* Operations */}
          <div
            className={`group rounded-[26px] border p-5 transition-all duration-300 hover:-translate-y-1 sm:p-6 ${
              darkMode
                ? "border-white/10 bg-[#0D1B2A] hover:border-[#C9A86A]/30"
                : "border-slate-200 bg-white hover:border-[#C9A86A]/50"
            }`}
          >
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-2xl ${
                darkMode ? "bg-[#C9A86A]/10" : "bg-[#07111F]"
              }`}
            >
              <ShieldCheck
                size={19}
                className="text-[#C9A86A]"
              />
            </div>

            <p
              className={`mt-6 text-3xl font-medium tracking-[-0.04em] ${
                darkMode ? "text-white" : "text-[#07111F]"
              }`}
            >
              24/7
            </p>

            <p
              className={`mt-1 text-sm ${
                darkMode ? "text-slate-500" : "text-slate-400"
              }`}
            >
              Airport operations
            </p>
          </div>
        </div>

        {/* Terminal section */}
        <div className="mt-14 sm:mt-16">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9A86A] sm:text-xs">
                Explore
              </p>

              <h2
                className={`mt-3 text-3xl font-medium tracking-[-0.04em] sm:text-4xl ${
                  darkMode ? "text-white" : "text-[#07111F]"
                }`}
              >
                Find your terminal.
              </h2>
            </div>

            <p
              className={`max-w-sm text-sm leading-6 sm:text-right ${
                darkMode ? "text-slate-500" : "text-slate-400"
              }`}
            >
              Discover everything each terminal has to offer before
              you arrive.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3 lg:gap-6">
            {terminals.map((terminal) => (
              <TerminalCard
                key={terminal.id}
                terminal={terminal}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default TerminalsPage;