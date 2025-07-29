import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import Newsletterbox from '../components/Newsletterbox'
import {motion} from 'motion/react'

const About = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1}}>

        <motion.div
        initial={{ opacity: 0, y: 40 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{duration: 1, delay: 0.5}}
        className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
        </motion.div>

        <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Welcome to Jame's Jersey , your go-to destination for stylish, high-quality clothing that fits every occasion! We’re passionate about offering trendy and affordable jesrey for men, women, and kids, carefully curated to keep you looking your best. Whether you're searching for casual everyday wear, elegant formal outfits, or the latest seasonal trends, our collection has something for everyone. With a focus on comfort, durability, and customer satisfaction, we strive to make online shopping easy, enjoyable, and hassle-free. Shop with us today and discover the perfect pieces to refresh your wardrobe!</p>
          <p>Whether you're searching for casual everyday wear, elegant formal outfits, or the latest seasonal trends, our collection has something for everyone. With a focus on comfort, durability, and customer satisfaction, we strive to make online shopping easy, enjoyable, and hassle-free. Shop with us today and discover the perfect pieces to refresh your wardrobe!</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Whether you're searching for casual everyday wear, elegant formal outfits, or the latest seasonal trends, our collection has something for everyone. With a focus on comfort, durability, and customer satisfaction, we strive to make online shopping easy, enjoyable, and hassle-free. Shop with us today and discover the perfect pieces to refresh your wardrobe!</p>
        </div>
        </div>

        <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
        </div>

        <div className='flex flex-col md:flex-row text-sm mb-20'>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
             <b>Quality Assurance:</b>
             <p className='text-gray-600'>At Jame's Jersey Shop, we stand out by offering more than just clothes—we deliver style, quality, and an exceptional shopping experience</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
             <b>Convinience:</b>
             <p className='text-gray-600'>Enjoy a seamless online experience with fast checkout, multiple payment options, and secure transactions.</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
             <b>Customer-First Approach:</b>
             <p className='text-gray-600'>Our friendly support team is always ready to help, making sure you have the best shopping experience possible.</p>
            </div>
        </div>

        <Newsletterbox />

    </motion.div>
  )
}

export default About