import { ArrowLeft, Plane } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import ServiceCard from "../../components/airport/ServiceCard";
import { services } from "../../data/services";
import type { ServiceCategory } from "../../types/service";

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
            Airport experience · AUR
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-medium tracking-[-0.045em] lg:text-7xl">
            Everything you need.
            <br />
            <span className="text-slate-400">
              Before you fly.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-500">
            From premium lounges and exceptional dining to seamless
            transport and essential travel services, discover everything
            available throughout Aurelia International Airport.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-[1400px] px-6 py-12 lg:px-10 lg:py-16">
        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition ${
                category === item
                  ? "bg-[#07111F] text-white"
                  : "border border-slate-200 bg-white text-slate-500 hover:text-[#07111F]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Count */}
        <div className="mt-10 flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-400">
              {filteredServices.length} services
            </p>

            <h2 className="mt-1 text-2xl font-medium tracking-[-0.03em]">
              Explore Aurelia
            </h2>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default ServicesPage;