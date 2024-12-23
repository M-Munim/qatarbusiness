import Button from '@/components/Button'
import ContactForm from '@/components/ContactForm'
import Heading from '@/components/Heading'
import Navbar from '@/components/Navbar'
import ServiceCard from '@/components/ServiceCard'
import cardsData from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='px-16'>
      {/* <section className="w-full h-[500px]  mt-5 flex items-start justify-start pt-10">
        <div className="w-3/12 flex items-start justify-center flex-col px-5">
          <Link href="/" className='mb-5'>
            <Image src="/Logo.png" alt="logo" width={100} height={100} className='w-28 h-12' />
          </Link>
          <h2 className="text-xl font-medium mb-1">Empowering Your Financial Success Globally</h2>
          <p className="text-sm mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, voluptatum?</p>

          <Button text="home" className="w-36 bg-white text-theme hover:bg-theme hover:text-white transition-all duration-200" />
        </div>

        <div className="w-6/12 flex items-center justify-center">
          <Image src="/image 41.png" alt="logo" width={100} height={100} className='w-full h-96' />
        </div>

        <div className="w-3/12 flex items-center justify-center">
          <Image src="/united-states.png" alt="logo" width={100} height={100} className='' />
        </div>
      </section> */}
      <section className="w-full h-auto lg:h-[500px] mt-5 flex flex-wrap items-start justify-between pt-10 px-4">
        {/* Left Section */}
        <div className="w-full sm:w-4/12 lg:w-3/12 flex items-start justify-center flex-col px-5">
          <Link href="/" className="mb-5">
            <Image src="/Logo.png" alt="logo" width={100} height={100} className="w-28 h-12" />
          </Link>
          <h2 className="text-lg lg:text-xl font-medium mb-1 text-center sm:text-left">
            Empowering Your Financial Success Globally
          </h2>
          <p className="text-sm mb-5 text-center sm:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, voluptatum?
          </p>
          <Button
            text="home"
            className="w-36 bg-white text-theme hover:bg-theme hover:text-white transition-all duration-200 mx-auto sm:mx-0"
          />
        </div>

        {/* Center Section */}
        <div className="w-full sm:w-6/12 lg:w-6/12 flex items-center justify-center my-5 sm:my-0 ">
          <Image src="/image 41.png" alt="logo" width={100} height={100} className="w-full h-96" />
        </div>

        {/* Right Section */}
        <div className="w-full sm:w-4/12 lg:w-3/12 flex items-center justify-center ">
          <Image src="/united-states.png" alt="logo" width={100} height={100} className="w-20 h-20" />
        </div>
      </section>


      <section className="w-full">
        <Heading text="Our Expertise, Your Success" />
        <ServiceCard cards={cardsData} />
      </section>

      <section className="w-full h-96 bg-blue-100 text-center">
        <Heading text="Why Choose Us?" />
        <p className="">With decades of experience and a global presence, we deliver reliable financial solutions.</p>
      </section>

      <section className="w-full h-96 bg-blue-100 text-center">
        <Heading text="Stay Updated on Financial Trends" />
        {/* <p className="">With decades of experience and a global presence, we deliver reliable financial solutions.</p> */}
      </section>

      <section className="w-full h-96 bg-blue-100 text-center">
        <Heading text="What Our Clients Say" />
        {/* <p className="">With decades of experience and a global presence, we deliver reliable financial solutions.</p> */}
      </section>

      <section className="w-full  text-center">
        <Heading text="Contact Us" />
        <ContactForm />
      </section>
    </div>
  )
}

export default page