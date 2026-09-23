import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock3,
  MapPin,
  Plane,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

import { services } from "../../data/services";
import type { AirportService } from "../../types/service";

function ServiceDetailsPage() {
  const { id } = useParams<{ id: string }>();

  const service: AirportService | undefined = services.find(
    (item) => item.id === id
  );

  if (!service) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F7F8FA] px-6">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
            <Plane size={22} className="text-slate-400" />
          </div>

          <h1 className="mt-6 text-2xl font-medium text-[#07111F]">
            Service not found
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            We couldn't find the airport service you're looking for.
          </p>

          <Link
            to="/services"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#07111F] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#0D1B2A]"
          >
            <ArrowLeft size={16} />
            Back to services
          </Link>
        </div>
      </main>
    );
  }

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
            to="/services"
            className="flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-[#07111F]"
          >
            <ArrowLeft size={16} />
            All services
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-[#07111F] text-white">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-10 lg:py-24">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-[#C9A86A]/30 bg-[#C9A86A]/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.15em] text-[#C9A86A]">
              {service.category}
            </span>

            <span className="text-xs text-white/40">
              {service.terminal}
            </span>
          </div>

          <h1 className="mt-6 max-w-4xl text-5xl font-medium tracking-[-0.045em] lg:text-7xl">
            {service.name}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/55 lg:text-lg">
            {service.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-[1200px] px-6 py-12 lg:px-10 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
          {/* Main information */}
          <div className="rounded-[32px] border border-slate-200 bg-white p-6 sm:p-8 lg:p-10">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#C9A86A]">
              About this service
            </p>

            <h2 className="mt-3 text-2xl font-medium tracking-[-0.03em]">
              Designed around your journey.
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500">
              {service.description} Whether you're arriving, departing,
              connecting, or simply spending time at Aurelia, this service
              is available to help make your airport experience more
              comfortable and convenient.
            </p>

            {/* Features */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
                  <Check size={16} className="text-emerald-600" />
                </div>

                <p className="mt-4 font-medium">
                  Airport access
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Conveniently located within the airport.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
                  <Check size={16} className="text-emerald-600" />
                </div>

                <p className="mt-4 font-medium">
                  Passenger focused
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Built around a seamless passenger experience.
                </p>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-4">
            <div className="rounded-[28px] border border-slate-200 bg-white p-6">
              <MapPin
                size={19}
                className="text-[#C9A86A]"
              />

              <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-400">
                Location
              </p>

              <p className="mt-2 text-lg font-medium">
                {service.location}
              </p>

              <p className="mt-1 text-sm text-slate-400">
                {service.terminal}
              </p>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-6">
              <Clock3
                size={19}
                className="text-[#C9A86A]"
              />

              <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-400">
                Opening hours
              </p>

              <p className="mt-2 text-lg font-medium">
                {service.hours}
              </p>
            </div>

            <div className="rounded-[28px] bg-[#07111F] p-6 text-white">
              <Plane
                size={19}
                className="text-[#C9A86A]"
              />

              <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.16em] text-white/35">
                Terminal
              </p>

              <p className="mt-2 text-lg font-medium">
                {service.terminal}
              </p>

              <Link
                to="/services"
                className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 px-4 py-3 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
              >
                Explore other services
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-[#07111F]"
          >
            <ArrowLeft size={16} />
            Back to all services
          </Link>
        </div>
      </section>
    </main>
  );
}

export default ServiceDetailsPage;