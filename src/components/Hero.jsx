import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Hero = () => {

    const navigate = useNavigate();

  return (
    <div className='flex flex-col sm:flex-row border border-gray-400 mt-10'>
        {/*Hero Left Side */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
            <div className='text-[#414141'>
                <div className='flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
                </div>
                <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
                <div className='flex items-center gap-2'>
                <button onClick={() => navigate('/collection')} className='bg-[#F2C9C1] text-white hover:bg-black text-sm px-4 py-4'>SHOP NOW</button>
                    <p className='w-8 md:w-11 h-[1px] bg-[#414141'></p>
                </div>
            </div>
        </div>  
        {/*Hero Right Side */}
        <img className='w-full sm:w-1/2' src={assets.hero_img} alt="hero" />
    </div>
  )
}

export default Hero