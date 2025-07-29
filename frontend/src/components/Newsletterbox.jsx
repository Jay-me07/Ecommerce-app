import React from 'react'
import {motion, easeOut} from 'motion/react'

const Newsletterbox = () => {
    
    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

  return (
    <motion.div
    initial={{ opacity: 0, y: 40 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{duration: 1, delay: 0.5, ease: easeOut}}
    className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now and get 20% off</p>
        <p className='text-gray-400 mt-3'>
            Get notified when new products arrive or when there are amazing offers in your email
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input type="email" placeholder='Enter your Email' className='w-full sm:flex-1 outline-none' required />
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
        </form>
    </motion.div>
  )
}

export default Newsletterbox