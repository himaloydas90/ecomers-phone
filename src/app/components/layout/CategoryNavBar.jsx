"use client";
import React from 'react'
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown, MapPin, Repeat, Headset, Info, Phone } from "lucide-react";
import CategoryMegaMenu from './CategoryMegaMenu';


const navLinks = [
  { href: "/track-order", label: "Track Order", icon: MapPin },
  { href: "/compare", label: "Compare", icon: Repeat },
  { href: "/customer-support", label: "Customer Support", icon: Headset },
  { href: "/need-help", label: "Need Help", icon: Info },
];

const CategoryNavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="hidden md:block border-b border-border container">
      <div className="flex items-center justify-between gap-6">
        <div className="flex items-center gap-8">
          <div className="relative">
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              onMouseEnter={() => setMenuOpen(true)}
              aria-haspopup="true"
              aria-expanded={menuOpen}
              className="flex items-center gap-2 bg-primary/5 px-6 py-3.5 text-sm font-semibold text-primary transition hover:opacity-95"
            >
              <Menu size={17} />
              All Category
              <ChevronDown size={15} className={`transition-transform ${menuOpen ? "rotate-180" : ""}`} />
            </button>
            {menuOpen && <CategoryMegaMenu onClose={() => setMenuOpen(false)} />}
          </div>

          <nav aria-label="Secondary">
            <ul className="flex items-center gap-6">
              {navLinks.map(({ href, label, icon: Icon }) => {
                const isActive = pathname?.startsWith(href);
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`flex items-center gap-2 py-3.5 text-sm transition-colors ${
                        isActive
                          ? "font-medium text-success"
                          : "text-primary/60 hover:text-primary"
                      }`}
                    >
                      <Icon size={16} />
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <a
          href="tel:+12025550104"
          className="hidden items-center gap-2 text-sm font-semibold text-primary lg:flex"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full">
            <Phone size={15} className='text-primary' />
          </span>
          +1-202-555-0104
        </a>
      </div>
    </div>
  )
}

export default CategoryNavBar;