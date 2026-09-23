import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Compass,
  MapPin,
  Plane,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import { terminals } from "../../data/terminals";
import type { Terminal } from "../../types/terminal";

function TerminalDetailsPage() {
  const { id } = useParams<{ id: string }>();

  const [terminal, setTerminal] = useState<Terminal | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTerminal = async () => {
      setLoading(true);

      // Simulate an API request.
      await new Promise((resolve) => setTimeout(resolve, 250));

      const foundTerminal = terminals.find(
        (item) => item.id === id
      );

      setTerminal(foundTerminal ?? null);
      setLoading(false);
    };

    loadTerminal();
  }, [id]);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#F7F8FA] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="animate-pulse">
            <div className="mb-6 h-5 w-32 rounded bg-slate-200" />
            <div className="h-[420px] rounded-[32px] bg-slate-200" />
          </div>
        </div>
      </main>
    );
  }

  if (!terminal) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F7F8FA] px-6">
        <div className="max-w-md text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#07111F]">
            <Building2 className="text-[#C9A86A]" size={26} />
          </div>

          <p className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-[#C9A86A]">
            Terminal not found
          </p>

          <h1 className="text-3xl font-semibold tracking-tight text-[#07111F]">
            We couldn't find that terminal.
          </h1>

          <p className="mt-4 leading-7 text-slate-500">
            The terminal you're looking for may no longer be available.
          </p>

          <Link
            to="/terminals"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#07111F] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#0D1B2A]"
          >
            <ArrowLeft size={16} />
            Back to terminals
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F7F8FA]">
      {/* Hero */}
      <section className="bg-[#07111F] px-6 pb-14 pt-8 text-white md:pb-20 md:pt-10">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/terminals"
            className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            All terminals
          </Link>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-[#C9A86A]">
                <span>{terminal.code}</span>
                <span className="text-white/30">·</span>
                <span>{terminal.type}</span>
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                {terminal.name}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                {terminal.description}
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                Terminal location
              </p>

              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C9A86A]/10">
                  <MapPin size={19} className="text-[#C9A86A]" />
                </div>

                <div>
                  <p className="font-medium text-white">
                    {terminal.location}
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    Aurelia International Airport
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-14 grid overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] sm:grid-cols-3">
            <div className="border-b border-white/10 p-6 sm:border-b-0 sm:border-r">
              <div className="flex items-center gap-3">
                <Building2 size={18} className="text-[#C9A86A]" />
                <span className="text-sm text-slate-400">
                  Gates
                </span>
              </div>

              <p className="mt-4 text-3xl font-semibold">
                {terminal.gates}
              </p>
            </div>

            <div className="border-b border-white/10 p-6 sm:border-b-0 sm:border-r">
              <div className="flex items-center gap-3">
                <Plane size={18} className="text-[#C9A86A]" />
                <span className="text-sm text-slate-400">
                  Airlines
                </span>
              </div>

              <p className="mt-4 text-3xl font-semibold">
                {terminal.airlines}
              </p>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-3">
                <Users size={18} className="text-[#C9A86A]" />
                <span className="text-sm text-slate-400">
                  Annual capacity
                </span>
              </div>

              <p className="mt-4 text-3xl font-semibold">
                {terminal.capacity.replace(" passengers / year", "")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_0.4fr]">
          {/* Facilities */}
          <div>
            <div className="mb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C9A86A]">
                Inside the terminal
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#07111F] md:text-4xl">
                Everything you need, thoughtfully connected.
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-500">
                From check-in to boarding, {terminal.name} is designed
                to make every stage of your journey clear and effortless.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {terminal.facilities.map((facility) => (
                <div
                  key={facility}
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/40"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#07111F]">
                    <CheckCircle2
                      size={17}
                      className="text-[#C9A86A]"
                    />
                  </div>

                  <span className="text-sm font-medium text-[#07111F]">
                    {facility}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Information card */}
          <aside>
            <div className="sticky top-8 overflow-hidden rounded-[28px] bg-white shadow-sm ring-1 ring-slate-200">
              <div className="bg-[#07111F] p-7 text-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <Compass size={22} className="text-[#C9A86A]" />
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  Terminal information
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Key information to help you navigate Aurelia Airport.
                </p>
              </div>

              <div className="divide-y divide-slate-100">
                <div className="flex items-start gap-4 p-5">
                  <MapPin
                    size={18}
                    className="mt-0.5 text-slate-400"
                  />

                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-slate-400">
                      Location
                    </p>
                    <p className="mt-1 text-sm font-medium text-[#07111F]">
                      {terminal.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5">
                  <Building2
                    size={18}
                    className="mt-0.5 text-slate-400"
                  />

                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-slate-400">
                      Terminal type
                    </p>
                    <p className="mt-1 text-sm font-medium text-[#07111F]">
                      {terminal.type}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5">
                  <Clock3
                    size={18}
                    className="mt-0.5 text-slate-400"
                  />

                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-slate-400">
                      Operations
                    </p>
                    <p className="mt-1 text-sm font-medium text-[#07111F]">
                      Open 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5">
                  <ShieldCheck
                    size={18}
                    className="mt-0.5 text-slate-400"
                  />

                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-slate-400">
                      Passenger support
                    </p>
                    <p className="mt-1 text-sm font-medium text-[#07111F]">
                      Available throughout the terminal
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Explore */}
      <section className="border-t border-slate-200 bg-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C9A86A]">
                Explore Aurelia
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#07111F] md:text-4xl">
                Make the most of your time here.
              </h2>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#07111F] transition hover:text-[#C9A86A]"
            >
              Explore all services
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Sparkles,
                title: "Lounges",
                description: "Relax before your flight.",
              },
              {
                icon: Building2,
                title: "Dining",
                description: "Discover places to eat.",
              },
              {
                icon: Plane,
                title: "Shopping",
                description: "Explore airport retail.",
              },
              {
                icon: Compass,
                title: "Getting around",
                description: "Find your way with ease.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  to="/services"
                  className="group rounded-[24px] border border-slate-200 bg-[#F7F8FA] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#07111F]">
                      <Icon
                        size={19}
                        className="text-[#C9A86A]"
                      />
                    </div>

                    <ChevronRight
                      size={18}
                      className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#07111F]"
                    />
                  </div>

                  <h3 className="mt-6 font-semibold text-[#07111F]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#07111F] p-8 text-white md:p-12 lg:p-14">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C9A86A]">
                Need help finding your way?
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Navigate Aurelia with confidence.
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                Explore the airport map, discover facilities, and plan
                your route before you arrive.
              </p>
            </div>

            <Link
              to="/airport"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#07111F] transition hover:bg-[#C9A86A]"
            >
              Explore airport
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default TerminalDetailsPage;