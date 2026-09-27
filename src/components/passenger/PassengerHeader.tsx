import {
  Plane,
  Bell,
  Menu,
  Search,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { useTheme } from "../../context/ThemeContext";

const mobileNavigation = [
  {
    label: "Overview",
    path: "/portal",
    end: true,
  },
  {
    label: "My Trips",
    path: "/portal/trips",
  },
  {
    label: "Flight Status",
    path: "/portal/flights",
  },
  {
    label: "Airport Guide",
    path: "/portal/airport",
  },
  {
    label: "Profile",
    path: "/portal/profile",
  },
  {
    label: "Settings",
    path: "/portal/settings",
  },
];

interface PassengerHeaderProps {
  firstName?: string;
  lastName?: string;
}

function PassengerHeader({
  firstName = "Daniel",
  lastName = "Morgan",
}: PassengerHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`;

  return (
    <>
      <header
        className={`relative z-40 flex h-[76px] shrink-0 items-center justify-between border-b px-5 backdrop-blur-xl transition-colors duration-500 sm:px-7 lg:px-9 ${
          isDark
            ? "border-white/[0.07] bg-[#0D1B2A]/95 text-white"
            : "border-slate-200 bg-white/95 text-[#111827]"
        }`}
      >
        {/* Mobile brand */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-colors duration-500 ${
              isDark
                ? "border-white/[0.08] bg-[#07111F] text-slate-300 hover:border-[#C9A86A]/30 hover:text-white"
                : "border-slate-200 text-slate-600 hover:bg-slate-50"
            }`}
            aria-label={
              mobileMenuOpen ? "Close navigation" : "Open navigation"
            }
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <Link to="/portal" className="flex items-center gap-2.5">
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors duration-500 ${
                isDark
                  ? "bg-[#07111F] text-[#C9A86A]"
                  : "bg-[#07111F] text-white"
              }`}
            >
              <Plane size={16} strokeWidth={1.8} />
            </div>

            <div>
              <div
                className={`text-[13px] font-semibold tracking-[0.18em] ${
                  isDark ? "text-white" : "text-[#07111F]"
                }`}
              >
                AURELIA
              </div>

              <div className="text-[7px] font-medium tracking-[0.2em] text-slate-400">
                PASSENGER
              </div>
            </div>
          </Link>
        </div>

        {/* Desktop search */}
        <div className="hidden items-center lg:flex">
          <div
            className={`flex h-11 w-[300px] items-center gap-3 rounded-xl border px-3.5 transition-all duration-500 focus-within:border-[#C9A86A]/40 ${
              isDark
                ? "border-white/[0.08] bg-[#07111F] focus-within:bg-[#07111F]"
                : "border-slate-200 bg-slate-50/70 focus-within:bg-white"
            }`}
          >
            <Search
              size={17}
              className={isDark ? "text-slate-500" : "text-slate-400"}
            />

            <input
              type="text"
              placeholder="Search your journey..."
              className={`w-full bg-transparent text-sm outline-none placeholder:text-slate-500 ${
                isDark ? "text-white" : "text-slate-700"
              }`}
            />

            <span
              className={`hidden rounded-md border px-1.5 py-0.5 text-[9px] font-medium xl:block ${
                isDark
                  ? "border-white/[0.08] bg-[#0D1B2A] text-slate-500"
                  : "border-slate-200 bg-white text-slate-400"
              }`}
            >
              ⌘ K
            </span>
          </div>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            className={`relative flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-500 ${
              isDark
                ? "text-slate-400 hover:bg-[#07111F] hover:text-white"
                : "text-slate-500 hover:bg-slate-50 hover:text-[#07111F]"
            }`}
            aria-label="Notifications"
          >
            <Bell size={19} strokeWidth={1.7} />

            <span className="absolute right-[9px] top-[8px] h-1.5 w-1.5 rounded-full bg-[#C9A86A]" />
          </button>

          <div
            className={`hidden h-7 w-px sm:block ${
              isDark ? "bg-white/[0.08]" : "bg-slate-200"
            }`}
          />

          <button
            type="button"
            className={`flex items-center gap-2.5 rounded-xl p-1.5 pr-2 transition-colors duration-500 ${
              isDark
                ? "hover:bg-[#07111F]"
                : "hover:bg-slate-50"
            }`}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#07111F] text-[11px] font-semibold tracking-wide text-[#C9A86A]">
              {initials}
            </div>

            <div className="hidden text-left md:block">
              <p
                className={`text-xs font-semibold ${
                  isDark ? "text-white" : "text-slate-800"
                }`}
              >
                {firstName} {lastName.charAt(0)}.
              </p>

              <p
                className={`mt-0.5 text-[10px] ${
                  isDark ? "text-slate-500" : "text-slate-400"
                }`}
              >
                Passenger
              </p>
            </div>
          </button>
        </div>
      </header>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div
          className={`absolute inset-x-0 top-[76px] z-50 border-b px-4 py-4 shadow-xl transition-colors duration-500 lg:hidden ${
            isDark
              ? "border-white/[0.07] bg-[#0D1B2A]"
              : "border-slate-200 bg-white"
          }`}
        >
          <nav className="space-y-1">
            {mobileNavigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.end}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  [
                    "flex items-center justify-between rounded-xl px-4 py-3.5 text-sm transition-all duration-300",
                    isActive
                      ? "bg-[#07111F] font-medium text-white"
                      : isDark
                        ? "text-slate-400 hover:bg-[#07111F] hover:text-white"
                        : "text-slate-600 hover:bg-slate-50",
                  ].join(" ")
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.label}</span>

                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[#C9A86A]" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div
            className={`mt-3 border-t pt-3 ${
              isDark ? "border-white/[0.07]" : "border-slate-100"
            }`}
          >
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center px-4 py-3 text-sm ${
                isDark
                  ? "text-slate-500 hover:text-white"
                  : "text-slate-500"
              }`}
            >
              Back to Aurelia
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default PassengerHeader;