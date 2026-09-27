import {
  ArrowRight,
  CalendarDays,
  CircleHelp,
  Plane,
  Ticket,
} from "lucide-react";
import { Link } from "react-router-dom";

import { useTheme } from "../../context/ThemeContext";

function QuickActions() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const actions = [
    {
      label: "My Trips",
      description: "View your bookings",
      icon: Ticket,
      to: "/portal/trips",
    },
    {
      label: "Flight Status",
      description: "Track a flight",
      icon: Plane,
      to: "/portal/flights",
    },
    {
      label: "Airport Guide",
      description: "Explore the airport",
      icon: CircleHelp,
      to: "/portal/airport",
    },
    {
      label: "Plan a Trip",
      description: "Manage your journey",
      icon: CalendarDays,
      to: "/portal/trips",
    },
  ];

  return (
    <section>
      <div className="mb-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C9A86A]">
          Quick access
        </p>

        <h2
          className={`mt-1.5 text-xl font-semibold tracking-[-0.025em] ${
            isDark ? "text-white" : "text-[#07111F]"
          }`}
        >
          What would you like to do?
        </h2>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.label}
              to={action.to}
              className={`group flex items-center justify-between rounded-[20px] border p-4 transition-all duration-500 hover:-translate-y-0.5 ${
                isDark
                  ? "border-white/[0.07] bg-[#0D1B2A] hover:border-[#C9A86A]/30 hover:shadow-[0_14px_35px_rgba(0,0,0,0.2)]"
                  : "border-slate-200 bg-white hover:border-[#C9A86A]/50 hover:shadow-[0_14px_35px_rgba(7,17,31,0.07)]"
              }`}
            >
              <div className="flex min-w-0 items-center gap-3.5">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] transition-colors duration-500 ${
                    isDark
                      ? "bg-[#07111F] text-[#C9A86A]"
                      : "bg-slate-50 text-[#07111F]"
                  }`}
                >
                  <Icon size={19} strokeWidth={1.8} />
                </div>

                <div className="min-w-0">
                  <p
                    className={`text-sm font-semibold ${
                      isDark ? "text-white" : "text-[#07111F]"
                    }`}
                  >
                    {action.label}
                  </p>

                  <p
                    className={`mt-0.5 truncate text-xs ${
                      isDark ? "text-slate-500" : "text-slate-400"
                    }`}
                  >
                    {action.description}
                  </p>
                </div>
              </div>

              <ArrowRight
                size={17}
                strokeWidth={1.8}
                className={`ml-3 shrink-0 transition-all duration-500 group-hover:translate-x-1 ${
                  isDark
                    ? "text-slate-600 group-hover:text-[#C9A86A]"
                    : "text-slate-300 group-hover:text-[#C9A86A]"
                }`}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default QuickActions;
