import { Outlet } from "react-router-dom";

import PassengerHeader from "../components/passenger/PassengerHeader";
import PassengerSidebar from "../components/passenger/PassengerSidebar";
import { useTheme } from "../context/ThemeContext";

function PassengerLayout() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`flex min-h-screen transition-colors duration-500 ${
        isDark
          ? "bg-[#07111F] text-white"
          : "bg-[#F7F8FA] text-[#111827]"
      }`}
    >
      {/* Desktop sidebar */}
      <PassengerSidebar />

      {/* Main application */}
      <div className="flex min-h-screen min-w-0 flex-1 flex-col">
        <PassengerHeader
          firstName="Daniel"
          lastName="Morgan"
        />

        <main
          className={`min-w-0 flex-1 overflow-x-hidden transition-colors duration-500 ${
            isDark ? "bg-[#07111F]" : "bg-[#F7F8FA]"
          }`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default PassengerLayout;