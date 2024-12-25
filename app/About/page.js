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
          {/* <Image src="/united-states.png" alt="logo" width={100} height={100} className="w-48 h-40" /> */}
          <img src="/united-states.png" alt="" />
        </div>
      </section>

      <section className="w-full text-center px-4 md:px-8">
        <Heading text="Why Choose Us?" />
        <p className="text-sm md:text-base">
          With decades of experience and a global presence, we deliver reliable financial solutions.
        </p>

        <div className="flex flex-col-reverse md:flex-row items-center justify-center mt-5">
          {/* Left Section */}
          <div className="w-full md:w-1/2 px-4 md:px-8 text-start mt-5 md:mt-0">
            <h1 className="text-2xl md:text-3xl font-bold">Empowering Your Financial Success</h1>
            <p className="popins text-xs md:text-sm leading-5 md:leading-6 mt-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non fugiat laborum alias reiciendis debitis, sint saepe
              officiis placeat Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non fugiat laborum alias reiciendis debitis,
              sint saepe officiis placeat et Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. vero aspernatur, sit maiores quam id. In exercitationem repellendus ex harum.
            </p>
            <p className="popins text-xs md:text-sm leading-5 md:leading-6 mt-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non fugiat laborum alias reiciendis debitis, sint saepe
              officiis placeat Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non fugiat laborum alias.
            </p>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img src="./abc.png" alt="Empowering Financial Success" className="w-full max-w-xs md:max-w-sm lg:max-w-md" />
          </div>
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