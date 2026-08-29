import { Headset, MessageCircle, ShieldCheck } from "lucide-react";

export default function SupportHeroArt() {
  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-[360px]">
      <div className="absolute inset-0 rounded-[40%_60%_55%_45%/45%_40%_60%_55%] bg-[var(--color-brand-tint)]" />
      <div className="absolute inset-6 rounded-[45%_55%_60%_40%/50%_45%_55%_50%] bg-[var(--color-accent-tint)] opacity-70" />

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-28 w-28 items-center justify-center rounded-full bg-[var(--color-brand)] shadow-lg sm:h-32 sm:w-32">
          <Headset size={52} color="#ffffff" strokeWidth={1.5} />
        </span>
      </div>

      <div className="absolute left-2 top-6 flex items-center gap-2 rounded-full bg-[var(--color-surface)] px-3 py-2 shadow-md sm:left-4">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-positive-tint)]">
          <MessageCircle size={14} color="var(--color-positive)" />
        </span>
        <span className="text-xs font-semibold text-[var(--color-primary)]">Avg reply &lt; 2 min</span>
      </div>

      <div className="absolute bottom-6 right-2 flex items-center gap-2 rounded-full bg-[var(--color-surface)] px-3 py-2 shadow-md sm:right-4">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-accent-tint)]">
          <ShieldCheck size={14} color="var(--color-success)" />
        </span>
        <span className="text-xs font-semibold text-[var(--color-primary)]">24/7 order protection</span>
      </div>
    </div>
  );
}
