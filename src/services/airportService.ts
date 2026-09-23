import { airportLocations } from "../data/airportLocations";
import type { AirportLocation, AirportLocationType } from "../types/airport";

const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const airportService = {
  async getLocations(): Promise<AirportLocation[]> {
    await delay(250);

    return airportLocations;
  },

  async getLocationsByTerminal(
    terminal: string
  ): Promise<AirportLocation[]> {
    await delay(200);

    return airportLocations.filter(
      (location) => location.terminal === terminal
    );
  },

  async getLocationsByType(
    type: AirportLocationType
  ): Promise<AirportLocation[]> {
    await delay(200);

    return airportLocations.filter(
      (location) => location.type === type
    );
  },

  async getLocationById(
    id: string
  ): Promise<AirportLocation | undefined> {
    await delay(150);

    return airportLocations.find(
      (location) => location.id === id
    );
  },
};