'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiHome, FiList, FiShoppingBag, FiBell, FiUser } from 'react-icons/fi';

const BottomNav = () => {
  const pathname = usePathname();
  const cartCount = 0;
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', icon: FiHome, label: 'Home' },
    { href: '/categories', icon: FiList, label: 'Categories' },
  ];

  const rightNavItems = [
    { href: '/notifications', icon: FiBell, label: 'Notifications' },
    { href: '/account', icon: FiUser, label: 'Account' },
  ];

  const isActive = (href) => pathname === href;

  return (
    <nav
      className={` fixed w-full bottom-0 left-0 right-0 z-50 md:hidden bg-text-light border-t border-border/50 px-2 pt-2 pb-1 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className='relative flex items-center justify-around container'>
        
        {navItems.map(({ href, icon: Icon, label }) => (
          <Link
            key={href}
            href={href}
            className={`flex flex-col items-center gap-0.5 ${
              isActive(href) ? 'text-primary' : 'text-primary/500'
            }`}
          >
            <Icon className='text-xl' />
            <span className={`text-[11px] ${isActive(href) ? 'font-medium' : ''}`}>
              {label}
            </span>
          </Link>
        ))}

        {/* Elevated cart button */}
        <Link
          href="/cart"
          aria-label={`Cart, ${cartCount} items`}
          className='flex flex-col items-center gap-0.5 -mt-7'
        >
          <span className='w-13 h-13 rounded-full bg-danger flex items-center justify-center border-4 border-white shadow-md'>
            <FiShoppingBag className='text-text-light text-xl' />
          </span>
          <span className='text-[11px] text-danger'>Cart ({cartCount})</span>
        </Link>

        {rightNavItems.map(({ href, icon: Icon, label }) => (
          <Link
            key={href}
            href={href}
            className={`flex flex-col items-center gap-0.5 ${
              isActive(href) ? 'text-primary' : 'text-primary/500'
            }`}
          >
            <Icon className='text-xl' />
            <span className={`text-[11px] ${isActive(href) ? 'font-medium' : ''}`}>
              {label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;