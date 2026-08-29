import { CheckCheck, UserRound, MapPin, Route, CheckCircle2, ClipboardCheck } from "lucide-react";

const ICONS = {
  delivered: CheckCheck,
  courier: UserRound,
  hub: MapPin,
  transit: Route,
  verified: CheckCircle2,
  confirmed: ClipboardCheck,
};

const TONES = {
  positive: {
    bg: "var(--color-positive-tint)",
    fg: "var(--color-positive)",
  },
  brand: {
    bg: "var(--color-brand-tint)",
    fg: "var(--color-brand)",
  },
};

export default function ActivityIcon({ icon, tone = "brand" }) {
  const Icon = ICONS[icon] ?? CheckCircle2;
  const colors = TONES[tone] ?? TONES.brand;

  return (
    <span
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--radius-md)]"
      style={{ backgroundColor: colors.bg }}
      aria-hidden="true"
    >
      <Icon size={16} color={colors.fg} strokeWidth={2} />
    </span>
  );
}
