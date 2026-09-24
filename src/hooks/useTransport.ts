import { useEffect, useState } from "react";

import { transportService } from "../services/transportService";
import type { TransportOption } from "../types/transport";

export function useTransport() {
  const [transport, setTransport] = useState<TransportOption[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTransport = async () => {
      try {
        const data = await transportService.getTransportOptions();
        setTransport(data);
      } finally {
        setLoading(false);
      }
    };

    loadTransport();
  }, []);

  return {
    transport,
    loading,
  };
}