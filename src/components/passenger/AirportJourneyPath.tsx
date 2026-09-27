import {
  Check,
  Circle,
  DoorOpen,
  Plane,
  ShieldCheck,
} from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

interface AirportJourneyPathProps {
  terminal: string;
  gate?: string;
}

function AirportJourneyPath({
  terminal,
  gate,
}: AirportJourneyPathProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const steps = [
    {
      title: "Terminal",
      description: `${terminal} · Departures`,
      icon: DoorOpen,
      completed: true,
    },
    {
      title: "Security",
      description: "Security checkpoint",
      icon: ShieldCheck,
      completed: false,
    },
    {
      title: "Airside",
      description: "Lounges, dining & shopping",
      icon: Circle,
      completed: false,
    },
    {
      title: gate ? `Gate ${gate}` : "Your gate",
      description: "Departure gate",
      icon: Plane,
      completed: false,
    },
  ];

  return (
    <section
      className={`rounded-[24px] border p-6 shadow-[0_12px_40px_rgba(7,17,31,0.05)] transition-colors duration-500 sm:p-7 ${
        isDark
          ? "border-white/[0.07] bg-[#0D1B2A]"
          : "border-slate-200 bg-white"
      }`}
    >
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9A86A]">
          Your journey
        </p>

        <h2
          className={`mt-2 text-xl font-semibold tracking-[-0.03em] ${
            isDark ? "text-white" : "text-[#07111F]"
          }`}
        >
          Through the airport
        </h2>

        <p
          className={`mt-2 text-sm leading-6 ${
            isDark ? "text-slate-400" : "text-[#667085]"
          }`}
        >
          A simple guide from terminal entrance to your departure gate.
        </p>
      </div>

      <div className="mt-7">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isLast = index === steps.length - 1;

          return (
            <div
              key={step.title}
              className="flex gap-4"
            >
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors duration-500 ${
                    step.completed
                      ? "bg-[#07111F] text-[#C9A86A]"
                      : isDark
                        ? "border border-white/10 bg-[#07111F] text-slate-600"
                        : "border border-black/10 bg-[#F7F8FA] text-[#667085]"
                  }`}
                >
                  {step.completed ? (
                    <Check size={16} strokeWidth={2.5} />
                  ) : (
                    <Icon size={16} />
                  )}
                </div>

                {!isLast && (
                  <div
                    className={`my-1 h-12 w-px ${
                      isDark ? "bg-white/10" : "bg-black/10"
                    }`}
                  />
                )}
              </div>

              <div className={isLast ? "" : "pb-7"}>
                <p
                  className={`text-sm font-semibold ${
                    isDark ? "text-white" : "text-[#07111F]"
                  }`}
                >
                  {step.title}
                </p>

                <p
                  className={`mt-1 text-xs ${
                    isDark ? "text-slate-500" : "text-[#667085]"
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

export default AirportJourneyPath;