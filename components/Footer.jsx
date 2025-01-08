// "use client";

// import Link from 'next/link'
// import React from 'react'
// import { usePathname } from 'next/navigation';
// import Image from "next/image";

// const Footer = () => {
//   const pathname = usePathname();
//   const isActive = (path) => pathname === path;

//   return (
//     <footer className='h-44 bg-theme px-10 flex items-center flex-col gap-2'>
//       <div className='flex items-center justify-between w-full mt-3'>
//         <div className='w-3/12'>
//           <Link href="/">
//             <Image src="/Logo.png" alt="logo" width={100} height={100} className="w-44 h-16" />
//           </Link>
//         </div>

//         <div className='w-6/12'>
//           <center className='mb-1'>
//             <h2 className='text-white text-2xl'>Useful Links</h2>
//           </center>

//           <div className='flex items-center justify-center gap-3 text-lg'>
//             <Link
//               href="/"
//               className={`hover:text-white transition-all duration-200 text-gray-200 ${isActive('/') ? 'text-white' : ''
//                 }`}
//             >
//               Home
//             </Link>
//             <Link
//               href="/Service"
//               className={`hover:text-white transition-all duration-200 text-gray-200 ${isActive('/Service') ? 'text-white' : ''
//                 }`}
//             >
//               Services
//             </Link>
//             <Link
//               href="/About"
//               className={`hover:text-white transition-all duration-200 text-gray-200 ${isActive('/About') ? 'text-white' : ''
//                 }`}
//             >
//               About
//             </Link>
//             <Link
//               href="/Insights"
//               className={`hover:text-white transition-all duration-200 text-gray-200 ${isActive('/Insights') ? 'text-white' : ''
//                 }`}
//             >
//               Insights
//             </Link>
//             <Link
//               href="/Contact"
//               className={`hover:text-white transition-all duration-200 text-gray-200 ${isActive('/Contact') ? 'text-white' : ''
//                 }`}
//             >
//               Contact
//             </Link>
//           </div>
//         </div>

//         <div className='w-3/12 flex items-center justify-center'>
//           {/* width="600" height="450" style="border:0;"  */}
//           <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13231.590117800703!2d71.4655563!3d33.9951657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1736312264817!5m2!1sen!2s" style={{ width: "200px", height: "120px", border: "0px" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
//         </div>.
//       </div>

//       <center className='text-white text-2xl'>© 2024 FinSecure. All rights reserved.</center>
//     </footer>
//   )
// }

// export default Footer




"use client";

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import Image from "next/image";

const Footer = () => {
  const pathname = usePathname();
  const isActive = (path) => pathname === path;

  return (
    <footer className='bg-theme px-5 py-8 flex flex-col gap-6'>
      <div className='flex flex-col md:flex-row items-center justify-between w-full gap-6'>
        {/* Logo Section */}
        <div className='w-full md:w-3/12 flex justify-center md:justify-start'>
          <Link href="/">
            <Image
              src="/Logo.png"
              alt="logo"
              width={100}
              height={100}
              className="w-32 h-12 md:w-44 md:h-16"
            />
          </Link>
        </div>

        {/* Links Section */}
        <div className='w-full md:w-6/12 text-center'>
          <h2 className='text-white text-xl md:text-2xl mb-2'>Useful Links</h2>
          <div className='flex flex-wrap items-center justify-center gap-4 text-sm md:text-lg'>
            <Link
              href="/"
              className={`hover:text-white transition-all duration-200 text-gray-200 ${isActive('/') ? 'text-white' : ''}`}
            >
              Home
            </Link>
            <Link
              href="/Service"
              className={`hover:text-white transition-all duration-200 text-gray-200 ${isActive('/Service') ? 'text-white' : ''}`}
            >
              Services
            </Link>
            <Link
              href="/About"
              className={`hover:text-white transition-all duration-200 text-gray-200 ${isActive('/About') ? 'text-white' : ''}`}
            >
              About
            </Link>
            <Link
              href="/Insights"
              className={`hover:text-white transition-all duration-200 text-gray-200 ${isActive('/Insights') ? 'text-white' : ''}`}
            >
              Insights
            </Link>
            <Link
              href="/Contact"
              className={`hover:text-white transition-all duration-200 text-gray-200 ${isActive('/Contact') ? 'text-white' : ''}`}
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Map Section */}
        <div className='w-full md:w-3/12 flex justify-center'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13231.590117800703!2d71.4655563!3d33.9951657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1736312264817!5m2!1sen!2s"
            style={{ width: "100%", maxWidth: "200px", height: "120px", border: "0px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <center className='text-white text-sm md:text-xl'>© 2024 FinSecure. All rights reserved.</center>
    </footer>
  );
};

export default Footer;
