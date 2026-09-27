import { useMemo, useState } from "react";
import {
  Building2,
  CircleParking,
  Compass,
  Info,
  Luggage,
  MapPin,
  Plane,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  TrainFront,
  Utensils,
  X,
} from "lucide-react";

import type { AirportLocation } from "../../types/airport";
import { useTheme } from "../../context/ThemeContext";

interface AirportMapProps {
  locations: AirportLocation[];
  selectedLocationId?: string;
  onSelectLocation?: (
    location: AirportLocation | undefined
  ) => void;
}

const locationIcons = {
  terminal: Building2,
  gate: Plane,
  security: ShieldCheck,
  immigration: ShieldCheck,
  lounge: Sparkles,
  dining: Utensils,
  shopping: ShoppingBag,
  baggage: Luggage,
  parking: CircleParking,
  transport: TrainFront,
  restroom: Info,
  information: Info,
};

const locationLabels = {
  terminal: "Terminal",
  gate: "Gate",
  security: "Security",
  immigration: "Immigration",
  lounge: "Lounge",
  dining: "Dining",
  shopping: "Shopping",
  baggage: "Baggage",
  parking: "Parking",
  transport: "Transport",
  restroom: "Restroom",
  information: "Information",
};

function AirportMap({
  locations,
  selectedLocationId,
  onSelectLocation,
}: AirportMapProps) {
  const { theme } = useTheme();
  const darkMode = theme === "dark";

  const [activeTerminal, setActiveTerminal] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [internalSelectedId, setInternalSelectedId] = useState<
    string | undefined
  >(selectedLocationId);

  const selectedId = selectedLocationId ?? internalSelectedId;

  const filteredLocations = useMemo(() => {
    return locations.filter((location) => {
      const matchesTerminal =
        activeTerminal === "ALL" ||
        location.terminal === activeTerminal;

      const query = searchQuery.trim().toLowerCase();

      const matchesSearch =
        !query ||
        location.name.toLowerCase().includes(query) ||
        location.type.toLowerCase().includes(query) ||
        location.zone.toLowerCase().includes(query);

      return matchesTerminal && matchesSearch;
    });
  }, [locations, activeTerminal, searchQuery]);

  const handleSelect = (location: AirportLocation) => {
    setInternalSelectedId(location.id);
    onSelectLocation?.(location);
  };

  const selectedLocation = locations.find(
    (location) => location.id === selectedId
  );

  const terminals = ["ALL", "T1", "T2", "T3"];

  return (
    <div
      className={`overflow-hidden rounded-[28px] border transition-all duration-500 sm:rounded-[32px] ${
        darkMode
          ? "border-white/10 bg-[#0D1B2A] shadow-[0_25px_70px_rgba(0,0,0,0.2)]"
          : "border-slate-200 bg-white shadow-[0_20px_60px_rgba(7,17,31,0.06)]"
      }`}
    >
      {/* Toolbar */}
      <div
        className={`border-b p-3.5 transition-colors duration-500 sm:p-5 ${
          darkMode
            ? "border-white/10 bg-[#0D1B2A]"
            : "border-slate-200 bg-white"
        }`}
      >
        <div className="flex flex-col gap-3.5 lg:flex-row lg:items-center lg:justify-between">
          {/* Terminal selector */}
          <div className="flex gap-1.5 overflow-x-auto pb-0.5 scrollbar-none sm:flex-wrap sm:gap-2">
            {terminals.map((terminal) => {
              const active = activeTerminal === terminal;

              return (
                <button
                  key={terminal}
                  type="button"
                  onClick={() => setActiveTerminal(terminal)}
                  className={`shrink-0 rounded-full px-3.5 py-2 text-[11px] font-semibold transition-all duration-300 sm:px-4 sm:text-xs ${
                    active
                      ? darkMode
                        ? "bg-[#C9A86A] text-[#07111F] shadow-sm"
                        : "bg-[#07111F] text-white shadow-sm"
                      : darkMode
                        ? "bg-white/5 text-slate-500 hover:bg-white/10 hover:text-white"
                        : "bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-[#07111F]"
                  }`}
                >
                  {terminal === "ALL" ? "All terminals" : terminal}
                </button>
              );
            })}
          </div>

          {/* Search */}
          <div className="relative w-full lg:max-w-xs">
            <Search
              size={16}
              className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                darkMode ? "text-slate-600" : "text-slate-400"
              }`}
            />

            <input
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search gate, lounge, dining..."
              className={`h-11 w-full rounded-full border pl-10 pr-4 text-sm outline-none transition-all duration-300 placeholder:text-slate-500 ${
                darkMode
                  ? "border-white/10 bg-white/[0.04] text-white focus:border-[#C9A86A]/40 focus:bg-white/[0.06]"
                  : "border-slate-200 bg-slate-50 text-[#07111F] focus:border-[#C9A86A] focus:bg-white"
              }`}
            />
          </div>
        </div>
      </div>

      {/* Map */}
      <div
        className={`relative min-h-[460px] overflow-hidden transition-colors duration-500 sm:min-h-[620px] ${
          darkMode ? "bg-[#091722]" : "bg-[#EEF2F5]"
        }`}
      >
        {/* Decorative grid */}
        <div
          className={`absolute inset-0 ${
            darkMode ? "opacity-30" : "opacity-40"
          }`}
          style={{
            backgroundImage: darkMode
              ? "linear-gradient(rgba(201,168,106,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,106,0.045) 1px, transparent 1px)"
              : "linear-gradient(rgba(7,17,31,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(7,17,31,0.05) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />

        {/* Subtle map glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A86A]/5 blur-3xl" />

        {/* Runway */}
        <div
          className={`absolute left-[7%] top-[10%] h-[8%] w-[86%] rotate-[-4deg] rounded-full transition-colors duration-500 ${
            darkMode ? "bg-[#182833]" : "bg-[#D9DEE4]"
          }`}
        >
          <div className="absolute inset-x-8 top-1/2 border-t-2 border-dashed border-white/40" />
        </div>

        {/* Airport road */}
        <div
          className={`absolute bottom-[9%] left-[3%] h-8 w-[94%] rounded-full transition-colors duration-500 ${
            darkMode ? "bg-[#17262F]" : "bg-[#C9D0D7]"
          }`}
        >
          <div className="absolute inset-x-8 top-1/2 border-t-2 border-dashed border-white/30" />
        </div>

        {/* Terminal T1 */}
        <div
          className={`absolute left-[9%] top-[30%] h-[35%] w-[25%] rounded-[42px] border backdrop-blur-sm transition-colors duration-500 ${
            darkMode
              ? "border-[#31404A] bg-[#10212B]/80 shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
              : "border-slate-300 bg-white/80 shadow-lg shadow-slate-300/30"
          }`}
        >
          <div
            className={`absolute inset-5 rounded-[28px] border border-dashed ${
              darkMode ? "border-white/10" : "border-slate-300"
            }`}
          />

          <div
            className={`absolute bottom-5 left-1/2 -translate-x-1/2 text-[10px] font-semibold uppercase tracking-[0.2em] ${
              darkMode ? "text-slate-600" : "text-slate-400"
            }`}
          >
            T1
          </div>
        </div>

        {/* Terminal T2 */}
        <div
          className={`absolute left-[38%] top-[34%] h-[28%] w-[22%] rounded-[42px] border backdrop-blur-sm transition-colors duration-500 ${
            darkMode
              ? "border-[#31404A] bg-[#10212B]/80 shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
              : "border-slate-300 bg-white/80 shadow-lg shadow-slate-300/30"
          }`}
        >
          <div
            className={`absolute inset-5 rounded-[28px] border border-dashed ${
              darkMode ? "border-white/10" : "border-slate-300"
            }`}
          />

          <div
            className={`absolute bottom-5 left-1/2 -translate-x-1/2 text-[10px] font-semibold uppercase tracking-[0.2em] ${
              darkMode ? "text-slate-600" : "text-slate-400"
            }`}
          >
            T2
          </div>
        </div>

        {/* Terminal T3 */}
        <div
          className={`absolute right-[8%] top-[30%] h-[35%] w-[25%] rounded-[42px] border backdrop-blur-sm transition-colors duration-500 ${
            darkMode
              ? "border-[#31404A] bg-[#10212B]/80 shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
              : "border-slate-300 bg-white/80 shadow-lg shadow-slate-300/30"
          }`}
        >
          <div
            className={`absolute inset-5 rounded-[28px] border border-dashed ${
              darkMode ? "border-white/10" : "border-slate-300"
            }`}
          />

          <div
            className={`absolute bottom-5 left-1/2 -translate-x-1/2 text-[10px] font-semibold uppercase tracking-[0.2em] ${
              darkMode ? "text-slate-600" : "text-slate-400"
            }`}
          >
            T3
          </div>
        </div>

        {/* Connecting taxiways */}
        <div
          className={`absolute left-[31%] top-[48%] h-4 w-[40%] rounded-full ${
            darkMode ? "bg-[#24363F]" : "bg-slate-300/80"
          }`}
        />

        <div
          className={`absolute left-[25%] top-[62%] h-4 w-[50%] rotate-[8deg] rounded-full ${
            darkMode ? "bg-[#24363F]" : "bg-slate-300/80"
          }`}
        />

        {/* Location markers */}
        {filteredLocations.map((location) => {
          const Icon = locationIcons[location.type];
          const isSelected = location.id === selectedId;

          return (
            <button
              key={location.id}
              type="button"
              onClick={() => handleSelect(location)}
              aria-label={location.name}
              className="group absolute -translate-x-1/2 -translate-y-1/2 outline-none"
              style={{
                left: `${location.x}%`,
                top: `${location.y}%`,
              }}
            >
              {/* Label */}
              <div
                className={`pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-1.5 text-[10px] font-medium shadow-lg backdrop-blur-sm transition-all duration-200 ${
                  darkMode
                    ? "bg-[#07111F]/95 text-white"
                    : "bg-[#07111F] text-white"
                } ${
                  isSelected
                    ? "visible opacity-100"
                    : "invisible opacity-0 group-hover:visible group-hover:opacity-100"
                }`}
              >
                {location.name}
              </div>

              {/* Marker */}
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-full border-4 border-white shadow-lg transition-all duration-200 ${
                  isSelected
                    ? "scale-125 bg-[#C9A86A] text-[#07111F] shadow-[0_0_0_7px_rgba(201,168,106,0.14)]"
                    : "bg-[#07111F] text-white group-hover:scale-110 group-hover:bg-[#C9A86A] group-hover:text-[#07111F]"
                }`}
              >
                <Icon size={14} strokeWidth={2.2} />
              </span>
            </button>
          );
        })}

        {/* Map controls */}
        <div
          className={`absolute bottom-4 left-4 flex flex-col overflow-hidden rounded-2xl border shadow-xl backdrop-blur-md sm:bottom-5 sm:left-5 ${
            darkMode
              ? "border-white/10 bg-[#0D1B2A]/95"
              : "border-slate-200 bg-white"
          }`}
        >
          {[
            { label: "Zoom in", content: "+" },
            { label: "Zoom out", content: "−" },
          ].map((control, index) => (
            <div key={control.label}>
              <button
                type="button"
                className={`flex h-10 w-10 items-center justify-center text-lg transition ${
                  darkMode
                    ? "text-slate-400 hover:bg-white/5 hover:text-white"
                    : "text-slate-500 hover:bg-slate-50 hover:text-[#07111F]"
                }`}
                aria-label={control.label}
              >
                {control.content}
              </button>

              {index === 0 && (
                <div
                  className={`border-t ${
                    darkMode ? "border-white/10" : "border-slate-100"
                  }`}
                />
              )}
            </div>
          ))}

          <div
            className={`border-t ${
              darkMode ? "border-white/10" : "border-slate-100"
            }`}
          />

          <button
            type="button"
            className={`flex h-10 w-10 items-center justify-center transition ${
              darkMode
                ? "text-slate-400 hover:bg-white/5 hover:text-white"
                : "text-slate-500 hover:bg-slate-50 hover:text-[#07111F]"
            }`}
            aria-label="Compass"
          >
            <Compass size={16} />
          </button>
        </div>

        {/* Legend */}
        <div
          className={`absolute bottom-4 right-4 hidden max-w-[240px] rounded-2xl border p-4 shadow-xl backdrop-blur-md md:block ${
            darkMode
              ? "border-white/10 bg-[#0D1B2A]/95"
              : "border-slate-200 bg-white/95"
          }`}
        >
          <p
            className={`text-[10px] font-semibold uppercase tracking-[0.16em] ${
              darkMode ? "text-slate-500" : "text-slate-400"
            }`}
          >
            Map legend
          </p>

          <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2">
            {[
              ["terminal", Building2],
              ["gate", Plane],
              ["security", ShieldCheck],
              ["lounge", Sparkles],
              ["dining", Utensils],
              ["shopping", ShoppingBag],
            ].map(([type, Icon]) => (
              <div
                key={type as string}
                className="flex items-center gap-2"
              >
                <Icon
                  size={13}
                  className="text-slate-500"
                />

                <span className="text-[10px] capitalize text-slate-500">
                  {
                    locationLabels[
                      type as keyof typeof locationLabels
                    ]
                  }
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile map count */}
        <div
          className={`absolute right-4 top-4 rounded-full border px-3 py-1.5 text-[10px] font-semibold backdrop-blur-md sm:right-5 sm:top-5 ${
            darkMode
              ? "border-white/10 bg-[#0D1B2A]/90 text-slate-400"
              : "border-slate-200 bg-white/90 text-slate-500"
          }`}
        >
          {filteredLocations.length} locations
        </div>
      </div>

      {/* Selected location */}
      {selectedLocation && (
        <div
          className={`border-t p-4 transition-colors duration-500 sm:p-6 ${
            darkMode
              ? "border-white/10 bg-[#0D1B2A]"
              : "border-slate-200 bg-white"
          }`}
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
                  darkMode ? "bg-[#C9A86A]/10" : "bg-[#07111F]"
                }`}
              >
                {(() => {
                  const Icon =
                    locationIcons[selectedLocation.type];

                  return (
                    <Icon
                      size={20}
                      className="text-[#C9A86A]"
                    />
                  );
                })()}
              </div>

              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3
                    className={`font-semibold ${
                      darkMode ? "text-white" : "text-[#07111F]"
                    }`}
                  >
                    {selectedLocation.name}
                  </h3>

                  <span
                    className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] ${
                      darkMode
                        ? "bg-white/5 text-slate-500"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {selectedLocation.terminal}
                  </span>
                </div>

                <p
                  className={`mt-1 text-sm ${
                    darkMode ? "text-slate-500" : "text-slate-500"
                  }`}
                >
                  {selectedLocation.description}
                </p>

                <div
                  className={`mt-3 flex flex-wrap gap-4 text-xs ${
                    darkMode ? "text-slate-600" : "text-slate-400"
                  }`}
                >
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={13} />
                    {selectedLocation.zone}
                  </span>

                  <span className="inline-flex items-center gap-1.5">
                    <Building2 size={13} />
                    {selectedLocation.floor}
                  </span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setInternalSelectedId(undefined);
                onSelectLocation?.(undefined);
              }}
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 md:self-center ${
                darkMode
                  ? "bg-white/5 text-slate-500 hover:bg-white/10 hover:text-white"
                  : "bg-slate-100 text-slate-400 hover:bg-slate-200 hover:text-[#07111F]"
              }`}
              aria-label="Close location"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Empty search */}
      {filteredLocations.length === 0 && (
        <div
          className={`border-t px-6 py-12 text-center ${
            darkMode
              ? "border-white/10 bg-[#0D1B2A]"
              : "border-slate-200 bg-white"
          }`}
        >
          <Search
            size={24}
            className={`mx-auto ${
              darkMode ? "text-slate-600" : "text-slate-300"
            }`}
          />

          <p
            className={`mt-4 font-medium ${
              darkMode ? "text-white" : "text-[#07111F]"
            }`}
          >
            No locations found
          </p>

          <p
            className={`mt-1 text-sm ${
              darkMode ? "text-slate-500" : "text-slate-400"
            }`}
          >
            Try another terminal or search term.
          </p>
        </div>
      )}
    </div>
  );
}

export default AirportMap;