export type TransportType =
  | "Airport Express"
  | "Taxi"
  | "Shuttle"
  | "Car Rental"
  | "Ride Pickup";

export interface TransportOption {
  id: string;
  name: string;
  type: TransportType;
  description: string;
  location: string;
  terminal: string;
  operatingHours: string;
  frequency?: string;
  journeyTime?: string;
  priceFrom?: string;
  featured?: boolean;
  available24Hours?: boolean;
}