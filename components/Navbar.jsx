"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname } from 'next/navigation';
import Button from './Button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();


  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const isActive = (path) => pathname === path;

  return (
    <header className="relative font-medium bg-white">
      <nav className="flex justify-between items-center h-28 px-14">
        <div className="w-2/12">
          <Link href="/">
            <Image src="/Logo.png" alt="logo" width={100} height={100} className="w-44 h-16" />
          </Link>
        </div>

        {/* <div className="sm:8/12 lg:7/12 xl:w-5/12 md:hidden lg:flex lg:items-center lg:justify-start">
          <h1 className="text-base  lg:text-2xl">Empowering Your Financial Success Globally</h1>
        </div> */}

        {/* Desktop Menu */}
        <div className="hidden md:flex text-lg items-center gap-7 w-6/12 lg:w-5/12">
          <Link
            href="/"
            className={`hover:text-maroon text-[#170F49] transition-all duration-200 ${isActive('/') ? 'text-maroon font-semibold' : ''
              }`}
          >
            Home
          </Link>
          <Link
            href="/Service"
            className={`hover:text-maroon text-[#170F49] transition-all duration-200 ${isActive('/Service') ? 'text-maroon font-semibold' : ''
              }`}
          >
            Services
          </Link>
          <Link
            href="/About"
            className={`hover:text-maroon text-[#170F49] transition-all duration-200 ${isActive('/About') ? 'text-maroon font-semibold' : 'font-normal'
              }`}
          >
            About
          </Link>
          <Link
            href="/Insights"
            className={`hover:text-maroon text-[#170F49] transition-all duration-200 ${isActive('/Insights') ? 'text-maroon font-semibold' : ''
              }`}
          >
            Insights
          </Link>
          <Link
            href="/Contact"
            className={`hover:text-maroon text-[#170F49] transition-all duration-200 ${isActive('/Contact') ? 'text-white font-semibold' : ''
              }`}
          >
            Contact Us
          </Link>

          <div className=" items-center justify-center gap-3 ml-5 hidden xl:flex">
            <Button text="Get Started" className="w-36 h-14 text-base font-bold bg-maroon text-white mx-auto sm:mx-0" />
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
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
