import express from 'express'
import { placeOrder, placeOrderRazorpay, placeOrderStripe, allOrders, updateStatus, userOrders, verifyStripe, verifyRazorpay } from '../controllers/orderController.js'
import adminAuth from '../middlewear/adminAuth.js'
import authUser from '../middlewear/auth.js'

const orderRouter = express.Router()

//Admin Features
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)

// Payment Features
orderRouter.post('/place',authUser,placeOrder) //Cash On Delivery COD
orderRouter.post('/stripe',authUser,placeOrderStripe)
orderRouter.post('/razorpay',authUser,placeOrderRazorpay)

// User Feature
orderRouter.post('/userorders',authUser,userOrders)

//verify payment
orderRouter.post('/verifyStripe',authUser,verifyStripe)
orderRouter.post('/verifyRazorpay',authUser,verifyRazorpay)

export default orderRouter

