import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import {motion} from 'motion/react'

const CartTotal = () => {

    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  return (
    <div className='w-full'>
       <motion.div
       initial={{ opacity: 0, y: 40 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{duration: 1, delay: 0.5}}
       className='text-2xl'>
         <Title text1={'CART'} text2={'TOTALS'} />
       </motion.div>

       <div className='flex flex-col gap-2 mt-2 text-sm'>
         <div className='flex justify-between'>
           <p>Subtotal</p>
           <p>{currency} {getCartAmount()}.00</p>
         </div>
         <hr />
         <div className='flex justify-between'>
           <p>Shiping fee</p>
           <p>{currency} {delivery_fee}.00</p>
         </div>
         <hr />
         <div className='flex justify-between'>
           <b>Total</b>
           <b>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</b>
         </div>
       </div>
    </div>
  )
}

export default CartTotal