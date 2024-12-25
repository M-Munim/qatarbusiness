import Button from '@/components/Button'
import React from 'react'
import Image from 'next/image'
import Heading from '@/components/Heading'
import ContactForm from '@/components/ContactForm'

const page = () => {
  return (
    <div className='px-16'>
      <section className="w-full h-auto lg:h-[500px] mt-10 flex flex-wrap items-start justify-between px-4 ">
        {/* Left Section */}
        <div className="w-full sm:w-4/12 lg:w-3/12 flex items-start justify-center flex-col px-5">
          {/* <Link href="/" className="mb-5">
          <Image src="/Logo.png" alt="logo" width={100} height={100} className="w-28 h-12" />
        </Link> */}
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

        {/* Center Section */}
        <div className="w-full sm:w-6/12 lg:w-6/12 flex items-center justify-start my-5 sm:my-0">
          <img src="/image 41.png" alt="logo" className="w-full" />
        </div>

        {/* Right Section */}
        <div className="w-full sm:w-4/12 lg:w-3/12 flex items-center justify-center ">
          <Image src="/united-states.png" alt="logo" width={100} height={100} className="w-48 h-40" />
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