import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="mt-20">
      {/* Call to Action */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold">Lets Design Together</h1>
        <p className="w-full md:w-[50%] mx-auto mt-4 text-gray-600">
          to create beautiful and user-friendly digital experiences. By combining your vision
          with my expertise, we’ll build designs that truly connect with your audience and
          stand out.
        </p>

        {/* Email input + button */}
        <div className="mt-6 flex justify-center items-center flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="px-4 py-2 w-[250px] md:w-[300px] rounded border border-gray-300 focus:outline-none"
          />
          <button className="bg-[#FF6A00] text-white px-6 py-2 rounded hover:bg-orange-600 transition duration-300">
            Contact Me
          </button>
        </div>
      </div>

      {/* Footer Main */}
      <div className="bg-[#F5F5F5] py-10 text-center">
        {/* Logo */}
        <div className="flex justify-center items-center gap-2 mb-4">
          <div className="bg-[#FF6A00] text-white font-bold px-2 py-1 rounded">A</div>
          <span className="font-semibold text-lg">Li Raza</span>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center gap-6 text-sm mb-6 flex-wrap">
          <a href="#" className="hover:text-[#FF6A00]">Home</a>
          <a href="#" className="hover:text-[#FF6A00]">About</a>
          <a href="#" className="hover:text-[#FF6A00]">Services</a>
          <a href="#" className="hover:text-[#FF6A00]">Projects</a>
          <a href="#" className="hover:text-[#FF6A00]">Testimonials</a>
          <a href="#" className="hover:text-[#FF6A00]">Contact Us</a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-lg text-gray-700 mb-6">
          <FaFacebookF className="hover:text-[#FF6A00] cursor-pointer" />
          <FaTwitter className="hover:text-[#FF6A00] cursor-pointer" />
          <FaInstagram className="hover:text-[#FF6A00] cursor-pointer" />
          <FaLinkedinIn className="hover:text-[#FF6A00] cursor-pointer" />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#2E2E2E] text-center py-4 text-sm text-white">
        © 2023 <span className="text-[#FF6A00] font-semibold">Ali Raza</span> All Rights Reserved., Inc.
      </div>
    </div>
  );
}
