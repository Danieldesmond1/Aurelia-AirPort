export type AirportLocationType =
  | "terminal"
  | "gate"
  | "security"
  | "immigration"
  | "lounge"
  | "dining"
  | "shopping"
  | "baggage"
  | "parking"
  | "transport"
  | "restroom"
  | "information";

export interface AirportLocation {
  id: string;
  name: string;
  type: AirportLocationType;
  terminal: string;
  floor: string;
  zone: string;
  description: string;
  x: number;
  y: number;
  featured?: boolean;
}