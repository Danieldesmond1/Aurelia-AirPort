export type ParkingType =
  | "Short Stay"
  | "Long Stay"
  | "Premium"
  | "Valet"
  | "Accessible";

export interface ParkingOption {
  id: string;
  name: string;
  type: ParkingType;
  description: string;
  location: string;
  terminal: string;
  operatingHours: string;
  priceFrom: string;
  distance?: string;
  spaces?: string;
  features: string[];
  featured?: boolean;
}