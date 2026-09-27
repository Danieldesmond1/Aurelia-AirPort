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
import { useTheme } from "../../context/ThemeContext";

function TerminalDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const { theme } = useTheme();
  const darkMode = theme === "dark";

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
      <main
        className={`min-h-screen px-4 py-16 transition-colors duration-500 sm:px-6 sm:py-20 ${
          darkMode ? "bg-[#07111F]" : "bg-[#F7F8FA]"
        }`}
      >
        <div className="mx-auto max-w-7xl">
          <div className="animate-pulse">
            <div
              className={`mb-6 h-5 w-32 rounded ${
                darkMode ? "bg-white/10" : "bg-slate-200"
              }`}
            />

            <div
              className={`h-[360px] rounded-[32px] sm:h-[420px] ${
                darkMode ? "bg-[#0D1B2A]" : "bg-slate-200"
              }`}
            />
          </div>
        </div>
      </main>
    );
  }

  if (!terminal) {
    return (
      <main
        className={`flex min-h-screen items-center justify-center px-4 transition-colors duration-500 sm:px-6 ${
          darkMode ? "bg-[#07111F]" : "bg-[#F7F8FA]"
        }`}
      >
        <div className="max-w-md text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#07111F] shadow-lg dark:bg-[#C9A86A]/10">
            <Building2 className="text-[#C9A86A]" size={26} />
          </div>

          <p className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-[#C9A86A]">
            Terminal not found
          </p>

          <h1
            className={`text-3xl font-semibold tracking-tight sm:text-4xl ${
              darkMode ? "text-white" : "text-[#07111F]"
            }`}
          >
            We couldn't find that terminal.
          </h1>

          <p
            className={`mt-4 leading-7 ${
              darkMode ? "text-slate-400" : "text-slate-500"
            }`}
          >
            The terminal you're looking for may no longer be available.
          </p>

          <Link
            to="/terminals"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#07111F] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0D1B2A] hover:shadow-lg dark:bg-[#C9A86A] dark:text-[#07111F] dark:hover:bg-[#d6b979]"
          >
            <ArrowLeft size={16} />
            Back to terminals
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main
      className={`min-h-screen transition-colors duration-500 ${
        darkMode ? "bg-[#07111F] text-white" : "bg-[#F7F8FA] text-[#07111F]"
      }`}
    >
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#07111F] px-4 pb-12 pt-6 text-white sm:px-6 sm:pb-16 sm:pt-8 md:pb-20 md:pt-10">
        {/* Decorative background */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border border-[#C9A86A]/10" />
        <div className="pointer-events-none absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-[#C9A86A]/5 blur-3xl" />
        <div className="pointer-events-none absolute right-10 top-1/3 h-24 w-24 rounded-full bg-[#C9A86A]/5 blur-2xl" />

        <div className="relative mx-auto max-w-[1400px]">
          <Link
            to="/terminals"
            className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors duration-300 hover:text-white"
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            All terminals
          </Link>

          <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-[1.35fr_0.65fr] lg:items-end lg:gap-14">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-[10px] font-medium uppercase tracking-[0.16em] text-[#C9A86A] backdrop-blur-sm sm:px-4 sm:text-xs">
                <span>{terminal.code}</span>
                <span className="text-white/30">·</span>
                <span>{terminal.type}</span>
              </div>

              <h1 className="max-w-4xl text-4xl font-medium leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
                {terminal.name}
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8 lg:text-lg">
                {terminal.description}
              </p>
            </div>

            <div className="rounded-[26px] border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl transition-colors duration-500 sm:rounded-[28px] sm:p-6 hover:border-[#C9A86A]/20">
              <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500 sm:text-xs">
                Terminal location
              </p>

              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#C9A86A]/10">
                  <MapPin size={19} className="text-[#C9A86A]" />
                </div>

                <div className="min-w-0">
                  <p className="truncate font-medium text-white">
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
          <div className="mt-10 grid overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.04] sm:mt-14 sm:grid-cols-3 sm:rounded-[28px]">
            <div className="border-b border-white/10 p-5 sm:border-b-0 sm:border-r sm:p-6">
              <div className="flex items-center gap-3">
                <Building2 size={18} className="text-[#C9A86A]" />
                <span className="text-sm text-slate-400">Gates</span>
              </div>

              <p className="mt-4 text-3xl font-medium tracking-tight">
                {terminal.gates}
              </p>
            </div>

            <div className="border-b border-white/10 p-5 sm:border-b-0 sm:border-r sm:p-6">
              <div className="flex items-center gap-3">
                <Plane size={18} className="text-[#C9A86A]" />
                <span className="text-sm text-slate-400">Airlines</span>
              </div>

              <p className="mt-4 text-3xl font-medium tracking-tight">
                {terminal.airlines}
              </p>
            </div>

            <div className="p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <Users size={18} className="text-[#C9A86A]" />
                <span className="text-sm text-slate-400">
                  Annual capacity
                </span>
              </div>

              <p className="mt-4 text-3xl font-medium tracking-tight">
                {terminal.capacity.replace(" passengers / year", "")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[1fr_380px] lg:gap-16">
          {/* Facilities */}
          <div>
            <div className="mb-8 sm:mb-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9A86A] sm:text-xs">
                Inside the terminal
              </p>

              <h2
                className={`mt-3 text-3xl font-medium tracking-[-0.04em] sm:text-4xl ${
                  darkMode ? "text-white" : "text-[#07111F]"
                }`}
              >
                Everything you need,
                <br className="hidden sm:block" />
                thoughtfully connected.
              </h2>

              <p
                className={`mt-4 max-w-2xl text-sm leading-7 sm:text-base ${
                  darkMode ? "text-slate-400" : "text-slate-500"
                }`}
              >
                From check-in to boarding, {terminal.name} is designed to
                make every stage of your journey clear and effortless.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {terminal.facilities.map((facility) => (
                <div
                  key={facility}
                  className={`group flex items-center gap-4 rounded-2xl border p-4 transition-all duration-300 hover:-translate-y-0.5 sm:p-5 ${
                    darkMode
                      ? "border-white/10 bg-[#0D1B2A] hover:border-[#C9A86A]/25 hover:bg-[#102235] hover:shadow-[0_18px_50px_rgba(0,0,0,0.18)]"
                      : "border-slate-200 bg-white hover:border-[#C9A86A]/40 hover:shadow-[0_18px_50px_rgba(7,17,31,0.06)]"
                  }`}
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105 ${
                      darkMode ? "bg-[#C9A86A]/10" : "bg-[#07111F]"
                    }`}
                  >
                    <CheckCircle2
                      size={17}
                      className="text-[#C9A86A]"
                    />
                  </div>

                  <span
                    className={`text-sm font-medium ${
                      darkMode ? "text-white" : "text-[#07111F]"
                    }`}
                  >
                    {facility}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Information card */}
          <aside>
            <div
              className={`overflow-hidden rounded-[28px] border transition-colors duration-500 lg:sticky lg:top-8 ${
                darkMode
                  ? "border-white/10 bg-[#0D1B2A] shadow-[0_25px_70px_rgba(0,0,0,0.18)]"
                  : "border-slate-200 bg-white shadow-[0_20px_60px_rgba(7,17,31,0.06)]"
              }`}
            >
              <div className="bg-[#07111F] p-6 text-white sm:p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <Compass size={22} className="text-[#C9A86A]" />
                </div>

                <h3 className="mt-6 text-xl font-medium">
                  Terminal information
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Key information to help you navigate Aurelia Airport.
                </p>
              </div>

              <div
                className={`divide-y ${
                  darkMode ? "divide-white/10" : "divide-slate-100"
                }`}
              >
                <div className="flex items-start gap-4 p-5">
                  <MapPin
                    size={18}
                    className={`mt-0.5 ${
                      darkMode ? "text-slate-500" : "text-slate-400"
                    }`}
                  />

                  <div>
                    <p
                      className={`text-[10px] uppercase tracking-[0.14em] ${
                        darkMode ? "text-slate-500" : "text-slate-400"
                      }`}
                    >
                      Location
                    </p>

                    <p
                      className={`mt-1 text-sm font-medium ${
                        darkMode ? "text-white" : "text-[#07111F]"
                      }`}
                    >
                      {terminal.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5">
                  <Building2
                    size={18}
                    className={`mt-0.5 ${
                      darkMode ? "text-slate-500" : "text-slate-400"
                    }`}
                  />

                  <div>
                    <p
                      className={`text-[10px] uppercase tracking-[0.14em] ${
                        darkMode ? "text-slate-500" : "text-slate-400"
                      }`}
                    >
                      Terminal type
                    </p>

                    <p
                      className={`mt-1 text-sm font-medium ${
                        darkMode ? "text-white" : "text-[#07111F]"
                      }`}
                    >
                      {terminal.type}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5">
                  <Clock3
                    size={18}
                    className={`mt-0.5 ${
                      darkMode ? "text-slate-500" : "text-slate-400"
                    }`}
                  />

                  <div>
                    <p
                      className={`text-[10px] uppercase tracking-[0.14em] ${
                        darkMode ? "text-slate-500" : "text-slate-400"
                      }`}
                    >
                      Operations
                    </p>

                    <p
                      className={`mt-1 text-sm font-medium ${
                        darkMode ? "text-white" : "text-[#07111F]"
                      }`}
                    >
                      Open 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5">
                  <ShieldCheck
                    size={18}
                    className={`mt-0.5 ${
                      darkMode ? "text-slate-500" : "text-slate-400"
                    }`}
                  />

                  <div>
                    <p
                      className={`text-[10px] uppercase tracking-[0.14em] ${
                        darkMode ? "text-slate-500" : "text-slate-400"
                      }`}
                    >
                      Passenger support
                    </p>

                    <p
                      className={`mt-1 text-sm font-medium ${
                        darkMode ? "text-white" : "text-[#07111F]"
                      }`}
                    >
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
      <section
        className={`border-t px-4 py-14 transition-colors duration-500 sm:px-6 sm:py-16 md:py-20 ${
          darkMode
            ? "border-white/10 bg-[#0D1B2A]/40"
            : "border-slate-200 bg-white"
        }`}
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9A86A] sm:text-xs">
                Explore Aurelia
              </p>

              <h2
                className={`mt-3 text-3xl font-medium tracking-[-0.04em] sm:text-4xl ${
                  darkMode ? "text-white" : "text-[#07111F]"
                }`}
              >
                Make the most of your time here.
              </h2>
            </div>

            <Link
              to="/services"
              className={`group inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                darkMode
                  ? "text-slate-300 hover:text-[#C9A86A]"
                  : "text-[#07111F] hover:text-[#C9A86A]"
              }`}
            >
              Explore all services
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
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
                  className={`group rounded-[24px] border p-5 transition-all duration-300 hover:-translate-y-1 sm:p-6 ${
                    darkMode
                      ? "border-white/10 bg-[#0D1B2A] hover:border-[#C9A86A]/25 hover:bg-[#102235] hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)]"
                      : "border-slate-200 bg-[#F7F8FA] hover:border-[#C9A86A]/40 hover:bg-white hover:shadow-[0_20px_50px_rgba(7,17,31,0.06)]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105 ${
                        darkMode ? "bg-[#C9A86A]/10" : "bg-[#07111F]"
                      }`}
                    >
                      <Icon
                        size={19}
                        className="text-[#C9A86A]"
                      />
                    </div>

                    <ChevronRight
                      size={18}
                      className={`transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#C9A86A] ${
                        darkMode ? "text-slate-600" : "text-slate-300"
                      }`}
                    />
                  </div>

                  <h3
                    className={`mt-6 font-semibold ${
                      darkMode ? "text-white" : "text-[#07111F]"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`mt-2 text-sm leading-6 ${
                      darkMode ? "text-slate-500" : "text-slate-500"
                    }`}
                  >
                    {item.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[28px] bg-[#07111F] p-7 text-white sm:rounded-[32px] sm:p-10 md:p-12 lg:p-14">
          {/* CTA decoration */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-[#C9A86A]/10" />
          <div className="pointer-events-none absolute -bottom-24 right-1/3 h-48 w-48 rounded-full bg-[#C9A86A]/5 blur-3xl" />

          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center lg:gap-10">
            <div className="max-w-2xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9A86A] sm:text-xs">
                Need help finding your way?
              </p>

              <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
                Navigate Aurelia with confidence.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                Explore the airport map, discover facilities, and plan your
                route before you arrive.
              </p>
            </div>

            <Link
              to="/airport"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#07111F] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C9A86A] hover:shadow-[0_12px_30px_rgba(201,168,106,0.2)]"
            >
              Explore airport
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default TerminalDetailsPage;