import type { ReactNode } from "react";
import { useTheme } from "../../context/ThemeContext";

interface SettingsSectionProps {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
}

function SettingsSection({
  eyebrow,
  title,
  description,
  children,
}: SettingsSectionProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className={`overflow-hidden rounded-[24px] border shadow-[0_12px_40px_rgba(7,17,31,0.05)] transition-colors duration-500 ${
        isDark
          ? "border-white/[0.07] bg-[#0D1B2A]"
          : "border-black/[0.06] bg-white"
      }`}
    >
      <div
        className={`border-b px-6 py-5 transition-colors duration-500 sm:px-7 ${
          isDark ? "border-white/[0.07]" : "border-black/[0.06]"
        }`}
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9A86A]">
          {eyebrow}
        </p>

        <h2
          className={`mt-1.5 text-xl font-semibold tracking-[-0.03em] ${
            isDark ? "text-white" : "text-[#07111F]"
          }`}
        >
          {title}
        </h2>

        <p
          className={`mt-1.5 max-w-2xl text-sm leading-6 ${
            isDark ? "text-slate-400" : "text-[#667085]"
          }`}
        >
          {description}
        </p>
      </div>

      <div>{children}</div>
    </section>
  );
}

export default SettingsSection;