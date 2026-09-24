import type { TransportOption } from "../types/transport";

export const transportOptions: TransportOption[] = [
  {
    id: "transport-express",
    name: "Aurelia Airport Express",
    type: "Airport Express",
    description:
      "Fast and comfortable rail connections between Aurelia International Airport and the city centre.",
    location: "Ground Transportation · Central Station",
    terminal: "T1",
    operatingHours: "05:00 – 00:30",
    frequency: "Every 20 minutes",
    journeyTime: "28 minutes",
    priceFrom: "$12",
    featured: true,
  },
  {
    id: "transport-taxi",
    name: "Official Airport Taxi",
    type: "Taxi",
    description:
      "Licensed airport taxis with dedicated pickup zones outside every passenger terminal.",
    location: "Arrivals · Ground Level",
    terminal: "All terminals",
    operatingHours: "24 hours",
    journeyTime: "30–45 minutes",
    priceFrom: "$25",
    featured: true,
    available24Hours: true,
  },
  {
    id: "transport-shuttle",
    name: "Aurelia Terminal Shuttle",
    type: "Shuttle",
    description:
      "Complimentary shuttle service connecting all three passenger terminals.",
    location: "Terminal Transport Hubs",
    terminal: "All terminals",
    operatingHours: "24 hours",
    frequency: "Every 10 minutes",
    journeyTime: "8–15 minutes",
    priceFrom: "Complimentary",
    featured: true,
    available24Hours: true,
  },
  {
    id: "transport-rental",
    name: "Aurelia Car Rental Centre",
    type: "Car Rental",
    description:
      "Major rental providers with vehicles available for short and long-term hire.",
    location: "Ground Transportation · East Complex",
    terminal: "T2",
    operatingHours: "06:00 – 23:00",
    journeyTime: "5 minutes from T2",
    featured: true,
  },
  {
    id: "transport-ride",
    name: "Ride Pickup Zone",
    type: "Ride Pickup",
    description:
      "Designated pickup areas for approved ride-hailing services.",
    location: "Arrivals · Pickup Level",
    terminal: "All terminals",
    operatingHours: "24 hours",
    journeyTime: "Varies by destination",
    featured: true,
    available24Hours: true,
  },
];