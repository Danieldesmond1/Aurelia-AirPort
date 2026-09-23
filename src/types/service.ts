export type ServiceCategory =
  | "Dining"
  | "Shopping"
  | "Lounge"
  | "Transport"
  | "Parking"
  | "Travel"
  | "Airport";

export interface AirportService {
  id: string;
  name: string;
  description: string;
  category: ServiceCategory;
  location: string;
  terminal: string;
  hours: string;
  featured?: boolean;
}