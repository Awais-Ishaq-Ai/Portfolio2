import React, { useState } from 'react';
import hotel from '../../assets/Images/hotel.jpg';
import hotel2 from '../../assets/Images/hotels2.jpg';
import ecommerce from '../../assets/Images/eCommerLanding.jpg';
import ecommerce2 from '../../assets/Images/eCommerceLanding2.jpg';
import refferal from '../../assets/Images/refferal.jpg';
import refferal2 from '../../assets/Images/refferal 2.jpg';

export default function Projects() {
    const [filter, setFilter] = useState("All");

    const products = [
        {
            id: 0,
            img: hotel2,
            img1: hotel,
            text: "Restaurants Website Design"
        },
        {
            id: 1,
            img: ecommerce2,
            img1: ecommerce,
            text: "Ecommerce Website Design"
        },
        {
            id: 2,
            img: refferal2,
            img1: refferal,
            text: "Referral App UI Design"
        }
    ];

    return (
        <>
            <div>
                <div className='flex text-center space-y-5 justify-center items-center flex-col'>
                    <h1 className='text-5xl font-bold'>My projects</h1>
                    <p className='w-[50%] '>Explore my projects showcasing innovative, creative, and user-centered design solutions across various platforms.</p>
                </div>

                {/* Filter Buttons */}
                <div className='flex justify-center my-7'>
                    {["All", "UI", "Web Design", "App Design"].map((item) => (
                        <button
                            key={item}
                            className={`mx-1 bg-slate-400 rounded p-1 focus:${
                                filter === item ? "bg-[#FF6A00] text-white" : ""
                            }`}
                            type="button"
                            onClick={() => setFilter(item)}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {/* Content based on filter */}
                <div className='flex flex-wrap justify-center gap-6'>
                    {(filter === "All" || filter === "Web Design") ? (
                        products.map((product) => (
                            <div
                                className='relative w-[190px] h-[220px] bg-slate-200 shadow rounded flex flex-col items-center'
                                key={product.id}
                            >
                                <div className='mb-5'>
                                    {/* img1 (background) */}
                                    <img
                                        src={product.img1}
                                        className='absolute top-5 left-3 h-[200px] w-[70%] z-50 rounded'
                                        alt="Background"
                                    />

                                    {/* img (foreground) */}
                                    <img
                                        src={product.img}
                                        className='absolute top-0 right-0 h-[220px] w-[70%] z-10 rounded'
                                        alt="Foreground"
                                    />
                                </div>

                                {/* Text */}
                                <div className='absolute -bottom-10 w-full flex justify-between '>
                                    <p className='text-[10px] font-semibold'>
                                        {product.text}
                                    </p>
                                    <button className="bg-[#FF6A00] text-white px-2 py-1 text-[10px] rounded hover:bg-orange-600 transition duration-300">
                                        Demo
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center mt-10 text-lg font-medium text-gray-600">
                            🚧 We are working on these projects.
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
