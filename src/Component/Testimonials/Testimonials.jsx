import React from 'react';
import person from '../../assets/Images/person.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

export default function Testimonials() {
  const slider = [
    {
      id: 0,
      img: person,
      text: "Ali Raza delivered exceptional designs that perfectly matched our vision. His attention to detail and user-focused approach truly elevated our product, exceeding expectations and boosting.",
      name: "Awais Ishaq",
      title: "CEO"
    },
    {
      id: 1,
      img: person,
      text: "His creative direction added a fresh perspective to our project. We loved the clarity and user journey throughout the whole design.",
      name: "Fiaz Hussain",
      title: "Founder"
    }
  ];

  return (
    <div className='mt-25 px-4'>
      <div className='flex justify-center items-center flex-col text-center mb-10'>
        <h1 className='text-5xl font-bold'>Testimonials</h1>
        <p className='w-full md:w-[60%] text-gray-600 mt-2'>
          Read client testimonials highlighting my innovative, creative, and user-centered design solutions and collaboration.
        </p>
      </div>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className="w-full md:w-[80%] mx-auto"
      >
        {slider.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="bg-white p-6 rounded-xl shadow-md opacity-100 scale-95 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <img
                src={slide.img}
                className="h-[100px] w-[100px] rounded-full object-cover"
                alt="Client"
              />
              <div className="text-left">
                <p className="text-sm md:text-base text-gray-700 mb-3 relative">
                  <span className="text-[#FF6A00] text-xl font-bold absolute -left-5 -top-2">“</span>
                  {slide.text}
                  <span className="text-[#FF6A00] text-xl font-bold">”</span>
                </p>
                <h4 className="font-bold text-lg">{slide.name}</h4>
                <p className="text-sm text-gray-500">{slide.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}