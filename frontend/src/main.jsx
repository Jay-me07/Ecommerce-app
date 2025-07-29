import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ShopContextProvider from './context/ShopContext.jsx'
import {MotionConfig} from 'motion/react'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ShopContextProvider>
    <MotionConfig>
       <App />
    </MotionConfig>
  </ShopContextProvider>
  </BrowserRouter>,
)
