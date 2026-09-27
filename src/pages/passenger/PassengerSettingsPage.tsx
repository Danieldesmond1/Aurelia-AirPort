import {
  Bell,
  Clock3,
  Globe2,
  Moon,
  Plane,
  ShieldCheck,
  Sun,
  UserRound,
} from "lucide-react";
import { useState } from "react";

import SettingsAccountCard from "../../components/passenger/SettingsAccountCard";
import SettingsSection from "../../components/passenger/SettingsSection";
import SettingsRow, {
  SettingsSelect,
  SettingsToggle,
} from "../../components/passenger/SettingsRow";
import { useTheme } from "../../context/ThemeContext";

function PassengerSettingsPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [language, setLanguage] = useState("English");
  const [timeZone, setTimeZone] = useState("Local airport time");
  const [appearance, setAppearance] = useState("Light");
  const [flightUpdates, setFlightUpdates] = useState(true);
  const [checkInReminders, setCheckInReminders] = useState(true);
  const [gateChanges, setGateChanges] = useState(true);
  const [travelOffers, setTravelOffers] = useState(false);
  const [personalizedExperience, setPersonalizedExperience] = useState(true);

  return (
    <div
      className={`mx-auto w-full max-w-[1440px] px-5 py-7 transition-colors duration-500 sm:px-8 sm:py-9 lg:px-10 lg:py-10 ${
        isDark ? "text-white" : "text-[#111827]"
      }`}
    >
      <div className="mb-8">
        <div
          className={`flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] ${
            isDark ? "text-slate-400" : "text-[#667085]"
          }`}
        >
          <UserRound size={13} />
          Passenger portal
        </div>

        <h1
          className={`mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl ${
            isDark ? "text-white" : "text-[#07111F]"
          }`}
        >
          Settings
        </h1>

        <p
          className={`mt-2 max-w-2xl text-sm leading-6 ${
            isDark ? "text-slate-400" : "text-[#667085]"
          }`}
        >
          Control how Aurelia keeps you informed and how your passenger
          experience works.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="space-y-6">
          <SettingsSection
            eyebrow="Preferences"
            title="Your experience"
            description="Choose the language, time settings and appearance used throughout the passenger portal."
          >
            <SettingsRow
              icon={Globe2}
              title="Language"
              description="Choose the language used across the portal."
            >
              <SettingsSelect
                value={language}
                options={["English", "French", "Spanish"]}
                onChange={setLanguage}
              />
            </SettingsRow>

            <SettingsRow
              icon={Clock3}
              title="Time zone"
              description="Choose how departure and arrival times are displayed."
            >
              <SettingsSelect
                value={timeZone}
                options={["Local airport time", "My local time"]}
                onChange={setTimeZone}
              />
            </SettingsRow>

            <SettingsRow
              icon={appearance === "Light" ? Sun : Moon}
              title="Appearance"
              description="Choose how the passenger portal looks."
              last
            >
              <SettingsSelect
                value={appearance}
                options={["Light", "Dark", "System"]}
                onChange={setAppearance}
              />
            </SettingsRow>
          </SettingsSection>

          <SettingsSection
            eyebrow="Notifications"
            title="Stay informed"
            description="Choose which journey updates Aurelia can send you."
          >
            <SettingsRow
              icon={Plane}
              title="Flight updates"
              description="Receive updates about your flight's status and schedule."
            >
              <SettingsToggle
                enabled={flightUpdates}
                onChange={setFlightUpdates}
              />
            </SettingsRow>

            <SettingsRow
              icon={Bell}
              title="Check-in reminders"
              description="Get a reminder when online check-in becomes available."
            >
              <SettingsToggle
                enabled={checkInReminders}
                onChange={setCheckInReminders}
              />
            </SettingsRow>

            <SettingsRow
              icon={Bell}
              title="Gate changes"
              description="Receive important updates when your gate changes."
            >
              <SettingsToggle
                enabled={gateChanges}
                onChange={setGateChanges}
              />
            </SettingsRow>

            <SettingsRow
              icon={Bell}
              title="Travel offers"
              description="Occasional offers and travel updates from Aurelia."
              last
            >
              <SettingsToggle
                enabled={travelOffers}
                onChange={setTravelOffers}
              />
            </SettingsRow>
          </SettingsSection>

          <SettingsSection
            eyebrow="Privacy"
            title="Your data preferences"
            description="Choose how Aurelia can personalize your passenger experience."
          >
            <SettingsRow
              icon={ShieldCheck}
              title="Personalized experience"
              description="Use your journey information to provide relevant airport guidance and recommendations."
            >
              <SettingsToggle
                enabled={personalizedExperience}
                onChange={setPersonalizedExperience}
              />
            </SettingsRow>

            <SettingsRow
              icon={ShieldCheck}
              title="Account data"
              description="Your passenger information is used to provide account and journey services."
              last
            >
              <span
                className={`text-xs font-semibold ${
                  isDark ? "text-slate-400" : "text-[#667085]"
                }`}
              >
                Protected
              </span>
            </SettingsRow>
          </SettingsSection>
        </div>

        <div className="space-y-6">
          <SettingsAccountCard />

          <section className="rounded-[24px] bg-[#07111F] p-6 text-white shadow-[0_16px_45px_rgba(7,17,31,0.1)] sm:p-7">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#C9A86A]/10 text-[#C9A86A]">
              <ShieldCheck size={19} />
            </div>

            <h2 className="mt-5 text-xl font-semibold tracking-[-0.03em]">
              Your account is protected
            </h2>

            <p className="mt-2 text-sm leading-6 text-white/55">
              Aurelia uses your account information to provide secure access
              to your trips, boarding information and passenger services.
            </p>

            <div className="mt-6 flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4">
              <ShieldCheck
                size={16}
                className="mt-0.5 shrink-0 text-[#C9A86A]"
              />

              <p className="text-xs leading-5 text-white/55">
                Security controls shown here are currently represented in the
                frontend experience. Authentication and account security will
                connect to the backend when the application is integrated.
              </p>
            </div>
          </section>

          <section
            className={`rounded-[24px] border p-6 transition-colors duration-500 sm:p-7 ${
              isDark
                ? "border-red-400/20 bg-red-950/20"
                : "border-red-200 bg-red-50"
            }`}
          >
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                isDark
                  ? "bg-red-400/10 text-red-300"
                  : "bg-red-100 text-red-600"
              }`}
            >
              <ShieldCheck size={17} />
            </div>

            <h2
              className={`mt-4 text-sm font-semibold ${
                isDark ? "text-red-200" : "text-red-900"
              }`}
            >
              Account controls
            </h2>

            <p
              className={`mt-1.5 text-xs leading-5 ${
                isDark ? "text-red-200/65" : "text-red-700/80"
              }`}
            >
              Account deletion and other permanent actions will be available
              once Aurelia&apos;s account backend is connected.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PassengerSettingsPage;