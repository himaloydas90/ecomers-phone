"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { FiMail, FiMapPin } from 'react-icons/fi'

const topCategories = [
  { name: 'Computer & Laptop', href: '/category/computer-laptop' },
  { name: 'SmartPhone', href: '/category/smartphone' },
  { name: 'Headphone', href: '/category/headphone' },
  { name: 'Accessories', href: '/category/accessories'},
  { name: 'Camera & Photo', href: '/category/camera-photo' },
  { name: 'TV & Homes', href: '/category/tv-homes' },
  {name:"All cetagoris",href:"/category", highlight: true }
]

const quickLinks = [
  { name: 'Shop Product', href: '/shop' },
  { name: 'Shoping Cart', href: '/cart' },
  { name: 'Wishlist', href: '/wishlist' },
  { name: 'Compare', href: '/compare' },
  { name: 'Track Order', href: '/track-order' },
  { name: 'Customer Help', href: '/help' },
  { name: 'About Us', href: '/about' },
]

const popularTags = [
  'Game', 'iPhone', 'TV', 'Asus Laptops',
  'Macbook', 'SSD', 'Graphics Card',
  'Power Bank', 'Smart TV', 'Speaker',
  'Tablet', 'Microwave', 'Samsung',
]

const brandLogos = [
  { name: 'Google', src: '/google.png' },
  { name: 'Amazon', src: '/amazon.png' },
  { name: 'Philips', src: '/philips.png' },
  { name: 'Toshiba', src: '/sam.png' },
  { name: 'Samsung', src: '/tosb.png' },
]

const Footer = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null)

  const handleSubscribe = async (e) => {
    e.preventDefault()

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({ type: 'error', message: 'Enter a valid email address' })
      return
    }

    setStatus({ type: 'loading', message: '' })

    try {
      // TODO: API route এর সাথে যুক্ত করুন
      setStatus({ type: 'success', message: 'Subscribed successfully' })
      setEmail('')
    } catch {
      setStatus({ type: 'error', message: 'Something went wrong. Try again.' })
    }
  }

  return (
    <footer className='w-full'>

      {/* Newsletter section */}
      <div className='w-full bg-brand'>
        <div className='container px-3 sm:px-6 py-8 sm:py-12 flex flex-col items-center text-center'>
          <h2 className='text-text-light text-lg sm:text-2xl md:text-3xl font-semibold'>
            Subscribe to our newsletter
          </h2>
          <p className='text-text-light/70 text-base sm:text-sm mt-3 max-w-xl'>
            Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero et
            cursus. Donec non quam urna. Quisque vitae porta ipsum.
          </p>

          <form
            onSubmit={handleSubscribe}
            className='w-full max-w-xl mt-6 flex flex-col sm:flex-row items-stretch bg-bg-light rounded-sm overflow-hidden'
            noValidate
          >
            <label htmlFor="newsletter-email" className='sr-only'>Email address</label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email address'
              className='flex-1 min-w-0 px-3 sm:px-4 py-3 text-base sm:text-sm text-text-primary outline-none bg-transparent'
            />
            <button
              type='submit'
              disabled={status?.type === 'loading'}
              className='bg-success hover:opacity-90 text-text-light font-semibold text-base sm:text-sm px-4 sm:px-6 py-3 flex items-center justify-center gap-2 transition-opacity disabled:opacity-60 shrink-0 whitespace-nowrap'
            >
              {status?.type === 'loading' ? 'Subscribing...' : 'Subscribe'}
              <ArrowRight className='w-4 h-4 shrink-0' />
            </button>
          </form>

          {status?.type === 'error' && (
            <p className='text-warning text-base mt-2'>{status.message}</p>
          )}
          {status?.type === 'success' && (
            <p className='text-text-light text-base mt-2'>{status.message}</p>
          )}

          {/* Brand logos */}
          <div className='w-full max-w-3xl mt-8 pt-6 border-t border-text-light/20 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 sm:gap-x-10'>
            {brandLogos.map((brand) => (
              <Image
                key={brand.name}
                src={brand.src}
                alt={brand.name}
                width={100}
                height={28}
                className='opacity-70 cursor-pointer hover:opacity-100 transition-opacity object-contain h-4 sm:h-6 w-auto'
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main dark footer */}
      <div className='w-full bg-primary'>
        <div className='container px-3 sm:px-6 py-8 sm:py-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 sm:gap-x-6 gap-y-8 sm:gap-y-10'>

          {/* Brand + contact */}
          <div className='col-span-2 md:col-span-3 lg:col-span-1 '>
            <Link href="/" className='flex items-center gap-2'>
              <span className='w-8 h-8 rounded-full border-2 border-success flex items-center justify-center shrink-0'>
                <span className='w-3 h-3 rounded-full bg-success' />
              </span>
              <span className='text-text-light text-lg sm:text-xl font-bold tracking-wide'>CLICON</span>
            </Link>

            <p className='text-secondary text-base mt-5'>Customer Supports:</p>
            <a href="tel:+16295550129" className='text-text-light text-base sm:text-lg font-semibold mt-1 block'>
              (629) 555-0129
            </a>

            <address className='not-italic text-secondary text-base sm:text-sm mt-4 flex items-start gap-2'>
              <FiMapPin className='mt-0.5 shrink-0' />
              <span>4517 Washington Ave.<br />Manchester, Kentucky 39495</span>
            </address>

            <a href="mailto:info@kinbo.com" className='text-text-light text-base sm:text-sm mt-4 flex items-center gap-2 hover:opacity-80 transition-opacity'>
              <FiMail className='shrink-0' />
              info@kinbo.com
            </a>
          </div>

          {/* Top category */}
          <div className='col-span-1'>
            <h3 className='text-text-light text-base sm:text-sm font-semibold tracking-wide mb-4'>TOP CATEGORY</h3>
            <ul className='space-y-3'>
              {topCategories.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`text-base sm:text-sm transition-opacity hover:opacity-80 ${
                      item.highlight ? 'text-success' : 'text-secondary'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div className='col-span-1'>
            <h3 className='text-text-light text-base sm:text-sm font-semibold tracking-wide mb-4'>QUICK LINKS</h3>
            <ul className='space-y-3'>
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className='text-secondary text-base sm:text-sm hover:opacity-80 hover:text-text-light transition-colors'
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Download app */}
          <div className='col-span-2 md:col-span-1'>
            <h3 className='text-text-light text-base sm:text-sm font-semibold tracking-wide mb-4'>DOWNLOAD APP</h3>
            <div className='flex flex-col gap-3'>
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className='flex items-center gap-3 border border-border/20 rounded-sm px-3 py-2 hover:border-text-light/40 transition-colors min-w-0'
              >
                <Image src="/icons/google-play.svg" alt="" width={20} height={20} aria-hidden="true" className='shrink-0' />
                <span className='text-left min-w-0'>
                  <span className='block text-secondary text-[10px] leading-none'>Get it now</span>
                  <span className='block text-text-light text-base sm:text-sm font-medium leading-tight mt-1 truncate'>Google Play</span>
                </span>
              </a>
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                className='flex items-center gap-3 border border-border/20 rounded-sm px-3 py-2 hover:border-text-light/40 transition-colors min-w-0'
              >
                <Image src="/icons/app-store.svg" alt="" width={20} height={20} aria-hidden="true" className='shrink-0' />
                <span className='text-left min-w-0'>
                  <span className='block text-secondary text-[10px] leading-none'>Get it now</span>
                  <span className='block text-text-light text-base sm:text-sm font-medium leading-tight mt-1 truncate'>App Store</span>
                </span>
              </a>
            </div>
          </div>

          {/* Popular tag */}
          <div className='col-span-2 md:col-span-3 lg:col-span-1'>
            <h3 className='text-text-light text-base sm:text-sm font-semibold tracking-wide mb-4'>POPULAR TAG</h3>
            <div className='flex flex-wrap gap-2'>
              {popularTags.map((tag) => (
                <Link
                  key={tag}
                  href={`/search?tag=${encodeURIComponent(tag)}`}
                  className='text-secondary text-[11px] sm:text-base border border-border/20 rounded-sm px-2.5 sm:px-3 py-1.5 hover:border-text-light/40 hover:text-text-light transition-colors'
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className='border-t border-border/10'>
          <div className='container px-3 sm:px-6 py-4'>
            <p className='text-secondary text-[11px] sm:text-base text-center'>
              Kinbo - eCommerce Template © {new Date().getFullYear()}. Design by Templatecookie
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer