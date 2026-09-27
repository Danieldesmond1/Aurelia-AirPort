import {
  Check,
  Circle,
  Plane,
  ShieldCheck,
} from "lucide-react";

import type { PassengerTrip } from "../../types/passenger";
import { useTheme } from "../../context/ThemeContext";

interface FlightStatusTimelineProps {
  trip: PassengerTrip;
}

function FlightStatusTimeline({
  trip,
}: FlightStatusTimelineProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const steps = [
    {
      label: "Booking confirmed",
      description:
        "Your reservation has been confirmed.",
      complete: true,
    },
    {
      label: "Check-in",
      description:
        trip.status === "Checked In" ||
        trip.status === "Boarding"
          ? "You are checked in for this flight."
          : "Check-in has not been completed yet.",
      complete:
        trip.status === "Checked In" ||
        trip.status === "Boarding" ||
        trip.status === "Completed",
    },
    {
      label: "Security & boarding",
      description:
        trip.status === "Boarding"
          ? "Boarding is currently in progress."
          : "Security and boarding will follow check-in.",
      complete:
        trip.status === "Boarding" ||
        trip.status === "Completed",
    },
    {
      label: "Departure",
      description:
        trip.status === "Completed"
          ? "Your journey has been completed."
          : "Departure is still ahead.",
      complete: trip.status === "Completed",
    },
  ];

  return (
    <section
      className={`rounded-3xl border p-5 transition-colors duration-500 sm:p-7 ${
        isDark
          ? "border-white/[0.07] bg-[#0D1B2A]"
          : "border-slate-200 bg-white"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#07111F] text-[#C9A86A]">
          <Plane size={17} />
        </div>

        <div>
          <h2
            className={`text-base font-semibold ${
              isDark ? "text-white" : "text-[#07111F]"
            }`}
          >
            Flight progress
          </h2>

          <p
            className={`text-xs ${
              isDark ? "text-slate-500" : "text-slate-400"
            }`}
          >
            Follow your journey from booking to departure.
          </p>
        </div>
      </div>

      <div className="mt-8">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;

          return (
            <div
              key={step.label}
              className="relative flex gap-4"
            >
              {/* Connector */}
              {!isLast && (
                <div
                  className={`absolute left-[15px] top-8 h-[calc(100%-8px)] w-px ${
                    steps[index + 1].complete
                      ? "bg-[#C9A86A]"
                      : isDark
                        ? "bg-white/[0.08]"
                        : "bg-slate-200"
                  }`}
                />
              )}

              {/* Icon */}
              <div
                className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                  step.complete
                    ? "bg-[#07111F] text-[#C9A86A]"
                    : isDark
                      ? "border border-white/[0.08] bg-[#07111F] text-slate-700"
                      : "border border-slate-200 bg-white text-slate-300"
                }`}
              >
                {step.complete ? (
                  index === 0 ? (
                    <ShieldCheck size={14} />
                  ) : (
                    <Check size={14} />
                  )
                ) : (
                  <Circle size={9} />
                )}
              </div>

              {/* Content */}
              <div
                className={`pb-8 ${
                  isLast ? "pb-0" : ""
                }`}
              >
                <p
                  className={`text-sm font-semibold ${
                    step.complete
                      ? isDark
                        ? "text-white"
                        : "text-[#07111F]"
                      : isDark
                        ? "text-slate-600"
                        : "text-slate-400"
                  }`}
                >
                  {step.label}
                </p>

                <p
                  className={`mt-1 text-xs leading-5 ${
                    isDark ? "text-slate-500" : "text-slate-500"
                  }`}
                >
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FlightStatusTimeline;