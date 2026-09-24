import {
  BriefcaseBusiness,
  CreditCard,
  Map,
  ScanLine,
} from "lucide-react";
import { Link } from "react-router-dom";

const actions = [
  {
    label: "Check-in",
    description: "Prepare for your flight",
    icon: ScanLine,
    path: "/portal/check-in",
  },
  {
    label: "Boarding pass",
    description: "Access your pass",
    icon: CreditCard,
    path: "/portal/boarding-pass",
  },
  {
    label: "Baggage",
    description: "Manage your bags",
    icon: BriefcaseBusiness,
    path: "/portal/baggage",
  },
  {
    label: "Airport guide",
    description: "Find your way around",
    icon: Map,
    path: "/portal/airport",
  },
];

function QuickActions() {
  return (
    <section>
      <div className="mb-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C9A86A]">
          Shortcuts
        </p>

        <h2 className="mt-1.5 text-xl font-semibold tracking-[-0.025em] text-[#07111F]">
          Quick actions
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.label}
              to={action.path}
              className="group rounded-[20px] border border-slate-200 bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_14px_35px_rgba(7,17,31,0.07)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#07111F] text-[#C9A86A] transition-transform duration-200 group-hover:scale-105">
                <Icon size={18} strokeWidth={1.7} />
              </div>

              <p className="mt-5 text-sm font-semibold text-[#07111F]">
                {action.label}
              </p>

              <p className="mt-1 text-[11px] leading-5 text-slate-400">
                {action.description}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default QuickActions;