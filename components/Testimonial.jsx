// components/Testimonials.js
import React from "react";
import Image from "next/image"; // For optimized image loading
import { testimonials } from "../data";

const Testimonials = () => {
  return (
    <section className=" py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">What Our Clients Say</h2>
        <p className="w-3/4 mx-auto leading-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae accusamus cumque minima dolore inventore, possimus qui, illo, doloribus animi corporis voluptatum in iusto sint maxime.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-24 h-24 mx-auto mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={96}
                  height={96}
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              <p className="text-sm text-gray-500">{testimonial.title}</p>
              <p className="text-gray-700 mt-4 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
