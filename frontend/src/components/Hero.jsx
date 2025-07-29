import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import {motion} from 'motion/react'


const Hero = () => {
  return (
    <motion.div 
    initial={{y: 50, opacity: 0}}
    animate={{opacity: 1}}
    transition={{ duration: 0.8, delay: 0.5 }}
    className='flex flex-col sm:flex-row border border-gray-400'>
        {/* Hero Left */}
        <motion.div
        initial={{ opacity: 0, y: 40 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{duration: 1, delay: 0.5}}
        className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
          <div className='text-[#414141]'>
            <div className='flex items-center gap-2'>
              <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
              <p className='font-medium text-sm md:text-base'>OUR BEST SELLER</p>
            </div>
            <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
            <div className='flex items-center gap-2'>
              <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
              <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
            </div>
          </div>
        </motion.div>
        {/* Hero Right */}
        <img src={assets.hero_img} className='w-full sm:w-1/2' alt="" />
    </motion.div>
  )
}

export default Hero