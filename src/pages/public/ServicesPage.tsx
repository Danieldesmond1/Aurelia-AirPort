import { ArrowLeft, Plane, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import ServiceCard from "../../components/airport/ServiceCard";
import { services } from "../../data/services";
import type { ServiceCategory } from "../../types/service";
import { useTheme } from "../../context/ThemeContext";

const categories: Array<ServiceCategory | "All"> = [
  "All",
  "Dining",
  "Shopping",
  "Lounge",
  "Transport",
  "Parking",
  "Travel",
  "Airport",
];

function ServicesPage() {
  const { theme } = useTheme();

  const [category, setCategory] =
    useState<ServiceCategory | "All">("All");

  const filteredServices = useMemo(() => {
    if (category === "All") {
      return services;
    }

    return services.filter(
      (service) => service.category === category
    );
  }, [category]);

  const isDark = theme === "dark";

  return (
    <main
      className={`min-h-screen transition-colors duration-500 ${
        isDark
          ? "bg-[#07111F] text-white"
          : "bg-[#F7F8FA] text-[#07111F]"
      }`}
    >
      {/* Header */}
      <header
        className={`border-b transition-colors duration-500 ${
          isDark
            ? "border-white/10 bg-[#07111F]"
            : "border-slate-200 bg-white"
        }`}
      >
        <div className="mx-auto flex min-h-20 max-w-[1400px] items-center justify-between gap-6 px-5 sm:px-6 lg:px-10">
          <Link
            to="/"
            className="flex min-w-0 items-center gap-3"
          >
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors ${
                isDark ? "bg-white" : "bg-[#07111F]"
              }`}
            >
              <Plane
                size={17}
                strokeWidth={1.5}
                className={
                  isDark
                    ? "text-[#07111F]"
                    : "text-[#C9A86A]"
                }
              />
            </div>

            <div className="min-w-0">
              <p
                className={`text-[14px] font-semibold tracking-[0.22em] ${
                  isDark ? "text-white" : "text-[#07111F]"
                }`}
              >
                AURELIA
              </p>

              <p className="truncate text-[8px] tracking-[0.32em] text-slate-400">
                INTERNATIONAL AIRPORT
              </p>
            </div>
          </Link>

          <Link
            to="/"
            className={`flex shrink-0 items-center gap-2 text-sm font-medium transition ${
              isDark
                ? "text-white/50 hover:text-white"
                : "text-slate-500 hover:text-[#07111F]"
            }`}
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">
              Back to airport
            </span>
            <span className="sm:hidden">Back</span>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section
        className={`relative overflow-hidden border-b transition-colors duration-500 ${
          isDark
            ? "border-white/10 bg-[#07111F]"
            : "border-slate-200 bg-white"
        }`}
      >
        {/* Decorative glow */}
        <div
          className={`pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full blur-3xl ${
            isDark
              ? "bg-[#C9A86A]/10"
              : "bg-[#C9A86A]/[0.08]"
          }`}
        />

        <div className="relative mx-auto max-w-[1400px] px-5 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#C9A86A]" />

              <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#C9A86A]">
                Airport experience · AUR
              </p>
            </div>

            <h1
              className={`mt-6 text-5xl font-medium leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-8xl ${
                isDark ? "text-white" : "text-[#07111F]"
              }`}
            >
              Everything you need.
              <br />
              <span
                className={
                  isDark
                    ? "text-white/35"
                    : "text-slate-400"
                }
              >
                Before you fly.
              </span>
            </h1>

            <p
              className={`mt-7 max-w-2xl text-base leading-7 sm:text-lg ${
                isDark
                  ? "text-white/50"
                  : "text-slate-500"
              }`}
            >
              From premium lounges and exceptional dining to
              seamless transport and essential travel services,
              discover everything available throughout Aurelia
              International Airport.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <div
                className={`flex items-center gap-2 rounded-full border px-4 py-2.5 text-xs ${
                  isDark
                    ? "border-white/10 bg-white/[0.04] text-white/50"
                    : "border-slate-200 bg-slate-50 text-slate-500"
                }`}
              >
                <Sparkles
                  size={14}
                  className="text-[#C9A86A]"
                />
                Curated airport experiences
              </div>

              <span
                className={`text-xs ${
                  isDark
                    ? "text-white/30"
                    : "text-slate-400"
                }`}
              >
                {services.length} services across Aurelia
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-[1400px] px-5 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        {/* Categories */}
        <div className="-mx-1 overflow-x-auto px-1 pb-2">
          <div className="flex min-w-max gap-2">
            {categories.map((item) => {
              const active = category === item;

              return (
                <button
                  key={item}
                  onClick={() => setCategory(item)}
                  className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition ${
                    active
                      ? isDark
                        ? "bg-white text-[#07111F]"
                        : "bg-[#07111F] text-white"
                      : isDark
                        ? "border border-white/10 bg-white/[0.03] text-white/50 hover:border-white/20 hover:text-white"
                        : "border border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:text-[#07111F]"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        {/* Section heading */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p
              className={`text-sm ${
                isDark
                  ? "text-white/30"
                  : "text-slate-400"
              }`}
            >
              {filteredServices.length}{" "}
              {filteredServices.length === 1
                ? "service"
                : "services"}
            </p>

            <h2
              className={`mt-1 text-3xl font-medium tracking-[-0.04em] sm:text-4xl ${
                isDark ? "text-white" : "text-[#07111F]"
              }`}
            >
              Explore Aurelia
            </h2>
          </div>

          <p
            className={`max-w-sm text-sm leading-6 sm:text-right ${
              isDark
                ? "text-white/35"
                : "text-slate-400"
            }`}
          >
            Discover places, amenities and experiences
            designed to make your journey easier.
          </p>
        </div>

        {/* Grid */}
        {filteredServices.length > 0 ? (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
              />
            ))}
          </div>
        ) : (
          <div
            className={`mt-8 rounded-[28px] border p-12 text-center ${
              isDark
                ? "border-white/10 bg-white/[0.03]"
                : "border-slate-200 bg-white"
            }`}
          >
            <p
              className={`text-sm ${
                isDark
                  ? "text-white/40"
                  : "text-slate-400"
              }`}
            >
              No services are currently available in this
              category.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

export default ServicesPage;