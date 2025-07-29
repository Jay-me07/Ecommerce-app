import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title'
import ProductItem from './ProductItem';
import {motion} from 'motion/react'

const BestSeller = () => {
    
    const { products } = useContext(ShopContext);
    const [bestSeller,setBestSeller] = useState([]);

    useEffect(()=>{
        const bestProduct = products.filter((item)=>(item.bestSeller));
        setBestSeller(bestProduct.slice(0,5))
    },[products])

  return (
    <motion.div
    initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="my-10"
    >
        <motion.div 
        initial={{ opacity: 0, y: 40 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{duration: 1, delay: 0.5}}
        className='text-center py-8 text-3xl'>
          <Title text1={'BEST'} text2={'SELLERS'} />
          <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Customers seems to order these alot. Best Quality for Best Prices.Value for money!
          </p>
        </motion.div>

        <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
       whileInView={{ opacity: 1, scale: 1 }}
       transition={{duration: 0.4, ease: "easeOut"}} 
        className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
           {
            bestSeller.map((item,index)=>(
                <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
            ))
           } 
        </motion.div>
    </motion.div>
  )
}

export default BestSeller