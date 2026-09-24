import {
  Plane,
  ArrowLeft,
  CircleUserRound,
  LayoutDashboard,
  Map,
  PlaneTakeoff,
  Settings,
  Ticket,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const navigation = [
  {
    label: "Overview",
    path: "/portal",
    icon: LayoutDashboard,
    end: true,
  },
  {
    label: "My Trips",
    path: "/portal/trips",
    icon: Ticket,
  },
  {
    label: "Flight Status",
    path: "/portal/flights",
    icon: PlaneTakeoff,
  },
  {
    label: "Airport Guide",
    path: "/portal/airport",
    icon: Map,
  },
];

const accountNavigation = [
  {
    label: "Profile",
    path: "/portal/profile",
    icon: CircleUserRound,
  },
  {
    label: "Settings",
    path: "/portal/settings",
    icon: Settings,
  },
];

function PassengerSidebar() {
  const navigate = useNavigate();

  return (
    <aside className="hidden h-screen w-[270px] shrink-0 flex-col border-r border-slate-200 bg-white lg:flex">
      {/* Brand */}
      <div className="flex h-[88px] items-center border-b border-slate-100 px-7">
        <NavLink to="/portal" className="group">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#07111F] text-white transition-transform duration-300 group-hover:rotate-[-8deg]">
              <Plane size={19} strokeWidth={1.8} />
            </div>

            <div>
              <div className="text-[15px] font-semibold tracking-[0.22em] text-[#07111F]">
                AURELIA
              </div>

              <div className="mt-0.5 text-[8px] font-medium tracking-[0.28em] text-slate-400">
                PASSENGER PORTAL
              </div>
            </div>
          </div>
        </NavLink>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-4 py-7">
        <p className="px-3 pb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
          Journey
        </p>

        <nav className="space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.end}
                className={({ isActive }) =>
                  [
                    "group flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm transition-all duration-200",
                    isActive
                      ? "bg-[#07111F] font-medium text-white shadow-sm"
                      : "text-slate-600 hover:bg-slate-50 hover:text-[#07111F]",
                  ].join(" ")
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon
                      size={18}
                      strokeWidth={isActive ? 2 : 1.7}
                      className={
                        isActive
                          ? "text-[#C9A86A]"
                          : "text-slate-400 transition-colors group-hover:text-slate-600"
                      }
                    />

                    <span>{item.label}</span>
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>

        <div className="my-7 h-px bg-slate-100" />

        <p className="px-3 pb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
          Account
        </p>

        <nav className="space-y-1">
          {accountNavigation.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  [
                    "group flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm transition-all duration-200",
                    isActive
                      ? "bg-[#07111F] font-medium text-white shadow-sm"
                      : "text-slate-600 hover:bg-slate-50 hover:text-[#07111F]",
                  ].join(" ")
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon
                      size={18}
                      strokeWidth={isActive ? 2 : 1.7}
                      className={
                        isActive
                          ? "text-[#C9A86A]"
                          : "text-slate-400 transition-colors group-hover:text-slate-600"
                      }
                    />

                    <span>{item.label}</span>
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Back to airport */}
      <div className="border-t border-slate-100 p-4">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="group flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-left text-sm text-slate-500 transition-colors hover:bg-slate-50 hover:text-[#07111F]"
        >
          <ArrowLeft
            size={17}
            className="transition-transform duration-200 group-hover:-translate-x-1"
          />

          <span>Back to Aurelia</span>
        </button>
      </div>
    </aside>
  );
}

export default PassengerSidebar;