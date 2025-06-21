import React from 'react'
import APP from '../../assets/Images/APP.png'
import Web from '../../assets/Images/Web.png'
import UI from '../../assets/Images/UI.png'

export default function Services() {
  return (
    <>
      <div className='flex justify-center items-center flex-col mt-10 md:space-y-8'>
        <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold'>Services</h1>

        <p className='w-[90%] md:w-[70%] lg:w-[50%] text-center'>
          I specialize in designing modern and responsive interfaces for websites, web apps, and online stores. My focus is on creating user-centered designs that deliver seamless and engaging digital experiences.
        </p>

        <div className='flex flex-col md:flex-row md:flex-wrap md:justify-center lg:justify-between w-full px-4 md:px-10 lg:w-[80%] space-y-6 md:space-y-0 md:space-x-4 lg:space-x-0'>
          <div className='w-full shadow-2xl shadow-gray-500 md:w-[45%] lg:w-[32%] min-h-[280px] rounded-2xl bg-[#E4E4E4] p-5 flex justify-center items-center flex-col mb-15'>
            <img src={UI} className='w-[40px] h-[40px]' alt="UI/UX" />
            <h2 className='text-2xl md:text-3xl font-bold mt-2'>UI/UX</h2>
            <p className='text-center mt-2'>I design intuitive interfaces focused on great user experiences.</p>
          </div>

          <div className='w-full shadow-2xl shadow-gray-500 md:w-[45%] lg:w-[33%] min-h-[280px] rounded-2xl bg-[#E4E4E4] p-5 flex justify-center items-center flex-col mb-15'>
            <img src={Web} className='w-[40px] h-[40px]' alt="Web Design" />
            <h2 className='text-2xl md:text-3xl font-bold mt-2'>Web Design</h2>
            <p className='text-center mt-2'>I create modern, fully responsive, and visually appealing websites.</p>
          </div>

          <div className='w-full shadow-2xl shadow-gray-500 md:w-[45%] lg:w-[32%] min-h-[280px] rounded-2xl bg-[#E4E4E4] p-5 flex justify-center items-center flex-col mb-15'>
            <img src={APP} className='w-[40px] h-[40px]' alt="App Design" />
            <h2 className='text-2xl md:text-3xl font-bold mt-2'>App Design</h2>
            <p className='text-center mt-2'>I design clean and user-friendly mobile app interfaces.</p>
          </div>
        </div>
      </div>
    </>
  )
}
