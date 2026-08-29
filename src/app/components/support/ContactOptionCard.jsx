import { Phone, MessageCircle, ArrowRight } from "lucide-react";

const ICONS = { phone: Phone, chat: MessageCircle };

const TONE_STYLES = {
  brand: {
    iconBg: "var(--color-brand-tint)",
    iconFg: "var(--color-brand)",
    buttonBg: "var(--color-brand)",
  },
  positive: {
    iconBg: "var(--color-positive-tint)",
    iconFg: "var(--color-positive)",
    buttonBg: "var(--color-positive)",
  },
};

export default function ContactOptionCard({ icon, title, description, detail, cta, href, tone }) {
  const Icon = ICONS[icon] ?? Phone;
  const styles = TONE_STYLES[tone] ?? TONE_STYLES.brand;

  return (
    <div className="flex gap-4 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm">
      <span
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[var(--radius-md)]"
        style={{ backgroundColor: styles.iconBg }}
      >
        <Icon size={24} color={styles.iconFg} />
      </span>
      <div>
        <h3 className="text-base font-semibold text-[var(--color-primary)]">{title}</h3>
        <p className="mt-1 max-w-xs text-sm text-[var(--color-secondary)]">{description}</p>
        <p className="mt-2 text-lg font-semibold text-[var(--color-primary)]">{detail}</p>
        <a
          href={href}
          className="mt-4 inline-flex items-center gap-2 rounded-[var(--radius-sm)] px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-[var(--color-text-light)] transition hover:opacity-90"
          style={{ backgroundColor: styles.buttonBg }}
        >
          {cta}
          <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
}
