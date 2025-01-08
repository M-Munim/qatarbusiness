"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); 
  

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const isActive = (path) => pathname === path;

  return (
    <header className="relative font-medium">
      <nav className="flex justify-between items-center h-20 px-4">
        <div className="w-2/12">
          <Link href="/">
            <Image src="/Logo.png" alt="logo" width={100} height={100} className="w-44 h-16" />
          </Link>
        </div>

        <div className="sm:8/12 lg:7/12 xl:w-5/12 md:hidden lg:flex lg:items-center lg:justify-start">
          <h1 className="text-base  lg:text-2xl">Empowering Your Financial Success Globally</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex text-xl items-center gap-3 w-6/12 lg:w-5/12">
          <Link
            href="/"
            className={`hover:text-white transition-all duration-200 ${isActive('/') ? 'text-white' : ''
              }`}
          >
            Home
          </Link>
          <Link
            href="/Service"
            className={`hover:text-white transition-all duration-200 ${isActive('/Service') ? 'text-white' : ''
              }`}
          >
            Services
          </Link>
          <Link
            href="/About"
            className={`hover:text-white transition-all duration-200 ${isActive('/About') ? 'text-white' : ''
              }`}
          >
            About
          </Link>
          <Link
            href="/Insights"
            className={`hover:text-white transition-all duration-200 ${isActive('/Insights') ? 'text-white' : ''
              }`}
          >
            Insights
          </Link>
          <Link
            href="/Contact"
            className={`hover:text-white transition-all duration-200 ${isActive('/Contact') ? 'text-white' : ''
              }`}
          >
            Contact
          </Link>

          <div className=" items-center justify-center gap-3 ml-5 hidden xl:flex">
            <button className='px-2 h-8 bg-white text-sm'>Text here</button>
            <button className='px-2 h-8 bg-white text-sm'>Text here</button>
          </div>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden flex items-center" onClick={toggleMenu}>
          <button className="text-2xl cursor-pointer font-medium">
            {isMenuOpen ? <RxCross2 /> : <GiHamburgerMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white text-theme py-4 px-4 w-4/12 sm:w-5/12 rounded-sm ms-auto absolute right-5">
          <div className="flex flex-col items-center gap-4">
            <Link
              href="/"
              onClick={toggleMenu}
              className={`${isActive('/') ? 'text-yellow-500' : ''}`}
            >
              Home
            </Link>
            <Link
              href="/Service"
              onClick={toggleMenu}
              className={`${isActive('/Service') ? 'text-yellow-500' : ''}`}
            >
              Services
            </Link>
            <Link
              href="/About"
              onClick={toggleMenu}
              className={`${isActive('/About') ? 'text-yellow-500' : ''}`}
            >
              About
            </Link>
            <Link
              href="/Insights"
              onClick={toggleMenu}
              className={`${isActive('/Insights') ? 'text-yellow-500' : ''}`}
            >
              Insights
            </Link>
            <Link
              href="/Contact"
              onClick={toggleMenu}
              className={`${isActive('/Contact') ? 'text-yellow-500' : ''}`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
