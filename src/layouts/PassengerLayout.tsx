import { Outlet } from "react-router-dom";

import PassengerHeader from "../components/passenger/PassengerHeader";
import PassengerSidebar from "../components/passenger/PassengerSidebar";

function PassengerLayout() {
  return (
    <div className="flex min-h-screen bg-[#F7F8FA] text-[#111827]">
      {/* Desktop sidebar */}
      <PassengerSidebar />

      {/* Main application */}
      <div className="flex min-h-screen min-w-0 flex-1 flex-col">
        <PassengerHeader
          firstName="Daniel"
          lastName="Morgan"
        />

        <main className="min-w-0 flex-1 overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default PassengerLayout;