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
import MyTripsPage from "../pages/passenger/MyTripsPage";
import TripDetailsPage from "../pages/passenger/TripDetailsPage";
import PassengerFlightStatusPage from "../pages/passenger/PassengerFlightStatusPage";
import PassengerAirportGuidePage from "../pages/passenger/PassengerAirportGuidePage";
import PassengerProfilePage from "../pages/passenger/PassengerProfilePage";
import PassengerSettingsPage from "../pages/passenger/PassengerSettingsPage";

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

  {
    path: "/portal",
    element: <PassengerLayout />,
    children: [
      {
        index: true,
        element: <PassengerDashboardPage />,
      },
      {
        path: "trips",
        element: <MyTripsPage />,
      },
      {
        path: "trips/:id",
        element: <TripDetailsPage />,
      },
      {
        path: "flights",
        element: <PassengerFlightStatusPage />,
      },
      {
        path: "airport",
        element: <PassengerAirportGuidePage />,
      },
      {
        path: "profile",
        element: <PassengerProfilePage />,
      },
      {
        path: "settings",
        element: <PassengerSettingsPage />,
      },
      
    ],
  },
]);