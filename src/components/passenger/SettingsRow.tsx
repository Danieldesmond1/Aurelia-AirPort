import {
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import { useTheme } from "../../context/ThemeContext";

interface SettingsRowProps {
  icon: LucideIcon;
  title: string;
  description: string;
  children?: ReactNode;
  last?: boolean;
}

function SettingsRow({
  icon: Icon,
  title,
  description,
  children,
  last = false,
}: SettingsRowProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`flex flex-col gap-4 px-6 py-5 transition-colors duration-500 sm:flex-row sm:items-center sm:px-7 ${
        last
          ? ""
          : isDark
            ? "border-b border-white/[0.07]"
            : "border-b border-black/[0.06]"
      }`}
    >
      <div className="flex min-w-0 flex-1 items-center gap-4">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-500 ${
            isDark
              ? "bg-[#07111F] text-slate-300"
              : "bg-[#F7F8FA] text-[#07111F]"
          }`}
        >
          <Icon size={17} />
        </div>

        <div className="min-w-0">
          <p
            className={`text-sm font-semibold ${
              isDark ? "text-white" : "text-[#07111F]"
            }`}
          >
            {title}
          </p>

          <p
            className={`mt-1 text-xs leading-5 ${
              isDark ? "text-slate-400" : "text-[#667085]"
            }`}
          >
            {description}
          </p>
        </div>
      </div>

      {children}
    </div>
  );
}

interface SettingsSelectProps {
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

export function SettingsSelect({
  value,
  options,
  onChange,
}: SettingsSelectProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className={`w-full rounded-xl border px-3.5 py-2.5 text-sm font-medium outline-none transition-colors duration-300 focus:ring-2 sm:w-44 ${
        isDark
          ? "border-white/[0.10] bg-[#07111F] text-slate-200 focus:border-[#C9A86A] focus:ring-[#C9A86A]/10"
          : "border-black/[0.08] bg-white text-[#344054] focus:border-[#07111F] focus:ring-[#07111F]/5"
      }`}
    >
      {options.map((option) => (
        <option
          key={option}
          value={option}
          className={isDark ? "bg-[#07111F] text-white" : "bg-white"}
        >
          {option}
        </option>
      ))}
    </select>
  );
}

interface SettingsToggleProps {
  enabled: boolean;
  onChange: (enabled: boolean) => void;
}

export function SettingsToggle({
  enabled,
  onChange,
}: SettingsToggleProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={enabled}
      onClick={() => onChange(!enabled)}
      className={`relative h-6 w-11 shrink-0 rounded-full transition-colors duration-300 ${
        enabled
          ? "bg-[#C9A86A]"
          : isDark
            ? "bg-white/[0.14]"
            : "bg-[#D0D5DD]"
      }`}
    >
      <span
        className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition-all duration-300 ${
          enabled ? "left-6" : "left-1"
        }`}
      />
    </button>
  );
}

export function SettingsLink({
  label,
  onClick,
}: {
  label: string;
  onClick?: () => void;
}) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-colors ${
        isDark
          ? "text-slate-200 hover:text-[#C9A86A]"
          : "text-[#07111F] hover:text-[#C9A86A]"
      }`}
    >
      {label}
      <ChevronRight size={14} />
    </button>
  );
}

export default SettingsRow;