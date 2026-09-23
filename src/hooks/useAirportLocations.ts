import { useEffect, useState } from "react";

import { airportService } from "../services/airportService";
import type { AirportLocation } from "../types/airport";

export function useAirportLocations() {
  const [locations, setLocations] = useState<AirportLocation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadLocations = async () => {
      try {
        const data = await airportService.getLocations();
        setLocations(data);
      } finally {
        setLoading(false);
      }
    };

    loadLocations();
  }, []);

  return {
    locations,
    loading,
  };
}