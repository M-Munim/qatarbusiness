// "use client";

// // // import Image from 'next/image'
// // // import Link from 'next/link'

// // // import React from 'react'

// // // const Navbar = () => {
// // //   return (
// // //     <header>
// // //       <nav className='flex justify-between items-center h-20'>
// // //         <div className="w-2/12">
// // //           <Link href="/">
// // //             <Image src="/Logo.png" alt="logo" width={100} height={100} className='w-40 h-16' />
// // //           </Link>
// // //         </div>
// // //         <div className="w-6/12">
// // //           <h1 className="text-2xl">Empowering Your Financial Success Globally</h1>
// // //         </div>
// // //         <div className="flex items-center justify-center gap-4 w-4/12">
// // //           <Link href="/">Home</Link>
// // //           <Link href="/Service">Services</Link>
// // //           <Link href="/About">About</Link>
// // //           <Link href="/Insights">Insights</Link>
// // //           <Link href="/Contact">Contact</Link>
// // //         </div>
// // //       </nav>
// // //     </header>
// // //   )
// // // }

// // // export default Navbar










// // import Image from 'next/image';
// // import Link from 'next/link';
// // import React, { useState } from 'react';
// // import { RxCross2 } from "react-icons/rx";
// // import { GiHamburgerMenu } from "react-icons/gi";

// // const Navbar = () => {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// //   const toggleMenu = () => {
// //     setIsMenuOpen((prev) => !prev);
// //   };

// //   return (
// //     <header className='relative  font-medium'>
// //       <nav className="flex justify-between items-center h-20 px-4">
// //         <div className="w-2/12">
// //           <Link href="/">
// //             <Image src="/Logo.png" alt="logo" width={100} height={100} className="w-40 h-16" />
// //           </Link>
// //         </div>

// //         <div className="w-4/12 lg:w-6/12 hidden lg:flex lg:items-center lg:justify-center">
// //           <h1 className="lg:text-xl">Empowering Your Financial Success Globally</h1>
// //         </div>

// //         {/* Desktop Menu */}
// //         <div className="hidden md:flex items-center gap-4 w-6/12 lg:w-4/12 ">
// //           <Link href="/" className='hover:text-white transition-all duration-200'>Home</Link>
// //           <Link href="/Service" className='hover:text-white transition-all duration-200'>Services</Link>
// //           <Link href="/About" className='hover:text-white transition-all duration-200'>About</Link>
// //           <Link href="/Insights" className='hover:text-white transition-all duration-200'>Insights</Link>
// //           <Link href="/Contact" className='hover:text-white transition-all duration-200'>Contact</Link>
// //         </div>

// //         {/* Hamburger Icon */}
// //         <div className="md:hidden flex items-center" onClick={toggleMenu}>
// //           <button className="text-2xl cursor-pointer font-medium">
// //             {
// //               isMenuOpen ? <RxCross2 /> : <GiHamburgerMenu />
// //             }
// //           </button>


// //         </div>
// //       </nav>

// //       {/* Mobile Menu */}
// //       {isMenuOpen && (
// //         <div className="md:hidden bg-white text-theme py-4 px-4 w-4/12 sm:w-5/12 rounded-sm ms-auto absolute right-5">
// //           <div className="flex flex-col items-center gap-4">
// //             <Link href="/" onClick={toggleMenu}>Home</Link>
// //             <Link href="/Service" onClick={toggleMenu}>Services</Link>
// //             <Link href="/About" onClick={toggleMenu}>About</Link>
// //             <Link href="/Insights" onClick={toggleMenu}>Insights</Link>
// //             <Link href="/Contact" onClick={toggleMenu}>Contact</Link>
// //           </div>
// //         </div>
// //       )}
// //     </header>
// //   );
// // };

// // export default Navbar;















// "use client";

// import Image from 'next/image';
// import Link from 'next/link';
// import React, { useState } from 'react';
// import { RxCross2 } from "react-icons/rx";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { useRouter } from 'next/router';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const router = useRouter();

//   const toggleMenu = () => {
//     setIsMenuOpen((prev) => !prev);
//   };

//   const isActive = (path) => router.pathname === path;

//   return (
//     <header className="relative font-medium">
//       <nav className="flex justify-between items-center h-20 px-4">
//         <div className="w-2/12">
//           <Link href="/">
//             <Image src="/Logo.png" alt="logo" width={100} height={100} className="w-40 h-16" />
//           </Link>
//         </div>

//         <div className="w-4/12 lg:w-6/12 hidden lg:flex lg:items-center lg:justify-center">
//           <h1 className="lg:text-xl">Empowering Your Financial Success Globally</h1>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-4 w-6/12 lg:w-4/12">
//           <Link
//             href="/"
//             className={`hover:text-white transition-all duration-200 ${isActive('/') ? 'text-yellow-500' : ''
//               }`}
//           >
//             Home
//           </Link>
//           <Link
//             href="/Service"
//             className={`hover:text-white transition-all duration-200 ${isActive('/Service') ? 'text-yellow-500' : ''
//               }`}
//           >
//             Services
//           </Link>
//           <Link
//             href="/About"
//             className={`hover:text-white transition-all duration-200 ${isActive('/About') ? 'text-yellow-500' : ''
//               }`}
//           >
//             About
//           </Link>
//           <Link
//             href="/Insights"
//             className={`hover:text-white transition-all duration-200 ${isActive('/Insights') ? 'text-yellow-500' : ''
//               }`}
//           >
//             Insights
//           </Link>
//           <Link
//             href="/Contact"
//             className={`hover:text-white transition-all duration-200 ${isActive('/Contact') ? 'text-yellow-500' : ''
//               }`}
//           >
//             Contact
//           </Link>
//         </div>

//         {/* Hamburger Icon */}
//         <div className="md:hidden flex items-center" onClick={toggleMenu}>
//           <button className="text-2xl cursor-pointer font-medium">
//             {isMenuOpen ? <RxCross2 /> : <GiHamburgerMenu />}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-white text-theme py-4 px-4 w-4/12 sm:w-5/12 rounded-sm ms-auto absolute right-5">
//           <div className="flex flex-col items-center gap-4">
//             <Link
//               href="/"
//               onClick={toggleMenu}
//               className={`${isActive('/') ? 'text-yellow-500' : ''}`}
//             >
//               Home
//             </Link>
//             <Link
//               href="/Service"
//               onClick={toggleMenu}
//               className={`${isActive('/Service') ? 'text-yellow-500' : ''}`}
//             >
//               Services
//             </Link>
//             <Link
//               href="/About"
//               onClick={toggleMenu}
//               className={`${isActive('/About') ? 'text-yellow-500' : ''}`}
//             >
//               About
//             </Link>
//             <Link
//               href="/Insights"
//               onClick={toggleMenu}
//               className={`${isActive('/Insights') ? 'text-yellow-500' : ''}`}
//             >
//               Insights
//             </Link>
//             <Link
//               href="/Contact"
//               onClick={toggleMenu}
//               className={`${isActive('/Contact') ? 'text-yellow-500' : ''}`}
//             >
//               Contact
//             </Link>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;









"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Use `usePathname` instead of `useRouter`

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const isActive = (path) => pathname === path;

  return (
    <header className="relative font-medium">
      <nav className="flex justify-between items-center h-20 px-4">
        <div className="w-2/12">
          <Link href="/">
            <Image src="/Logo.png" alt="logo" width={100} height={100} className="w-40 h-16" />
          </Link>
        </div>

        <div className="w-4/12 lg:w-6/12 hidden lg:flex lg:items-center lg:justify-center">
          <h1 className="lg:text-xl">Empowering Your Financial Success Globally</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4 w-6/12 lg:w-4/12">
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
