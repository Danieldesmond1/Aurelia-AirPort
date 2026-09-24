import type {
  PassengerProfile,
  PassengerTrip,
} from "../types/passenger";

export const passengerProfile: PassengerProfile = {
  id: "passenger-001",
  firstName: "Daniel",
  lastName: "Morgan",
  email: "daniel.morgan@example.com",
  phone: "+1 202 555 0147",
  nationality: "United States",
  frequentFlyerNumber: "AUR-482915",
};

export const passengerTrips: PassengerTrip[] = [
  {
    id: "trip-001",
    bookingReference: "AUR7K2M",
    flightId: "au-204",
    flightNumber: "AU 204",
    airline: "Aurelia Airways",
    airlineCode: "AU",

    origin: "Aurelia International",
    originCode: "AUR",

    destination: "London Heathrow",
    destinationCode: "LHR",

    departureDate: "2026-10-14",
    departureTime: "18:45",
    arrivalTime: "06:20",

    terminal: "T1",
    gate: "A12",

    seat: "14A",
    cabinClass: "Business",

    status: "Upcoming",

    baggageAllowance: "2 × 32 kg",
    checkedBags: 1,

    boardingPassAvailable: true,
  },
  {
    id: "trip-002",
    bookingReference: "AUR4P8X",
    flightId: "au-518",
    flightNumber: "AU 518",
    airline: "Aurelia Airways",
    airlineCode: "AU",

    origin: "Nairobi",
    originCode: "NBO",

    destination: "Aurelia International",
    destinationCode: "AUR",

    departureDate: "2026-11-02",
    departureTime: "14:10",
    arrivalTime: "18:35",

    terminal: "T2",

    seat: "22C",
    cabinClass: "Economy",

    status: "Upcoming",

    baggageAllowance: "1 × 23 kg",
    checkedBags: 0,

    boardingPassAvailable: false,
  },
];