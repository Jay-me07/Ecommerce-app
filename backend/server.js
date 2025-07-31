import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import connectImagekit from './config/imagekit.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

//App Config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()
connectImagekit()

// Middlewear
app.use(cors())
app.use(express.json())


// api endpoints
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order',orderRouter)


app.get('/', (req,res)=>{
    res.send("API Working")
})

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection:', reason);
});


app.listen(port, ()=> console.log('Server started on PORT: '+ port))
