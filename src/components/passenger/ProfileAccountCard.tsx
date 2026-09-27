import {
  ChevronRight,
  KeyRound,
  ShieldCheck,
} from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

function ProfileAccountCard() {
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
          Account
        </p>

        <h2
          className={`mt-1.5 text-xl font-semibold tracking-[-0.03em] transition-colors duration-500 ${
            isDark ? "text-white" : "text-[#07111F]"
          }`}
        >
          Security & access
        </h2>
      </div>

      <div
        className={`divide-y transition-colors duration-500 ${
          isDark ? "divide-white/[0.07]" : "divide-black/[0.06]"
        }`}
      >
        <AccountRow
          icon={KeyRound}
          title="Password"
          description="Keep your account secure with a strong password."
          isDark={isDark}
        />

        <AccountRow
          icon={ShieldCheck}
          title="Account verification"
          description="Your passenger account is verified."
          status="Verified"
          last
          isDark={isDark}
        />
      </div>
    </section>
  );
}

interface AccountRowProps {
  icon: typeof KeyRound;
  title: string;
  description: string;
  status?: string;
  last?: boolean;
  isDark: boolean;
}

function AccountRow({
  icon: Icon,
  title,
  description,
  status,
  last,
  isDark,
}: AccountRowProps) {
  return (
    <button
      type="button"
      className={`flex w-full items-center gap-4 px-6 py-5 text-left transition-all duration-300 sm:px-7 ${
        last ? "rounded-b-[24px]" : ""
      } ${
        isDark
          ? "hover:bg-white/[0.025]"
          : "hover:bg-[#F7F8FA]"
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
        <div className="flex flex-wrap items-center gap-2">
          <p
            className={`text-sm font-semibold transition-colors duration-500 ${
              isDark ? "text-white" : "text-[#07111F]"
            }`}
          >
            {title}
          </p>

          {status && (
            <span
              className={`rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] transition-colors duration-500 ${
                isDark
                  ? "border border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                  : "bg-emerald-50 text-emerald-700"
              }`}
            >
              {status}
            </span>
          )}
        </div>

        <p
          className={`mt-1 max-w-md text-xs leading-5 transition-colors duration-500 ${
            isDark ? "text-slate-400" : "text-[#667085]"
          }`}
        >
          {description}
        </p>
      </div>

      <ChevronRight
        size={17}
        className={`shrink-0 transition-colors duration-500 ${
          isDark ? "text-slate-600" : "text-[#98A2B3]"
        }`}
      />
    </button>
  );
}

export default ProfileAccountCard;