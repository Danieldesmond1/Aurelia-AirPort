import {
  KeyRound,
  LogOut,
  ShieldCheck,
} from "lucide-react";

import { useTheme } from "../../context/ThemeContext";
import SettingsSection from "./SettingsSection";
import SettingsRow, {
  SettingsLink,
} from "./SettingsRow";

function SettingsAccountCard() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <SettingsSection
      eyebrow="Account"
      title="Security & access"
      description="Manage access to your Aurelia passenger account."
    >
      <SettingsRow
        icon={KeyRound}
        title="Password"
        description="Update your password and keep your account secure."
      >
        <SettingsLink label="Manage" />
      </SettingsRow>

      <SettingsRow
        icon={ShieldCheck}
        title="Account verification"
        description="Your passenger account is currently verified."
      >
        <span
          className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] ${
            isDark
              ? "bg-emerald-400/10 text-emerald-300"
              : "bg-emerald-50 text-emerald-700"
          }`}
        >
          Verified
        </span>
      </SettingsRow>

      <SettingsRow
        icon={LogOut}
        title="Sign out"
        description="Sign out of this passenger session."
        last
      >
        <SettingsLink label="Sign out" />
      </SettingsRow>
    </SettingsSection>
  );
}

export default SettingsAccountCard;