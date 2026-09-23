import {
  ArrowLeft,
  Building2,
  Plane,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

import TerminalCard from "../../components/airport/TerminalCard";
import { terminals } from "../../data/terminals";

function TerminalsPage() {
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
            to="/"
            className="flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-[#07111F]"
          >
            <ArrowLeft size={16} />
            Back to airport
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-20">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#C9A86A]">
            Airport terminals · AUR
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-medium tracking-[-0.045em] lg:text-7xl">
            Three terminals.
            <br />
            <span className="text-slate-400">
              One seamless airport.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-500">
            Explore Aurelia International Airport's terminals and
            discover check-in areas, gates, lounges, dining, shopping,
            and passenger facilities.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-[1400px] px-6 py-12 lg:px-10 lg:py-16">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <Building2
              size={19}
              className="text-[#C9A86A]"
            />

            <p className="mt-6 text-2xl font-medium">3</p>

            <p className="mt-1 text-sm text-slate-400">
              Passenger terminals
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <Plane
              size={19}
              className="text-[#C9A86A]"
            />

            <p className="mt-6 text-2xl font-medium">80</p>

            <p className="mt-1 text-sm text-slate-400">
              Passenger gates
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <ShieldCheck
              size={19}
              className="text-[#C9A86A]"
            />

            <p className="mt-6 text-2xl font-medium">
              24/7
            </p>

            <p className="mt-1 text-sm text-slate-400">
              Airport operations
            </p>
          </div>
        </div>

        {/* Terminals */}
        <div className="mt-12">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#C9A86A]">
              Explore
            </p>

            <h2 className="mt-3 text-3xl font-medium tracking-[-0.035em]">
              Find your terminal.
            </h2>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
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