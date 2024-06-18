/* eslint-disable no-unused-vars */
import React from 'react';
import { HiOutlineEye, HiOutlineClipboardList, HiOutlineChatAlt } from 'react-icons/hi';

export default function About() {
  return (
    <div className='py-10 px-4 max-w-6xl mx-auto'>
      <h1 className='text-3xl font-bold mb-4  text-slate-800'>About Us</h1>
      <h1 className='text-3xl font-bold mb-8  text-blue-500'> Welcome to 
        <span className='text-slate-500'>Elite</span>
        <span className='text-slate-900'>Estates</span>
      </h1>

      <div className='flex flex-col gap-8 pt-7 md:flex-row'>

        <div className='bg-blue-100 rounded-xl hover:scale-105 transition-scale duration-300 p-6'>
          <h1 className='text-xl md:text-3xl font-bold text-pink-700 mb-4'>Our Vision</h1>
          <p className='text-base md:text-lg text-slate-900 font-thin'>
          <HiOutlineEye className="text-4xl text-pink-700 mr-3" />
            Our vision is to transform real estate by integrating innovative technology with outstanding customer service. We ensure a seamless, transparent process for buying, selling, and renting properties. Committed to community involvement and sustainability, we prioritize personalized solutions tailored to client needs. Our approach combines ethical practices with cutting-edge tools, fostering trust and confidence throughout the real estate journey.
          </p>
        </div>

        <div className='bg-blue-100 rounded-xl hover:scale-105 transition-scale duration-300 p-6'>
          <h1 className='text-xl md:text-3xl font-bold text-pink-700 mb-4'>Our Services</h1>
          <p className='text-base md:text-lg text-slate-900 font-thin'>
          <HiOutlineClipboardList className="text-4xl text-pink-700 mr-3" />
          Elite Estates offers diverse real estate services. We assist with residential sales and purchases, providing market analysis, valuations, and strategic marketing. For commercial clients, we find ideal office, retail, and industrial spaces. Our rental services help tenants and landlords with property management. Specializing in luxury and investment properties, we support first-time homebuyers and offer comprehensive relocation assistance. Our property management ensures maintenance and profitability.
          </p>
        </div>

        <div className='bg-blue-100 rounded-xl hover:scale-105 transition-scale duration-300 p-6'>
          <h1 className='text-xl md:text-3xl font-bold text-pink-700 mb-4'>Client Reviews</h1>
          <p className='text-base md:text-lg text-slate-900 font-thin'>
          <HiOutlineChatAlt className="text-4xl text-pink-700 mr-3" />
            Our clients' testimonials highlight our unwavering commitment to excellence. One client appreciated our professionalism and responsiveness, finding their perfect home quickly. Another praised our effective marketing strategy, which led to multiple offers and a higher-than-expected sale price. A first-time homebuyer felt thoroughly supported throughout the process. Clients relocating from another state found our services invaluable. Many commend our team's dedication and professionalism, highly recommending us to others.
          </p>
        </div>
      </div>

      
      
    </div>
  );
}
