import { parkingOptions } from "../data/parking";
import type { ParkingOption, ParkingType } from "../types/parking";

const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const parkingService = {
  async getParkingOptions(): Promise<ParkingOption[]> {
    await delay(250);

    return parkingOptions;
  },

  async getParkingByType(
    type: ParkingType
  ): Promise<ParkingOption[]> {
    await delay(200);

    return parkingOptions.filter(
      (option) => option.type === type
    );
  },

  async getParkingById(
    id: string
  ): Promise<ParkingOption | undefined> {
    await delay(150);

    return parkingOptions.find(
      (option) => option.id === id
    );
  },
};