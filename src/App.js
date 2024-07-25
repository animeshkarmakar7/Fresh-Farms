import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shop from './Pages/Shop'
import LoginSignUp from './Pages/LoginSignUp'
import Products from './Pages/Products'
import ProductClick from './Pages/ProductClick'
import Cart from './Pages/Cart'
import ShopContextProvider from './Components/Context/ShopContext'
import Aboutus from './Components/Aboutus/Aboutus'
import Footer from './Footer/Footer'
import Checkout from './Components/Checkout/Checkout'
import ConfirmOrder from './Components/ConfirmOrder/ConfirmOrder'
import SearchResult from './SearchResult/SearchResult'
import BuyNow from './Components/BuyNow/BuyNow'
import Payment from './Payment/Payment'
import BuyPay from './Components/BuyPay/BuyPay'


const App = () => {
  return (
    <div>
     <ShopContextProvider>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
      <Route path='/login' element={<LoginSignUp/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/products' element={<ProductClick/>}>
      <Route path=':productId' element={<ProductClick/>}/>
      </Route>
     <Route path='/cart' element={<Cart/>} />
     <Route path='/About' element={<Aboutus/>} />
     <Route path='/checkout' element={<Checkout/>} />
     <Route path='/confirmOrder' element={<ConfirmOrder/>} />
    <Route path="/product/:id" element={<SearchResult/>}/>
    <Route path='/buynow/:id' element={<BuyNow/>} />
    <Route path='/payment' element={<Payment/>} />
    <Route path='/buypay/:id' element={<BuyPay/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
      </ShopContextProvider>
    </div>
  )
}

export default App
