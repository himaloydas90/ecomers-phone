import { FileText, PackageCheck, Truck, Gem } from "lucide-react";
import { trackingSteps } from "@/lib/orders";

const STEP_ICONS = [FileText, PackageCheck, Truck, Gem];

export default function OrderTimeline({ currentStepIndex }) {
  const progressPercent =
    trackingSteps.length > 1 ? (currentStepIndex / (trackingSteps.length - 1)) * 100 : 0;

  return (
    <div className="pt-2">
      <div className="relative">
        <div className="absolute left-0 right-0 top-4 h-[3px] rounded-full bg-[var(--color-border)]" />
        <div
          className="absolute left-0 top-4 h-[3px] rounded-full bg-[var(--color-success)] transition-all"
          style={{ width: `${progressPercent}%` }}
        />
        <ol className="relative grid grid-cols-4">
          {trackingSteps.map((step, i) => {
            const Icon = STEP_ICONS[i];
            const isComplete = i <= currentStepIndex;
            return (
              <li key={step.key} className="flex flex-col items-center gap-3 text-center">
                <span
                  className={`z-10 flex h-8 w-8 items-center justify-center rounded-full border-4 border-[var(--color-surface)] ${
                    isComplete ? "bg-[var(--color-success)]" : "bg-[var(--color-border)]"
                  }`}
                >
                  <Icon size={13} color={isComplete ? "#ffffff" : "var(--color-muted)"} />
                </span>
                <span
                  className={`text-xs sm:text-sm ${
                    isComplete
                      ? "font-medium text-[var(--color-primary)]"
                      : "text-[var(--color-muted)]"
                  }`}
                >
                  {step.label}
                </span>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
