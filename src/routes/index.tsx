import { createBrowserRouter } from "react-router-dom";

import PassengerLayout from "../layouts/PassengerLayout";

import HomePage from "../pages/public/HomePage";
import FlightsPage from "../pages/public/FlightsPage";
import FlightDetailsPage from "../pages/public/FlightDetailsPage";
import ServicesPage from "../pages/public/ServicesPage";
import ServiceDetailsPage from "../pages/public/ServiceDetailsPage";
import TerminalsPage from "../pages/public/TerminalsPage";
import TerminalDetailsPage from "../pages/public/TerminalDetailsPage";
import AirportPage from "../pages/public/AirportPage";
import TransportPage from "../pages/public/TransportPage";
import ParkingPage from "../pages/public/ParkingPage";

import PassengerDashboardPage from "../pages/passenger/PassengerDashboardPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "/flights",
    element: <FlightsPage />,
  },

  {
    path: "/flights/:id",
    element: <FlightDetailsPage />,
  },

  {
    path: "/services",
    element: <ServicesPage />,
  },

  {
    path: "/services/:id",
    element: <ServiceDetailsPage />,
  },

  {
    path: "/terminals",
    element: <TerminalsPage />,
  },

  {
    path: "/terminals/:id",
    element: <TerminalDetailsPage />,
  },

  {
    path: "/airport",
    element: <AirportPage />,
  },

  {
    path: "/transport",
    element: <TransportPage />,
  },

  {
    path: "/parking",
    element: <ParkingPage />,
  },

  // Passenger Portal
  {
    path: "/portal",
    element: <PassengerLayout />,
    children: [
      {
        index: true,
        element: <PassengerDashboardPage />,
      },
    ],
  },
]);