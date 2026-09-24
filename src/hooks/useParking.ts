import { useEffect, useState } from "react";

import { parkingService } from "../services/parkingService";
import type { ParkingOption } from "../types/parking";

export function useParking() {
  const [parking, setParking] = useState<ParkingOption[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadParking = async () => {
      try {
        const data = await parkingService.getParkingOptions();
        setParking(data);
      } finally {
        setLoading(false);
      }
    };

    loadParking();
  }, []);

  return {
    parking,
    loading,
  };
}