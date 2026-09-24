import {
  Check,
  ClipboardCheck,
  Plane,
  ShieldCheck,
} from "lucide-react";

import type { PassengerTrip } from "../../types/passenger";

interface JourneyProgressProps {
  trip: PassengerTrip;
}

function JourneyProgress({ trip }: JourneyProgressProps) {
  const steps = [
    {
      label: "Booking confirmed",
      description: "Your reservation is confirmed",
      complete: true,
      icon: Check,
    },
    {
      label: "Check-in",
      description:
        trip.status === "Checked In"
          ? "You're checked in"
          : "Check-in will open soon",
      complete:
        trip.status === "Checked In" ||
        trip.status === "Boarding" ||
        trip.status === "Completed",
      icon: ClipboardCheck,
    },
    {
      label: "Security & boarding",
      description:
        trip.status === "Boarding"
          ? "Proceed to your gate"
          : `Terminal ${trip.terminal}${trip.gate ? ` · Gate ${trip.gate}` : ""}`,
      complete:
        trip.status === "Boarding" || trip.status === "Completed",
      icon: ShieldCheck,
    },
    {
      label: "Departure",
      description: `${trip.originCode} → ${trip.destinationCode}`,
      complete: trip.status === "Completed",
      icon: Plane,
    },
  ];

  return (
    <section className="rounded-[24px] border border-slate-200 bg-white p-6 sm:p-7">
      <div className="mb-7">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C9A86A]">
          Your journey
        </p>

        <h2 className="mt-1.5 text-xl font-semibold tracking-[-0.025em] text-[#07111F]">
          Journey progress
        </h2>
      </div>

      <div className="space-y-0">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isLast = index === steps.length - 1;

          return (
            <div key={step.label} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div
                  className={[
                    "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border",
                    step.complete
                      ? "border-[#07111F] bg-[#07111F] text-[#C9A86A]"
                      : "border-slate-200 bg-white text-slate-300",
                  ].join(" ")}
                >
                  <Icon size={16} strokeWidth={1.8} />
                </div>

                {!isLast && (
                  <div
                    className={[
                      "my-1 w-px flex-1 min-h-[38px]",
                      step.complete
                        ? "bg-[#07111F]/20"
                        : "bg-slate-200",
                    ].join(" ")}
                  />
                )}
              </div>

              <div className={isLast ? "pb-0" : "pb-6"}>
                <p
                  className={[
                    "text-sm font-semibold",
                    step.complete
                      ? "text-[#07111F]"
                      : "text-slate-400",
                  ].join(" ")}
                >
                  {step.label}
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-400">
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

export default JourneyProgress;