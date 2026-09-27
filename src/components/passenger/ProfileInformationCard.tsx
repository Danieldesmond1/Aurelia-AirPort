import { useEffect, useState } from "react";

import {
  Check,
  Edit3,
  Mail,
  Phone,
  UserRound,
} from "lucide-react";

import type { PassengerProfile } from "../../types/passenger";
import { useTheme } from "../../context/ThemeContext";

interface ProfileInformationCardProps {
  profile: PassengerProfile;
}

function ProfileInformationCard({
  profile,
}: ProfileInformationCardProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [editing, setEditing] = useState(false);
  const [saved, setSaved] = useState(false);

  const [form, setForm] = useState({
    firstName: profile.firstName,
    lastName: profile.lastName,
    email: profile.email,
    phone: profile.phone ?? "",
    nationality: profile.nationality ?? "",
  });

  useEffect(() => {
    setForm({
      firstName: profile.firstName,
      lastName: profile.lastName,
      email: profile.email,
      phone: profile.phone ?? "",
      nationality: profile.nationality ?? "",
    });
  }, [profile]);

  const updateField = (
    field: keyof typeof form,
    value: string
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSave = () => {
    setEditing(false);
    setSaved(true);

    window.setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  const fields = [
    {
      key: "firstName" as const,
      label: "First name",
      icon: UserRound,
    },
    {
      key: "lastName" as const,
      label: "Last name",
      icon: UserRound,
    },
    {
      key: "email" as const,
      label: "Email address",
      icon: Mail,
    },
    {
      key: "phone" as const,
      label: "Phone number",
      icon: Phone,
    },
    {
      key: "nationality" as const,
      label: "Nationality",
      icon: UserRound,
    },
  ];

  return (
    <section
      className={`rounded-[24px] border shadow-[0_12px_40px_rgba(7,17,31,0.05)] transition-colors duration-500 ${
        isDark
          ? "border-white/[0.07] bg-[#0D1B2A]"
          : "border-slate-200 bg-white"
      }`}
    >
      <div
        className={`flex items-center justify-between gap-4 border-b px-6 py-5 transition-colors duration-500 sm:px-7 ${
          isDark ? "border-white/[0.07]" : "border-black/[0.06]"
        }`}
      >
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9A86A]">
            Account information
          </p>

          <h2
            className={`mt-1.5 text-xl font-semibold tracking-[-0.03em] transition-colors duration-500 ${
              isDark ? "text-white" : "text-[#07111F]"
            }`}
          >
            Personal details
          </h2>
        </div>

        {!editing && (
          <button
            type="button"
            onClick={() => setEditing(true)}
            className={`inline-flex items-center gap-2 rounded-xl border px-3.5 py-2 text-xs font-semibold transition-all duration-300 ${
              isDark
                ? "border-white/[0.08] text-white hover:border-white/15 hover:bg-[#07111F]"
                : "border-black/[0.08] text-[#07111F] hover:border-[#07111F] hover:bg-[#07111F] hover:text-white"
            }`}
          >
            <Edit3 size={14} />
            Edit
          </button>
        )}
      </div>

      <div className="p-6 sm:p-7">
        <div className="grid gap-5 sm:grid-cols-2">
          {fields.map((field) => {
            const Icon = field.icon;

            return (
              <div key={field.key}>
                <label
                  className={`mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors duration-500 ${
                    isDark ? "text-slate-500" : "text-[#667085]"
                  }`}
                >
                  {field.label}
                </label>

                <div className="relative">
                  <Icon
                    size={15}
                    className={`absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors duration-500 ${
                      isDark ? "text-slate-600" : "text-[#98A2B3]"
                    }`}
                  />

                  <input
                    value={form[field.key]}
                    disabled={!editing}
                    onChange={(event) =>
                      updateField(
                        field.key,
                        event.target.value
                      )
                    }
                    className={`w-full rounded-xl border py-3 pl-10 pr-4 text-sm outline-none transition-all duration-300 ${
                      editing
                        ? isDark
                          ? "border-white/10 bg-[#07111F] text-white focus:border-[#C9A86A]/50 focus:ring-2 focus:ring-[#C9A86A]/10"
                          : "border-black/10 bg-white text-[#111827] focus:border-[#07111F] focus:ring-2 focus:ring-[#07111F]/5"
                        : isDark
                          ? "border-white/[0.06] bg-[#07111F] text-slate-300"
                          : "border-black/[0.05] bg-[#F7F8FA] text-[#344054]"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {editing && (
          <div
            className={`mt-7 flex flex-col-reverse gap-3 border-t pt-6 transition-colors duration-500 sm:flex-row sm:justify-end ${
              isDark ? "border-white/[0.07]" : "border-black/[0.06]"
            }`}
          >
            <button
              type="button"
              onClick={() => {
                setEditing(false);

                setForm({
                  firstName: profile.firstName,
                  lastName: profile.lastName,
                  email: profile.email,
                  phone: profile.phone ?? "",
                  nationality: profile.nationality ?? "",
                });
              }}
              className={`rounded-xl border px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                isDark
                  ? "border-white/[0.08] text-slate-300 hover:bg-white/[0.04]"
                  : "border-black/[0.08] text-[#344054] hover:bg-[#F7F8FA]"
              }`}
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={handleSave}
              className="rounded-xl bg-[#07111F] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0D1B2A]"
            >
              Save changes
            </button>
          </div>
        )}

        {saved && (
          <div
            className={`mt-5 flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition-colors duration-500 ${
              isDark
                ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                : "border-emerald-200 bg-emerald-50 text-emerald-700"
            }`}
          >
            <Check size={16} />
            Your profile changes have been saved.
          </div>
        )}
      </div>
    </section>
  );
}

export default ProfileInformationCard;