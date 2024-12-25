import Button from '@/components/Button'
import React from 'react'
import Image from 'next/image'
import Heading from '@/components/Heading'
import ContactForm from '@/components/ContactForm'

const page = () => {
  return (
    <div className=''>
      {/* <section className="w-full h-auto lg:h-[500px] mt-10 flex flex-wrap items-start justify-between px-4 ">
    
        <div className="w-full sm:w-4/12 lg:w-3/12 flex items-start justify-center flex-col px-5">
    
          <h2 className="text-lg lg:text-3xl font-medium mb-1 text-center sm:text-left">
            Empowering Your Financial Success Globally
          </h2>
          <p className="text-xs mb-5 text-center sm:text-left popins leading-tight">
            Lorem ipsum dolor sit amet voluptatum?
          </p>
          <Button
            text="home"
            className="w-36 text-xl bg-white text-theme hover:bg-theme hover:text-white transition-all duration-200 mx-auto sm:mx-0"
          />
        </div>

       
        <div className="w-full sm:w-6/12 lg:w-6/12 flex items-center justify-start my-5 sm:my-0">
          <img src="/image 41.png" alt="logo" className="w-full" />
        </div>

        
        <div className="w-full sm:w-4/12 lg:w-3/12 flex items-center justify-center ">
        
          <img src="/united-states.png" alt="" />
        </div>
      </section> */}
      <section className="w-full h-[500px] mt-10 flex items-start justify-center relative bg-cover bg-center px-4"
        style={{ backgroundImage: "url('/Screenshot 2024-12-25 at 3.17.58 PM.jpg')" }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Left Section */}
        <div className="absolute w-full sm:w-4/12 lg:w-3/12 flex flex-col items-start justify-center px-5 z-10 left-0 top-8">
          <h2 className="text-lg lg:text-3xl font-medium mb-1  text-center sm:text-left">
            Empowering Your Financial Success Globally
          </h2>
          <p className="text-xs mb-5 text-center sm:text-left popins leading-tight">
            Lorem ipsum dolor sit amet voluptatum?
          </p>
          <Button
            text="home"
            className="w-36 text-xl bg-white text-theme hover:bg-theme hover:text-white transition-all duration-200 mx-auto sm:mx-0"
          />
        </div>
      </section>


      <section className="w-full  text-center">
        <Heading text="Contact Us" />
        <ContactForm />
      </section>
    </div>
  )
}

export default page