import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";

export default function Breadcrumb({ items }) {
  return (
    <div className="border-b-2 border-[var(--color-brand)] bg-[var(--color-surface)]">
      <div className="mx-auto max-w-[1280px] px-6 py-3">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-[var(--color-secondary)]">
            <li className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-1.5 hover:text-[var(--color-brand)]">
                <Home size={14} />
                Home
              </Link>
            </li>
            {items.map((item, i) => {
              const isLast = i === items.length - 1;
              return (
                <li key={item.label} className="flex items-center gap-2">
                  <ChevronRight size={14} className="text-[var(--color-muted)]" />
                  {item.href && !isLast ? (
                    <Link href={item.href} className="hover:text-[var(--color-brand)]">
                      {item.label}
                    </Link>
                  ) : (
                    <span
                      className={isLast ? "font-medium text-[var(--color-brand)]" : ""}
                      aria-current={isLast ? "page" : undefined}
                    >
                      {item.label}
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
}
