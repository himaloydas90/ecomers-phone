"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import {
  categories,
  smartphoneBrands,
  featuredPhones,
} from "@/lib/categoryData";
import ProductThumb from "../ui/ProductThumb";

export default function CategoryMegaMenu({ onClose }) {
  const [activeCategory, setActiveCategory] = useState("SmartPhone");
  const [activeBrand, setActiveBrand] = useState("iPhone");
  const timeoutRef = useRef(null);

  // Smooth hover delay to prevent accidental trigger on quick cursor movements
  const handleMouseEnterCategory = useCallback((catName) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveCategory(catName);
  }, []);

  const handleMouseLeaveCategory = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      // Optional: Reset active category on leave if desired
    }, 150);
  }, []);

  return (
    <div
      className="absolute left-0 top-full z-50 mt-2 flex w-[280px] max-w-[calc(100vw-2rem)] select-none rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)]/95 backdrop-blur-md shadow-2xl sm:w-[320px]"
      onMouseLeave={onClose}
      role="menu"
      aria-orientation="vertical"
      aria-label="Category Navigation"
    >
      <ul className="w-full py-2">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.name;

          return (
            <li
              key={cat.name}
              onMouseEnter={() => handleMouseEnterCategory(cat.name)}
              onMouseLeave={handleMouseLeaveCategory}
              className="group/item relative"
            >
              <button
                type="button"
                onClick={() => setActiveCategory(isActive ? null : cat.name)}
                aria-expanded={isActive && cat.hasFlyout}
                aria-haspopup={cat.hasFlyout ? "true" : "false"}
                className={`flex w-full items-center justify-between gap-3 px-5 py-2.5 text-left text-sm font-medium transition-colors outline-none focus-visible:bg-[var(--color-surface-muted)] ${
                  isActive
                    ? "bg-[var(--color-accent-tint)] text-[var(--color-success)]"
                    : "text-[var(--color-primary)] hover:bg-[var(--color-surface-muted)]"
                }`}
              >
                <span className="flex items-center gap-3">
                  <Icon
                    size={18}
                    strokeWidth={1.75}
                    className={isActive ? "text-[var(--color-success)]" : "text-[var(--color-secondary)]"}
                  />
                  {cat.name}
                </span>
                {cat.hasFlyout && (
                  <ChevronRight
                    size={16}
                    className={isActive ? "text-[var(--color-success)]" : "text-[var(--color-muted)]"}
                  />
                )}
              </button>

              {/* Flyout Submenu */}
              {cat.hasFlyout && (
                <div
                  className={`absolute left-full top-0 flex min-h-full w-[calc(100vw-340px)] max-w-[560px] transition-all duration-200 ${
                    isActive
                      ? "opacity-100 visible pointer-events-auto translate-x-0"
                      : "opacity-0 invisible pointer-events-none -translate-x-1"
                  }`}
                  style={{
                    /* Left hit-area buffer: 20px overlap to bridge cursor gap */
                    paddingLeft: "16px",
                    marginLeft: "-16px",
                  }}
                >
                  <div className="flex w-full overflow-hidden rounded-r-[var(--radius-md)] border border-l-0 border-[var(--color-border)] bg-[var(--color-surface)]/95 backdrop-blur-md shadow-2xl">
                    {/* Brand List */}
                    <ul className="w-[130px] shrink-0 border-r border-[var(--color-border)] py-3 sm:w-[140px]">
                      {smartphoneBrands.map((brand) => (
                        <li key={brand}>
                          <button
                            type="button"
                            onMouseEnter={() => setActiveBrand(brand)}
                            onClick={() => setActiveBrand(brand)}
                            className={`block w-full px-4 py-2 text-left text-sm font-medium transition-colors outline-none sm:px-5 ${
                              activeBrand === brand
                                ? "bg-[var(--color-surface-muted)] font-semibold text-[var(--color-primary)]"
                                : "text-[var(--color-secondary)] hover:bg-[var(--color-surface-muted)]/60 hover:text-[var(--color-primary)]"
                            }`}
                          >
                            {brand}
                          </button>
                        </li>
                      ))}
                    </ul>

                    {/* Featured Products */}
                    <div className="flex-1 border-r border-[var(--color-border)] p-4 sm:p-5">
                      <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-[var(--color-primary)]/70">
                        Featured Phones
                      </p>
                      <ul className="space-y-3">
                        {featuredPhones.map((phone) => (
                          <li key={phone.id}>
                            <Link
                              href={`/products/${phone.id}`}
                              className="group flex items-center gap-3 rounded-[var(--radius-sm)] p-1 transition-colors hover:bg-[var(--color-surface-muted)]/50"
                              onClick={onClose}
                            >
                              <ProductThumb icon={phone.icon} size={42} />
                              <div className="min-w-0 flex-1">
                                <span className="block truncate text-sm font-medium text-[var(--color-primary)] group-hover:text-[var(--color-brand)]">
                                  {phone.name}
                                </span>
                                <div className="mt-0.5 flex items-center gap-2 text-xs">
                                  {phone.salePrice && (
                                    <span className="text-[var(--color-muted)] line-through">
                                      {phone.price}
                                    </span>
                                  )}
                                  <span className="font-semibold text-[var(--color-brand)]">
                                    {phone.salePrice ?? phone.price}
                                  </span>
                                </div>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Banner Promo */}
                    <div className="hidden w-[180px] shrink-0 flex-col justify-between bg-[var(--color-warning)] p-4 md:flex sm:w-[190px] sm:p-5">
                      <div>
                        <span className="inline-block rounded-full bg-[var(--color-surface)]/20 px-2 py-0.5 text-[10px] font-extrabold uppercase text-[var(--color-primary)]">
                          Special Offer
                        </span>
                        <p className="mt-2 text-3xl font-black text-[var(--color-primary)]">21% OFF</p>
                        <p className="mt-1 text-xs leading-relaxed text-[var(--color-primary)]/80">
                          Escape the noise with Xiaomi Earbuds.
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] font-medium text-[var(--color-primary)]/70">
                          Starting price:
                        </p>
                        <p className="mb-2 rounded-[var(--radius-sm)] bg-[var(--color-surface)] py-1 text-center text-xs font-bold text-[var(--color-primary)] shadow-sm">
                          $99 USD
                        </p>
                        <Link
                          href="/products/xiaomi-earbuds-pro"
                          onClick={onClose}
                          className="flex items-center justify-center gap-1.5 rounded-[var(--radius-sm)] bg-[var(--color-success)] px-3 py-2 text-xs font-bold text-[var(--color-text-light)] shadow transition hover:opacity-90 active:scale-95"
                        >
                          SHOP NOW
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}