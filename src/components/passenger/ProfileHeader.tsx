import {
  Camera,
  Mail,
  ShieldCheck,
} from "lucide-react";

interface ProfileHeaderProps {
  firstName: string;
  lastName: string;
  email: string;
  frequentFlyerNumber?: string;
}

function ProfileHeader({
  firstName,
  lastName,
  email,
  frequentFlyerNumber,
}: ProfileHeaderProps) {
  const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();

  return (
    <section className="overflow-hidden rounded-[28px] bg-[#07111F] text-white shadow-[0_20px_60px_rgba(7,17,31,0.12)]">
      <div className="relative px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#C9A86A]/10 blur-3xl" />

        <div className="absolute -bottom-24 left-1/3 h-48 w-48 rounded-full bg-blue-400/5 blur-3xl" />

        <div className="relative flex flex-col gap-7 sm:flex-row sm:items-center">
          <div className="relative shrink-0">
            <div className="flex h-24 w-24 items-center justify-center rounded-[26px] bg-[#C9A86A] text-2xl font-semibold text-[#07111F] shadow-lg">
              {initials}
            </div>

            <button
              type="button"
              className="absolute -bottom-2 -right-2 flex h-9 w-9 items-center justify-center rounded-full border-4 border-[#07111F] bg-white text-[#07111F] transition hover:bg-[#F7F8FA]"
              aria-label="Change profile photo"
            >
              <Camera size={15} />
            </button>
          </div>

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                {firstName} {lastName}
              </h1>

              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-300">
                <ShieldCheck size={12} />
                Verified
              </span>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/55">
              <span className="inline-flex min-w-0 items-center gap-2 break-all">
                <Mail size={14} className="shrink-0" />
                {email}
              </span>

              {frequentFlyerNumber && (
                <span>
                  Aurelia Traveller · {frequentFlyerNumber}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileHeader;