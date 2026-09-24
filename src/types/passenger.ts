export interface PassengerProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  nationality?: string;
  frequentFlyerNumber?: string;
  avatarUrl?: string;
}

export interface PassengerTrip {
  id: string;
  bookingReference: string;
  flightId: string;
  flightNumber: string;
  airline: string;
  airlineCode: string;

  origin: string;
  originCode: string;

  destination: string;
  destinationCode: string;

  departureDate: string;
  departureTime: string;
  arrivalTime: string;

  terminal: string;
  gate?: string;

  seat?: string;
  cabinClass: "Economy" | "Premium Economy" | "Business" | "First";

  status:
    | "Upcoming"
    | "Checked In"
    | "Boarding"
    | "Completed"
    | "Cancelled";

  baggageAllowance?: string;
  checkedBags?: number;

  boardingPassAvailable?: boolean;
}