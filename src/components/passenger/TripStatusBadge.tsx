import type { PassengerTrip } from "../../types/passenger";
import { useTheme } from "../../context/ThemeContext";

interface TripStatusBadgeProps {
  status: PassengerTrip["status"];
}

function TripStatusBadge({
  status,
}: TripStatusBadgeProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const styles: Record<
    PassengerTrip["status"],
    string
  > = {
    Upcoming: isDark
      ? "bg-blue-500/10 text-blue-300 ring-1 ring-blue-400/20"
      : "bg-blue-50 text-blue-700 ring-1 ring-blue-100",

    "Checked In": isDark
      ? "bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-400/20"
      : "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100",

    Boarding: isDark
      ? "bg-amber-500/10 text-amber-300 ring-1 ring-amber-400/20"
      : "bg-amber-50 text-amber-700 ring-1 ring-amber-100",

    Completed: isDark
      ? "bg-slate-500/10 text-slate-400 ring-1 ring-white/[0.08]"
      : "bg-gray-100 text-gray-600 ring-1 ring-gray-200",

    Cancelled: isDark
      ? "bg-red-500/10 text-red-300 ring-1 ring-red-400/20"
      : "bg-red-50 text-red-700 ring-1 ring-red-100",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ${styles[status]}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}

export default TripStatusBadge;