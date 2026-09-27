import { ArrowRight, Plane } from "lucide-react";

interface TripRouteProps {
  origin: string;
  originCode: string;
  destination: string;
  destinationCode: string;
  departureTime: string;
  arrivalTime: string;
  dark?: boolean;
}

function TripRoute({
  origin,
  originCode,
  destination,
  destinationCode,
  departureTime,
  arrivalTime,
  dark = false,
}: TripRouteProps) {
  return (
    <div
      className={
        dark
          ? "rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6"
          : "rounded-2xl border border-gray-200 bg-white p-5 sm:p-6"
      }
    >
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
        {/* Origin */}
        <div>
          <p
            className={`text-xs font-medium uppercase tracking-[0.18em] ${
              dark ? "text-white/45" : "text-gray-400"
            }`}
          >
            Departure
          </p>

          <p
            className={`mt-2 text-3xl font-semibold tracking-tight ${
              dark ? "text-white" : "text-[#07111F]"
            }`}
          >
            {departureTime}
          </p>

          <p
            className={`mt-1 text-sm ${
              dark ? "text-white/55" : "text-gray-500"
            }`}
          >
            {origin}
          </p>

          <p
            className={`mt-1 text-sm font-semibold ${
              dark ? "text-[#C9A86A]" : "text-[#07111F]"
            }`}
          >
            {originCode}
          </p>
        </div>

        {/* Flight indicator */}
        <div className="flex min-w-[90px] flex-col items-center">
          <div
            className={`hidden h-px w-full sm:block ${
              dark ? "bg-white/15" : "bg-gray-200"
            }`}
          />

          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full ${
              dark
                ? "bg-[#C9A86A] text-[#07111F]"
                : "bg-[#07111F] text-white"
            }`}
          >
            <Plane size={17} />
          </div>

          <div
            className={`mt-2 hidden items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.15em] sm:flex ${
              dark ? "text-white/35" : "text-gray-400"
            }`}
          >
            <span>Direct</span>
            <ArrowRight size={10} />
          </div>
        </div>

        {/* Destination */}
        <div className="text-right">
          <p
            className={`text-xs font-medium uppercase tracking-[0.18em] ${
              dark ? "text-white/45" : "text-gray-400"
            }`}
          >
            Arrival
          </p>

          <p
            className={`mt-2 text-3xl font-semibold tracking-tight ${
              dark ? "text-white" : "text-[#07111F]"
            }`}
          >
            {arrivalTime}
          </p>

          <p
            className={`mt-1 text-sm ${
              dark ? "text-white/55" : "text-gray-500"
            }`}
          >
            {destination}
          </p>

          <p
            className={`mt-1 text-sm font-semibold ${
              dark ? "text-[#C9A86A]" : "text-[#07111F]"
            }`}
          >
            {destinationCode}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TripRoute;