import {
  Armchair,
  Bell,
  Globe2,
  Languages,
} from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

function TravelPreferencesCard() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className={`rounded-[24px] border shadow-[0_12px_40px_rgba(7,17,31,0.05)] transition-colors duration-500 ${
        isDark
          ? "border-white/[0.07] bg-[#0D1B2A]"
          : "border-slate-200 bg-white"
      }`}
    >
      <div
        className={`border-b px-6 py-5 transition-colors duration-500 sm:px-7 ${
          isDark ? "border-white/[0.07]" : "border-black/[0.06]"
        }`}
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9A86A]">
          Personalize your journey
        </p>

        <h2
          className={`mt-1.5 text-xl font-semibold tracking-[-0.03em] transition-colors duration-500 ${
            isDark ? "text-white" : "text-[#07111F]"
          }`}
        >
          Travel preferences
        </h2>
      </div>

      <div
        className={`divide-y transition-colors duration-500 ${
          isDark ? "divide-white/[0.07]" : "divide-black/[0.06]"
        }`}
      >
        <PreferenceRow
          icon={Armchair}
          title="Seat preference"
          value="Not set"
          isDark={isDark}
        />

        <PreferenceRow
          icon={Globe2}
          title="Preferred cabin"
          value="Business"
          isDark={isDark}
        />

        <PreferenceRow
          icon={Languages}
          title="Language"
          value="English"
          isDark={isDark}
        />

        <PreferenceRow
          icon={Bell}
          title="Travel notifications"
          value="Enabled"
          last
          isDark={isDark}
        />
      </div>
    </section>
  );
}

interface PreferenceRowProps {
  icon: typeof Armchair;
  title: string;
  value: string;
  last?: boolean;
  isDark: boolean;
}

function PreferenceRow({
  icon: Icon,
  title,
  value,
  last,
  isDark,
}: PreferenceRowProps) {
  return (
    <div
      className={`flex items-center gap-4 px-6 py-4.5 sm:px-7 ${
        last ? "rounded-b-[24px]" : ""
      }`}
    >
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-500 ${
          isDark
            ? "bg-[#07111F] text-slate-300"
            : "bg-[#F7F8FA] text-[#07111F]"
        }`}
      >
        <Icon size={17} />
      </div>

      <div className="min-w-0 flex-1">
        <p
          className={`text-sm font-semibold transition-colors duration-500 ${
            isDark ? "text-white" : "text-[#07111F]"
          }`}
        >
          {title}
        </p>

        <p
          className={`mt-0.5 text-xs transition-colors duration-500 ${
            isDark ? "text-slate-500" : "text-[#667085]"
          }`}
        >
          {value}
        </p>
      </div>

      <button
        type="button"
        className={`text-xs font-semibold transition-colors duration-300 ${
          isDark
            ? "text-slate-500 hover:text-white"
            : "text-[#667085] hover:text-[#07111F]"
        }`}
      >
        Change
      </button>
    </div>
  );
}

export default TravelPreferencesCard;