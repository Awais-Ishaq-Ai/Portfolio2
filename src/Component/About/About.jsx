import React from 'react'
import Ali from '../../assets/Images/ali.png'
export default function About() {
    return (
        <>
            <div className='flex justify-between items-center  mt-10 pt-10 relative h-[300px] lg:px-25'>
                <div className='relative w-[250px] h-[250px]'>
                    {/* SVG Blob - Background */}
                    <svg
                        className='absolute top-0 left-0 w-full h-full'
                        viewBox="0 0 396 374"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M13.361 215.895C37.2292 362.678 234.631 439.45 351.389 302.384C434.107 172.3 402.374 84.9246 249.461 28.2877C-51.7874 -70.9839 -1.46862 119.062 13.361 215.895Z"
                            fill="#FF9654"
                        />
                    </svg>

                    {/* Image on top of SVG */}
                    <img
                        src={Ali}
                        alt="Ali"
                        className='absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[200px] w-[]  z-10 border-white'
                    />
                    <div className='absolute -left-5 top-[25%] -z-10 bg-[#FFB78A] h-[50px] w-[50px] rounded-full'></div>
                    <div className='absolute -left-5 top-[60%] -z-10 bg-[#FFB78A] h-[120px] w-[110px] rounded-full'></div>
                </div>

                <div className='flex justify-start items-start flex-col p-1 h-[100%] w-[50%]'>
                    <h1 className='text-4xl font-bold'>About Me</h1>
                    <p className='mt-3 text-justify'>
                        I design stylish, modern, and user-friendly interfaces for websites, web apps, and online stores.
                        My focus is on creating clean, intuitive, and engaging digital experiences. Designing is my passion.
                    </p>

                    {/* Skill Progress Bars */}
                    <div className="w-full mt-5 space-y-5 ">

                        {/* UI Design */}
                        <div className="relative">
                            {/* Label & Percentage */}
                            <div className="flex justify-between ">
                                <span className="text-sm font-medium text-gray-700">UX</span>
                                <span className="text-sm font-medium text-gray-700">100%</span>
                            </div>

                            {/* Progress Bar Container */}
                            <div className="w-full bg-gray-200 rounded-full h-2 relative">
                                {/* Filled Progress */}
                                <div className="bg-[#FF6A00] h-2 rounded-full w-[100%] relative">
                                    {/* White Bubble */}
                                    <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 bg-white h-4 w-4 rounded-full border border-[#FF6A00] shadow" />
                                </div>
                            </div>
                        </div>

                        {/* UX Research */}
                        <div className="relative">
                            {/* Label & Percentage */}
                            <div className="flex justify-between ">
                                <span className="text-sm font-medium text-gray-700">App Design</span>
                                <span className="text-sm font-medium text-gray-700">90%</span>
                            </div>

                            {/* Progress Bar Container */}
                            <div className="w-full bg-gray-200 rounded-full h-2 relative">
                                {/* Filled Progress */}
                                <div className="bg-[#FF6A00] h-2 rounded-full w-[90%] relative">
                                    {/* White Bubble */}
                                    <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 bg-white h-4 w-4 rounded-full border border-[#FF6A00] shadow" />
                                </div>
                            </div>
                        </div>

                        {/* Web Design */}
                        <div className="relative">
                            {/* Label & Percentage */}
                            <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium text-gray-700">Web Design</span>
                                <span className="text-sm font-medium text-gray-700">98%</span>
                            </div>

                            {/* Progress Bar Container */}
                            <div className="w-full bg-gray-200 rounded-full h-2 relative">
                                {/* Filled Progress */}
                                <div className="bg-[#FF6A00] h-2 rounded-full w-[98%] relative">
                                    {/* White Bubble */}
                                    <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 bg-white h-4 w-4 rounded-full border border-[#FF6A00] shadow" />
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>

        </>
    )
}
