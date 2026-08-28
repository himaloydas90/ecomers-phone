"use client"
import React, { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { FaRegHeart, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FiMoon, FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi'
import { MdArrowDropDown, MdOutlineFacebook, MdCompareArrows } from 'react-icons/md'
import { RiInstagramFill } from 'react-icons/ri'
import Link from 'next/link'

const Navbar = () => {
  const [currentDay, setCurrentDay] = useState("");
  const [mounted, setMounted] = useState(false);
  const [selectedLang, setSelectedLang] = useState("Eng");
  const [isOpen, setIsOpen] = useState(false);

  const languages = ["Eng", "Ban"];

  useEffect(() => {
    setMounted(true)
    const day = new Date().toLocaleDateString("en-US", { weekday: "long" })
    setCurrentDay(day)
  }, [])

  return (
    <>
    <header className="w-full bg-primary">
      <div className="container">
        <div className="flex flex-row items-center justify-between py-2.5 sm:py-4 gap-2">
          
          <span className="hidden md:block text-text-light text-base font-medium whitespace-nowrap min-w-20">
            {mounted ? currentDay : null}
          </span>

          <p className="flex items-center justify-center gap-1 sm:gap-1.5 text-text-light whitespace-nowrap">
            <span className="text-text-light text-sm sm:text-lg font-medium">Up to</span>
            <span className="font-bold text-2xl sm:text-5xl text-danger">56%</span>
            <span className="font-semibold text-sm sm:text-2xl">Off</span>
          </p>

          <Link
            href="#"
            className="bg-danger hover:bg-amber-500 text-black font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-sm text-xs sm:text-sm flex items-center gap-1 transition-colors duration-200 shrink-0"
          >
            <span>SHOP NOW</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </Link>

        </div>
      </div>
    </header>
     <header className='w-full bg-brand'>
    <div className='container flex flex-col sm:flex-row justify-center sm:justify-between items-center text-text-light py-3 border-b-2 border-border/5 gap-2 sm:gap-0 text-center sm:text-left'>
    
    <div>
      <p>Welcome to Clicon store.</p>
    </div>

    <div className='flex flex-wrap justify-center gap-2 sm:gap-6 items-center'>
      
      <div className='flex gap-3 items-center'>
        <p className=' xs:inline text-sm'>Follow us :</p>

        <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
          <FaTwitter />
        </Link>
        <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
          <MdOutlineFacebook />
        </Link>
        <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
          <FaYoutube />
        </Link>
        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
          <RiInstagramFill />
        </Link>
        
      </div>

      <div className='border-l-2 border-border/5 pl-3 sm:pl-6 flex gap-3 sm:gap-6 items-center'>

        {/* Custom State Dropdown */}
        <div className='relative'>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className='flex items-center cursor-pointer hover:opacity-80 focus:outline-none text-xs sm:text-sm'
          >
            {selectedLang} <span><MdArrowDropDown className='text-xl' /></span>
          </button>

          {isOpen && (
            <ul className='absolute top-full left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 mt-2 bg-brand border border-border/10 rounded shadow-lg py-1 z-50 min-w-16'>
              {languages.map((lang) => (
                <li 
                  key={lang}
                  onClick={() => {
                    setSelectedLang(lang);
                    setIsOpen(false);
                  }}
                  className='px-3 py-1 hover:bg-bg-light/5 cursor-pointer text-sm whitespace-nowrap'
                >
                  {lang}
                </li>
              ))}
            </ul>
          )}
        </div>
        <p className='cursor-pointer hover:opacity-80 transition-opacity'><FiMoon /></p>
      </div>
    </div>
    </div>
    </header>
<nav className='w-full bg-brand'>
  <div className='container mx-auto flex items-center justify-between gap-3 px-4 py-3'>

    {/* Logo */}
    <Link href="/" className='shrink-0'>
      <img
        className='w-12 h-12 sm:w-16 sm:h-16 object-contain'
        src="/himel_logo.png"
        alt="Himel logo"
      />
    </Link>

    {/* Search bar */}
    <form
      action=""
      className='flex-1 flex items-center bg-text-light rounded-2xl h-9 sm:h-10 pl-3 sm:pl-4 pr-1.5 max-w-xl'
    >
      <input
        type="text"
        placeholder='Search for mobiles, accessories...'
        className='outline-none text-xs sm:text-sm w-full text-primary bg-transparent'
      />
      <button
        type='submit'
        aria-label="Search"
        className="shrink-0 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-brand hover:bg-blue-700 text-text-light transition-colors"
      >
        <FiSearch className="text-sm sm:text-base" />
      </button>
    </form>

    {/* Icons - hidden on small devices */}
    <div className='hidden sm:flex gap-3 sm:gap-6 text-text-light shrink-0 text-lg sm:text-xl'>
      <Link href="/compare" aria-label="Compare" className="hover:opacity-80 transition-opacity">
        <MdCompareArrows />
      </Link>
      <Link href="/cart" aria-label="Cart" className="hover:opacity-80 transition-opacity">
        <FiShoppingCart />
      </Link>
      <Link href="/wishlist" aria-label="Wishlist" className="hover:opacity-80 transition-opacity">
        <FaRegHeart />
      </Link>
      <Link href="/login" aria-label="Login" className="hover:opacity-80 transition-opacity">
        <FiUser />
      </Link>
    </div>

  </div>
</nav>
    </>

  )
}

export default Navbar