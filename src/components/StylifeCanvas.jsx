import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400 mb-10'>
        {/*Hero Left Side */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
            <div className='text-[#414141'>
                <div className='flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    <p className='font-medium text-sm md:text-base'>Dive Into 3D World</p>
                </div>
                <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Let's Stylife</h1>
                <div className='flex items-center gap-2'>
                <button onClick={() => window.open("https://google.com", "_blank", "noopener noreferrer")} className='bg-[#EFBD4E] text-white text-sm px-4 py-4'>CUSTOMIZE NOW</button>
                    <p className='w-8 md:w-11 h-[1px] bg-[#414141'></p>
                </div>
            </div>
        </div>  
        {/*Hero Right Side */}
        <img className='w-full sm:w-1/2' src={assets.shirt_img} alt="hero" />
    </div>
  )
}

export default Hero