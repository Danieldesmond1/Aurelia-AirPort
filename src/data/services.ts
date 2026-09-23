import type { AirportService } from "../types/service";

export const services: AirportService[] = [
  {
    id: "service-001",
    name: "Aurelia Grand Lounge",
    description:
      "A quiet premium space with dining, private work areas, showers, and runway views.",
    category: "Lounge",
    location: "Airside · Level 3",
    terminal: "T1",
    hours: "Open 24 hours",
    featured: true,
  },
  {
    id: "service-002",
    name: "The Atrium",
    description:
      "An all-day dining destination featuring international cuisine and locally inspired dishes.",
    category: "Dining",
    location: "Terminal 1 · Level 2",
    terminal: "T1",
    hours: "06:00 – 23:00",
    featured: true,
  },
  {
    id: "service-003",
    name: "Aurelia Duty Free",
    description:
      "Premium fashion, fragrances, electronics, travel essentials, and gifts.",
    category: "Shopping",
    location: "Terminal 1 · Departures",
    terminal: "T1",
    hours: "05:00 – 00:00",
    featured: true,
  },
  {
    id: "service-004",
    name: "Executive Club",
    description:
      "A private lounge experience designed for business travellers and frequent flyers.",
    category: "Lounge",
    location: "Terminal 3 · Level 4",
    terminal: "T3",
    hours: "05:00 – 23:00",
  },
  {
    id: "service-005",
    name: "Aurelia Parking",
    description:
      "Secure short-stay and long-stay parking with dedicated premium spaces.",
    category: "Parking",
    location: "Airport East",
    terminal: "T1",
    hours: "Open 24 hours",
  },
  {
    id: "service-006",
    name: "Airport Express",
    description:
      "Fast connections between Aurelia International Airport and the city centre.",
    category: "Transport",
    location: "Ground Transportation",
    terminal: "T1",
    hours: "Every 20 minutes",
  },
  {
    id: "service-007",
    name: "Aurelia Business Hub",
    description:
      "Private meeting rooms, high-speed Wi-Fi, printing, and quiet workspaces.",
    category: "Travel",
    location: "Terminal 2 · Level 2",
    terminal: "T2",
    hours: "05:30 – 22:00",
  },
  {
    id: "service-008",
    name: "Family Assistance Centre",
    description:
      "Dedicated support for families travelling with children and passengers requiring additional assistance.",
    category: "Airport",
    location: "Terminal 1 · Departures",
    terminal: "T1",
    hours: "06:00 – 22:00",
  },
];