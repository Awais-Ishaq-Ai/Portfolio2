import React from 'react'

export default function Projects() {
  return (
    <>
    <div>
        <div className='flex text-center space-y-5 justify-center items-center flex-col'>
            <h1 className='text-5xl font-bold'>My projects</h1>
            <p className='w-[50%] '>Explore my projects showcasing innovative, creative, and user-centered design solutions across various platforms.</p>
        </div>

        <div>
            <div className='flex justify-center my-7'> 
                <button className='mx-1 bg-slate-400 rounded p-1 focus:bg-[#FF6A00] focus:text-white' type="button">All</button>
                <button className='mx-1 bg-slate-400 rounded p-1 focus:bg-[#FF6A00] focus:text-white' type="button">UI</button>
                <button className='mx-1 bg-slate-400 rounded p-1 focus:bg-[#FF6A00] focus:text-white' type="button">UI UX</button>
                <button className='mx-1 bg-slate-400 rounded p-1 focus:bg-[#FF6A00] focus:text-white' type="button">Web Design</button>
                <button className='mx-1 bg-slate-400 rounded p-1 focus:bg-[#FF6A00] focus:text-white' type="button">App Design</button>
            </div>

            
        </div>
    </div>
    </>
  )
}
