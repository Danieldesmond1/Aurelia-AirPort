import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  Download,
  Plane,
  Ticket,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";

import TripDetailsPanel from "../../components/passenger/TripDetailsPanel";
import TripRoute from "../../components/passenger/TripRoute";
import TripStatusBadge from "../../components/passenger/TripStatusBadge";
import { passengerService } from "../../services/passengerService";
import type { PassengerTrip } from "../../types/passenger";

function TripDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [trip, setTrip] =
    useState<PassengerTrip | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTrip = async () => {
      if (!id) {
        setLoading(false);
        return;
      }

      try {
        const data =
          await passengerService.getTripById(id);

        setTrip(data ?? null);
      } finally {
        setLoading(false);
      }
    };

    loadTrip();
  }, [id]);

  if (loading) {
    return (
      <div className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
        <div className="animate-pulse">
          <div className="h-4 w-20 rounded bg-gray-200" />

          <div className="mt-8 h-12 w-56 rounded bg-gray-200" />

          <div className="mt-3 h-5 w-96 max-w-full rounded bg-gray-200" />

          <div className="mt-8 h-64 rounded-3xl bg-gray-200" />

          <div className="mt-6 h-72 rounded-3xl bg-gray-200" />
        </div>
      </div>
    );
  }

  if (!trip) {
    return (
      <div className="mx-auto flex min-h-[70vh] w-full max-w-3xl items-center justify-center px-5 py-12">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100 text-gray-400">
            <Ticket size={24} />
          </div>

          <h1 className="mt-6 text-2xl font-semibold text-[#07111F]">
            Trip not found
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            We couldn't find the journey you're looking
            for.
          </p>

          <button
            type="button"
            onClick={() => navigate("/portal/trips")}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#07111F] px-5 py-3 text-sm font-semibold text-white"
          >
            <ArrowLeft size={15} />
            Back to My Trips
          </button>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(
    `${trip.departureDate}T00:00:00`
  ).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
      {/* Back */}
      <Link
        to="/portal/trips"
        className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-[#07111F]"
      >
        <ArrowLeft size={16} />
        My Trips
      </Link>

      {/* Header */}
      <header className="mt-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#07111F] px-3 py-1.5 text-xs font-semibold text-white">
                <Plane size={12} />
                {trip.flightNumber}
              </span>

              <TripStatusBadge
                status={trip.status}
              />
            </div>

            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-[#07111F] sm:text-4xl">
              {trip.originCode}{" "}
              <span className="text-gray-300">
                →
              </span>{" "}
              {trip.destinationCode}
            </h1>

            <p className="mt-2 text-sm text-gray-500 sm:text-base">
              {trip.origin} → {trip.destination}
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-4 py-3">
            <Ticket
              size={16}
              className="text-[#C9A86A]"
            />

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                Booking reference
              </p>

              <p className="mt-0.5 text-sm font-bold tracking-wide text-[#07111F]">
                {trip.bookingReference}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main journey card */}
      <section className="mt-8 overflow-hidden rounded-3xl bg-[#07111F] text-white shadow-xl shadow-[#07111F]/10">
        <div className="p-5 sm:p-7 lg:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C9A86A]">
                Your journey
              </p>

              <p className="mt-2 text-sm text-white/50">
                {trip.airline} · {trip.flightNumber}
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-white/50">
              <CalendarDays size={14} />
              {formattedDate}
            </div>
          </div>

          <div className="mt-6">
            <TripRoute
              origin={trip.origin}
              originCode={trip.originCode}
              destination={trip.destination}
              destinationCode={trip.destinationCode}
              departureTime={trip.departureTime}
              arrivalTime={trip.arrivalTime}
              dark
            />
          </div>

          {/* Journey progress */}
          <div className="mt-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/35">
              Journey progress
            </p>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                {
                  label: "Booking confirmed",
                  complete: true,
                },
                {
                  label: "Check-in",
                  complete:
                    trip.status ===
                      "Checked In" ||
                    trip.status ===
                      "Boarding",
                },
                {
                  label: "Security & boarding",
                  complete:
                    trip.status === "Boarding",
                },
                {
                  label: "Departure",
                  complete:
                    trip.status === "Completed",
                },
              ].map((step, index) => (
                <div
                  key={step.label}
                  className="relative"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                        step.complete
                          ? "bg-[#C9A86A] text-[#07111F]"
                          : "border border-white/15 bg-white/5 text-white/30"
                      }`}
                    >
                      {step.complete ? (
                        <Check size={14} />
                      ) : (
                        <span className="text-[11px] font-semibold">
                          {index + 1}
                        </span>
                      )}
                    </div>

                    <span
                      className={`text-xs font-medium leading-4 ${
                        step.complete
                          ? "text-white/80"
                          : "text-white/35"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom summary */}
        <div className="grid border-t border-white/10 sm:grid-cols-3">
          <div className="border-b border-white/10 px-5 py-5 sm:border-b-0 sm:border-r sm:px-7">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-white/35">
              Terminal
            </p>

            <p className="mt-2 text-lg font-semibold">
              {trip.terminal}
            </p>
          </div>

          <div className="border-b border-white/10 px-5 py-5 sm:border-b-0 sm:border-r sm:px-7">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-white/35">
              Gate
            </p>

            <p className="mt-2 text-lg font-semibold">
              {trip.gate ?? "Not assigned"}
            </p>
          </div>

          <div className="px-5 py-5 sm:px-7">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-white/35">
              Seat
            </p>

            <p className="mt-2 text-lg font-semibold">
              {trip.seat ?? "Not assigned"}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px]">
        <TripDetailsPanel trip={trip} />

        {/* Actions */}
        <aside className="h-fit rounded-3xl border border-gray-200 bg-white p-5 sm:p-7 lg:sticky lg:top-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
            Manage journey
          </p>

          <h2 className="mt-2 text-xl font-semibold tracking-tight text-[#07111F]">
            Ready when you are.
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Access your boarding pass and keep your
            journey details close at hand.
          </p>

          {trip.boardingPassAvailable ? (
            <button
              type="button"
              className="mt-6 flex w-full items-center justify-between rounded-2xl bg-[#07111F] px-4 py-4 text-sm font-semibold text-white transition hover:bg-[#0D1B2A]"
            >
              <span className="flex items-center gap-3">
                <Ticket size={17} />
                Boarding pass
              </span>

              <ArrowRight size={16} />
            </button>
          ) : (
            <div className="mt-6 rounded-2xl bg-[#F7F8FA] p-4">
              <div className="flex items-center gap-3">
                <Clock3
                  size={17}
                  className="text-gray-400"
                />

                <div>
                  <p className="text-sm font-semibold text-[#07111F]">
                    Boarding pass unavailable
                  </p>

                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    Your boarding pass will become
                    available after check-in.
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-2xl border border-gray-200 px-4 py-3.5 text-sm font-semibold text-[#07111F] transition hover:border-gray-300 hover:bg-gray-50"
            >
              <Download size={16} />
              Trip summary
            </button>

            <Link
              to="/portal/flights"
              className="flex items-center justify-center gap-2 rounded-2xl border border-gray-200 px-4 py-3.5 text-sm font-semibold text-[#07111F] transition hover:border-gray-300 hover:bg-gray-50"
            >
              Flight status
              <ArrowRight size={15} />
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default TripDetailsPage;