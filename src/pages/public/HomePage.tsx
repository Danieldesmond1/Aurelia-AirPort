import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Menu,
  Moon,
  Plane,
  Search,
  Sun,
  X,
} from "lucide-react";

import FlightBoard from "../../components/flights/FlightBoard";
import { useFlights } from "../../hooks/useFlights";
import { useTheme } from "../../context/ThemeContext";

function HomePage() {
  const { flights, loading } = useFlights();
  const { theme, toggleTheme } = useTheme();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const darkMode = theme === "dark";

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navigationItems = [
    {
      label: "Flights",
      to: "/flights",
    },
    {
      label: "Terminals",
      to: "/terminals",
    },
    {
      label: "Services",
      to: "/services",
    },
    {
      label: "Transport",
      to: "/transport",
    },
    {
      label: "Parking",
      to: "/parking",
    },
  ];

  return (
    <main
      className={`min-h-screen transition-colors duration-500 ${
        darkMode
          ? "bg-[#07111F] text-white"
          : "bg-[#F7F8FA] text-[#111827]"
      }`}
    >
      {/* =====================================================
          NAVIGATION
      ====================================================== */}

      <header className="absolute left-0 right-0 top-0 z-50">
        <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-5 sm:h-24 sm:px-6 lg:px-10">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="group flex items-center gap-3"
          >
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition sm:h-11 sm:w-11 ${
                darkMode
                  ? "border-[#C9A86A]/50 bg-white/[0.03]"
                  : "border-[#07111F]/15 bg-white/70"
              }`}
            >
              <Plane
                size={18}
                strokeWidth={1.5}
                className="text-[#C9A86A] transition-transform duration-500 group-hover:rotate-12"
              />
            </div>

            <div className="leading-none">
              <p
                className={`text-[14px] font-semibold tracking-[0.22em] sm:text-[15px] ${
                  darkMode ? "text-white" : "text-[#07111F]"
                }`}
              >
                AURELIA
              </p>

              <p
                className={`mt-1 text-[8px] tracking-[0.28em] sm:text-[9px] sm:tracking-[0.35em] ${
                  darkMode ? "text-white/50" : "text-[#667085]"
                }`}
              >
                INTERNATIONAL AIRPORT
              </p>
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-7 lg:flex xl:gap-8">
            {navigationItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`text-sm transition-colors ${
                  darkMode
                    ? "text-white/75 hover:text-white"
                    : "text-[#344054] hover:text-[#07111F]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-2 md:flex">
            {/* Theme toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                darkMode
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              className={`flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-md transition ${
                darkMode
                  ? "border-white/10 bg-white/5 text-white/75 hover:bg-white/10 hover:text-white"
                  : "border-black/10 bg-white/70 text-[#344054] hover:bg-white"
              }`}
            >
              {darkMode ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            {/* Passenger portal */}
            <Link
              to="/portal"
              className={`group ml-1 flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm backdrop-blur-md transition ${
                darkMode
                  ? "border-white/15 bg-white/5 text-white hover:bg-white/10"
                  : "border-black/10 bg-white/70 text-[#07111F] hover:bg-white"
              }`}
            >
              Passenger Portal

              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          {/* Mobile actions */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Mobile theme toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                darkMode
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              className={`flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-md transition ${
                darkMode
                  ? "border-white/10 bg-white/5 text-white"
                  : "border-black/10 bg-white/70 text-[#07111F]"
              }`}
            >
              {darkMode ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            {/* Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((current) => !current)}
              aria-label={
                mobileMenuOpen
                  ? "Close navigation"
                  : "Open navigation"
              }
              aria-expanded={mobileMenuOpen}
              className={`flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-md transition ${
                darkMode
                  ? "border-white/10 bg-white/5 text-white"
                  : "border-black/10 bg-white/70 text-[#07111F]"
              }`}
            >
              {mobileMenuOpen ? (
                <X size={19} />
              ) : (
                <Menu size={19} />
              )}
            </button>
          </div>
        </div>

        {/* =====================================================
            MOBILE MENU
        ====================================================== */}

        <div
          className={`absolute left-4 right-4 top-[76px] overflow-hidden rounded-3xl border backdrop-blur-2xl transition-all duration-300 md:hidden ${
            mobileMenuOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-3 opacity-0"
          } ${
            darkMode
              ? "border-white/10 bg-[#07111F]/95 shadow-[0_25px_80px_rgba(0,0,0,0.35)]"
              : "border-black/[0.06] bg-white/95 shadow-[0_25px_80px_rgba(7,17,31,0.15)]"
          }`}
        >
          <div className="p-3">
            <div className="px-4 pb-3 pt-4">
              <p
                className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${
                  darkMode ? "text-[#C9A86A]" : "text-[#9B783F]"
                }`}
              >
                Explore Aurelia
              </p>
            </div>

            <div className="space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={closeMobileMenu}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-sm font-medium transition ${
                    darkMode
                      ? "text-white/75 hover:bg-white/5 hover:text-white"
                      : "text-[#344054] hover:bg-[#F7F8FA] hover:text-[#07111F]"
                  }`}
                >
                  {item.label}

                  <ArrowRight
                    size={15}
                    className={
                      darkMode
                        ? "text-white/25"
                        : "text-[#98A2B3]"
                    }
                  />
                </Link>
              ))}
            </div>

            <div
              className={`my-3 border-t ${
                darkMode
                  ? "border-white/10"
                  : "border-black/[0.06]"
              }`}
            />

            <Link
              to="/portal"
              onClick={closeMobileMenu}
              className="flex items-center justify-between rounded-2xl bg-[#C9A86A] px-4 py-3.5 text-sm font-semibold text-[#07111F] transition hover:bg-[#d7ba83]"
            >
              Passenger Portal
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </header>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative flex min-h-[720px] items-center overflow-hidden sm:min-h-[760px]">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2200&q=90')",
          }}
        />

        {/* Base overlay */}
        <div
          className={`absolute inset-0 transition-colors duration-500 ${
            darkMode ? "bg-[#07111F]/55" : "bg-white/25"
          }`}
        />

        {/* Directional overlay */}
        <div
          className={`absolute inset-0 ${
            darkMode
              ? "bg-gradient-to-r from-[#07111F] via-[#07111F]/70 to-transparent"
              : "bg-gradient-to-r from-white/90 via-white/45 to-transparent"
          }`}
        />

        {/* Bottom fade */}
        <div
          className={`absolute inset-0 ${
            darkMode
              ? "bg-gradient-to-t from-[#07111F] via-transparent to-[#07111F]/25"
              : "bg-gradient-to-t from-[#F7F8FA] via-transparent to-white/10"
          }`}
        />

        {/* Hero content */}
        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 pt-28 sm:px-6 sm:pt-32 lg:px-10 lg:pt-36">
          <div className="max-w-3xl">
            <p className="mb-4 text-[10px] font-medium tracking-[0.28em] text-[#C9A86A] sm:mb-5 sm:text-xs sm:tracking-[0.35em]">
              AURELIA INTERNATIONAL · AUR
            </p>

            <h1
              className={`text-[3.25rem] font-medium leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-8xl ${
                darkMode ? "text-white" : "text-[#07111F]"
              }`}
            >
              Your journey
              <br />

              <span
                className={
                  darkMode
                    ? "text-white/60"
                    : "text-[#07111F]/55"
                }
              >
                starts here.
              </span>
            </h1>

            <p
              className={`mt-6 max-w-xl text-sm leading-6 sm:mt-7 sm:text-base sm:leading-7 lg:text-lg ${
                darkMode
                  ? "text-white/65"
                  : "text-[#07111F]/65"
              }`}
            >
              Discover a seamless airport experience designed
              around the way you travel. From departure to
              arrival, everything is within reach.
            </p>

            {/* Search */}
            <div
              className={`mt-8 flex max-w-2xl flex-col gap-2 rounded-2xl border p-2.5 backdrop-blur-xl sm:mt-10 sm:flex-row sm:p-3 ${
                darkMode
                  ? "border-white/10 bg-white/10"
                  : "border-black/10 bg-white/50"
              }`}
            >
              <div className="flex min-h-[50px] flex-1 items-center gap-3 rounded-xl bg-white px-4 py-3 text-[#07111F] shadow-sm">
                <Search
                  size={18}
                  className="shrink-0 text-[#667085]"
                />

                <input
                  type="text"
                  placeholder="Search flights, destinations..."
                  className="w-full min-w-0 bg-transparent text-sm outline-none placeholder:text-gray-400"
                />
              </div>

              <button
                type="button"
                className="flex min-h-[50px] items-center justify-center gap-2 rounded-xl bg-[#C9A86A] px-7 py-3 text-sm font-semibold text-[#07111F] transition hover:bg-[#d7ba83] active:scale-[0.98]"
              >
                Search
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div
          className={`absolute bottom-0 left-0 right-0 z-10 border-t backdrop-blur-xl ${
            darkMode
              ? "border-white/10 bg-[#07111F]/50"
              : "border-black/10 bg-white/55"
          }`}
        >
          <div className="mx-auto grid max-w-[1400px] grid-cols-2 divide-x divide-y px-5 sm:grid-cols-4 sm:divide-y-0 sm:px-6 lg:px-10">
            <div className="px-3 py-5 sm:px-6 sm:py-6">
              <p
                className={`text-xl font-medium sm:text-2xl ${
                  darkMode ? "text-white" : "text-[#07111F]"
                }`}
              >
                186
              </p>

              <p
                className={`mt-1 text-[10px] sm:text-xs ${
                  darkMode ? "text-white/45" : "text-[#667085]"
                }`}
              >
                Destinations
              </p>
            </div>

            <div className="px-3 py-5 sm:px-6 sm:py-6">
              <p
                className={`text-xl font-medium sm:text-2xl ${
                  darkMode ? "text-white" : "text-[#07111F]"
                }`}
              >
                42
              </p>

              <p
                className={`mt-1 text-[10px] sm:text-xs ${
                  darkMode ? "text-white/45" : "text-[#667085]"
                }`}
              >
                Airlines
              </p>
            </div>

            <div className="px-3 py-5 sm:px-6 sm:py-6">
              <p
                className={`text-xl font-medium sm:text-2xl ${
                  darkMode ? "text-white" : "text-[#07111F]"
                }`}
              >
                24/7
              </p>

              <p
                className={`mt-1 text-[10px] leading-4 sm:text-xs ${
                  darkMode ? "text-white/45" : "text-[#667085]"
                }`}
              >
                Airport Operations
              </p>
            </div>

            <div className="px-3 py-5 sm:px-6 sm:py-6">
              <p
                className={`text-xl font-medium sm:text-2xl ${
                  darkMode ? "text-white" : "text-[#07111F]"
                }`}
              >
                32M+
              </p>

              <p
                className={`mt-1 text-[10px] sm:text-xs ${
                  darkMode ? "text-white/45" : "text-[#667085]"
                }`}
              >
                Annual Passengers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LIVE FLIGHTS
      ====================================================== */}

      <section
        className={`px-5 py-20 transition-colors duration-500 sm:px-6 sm:py-24 lg:px-10 ${
          darkMode ? "bg-[#07111F]" : "bg-[#F7F8FA]"
        }`}
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />

                <span
                  className={`text-xs font-medium uppercase tracking-[0.2em] ${
                    darkMode
                      ? "text-white/45"
                      : "text-slate-500"
                  }`}
                >
                  Live flight information
                </span>
              </div>

              <h2
                className={`max-w-xl text-4xl font-medium tracking-[-0.035em] lg:text-5xl ${
                  darkMode ? "text-white" : "text-[#07111F]"
                }`}
              >
                Know where you're going.
              </h2>

              <p
                className={`mt-4 max-w-xl text-sm leading-6 ${
                  darkMode
                    ? "text-white/50"
                    : "text-slate-500"
                }`}
              >
                Stay up to date with the latest arrival and
                departure information from Aurelia International
                Airport.
              </p>
            </div>

            <Link
              to="/flights"
              className={`flex w-fit items-center gap-2 text-sm font-medium transition ${
                darkMode
                  ? "text-white hover:text-[#C9A86A]"
                  : "text-[#07111F] hover:text-[#C9A86A]"
              }`}
            >
              View all flights
              <ArrowRight size={16} />
            </Link>
          </div>

          {loading ? (
            <div
              className={`rounded-3xl border p-10 text-center text-sm ${
                darkMode
                  ? "border-white/10 bg-white/[0.03] text-white/40"
                  : "border-slate-200 bg-white text-slate-400"
              }`}
            >
              Loading flight information...
            </div>
          ) : (
            <FlightBoard flights={flights.slice(0, 5)} />
          )}
        </div>
      </section>
    </main>
  );
}

export default HomePage;