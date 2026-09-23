export type FlightStatus =
  | "On Time"
  | "Boarding"
  | "Delayed"
  | "Departed"
  | "Landed"
  | "Cancelled";

export type FlightDirection = "arrival" | "departure";

export interface Flight {
  id: string;
  flightNumber: string;
  airline: string;
  airlineCode: string;
  origin: string;
  destination: string;
  originCode: string;
  destinationCode: string;
  terminal: string;
  gate: string;
  scheduledTime: string;
  estimatedTime?: string;
  status: FlightStatus;
  direction: FlightDirection;
  aircraft: string;
}