import {
  passengerProfile,
  passengerTrips,
} from "../data/passenger";

import type {
  PassengerProfile,
  PassengerTrip,
} from "../types/passenger";

const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const passengerService = {
  async getProfile(): Promise<PassengerProfile> {
    await delay(250);

    return passengerProfile;
  },

  async getTrips(): Promise<PassengerTrip[]> {
    await delay(300);

    return passengerTrips;
  },

  async getTripById(
    id: string
  ): Promise<PassengerTrip | undefined> {
    await delay(200);

    return passengerTrips.find(
      (trip) => trip.id === id
    );
  },

  async getUpcomingTrips(): Promise<PassengerTrip[]> {
    await delay(250);

    return passengerTrips.filter(
      (trip) =>
        trip.status === "Upcoming" ||
        trip.status === "Checked In" ||
        trip.status === "Boarding"
    );
  },
};