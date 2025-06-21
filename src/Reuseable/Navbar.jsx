import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className='flex justify-between items-center px-4 lg:px-25 relative'>
                <div className='font-[700] text-xl'>
                    <span className='bg-[#FF6A00] font-bold text-white px-2 py mr-0. text-xl'>A</span>li Raza
                </div>

                {/* Hamburger icon (mobile only) */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-[#FF6A00] text-2xl focus:outline-none"
                    >
                        {isOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>

                {/* Nav items */}
                <ul className={`
                    md:flex md:items-center md:space-x-4
                    md:opacity-100 md:visible md:scale-y-100
                    absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent z-10
                    origin-top transform transition-all duration-300 ease-in-out
                    ${isOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-0 opacity-0 invisible'}
                `}>
                    <li className='px-2 font-[500] py-2 md:py-6'><a href="">Home</a></li>
                    <li className='px-2 font-[500] py-2 md:py-6'><a href="">About</a></li>
                    <li className='px-2 font-[500] py-2 md:py-6'><a href="">Services</a></li>
                    <li className='px-2 font-[500] py-2 md:py-6'><a href="">Projects</a></li>
                    <li className='px-2 font-[500] py-2 md:py-6'><a href="">Testimonials</a></li>
                    <li className='px-2 font-[500] py-2 md:py-6'><a href="">Contact Us</a></li>
                    <li className='px-5 py-2 md:py-0'>
                        <button className='bg-[#FF6A00] text-white p-2 rounded' type="button">Download CV</button>
                    </li>
                </ul>
            </nav>
        </>
    );
}
