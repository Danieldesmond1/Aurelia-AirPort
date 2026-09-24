import { transportOptions } from "../data/transport";
import type { TransportOption, TransportType } from "../types/transport";

const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const transportService = {
  async getTransportOptions(): Promise<TransportOption[]> {
    await delay(250);

    return transportOptions;
  },

  async getTransportByType(
    type: TransportType
  ): Promise<TransportOption[]> {
    await delay(200);

    return transportOptions.filter(
      (option) => option.type === type
    );
  },

  async getTransportById(
    id: string
  ): Promise<TransportOption | undefined> {
    await delay(150);

    return transportOptions.find(
      (option) => option.id === id
    );
  },
};