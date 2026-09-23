import { useMemo, useState } from "react";
import {
  ArrowRight,
  Building2,
  Check,
  CircleParking,
  Coffee,
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
    <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
      {/* Toolbar */}
      <div className="border-b border-slate-200 bg-white p-4 md:p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Terminal selector */}
          <div className="flex flex-wrap gap-2">
            {terminals.map((terminal) => (
              <button
                key={terminal}
                type="button"
                onClick={() => setActiveTerminal(terminal)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                  activeTerminal === terminal
                    ? "bg-[#07111F] text-white"
                    : "bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-[#07111F]"
                }`}
              >
                {terminal === "ALL"
                  ? "All terminals"
                  : terminal}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full lg:max-w-xs">
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              value={searchQuery}
              onChange={(event) =>
                setSearchQuery(event.target.value)
              }
              placeholder="Search gate, lounge, dining..."
              className="h-11 w-full rounded-full border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm text-[#07111F] outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:bg-white"
            />
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="relative min-h-[620px] overflow-hidden bg-[#EEF2F5]">
        {/* Decorative grid */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(7,17,31,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(7,17,31,0.05) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />

        {/* Runway */}
        <div className="absolute left-[7%] top-[10%] h-[8%] w-[86%] rotate-[-4deg] rounded-full bg-[#D9DEE4]">
          <div className="absolute inset-x-8 top-1/2 border-t-2 border-dashed border-white/80" />
        </div>

        {/* Airport road */}
        <div className="absolute bottom-[9%] left-[3%] h-8 w-[94%] rounded-full bg-[#C9D0D7]">
          <div className="absolute inset-x-8 top-1/2 border-t-2 border-dashed border-white" />
        </div>

        {/* Terminal shapes */}
        <div className="absolute left-[9%] top-[30%] h-[35%] w-[25%] rounded-[42px] border border-slate-300 bg-white/80 shadow-lg shadow-slate-300/30 backdrop-blur-sm">
          <div className="absolute inset-5 rounded-[28px] border border-dashed border-slate-300" />
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
            T1
          </div>
        </div>

        <div className="absolute left-[38%] top-[34%] h-[28%] w-[22%] rounded-[42px] border border-slate-300 bg-white/80 shadow-lg shadow-slate-300/30 backdrop-blur-sm">
          <div className="absolute inset-5 rounded-[28px] border border-dashed border-slate-300" />
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
            T2
          </div>
        </div>

        <div className="absolute right-[8%] top-[30%] h-[35%] w-[25%] rounded-[42px] border border-slate-300 bg-white/80 shadow-lg shadow-slate-300/30 backdrop-blur-sm">
          <div className="absolute inset-5 rounded-[28px] border border-dashed border-slate-300" />
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
            T3
          </div>
        </div>

        {/* Connecting taxiways */}
        <div className="absolute left-[31%] top-[48%] h-4 w-[40%] rounded-full bg-slate-300/80" />
        <div className="absolute left-[25%] top-[62%] h-4 w-[50%] rotate-[8deg] rounded-full bg-slate-300/80" />

        {/* Location markers */}
        {filteredLocations.map((location) => {
          const Icon =
            locationIcons[location.type];

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
                className={`pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#07111F] px-3 py-1.5 text-[10px] font-medium text-white opacity-0 shadow-lg transition duration-200 group-hover:opacity-100 ${
                  isSelected ? "opacity-100" : ""
                }`}
              >
                {location.name}
              </div>

              {/* Marker */}
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-full border-4 border-white shadow-lg transition duration-200 ${
                  isSelected
                    ? "scale-125 bg-[#C9A86A] text-[#07111F]"
                    : "bg-[#07111F] text-white group-hover:scale-110 group-hover:bg-[#C9A86A] group-hover:text-[#07111F]"
                }`}
              >
                <Icon size={14} strokeWidth={2.2} />
              </span>
            </button>
          );
        })}

        {/* Map controls */}
        <div className="absolute bottom-5 left-5 flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center text-slate-500 transition hover:bg-slate-50 hover:text-[#07111F]"
            aria-label="Zoom in"
          >
            +
          </button>

          <div className="border-t border-slate-100" />

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center text-slate-500 transition hover:bg-slate-50 hover:text-[#07111F]"
            aria-label="Zoom out"
          >
            −
          </button>

          <div className="border-t border-slate-100" />

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center text-slate-500 transition hover:bg-slate-50 hover:text-[#07111F]"
            aria-label="Compass"
          >
            <Compass size={16} />
          </button>
        </div>

        {/* Legend */}
        <div className="absolute bottom-5 right-5 hidden max-w-[240px] rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-xl backdrop-blur-sm md:block">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
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
                  {locationLabels[type as keyof typeof locationLabels]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Selected location */}
      {selectedLocation && (
        <div className="border-t border-slate-200 bg-white p-5 md:p-6">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#07111F]">
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

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-semibold text-[#07111F]">
                    {selectedLocation.name}
                  </h3>

                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                    {selectedLocation.terminal}
                  </span>
                </div>

                <p className="mt-1 text-sm text-slate-500">
                  {selectedLocation.description}
                </p>

                <div className="mt-3 flex flex-wrap gap-4 text-xs text-slate-400">
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
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-400 transition hover:bg-slate-200 hover:text-[#07111F]"
              aria-label="Close location"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Empty search */}
      {filteredLocations.length === 0 && (
        <div className="border-t border-slate-200 bg-white px-6 py-12 text-center">
          <Search
            size={24}
            className="mx-auto text-slate-300"
          />

          <p className="mt-4 font-medium text-[#07111F]">
            No locations found
          </p>

          <p className="mt-1 text-sm text-slate-400">
            Try another terminal or search term.
          </p>
        </div>
      )}
    </div>
  );
}

export default AirportMap;