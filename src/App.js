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
      </Routes>
      <Footer/>
      </BrowserRouter>
      </ShopContextProvider>
    </div>
  )
}

export default App
