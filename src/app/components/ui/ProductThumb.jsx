export default function ProductThumb({ icon: Icon, size = 56, className = "" }) {
  return (
    <div
      className={`flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-surface-muted)] border border-[var(--color-border)] ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <Icon size={size * 0.45} strokeWidth={1.5} color="var(--color-secondary)" />
    </div>
  );
}
