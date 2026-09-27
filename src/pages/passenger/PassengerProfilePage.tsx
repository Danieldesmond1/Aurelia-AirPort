import {
  ArrowLeft,
  UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";

import ProfileAccountCard from "../../components/passenger/ProfileAccountCard";
import ProfileHeader from "../../components/passenger/ProfileHeader";
import ProfileInformationCard from "../../components/passenger/ProfileInformationCard";
import TravelPreferencesCard from "../../components/passenger/TravelPreferencesCard";
import { usePassenger } from "../../hooks/usePassenger";
import { useTheme } from "../../context/ThemeContext";

function PassengerProfilePage() {
  const {
    profile,
    loading,
  } = usePassenger();

  const { theme } = useTheme();
  const isDark = theme === "dark";

  if (loading) {
    return (
      <div className="mx-auto w-full max-w-[1440px] px-5 py-8 sm:px-8 lg:px-10">
        <div className="animate-pulse space-y-6">
          <div
            className={`h-32 rounded-[28px] transition-colors duration-500 ${
              isDark ? "bg-white/[0.06]" : "bg-slate-200"
            }`}
          />

          <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <div
              className={`h-[480px] rounded-[24px] transition-colors duration-500 ${
                isDark ? "bg-white/[0.06]" : "bg-slate-200"
              }`}
            />

            <div className="space-y-6">
              <div
                className={`h-72 rounded-[24px] transition-colors duration-500 ${
                  isDark ? "bg-white/[0.06]" : "bg-slate-200"
                }`}
              />

              <div
                className={`h-56 rounded-[24px] transition-colors duration-500 ${
                  isDark ? "bg-white/[0.06]" : "bg-slate-200"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="mx-auto flex min-h-[70vh] w-full max-w-[700px] items-center justify-center px-5 py-12">
        <div
          className={`w-full rounded-[28px] border p-8 text-center shadow-[0_12px_40px_rgba(7,17,31,0.05)] transition-colors duration-500 sm:p-10 ${
            isDark
              ? "border-white/[0.07] bg-[#0D1B2A]"
              : "border-slate-200 bg-white"
          }`}
        >
          <div
            className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl transition-colors duration-500 ${
              isDark
                ? "bg-[#07111F] text-slate-400"
                : "bg-[#F7F8FA] text-[#07111F]"
            }`}
          >
            <UserRound size={22} />
          </div>

          <h1
            className={`mt-5 text-2xl font-semibold tracking-[-0.04em] transition-colors duration-500 ${
              isDark ? "text-white" : "text-[#07111F]"
            }`}
          >
            Profile unavailable
          </h1>

          <p
            className={`mt-3 text-sm leading-6 transition-colors duration-500 ${
              isDark ? "text-slate-400" : "text-[#667085]"
            }`}
          >
            We couldn't load your passenger profile. Please try again.
          </p>

          <Link
            to="/portal"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#07111F] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0D1B2A]"
          >
            <ArrowLeft size={15} />
            Back to overview
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-[1440px] px-5 py-7 transition-colors duration-500 sm:px-8 sm:py-9 lg:px-10 lg:py-10">
      <div className="mb-8">
        <div
          className={`flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors duration-500 ${
            isDark ? "text-slate-500" : "text-[#667085]"
          }`}
        >
          <UserRound size={13} />
          Passenger portal
        </div>

        <p
          className={`mt-2 text-sm transition-colors duration-500 ${
            isDark ? "text-slate-400" : "text-[#667085]"
          }`}
        >
          Account · Manage your passenger profile and preferences
        </p>
      </div>

      <ProfileHeader
        firstName={profile.firstName}
        lastName={profile.lastName}
        email={profile.email}
        frequentFlyerNumber={profile.frequentFlyerNumber}
      />

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <ProfileInformationCard profile={profile} />

        <div className="space-y-6">
          <TravelPreferencesCard />
          <ProfileAccountCard />
        </div>
      </div>

      <div
        className={`mt-8 flex flex-col gap-4 rounded-[24px] border px-6 py-5 shadow-[0_12px_40px_rgba(7,17,31,0.04)] transition-colors duration-500 sm:flex-row sm:items-center sm:justify-between sm:px-7 ${
          isDark
            ? "border-white/[0.07] bg-[#0D1B2A]"
            : "border-slate-200 bg-white"
        }`}
      >
        <div>
          <p
            className={`text-sm font-semibold transition-colors duration-500 ${
              isDark ? "text-white" : "text-[#07111F]"
            }`}
          >
            Manage your journey
          </p>

          <p
            className={`mt-1 text-xs transition-colors duration-500 ${
              isDark ? "text-slate-400" : "text-[#667085]"
            }`}
          >
            Return to your passenger overview to see your upcoming trips.
          </p>
        </div>

        <Link
          to="/portal"
          className={`inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-xs font-semibold transition-all duration-300 ${
            isDark
              ? "border-white/[0.08] text-white hover:border-white/15 hover:bg-[#07111F]"
              : "border-black/[0.08] text-[#07111F] hover:bg-[#07111F] hover:text-white"
          }`}
        >
          Back to overview
          <ArrowLeft size={14} />
        </Link>
      </div>
    </div>
  );
}

export default PassengerProfilePage;