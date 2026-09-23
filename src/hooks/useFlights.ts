import { useEffect, useState } from "react";
import { flightService } from "../services/flightService";
import type { Flight } from "../types/flight";

export function useFlights() {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFlights = async () => {
      try {
        const data = await flightService.getFlights();
        setFlights(data);
      } finally {
        setLoading(false);
      }
    };

    loadFlights();
  }, []);

  return {
    flights,
    loading,
  };
}