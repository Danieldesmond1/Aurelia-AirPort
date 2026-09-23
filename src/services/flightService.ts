import { flights } from "../data/flights";
import type { Flight, FlightDirection } from "../types/flight";

const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const flightService = {
  async getFlights(): Promise<Flight[]> {
    await delay(300);

    return flights;
  },

  async getFlightsByDirection(
    direction: FlightDirection
  ): Promise<Flight[]> {
    await delay(300);

    return flights.filter((flight) => flight.direction === direction);
  },

  async getFlightById(id: string): Promise<Flight | undefined> {
    await delay(200);

    return flights.find((flight) => flight.id === id);
  },
};