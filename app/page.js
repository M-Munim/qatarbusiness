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
    <div className=' px-16'>
      <section className="w-full h-[500px] flex items-start justify-start pt-10">
        <div className="w-3/12 flex items-start justify-center flex-col px-5">
          <Link href="/">
            {/* <Image src="/next.svg" alt="logo" width={100} height={100} className='w-10 h-10' /> */}
            <Image src="/Logo.png" alt="logo" width={100} height={100} className='w-28 h-12' />
          </Link>
          <h2 className="text-2xl">Empowering Your Financial Success Globally</h2>
          <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, voluptatum?</p>

          <Button text="home" className="w-36  bg-white text-theme " />
        </div>

        <div className="w-6/12 flex items-center justify-center">
          <Image src="/image 41.png" alt="logo" width={100} height={100} className='w-full h-96' />
        </div>

        <div className="w-3/12 flex items-center justify-center">
          <Image src="/flag.webp" alt="logo" width={100} height={100} className='w-44  h-36' />
        </div>
      </section>

      <section className="w-full">
        {/* <ServiceCard /> */}
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

      <section className="w-full bg-blue-100 text-center">
        <Heading text="Contact Us" />
        <ContactForm />
      </section>
    </div>
  )
}

export default page