import { useEffect, useState } from "react";

import { passengerService } from "../services/passengerService";

import type {
  PassengerProfile,
  PassengerTrip,
} from "../types/passenger";

export function usePassenger() {
  const [profile, setProfile] =
    useState<PassengerProfile | null>(null);

  const [trips, setTrips] =
    useState<PassengerTrip[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPassenger = async () => {
      try {
        const [profileData, tripData] =
          await Promise.all([
            passengerService.getProfile(),
            passengerService.getTrips(),
          ]);

        setProfile(profileData);
        setTrips(tripData);
      } finally {
        setLoading(false);
      }
    };

    loadPassenger();
  }, []);

  return {
    profile,
    trips,
    loading,
  };
}